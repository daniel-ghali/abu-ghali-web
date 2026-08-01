import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { startInstance as baseStartInstance } from "./start";

type StartServerInstance = typeof baseStartInstance & {
  fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> | Response;
};

let serverEntryPromise: Promise<{ fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response }> | undefined;

async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as { fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response },
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};

function appendSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) {
      headers.set(key, value);
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const startInstance = Object.create(baseStartInstance) as StartServerInstance;

if (typeof baseStartInstance.getOptions === "function") {
  startInstance.getOptions = baseStartInstance.getOptions.bind(baseStartInstance);
}

startInstance.fetch = async function fetch(request: Request, env: unknown, ctx: unknown) {
  try {
    const handler = await getServerEntry();
    const response = await handler.fetch(request, env, ctx);
    return appendSecurityHeaders(await normalizeCatastrophicSsrResponse(response));
  } catch (error) {
    console.error(error);
    return appendSecurityHeaders(
      new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      }),
    );
  }
};

export { startInstance };
export default startInstance;

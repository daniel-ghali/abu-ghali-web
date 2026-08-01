import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { statSync } from "node:fs";
import type {} from "@tanstack/react-start";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

const routePriorities: Record<string, SitemapEntry> = {
  "/": { path: "/", changefreq: "daily", priority: "1.0" },
  "/capabilities": { path: "/capabilities", changefreq: "weekly", priority: "0.9" },
  "/products": { path: "/products", changefreq: "weekly", priority: "0.9" },
  "/industries": { path: "/industries", changefreq: "weekly", priority: "0.85" },
  "/about": { path: "/about", changefreq: "monthly", priority: "0.8" },
  "/factory": { path: "/factory", changefreq: "monthly", priority: "0.8" },
  "/projects": { path: "/projects", changefreq: "monthly", priority: "0.8" },
  "/quality": { path: "/quality", changefreq: "monthly", priority: "0.75" },
  "/careers": { path: "/careers", changefreq: "monthly", priority: "0.65" },
  "/news": { path: "/news", changefreq: "weekly", priority: "0.65" },
  "/blog": { path: "/blog", changefreq: "weekly", priority: "0.65" },
  "/downloads": { path: "/downloads", changefreq: "monthly", priority: "0.6" },
  "/certificates": { path: "/certificates", changefreq: "monthly", priority: "0.6" },
  "/contact": { path: "/contact", changefreq: "monthly", priority: "0.7" },
  "/quote": { path: "/quote", changefreq: "monthly", priority: "0.85" },
};

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const routeFiles = import.meta.glob("./*.tsx", { eager: true });
        const paths = Object.keys(routeFiles)
          .filter((file) => !file.includes("__root.tsx") && !file.includes("sitemap[.]xml.ts"))
          .map((file) => {
            const filename = file.replace("./", "").replace(/\.tsx$/, "");
            return filename === "index" ? "/" : `/${filename}`;
          })
          .sort();

        const entries = paths.map((path) => {
          const route = routePriorities[path] ?? { path, changefreq: "monthly", priority: "0.6" };
          const filePath = `./${path === "/" ? "index" : path.substring(1)}.tsx`;
          const lastmod = statSync(new URL(filePath, import.meta.url)).mtime.toISOString();
          return { ...route, lastmod };
        });

        const urls = entries.map((entry) => [
          `  <url>`,
          `    <loc>${absoluteUrl(entry.path)}</loc>`,
          entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
          entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
          entry.priority ? `    <priority>${entry.priority}</priority>` : null,
          `  </url>`,
        ].filter(Boolean).join("\n"));

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
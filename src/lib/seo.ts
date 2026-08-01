export const SITE_URL = "https://abughali-eg.net";
export const SITE_NAME = "Abu Ghali Modern Industries";
export const DEFAULT_LOCALE = "en_US";
export const DEFAULT_IMAGE = "/favicon.ico";
export const DEFAULT_IMAGE_WIDTH = "1200";
export const DEFAULT_IMAGE_HEIGHT = "630";
export const DEFAULT_IMAGE_TYPE = "image/x-icon";

export function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

function getImageMimeType(imageUrl: string) {
  const extension = imageUrl.split(".").pop()?.split(/[?#]/)[0]?.toLowerCase();
  switch (extension) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    case "avif":
      return "image/avif";
    case "svg":
      return "image/svg+xml";
    default:
      return DEFAULT_IMAGE_TYPE;
  }
}

export function routeSeo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  preloadImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  preloadImage?: boolean;
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const preloadLinks = preloadImage
    ? [{ rel: "preload", as: "image", href: imageUrl }]
    : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:locale", content: DEFAULT_LOCALE },
      { property: "og:image", content: imageUrl },
      { property: "og:image:secure_url", content: imageUrl },
      { property: "og:image:type", content: DEFAULT_IMAGE_TYPE },
      { property: "og:image:alt", content: title },
      { property: "og:image:width", content: DEFAULT_IMAGE_WIDTH },
      { property: "og:image:height", content: DEFAULT_IMAGE_HEIGHT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:url", content: url },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:src", content: imageUrl },
      { name: "twitter:image:alt", content: title },
      { "script:ld+json": getWebPageJsonLd({ path, title, description }) },
      { "script:ld+json": getBreadcrumbJsonLd({ path, name: title }) },
    ],
    links: [{ rel: "canonical", href: url }, ...preloadLinks],
  };
}

export function getBreadcrumbJsonLd({ path, name }: { path: string; name: string }) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  if (path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name,
      item: absoluteUrl(path),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function getWebPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
      name: SITE_NAME,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: absoluteUrl(path),
        },
      ],
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/favicon.ico"),
        description: "Egyptian industrial manufacturer of CNC machining, castings, water flanges and hydraulic assemblies.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alexandria Street, off El-Trolley Street, Factory No. 26",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+20 101 618 4004",
            email: "info@abughali-eg.net",
            availableLanguage: ["English", "Arabic"],
          },
        ],
      },
      {
        "@type": "WebSite",
        url: SITE_URL,
        name: SITE_NAME,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

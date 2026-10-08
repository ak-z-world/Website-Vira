import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://crackleap.vertexloop.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: [
          "ChatGPT-User",
          "PerplexityBot",
          "CCBot",
          "Google-Extended",
          "anthropic-ai",
          "ClaudeBot",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

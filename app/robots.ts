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
        disallow: ["/api/"],
      },
      {
        // AI *search* crawlers — these fetch pages to answer live user
        // questions in ChatGPT Search, Perplexity, Claude and AI Overviews.
        // Explicitly allowed so CrackLeap can be cited in AI answers.
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "Claude-SearchBot",
          "Claude-User",
          "Applebot",
          "DuckDuckBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // AI *training* crawlers — allowed by policy choice at this growth
        // stage (brand knowledge in future models). Blocking these would
        // NOT remove the site from AI search answers; revisit if content
        // licensing ever matters.
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "anthropic-ai",
          "CCBot",
          "Google-Extended",
          "Bytespider",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

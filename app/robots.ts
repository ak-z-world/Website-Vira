// app/robots.ts
import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// ─── PATH CONSTANTS ───────────────────────────────────────────────────────────

const ALWAYS_BLOCK = [
  "/api/",
  "/_next/",
  "/admin/",
  "/private/",
  "/dashboard/",
  "/checkout/",
  "/auth/",
];

// Public content paths that search engines and AI answer engines should index
const PUBLIC_ALLOW = [
  "/",
  "/courses/",
  "/locations/",
  "/resources/",
  "/resources/roadmaps/",
  "/resources/interview-questions/",
  "/resources/tutorials/",
  "/resources/projects/",
  "/blog/",
  "/about",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ═══════════════════════════════════════════════════════════════════════
      // TIER 1 — PRIMARY SEARCH ENGINES (Full access)
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "Googlebot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/*.png", "/*.jpg", "/*.webp", "/*.svg"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Applebot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "DuckDuckBot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "YandexBot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 2 — AI SEARCH & ANSWER ENGINES (AEO / GEO Optimization)
      // Enable discovery in Google AI Overviews, Perplexity, ChatGPT Search, Claude
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "OAI-SearchBot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "ChatGPT-User",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "GPTBot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "PerplexityBot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "ClaudeBot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Claude-Web",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Google-Extended",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Applebot-Extended",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 3 — SOCIAL PREVIEW BOTS (Link previews)
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Slackbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Discordbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 4 — DEFAULT CATCH-ALL RULE
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "*",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
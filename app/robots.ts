// app/robots.ts
import { MetadataRoute } from "next";

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

// Public content paths that search engines should index
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
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ═══════════════════════════════════════════════════════════════════════
      // TIER 1 — PRIMARY SEARCH ENGINES (Full access, specific blocks)
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "Googlebot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/",
          "/*.png",
          "/*.jpg",
          "/*.webp",
          "/*.svg",
        ],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Storebot-Google",
        allow: "/courses/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Bingbot",
        allow: PUBLIC_ALLOW,
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Baiduspider-render",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "YandexImages",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 2 — SOCIAL PREVIEW BOTS (Allow — link previews)
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "facebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Twitterbot",
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
      {
        userAgent: "Pinterest",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "redditbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 3 — AI TRAINING BOTS (BLOCK ALL)
      // ═══════════════════════════════════════════════════════════════════════

      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "OAI-SearchBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "Gemini", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "meta-externalagent", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "YouBot", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "omgili", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "ImagesiftBot", disallow: "/" },
      { userAgent: "img2dataset", disallow: "/" },
      { userAgent: "Timpibot", disallow: "/" },
      { userAgent: "AI2Bot", disallow: "/" },
      { userAgent: "Ai2Bot-Dolma", disallow: "/" },
      { userAgent: "iaskspider", disallow: "/" },
      { userAgent: "magpie-crawler", disallow: "/" },
      { userAgent: "Scrapy", disallow: "/" },
      { userAgent: "DataForSeoBot", disallow: "/" },
      { userAgent: "PanguBot", disallow: "/" },
      { userAgent: "Kangaroo Bot", disallow: "/" },
      { userAgent: "wp_is_mobile", disallow: "/" },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 4 — SEO TOOL SCRAPERS (BLOCK)
      // ═══════════════════════════════════════════════════════════════════════

      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "SemrushBot-SA", disallow: "/" },
      { userAgent: "SemrushBot-CT", disallow: "/" },
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
      { userAgent: "BLEXBot", disallow: "/" },
      { userAgent: "PetalBot", disallow: "/" },
      { userAgent: "serpstatbot", disallow: "/" },
      { userAgent: "SEOkicks", disallow: "/" },
      { userAgent: "seoscanbot", disallow: "/" },
      { userAgent: "sistrix", disallow: "/" },
      { userAgent: "seobilitybot", disallow: "/" },
      { userAgent: "RyteBot", disallow: "/" },
      { userAgent: "SiteAuditBot", disallow: "/" },
      { userAgent: "MegaIndex", disallow: "/" },
      { userAgent: "opensiteexplorer", disallow: "/" },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 5 — DEFAULT RULE (catch-all)
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/dashboard/",
          "/checkout/",
          "/auth/",
          "/404",
          "/500",
        ],
      },
    ],

    sitemap: "https://academy.arivuon.in/sitemap.xml",
  };
}
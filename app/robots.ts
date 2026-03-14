// app/robots.ts
import { MetadataRoute } from "next";

// ─── PATH CONSTANTS ───────────────────────────────────────────────────────────
// Centralised so you update once, applies everywhere

const ALWAYS_BLOCK = [
  "/api/",          // API routes — never expose to crawlers
  "/_next/",        // Next.js build internals
  "/admin/",        // Admin panel (future-proof)
  "/private/",      // Any private sections
  "/dashboard/",    // Student dashboard (future-proof)
  "/checkout/",     // Payment flow pages — don't index
  "/auth/",         // Login / signup pages
];

// ─── CRAWL DELAY STRATEGY ─────────────────────────────────────────────────────
// Major search engines ignore crawl-delay but we set it for scrapers.
// Prevents your Vercel serverless functions from being hammered.
// NOTE: Next.js MetadataRoute.Robots doesn't have crawlDelay field,
// so scrapers needing delay get full block instead. This is intentional.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 1 — PRIMARY SEARCH ENGINES (Full access, specific blocks)
      // These drive your organic traffic. Give them maximum access.
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/courses/",   // Explicit allow for course pages — reinforces intent
          "/about",
          "/contact",
          "/faq",
          "/blog/",      // Allow when ready
        ],
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/",
          "/*.png",      // OG images — critical for Google Image Search
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
        userAgent: "Storebot-Google", // Google Shopping (future-proof for paid courses)
        allow: "/courses/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Slurp",          // Yahoo (powered by Bing)
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Baiduspider",    // Baidu — China market reach
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "Baiduspider-render", // Baidu JS rendering bot
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "YandexBot",      // Yandex — Russia/CIS market reach
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },
      {
        userAgent: "YandexImages",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Applebot",       // Apple Spotlight, Siri search
        allow: "/",
        disallow: ALWAYS_BLOCK,
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 2 — SOCIAL PREVIEW BOTS (Allow — these generate link previews)
      // When someone shares your course link on LinkedIn/Twitter/WhatsApp,
      // these bots fetch your OG tags to build the preview card.
      // Blocking them = ugly blank previews when shared = fewer clicks.
      // ═══════════════════════════════════════════════════════════════════════

      {
        userAgent: "facebot",        // Facebook / Instagram link preview
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Twitterbot",     // Twitter/X card preview
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "LinkedInBot",    // LinkedIn post preview
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "WhatsApp",       // WhatsApp link preview
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "TelegramBot",    // Telegram link preview
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Slackbot",       // Slack link unfurl
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Discordbot",     // Discord link embed
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Pinterest",      // Pinterest Rich Pins
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "redditbot",      // Reddit link preview
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 3 — AI TRAINING BOTS (BLOCK ALL)
      // These bots scrape your content to train LLMs.
      // They give ZERO SEO benefit. Your course content is your IP.
      // Block them all — this list is comprehensive as of mid-2025.
      // ═══════════════════════════════════════════════════════════════════════

      { userAgent: "GPTBot",              disallow: "/" }, // OpenAI
      { userAgent: "ChatGPT-User",        disallow: "/" }, // OpenAI browsing
      { userAgent: "OAI-SearchBot",       disallow: "/" }, // OpenAI search
      { userAgent: "anthropic-ai",        disallow: "/" }, // Anthropic
      { userAgent: "Claude-Web",          disallow: "/" }, // Anthropic browsing
      { userAgent: "ClaudeBot",           disallow: "/" }, // Anthropic (new name)
      { userAgent: "Google-Extended",     disallow: "/" }, // Google AI training (NOT search)
      { userAgent: "Gemini",              disallow: "/" }, // Google Gemini
      { userAgent: "CCBot",               disallow: "/" }, // Common Crawl → feeds most AI training
      { userAgent: "FacebookBot",         disallow: "/" }, // Meta AI training (≠ facebot)
      { userAgent: "meta-externalagent",  disallow: "/" }, // Meta AI (new agent)
      { userAgent: "Bytespider",          disallow: "/" }, // ByteDance / TikTok AI
      { userAgent: "PerplexityBot",       disallow: "/" }, // Perplexity AI
      { userAgent: "YouBot",              disallow: "/" }, // You.com AI
      { userAgent: "cohere-ai",           disallow: "/" }, // Cohere AI
      { userAgent: "Omgilibot",           disallow: "/" }, // Webz.io data broker
      { userAgent: "omgili",              disallow: "/" }, // Webz.io (old name)
      { userAgent: "Diffbot",             disallow: "/" }, // Diffbot AI scraper
      { userAgent: "ImagesiftBot",        disallow: "/" }, // Image AI training
      { userAgent: "img2dataset",         disallow: "/" }, // Dataset builder
      { userAgent: "Timpibot",            disallow: "/" }, // Timpi AI
      { userAgent: "AI2Bot",              disallow: "/" }, // Allen Institute AI
      { userAgent: "Ai2Bot-Dolma",        disallow: "/" }, // Allen Institute dataset
      { userAgent: "iaskspider",          disallow: "/" }, // iAsk.ai
      { userAgent: "magpie-crawler",      disallow: "/" }, // Magpie AI
      { userAgent: "Scrapy",              disallow: "/" }, // Generic scraper framework
      { userAgent: "DataForSeoBot",       disallow: "/" }, // Data harvester
      { userAgent: "PanguBot",            disallow: "/" }, // Huawei AI
      { userAgent: "Kangaroo Bot",        disallow: "/" },
      { userAgent: "wp_is_mobile",        disallow: "/" }, // WordPress data harvester

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 4 — SEO TOOL SCRAPERS (BLOCK)
      // These scrape your site to build reports for your COMPETITORS.
      // They show your keyword strategy, backlinks, and page structure
      // to anyone who pays for an SEMrush/Ahrefs subscription.
      // ═══════════════════════════════════════════════════════════════════════

      { userAgent: "SemrushBot",          disallow: "/" },
      { userAgent: "SemrushBot-SA",       disallow: "/" }, // SEMrush site audit
      { userAgent: "SemrushBot-CT",       disallow: "/" }, // SEMrush content tools
      { userAgent: "AhrefsBot",           disallow: "/" },
      { userAgent: "MJ12bot",             disallow: "/" }, // Majestic SEO
      { userAgent: "DotBot",              disallow: "/" }, // Moz
      { userAgent: "BLEXBot",             disallow: "/" },
      { userAgent: "PetalBot",            disallow: "/" }, // Huawei search scraper
      { userAgent: "serpstatbot",         disallow: "/" },
      { userAgent: "SEOkicks",            disallow: "/" },
      { userAgent: "seoscanbot",          disallow: "/" },
      { userAgent: "sistrix",             disallow: "/" }, // SISTRIX SEO tool
      { userAgent: "seobilitybot",        disallow: "/" }, // Seobility
      { userAgent: "RyteBot",             disallow: "/" },
      { userAgent: "SiteAuditBot",        disallow: "/" },
      { userAgent: "MegaIndex",           disallow: "/" },
      { userAgent: "opensiteexplorer",    disallow: "/" }, // Old Moz crawler

      // ═══════════════════════════════════════════════════════════════════════
      // TIER 5 — DEFAULT RULE (catch-all for unlisted bots)
      // Any bot not specifically listed above gets basic access
      // but blocked from sensitive paths.
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

    // ── Sitemap declaration ──────────────────────────────────────────────────
    // Submit this exact URL in Google Search Console → Sitemaps
    // Also submit to: Bing Webmaster Tools, Yandex.Webmaster
    sitemap: "https://academy.arivuon.in/sitemap.xml",

    // NOTE: 'host' directive removed intentionally.
    // It was a Yandex-specific directive, now deprecated and
    // causes "Unrecognized directive" warnings in Google Search Console.
    // Your canonical URLs in metadata handle this correctly instead.
  };
}
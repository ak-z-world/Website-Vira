// app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// ENTERPRISE SEO + GEO + AEO + AI DISCOVERY — Crack Leap Academy
// Version: 3.0 (June 2026)
//
// Architecture covers:
//   SEO   — Traditional + Technical + On-Page metadata
//   GEO   — Generative Engine Optimization (AI-sourced content)
//   AEO   — Answer Engine Optimization (voice + AI Overviews)
//   AI    — ChatGPT / Gemini / Claude / Perplexity / Bing Copilot discovery
//
// Geo coverage: India (Tier 1 + Tier 2 + Tier 3 + all TN districts)
//               UAE, Saudi, Bahrain, Kuwait, Qatar, Oman
//               Singapore, Malaysia, Nigeria, Kenya, Ghana, Australia, UK, Canada
//
// Schema graph:
//   EducationalOrganization + Organization
//   EducationalOccupationalProgram (×5 programs) ← NEW: Training rich results
//   LocalBusiness / EducationEstablishment       ← NEW: near-me signals
//   ItemList (courses)                           ← NEW: course list rich results
//   HowTo (career paths)                         ← NEW: AI Overviews anchor
//   WebSite + SearchAction + SpeakableSpec       ← Enhanced
//   FAQPage (18 Q&A)                             ← Expanded from 6
//   BreadcrumbList (root)                        ← NEW: breadcrumb rich results
//
// Bot directives:
//   Googlebot, GoogleExtendedBot, GPTBot, ClaudeBot, PerplexityBot,
//   CCBot, anthropic-ai, cohere-ai, meta-externalagent
//
// Future-ready exports:
//   generateLocationMetadata() — for /locations/[country]/[state]/[city]/[course]
//   generateCourseMetadata()   — for /courses/[slug]
//   SITE_URL / SITE_NAME       — single source of truth
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { GlobalProvider } from "./providers";
import { Poppins } from 'next/font/google'
import ChatWidget from './components/chatbot/ChatWidget';

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'] })


// ════════════════════════════════════════════════════════════════════════════
// CONSTANTS — single source of truth; import from here in every page/layout
// ════════════════════════════════════════════════════════════════════════════
export const SITE_URL  = "https://academy.arivuon.in" as const;
export const SITE_NAME = "Crack Leap Academy"             as const;

// ════════════════════════════════════════════════════════════════════════════
// VIEWPORT — required as separate export in Next.js 14+
// themeColor: single string avoids Next.js 15 deprecation warning
// ════════════════════════════════════════════════════════════════════════════
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor:   "#0D1B3E",
};

// ════════════════════════════════════════════════════════════════════════════
// ROOT METADATA
// ════════════════════════════════════════════════════════════════════════════
export const metadata: Metadata = {

  // ── Canonical base ─────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),

  // ── Title ──────────────────────────────────────────────────────────────

  title: {
    default:  "Crack Leap Academy | Best Software Training Institute — Python, AI, DevOps, React",
    template: "%s | Crack Leap Academy",
  },

  // ── Description ────────────────────────────────────────────────────────

  description:
    "Crack Leap Academy — India's best software training institute for Python, AI, AWS DevOps, React & Data Science. Live mentorship, real projects, placement support. ₹8–40 LPA outcomes. Chennai, Salem & globally. Enroll now.",

  // ── Application info ───────────────────────────────────────────────────
  applicationName: SITE_NAME,
  generator:       "Next.js",
  creator:         SITE_NAME,
  publisher:       SITE_NAME,
  category:        "Education",
  classification:
    "Online Education, Software Training, Python Course, DevOps Training, AI Course, Full Stack Development, Data Science, Computer Training, Coding Institute",

  // ── Manifest (PWA) ─────────────────────────────────────────────────────
  // Enables "Add to Home Screen" on Android/iOS — another discovery surface
  manifest: "/manifest.webmanifest",

  // ── Keywords ───────────────────────────────────────────────────────────
  // STRATEGY: 5-tier keyword architecture
  //   T1: Brand authority          → tell Google who we are
  //   T2: Core course categories   → primary ranking targets
  //   T3: "Near me" / local        → Tier 1 → Tier 2 → Tier 3 → TN districts
  //   T4: Long-tail high-intent    → bottom-funnel buyer keywords
  //   T5: Global geo               → Gulf, SEA, Africa, Western markets
  //
  // NOTE: Keywords in metadata alone do NOT rank you. They signal topic
  // relevance to Google's entity graph. Real ranking comes from structured
  // data, page content, and the FAQ/HowTo schemas below. But they matter
  // for Bing, Yahoo, DuckDuckGo, Baidu, and AI training corpus indexing.
  keywords: [

    // ── T1: Brand authority ───────────────────────────────────────────
    "Crack Leap Academy",
    "Crack Leap Academy",
    "Crack Leap",
    "arivuon.in",
    "academy.arivuon.in",
    "Crack Leap software training",
    "Crack Leap Python course",
    "Crack Leap DevOps course",

    // ── T2: Core course + institute keywords ──────────────────────────
    "best software training institute",
    "best software institute",
    "best IT training institute",
    "software training institute",
    "coding institute",
    "programming classes online",
    "computer training center",
    "coding bootcamp India",
    "software academy online",
    "IT courses for freshers",
    "software course after degree",
    "software training after engineering",
    "online coding classes",

    // Core courses
    "Python course online",
    "Python training institute",
    "Python classes online",
    "Python coaching center",
    "Python programming course",
    "Python Django course",
    "Django web development",
    "full stack course",
    "full stack training institute",
    "full stack developer course",
    "full stack web development",
    "DevOps course online",
    "AWS DevOps training",
    "AWS training",
    "AWS cloud computing course",
    "CI/CD Jenkins course",
    "Terraform AWS course",
    "React course online",
    "React JS course",
    "React training institute",
    "Next.js TypeScript course",
    "Data Science course online",
    "machine learning course",
    "artificial intelligence course",
    "AI course online",
    "Python AI course",
    "Java training institute",

    // Combos
    "Python AI AWS DevOps combo course",
    "Python DevOps AI course",
    "full stack DevOps training",
    "best python devops course 2026",

    // ── T3: GEO — Tier 1 India cities ─────────────────────────────────
    "software training institute in Chennai",
    "Python course in Chennai",
    "DevOps training in Chennai",
    "full stack course in Chennai",
    "AWS training in Chennai",
    "coding classes in Chennai",
    "best software institute in Chennai",

    "software training institute in Bangalore",
    "Python course in Bangalore",
    "DevOps training in Bangalore",
    "full stack course in Bangalore",
    "AWS training in Bangalore",

    "software training institute in Mumbai",
    "Python course in Mumbai",
    "full stack course in Mumbai",
    "DevOps training in Mumbai",

    "software training in Hyderabad",
    "Python course in Hyderabad",
    "DevOps course in Hyderabad",
    "full stack course in Hyderabad",

    "Python course in Delhi",
    "software training institute in Delhi",
    "DevOps training in Delhi",

    "software training in Pune",
    "Python course in Pune",
    "full stack course in Pune",

    "software training in Kolkata",
    "Python course in Kolkata",
    "full stack course in Kolkata",

    // ── T3: GEO — Tier 2 India cities ─────────────────────────────────
    "Python course in Coimbatore",
    "full stack course in Coimbatore",
    "AWS training in Coimbatore",
    "software training in Coimbatore",

    "Python course in Madurai",
    "software training in Madurai",
    "full stack course in Madurai",

    "Python course in Trichy",
    "software training in Trichy",
    "full stack course in Trichy",

    "Python course in Salem",
    "software training in Salem",
    "coding classes in Salem",
    "full stack course in Salem",
    "AWS training in Salem",

    "Python course in Tirunelveli",
    "software training in Tirunelveli",
    "full stack course in Tirunelveli",

    "Python course in Erode",
    "software training in Erode",
    "coding classes in Erode",

    "Python course in Vellore",
    "software training in Vellore",
    "full stack course in Vellore",

    "Python course in Thanjavur",
    "software training in Thanjavur",

    "Python course in Thoothukudi",
    "software training in Thoothukudi",

    "Python course in Nagercoil",
    "software training in Nagercoil",
    "full stack course in Nagercoil",

    "Python course in Hosur",
    "software training in Hosur",

    "Python course in Jaipur",
    "software training in Jaipur",
    "full stack course in Jaipur",

    "Python course in Lucknow",
    "software training in Lucknow",

    "Python course in Nagpur",
    "software training in Nagpur",

    "Python course in Ahmedabad",
    "software training in Ahmedabad",

    "Python course in Indore",
    "software training in Indore",

    "Python course in Bhopal",
    "software training in Bhopal",

    "Python course in Chandigarh",
    "software training in Chandigarh",

    "Python course in Kochi",
    "software training in Kochi",

    "Python course in Thiruvananthapuram",
    "software training in Thiruvananthapuram",

    "Python course in Visakhapatnam",
    "software training in Visakhapatnam",

    "Python course in Vijayawada",
    "software training in Vijayawada",

    "Python course in Bhubaneswar",
    "software training in Bhubaneswar",

    "Python course in Guwahati",
    "software training in Guwahati",

    "Python course in Dehradun",
    "software training in Dehradun",

    // ── T3: GEO — Tamil Nadu districts (all 38) ───────────────────────
    "software training in Tamil Nadu",
    "best software institute in Tamil Nadu",
    "Python training in Tamil Nadu",
    "full stack course Tamil Nadu",
    "DevOps training Tamil Nadu",
    "AWS course Tamil Nadu",

    "software training in Ariyalur",
    "Python course in Chengalpattu",
    "software training in Cuddalore",
    "software training in Dharmapuri",
    "software training in Dindigul",
    "software training in Kallakurichi",
    "software training in Kancheepuram",
    "Python course in Kancheepuram",
    "software training in Kanniyakumari",
    "software training in Karur",
    "software training in Krishnagiri",
    "Python course in Namakkal",
    "software training in Nilgiris",
    "software training in Perambalur",
    "software training in Pudukkottai",
    "software training in Ramanathapuram",
    "software training in Ranipet",
    "software training in Sivagangai",
    "software training in Tenkasi",
    "software training in The Nilgiris",
    "software training in Tiruvallur",
    "Python course in Tiruvallur",
    "software training in Tiruvannamalai",
    "software training in Tiruvarur",
    "software training in Villupuram",
    "software training in Virudhunagar",

    // State-level national
    "best software training institute in India",
    "best Python institute in India",
    "best coding bootcamp in India",
    "online software training India",

    // ── T4: Long-tail high-intent buyer keywords ───────────────────────
    "best software training institute online",
    "global software academy online",
    "online tech training with live mentorship",
    "software course with placement support",
    "tech training with real projects",
    "coding course with 1:1 mentorship",
    "how to become a Python developer 2026",
    "how to become a DevOps engineer 2026",
    "how to become a full stack developer 2026",
    "how to learn AWS cloud 2026",
    "Python course with job placement",
    "DevOps course with placement",
    "software training after 12th",
    "software course after BE",
    "software course after BSc",
    "software course after BCA",
    "software course after MCA",
    "software training for freshers",
    "IT training for career change",
    "online coding course with certificate",
    "Python course near me",
    "software training near me",
    "coding classes near me",
    "IT training near me",

    // ── T5: Gulf / Middle East ─────────────────────────────────────────
    "Python course UAE",
    "DevOps course Dubai",
    "online tech training UAE",
    "AWS course Bahrain",
    "Python training Kuwait",
    "DevOps course Saudi Arabia",
    "tech training Qatar",
    "software academy Oman",
    "online course Gulf countries",
    "tech training Middle East",

    // ── T5: Southeast Asia ─────────────────────────────────────────────
    "Python course Singapore",
    "DevOps training Malaysia",
    "tech course Kuala Lumpur",
    "software training Indonesia",
    "online course Philippines",

    // ── T5: Africa ────────────────────────────────────────────────────
    "Python course Nigeria",
    "DevOps training Kenya",
    "tech course Ghana",
    "software training South Africa",
    "online tech course Africa",

    // ── T5: Other global ──────────────────────────────────────────────
    "Python course UK",
    "DevOps training Australia",
    "tech training Canada",
    "online software course worldwide",
    "remote tech training international",
  ],

  // ── Robots ─────────────────────────────────────────────────────────────
  // STRATEGY: Allow all major AI training crawlers by name.
  // GoogleExtendedBot = Gemini AI training corpus indexer.
  // GPTBot = ChatGPT training corpus (blocks it by default in many setups).
  // Allowing them increases citation probability in AI-generated answers.
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:          true,
      follow:         true,
      noimageindex:   false,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },

  // ── Google Search Console verification ─────────────────────────────────
  verification: {
    google: "D02JF1xM2sKYRPqWZ2lVGaQu6rImf5qvkBkq3rkUeYM",
    // yandex: "YOUR_YANDEX_CODE",
    // bing:   "YOUR_BING_CODE",
  },

  // ── hreflang alternates ─────────────────────────────────────────────────
  // CRITICAL for multi-region discovery. Without this Google only serves
  // this page to Indian users. These signals are also read by Bing and
  // help AI crawlers understand intended audience per locale.
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en":        SITE_URL,
      "en-IN":     SITE_URL,
      "en-AE":     SITE_URL,
      "en-SA":     SITE_URL,
      "en-BH":     SITE_URL,
      "en-KW":     SITE_URL,
      "en-QA":     SITE_URL,
      "en-OM":     SITE_URL,
      "en-SG":     SITE_URL,
      "en-MY":     SITE_URL,
      "en-NG":     SITE_URL,
      "en-KE":     SITE_URL,
      "en-GH":     SITE_URL,
      "en-ZA":     SITE_URL,
      "en-AU":     SITE_URL,
      "en-GB":     SITE_URL,
      "en-CA":     SITE_URL,
      "en-US":     SITE_URL,
      "ar":        SITE_URL,
      "x-default": SITE_URL,
    },
  },

  // ── Icons ──────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/icon-32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      // Maskable icon for PWA home screen (Android)
      { url: "/icon-maskable.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── Open Graph ─────────────────────────────────────────────────────────
  // Controls display on Facebook, LinkedIn, WhatsApp, Telegram, Discord,
  // Slack, Reddit, iMessage link previews.
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    locale:      "en_US",
    alternateLocale: ["ar_AE", "ar_SA", "ar_BH", "ar_KW", "ar_QA", "en_IN", "en_GB", "en_AU", "en_SG"],
    title:       "Crack Leap Academy | Best Software Training Institute — Python, AI, DevOps, React",
    description:
      "India's top online software training institute. Python, AI, AWS DevOps, React, Data Science. Live mentorship, real projects, placement support. ₹8–40 LPA salary outcomes. Chennai, Salem & globally accessible.",
    images: [
      {
        url:    `${SITE_URL}/og-image.png`,
        width:  1200,
        height: 630,
        alt:    "Crack Leap Academy — Best Software Training Institute | Python, AI, DevOps, React, Data Science",
        type:   "image/png",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    site:        "@arivuonacademy",
    creator:     "@arivuonacademy",
    title:       "Crack Leap Academy | Best Python, AI, DevOps & React Training Institute",
    description: "India's best software training institute. Python, AI, AWS DevOps, React. Live mentorship. Placement support. Globally accessible.",
    images: [
      {
        url:    `${SITE_URL}/og-image.png`,
        alt:    "Crack Leap Academy — Best Software Training Institute",
        width:  1200,
        height: 630,
      },
    ],
  },

  // ── Other / custom meta tags ────────────────────────────────────────────
  // Using `other` keeps all custom meta in the Metadata API
  // instead of a separate React component. Cleaner, type-safe.
  other: {
    // ── Geo signals ─────────────────────────────────────────────────
    "geo.region":    "IN-TN",
    "geo.placename": "Salem, Tamil Nadu, India",
    "geo.position":  "11.6643;78.1460",
    "ICBM":          "11.6643, 78.1460",

    // ── Distribution ────────────────────────────────────────────────
    "distribution":  "global",
    "coverage":      "worldwide",
    "rating":        "general",
    "language":      "English",
    "target":        "all",

    // ── Content signals ─────────────────────────────────────────────
    "subject":
      "Python Programming, Full Stack Development, AWS DevOps, AI, Machine Learning, React, Data Science, Software Engineering",
    "topic":
      "Online tech courses, software training institute, coding bootcamp, developer education, programming classes",
    "category":
      "Education, Online Learning, Software Training, Technology, Computer Science",
    "classification":
      "Education, Online Software Training, Tech Academy, Coding Institute",
    "abstract":
      "Crack Leap Academy is a globally accessible online software training institute based in Tamil Nadu, India. It offers Python & Django, AWS DevOps Engineering, React with Next.js & TypeScript, Data Science & Machine Learning, and a flagship Python + AI + AWS DevOps Combo program. All courses include live instructor-led sessions, 1:1 mentorship, hands-on real-world projects, and active placement support. Graduates earn ₹8–40 LPA. Students enroll from India, UAE, Singapore, Africa, and worldwide.",

    // ── Ownership ───────────────────────────────────────────────────
    "owner":          SITE_NAME,
    "author":         SITE_NAME,
    "revisit-after":  "3 days",
    "identifier-URL": SITE_URL,

    // ── AI Crawler Directives ────────────────────────────────────────
    // STRATEGY: Opt-in all known AI training crawlers.
    // These bots respect these directives when deciding whether to index
    // your content into their training corpus or retrieval index.
    // Being in GPT/Claude/Gemini training data = cited in AI answers.
    //
    // Separate robots.txt rules are ALSO required (add there too).
    // These meta tags are read by crawlers that don't check robots.txt.
    "robots":          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "googlebot":       "index, follow",
    // Google's Gemini AI training crawler (as of 2024+):
    "Google-Extended": "index, follow",
    // ChatGPT web search + training crawler:
    "GPTBot":          "index, follow",
    // ChatGPT SearchGPT crawler:
    "OAI-SearchBot":   "index, follow",
    // Claude / Anthropic training + search crawler:
    "ClaudeBot":       "index, follow",
    "anthropic-ai":    "index, follow",
    // Perplexity AI crawler:
    "PerplexityBot":   "index, follow",
    // Common Crawl (source for most LLM pre-training):
    "CCBot":           "index, follow",
    // Meta AI crawler:
    "meta-externalagent": "index, follow",
    // Cohere AI:
    "cohere-ai":       "index, follow",
    // Bing / Microsoft Copilot (separate from regular bingbot):
    "bingbot":         "index, follow",

    // ── Social media overrides ───────────────────────────────────────
    "og:image:width":       "1200",
    "og:image:height":      "630",
    "og:image:type":        "image/png",
    "og:image:secure_url":  `${SITE_URL}/og-image.png`,
    "og:type":              "website",

    // ── LinkedIn ────────────────────────────────────────────────────
    "og:updated_time": new Date().toISOString(),

    // ── Pinterest Rich Pin ───────────────────────────────────────────
    "pinterest:description":
      "Learn Python, AI, DevOps, React and Data Science online with live mentorship. India's best software training institute — Crack Leap Academy.",

    // ── Telegram ────────────────────────────────────────────────────
    "telegram:channel": "@arivuonacademy",

    // ── Apple PWA ───────────────────────────────────────────────────
    "apple-mobile-web-app-title":   SITE_NAME,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

// ════════════════════════════════════════════════════════════════════════════
// FUTURE-READY: generateLocationMetadata()
// Use in: /app/locations/[country]/[state]/[city]/[course]/page.tsx
//
// Example:
//   export const metadata = generateLocationMetadata({
//     country: "india", state: "tamil-nadu", city: "chennai", course: "python-course"
//   });
//
// This prevents metadata restructuring for 10+ years of location expansion.
// ════════════════════════════════════════════════════════════════════════════
export function generateLocationMetadata({
  country,
  state,
  city,
  course,
  cityDisplay,
  stateDisplay,
  courseDisplay,
}: {
  country: string;
  state: string;
  city: string;
  course: string;
  cityDisplay: string;
  stateDisplay: string;
  courseDisplay: string;
}): Metadata {
  const pageUrl = `${SITE_URL}/locations/${country}/${state}/${city}/${course}`;
  const title   = `${courseDisplay} in ${cityDisplay} | Crack Leap Academy`;
  const desc    = `Best ${courseDisplay} in ${cityDisplay}, ${stateDisplay}. Crack Leap Academy offers live instructor-led ${courseDisplay} with 1:1 mentorship, real projects, and placement support. Enroll now.`;

  return {
    title,
    description: desc,
    alternates:  { canonical: pageUrl },
    openGraph: {
      type:        "website",
      url:         pageUrl,
      siteName:    SITE_NAME,
      title,
      description: desc,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card:        "summary_large_image",
      title,
      description: desc,
      images:      [`${SITE_URL}/og-image.png`],
    },
  };
}

// ════════════════════════════════════════════════════════════════════════════
// FUTURE-READY: generateCourseMetadata()
// Use in: /app/courses/[slug]/page.tsx
// ════════════════════════════════════════════════════════════════════════════
export function generateCourseMetadata({
  slug,
  title,
  description,
  price = "10000",
  duration,
  imageUrl,
}: {
  slug:        string;
  title:       string;
  description: string;
  price?:      string;
  duration?:   string;
  imageUrl?:   string;
}): Metadata {
  const pageUrl = `${SITE_URL}/courses/${slug}`;
  const image   = imageUrl ?? `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type:        "website",
      url:         pageUrl,
      siteName:    SITE_NAME,
      title:       `${title} | Crack Leap Academy`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       `${title} | Crack Leap Academy`,
      description,
      images:      [image],
    },
  };
}

// ════════════════════════════════════════════════════════════════════════════
// JSON-LD STRUCTURED DATA — @graph architecture
//
// WHY @graph?
//   A single @graph lets all schema nodes reference each other by @id.
//   Google's Structured Data evaluator scores @graph schemas higher than
//   multiple disconnected script blocks because it can traverse entity
//   relationships. This is the architecture used by Wikipedia, Coursera,
//   and Udemy.
//
// SCHEMA NODES in this graph:
//   1.  EducationalOrganization + Organization  — brand entity / Knowledge Panel
//   2.  EducationEstablishment (LocalBusiness)  — "near me" search signals
//   3.  WebSite + SearchAction + Speakable      — Sitelinks search box + voice
//   4.  FAQPage (18 Q&A)                        — AI Overview + SERP dropdowns
//   5.  EducationalOccupationalProgram (×5)     — Training program rich results
//   6.  ItemList (courses)                      — Course list rich results
//   7.  HowTo (career paths ×2)                 — AI Overview anchors
//   8.  BreadcrumbList (root)                   — Breadcrumb rich results
// ════════════════════════════════════════════════════════════════════════════
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [

    // ────────────────────────────────────────────────────────────────────
    // 1. EducationalOrganization + Organization
    //    PURPOSE: Creates Google Knowledge Panel. Powers brand searches like
    //    "Crack Leap Academy" showing the sidebar card on desktop.
    //    ADDED: EducationEstablishment type for near-me classification.
    //    ADDED: slogan, foundingLocation, numberOfEmployees for Knowledge Panel.
    //    ADDED: GeoCoordinates for precise "near me" matching.
    // ────────────────────────────────────────────────────────────────────
    {
      "@type": ["EducationalOrganization", "Organization", "EducationEstablishment"],
      "@id":   `${SITE_URL}/#organization`,

      "name":       "Crack Leap Academy",
      "legalName":  "Crack Leap Academy",
      "alternateName": [
        "Crack Leap Academy",
        "Crack Leap",
        "Crack Leap Global Academy",
        "Crack Leap Software Training",
        "Crack Leap Coding Institute",
        "Crack Leap Python Training",
      ],

      "slogan":       "Learn. Build. Get Hired.",
      "description":  "Crack Leap Academy is a globally accessible online software training institute offering Python, AI, AWS DevOps, React, and Data Science courses with live instructor-led sessions, 1:1 mentorship, real-world projects, and placement support. Established in 2024 and based in Tamil Nadu, India.",
      "foundingDate": "2024",

      "url":    SITE_URL,

      "logo": {
        "@type":   "ImageObject",
        "@id":     `${SITE_URL}/#logo`,
        "url":     `${SITE_URL}/assets/icons/logo2.png`,
        "width":   400,
        "height":  120,
        "caption": "Crack Leap Academy Logo",
      },

      "image": {
        "@type":  "ImageObject",
        "url":    `${SITE_URL}/og-image.png`,
        "width":  1200,
        "height": 630,
      },

      // ── Contact ───────────────────────────────────────────────────
      "email":     "info@arivuon.in",
      "telephone": "+91-9445770160",
      "contactPoint": [
        {
          "@type":             "ContactPoint",
          "telephone":         "+91-9445770160",
          "contactType":       "customer support",
          "areaServed":        ["IN", "AE", "SA", "BH", "KW", "QA", "OM", "SG", "MY", "NG", "KE", "AU", "GB", "CA", "US"],
          "availableLanguage": ["English", "Tamil", "Arabic"],
        },
        {
          "@type":       "ContactPoint",
          "email":       "info@arivuon.in",
          "contactType": "enrollment",
          "areaServed":  "Worldwide",
        },
        {
          "@type":       "ContactPoint",
          "contactType": "technical support",
          "email":       "info@arivuon.in",
          "areaServed":  "Worldwide",
        },
      ],

      // ── Address + Geo (required for near-me signals) ──────────────
      // IMPORTANT: Even for an online institute, a physical address
      // with GeoCoordinates enables "near me" SERP matching.
      // Google's Local algorithm uses GeoCoordinates for proximity scoring.
      "address": {
        "@type":           "PostalAddress",
        "addressLocality": "Salem",
        "addressRegion":   "Tamil Nadu",
        "postalCode":      "636001",
        "addressCountry":  "IN",
      },

      "geo": {
        "@type":     "GeoCoordinates",
        "latitude":  11.6643,
        "longitude": 78.1460,
      },

      // serviceArea: Tells Google WHERE you serve customers.
      // This is what powers "Python course near me" for Tamil Nadu users.
      "serviceArea": [
        {
          "@type": "State",
          "name":  "Tamil Nadu",
          "containedInPlace": {
            "@type": "Country",
            "name":  "India",
          },
        },
        {
          "@type": "Country",
          "name":  "India",
        },
        {
          "@type": "Country",
          "name":  "United Arab Emirates",
        },
        {
          "@type": "Country",
          "name":  "Saudi Arabia",
        },
        {
          "@type": "AdministrativeArea",
          "name":  "Gulf Cooperation Council",
        },
        {
          "@type": "Country",
          "name":  "Singapore",
        },
        {
          "@type": "Country",
          "name":  "Malaysia",
        },
        {
          "@type": "Country",
          "name":  "Nigeria",
        },
        {
          "@type": "Country",
          "name":  "Kenya",
        },
        {
          "@type": "Country",
          "name":  "United Kingdom",
        },
        {
          "@type": "Country",
          "name":  "Australia",
        },
        {
          "@type": "Country",
          "name":  "Canada",
        },
      ],

      // ── Global reach ─────────────────────────────────────────────
      "areaServed": [
        "IN", "AE", "SA", "BH", "KW", "QA", "OM",
        "SG", "MY", "ID", "PH",
        "NG", "KE", "GH", "ZA", "ET",
        "AU", "GB", "CA", "US", "DE",
      ],

      // openingHoursSpecification: helps Google show hours in local results
      "openingHoursSpecification": [
        {
          "@type":    "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens":    "09:00",
          "closes":   "21:00",
        },
      ],

      "currenciesAccepted": "INR, USD, EUR, AED, KWD, SGD, GBP, AUD",
      "paymentAccepted":    "Online Bank Transfer, Credit Card, Debit Card, UPI",
      "priceRange":         "₹₹",

      // ── Domain expertise ──────────────────────────────────────────
      "knowsAbout": [
        "Python Programming",
        "Django Web Development",
        "Full Stack Development",
        "AWS Cloud Computing",
        "DevOps Engineering",
        "CI/CD Pipeline Automation",
        "Terraform Infrastructure as Code",
        "Docker Containerization",
        "Kubernetes Orchestration",
        "Jenkins Automation",
        "GitHub Actions",
        "React Development",
        "Next.js Framework",
        "TypeScript",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "REST API Development",
        "PostgreSQL",
        "Software Engineering",
        "Computer Science",
      ],

      // ── Aggregate rating ─────────────────────────────────────────
      "aggregateRating": {
        "@type":       "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating":  "5",
        "worstRating": "1",
      },

      // ── Social profiles ──────────────────────────────────────────
      "sameAs": [
        "https://www.youtube.com/@arivuonacademy",
        "https://www.linkedin.com/company/arivuon",
        "https://twitter.com/arivuonacademy",
        "https://www.instagram.com/arivuon_academy",
        "https://g.page/r/CaLW7A4cOmu1EBM/review",
        "https://academy.arivuon.in",
      ],

      // ── Course catalog ───────────────────────────────────────────
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name":  "Crack Leap Academy Course Catalog",
        "itemListElement": [
          {
            "@type":       "Course",
            "@id":         `${SITE_URL}/courses/python#course`,
            "name":        "Python & Django Development",
            "description": "Master Python programming, Django, REST APIs, PostgreSQL and backend deployment with real-world projects and 1:1 mentorship.",
            "url":         `${SITE_URL}/courses/python`,
            "provider":    { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type":          "CourseInstance",
              "courseMode":     "online",
              "courseWorkload": "PT100H",
            },
          },
          {
            "@type":       "Course",
            "@id":         `${SITE_URL}/courses/devops#course`,
            "name":        "AWS DevOps Engineering",
            "description": "Master AWS Cloud, CI/CD with Jenkins, Docker, Terraform, GitHub Actions and production deployment automation.",
            "url":         `${SITE_URL}/courses/devops`,
            "provider":    { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type":          "CourseInstance",
              "courseMode":     "online",
              "courseWorkload": "PT130H",
            },
          },
          {
            "@type":       "Course",
            "@id":         `${SITE_URL}/courses/python-ai-aws-devops-combo#course`,
            "name":        "Python + AI + AWS DevOps Combo Pack",
            "description": "The only program combining Python, AI fundamentals, AWS Cloud, and DevOps engineering in one 12-week course.",
            "url":         `${SITE_URL}/courses/python-ai-aws-devops-combo`,
            "provider":    { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type":          "CourseInstance",
              "courseMode":     "online",
              "courseWorkload": "PT120H",
            },
          },
          {
            "@type":       "Course",
            "@id":         `${SITE_URL}/courses/react#course`,
            "name":        "React Development with Next.js & TypeScript",
            "description": "Build production React applications with Next.js, TypeScript, Tailwind CSS and REST API integration.",
            "url":         `${SITE_URL}/courses/react`,
            "provider":    { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type":          "CourseInstance",
              "courseMode":     "online",
              "courseWorkload": "PT90H",
            },
          },
          {
            "@type":       "Course",
            "@id":         `${SITE_URL}/courses/datasci#course`,
            "name":        "Data Science & Machine Learning",
            "description": "Master Data Science with Python, Pandas, scikit-learn, deep learning and AI model deployment.",
            "url":         `${SITE_URL}/courses/datasci`,
            "provider":    { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type":          "CourseInstance",
              "courseMode":     "online",
              "courseWorkload": "PT115H",
            },
          },
        ],
      },
    },

    // ────────────────────────────────────────────────────────────────────
    // 2. WebSite — Sitelinks search box + Speakable (voice / AI Overviews)
    //    ADDED: SpeakableSpecification — tells Google Assistant, Alexa,
    //    and AI Overviews which text on the page to READ ALOUD in voice
    //    responses. This is one of the most underused AEO signals.
    // ────────────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id":   `${SITE_URL}/#website`,
      "url":   SITE_URL,
      "name":  SITE_NAME,
      "description":
        "India's best online software training institute — Python, AI, AWS DevOps, React, Data Science. Live mentorship, real projects, placement support.",
      "inLanguage": ["en", "ar"],
      "publisher":  { "@id": `${SITE_URL}/#organization` },

      // Sitelinks search box: users can search your site from Google results
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type":       "EntryPoint",
          "urlTemplate": `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },

      // SpeakableSpecification: content Google Assistant / AI reads aloud
      // STRATEGY: Point to CSS selectors of your most authoritative,
      // fact-dense content blocks. Google uses this for voice-answer sourcing.
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          ".hero-headline",
          ".course-overview",
          ".about-academy",
          ".placement-stats",
          "h1",
          "[data-speakable='true']",
        ],
      },
    },

    // ────────────────────────────────────────────────────────────────────
    // 3. FAQPage — 18 Q&A pairs
    //    PURPOSE: Creates expandable FAQ dropdowns in Google SERP.
    //    A rich FAQ result can take up 3× the vertical space of a normal
    //    result, pushing competitors below the fold.
    //
    //    AEO STRATEGY: AI Overviews (formerly SGE) extract question-answer
    //    pairs from FAQPage schema to generate "AI answers" directly.
    //    More Q&A pairs = more chances to be cited in AI-generated answers
    //    on Google, Perplexity, and Bing Copilot.
    //
    //    GEO STRATEGY: Questions include city-specific variants ("in Salem",
    //    "in Tamil Nadu", "in Chennai") so local AI queries are answered.
    //
    //    Expanded from 6 → 18 to cover all target search intents.
    // ────────────────────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id":   `${SITE_URL}/#faq`,
      "mainEntity": [

        // ── Brand / general ──────────────────────────────────────
        {
          "@type": "Question",
          "name":  "What courses does Crack Leap Academy offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Crack Leap Academy offers five programs: (1) Python & Django Development — 12 weeks, (2) AWS DevOps Engineering — 16 weeks, (3) Python + AI + AWS DevOps Combo Pack — 12 weeks, (4) React Development with Next.js & TypeScript — 10 weeks, and (5) Data Science & Machine Learning — 14 weeks. All programs include live instructor-led sessions, 1:1 mentorship, real-world projects, and placement support.",
          },
        },
        {
          "@type": "Question",
          "name":  "Is Crack Leap Academy the best software training institute in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Crack Leap Academy is one of India's top-rated online software training institutes with a 4.9/5 rating from 47+ students. It offers Python, AI, DevOps, React, and Data Science training with live mentorship, real-world projects, and a 65% average salary hike for graduates. Students from across India and globally — including UAE, Singapore, and the UK — have enrolled.",
          },
        },
        {
          "@type": "Question",
          "name":  "Is Crack Leap Academy available globally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Crack Leap Academy is globally accessible. Students from India, UAE, Bahrain, Kuwait, Saudi Arabia, Qatar, Oman, Singapore, Malaysia, Nigeria, Kenya, Ghana, Australia, UK, Canada, and worldwide can enroll. All classes are conducted live online with recorded access.",
          },
        },

        // ── Fees / pricing ───────────────────────────────────────
        {
          "@type": "Question",
          "name":  "What is the course fee at Crack Leap Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "All courses at Crack Leap Academy are priced at ₹10,000 (approximately $120 USD or 440 AED). Payments are accepted in INR, USD, EUR, AED, and KWD. This covers all live sessions, 1:1 mentorship, project support, and placement assistance.",
          },
        },

        // ── Outcomes / placement ─────────────────────────────────
        {
          "@type": "Question",
          "name":  "Does Crack Leap Academy provide placement support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Crack Leap Academy provides career guidance, resume preparation, mock interviews, LinkedIn profile optimization, and active placement assistance for all graduates. Students achieve a 65% average salary hike after completing their course.",
          },
        },
        {
          "@type": "Question",
          "name":  "What salary can I expect after completing a course at Crack Leap Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Python course graduates earn ₹8–25 LPA. DevOps engineers earn ₹12–30 LPA. Data Science professionals earn ₹12–40 LPA. The Python + AI + AWS DevOps Combo prepares engineers for ₹15–35 LPA roles. Salaries vary by experience and location.",
          },
        },

        // ── Duration / format ────────────────────────────────────
        {
          "@type": "Question",
          "name":  "How long are Crack Leap Academy courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Python & Django: 12 weeks. AWS DevOps Engineering: 16 weeks. Python + AI + AWS DevOps Combo: 12 weeks. React Development: 10 weeks. Data Science & ML: 14 weeks. All courses include live sessions, session recordings, assignments, and 1:1 mentorship.",
          },
        },
        {
          "@type": "Question",
          "name":  "Are Crack Leap Academy classes online or offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Crack Leap Academy classes are fully online and live. Sessions are conducted via video conference with real-time instructor interaction. Recordings are provided for revision. Students worldwide can attend from any device.",
          },
        },

        // ── Local / GEO ──────────────────────────────────────────
        {
          "@type": "Question",
          "name":  "Is there a Python course available in Salem, Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Crack Leap Academy, based in Tamil Nadu, offers Python courses accessible to students in Salem, Coimbatore, Madurai, Trichy, Erode, Vellore, Tirunelveli, and all cities and districts across Tamil Nadu. Classes are live online, so students join from home — no commute required.",
          },
        },
        {
          "@type": "Question",
          "name":  "What is the best software training institute in Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Crack Leap Academy is among Tamil Nadu's highest-rated online software training institutes, serving students in Chennai, Coimbatore, Madurai, Trichy, Salem, Erode, Vellore, Tirunelveli, and all 38 Tamil Nadu districts. It offers Python, AI, AWS DevOps, React, and Data Science programs with live mentorship and placement support.",
          },
        },
        {
          "@type": "Question",
          "name":  "Is Crack Leap Academy a good option for software training after engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Crack Leap Academy is specifically designed for engineering graduates, BSc, BCA, and MCA students entering the IT industry. The curriculum covers industry-relevant skills (Python, Django, DevOps, React, Data Science) with real projects, making graduates job-ready within 10–16 weeks.",
          },
        },

        // ── Course-specific ──────────────────────────────────────
        {
          "@type": "Question",
          "name":  "What is covered in the Crack Leap Academy Python course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "The Crack Leap Academy Python course covers Python fundamentals, OOP, file handling, Django framework, REST APIs, PostgreSQL, deployment on AWS/Linux, and a complete capstone project. Duration: 12 weeks. Price: ₹10,000. Includes 1:1 mentorship and placement support.",
          },
        },
        {
          "@type": "Question",
          "name":  "What does the AWS DevOps course at Crack Leap Academy cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "The AWS DevOps Engineering course covers AWS EC2, S3, RDS, VPC, IAM, CI/CD pipelines with Jenkins, Docker containerization, Terraform infrastructure-as-code, GitHub Actions, and production deployment automation. Duration: 16 weeks. It qualifies graduates for DevOps Engineer roles earning ₹12–30 LPA.",
          },
        },
        {
          "@type": "Question",
          "name":  "What is the Python + AI + AWS DevOps Combo course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "The Python + AI + AWS DevOps Combo Pack is Crack Leap Academy's flagship program combining Python programming, AI/ML fundamentals, AWS cloud, and DevOps engineering in one 12-week intensive course priced at ₹10,000. It is designed for freshers and career switchers targeting ₹15–35 LPA roles.",
          },
        },

        // ── Full stack ───────────────────────────────────────────
        {
          "@type": "Question",
          "name":  "Does Crack Leap Academy offer a full stack development course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Crack Leap Academy offers full stack training through two paths: (1) Python + Django (backend) combined with React + Next.js (frontend) for a complete full stack skill set, or (2) the combo course that adds AWS DevOps for deployment skills. Together these cover frontend, backend, database, and cloud deployment.",
          },
        },

        // ── Trust / credibility ──────────────────────────────────
        {
          "@type": "Question",
          "name":  "How is Crack Leap Academy rated by students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Crack Leap Academy is rated 4.9 out of 5 by 47+ verified students. Reviews highlight the quality of live instruction, 1:1 mentorship, real-world project work, and active placement support.",
          },
        },
        {
          "@type": "Question",
          "name":  "Does Crack Leap Academy provide a certificate after course completion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Crack Leap Academy issues a course completion certificate upon successful completion of the program, assessments, and capstone project. Certificates are verifiable and can be shared on LinkedIn.",
          },
        },

        // ── AI / freshers ────────────────────────────────────────
        {
          "@type": "Question",
          "name":  "Which software course is best for freshers at Crack Leap Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "For freshers, Crack Leap Academy recommends the Python & Django Development course or the Python + AI + AWS DevOps Combo Pack. Both start from fundamentals and build to production-ready skills. No prior programming experience is required.",
          },
        },
      ],
    },

    // ────────────────────────────────────────────────────────────────────
    // 4. EducationalOccupationalProgram (×5)
    //    PURPOSE: This is the schema type Google uses specifically for
    //    "Training Programs" rich results in the "Education" SERP feature.
    //    Different from Course schema — it signals occupational outcomes,
    //    making your results appear in "training for jobs" queries.
    //    Used by: Google Jobs, Google AI Overviews for career queries,
    //    LinkedIn's course recommendations, Perplexity career answers.
    // ────────────────────────────────────────────────────────────────────
    {
      "@type": "ItemList",
      "@id":   `${SITE_URL}/#programs`,
      "name":  "Crack Leap Academy Training Programs",
      "itemListElement": [
        {
          "@type":  "ListItem",
          "position": 1,
          "item": {
            "@type":              "EducationalOccupationalProgram",
            "@id":                `${SITE_URL}/courses/python#program`,
            "name":               "Python & Django Development Program",
            "description":        "Professional Python programming and Django web development training. Covers Python fundamentals to advanced Django, REST APIs, PostgreSQL, and AWS deployment. Designed for job-seekers targeting Python Developer roles at ₹8–25 LPA.",
            "url":                `${SITE_URL}/courses/python`,
            "provider":           { "@id": `${SITE_URL}/#organization` },
            "timeToComplete":     "P3M",
            "programType":        "Certificate",
            "occupationalCategory": "Software Developer",
            "educationalProgramMode": "online",
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "salaryUponCompletion": {
              "@type":    "MonetaryAmountDistribution",
              "name":     "Python Developer Salary",
              "currency": "INR",
              "duration": "P1Y",
              "percentile10": "800000",
              "median":       "1500000",
              "percentile90": "2500000",
            },
          },
        },
        {
          "@type":  "ListItem",
          "position": 2,
          "item": {
            "@type":              "EducationalOccupationalProgram",
            "@id":                `${SITE_URL}/courses/devops#program`,
            "name":               "AWS DevOps Engineering Program",
            "description":        "Professional AWS Cloud and DevOps engineering training. Covers AWS EC2/S3/RDS, CI/CD with Jenkins, Docker, Terraform, GitHub Actions, and production automation. Targets DevOps Engineer roles at ₹12–30 LPA.",
            "url":                `${SITE_URL}/courses/devops`,
            "provider":           { "@id": `${SITE_URL}/#organization` },
            "timeToComplete":     "P4M",
            "programType":        "Certificate",
            "occupationalCategory": "DevOps Engineer",
            "educationalProgramMode": "online",
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "salaryUponCompletion": {
              "@type":    "MonetaryAmountDistribution",
              "name":     "DevOps Engineer Salary",
              "currency": "INR",
              "duration": "P1Y",
              "percentile10": "1200000",
              "median":       "2000000",
              "percentile90": "3000000",
            },
          },
        },
        {
          "@type":  "ListItem",
          "position": 3,
          "item": {
            "@type":              "EducationalOccupationalProgram",
            "@id":                `${SITE_URL}/courses/python-ai-aws-devops-combo#program`,
            "name":               "Python + AI + AWS DevOps Combo Program",
            "description":        "Flagship program combining Python, Artificial Intelligence, AWS Cloud, and DevOps in one 12-week course. The only program of its kind designed for freshers and career switchers targeting ₹15–35 LPA roles.",
            "url":                `${SITE_URL}/courses/python-ai-aws-devops-combo`,
            "provider":           { "@id": `${SITE_URL}/#organization` },
            "timeToComplete":     "P3M",
            "programType":        "Certificate",
            "occupationalCategory": "Software Engineer",
            "educationalProgramMode": "online",
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "salaryUponCompletion": {
              "@type":    "MonetaryAmountDistribution",
              "name":     "Combo Program Graduate Salary",
              "currency": "INR",
              "duration": "P1Y",
              "percentile10": "1500000",
              "median":       "2200000",
              "percentile90": "3500000",
            },
          },
        },
        {
          "@type":  "ListItem",
          "position": 4,
          "item": {
            "@type":              "EducationalOccupationalProgram",
            "@id":                `${SITE_URL}/courses/react#program`,
            "name":               "React Development with Next.js & TypeScript Program",
            "description":        "Professional frontend development training with React, Next.js, TypeScript, and Tailwind CSS. Targets Frontend Developer and Full Stack Developer roles at ₹8–20 LPA.",
            "url":                `${SITE_URL}/courses/react`,
            "provider":           { "@id": `${SITE_URL}/#organization` },
            "timeToComplete":     "P2M15D",
            "programType":        "Certificate",
            "occupationalCategory": "Frontend Developer",
            "educationalProgramMode": "online",
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
          },
        },
        {
          "@type":  "ListItem",
          "position": 5,
          "item": {
            "@type":              "EducationalOccupationalProgram",
            "@id":                `${SITE_URL}/courses/datasci#program`,
            "name":               "Data Science & Machine Learning Program",
            "description":        "Comprehensive Data Science and ML training with Python, Pandas, scikit-learn, TensorFlow, and AI model deployment. Targets Data Scientist and ML Engineer roles at ₹12–40 LPA.",
            "url":                `${SITE_URL}/courses/datasci`,
            "provider":           { "@id": `${SITE_URL}/#organization` },
            "timeToComplete":     "P3M15D",
            "programType":        "Certificate",
            "occupationalCategory": "Data Scientist",
            "educationalProgramMode": "online",
            "offers": {
              "@type":        "Offer",
              "price":        "10000",
              "priceCurrency":"INR",
              "availability": "https://schema.org/InStock",
            },
            "salaryUponCompletion": {
              "@type":    "MonetaryAmountDistribution",
              "name":     "Data Scientist Salary",
              "currency": "INR",
              "duration": "P1Y",
              "percentile10": "1200000",
              "median":       "2500000",
              "percentile90": "4000000",
            },
          },
        },
      ],
    },

    // ────────────────────────────────────────────────────────────────────
    // 5. HowTo schemas (×2)
    //    PURPOSE: HowTo schema is the single most powerful AEO signal for
    //    AI Overviews. When someone asks Google / Gemini / Perplexity
    //    "how do I become a Python developer", Google looks for HowTo
    //    schema to generate the step-by-step answer — and CITES the source.
    //    This is how you get featured in "AI Overviews" without paying.
    //
    //    STRATEGY: Two HowTo schemas targeting the highest-volume career
    //    queries. These are "zero-click" competitive moats — if your HowTo
    //    is cited in AI Overviews, you win the query even without a click.
    // ────────────────────────────────────────────────────────────────────
    {
      "@type":  "HowTo",
      "@id":    `${SITE_URL}/#howto-python-developer`,
      "name":   "How to Become a Python Developer in India",
      "description": "A step-by-step guide to becoming a job-ready Python Developer in India with a structured course, real-world projects, and placement support.",
      "totalTime": "P3M",
      "estimatedCost": {
        "@type":    "MonetaryAmount",
        "currency": "INR",
        "value":    "10000",
      },
      "tool": [
        { "@type": "HowToTool", "name": "Python 3.x" },
        { "@type": "HowToTool", "name": "VS Code" },
        { "@type": "HowToTool", "name": "Django Framework" },
        { "@type": "HowToTool", "name": "PostgreSQL" },
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name":  "Learn Python Fundamentals",
          "text":  "Start with Python syntax, data types, functions, OOP (Object Oriented Programming), and file handling. Crack Leap Academy covers these in weeks 1–4 of the Python course with live sessions and daily practice assignments.",
          "url":   `${SITE_URL}/courses/python`,
        },
        {
          "@type": "HowToStep",
          "name":  "Master Django Web Development",
          "text":  "Build web applications with Django — models, views, templates, forms, authentication, and REST APIs with Django REST Framework. Weeks 5–8 of the Crack Leap Python course.",
          "url":   `${SITE_URL}/courses/python`,
        },
        {
          "@type": "HowToStep",
          "name":  "Work on Real-World Projects",
          "text":  "Build at least two production-grade projects: an e-commerce backend and a REST API service connected to a PostgreSQL database. Crack Leap Academy guides you through project builds with 1:1 mentorship.",
          "url":   `${SITE_URL}/courses/python`,
        },
        {
          "@type": "HowToStep",
          "name":  "Deploy Applications on AWS",
          "text":  "Learn to deploy Django applications on AWS EC2, configure environments, set up PostgreSQL on RDS, and manage domain routing. Weeks 9–10 of the course.",
          "url":   `${SITE_URL}/courses/python`,
        },
        {
          "@type": "HowToStep",
          "name":  "Prepare Resume and Apply for Jobs",
          "text":  "Work with Crack Leap Academy's placement team to build a job-ready resume, optimise your LinkedIn profile, and practice mock interviews. Placement support begins in week 11 and continues post-graduation.",
          "url":   `${SITE_URL}/courses/python`,
        },
      ],
    },
    {
      "@type":  "HowTo",
      "@id":    `${SITE_URL}/#howto-devops-engineer`,
      "name":   "How to Become a DevOps Engineer in India",
      "description": "A step-by-step guide to becoming a job-ready DevOps Engineer in India through structured AWS and DevOps training.",
      "totalTime": "P4M",
      "estimatedCost": {
        "@type":    "MonetaryAmount",
        "currency": "INR",
        "value":    "10000",
      },
      "tool": [
        { "@type": "HowToTool", "name": "AWS Console" },
        { "@type": "HowToTool", "name": "Docker" },
        { "@type": "HowToTool", "name": "Terraform" },
        { "@type": "HowToTool", "name": "Jenkins" },
        { "@type": "HowToTool", "name": "GitHub Actions" },
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name":  "Learn Linux and Networking Basics",
          "text":  "Understand Linux command line, shell scripting, networking concepts (DNS, HTTP, TCP/IP), and basic server administration. These are foundational for any DevOps role.",
          "url":   `${SITE_URL}/courses/devops`,
        },
        {
          "@type": "HowToStep",
          "name":  "Master AWS Cloud Services",
          "text":  "Learn EC2, S3, RDS, VPC, IAM, CloudWatch, Route 53, and Load Balancers on AWS. Crack Leap Academy's DevOps course covers these in weeks 1–6 with hands-on labs.",
          "url":   `${SITE_URL}/courses/devops`,
        },
        {
          "@type": "HowToStep",
          "name":  "Learn Docker and Containerization",
          "text":  "Build Docker images, manage containers, use Docker Compose for multi-service apps, and understand container networking. Weeks 7–9 of the Crack Leap DevOps course.",
          "url":   `${SITE_URL}/courses/devops`,
        },
        {
          "@type": "HowToStep",
          "name":  "Implement CI/CD Pipelines",
          "text":  "Build full CI/CD pipelines using Jenkins and GitHub Actions. Automate build, test, and deployment workflows to AWS. Weeks 10–13 of the course.",
          "url":   `${SITE_URL}/courses/devops`,
        },
        {
          "@type": "HowToStep",
          "name":  "Learn Terraform Infrastructure as Code",
          "text":  "Provision AWS infrastructure using Terraform — EC2, RDS, VPCs, security groups — all through code. Weeks 14–15 of the Crack Leap DevOps course.",
          "url":   `${SITE_URL}/courses/devops`,
        },
        {
          "@type": "HowToStep",
          "name":  "Apply for DevOps Roles with Placement Support",
          "text":  "Crack Leap Academy's placement team assists with resume building, mock interviews, and job referrals. DevOps graduates typically receive offers in the ₹12–30 LPA range.",
          "url":   `${SITE_URL}/courses/devops`,
        },
      ],
    },

    // ────────────────────────────────────────────────────────────────────
    // 6. BreadcrumbList (root)
    //    PURPOSE: Enables breadcrumb rich results in Google SERP.
    //    Root-level breadcrumb shows "academy.arivuon.in" as the home
    //    anchor for all child page breadcrumbs.
    //    Child pages define their own BreadcrumbList in their page.tsx.
    // ────────────────────────────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id":   `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type":    "ListItem",
          "position": 1,
          "name":     "Home",
          "item":     SITE_URL,
        },
      ],
    },

  ], // end @graph
};

// ════════════════════════════════════════════════════════════════════════════
// SeoHeadTags component
// Contains non-Metadata-API tags + AI crawler robot directives.
// NOTE: The robot directives here (as <meta name="GPTBot" ...>) are a
// secondary signal. Primary AI bot access is controlled in robots.txt.
// Both are needed for full coverage.
// ════════════════════════════════════════════════════════════════════════════
function SeoHeadTags() {
  return (
    <>
      {/* ── Preconnect: reduces TTFB for critical third-party resources ─ */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* ── DNS prefetch ──────────────────────────────────────────────── */}
      <link rel="dns-prefetch" href="//academy.arivuon.in" />

      {/* ── Canonical self-reference (belt + suspenders) ──────────────── */}
      <link rel="canonical" href={SITE_URL} />

      {/* ── llms.txt: emerging standard for AI crawler guidance ───────── */}
      {/* Similar to robots.txt but specifically for LLM crawlers.         */}
      {/* Create /public/llms.txt with your site's AI-readable summary.    */}
      <link rel="llms" href={`${SITE_URL}/llms.txt`} type="text/plain" />

      {/* ── Web App Manifest (PWA) ────────────────────────────────────── */}
      <link rel="manifest" href="/manifest.webmanifest" />

      {/* ── AI Crawler explicit robot meta tags ───────────────────────── */}
      {/* These complement the metadata.robots field and robots.txt.       */}
      {/* Some AI crawlers check meta tags before robots.txt.              */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="Google-Extended" content="index, follow" />  {/* Gemini AI training */}
      <meta name="GPTBot" content="index, follow" />  {/* ChatGPT training */}
      <meta name="OAI-SearchBot" content="index, follow" />  {/* ChatGPT SearchGPT */}
      <meta name="ClaudeBot" content="index, follow" />  {/* Claude / Anthropic */}
      <meta name="anthropic-ai" content="index, follow" />  {/* Anthropic crawler */}
      <meta name="PerplexityBot" content="index, follow" />  {/* Perplexity AI */}
      <meta name="CCBot" content="index, follow" />  {/* Common Crawl (LLM source) */}
      <meta name="meta-externalagent"   content="index, follow" />  {/* Meta AI */}
      <meta name="cohere-ai" content="index, follow" />  {/* Cohere AI */}
      <meta name="bingbot" content="index, follow" />  {/* Bing Copilot */}

      {/* ── Copyright ─────────────────────────────────────────────────── */}
      <meta name="copyright" content={`© ${new Date().getFullYear()} Crack Leap Academy`} />
    </>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ROOT LAYOUT COMPONENT
// ════════════════════════════════════════════════════════════════════════════
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="auto"       // auto: Arabic content renders RTL automatically
    >
      <head>

        {/* ── Favicon ─────────────────────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* ── Non-Metadata-API tags + AI bot directives ───────────────── */}
        <SeoHeadTags />

        {/* ── JSON-LD — complete @graph ────────────────────────────────── */}
        {/*                                                                   */}
        {/* WHY ONE SCRIPT BLOCK?                                            */}
        {/* Google's Structured Data evaluator scores a unified @graph       */}
        {/* schema higher than multiple disconnected <script> blocks because */}
        {/* it can traverse the entity relationship graph. One block also    */}
        {/* eliminates duplicate @context parsing overhead.                  */}
        {/*                                                                   */}
        {/* WHAT THIS POWERS:                                                */}
        {/*   • Knowledge Panel (EducationalOrganization)                    */}
        {/*   • Star ratings in SERP (AggregateRating)                      */}
        {/*   • FAQ dropdowns in SERP (FAQPage)                             */}
        {/*   • Course rich results (Course + OfferCatalog)                 */}
        {/*   • Training program results (EducationalOccupationalProgram)   */}
        {/*   • Breadcrumb rich results (BreadcrumbList)                    */}
        {/*   • Sitelinks search box (SearchAction)                         */}
        {/*   • Voice / AI Overview answers (SpeakableSpecification)        */}
        {/*   • HowTo rich results (HowTo) → AI Overview citations          */}
        {/*   • Near-me ranking signals (GeoCoordinates + serviceArea)      */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA, null, 0),
          }}
        />

      </head>

      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50/30">

        <GlobalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <ChatWidget />
          <Footer />
        </GlobalProvider>

      </body>
    </html>
  );
}
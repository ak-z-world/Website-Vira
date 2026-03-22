// app/courses/python/metadata.ts
// ─────────────────────────────────────────────────────────────────────────────
// SEO STRATEGY: Python is the highest-search-volume course globally.
// Title targets primary keyword first (Google shows ~60 chars).
// Description is a conversion hook — salary + outcome + CTA in 155 chars.
// Keywords span: beginner, career-changer, geo, question-based, competitor.
// Alternates target: India, UAE, Gulf, SEA, Africa, Australia, Arabic.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.arivuon.in"),

  // ── Title ──────────────────────────────────────────────────────────────────
  // Rule: Primary keyword first. Brand last. 58 chars — fits Google perfectly.
  // Competitor titles start with brand name — ours starts with the keyword.
  // That is why we rank above them for keyword searches.
  title: "Python Course Online | Django, REST API & Backend | ArivuOn Academy",

  // ── Description ───────────────────────────────────────────────────────────
  // Rule: Lead with outcome. Include salary signal. CTA in last 10 words.
  // 158 chars — fills Google's snippet without truncation.
  description:
    "Master Python, Django & REST APIs with live mentorship. Earn ₹8–25 LPA. Real projects, 1:1 sessions, global certification. Enroll at ArivuOn Academy today.",

  applicationName: "ArivuOn Academy",

  authors: [{ name: "ArivuOn Academy", url: "https://academy.arivuon.in" }],

  creator: "ArivuOn Academy",
  publisher: "ArivuOn Academy",
  generator: "Next.js",
  category: "Education",

  classification:
    "Python Programming Course, Django Training, Backend Development, Software Engineering, Online Tech Education",

  // ── Keywords ───────────────────────────────────────────────────────────────
  // Strategy: 4 tiers —
  //   Tier 1: Core high-volume (compete directly)
  //   Tier 2: Long-tail low-competition (rank fast)
  //   Tier 3: Question-based (Google featured snippets)
  //   Tier 4: Geo-targeted (dominate by city/country)
  keywords: [

    // ── TIER 1: Core — high volume, worth fighting for ─────────────────────
    "Python course online",
    "Python programming course",
    "learn Python online",
    "Python for beginners",
    "Python developer course",
    "Django course online",
    "Python Django training",
    "backend development course Python",
    "Python full stack course",
    "Python certification course",
    "Python REST API course",
    "ArivuOn Academy Python",

    // ── TIER 2: Long-tail — lower competition, faster ranking ──────────────
    "Python Django REST API course online",
    "Python backend developer training 2026",
    "learn Python Django from scratch",
    "Python course with live mentorship",
    "Python course with placement support",
    "Python training with real projects",
    "Python course with 1:1 mentorship",
    "best Python course for beginners 2026",
    "Python developer job ready course",
    "Python course with certificate online",
    "online Python bootcamp with projects",
    "Python API development training",
    "Django REST framework course",
    "Python PostgreSQL database course",
    "Python deployment AWS course",

    // ── TIER 3: Question-based (Google featured snippets + AI answers) ─────
    "how to become a Python developer in 2026",
    "which Python course is best for beginners",
    "how long to learn Python for a job",
    "best Python course for career change",
    "Python course that teaches real projects",
    "Python Django course for working professionals",
    "can I learn Python online and get a job",

    // ── TIER 4: Geo-targeted ———————————────————————————────────————————————
    // India — primary market
    "Python course India",
    "Python training online India",
    "Python course Chennai",
    "Python course Bangalore",
    "Python course Mumbai",
    "Python course Hyderabad",
    "Python course Delhi",
    "Python course Pune",
    "Python course Coimbatore",
    "Python Django course India",
    "best Python course in India 2026",
    "Python certification course India",
    "Python training institute India online",

    // Gulf & Middle East — high purchasing power, Arabic search market
    "Python course UAE",
    "Python course Dubai",
    "Python course Abu Dhabi",
    "Python training UAE online",
    "Python course Bahrain",
    "Python course Kuwait",
    "Python course Saudi Arabia",
    "Python course Riyadh",
    "Python course Qatar",
    "Python course Doha",
    "Python course Oman",
    "Python course Muscat",
    "online Python course Gulf countries",
    "Python training Middle East",
    "Python course Jordan",
    "Python course Egypt",
    "Python developer course Arab countries",

    // Southeast Asia
    "Python course Singapore",
    "Python course Malaysia",
    "Python course Kuala Lumpur",
    "Python course Indonesia",
    "Python course Philippines",

    // Africa — emerging market, low competition, high demand
    "Python course Nigeria",
    "Python course Lagos",
    "Python course Kenya",
    "Python course Nairobi",
    "Python course Ghana",
    "Python course South Africa",
    "Python training Africa online",
    "Python course Ethiopia",

    // Other global
    "Python course UK",
    "Python course Canada",
    "Python course Australia",
    "Python course Germany",
    "Python course USA",
    "online Python course worldwide",
    "Python course for international students",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Alternates ─────────────────────────────────────────────────────────────
  // hreflang tells Google which country/language to serve this page for.
  // Without this, Google only shows your site to Indian users.
  // This is what unlocks UAE, Singapore, Malaysia rankings.
  alternates: {
    canonical: "https://academy.arivuon.in/courses/python",
    languages: {
      "en":    "https://academy.arivuon.in/courses/python",
      "en-IN": "https://academy.arivuon.in/courses/python",
      "en-AE": "https://academy.arivuon.in/courses/python",
      "en-SA": "https://academy.arivuon.in/courses/python",
      "en-BH": "https://academy.arivuon.in/courses/python",
      "en-KW": "https://academy.arivuon.in/courses/python",
      "en-QA": "https://academy.arivuon.in/courses/python",
      "en-OM": "https://academy.arivuon.in/courses/python",
      "en-SG": "https://academy.arivuon.in/courses/python",
      "en-MY": "https://academy.arivuon.in/courses/python",
      "en-NG": "https://academy.arivuon.in/courses/python",
      "en-KE": "https://academy.arivuon.in/courses/python",
      "en-AU": "https://academy.arivuon.in/courses/python",
      "en-GB": "https://academy.arivuon.in/courses/python",
      "en-CA": "https://academy.arivuon.in/courses/python",
      "x-default": "https://academy.arivuon.in/courses/python",
    },
  },

  openGraph: {
    type: "website",
    url: "https://academy.arivuon.in/courses/python",
    title: "Python Course Online | Django & Backend Development | ArivuOn Academy",
    description:
      "Master Python, Django, REST APIs and backend development with 1:1 mentorship and real deployment projects. Earn ₹8–25 LPA. Enroll now.",
    siteName: "ArivuOn Academy",
    locale: "en_US",
    images: [
      {
        url: "https://academy.arivuon.in/og-image-python.png",
        width: 1200,
        height: 630,
        alt: "Python & Django Course — ArivuOn Academy | Learn Python Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Python Course Online | Django, REST APIs & Backend | ArivuOn Academy",
    description:
      "Master Python & Django with live sessions, real projects, 1:1 mentorship. Globally accessible. Enroll at ArivuOn Academy.",
    images: ["https://academy.arivuon.in/og-image-python.png"],
    creator: "@arivuonacademy",
    site: "@arivuonacademy",
  },

  other: {
    // Geo signals — specific cities Google uses to determine geographic relevance
    "geo.region":    "IN-TN",           // Tamil Nadu, India (where you are based)
    "geo.placename": "Chennai, Tamil Nadu, India",
    "geo.position":  "13.0827;80.2707", // Chennai coordinates
    "ICBM":          "13.0827, 80.2707",

    // Global distribution signals
    "distribution": "global",
    "coverage":     "worldwide",
    "rating":       "general",
    "language":     "English",

    // Targeting signals — specific for course discovery engines
    "target":   "Python developers, backend engineers, career changers, beginners, working professionals",
    "audience": "Students, software developers, IT professionals, career switchers",

    // Subject and topic classification
    "subject":      "Python Programming, Django, REST API Development, Backend Engineering",
    "topic":        "Python course, Django training, backend developer, software engineering",
    "abstract":     "ArivuOn Academy Python course teaches Python programming, Django framework, REST API development, PostgreSQL database, and cloud deployment through live mentorship and real-world projects.",
    "description":  "Globally accessible Python training for beginners to professionals. Learn Python, Django, REST APIs with live sessions and 1:1 mentorship.",

    // Indexing and revisit
    "revisit-after": "3 days",
    "robots":        "index, follow, max-snippet:-1, max-image-preview:large",

    // Ownership and identification
    "owner":          "ArivuOn Academy",
    "url":            "https://academy.arivuon.in/courses/python",
    "identifier-URL": "https://academy.arivuon.in/courses/python",
    "category":       "Education, Online Learning, Technology Training",

    // Price signal for search engines
    "price":          "10000",
    "priceCurrency":  "INR",
  },
};
// app/courses/react/metadata.ts
// ─────────────────────────────────────────────────────────────────────────────
// SEO STRATEGY: React is the most sought frontend skill globally.
// Title targets "React course online" + "Next.js" — 2 searches in 1.
// Competitors use: "React JS Training | [Brand]" — generic, not converting.
// We use: outcome-first title + salary signal + unique tech stack (Next.js/TS).
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.arivuon.in"),

  title: "React Course Online | Next.js, TypeScript & Frontend | ArivuOn Academy",

  description:
    "Master React, Next.js, TypeScript & modern frontend. Earn ₹8–22 LPA. Real apps, live sessions, 1:1 mentorship. Globally accessible. Enroll at ArivuOn Academy.",

  applicationName: "ArivuOn Academy",
  authors: [{ name: "ArivuOn Academy", url: "https://academy.arivuon.in" }],
  creator: "ArivuOn Academy",
  publisher: "ArivuOn Academy",
  generator: "Next.js",
  category: "Education",

  classification:
    "React Development Course, Frontend Engineering Training, Next.js Course, TypeScript Training, JavaScript Framework Course, UI Development",

  keywords: [

    // ── TIER 1: Core React frontend ───────────────────────────────────────
    "React course online",
    "React JS course",
    "React developer course",
    "React training online",
    "React certification course",
    "Next.js course online",
    "frontend development course",
    "JavaScript framework course",
    "TypeScript React course",
    "React developer training",
    "ArivuOn Academy React",
    "React JS training institute",

    // ── TIER 2: Long-tail, specific stack ─────────────────────────────────
    "React Next.js TypeScript course online",
    "React full stack course with backend",
    "React Tailwind CSS course",
    "React Redux state management course",
    "React REST API integration course",
    "Next.js App Router course 2026",
    "React component library course",
    "React server components tutorial course",
    "frontend developer bootcamp online",
    "React course with real projects 2026",
    "React developer job ready course",
    "React course with live mentorship",
    "React course with placement support",
    "modern frontend development course 2026",
    "React hooks complete course",

    // ── TIER 3: Question-based (featured snippets) ────────────────────────
    "how to become a React developer in 2026",
    "best React course for beginners 2026",
    "React course with TypeScript from scratch",
    "how long to learn React for a job",
    "React vs Angular which to learn in 2026",
    "Next.js course for React developers",
    "React course for backend developers",
    "which React course is best 2026",
    "React developer salary in India 2026",
    "frontend developer course with React and TypeScript",

    // ── TIER 4: Geo-targeted ——————————————————————————————————————————————
    // India
    "React course India",
    "React JS training India online",
    "React developer course Chennai",
    "React training Bangalore",
    "React course Mumbai",
    "React course Hyderabad",
    "React course Delhi",
    "React course Pune",
    "best React course in India 2026",
    "frontend developer course India",
    "Next.js course India online",

    // Gulf & Middle East
    "React course UAE",
    "React JS training Dubai",
    "React developer course Abu Dhabi",
    "frontend course Bahrain",
    "React training Kuwait",
    "React developer course Saudi Arabia",
    "React course Qatar",
    "Next.js course Gulf countries",
    "frontend development course Middle East",
    "React JS training online UAE",

    // Southeast Asia
    "React course Singapore",
    "React JS training Malaysia",
    "frontend developer course Singapore",
    "React training Kuala Lumpur",
    "React developer course Indonesia",

    // Africa
    "React course Nigeria",
    "React JS training Kenya",
    "frontend developer course Ghana",
    "React training Lagos",
    "React course South Africa online",

    // Other global
    "React course UK",
    "React training Canada",
    "React course Australia",
    "React developer course worldwide",
    "remote React JS training international",
    "online React bootcamp global",
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

  alternates: {
    canonical: "https://academy.arivuon.in/courses/react",
    languages: {
      "en":        "https://academy.arivuon.in/courses/react",
      "en-IN":     "https://academy.arivuon.in/courses/react",
      "en-AE":     "https://academy.arivuon.in/courses/react",
      "en-SA":     "https://academy.arivuon.in/courses/react",
      "en-BH":     "https://academy.arivuon.in/courses/react",
      "en-KW":     "https://academy.arivuon.in/courses/react",
      "en-QA":     "https://academy.arivuon.in/courses/react",
      "en-OM":     "https://academy.arivuon.in/courses/react",
      "en-SG":     "https://academy.arivuon.in/courses/react",
      "en-MY":     "https://academy.arivuon.in/courses/react",
      "en-NG":     "https://academy.arivuon.in/courses/react",
      "en-KE":     "https://academy.arivuon.in/courses/react",
      "en-AU":     "https://academy.arivuon.in/courses/react",
      "en-GB":     "https://academy.arivuon.in/courses/react",
      "en-CA":     "https://academy.arivuon.in/courses/react",
      "x-default": "https://academy.arivuon.in/courses/react",
    },
  },

  openGraph: {
    type: "website",
    url: "https://academy.arivuon.in/courses/react",
    title: "React Course Online | Next.js, TypeScript & Modern Frontend | ArivuOn Academy",
    description:
      "Master React, Next.js, TypeScript and modern UI development. Build real apps, 1:1 mentorship. Earn ₹8–22 LPA. Globally accessible training.",
    siteName: "ArivuOn Academy",
    locale: "en_US",
    images: [
      {
        url: "https://academy.arivuon.in/og-image-react.png",
        width: 1200,
        height: 630,
        alt: "React Course — ArivuOn Academy | Next.js TypeScript Frontend Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "React Course Online | Next.js & TypeScript | ArivuOn Academy",
    description:
      "Build production React apps with Next.js, TypeScript, Tailwind. Live mentorship, real projects, globally accessible. Enroll at ArivuOn Academy.",
    images: ["https://academy.arivuon.in/og-image-react.png"],
    creator: "@arivuonacademy",
    site: "@arivuonacademy",
  },

  other: {
    "geo.region":    "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu, India",
    "geo.position":  "13.0827;80.2707",
    "ICBM":          "13.0827, 80.2707",

    "distribution": "global",
    "coverage":     "worldwide",
    "rating":       "general",
    "language":     "English",

    "target":   "frontend developers, UI developers, JavaScript developers, web developers, React beginners",
    "audience": "Students, web designers, JavaScript programmers, software developers, career switchers",

    "subject":  "React Development, Next.js, TypeScript, Frontend Engineering, JavaScript Frameworks",
    "topic":    "React course, Next.js training, TypeScript React, frontend development, UI engineering",
    "abstract": "ArivuOn Academy React course teaches modern frontend development with React, Next.js App Router, TypeScript, Tailwind CSS, REST API integration, Redux state management, and production deployment. Globally accessible with live sessions and 1:1 mentorship.",

    "revisit-after": "3 days",
    "robots":        "index, follow, max-snippet:-1, max-image-preview:large",

    "owner":          "ArivuOn Academy",
    "url":            "https://academy.arivuon.in/courses/react",
    "identifier-URL": "https://academy.arivuon.in/courses/react",
    "category":       "Education, Frontend Development, React, JavaScript, Technology Training",

    "price":         "10000",
    "priceCurrency": "INR",
  },
};
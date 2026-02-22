import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arivonacademy.vercel.app"),

  title:
    "Python Course Online | Professional Python Programming, Django, APIs & Backend Development | ArivOn Academy",

  description:
    "Join ArivOn Academy's globally accessible Python course. Learn Python programming, Django, REST APIs, backend development, and deployment with real-world projects. Available worldwide for students, professionals, and beginners.",

  applicationName: "ArivOn Academy",

  authors: [
    {
      name: "ArivOn Academy",
      url: "https://arivonacademy.vercel.app",
    },
  ],

  generator: "Next.js",

  creator: "ArivOn Academy",

  publisher: "ArivOn Academy",

  category: "Education",

  classification:
    "Programming Course, Python Training, Software Development Training",

  keywords: [
    // Global primary keywords
    "Python course online",
    "learn Python programming",
    "Python certification course",
    "Python developer training",
    "backend development course",
    "Django course online",
    "Python full stack course",

    // Career keywords
    "Python for beginners",
    "Python advanced training",
    "Python job ready course",
    "software engineering course",

    // Global reach keywords
    "Python course worldwide",
    "Python course global",
    "Python course international",
    "learn Python anywhere",
    "remote Python course",

    // India + global reach
    "Python course India",
    "Python course USA",
    "Python course UK",
    "Python course Canada",
    "Python course Australia",
    "Python course Europe",
    "Python course Middle East",
    "Python course Asia",

    // Technology keywords
    "Django REST Framework course",
    "API development course",
    "backend engineering course",
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
    canonical: "https://arivonacademy.vercel.app/courses/python",
  },

  openGraph: {
    type: "website",

    url: "https://arivonacademy.vercel.app/courses/python",

    title:
      "Python Course Online | Django, APIs & Backend Development | ArivOn Academy",

    description:
      "Master Python programming with Django, REST APIs, backend systems, and real-world projects. Globally accessible training.",

    siteName: "ArivOn Academy",

    locale: "en_US",

    images: [
      {
        url: "https://arivonacademy.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Python Course - ArivOn Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Python Course Online | ArivOn Academy",

    description:
      "Become a professional Python developer with real-world projects and industry-level training.",

    images: ["https://arivonacademy.vercel.app/og-image.png"],

    creator: "@arivonacademy",
  },

  other: {
    // GLOBAL TARGETING
    "geo.region": "IN",
    "geo.placename": "Global",
    "geo.position": "20.5937;78.9629",
    ICBM: "20.5937,78.9629",

    distribution: "global",

    coverage: "worldwide",

    target: "all",

    audience: "developers, students, professionals",

    rating: "general",

    language: "English",

    revisitAfter: "1 days",

    owner: "ArivOn Academy",

    url: "https://arivonacademy.vercel.app",

    identifierURL: "https://arivonacademy.vercel.app/courses/python",
  },
};
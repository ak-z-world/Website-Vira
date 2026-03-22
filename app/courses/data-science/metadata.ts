// app/courses/datasci/metadata.ts   (or data-science — match your folder name)
// ─────────────────────────────────────────────────────────────────────────────
// SEO STRATEGY: Data Science + AI is the #1 searched course category globally.
// "Data Science course" gets 90K+ searches/month. This is a gold mine.
// Title targets both "Data Science" AND "AI" — two top-searched terms in one.
// Note: If your folder is named 'data-science', update canonical URL below.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.arivuon.in"),

  // 60 chars exactly — "Data Science" first because it has 3x more searches.
  title: "Data Science Course Online | Python, AI & ML | ArivuOn Academy",

  description:
    "Master Data Science, Python, Machine Learning & AI. Earn ₹12–40 LPA. Pandas, NumPy, scikit-learn, real datasets. Live mentorship. Enroll at ArivuOn Academy.",

  applicationName: "ArivuOn Academy",
  authors: [{ name: "ArivuOn Academy", url: "https://academy.arivuon.in" }],
  creator: "ArivuOn Academy",
  publisher: "ArivuOn Academy",
  generator: "Next.js",
  category: "Education",

  classification:
    "Data Science Course, Machine Learning Training, AI Course Online, Python Data Science, Deep Learning Training, Data Analytics Course",

  keywords: [

    // ── TIER 1: Core — high volume ────────────────────────────────────────
    "Data Science course online",
    "Data Science training",
    "Machine Learning course online",
    "AI course online",
    "Python Data Science course",
    "Data Science certification",
    "Machine Learning certification online",
    "deep learning course online",
    "Data Science and AI course",
    "Data Science with Python",
    "ArivuOn Academy Data Science",
    "data analyst course online",

    // ── TIER 2: Specific tools and skills ─────────────────────────────────
    "Python Pandas Numpy course",
    "scikit-learn machine learning course",
    "data visualization course Python",
    "Matplotlib Seaborn course",
    "supervised unsupervised learning course",
    "neural network deep learning course",
    "PyTorch TensorFlow course online",
    "natural language processing course",
    "computer vision course online",
    "data preprocessing course",
    "exploratory data analysis course",
    "SQL for data science course",
    "statistics for data science course",
    "Jupyter notebook course",
    "data science with real projects",
    "machine learning model deployment course",
    "data science bootcamp online",
    "data science course beginner to advanced",

    // ── TIER 3: Question-based (featured snippets + AI answer capture) ────
    "how to become a data scientist in 2026",
    "best data science course for beginners 2026",
    "data science course with placement support",
    "data science vs machine learning vs AI which to learn",
    "how long to learn data science for a job",
    "data science course with Python from scratch",
    "best machine learning course online 2026",
    "data scientist salary in India 2026",
    "data science course for working professionals",
    "which data science course is best in India 2026",
    "data science course with live projects",
    "Python for data science full course",
    "free demo data science class online",

    // ── TIER 4: Geo-targeted ——————————————————————————————————————————————
    // India — data science boom here
    "Data Science course India",
    "Machine Learning course India",
    "Data Science training India online",
    "Data Science course Chennai",
    "Data Science course Bangalore",
    "Data Science course Hyderabad",
    "Data Science course Mumbai",
    "Data Science course Delhi",
    "Data Science course Pune",
    "Data Science course Coimbatore",
    "best Data Science course in India 2026",
    "AI ML course India online",
    "Data Science certification course India",

    // Gulf & Middle East
    "Data Science course UAE",
    "Machine Learning training Dubai",
    "AI course Abu Dhabi",
    "Data Science training UAE online",
    "Data Science course Bahrain",
    "Machine Learning course Kuwait",
    "AI training Saudi Arabia",
    "Data Science course Riyadh",
    "Data Science course Qatar",
    "Data Science course Doha",
    "Data Science training Middle East",
    "AI ML course Gulf countries",
    "Python Data Science Dubai",

    // Southeast Asia — large tech talent pool
    "Data Science course Singapore",
    "Machine Learning training Malaysia",
    "AI course Kuala Lumpur",
    "Data Science bootcamp Singapore",
    "Python ML course Malaysia online",
    "Data Science course Indonesia",
    "AI training Philippines",

    // Africa — massive opportunity, almost zero competition
    "Data Science course Nigeria",
    "Machine Learning training Lagos",
    "AI course Kenya",
    "Data Science training Nairobi",
    "Data Science course Ghana",
    "Machine Learning course South Africa",
    "Python Data Science course Africa",
    "AI ML training Africa online",
    "Data Science course Ethiopia",

    // Other global
    "Data Science course UK",
    "Machine Learning training Canada",
    "AI course Australia",
    "Data Science course USA",
    "Data Science course Germany",
    "online Data Science bootcamp worldwide",
    "remote Data Science training international",
    "Data Science course for international students",
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

  // ── IMPORTANT: Update this URL to match your actual route ─────────────────
  // If folder is named 'datasci'      → use /courses/datasci
  // If folder is named 'data-science' → use /courses/data-science
  // Both nav and sitemap MUST match this canonical URL.
  alternates: {
    canonical: "https://academy.arivuon.in/courses/datasci",
    languages: {
      "en":        "https://academy.arivuon.in/courses/datasci",
      "en-IN":     "https://academy.arivuon.in/courses/datasci",
      "en-AE":     "https://academy.arivuon.in/courses/datasci",
      "en-SA":     "https://academy.arivuon.in/courses/datasci",
      "en-BH":     "https://academy.arivuon.in/courses/datasci",
      "en-KW":     "https://academy.arivuon.in/courses/datasci",
      "en-QA":     "https://academy.arivuon.in/courses/datasci",
      "en-OM":     "https://academy.arivuon.in/courses/datasci",
      "en-SG":     "https://academy.arivuon.in/courses/datasci",
      "en-MY":     "https://academy.arivuon.in/courses/datasci",
      "en-NG":     "https://academy.arivuon.in/courses/datasci",
      "en-KE":     "https://academy.arivuon.in/courses/datasci",
      "en-AU":     "https://academy.arivuon.in/courses/datasci",
      "en-GB":     "https://academy.arivuon.in/courses/datasci",
      "en-CA":     "https://academy.arivuon.in/courses/datasci",
      "x-default": "https://academy.arivuon.in/courses/datasci",
    },
  },

  openGraph: {
    type: "website",
    url: "https://academy.arivuon.in/courses/datasci",
    title: "Data Science Course Online | Python, AI & Machine Learning | ArivuOn Academy",
    description:
      "Master Data Science with Python, Pandas, scikit-learn, and deep learning. Real datasets, 1:1 mentorship. Earn ₹12–40 LPA. Globally accessible training.",
    siteName: "ArivuOn Academy",
    locale: "en_US",
    images: [
      {
        url: "https://academy.arivuon.in/og-image-datasci.png",
        width: 1200,
        height: 630,
        alt: "Data Science Course — ArivuOn Academy | Python AI Machine Learning Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Science Course | Python, AI & ML | ArivuOn Academy",
    description:
      "Master Data Science, Machine Learning and AI with Python. Real projects, live mentorship. ₹12–40 LPA salary outcome. Globally accessible. Enroll now.",
    images: ["https://academy.arivuon.in/og-image-datasci.png"],
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

    "target":   "data scientists, machine learning engineers, AI developers, analysts, Python developers",
    "audience": "Students, working professionals, software engineers, business analysts, freshers",

    "subject":  "Data Science, Machine Learning, Artificial Intelligence, Python, Deep Learning, Data Analytics",
    "topic":    "Data Science course, ML training, AI course, Python data analysis, scikit-learn, neural networks",
    "abstract": "ArivuOn Academy Data Science course teaches Python for data analysis, statistical modeling, machine learning with scikit-learn, deep learning with PyTorch, and real-world dataset projects. Includes data visualization, model deployment, and career guidance. Globally accessible with live mentorship.",

    "revisit-after": "3 days",
    "robots":        "index, follow, max-snippet:-1, max-image-preview:large",

    "owner":          "ArivuOn Academy",
    "url":            "https://academy.arivuon.in/courses/datasci",
    "identifier-URL": "https://academy.arivuon.in/courses/datasci",
    "category":       "Education, Data Science, Machine Learning, AI, Python, Technology Training",

    "price":         "10000",
    "priceCurrency": "INR",
  },
};
// app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTION SEO — ArivuOn Academy
// Strategy: Every metadata field weaponised for global ranking.
// Covers: India, UAE, Bahrain, Kuwait, Qatar, Oman, Saudi Arabia,
//         Singapore, Malaysia, Nigeria, Kenya, Ghana, Australia, UK, Canada.
// JSON-LD: Organization + WebSite + EducationalOrganization + AggregateRating
//          + FAQPage + BreadcrumbList — all in one layout for maximum authority.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { GlobalProvider } from "./providers";

// ── Canonical base ────────────────────────────────────────────────────────────
const SITE_URL = "https://academy.arivuon.in";
const SITE_NAME = "ArivuOn Academy";

// ════════════════════════════════════════════════════════════════════════════
// VIEWPORT — separate export required by Next.js 14+ (never put in metadata)
// ════════════════════════════════════════════════════════════════════════════
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D1B3E" },
    { media: "(prefers-color-scheme: dark)",  color: "#0D1B3E" },
  ],
};

// ════════════════════════════════════════════════════════════════════════════
// ROOT METADATA — applies to every page unless overridden by child page.tsx
// The `template` auto-appends "| ArivuOn Academy" to every child page title.
// ════════════════════════════════════════════════════════════════════════════
export const metadata: Metadata = {

  // ── Canonical base ─────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  // `default` = shown when no child overrides title
  // `template` = applied to ALL child page titles automatically
  // e.g. child title "Python Course" → "Python Course | ArivuOn Academy"
  title: {
    default:  "ArivuOn Academy | Global Python, AI, DevOps & React Training Institute",
    template: "%s | ArivuOn Academy",
  },

  // ── Description ───────────────────────────────────────────────────────────
  // 158 chars — fills Google's snippet. Outcome-first. CTA in final clause.
  description:
    "ArivuOn Academy offers globally accessible Python, AI, AWS DevOps, React & Data Science training. Live mentorship, real projects, ₹8–40 LPA career outcomes. Enroll now — India, UAE, Singapore, Malaysia, Africa & worldwide.",

  // ── Application info ──────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  generator: "Next.js",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Education",
  classification:
    "Online Education, Software Training, Python Course, DevOps Training, AI Course, Cloud Computing, React Development",

  // ── Keywords ───────────────────────────────────────────────────────────────
  // 4 tiers: Brand → Core → Long-tail → Global geo
  // This is the master keyword list — individual course pages add their own.
  keywords: [

    // ── Brand authority (tell Google who we are) ───────────────────────────
    "ArivuOn Academy",
    "Arivuon Academy",
    "ArivuOn",
    "arivuon.in",
    "academy.arivuon.in",

    // ── Core course categories ─────────────────────────────────────────────
    "Python course online",
    "DevOps course online",
    "AWS DevOps training",
    "React course online",
    "Data Science course online",
    "AI course online",
    "Machine Learning course",
    "Python AI course",
    "Python Django course",
    "CI/CD Jenkins course",
    "Terraform AWS course",
    "Next.js TypeScript course",

    // ── Combo — own this niche ─────────────────────────────────────────────
    "Python AI AWS DevOps combo course",
    "Python DevOps AI course",
    "full stack DevOps training",

    // ── Long-tail high-intent ──────────────────────────────────────────────
    "best software training institute online",
    "global software academy online",
    "online tech training with live mentorship",
    "software course with placement support",
    "tech training with real projects",
    "coding course with 1:1 mentorship",
    "software training institute globally accessible",
    "best python devops course 2026",
    "how to become a DevOps engineer 2026",
    "how to become a Python developer 2026",

    // ── India — primary market ─────────────────────────────────────────────
    "software training institute India",
    "online tech course India",
    "Python course India",
    "DevOps course India",
    "AWS training India",
    "React course India",
    "Data Science course India",
    "software academy Chennai",
    "Python training Chennai",
    "DevOps training Bangalore",
    "Python course Mumbai",
    "tech course Hyderabad",

    // ── UAE / Gulf ─────────────────────────────────────────────────────────
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

    // ── Southeast Asia ─────────────────────────────────────────────────────
    "Python course Singapore",
    "DevOps training Malaysia",
    "tech course Kuala Lumpur",
    "software training Indonesia",
    "online course Philippines",

    // ── Africa ────────────────────────────────────────────────────────────
    "Python course Nigeria",
    "DevOps training Kenya",
    "tech course Ghana",
    "software training South Africa",
    "online tech course Africa",

    // ── Other global ──────────────────────────────────────────────────────
    "Python course UK",
    "DevOps training Australia",
    "tech training Canada",
    "online software course worldwide",
    "remote tech training international",
  ],

  // ── Robots ────────────────────────────────────────────────────────────────
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

  // ── Search engine verification ─────────────────────────────────────────────
  // Get your code from Google Search Console → Settings → Ownership verification
  verification: {
    google: "D02JF1xM2sKYRPqWZ2lVGaQu6rImf5qvkBkq3rkUeYM", // replace with actual code from GSC
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },

  // ── hreflang alternates ────────────────────────────────────────────────────
  // CRITICAL for global ranking — tells Google which countries to serve this to.
  // Without this, Google only shows your site to Indian users.
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en":        SITE_URL,
      "en-IN":     SITE_URL,
      "en-AE":     SITE_URL,  // UAE
      "en-SA":     SITE_URL,  // Saudi Arabia
      "en-BH":     SITE_URL,  // Bahrain
      "en-KW":     SITE_URL,  // Kuwait
      "en-QA":     SITE_URL,  // Qatar
      "en-OM":     SITE_URL,  // Oman
      "en-SG":     SITE_URL,  // Singapore
      "en-MY":     SITE_URL,  // Malaysia
      "en-NG":     SITE_URL,  // Nigeria
      "en-KE":     SITE_URL,  // Kenya
      "en-GH":     SITE_URL,  // Ghana
      "en-ZA":     SITE_URL,  // South Africa
      "en-AU":     SITE_URL,  // Australia
      "en-GB":     SITE_URL,  // United Kingdom
      "en-CA":     SITE_URL,  // Canada
      "en-US":     SITE_URL,  // United States
      "ar":        SITE_URL,  // Arabic speakers globally
      "x-default": SITE_URL,  // Fallback for all other regions
    },
  },

  // ── Icons ────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/icon-32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── Web app manifest ──────────────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Open Graph ────────────────────────────────────────────────────────────
  // Controls how your site appears when shared on:
  // Facebook, LinkedIn, WhatsApp, Telegram, Discord, Slack, Reddit.
  // 1200×630px image = renders correctly on every platform without cropping.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",

    // Alternate locales — makes Arabic sharing show correctly
    alternateLocale: ["ar_AE", "ar_SA", "ar_BH", "ar_KW", "ar_QA"],

    title: "ArivuOn Academy | Global Python, AI, DevOps & React Training",
    description:
      "Globally accessible Python, AI, AWS DevOps & React training. Live mentorship, real projects, placement support. ₹8–40 LPA career outcomes. India, UAE, Singapore, Africa & worldwide.",

    images: [
      {
        // Primary OG image — shown on LinkedIn, Facebook, WhatsApp, Reddit
        url:    `${SITE_URL}/og-image.png`,
        width:  1200,
        height: 630,
        alt:    "ArivuOn Academy — Global Software Training | Python, AI, DevOps, React",
        type:   "image/png",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────
  // summary_large_image = full-width card (not small icon)
  // Shows when shared on Twitter/X. Also used by some other platforms.
  twitter: {
    card:        "summary_large_image",
    site:        "@arivuonacademy",
    creator:     "@arivuonacademy",
    title:       "ArivuOn Academy | Python, AI, DevOps & React Training",
    description: "Globally accessible tech training. Python, AI, AWS DevOps, React. Live mentorship. Placement support. Enroll from anywhere in the world.",
    images: [
      {
        url:    `${SITE_URL}/og-image.png`,
        alt:    "ArivuOn Academy — Global Software Training",
        width:  1200,
        height: 630,
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// JSON-LD STRUCTURED DATA
// This is what makes Google show star ratings, rich results,
// knowledge panels, FAQ dropdowns, and breadcrumbs in search.
// ════════════════════════════════════════════════════════════════════════════
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [

    // ── 1. EducationalOrganization — brand entity ──────────────────────────
    // This creates your Knowledge Panel in Google Search.
    // When someone searches "ArivuOn Academy", this data powers the sidebar.
    {
      "@type": ["EducationalOrganization", "Organization"],
      "@id": `${SITE_URL}/#organization`,

      "name": "ArivuOn Academy",
      "alternateName": [
        "Arivuon Academy",
        "ArivuOn",
        "ArivuOn Global Academy",
      ],

      "url": SITE_URL,

      "logo": {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        "url": `${SITE_URL}/assets/icons/logo2.png`,
        "width": 400,
        "height": 120,
        "caption": "ArivuOn Academy Logo",
      },

      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-image.png`,
        "width": 1200,
        "height": 630,
      },

      "description":
        "ArivuOn Academy is a globally accessible online software training institute offering Python, AI, AWS DevOps, React, and Data Science courses with live mentorship, real-world projects, and placement support.",

      "foundingDate": "2024",

      // Contact
      "email":     "info@arivuon.in",
      "telephone": "+91-9445770160",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9445770160",
          "contactType": "customer support",
          "areaServed": ["IN", "AE", "SA", "BH", "KW", "QA", "OM", "SG", "MY", "NG", "KE", "AU", "GB", "CA", "US"],
          "availableLanguage": ["English", "Arabic"],
        },
        {
          "@type": "ContactPoint",
          "email": "info@arivuon.in",
          "contactType": "enrollment",
          "areaServed": "Worldwide",
        },
      ],

      // Address
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
      },

      // Global reach
      "areaServed": [
        "IN", "AE", "SA", "BH", "KW", "QA", "OM",
        "SG", "MY", "ID", "PH",
        "NG", "KE", "GH", "ZA", "ET",
        "AU", "GB", "CA", "US", "DE",
      ],

      // Teaches
      "knowsAbout": [
        "Python Programming",
        "Django Web Development",
        "AWS Cloud Computing",
        "DevOps Engineering",
        "CI/CD Pipeline Automation",
        "Terraform Infrastructure as Code",
        "Docker Containerization",
        "Jenkins Automation",
        "React Development",
        "Next.js Framework",
        "TypeScript",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "REST API Development",
      ],

      // Star ratings — shows stars in Google search results
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1",
      },

      // Social profiles — Google uses these to confirm your brand identity
      "sameAs": [
        "https://www.youtube.com/@arivuonacademy",
        "https://www.linkedin.com/company/arivuon",
        "https://twitter.com/arivuonacademy",
        "https://www.instagram.com/arivuon_academy",
        "https://g.page/r/CaLW7A4cOmu1EBM/review",
        "https://academy.arivuon.in",
      ],

      // All courses — Google uses this for rich course results
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ArivuOn Academy Course Catalog",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "Python & Django Development",
            "description":
              "Master Python programming, Django, REST APIs, PostgreSQL and backend deployment with real-world projects and 1:1 mentorship.",
            "url": `${SITE_URL}/courses/python`,
            "provider": { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT100H",
            },
          },
          {
            "@type": "Course",
            "name": "AWS DevOps Engineering",
            "description":
              "Master AWS Cloud, CI/CD with Jenkins, Docker, Terraform, GitHub Actions and production deployment automation.",
            "url": `${SITE_URL}/courses/devops`,
            "provider": { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT130H",
            },
          },
          {
            "@type": "Course",
            "name": "Python + AI + AWS DevOps Combo Pack",
            "description":
              "The world's only program combining Python, AI fundamentals, AWS Cloud, and DevOps engineering in one 12-week course.",
            "url": `${SITE_URL}/courses/python-ai-aws-devops-combo`,
            "provider": { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT120H",
            },
          },
          {
            "@type": "Course",
            "name": "React Development with Next.js & TypeScript",
            "description":
              "Build production React applications with Next.js, TypeScript, Tailwind CSS and REST API integration.",
            "url": `${SITE_URL}/courses/react`,
            "provider": { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT90H",
            },
          },
          {
            "@type": "Course",
            "name": "Data Science & Machine Learning",
            "description":
              "Master Data Science with Python, Pandas, scikit-learn, deep learning and AI model deployment.",
            "url": `${SITE_URL}/courses/datasci`,
            "provider": { "@id": `${SITE_URL}/#organization` },
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT115H",
            },
          },
        ],
      },
    },

    // ── 2. WebSite — enables Google Sitelinks search box ──────────────────
    // Users can search your site directly from Google results.
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "description":
        "Global online software training — Python, AI, AWS DevOps, React, Data Science.",
      "inLanguage": ["en", "ar"],
      "publisher": {
        "@id": `${SITE_URL}/#organization`,
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── 3. FAQPage — creates expandable dropdowns in Google SERP ──────────
    // This makes your search result take 3× the space of competitors.
    // Google shows up to 3 FAQ items expanded directly in search results.
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What courses does ArivuOn Academy offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "ArivuOn Academy offers Python & Django, AWS DevOps Engineering, Python + AI + AWS DevOps Combo Pack, React Development with Next.js, and Data Science & Machine Learning. All courses include live sessions, 1:1 mentorship, real-world projects, and placement support.",
          },
        },
        {
          "@type": "Question",
          "name": "Is ArivuOn Academy available globally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. ArivuOn Academy is a globally accessible online training institute. Students from India, UAE, Bahrain, Kuwait, Saudi Arabia, Singapore, Malaysia, Nigeria, Kenya, Australia, UK, Canada and worldwide enroll in our courses. Classes are conducted live online with recorded access.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the course fee at ArivuOn Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "All courses at ArivuOn Academy are priced at ₹10,000 (approximately $120 USD or 440 AED). Payments are accepted in INR, USD, EUR, AED, and KWD to serve our global student community.",
          },
        },
        {
          "@type": "Question",
          "name": "Does ArivuOn Academy provide placement support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. ArivuOn Academy provides career guidance, resume preparation, mock interviews, LinkedIn profile optimization, and active placement assistance for all course graduates. Our graduates achieve 65% average salary hike.",
          },
        },
        {
          "@type": "Question",
          "name": "What salary can I expect after completing a course at ArivuOn Academy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Python course graduates typically earn ₹8–25 LPA. DevOps engineers earn ₹12–30 LPA. Data Science professionals earn ₹12–40 LPA. The Python + AI + AWS DevOps Combo Pack prepares engineers for roles earning ₹15–35 LPA. Salaries vary based on experience and location.",
          },
        },
        {
          "@type": "Question",
          "name": "How long are ArivuOn Academy courses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Python & Django: 12 weeks. AWS DevOps Engineering: 16 weeks. Python + AI + AWS DevOps Combo: 12 weeks. React Development: 10 weeks. Data Science & ML: 14 weeks. All courses include live sessions, recordings, and 1:1 mentorship.",
          },
        },
      ],
    },

  ],
};

// ════════════════════════════════════════════════════════════════════════════
// ADDITIONAL META TAGS (injected as raw head elements)
// These are not supported by Next.js Metadata API but are still read
// by search engines, social crawlers, and some AI platforms.
// ════════════════════════════════════════════════════════════════════════════
function SeoHeadTags() {
  return (
    <>
      {/* ── Geo signals ─────────────────────────────────────────────────── */}
      {/* These tell search engines your physical base while geo.placename=Global signals worldwide reach */}
      <meta name="geo.region"    content="IN-TN" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
      <meta name="geo.position"  content="13.0827;80.2707" />
      <meta name="ICBM"          content="13.0827, 80.2707" />

      {/* ── Distribution signals ─────────────────────────────────────────── */}
      <meta name="distribution" content="global" />
      <meta name="coverage"     content="worldwide" />
      <meta name="rating"       content="general" />
      <meta name="language"     content="English" />
      <meta name="target"       content="all" />

      {/* ── Content signals for education crawlers ───────────────────────── */}
      <meta name="subject"
        content="Python Programming, AWS DevOps, AI, React, Data Science, Software Engineering" />
      <meta name="topic"
        content="Online tech courses, software training, coding bootcamp, developer education" />
      <meta name="category"
        content="Education, Online Learning, Software Training, Technology" />
      <meta name="classification"
        content="Education, Online Software Training, Tech Academy" />
      <meta name="abstract"
        content="ArivuOn Academy offers globally accessible online software training in Python, AI, AWS DevOps, React and Data Science. Live mentorship, real projects, placement support, globally accessible from anywhere in the world." />

      {/* ── Ownership ────────────────────────────────────────────────────── */}
      <meta name="owner"          content="ArivuOn Academy" />
      <meta name="author"         content="ArivuOn Academy" />
      <meta name="copyright"      content={`© ${new Date().getFullYear()} ArivuOn Academy`} />
      <meta name="revisit-after"  content="3 days" />
      <meta name="identifier-URL" content={SITE_URL} />

      {/* ── Social media platform-specific OG overrides ───────────────────
           These ensure the image is not cropped on WhatsApp, Telegram,
           Instagram DMs, Discord, and Slack link previews.             */}
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type"   content="image/png" />

      {/* WhatsApp uses og:image — already set — but also reads this: */}
      <meta property="og:image:secure_url"
        content={`${SITE_URL}/og-image.png`} />

      {/* ── LinkedIn-specific ─────────────────────────────────────────────
           LinkedIn requires these to reliably show large image previews: */}
      <meta property="og:type"        content="website" />
      <meta property="og:updated_time"
        content={new Date().toISOString()} />

      {/* ── Pinterest Rich Pin ────────────────────────────────────────────
           Enables Pin button and rich data on Pinterest:                 */}
      <meta name="pinterest:description"
        content="Learn Python, AI, DevOps, React and Data Science online with live mentorship. Global tech training by ArivuOn Academy." />

      {/* ── Telegram ─────────────────────────────────────────────────────
           Telegram reads og:image. Already set. Title override:         */}
      <meta name="telegram:channel" content="@arivuonacademy" />

      {/* ── Microsoft Bing / Clarity ─────────────────────────────────────
           If you use Bing Clarity analytics, paste the tag ID below:    */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION" /> */}

      {/* ── Apple mobile web app ──────────────────────────────────────────
           When users add your site to iOS homescreen:                    */}
      <meta name="apple-mobile-web-app-title"   content="ArivuOn Academy" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* ── Preconnect critical third-party domains ───────────────────────
           Reduces Time-to-First-Byte for Google Fonts, analytics:        */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* ── DNS prefetch for CDNs ─────────────────────────────────────────
           Resolves DNS early so image loads don't block rendering:        */}
      <link rel="dns-prefetch" href="//academy.arivuon.in" />

      {/* ── Canonical self-reference (belt + suspenders) ──────────────────
           Already set via metadata.alternates.canonical above.
           This explicit tag is a fallback for older crawlers:             */}
      <link rel="canonical" href={SITE_URL} />
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
      // dir="auto" allows Arabic content to render RTL when needed
      dir="auto"
    >
      <head>

        {/* ── Favicon ────────────────────────────────────────────────────── */}
        <link rel="icon"             href="/favicon.ico" />
        <link rel="icon"             href="/icon-32.png"          type="image/png" sizes="32x32" />
        <link rel="icon"             href="/icon-16.png"          type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* ── Additional meta tags (not supported by Next.js Metadata API) ─ */}
        <SeoHeadTags />

        {/* ── JSON-LD Structured Data ────────────────────────────────────── */}
        {/* Organization + WebSite + FAQ — all in one graph.                 */}
        {/* This is what creates Knowledge Panels, FAQ dropdowns, and        */}
        {/* star ratings in Google search results.                           */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA, null, 0),
          }}
        />

      </head>

      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50/30">

        <GlobalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </GlobalProvider>

      </body>
    </html>
  );
}
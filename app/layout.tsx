import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/data/content";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import KuralChatbotClient from "@/components/chatbot/KuralChatbotClient";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "CrackLeap Academy | Live  Agentic AI, Python & AWS DevOps Training",
    template: "%s | CrackLeap Academy",
  },
  description:
    "CrackLeap Academy by Vertex Loop Pvt Ltd (Chennai, India) is a live, mentor-led software training academy — Python + Agentic AI + AWS, Django, Full Stack, React and AWS & DevOps, taught by working engineers. Join from anywhere in the world; fees shared on enquiry. Founding college MOU partnerships now open.",
  keywords: [
    "CrackLeap", "software training academy", "software training institute in India",
    "Agentic AI course online", "Agentic AI course", "Generative AI course", "AI training",
    "AWS DevOps training", "Python Django course", "React JS course", "Python full stack course",
    "live online coding courses", "Vertex Loop",
  ],
  authors: [{ name: "Vertex Loop Pvt Ltd" }],
  creator: "Vertex Loop Pvt Ltd",
  publisher: "Vertex Loop Pvt Ltd",
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "CrackLeap Academy",
    title: "CrackLeap Academy | Agentic AI, Python & AWS DevOps Training",
    description:
      "Live, mentor-led software training by Vertex Loop, Chennai — Python + Agentic AI + AWS, Django, Full Stack, React, AWS & DevOps. Project-based, with 1:1 mentorship and a verifiable certificate. Join from anywhere in the world.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "CrackLeap Academy — Leap Beyond Limits" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LoopVertex99532",
    creator: "@LoopVertex99532",
    title: "CrackLeap Academy | Agentic AI, Python & AWS DevOps Training",
    description:
      "Learn by building. Mentored by engineers who ship. Live software training — enroll from anywhere in the world; fees shared on enquiry.",
    images: ["/og-cover.png"],
  },
  category: "education",
};

function jsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${SITE.url}/#organization`,
    name: "CrackLeap Academy",
    alternateName: ["CrackLeap", "Crack Leap"],
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/og-cover.png`,
    slogan: "Leap Beyond Limits",
    description:
      "Live, mentor-led software training academy of Vertex Loop Pvt Ltd, Chennai, India — programs in Python + Agentic AI + AWS, Python Django, Python Full Stack, React JS and AWS & DevOps, taught in IST and available worldwide. No placement guarantee: career-preparation guidance, verifiable certificates and skill reports. Founding college MOU partnerships now open.",
    areaServed: [
      { "@type": "Place", name: "Worldwide" },
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Tamil Nadu" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      telephone: SITE.phone,
      contactType: "admissions",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://vertexloop.in/#organization",
      name: "Vertex Loop Pvt Ltd",
      url: SITE.parentUrl,
    },
    sameAs: [
      "https://www.linkedin.com/company/crack-leap",
      "https://www.instagram.com/crackleapacademy",
      "https://x.com/LoopVertex99532",
      "https://github.com/vertexloopindia",
      "https://www.linkedin.com/company/vertex-loop",
    ],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: "CrackLeap Academy",
    url: SITE.url,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
  // FAQPage schema lives on the homepage only (where the FAQ is visible);
  // the course ItemList lives on /courses. See app/page.tsx and app/courses/page.tsx.
  return [org, website];
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {jsonLd().map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <KuralChatbotClient />
      </body>
    </html>
  );
}

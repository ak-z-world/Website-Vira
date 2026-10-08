import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQS, SITE } from "@/data/content";
import { COURSES } from "@/data/courses";
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
    default: "CrackLeap Academy | Live Online Agentic AI, Python & AWS DevOps Training",
    template: "%s | CrackLeap Academy",
  },
  description:
    "CrackLeap by Vertex Loop (Chennai, India) offers live, mentor-led training in Agentic AI, Generative AI, Python, React and AWS DevOps — enroll from anywhere in the world. Founding college MOU partnerships now open",
  keywords: [
    "CrackLeap", "Agentic AI training", "Generative AI course", "AI training online",
    "AWS DevOps training", "Python Django course", "React JS course", "Python full stack",
    "software training academy", "live online coding courses", "Vertex Loop",
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
    title: "CrackLeap Academy | Live Online Agentic AI, Python & AWS DevOps Training",
    description:
      "Mentor-led, project-based technology training — live online, worldwide. Python, Agentic AI, Generative AI, React, AWS & DevOps.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "CrackLeap Academy — Leap Beyond Limits" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@LoopVertex99532",
    creator: "@LoopVertex99532",
    title: "CrackLeap Academy | Live Online AI, Python & AWS DevOps Training",
    description:
      "Learn by building. Mentored by engineers who ship. Live online courses — enroll from anywhere in the world.",
    images: ["/og-cover.png"],
  },
  category: "education",
};

function jsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${SITE.url}/#organization`,
    name: "Crackleap",
    alternateName: ["CrackLeap", "CrackLeap Academy", "Crack Leap"],
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/og-cover.png`,
    slogan: "Leap Beyond Limits",
    description:
      "Software training academy of Vertex Loop Pvt Ltd, Chennai, India — live, mentor-led programs in Python, Agentic AI, Generative AI, React and AWS & DevOps, available worldwide. Founding college MOU partnerships now open.",
    areaServed: "Worldwide",
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
    },
    parentOrganization: {
      "@type": "Organization",
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
    name: "CrackLeap Academy",
    url: SITE.url,
    publisher: { "@type": "Organization", name: "Vertex Loop Pvt Ltd", url: SITE.parentUrl },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const courses = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CrackLeap Training Programs",
    itemListElement: COURSES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.name,
        description: `${c.tagline} ${c.project.title}: ${c.project.desc}`,
        provider: { "@type": "EducationalOrganization", name: "CrackLeap", url: SITE.url },
      },
    })),
  };
  return [org, website, faq, courses];
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
      </body>
    </html>
  );
}

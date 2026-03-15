import type { Metadata } from "next";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import Features from "./components/Features";
// import Testimonials from './components/Testimonials';
// import Cta from './components/Cta';

export const metadata: Metadata = {
  title:
    "ArivuOn Academy | Global Python, AI & DevOps Training Institute",

  description:
    "ArivuOn Academy is a global software training institute offering industry-focused Python, AI, AWS DevOps, and React courses. Learn with real-world projects, expert mentorship, and career-focused training designed for students worldwide.",

  keywords: [
    "Python training institute",
    "DevOps training course",
    "AI training program",
    "React development course",
    "AWS DevOps course",
    "software training institute",
    "online coding academy",
    "learn programming online",
    "global software training",
    "Python DevOps bootcamp",
    "ArivuOn Academy",
  ],

  alternates: {
    canonical: "https://academy.arivuon.in",
  },

  openGraph: {
    title:
      "ArivuOn Academy | Global Python, AI & DevOps Training Institute",
    description:
      "Learn Python, AI, AWS DevOps, and React with industry-ready training at ArivuOn Academy. Real-world projects and mentorship for students worldwide.",
    url: "https://academy.arivuon.in",
    siteName: "ArivuOn Academy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ArivuOn Academy Software Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ArivuOn Academy | Global Tech Training",
    description:
      "Master Python, AI, AWS DevOps and React with real-world projects and mentorship.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "ArivuOn Academy",
            "url": "https://academy.arivuon.in",
            "logo": "https://academy.arivuon.in/logo.png",
            "description":
              "ArivuOn Academy is a global software training institute providing Python, AI, AWS DevOps, and React training programs with real-world projects and mentorship.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Training Courses",
              "itemListElement": [
                {
                  "@type": "Course",
                  "name": "Python Programming Course",
                  "url": "https://academy.arivuon.in/courses/python",
                },
                {
                  "@type": "Course",
                  "name": "AWS DevOps Course",
                  "url": "https://academy.arivuon.in/courses/devops",
                },
                {
                  "@type": "Course",
                  "name": "React Development Course",
                  "url": "https://academy.arivuon.in/courses/react",
                },
                {
                  "@type": "Course",
                  "name": "Python + AI + AWS DevOps Combo Course",
                  "url":
                    "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen">
        <Hero />
        <Courses />
        <Stats />
        <Features />
        {/* <Testimonials /> */}
        {/* <Cta/> */}
      </div>
    </>
  );
}
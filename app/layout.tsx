import type { Metadata } from 'next';
import './globals.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { GlobalProvider } from "./providers"; // FIXED PATH

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.arivuon.in"),

  title: "ArivuOn Academy | Python, DevOps & React Training",

  description:
    "Master in-demand tech skills with our comprehensive Python, DevOps, and React training programs.",

  keywords: [
    "Python training",
    "DevOps course",
    "React development",
    "software training",
    "coding bootcamp",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "ArivuOn Academy | Python, DevOps & React Training",
    description:
      "Master in-demand tech skills with our comprehensive training programs.",
    url: "https://academy.arivuon.in",
    siteName: "ArivuOn Academy",
    images: [
      {
        url: "/og-image.png", // from public folder
        width: 1200,
        height: 630,
        alt: "ArivuOn Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ArivuOn Academy",
    description: "Master in-demand tech skills.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "EducationalOrganization",
                    "@id": "https://academy.arivuon.in/#organization",
                    "name": "ArivuOn Academy",
                    "alternateName": ["Arivuon Academy", "ArivuOn"],
                    "url": "https://academy.arivuon.in",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://academy.arivuon.in/logo.png",
                      "width": 400,
                      "height": 100
                    },
                    "image": "https://academy.arivuon.in/og-image.png",
                    "description": "ArivuOn Academy offers globally accessible Python, DevOps, AWS, and React training programs for students and professionals worldwide.",
                    "foundingDate": "2024",
                    "email": "contact@arivuon.in",  // replace with real email
                    "telephone": "+91-XXXXXXXXXX",   // replace with real phone
                    "address": {
                      "@type": "PostalAddress",
                      "addressCountry": "IN",
                      "addressRegion": "Tamil Nadu"
                    },
                    "sameAs": [
                      "https://www.youtube.com/@arivuonacademy",   // add your real profiles
                      "https://www.linkedin.com/company/arivuon",
                      "https://twitter.com/arivuonacademy",
                      "https://www.instagram.com/arivuonacademy",
                      "https://g.co/kgs/XXXXXX"  // Google Business Profile URL
                    ],
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "ArivuOn Academy Courses",
                      "itemListElement": [
                        {
                          "@type": "Course",
                          "name": "Python Programming Course",
                          "url": "https://academy.arivuon.in/courses/python"
                        },
                        {
                          "@type": "Course",
                          "name": "AWS DevOps Course",
                          "url": "https://academy.arivuon.in/courses/devops"
                        },
                        {
                          "@type": "Course",
                          "name": "Python + AWS DevOps Combo",
                          "url": "https://academy.arivuon.in/courses/python-aws-devops-combo"
                        },
                        {
                          "@type": "Course",
                          "name": "React Development Course",
                          "url": "https://academy.arivuon.in/courses/react"
                        }
                      ]
                    }
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://academy.arivuon.in/#website",
                    "url": "https://academy.arivuon.in",
                    "name": "ArivuOn Academy",
                    "publisher": {
                      "@id": "https://academy.arivuon.in/#organization"
                    },
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://academy.arivuon.in/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  }
                ]
              })
            }}
          />
        </head>

        <body className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50/30">

          {/* Provider wraps everything */}
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

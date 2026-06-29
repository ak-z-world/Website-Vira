import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../_components/Breadcrumb";
import { TUTORIALS_DATA } from "./_data/tutorials";

const SITE_URL = "https://www.academy.arivuon.com";
const PAGE_PATH = "/resources/tutorials";

export function generateMetadata(): Metadata {
  const title = "Free Programming Tutorials 2026 | Python, React, SQL & More — Crack Leap Academy";
  const description =
    "In-depth, free tutorials covering Python, Django, React, JavaScript, SQL, PostgreSQL, AWS, Docker, Git & GitHub, and AI fundamentals. Real code, interview prep, and production best practices.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${PAGE_PATH}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${PAGE_PATH}`,
      siteName: "Crack Leap Academy",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og/tutorials.png`,
          width: 1200,
          height: 630,
          alt: "Crack Leap Academy Tutorials",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og/tutorials.png`],
    },
  };
}

function difficultyBadgeClasses(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-50 text-green-700 border border-green-200";
    case "Intermediate":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "Advanced":
      return "bg-red-50 text-red-700 border border-red-200";
    default:
      return "bg-blue-50 text-blue-700 border border-blue-200";
  }
}

export default function TutorialsIndexPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Tutorials", href: "/resources/tutorials" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Programming Tutorials",
    description:
      "In-depth, free tutorials covering Python, Django, React, JavaScript, SQL, PostgreSQL, AWS, Docker, Git & GitHub, and AI fundamentals.",
    url: `${SITE_URL}${PAGE_PATH}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Crack Leap Academy",
      url: SITE_URL,
    },
    hasPart: TUTORIALS_DATA.map((tutorial) => ({
      "@type": "TechArticle",
      headline: tutorial.title,
      description: tutorial.tagline,
      url: `${SITE_URL}${PAGE_PATH}/${tutorial.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <Breadcrumb items={breadcrumbItems} />

            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                10 Complete Tutorials
              </span>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Programming Tutorials
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Deep, practical, no-fluff tutorials covering the languages and
                tools shaping software in 2026 — real code examples, production
                best practices, and interview-ready explanations for every topic.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorial Grid */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TUTORIALS_DATA.map((tutorial) => (
              <Link
                key={tutorial.slug}
                href={`/resources/tutorials/${tutorial.slug}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${tutorial.color}15` }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tutorial.color}
                      strokeWidth="1.8"
                      className="w-6 h-6"
                    >
                      <path d={tutorial.icon} />
                    </svg>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyBadgeClasses(
                      tutorial.difficulty
                    )}`}
                  >
                    {tutorial.difficulty}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {tutorial.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
                  {tutorial.tagline}
                </p>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    {tutorial.readTime}
                  </span>
                  <span>{tutorial.prerequisites.length} prerequisites</span>
                  <span>
                    Updated{" "}
                    {new Date(tutorial.lastUpdated).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                  Read tutorial →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

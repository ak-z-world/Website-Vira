import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../_components/Breadcrumb";
import { TUTORIALS_DATA } from "./_data/tutorials";
import { SITE_URL } from "@/lib/seo";

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
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "Intermediate":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "Advanced":
      return "bg-rose-50 text-rose-700 border border-rose-200";
    default:
      return "bg-violet-50 text-violet-700 border border-violet-200";
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

      <div className="min-h-screen bg-[#F8F9FE] text-slate-800">
        {/* Hero */}
        <section className="relative pt-12 sm:pt-14 pb-12 overflow-hidden border-b border-slate-200/60">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumb items={breadcrumbItems} />

            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5FA] border border-white/80 shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] text-[#8B5CF6] text-xs font-bold uppercase tracking-wider">
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

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Programming Tutorials
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Deep, practical, no-fluff tutorials covering the languages and
                tools shaping software in 2026 — real code examples, production
                best practices, and interview-ready explanations for every topic.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorial Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TUTORIALS_DATA.map((tutorial) => (
              <Link
                key={tutorial.slug}
                href={`/resources/tutorials/${tutorial.slug}`}
                className="group flex flex-col bg-[#F4F5FA] border border-white/80 rounded-2xl p-6 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#d0d2dc,-8px_-8px_18px_#ffffff] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff]"
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
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${difficultyBadgeClasses(
                      tutorial.difficulty
                    )}`}
                  >
                    {tutorial.difficulty}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors leading-snug">
                  {tutorial.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed flex-1">
                  {tutorial.tagline}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#8B5CF6]"
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

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#8B5CF6] group-hover:gap-2.5 transition-all">
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

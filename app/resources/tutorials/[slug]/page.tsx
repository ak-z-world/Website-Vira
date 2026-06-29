import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "../../_components/Breadcrumb";
import FAQAccordion from "../../_components/FAQAccordion";
import RelatedResources from "../../_components/RelatedResources";
import TableOfContents from "../../_components/TableOfContents";
import { TUTORIALS_DATA } from "../_data/tutorials";
import InstallTabs from "../_components/InstallTabs";

const SITE_URL = "https://www.academy.arivuon.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TUTORIALS_DATA.map((tutorial) => ({ slug: tutorial.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = TUTORIALS_DATA.find((t) => t.slug === slug);

  if (!tutorial) {
    return { title: "Tutorial Not Found" };
  }

  const url = `${SITE_URL}/resources/tutorials/${tutorial.slug}`;

  return {
    title: tutorial.seo.title,
    description: tutorial.seo.description,
    keywords: tutorial.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: tutorial.seo.title,
      description: tutorial.seo.description,
      url,
      siteName: "Crack Leap Academy",
      type: "article",
      images: [
        {
          url: `${SITE_URL}/og/tutorials/${tutorial.slug}.png`,
          width: 1200,
          height: 630,
          alt: tutorial.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tutorial.seo.title,
      description: tutorial.seo.description,
      images: [`${SITE_URL}/og/tutorials/${tutorial.slug}.png`],
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

function CodeBlock({
  code,
  language,
  output,
}: {
  code: string;
  language: string;
  output?: string;
}) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">
          {language}
        </span>
        <span className="text-xs text-gray-500 select-none">copy</span>
      </div>
      <pre className="text-gray-100 font-mono text-sm p-5 overflow-x-auto whitespace-pre">
        <code>{code}</code>
      </pre>
      {output && (
        <div className="bg-gray-950 border-t border-gray-700 px-5 py-3 text-green-400 font-mono text-xs whitespace-pre overflow-x-auto">
          {output}
        </div>
      )}
    </div>
  );
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;
  const tutorial = TUTORIALS_DATA.find((t) => t.slug === slug);

  if (!tutorial) {
    notFound();
  }

  const url = `${SITE_URL}/resources/tutorials/${tutorial.slug}`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Tutorials", href: "/resources/tutorials" },
    { label: tutorial.title, href: `/resources/tutorials/${tutorial.slug}` },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tutorial.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: tutorial.title,
    description: tutorial.description,
    datePublished: tutorial.lastUpdated,
    dateModified: tutorial.lastUpdated,
    url,
    author: {
      "@type": "Organization",
      name: "Crack Leap Academy",
    },
    publisher: {
      "@type": "Organization",
      name: "Crack Leap Academy",
    },
  };

  const tocSections = [
    { id: "what-is-it", label: `What is ${tutorial.title.replace(" Tutorial 2026", "")}?` },
    { id: "why-learn", label: "Why Learn in 2026?" },
    { id: "history", label: "History" },
    { id: "core-concepts", label: "Core Concepts" },
    { id: "installation", label: "Installation" },
    { id: "code-examples", label: "Code Examples" },
    { id: "best-practices", label: "Best Practices" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "real-world-use-cases", label: "Real-World Use Cases" },
    { id: "comparison", label: "Comparison" },
    { id: "interview-questions", label: "Interview Questions" },
    { id: "resources", label: "Resources" },
    { id: "faqs", label: "FAQs" },
  ];

  const resourceGroups: Record<string, typeof tutorial.resources> = {
    Book: [],
    Course: [],
    Docs: [],
    Tool: [],
    Community: [],
  };
  for (const resource of tutorial.resources) {
    resourceGroups[resource.type]?.push(resource);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section
          className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-gray-100"
          style={{
            backgroundImage: `linear-gradient(135deg, ${tutorial.color}10, white 60%)`,
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-14">
            <Breadcrumb items={breadcrumbItems} />

            <div className="mt-6 flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${tutorial.color}15` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={tutorial.color}
                  strokeWidth="1.8"
                  className="w-8 h-8"
                >
                  <path d={tutorial.icon} />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  {tutorial.title}
                </h1>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {tutorial.tagline}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${difficultyBadgeClasses(
                  tutorial.difficulty
                )}`}
              >
                {tutorial.difficulty}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
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
              <span className="text-sm text-gray-500">
                Updated{" "}
                {new Date(tutorial.lastUpdated).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {tutorial.prerequisites.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tutorial.prerequisites.map((prereq) => (
                  <span
                    key={prereq}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600"
                  >
                    {prereq}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl">
              {tutorial.description}
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
          {/* TOC */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <TableOfContents items={tocSections} />
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {/* What is it */}
            <section id="what-is-it" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is {tutorial.title.replace(" Tutorial 2026", "")}?
              </h2>
              <div className="border-l-4 border-blue-600 bg-blue-50 px-6 py-5 rounded-r-xl">
                <p className="text-gray-800 leading-relaxed">{tutorial.whatIsIt}</p>
              </div>
            </section>

            {/* Why Learn in 2026 */}
            <section id="why-learn" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Learn in 2026?</h2>
              <p className="text-gray-700 leading-relaxed">{tutorial.whyLearn2026}</p>
            </section>

            {/* History */}
            <section id="history" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">History</h2>
              <p className="text-gray-700 leading-relaxed">{tutorial.history}</p>
            </section>

            {/* Core Concepts */}
            <section id="core-concepts" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Concepts</h2>
              <div className="space-y-4">
                {tutorial.coreConcepts.map((concept) => (
                  <div
                    key={concept.title}
                    className="bg-white border border-gray-200 rounded-xl p-6 mb-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {concept.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {concept.explanation}
                    </p>
                    {concept.codeExample && (
                      <CodeBlock code={concept.codeExample} language="code" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation</h2>
              <InstallTabs installation={tutorial.installation} />
            </section>

            {/* Code Examples */}
            <section id="code-examples" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Examples</h2>
              <div className="space-y-8">
                {tutorial.codeExamples.map((example) => (
                  <div key={example.title}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {example.description}
                    </p>
                    <CodeBlock
                      code={example.code}
                      language={example.language}
                      output={example.output}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
              <div className="space-y-6">
                {tutorial.bestPractices.map((practice) => (
                  <div
                    key={practice.title}
                    className="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {practice.description}
                    </p>
                    {(practice.good || practice.bad) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {practice.good && (
                          <div>
                            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 block">
                              ✓ Good
                            </span>
                            <CodeBlock code={practice.good} language="code" />
                          </div>
                        )}
                        {practice.bad && (
                          <div>
                            <span className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2 block">
                              ✕ Bad
                            </span>
                            <CodeBlock code={practice.bad} language="code" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes</h2>
              <div className="space-y-4">
                {tutorial.commonMistakes.map((item) => (
                  <div
                    key={item.mistake}
                    className="bg-red-50 border border-red-200 rounded-xl p-5"
                  >
                    <p className="font-semibold text-red-900 mb-1.5">
                      ✕ {item.mistake}
                    </p>
                    <p className="text-red-800 leading-relaxed">
                      <span className="font-semibold">Fix:</span> {item.fix}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Real-World Use Cases */}
            <section id="real-world-use-cases" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Real-World Use Cases
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="text-left px-5 py-3 font-semibold">Company</th>
                      <th className="text-left px-5 py-3 font-semibold">Use Case</th>
                      <th className="text-left px-5 py-3 font-semibold">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tutorial.realWorldUseCases.map((useCase, idx) => (
                      <tr
                        key={useCase.company}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-5 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">
                          {useCase.company}
                        </td>
                        <td className="px-5 py-4 text-gray-700 align-top">
                          {useCase.useCase}
                        </td>
                        <td className="px-5 py-4 text-gray-700 align-top">
                          {useCase.impact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparison</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="text-left px-5 py-3 font-semibold">Feature</th>
                      <th className="text-left px-5 py-3 font-semibold">
                        {tutorial.title.replace(" Tutorial 2026", "")}
                      </th>
                      {tutorial.comparisonTable[0] && (
                        <>
                          <th className="text-left px-5 py-3 font-semibold">
                            {tutorial.comparisonTable[0].alternative1.name}
                          </th>
                          <th className="text-left px-5 py-3 font-semibold">
                            {tutorial.comparisonTable[0].alternative2.name}
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {tutorial.comparisonTable.map((row, idx) => (
                      <tr
                        key={row.feature}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-5 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">
                          {row.feature}
                        </td>
                        <td className="px-5 py-4 text-gray-700 align-top">
                          {row.thisTech}
                        </td>
                        <td className="px-5 py-4 text-gray-700 align-top">
                          {row.alternative1.value}
                        </td>
                        <td className="px-5 py-4 text-gray-700 align-top">
                          {row.alternative2.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Interview Questions */}
            <section id="interview-questions" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Interview Questions
              </h2>
              <div className="space-y-3">
                {tutorial.interviewQuestions.map((qa, idx) => (
                  <details
                    key={qa.question}
                    className="group bg-white border border-gray-200 rounded-xl p-5 open:border-blue-300"
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-gray-900">
                      <span>
                        <span className="text-blue-600 mr-2">Q{idx + 1}.</span>
                        {qa.question}
                      </span>
                      <span className="text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0 text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-700 leading-relaxed">{qa.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Resources */}
            <section id="resources" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(resourceGroups).map(([type, items]) =>
                  items.length > 0 ? (
                    <div key={type}>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        {type === "Docs" ? "Documentation" : `${type}s`}
                      </h3>
                      <ul className="space-y-3">
                        {items.map((resource) => (
                          <li
                            key={resource.title}
                            className="bg-white border border-gray-200 rounded-xl p-4"
                          >
                            <p className="font-semibold text-gray-900">
                              {resource.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {resource.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null
                )}
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-24 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={tutorial.faqs} />
            </section>

            {/* Related Resources */}
            {/* <RelatedResources items={tutorial.relatedResources} /> */}
          </main>
        </div>
      </div>
    </>
  );
}

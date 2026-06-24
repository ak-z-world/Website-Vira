"use client";

import type { Country, State, City } from "@/lib/location-data/types";

interface CityResourcesPageProps {
  country: Country;
  state: State;
  city: City;
}

interface ResourceItem {
  title: string;
  description: string;
  type: "cheatsheet" | "roadmap" | "practice" | "guide";
  courseSlug: string;
  courseName: string;
  downloadLabel: string;
  href: string;
}

const RESOURCE_TYPE_LABEL: Record<ResourceItem["type"], string> = {
  cheatsheet: "Cheat Sheet",
  roadmap: "Roadmap",
  practice: "Practice Set",
  guide: "Study Guide",
};

const RESOURCE_TYPE_COLOR: Record<ResourceItem["type"], string> = {
  cheatsheet: "#0f3460",
  roadmap: "#e53935",
  practice: "#43a047",
  guide: "#f57c00",
};

function buildResources(citySlug: string): ResourceItem[] {
  const base = `https://www.arivuon.com/resources`;
  return [
    {
      title: "Python Quick Reference",
      description:
        "Core syntax, built-in functions, data structures, comprehensions, and common patterns — everything you need for Python interviews.",
      type: "cheatsheet",
      courseSlug: "python-course",
      courseName: "Python Programming",
      downloadLabel: "Download Cheat Sheet",
      href: `${base}/python-cheatsheet?city=${citySlug}`,
    },
    {
      title: "Python Developer Roadmap",
      description:
        "A week-by-week learning path from absolute beginner to job-ready Python developer, aligned to ArivuOn's curriculum.",
      type: "roadmap",
      courseSlug: "python-course",
      courseName: "Python Programming",
      downloadLabel: "Download Roadmap",
      href: `${base}/python-roadmap?city=${citySlug}`,
    },
    {
      title: "Python Practice Problems",
      description:
        "50 graded exercises covering functions, OOP, file I/O, APIs, and Pandas — the exact problem types used in local placement drives.",
      type: "practice",
      courseSlug: "python-course",
      courseName: "Python Programming",
      downloadLabel: "Download Practice Set",
      href: `${base}/python-practice?city=${citySlug}`,
    },
    {
      title: "Full Stack Development Roadmap",
      description:
        "A structured path from HTML/CSS through React, Node.js, and PostgreSQL to your first deployed full-stack application.",
      type: "roadmap",
      courseSlug: "full-stack-development",
      courseName: "Full Stack Development",
      downloadLabel: "Download Roadmap",
      href: `${base}/full-stack-roadmap?city=${citySlug}`,
    },
    {
      title: "React + TypeScript Cheat Sheet",
      description:
        "Hooks, component patterns, TypeScript generics, React Query, and Zustand patterns condensed into a two-page reference.",
      type: "cheatsheet",
      courseSlug: "react",
      courseName: "React Development",
      downloadLabel: "Download Cheat Sheet",
      href: `${base}/react-cheatsheet?city=${citySlug}`,
    },
    {
      title: "Data Science Interview Prep Guide",
      description:
        "Statistics refresher, Pandas patterns, SQL essentials, and ML model evaluation — structured for data analyst and data scientist interviews.",
      type: "guide",
      courseSlug: "data-science",
      courseName: "Data Science",
      downloadLabel: "Download Guide",
      href: `${base}/data-science-guide?city=${citySlug}`,
    },
    {
      title: "Data Science Roadmap",
      description:
        "Step-by-step learning plan covering EDA, statistics, Scikit-learn, and dashboard building for the complete data science workflow.",
      type: "roadmap",
      courseSlug: "data-science",
      courseName: "Data Science",
      downloadLabel: "Download Roadmap",
      href: `${base}/data-science-roadmap?city=${citySlug}`,
    },
    {
      title: "Machine Learning Cheat Sheet",
      description:
        "Algorithm selection guide, model evaluation metrics, regularisation techniques, and MLOps quick-reference on a single sheet.",
      type: "cheatsheet",
      courseSlug: "machine-learning",
      courseName: "Machine Learning",
      downloadLabel: "Download Cheat Sheet",
      href: `${base}/ml-cheatsheet?city=${citySlug}`,
    },
    {
      title: "Machine Learning Roadmap",
      description:
        "From classical ML through deep learning, NLP, and production deployment — a complete, opinionated learning path.",
      type: "roadmap",
      courseSlug: "machine-learning",
      courseName: "Machine Learning",
      downloadLabel: "Download Roadmap",
      href: `${base}/machine-learning-roadmap?city=${citySlug}`,
    },
    {
      title: "AWS DevOps Study Guide",
      description:
        "IAM, EC2, S3, VPC, Docker, Kubernetes, and CI/CD concepts explained with the depth required for AWS Solutions Architect and DevOps Professional exams.",
      type: "guide",
      courseSlug: "aws-devops",
      courseName: "AWS DevOps",
      downloadLabel: "Download Guide",
      href: `${base}/aws-devops-guide?city=${citySlug}`,
    },
    {
      title: "Java Spring Boot Cheat Sheet",
      description:
        "Spring IoC, REST controllers, JPA repositories, JUnit patterns, and common interview questions in one compact reference sheet.",
      type: "cheatsheet",
      courseSlug: "java",
      courseName: "Java Programming",
      downloadLabel: "Download Cheat Sheet",
      href: `${base}/java-cheatsheet?city=${citySlug}`,
    },
    {
      title: "Java Practice Problems",
      description:
        "40 Spring Boot and core Java problems aligned to TCS, Cognizant, Wipro, and Infosys technical screening formats.",
      type: "practice",
      courseSlug: "java",
      courseName: "Java Programming",
      downloadLabel: "Download Practice Set",
      href: `${base}/java-practice?city=${citySlug}`,
    },
    {
      title: "AI Engineering Starter Guide",
      description:
        "LLM fundamentals, prompt engineering patterns, RAG architecture overview, and LangChain quickstart — the fastest path to your first AI application.",
      type: "guide",
      courseSlug: "ai-engineering",
      courseName: "AI Engineering",
      downloadLabel: "Download Guide",
      href: `${base}/ai-engineering-guide?city=${citySlug}`,
    },
  ];
}

const COURSE_GROUPS = [
  { label: "All", value: "all" },
  { label: "Python", value: "python-course" },
  { label: "Full Stack", value: "full-stack-development" },
  { label: "React", value: "react" },
  { label: "Data Science", value: "data-science" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "AWS DevOps", value: "aws-devops" },
  { label: "Java", value: "java" },
  { label: "AI Engineering", value: "ai-engineering" },
];

export function CityResourcesPage({
  country,
  state,
  city,
}: CityResourcesPageProps) {
  const resources = buildResources(city.slug);

  return (
    <main className="crp-root">
      <style>{`
        .crp-root {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #1a1a2e;
          background: #f8f9ff;
          min-height: 100vh;
        }
        .crp-hero {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          color: #fff;
          padding: 4rem 1.5rem 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .crp-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(229,57,53,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .crp-hero-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .crp-breadcrumb {
          font-size: 0.8rem;
          opacity: 0.65;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .crp-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }
        .crp-breadcrumb a:hover { text-decoration: underline; }
        .crp-breadcrumb span { margin: 0 0.35rem; }
        .crp-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e57373;
          margin-bottom: 0.75rem;
        }
        .crp-hero h1 {
          font-size: clamp(1.9rem, 4.5vw, 3rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.025em;
        }
        .crp-hero-sub {
          font-size: 1.02rem;
          opacity: 0.8;
          max-width: 600px;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .crp-hero-stats {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .crp-stat {
          text-align: center;
        }
        .crp-stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
        }
        .crp-stat-label {
          font-size: 0.78rem;
          opacity: 0.65;
          margin-top: 0.15rem;
        }
        .crp-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        .crp-notice {
          background: #fff;
          border-left: 4px solid #43a047;
          border-radius: 0 8px 8px 0;
          padding: 1rem 1.25rem;
          font-size: 0.93rem;
          color: #1a1a2e;
          line-height: 1.6;
          margin-bottom: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .crp-notice strong {
          color: #43a047;
        }
        .crp-filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .crp-filter-btn {
          background: #fff;
          border: 1.5px solid #e8eaf6;
          color: #444;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          cursor: default;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .crp-filter-btn[aria-pressed="true"] {
          background: #0f3460;
          border-color: #0f3460;
          color: #fff;
        }
        .crp-section-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .crp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        .crp-resource-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          border: 1px solid #e8eaf6;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .crp-resource-card:hover {
          box-shadow: 0 6px 20px rgba(15,52,96,0.1);
          border-color: #c5cae9;
        }
        .crp-resource-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .crp-resource-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f3460;
          line-height: 1.35;
        }
        .crp-resource-type-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding: 0.2rem 0.55rem;
          border-radius: 20px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .crp-resource-course {
          font-size: 0.78rem;
          font-weight: 600;
          color: #888;
        }
        .crp-resource-desc {
          font-size: 0.87rem;
          color: #444;
          line-height: 1.6;
          flex: 1;
        }
        .crp-resource-download {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #0f3460;
          color: #fff;
          border: none;
          border-radius: 7px;
          padding: 0.65rem 1.1rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          margin-top: auto;
          transition: background 0.2s;
          cursor: pointer;
        }
        .crp-resource-download:hover {
          background: #0a2547;
        }
        .crp-resource-download svg {
          flex-shrink: 0;
        }
        .crp-cta-section {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          border-radius: 14px;
          padding: 2.5rem 2rem;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .crp-cta-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(229,57,53,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .crp-cta-inner {
          position: relative;
          max-width: 600px;
        }
        .crp-cta-heading {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }
        .crp-cta-sub {
          font-size: 0.95rem;
          opacity: 0.8;
          line-height: 1.6;
          margin: 0 0 1.25rem;
        }
        .crp-cta-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .crp-cta-btn-primary {
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.8rem 1.75rem;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s;
        }
        .crp-cta-btn-primary:hover { background: #c62828; }
        .crp-cta-btn-secondary {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          padding: 0.8rem 1.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s;
        }
        .crp-cta-btn-secondary:hover { border-color: rgba(255,255,255,0.8); }
        .crp-courses-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-bottom: 2rem;
        }
        .crp-courses-section h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .crp-courses-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .crp-course-chip {
          background: #f4f6ff;
          border: 1px solid #dde0f7;
          color: #333;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .crp-course-chip:hover {
          background: #e8eaf6;
          color: #0f3460;
        }
        .crp-faq-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .crp-faq-section h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .crp-faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .crp-faq-item {
          border: 1px solid #e8eaf6;
          border-radius: 8px;
          overflow: hidden;
        }
        .crp-faq-q {
          padding: 0.9rem 1.1rem;
          background: #f4f6ff;
          font-weight: 700;
          font-size: 0.93rem;
          color: #0f3460;
        }
        .crp-faq-a {
          padding: 0.9rem 1.1rem;
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 640px) {
          .crp-grid {
            grid-template-columns: 1fr;
          }
          .crp-cta-section {
            padding: 1.75rem 1.25rem;
          }
          .crp-hero-stats {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="crp-hero">
        <div className="crp-hero-inner">
          <nav className="crp-breadcrumb" aria-label="Breadcrumb">
            <a href="https://www.arivuon.com">Home</a>
            <span>›</span>
            <a href="https://www.arivuon.com/locations">Locations</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}`}>{country.name}</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}`}>{state.name}</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`}>{city.name}</a>
            <span>›</span>
            Free Resources
          </nav>
          <div className="crp-eyebrow">ArivuOn Academy · {city.name}</div>
          <h1>Free IT Training Resources in {city.name}</h1>
          <p className="crp-hero-sub">
            Download cheat sheets, roadmaps, practice sets, and study guides for Python, Full Stack Development, Data Science, Machine Learning, Java, AWS DevOps, React, and AI Engineering — all free for {city.name} students.
          </p>
          <div className="crp-hero-stats">
            <div className="crp-stat">
              <span className="crp-stat-value">{resources.length}</span>
              <div className="crp-stat-label">Free resources</div>
            </div>
            <div className="crp-stat">
              <span className="crp-stat-value">8</span>
              <div className="crp-stat-label">Courses covered</div>
            </div>
            <div className="crp-stat">
              <span className="crp-stat-value">100%</span>
              <div className="crp-stat-label">Free, no sign-up</div>
            </div>
          </div>
        </div>
      </div>

      <div className="crp-body">
        <div className="crp-notice" role="note">
          <strong>Completely free.</strong> All resources on this page are available to download immediately — no email required, no paywall. Created by ArivuOn Academy instructors based in {city.name} to reflect the skills local IT employers actually test during hiring.
        </div>

        <div className="crp-filter-bar" role="group" aria-label="Filter resources by course">
          {COURSE_GROUPS.map((group) => (
            <span
              key={group.value}
              className="crp-filter-btn"
              aria-pressed={group.value === "all" ? "true" : "false"}
              role="button"
              tabIndex={0}
            >
              {group.label}
            </span>
          ))}
        </div>

        <p className="crp-section-heading">All Resources — {city.name}</p>

        <div className="crp-grid" role="list" aria-label={`Free IT training resources for ${city.name}`}>
          {resources.map((resource) => (
            <article
              key={`${resource.courseSlug}-${resource.type}-${resource.title}`}
              className="crp-resource-card"
              role="listitem"
            >
              <div className="crp-resource-header">
                <h2 className="crp-resource-title">{resource.title}</h2>
                <span
                  className="crp-resource-type-badge"
                  style={{
                    background: `${RESOURCE_TYPE_COLOR[resource.type]}18`,
                    color: RESOURCE_TYPE_COLOR[resource.type],
                  }}
                  aria-label={`Resource type: ${RESOURCE_TYPE_LABEL[resource.type]}`}
                >
                  {RESOURCE_TYPE_LABEL[resource.type]}
                </span>
              </div>
              <div className="crp-resource-course" aria-label={`Course: ${resource.courseName}`}>
                {resource.courseName}
              </div>
              <p className="crp-resource-desc">{resource.description}</p>
              <a
                href={resource.href}
                className="crp-resource-download"
                aria-label={`${resource.downloadLabel} — ${resource.title}`}
                rel="noopener noreferrer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 1v8M4 7l3 3 3-3M1 11h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {resource.downloadLabel}
              </a>
            </article>
          ))}
        </div>

        <div className="crp-cta-section" aria-label="Enroll in a course at ArivuOn Academy">
          <div className="crp-cta-inner">
            <h2 className="crp-cta-heading">
              Ready to go beyond the cheat sheets?
            </h2>
            <p className="crp-cta-sub">
              These resources are a preview of how ArivuOn {city.name} teaches — project-first, industry-aligned, and specific to the companies hiring in {city.name}. Join a batch and turn these concepts into placement-ready skills.
            </p>
            <div className="crp-cta-row">
              <a
                href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`}
                className="crp-cta-btn-primary"
              >
                View {city.name} Courses
              </a>
              {city.whatsapp && (
                <a
                  href={`https://wa.me/${city.whatsapp.replace(/[^0-9]/g, "")}`}
                  className="crp-cta-btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="crp-courses-section">
          <h2>Courses Available in {city.name}</h2>
          <div className="crp-courses-chips">
            {city.activeCoursesSlugs.map((courseSlug) => {
              const label = COURSE_GROUPS.find((g) => g.value === courseSlug)?.label ?? courseSlug;
              return (
                <a
                  key={courseSlug}
                  href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}/${courseSlug}`}
                  className="crp-course-chip"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="crp-faq-section">
          <h2>Frequently Asked Questions</h2>
          <dl className="crp-faq-list">
            <div className="crp-faq-item">
              <dt className="crp-faq-q">Are all resources on this page genuinely free?</dt>
              <dd className="crp-faq-a">
                Yes. Every cheat sheet, roadmap, practice set, and guide on this page is free to download with no email address, account, or payment required. ArivuOn Academy publishes these resources to help {city.name} engineering students prepare for interviews regardless of whether they enrol in a course.
              </dd>
            </div>
            <div className="crp-faq-item">
              <dt className="crp-faq-q">Who created these study materials?</dt>
              <dd className="crp-faq-a">
                All resources are created by ArivuOn Academy instructors — active industry professionals with 6–11 years of experience at IT companies in {city.name}, Chennai, and Bengaluru. The content reflects real interview patterns and hiring requirements, not generic textbook material.
              </dd>
            </div>
            <div className="crp-faq-item">
              <dt className="crp-faq-q">Which companies in {city.name} do these resources prepare me for?</dt>
              <dd className="crp-faq-a">
                The practice sets and cheat sheets are calibrated to the technical assessments used by companies that actively hire from {city.name} — including local IT employers and Chennai and Bengaluru companies that hire remotely. The Java practice problems, for example, are specifically built around the assessment formats used by TCS, Wipro, Cognizant, and Infosys.
              </dd>
            </div>
            <div className="crp-faq-item">
              <dt className="crp-faq-q">Can I use these resources alongside another institute's course?</dt>
              <dd className="crp-faq-a">
                Yes. The cheat sheets, roadmaps, and practice problems are standalone documents. You can use them to supplement any learning path. That said, they are written to complement ArivuOn's curriculum and reference the same tools and frameworks the courses teach.
              </dd>
            </div>
            <div className="crp-faq-item">
              <dt className="crp-faq-q">How do I enrol in a course at ArivuOn {city.name}?</dt>
              <dd className="crp-faq-a">
                Visit the {city.name} courses page to see batch schedules, fees, and enrollment details for all available programs. You can also contact the {city.name} team directly
                {city.phone ? ` at ${city.phone}` : ""}
                {city.whatsapp ? ` or WhatsApp ${city.whatsapp}` : ""}.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
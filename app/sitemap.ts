// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://academy.arivuon.in";

// ─── TYPE DEFINITIONS ────────────────────────────────────────────────────────

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface CourseEntry {
  slug: string;
  ogImage: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
}

interface StaticPage {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
  ogImage: string;
}

interface RoadmapEntry {
  slug: string;
  ogImage: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
}

interface InterviewQuestionEntry {
  slug: string;
  ogImage: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
}

interface TutorialEntry {
  slug: string;
  ogImage: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
}

// ─── COURSE REGISTRY ────────────────────────────────────────────────────────
// Single source of truth. Add a course here → sitemap auto-updates on deploy.
// lastModified: set to the REAL date you last updated that page.
// Never use new Date() — Google stops trusting sites where everything
// claims to have changed today, every day.

const COURSES: CourseEntry[] = [
  {
    slug: "python",
    ogImage: "/og-image-python.png",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "devops",
    ogImage: "/og-image-devops.png",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "python-ai-aws-devops-combo",
    ogImage: "/og-image-combo.png",
    priority: 0.98, // Flagship — highest priority after homepage
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-10"),
  },
  {
    slug: "react",
    ogImage: "/og-image-react.png",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "data-science",
    ogImage: "/og-image-datasci.png",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
  },
];

// ─── ROADMAP REGISTRY ────────────────────────────────────────────────────────
// Roadmaps are high-value SEO targets — strong search intent ("roadmap 2026").
// Keep changeFrequency "yearly" unless you actively update them mid-year.

const ROADMAPS: RoadmapEntry[] = [
  {
    slug: "ai-engineer-roadmap-2026",
    ogImage: "/og-image-roadmap-ai.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "aws-devops-roadmap-2026",
    ogImage: "/og-image-roadmap-aws-devops.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "backend-roadmap-2026",
    ogImage: "/og-image-roadmap-backend.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "cloud-engineer-roadmap-2026",
    ogImage: "/og-image-roadmap-cloud.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "cyber-security-roadmap-2026",
    ogImage: "/og-image-roadmap-cybersec.png",
    priority: 0.88,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "data-scientist-roadmap-2026",
    ogImage: "/og-image-roadmap-datasci.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "frontend-roadmap-2026",
    ogImage: "/og-image-roadmap-frontend.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "full-stack-roadmap-2026",
    ogImage: "/og-image-roadmap-fullstack.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "ml-engineer-roadmap-2026",
    ogImage: "/og-image-roadmap-ml.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
  {
    slug: "python-developer-roadmap-2026",
    ogImage: "/og-image-roadmap-python.png",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
  },
];

// ─── INTERVIEW QUESTIONS REGISTRY ────────────────────────────────────────────
// High search-intent pages ("X interview questions 2026").
// Add each topic slug as you publish it.

const INTERVIEW_QUESTIONS: InterviewQuestionEntry[] = [
  // Examples — replace/extend with your real slugs from _data
  // {
  //   slug: "python-interview-questions",
  //   ogImage: "/og-image-iq-python.png",
  //   priority: 0.88,
  //   changeFrequency: "monthly",
  //   lastModified: new Date("2025-06-01"),
  // },
  // {
  //   slug: "devops-interview-questions",
  //   ogImage: "/og-image-iq-devops.png",
  //   priority: 0.88,
  //   changeFrequency: "monthly",
  //   lastModified: new Date("2025-06-01"),
  // },
];

// ─── TUTORIALS REGISTRY ──────────────────────────────────────────────────────
// Add each tutorial slug as you publish it.
// Use "weekly" if you frequently update tutorial content, "monthly" otherwise.

const TUTORIALS: TutorialEntry[] = [
  // Examples — replace/extend with your real slugs from _data
  // {
  //   slug: "python-for-beginners",
  //   ogImage: "/og-image-tut-python.png",
  //   priority: 0.85,
  //   changeFrequency: "monthly",
  //   lastModified: new Date("2025-06-01"),
  // },
];

// ─── STATIC PAGE REGISTRY ───────────────────────────────────────────────────
// Real dates only. Listing pages (courses, resources, roadmaps, etc.) are
// intentionally lower priority than their child detail pages.

const STATIC_PAGES: StaticPage[] = [
  {
    path: "",             // Homepage = BASE_URL with no trailing path
    priority: 1.0,
    changeFrequency: "daily",
    lastModified: new Date("2025-06-15"),
    ogImage: "/og-image.png",
  },

  // ── Courses ──────────────────────────────────────────────────────────────
  {
    path: "/courses",
    priority: 0.9,        // Lower than individual courses — it's a listing page
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-10"),
    ogImage: "/og-image.png",
  },

  // ── Resources hub ────────────────────────────────────────────────────────
  // Parent landing page for all resource sub-sections below.
  {
    path: "/resources",
    priority: 0.88,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-15"),
    ogImage: "/og-image.png",
  },

  // ── Roadmaps listing ─────────────────────────────────────────────────────
  {
    path: "/roadmaps",
    priority: 0.85,       // Lower than individual roadmap pages
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },

  // ── Interview Questions listing ───────────────────────────────────────────
  {
    path: "/interview-questions",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },

  // ── Tutorials listing ─────────────────────────────────────────────────────
  {
    path: "/tutorials",
    priority: 0.85,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  {
    path: "/projects",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },

  // ── Blog ──────────────────────────────────────────────────────────────────
  // Uncomment ONLY when the page is live — a 404 in sitemap hurts your ranking
  {
    path: "/blog",
    priority: 0.85,
    changeFrequency: "daily",
    lastModified: new Date("2025-06-15"),
    ogImage: "/og-image.png",
  },

  // ── Utility pages ─────────────────────────────────────────────────────────
  {
    path: "/about",
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified: new Date("2025-05-01"),
    ogImage: "/og-image.png",
  },
  {
    path: "/contact",
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: new Date("2025-05-01"),
    ogImage: "/og-image.png",
  },
  {
    path: "/faq",
    priority: 0.65,
    changeFrequency: "monthly",
    lastModified: new Date("2025-05-15"),
    ogImage: "/og-image.png",
  },
];

// ─── SITEMAP BUILDER ─────────────────────────────────────────────────────────
// Next.js MetadataRoute.Sitemap accepts images as string[] only (just URLs).
// The full image sitemap spec (loc + title + caption) is not supported
// by Next.js's built-in type — use plain URL strings instead.

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: [`${BASE_URL}${page.ogImage}`],
  }));

  const coursePages: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: course.lastModified,
    changeFrequency: course.changeFrequency,
    priority: course.priority,
    images: [`${BASE_URL}${course.ogImage}`],
  }));

  const roadmapPages: MetadataRoute.Sitemap = ROADMAPS.map((roadmap) => ({
    url: `${BASE_URL}/roadmaps/${roadmap.slug}`,
    lastModified: roadmap.lastModified,
    changeFrequency: roadmap.changeFrequency,
    priority: roadmap.priority,
    images: [`${BASE_URL}${roadmap.ogImage}`],
  }));

  const interviewQuestionPages: MetadataRoute.Sitemap = INTERVIEW_QUESTIONS.map((iq) => ({
    url: `${BASE_URL}/interview-questions/${iq.slug}`,
    lastModified: iq.lastModified,
    changeFrequency: iq.changeFrequency,
    priority: iq.priority,
    images: [`${BASE_URL}${iq.ogImage}`],
  }));

  const tutorialPages: MetadataRoute.Sitemap = TUTORIALS.map((tutorial) => ({
    url: `${BASE_URL}/tutorials/${tutorial.slug}`,
    lastModified: tutorial.lastModified,
    changeFrequency: tutorial.changeFrequency,
    priority: tutorial.priority,
    images: [`${BASE_URL}${tutorial.ogImage}`],
  }));

  // Sort by priority descending — Googlebot crawls high-priority URLs first
  return [
    ...staticPages,
    ...coursePages,
    ...roadmapPages,
    ...interviewQuestionPages,
    ...tutorialPages,
  ].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}

// ─── SCALING GUIDE ───────────────────────────────────────────────────────────
//
// PHASE 1 — NOW (static arrays, zero maintenance)
//   You are here. Just update lastModified dates when you update pages.
//   Fill in INTERVIEW_QUESTIONS and TUTORIALS arrays with your real slugs.
//
// PHASE 2 — When blog / tutorials grow (10+ posts)
//   Make sitemap() async, fetch from your _data files or CMS:
//   const posts = await fetchBlogPosts()
//   const blogPages = posts.map(post => ({ url: ..., lastModified: post.updatedAt, ... }))
//   return [...staticPages, ...coursePages, ...roadmapPages, ...blogPages].sort(...)
//
// PHASE 3 — 500+ pages
//   Split into sitemap index:
//   app/sitemap.ts                    → index pointing to sub-sitemaps
//   app/sitemap-courses.ts            → /sitemap-courses.xml
//   app/sitemap-roadmaps.ts           → /sitemap-roadmaps.xml
//   app/sitemap-interview-questions.ts → /sitemap-iq.xml
//   app/sitemap-tutorials.ts          → /sitemap-tutorials.xml
//   app/sitemap-blog.ts               → /sitemap-blog.xml
//   Google allows 50,000 URLs per file, 500 files per index
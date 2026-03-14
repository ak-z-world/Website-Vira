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

// ─── STATIC PAGE REGISTRY ───────────────────────────────────────────────────
// Real dates only. /courses listing page priority is intentionally
// lower than individual course pages — don't let the listing outrank
// the actual course pages in Google.

const STATIC_PAGES: StaticPage[] = [
  {
    path: "",             // Homepage = BASE_URL with no trailing path
    priority: 1.0,
    changeFrequency: "daily",
    lastModified: new Date("2025-06-15"),
    ogImage: "/og-image.png",
  },
  {
    path: "/courses",
    priority: 0.9,        // Lower than individual courses — it's a listing page
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-10"),
    ogImage: "/og-image.png",
  },
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
  // ↓ Uncomment ONLY when the page is live — a 404 in sitemap hurts your ranking
  // {
  //   path: "/blog",
  //   priority: 0.85,
  //   changeFrequency: "daily",
  //   lastModified: new Date("2025-06-15"),
  //   ogImage: "/og-image.png",
  // },
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
    images: [`${BASE_URL}${page.ogImage}`], // ← string[] only, no objects
  }));

  const coursePages: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: course.lastModified,
    changeFrequency: course.changeFrequency,
    priority: course.priority,
    images: [`${BASE_URL}${course.ogImage}`], // ← string[] only, no objects
  }));

  // Sort by priority descending — Googlebot crawls high-priority URLs first
  return [...staticPages, ...coursePages].sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  );
}

// ─── SCALING GUIDE ───────────────────────────────────────────────────────────
//
// PHASE 1 — NOW (static arrays, zero maintenance)
//   You are here. Just update lastModified dates when you update pages.
//
// PHASE 2 — When blog launches
//   Make sitemap() async, fetch from your CMS/MDX:
//   const posts = await fetchBlogPosts()
//   const blogPages = posts.map(post => ({ url: ..., lastModified: post.updatedAt, ... }))
//   return [...staticPages, ...coursePages, ...blogPages].sort(...)
//
// PHASE 3 — 500+ pages
//   Split into sitemap index:
//   app/sitemap.ts            → index pointing to sub-sitemaps
//   app/sitemap-courses.ts    → /sitemap-courses.xml
//   app/sitemap-blog.ts       → /sitemap-blog.xml
//   Google allows 50,000 URLs per file, 500 files per index
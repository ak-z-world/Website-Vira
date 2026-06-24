// app/sitemap.ts
import { MetadataRoute } from "next";
import { locationPages } from "@/lib/location-data/location-pages";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { isPublishableLocationPage, isPublishableCity } from "@/lib/location-data/types";

const BASE_URL = "https://academy.arivuon.in";

// ─── TYPE DEFINITIONS ─────────────────────────────────────────────────────────

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface StaticPage {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
  ogImage?: string;
}

interface CourseEntry {
  slug: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
  ogImage?: string;
}

interface RoadmapEntry {
  slug: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
  ogImage?: string;
}

interface InterviewQuestionEntry {
  slug: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
  ogImage?: string;
}

interface TutorialEntry {
  slug: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
  ogImage?: string;
}

// ─── COURSE REGISTRY ──────────────────────────────────────────────────────────
// Slugs verified against courses.ts (offeredAtLocations: true, status: "published")

const COURSES: CourseEntry[] = [
  {
    slug: "python-ai-aws-devops-combo",
    priority: 0.98,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-10"),
    ogImage: "/og-image-combo.png",
  },
  {
    slug: "python-course",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-python.png",
  },
  {
    slug: "full-stack-development",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-fullstack.png",
  },
  {
    slug: "data-science",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-datasci.png",
  },
  {
    slug: "machine-learning",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-ml.png",
  },
  {
    slug: "aws-devops",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-devops.png",
  },
  {
    slug: "react",
    priority: 0.93,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-react.png",
  },
  {
    slug: "ai-engineering",
    priority: 0.95,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-ai.png",
  },
];

// ─── ROADMAP REGISTRY ─────────────────────────────────────────────────────────
// Slugs verified against sitemap.ts ROADMAPS array

const ROADMAPS: RoadmapEntry[] = [
  {
    slug: "ai-engineer-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-ai.png",
  },
  {
    slug: "aws-devops-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-aws-devops.png",
  },
  {
    slug: "backend-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-backend.png",
  },
  {
    slug: "cloud-engineer-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-cloud.png",
  },
  {
    slug: "cyber-security-roadmap-2026",
    priority: 0.88,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-cybersec.png",
  },
  {
    slug: "data-scientist-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-datasci.png",
  },
  {
    slug: "frontend-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-frontend.png",
  },
  {
    slug: "full-stack-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-fullstack.png",
  },
  {
    slug: "ml-engineer-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-ml.png",
  },
  {
    slug: "python-developer-roadmap-2026",
    priority: 0.9,
    changeFrequency: "yearly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-roadmap-python.png",
  },
];

// ─── INTERVIEW QUESTIONS REGISTRY ─────────────────────────────────────────────
// Slugs verified from resources/page.tsx and resources hub data

const INTERVIEW_QUESTIONS: InterviewQuestionEntry[] = [
  {
    slug: "python-developer",
    priority: 0.88,
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image-iq-python.png",
  },
];

// ─── TUTORIALS REGISTRY ───────────────────────────────────────────────────────
// Currently no tutorial pages confirmed in project files

const TUTORIALS: TutorialEntry[] = [];

// ─── STATIC PAGE REGISTRY ─────────────────────────────────────────────────────

const STATIC_PAGES: StaticPage[] = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "daily",
    lastModified: new Date("2025-06-15"),
    ogImage: "/og-image.png",
  },
  {
    path: "/courses",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-10"),
    ogImage: "/og-image.png",
  },
  {
    path: "/resources",
    priority: 0.88,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-15"),
    ogImage: "/og-image.png",
  },
  {
    path: "/resources/roadmaps",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },
  {
    path: "/resources/interview-questions",
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },
  {
    path: "/resources/tutorials",
    priority: 0.85,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },
  {
    path: "/resources/projects",
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },
  {
    path: "/blog",
    priority: 0.85,
    changeFrequency: "daily",
    lastModified: new Date("2025-06-15"),
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
  {
    path: "/locations",
    priority: 0.9,
    changeFrequency: "weekly",
    lastModified: new Date("2025-06-01"),
    ogImage: "/og-image.png",
  },
];

// ─── SITEMAP BUILDER ──────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    ...(page.ogImage ? { images: [`${BASE_URL}${page.ogImage}`] } : {}),
  }));

  // ── Course detail pages ──────────────────────────────────────────────────────
  const coursePages: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: course.lastModified,
    changeFrequency: course.changeFrequency,
    priority: course.priority,
    ...(course.ogImage ? { images: [`${BASE_URL}${course.ogImage}`] } : {}),
  }));

  // ── Roadmap pages ────────────────────────────────────────────────────────────
  const roadmapPages: MetadataRoute.Sitemap = ROADMAPS.map((roadmap) => ({
    url: `${BASE_URL}/resources/roadmaps/${roadmap.slug}`,
    lastModified: roadmap.lastModified,
    changeFrequency: roadmap.changeFrequency,
    priority: roadmap.priority,
    ...(roadmap.ogImage ? { images: [`${BASE_URL}${roadmap.ogImage}`] } : {}),
  }));

  // ── Interview question pages ──────────────────────────────────────────────────
  const interviewQuestionPages: MetadataRoute.Sitemap = INTERVIEW_QUESTIONS.map(
    (iq) => ({
      url: `${BASE_URL}/resources/interview-questions/${iq.slug}`,
      lastModified: iq.lastModified,
      changeFrequency: iq.changeFrequency,
      priority: iq.priority,
      ...(iq.ogImage ? { images: [`${BASE_URL}${iq.ogImage}`] } : {}),
    })
  );

  // ── Tutorial pages ────────────────────────────────────────────────────────────
  const tutorialPages: MetadataRoute.Sitemap = TUTORIALS.map((tutorial) => ({
    url: `${BASE_URL}/resources/tutorials/${tutorial.slug}`,
    lastModified: tutorial.lastModified,
    changeFrequency: tutorial.changeFrequency,
    priority: tutorial.priority,
    ...(tutorial.ogImage ? { images: [`${BASE_URL}${tutorial.ogImage}`] } : {}),
  }));

  // ── Country pages ─────────────────────────────────────────────────────────────
  // Route: /locations/[country]
  const publishedCountries = countries.filter(
    (c) => c.status === "published" && c.activeStateSlugs.length > 0
  );

  const countryPages: MetadataRoute.Sitemap = publishedCountries.map(
    (country) => ({
      url: `${BASE_URL}/locations/${country.slug}`,
      lastModified: country.launchedAt
        ? new Date(country.launchedAt)
        : new Date("2025-01-01"),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.85,
    })
  );

  // ── State pages ───────────────────────────────────────────────────────────────
  // Route: /locations/[country]/[state]
  // Only states with activeCitySlugs (notFound if activeCitySlugs.length === 0)
  const statePages: MetadataRoute.Sitemap = states
    .filter(
      (s) =>
        s.status === "published" &&
        s.activeCitySlugs.length > 0 &&
        publishedCountries.some((c) => c.activeStateSlugs.includes(s.slug))
    )
    .map((state) => ({
      url: `${BASE_URL}/locations/${state.countrySlug}/${state.slug}`,
      lastModified: state.launchedAt
        ? new Date(state.launchedAt)
        : new Date("2025-01-01"),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.82,
    }));

  // ── City hub pages ────────────────────────────────────────────────────────────
  // Route: /locations/[country]/[state]/[city]
  const publishableCities = cities.filter(
    (c) =>
      c.status === "published" &&
      c.testimonials.length > 0 &&
      c.instructors.length > 0 &&
      c.cityContext.trim().length > 100
  );

  const cityPages: MetadataRoute.Sitemap = publishableCities.map((city) => ({
    url: `${BASE_URL}/locations/${city.countrySlug}/${city.stateSlug}/${city.slug}`,
    lastModified: city.launchedAt
      ? new Date(city.launchedAt)
      : new Date("2025-01-01"),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.88,
  }));

  // ── City resources pages ──────────────────────────────────────────────────────
  // Route: /locations/[country]/[state]/[city]/resources
  const cityResourcesPages: MetadataRoute.Sitemap = publishableCities.map(
    (city) => ({
      url: `${BASE_URL}/locations/${city.countrySlug}/${city.stateSlug}/${city.slug}/resources`,
      lastModified: city.launchedAt
        ? new Date(city.launchedAt)
        : new Date("2025-01-01"),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.72,
    })
  );

  // ── City × course (location page) pages ──────────────────────────────────────
  // Route: /locations/[country]/[state]/[city]/[course-slug]
  const locationCoursePages: MetadataRoute.Sitemap = locationPages
    .filter(isPublishableLocationPage)
    .map((page) => ({
      url: `${BASE_URL}/locations/${page.countrySlug}/${page.stateSlug}/${page.citySlug}/${page.courseSlug}`,
      lastModified: page.launchedAt
        ? new Date(page.launchedAt)
        : new Date("2025-02-01"),
      changeFrequency: "weekly" as ChangeFreq,
      priority: 0.9,
    }));

  // ── Merge and sort by priority descending ─────────────────────────────────────
  return [
    ...staticPages,
    ...coursePages,
    ...roadmapPages,
    ...interviewQuestionPages,
    ...tutorialPages,
    ...countryPages,
    ...statePages,
    ...cityPages,
    ...cityResourcesPages,
    ...locationCoursePages,
  ].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
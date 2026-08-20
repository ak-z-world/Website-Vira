// app/sitemap.ts
import { MetadataRoute } from "next";
import { locationPages } from "@/lib/location-data/location-pages";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { isPublishableLocationPage, isPublishableCity } from "@/lib/location-data/types";
import { SITE_URL } from "@/lib/seo";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// ─── 1. STATIC CORE PAGES ─────────────────────────────────────────────────────

const STATIC_PAGES = [
  { path: "", priority: 1.0, changeFrequency: "daily" as ChangeFreq, lastModified: new Date() },
  { path: "/courses", priority: 0.95, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/resources", priority: 0.95, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/resources/roadmaps", priority: 0.92, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/resources/tutorials", priority: 0.92, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/resources/projects", priority: 0.92, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/resources/interview-questions", priority: 0.92, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/locations", priority: 0.92, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" as ChangeFreq, lastModified: new Date() },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" as ChangeFreq, lastModified: new Date() },
  { path: "/faq", priority: 0.85, changeFrequency: "monthly" as ChangeFreq, lastModified: new Date() },
  { path: "/blog", priority: 0.80, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { path: "/privacy-policy", priority: 0.50, changeFrequency: "yearly" as ChangeFreq, lastModified: new Date() },
  { path: "/terms-and-conditions", priority: 0.50, changeFrequency: "yearly" as ChangeFreq, lastModified: new Date() },
];

// ─── 2. PRIMARY COURSES ───────────────────────────────────────────────────────

const COURSES = [
  { slug: "python", priority: 0.96, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { slug: "devops", priority: 0.96, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { slug: "react", priority: 0.95, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { slug: "data-science", priority: 0.95, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
  { slug: "python-ai-aws-devops-combo", priority: 0.98, changeFrequency: "weekly" as ChangeFreq, lastModified: new Date() },
];

// ─── 3. ROADMAPS (10 Career Roadmaps) ──────────────────────────────────────────

const ROADMAPS = [
  "ai-engineer-roadmap-2026",
  "aws-devops-roadmap-2026",
  "backend-roadmap-2026",
  "cloud-engineer-roadmap-2026",
  "cyber-security-roadmap-2026",
  "data-scientist-roadmap-2026",
  "frontend-roadmap-2026",
  "full-stack-roadmap-2026",
  "ml-engineer-roadmap-2026",
  "python-developer-roadmap-2026",
];

// ─── 4. TUTORIALS (10 Technical Tutorials) ────────────────────────────────────

const TUTORIALS = [
  "python",
  "django",
  "react",
  "devops",
  "aws",
  "docker",
  "kubernetes",
  "fastapi",
  "postgresql",
  "data-science",
];

// ─── 5. INTERVIEW QUESTIONS (10 Role Question Sets) ───────────────────────────

const INTERVIEW_QUESTIONS = [
  "python-developer",
  "django-developer",
  "react-developer",
  "devops-engineer",
  "aws-solutions-architect",
  "data-scientist",
  "machine-learning-engineer",
  "full-stack-developer",
  "ai-engineer",
  "cloud-engineer",
];

// ─── 6. PROJECTS (10 Project Category Hubs) ───────────────────────────────────

const PROJECTS = [
  "python-projects",
  "django-projects",
  "react-projects",
  "devops-projects",
  "aws-projects",
  "data-science-projects",
  "machine-learning-projects",
  "full-stack-projects",
  "ai-projects",
  "cloud-projects",
];

// ─── SITEMAP GENERATOR ────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  // Static Core Pages
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Course Detail Pages
  const courseEntries: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${SITE_URL}/courses/${course.slug}`,
    lastModified: course.lastModified,
    changeFrequency: course.changeFrequency,
    priority: course.priority,
  }));

  // Career Roadmaps
  const roadmapEntries: MetadataRoute.Sitemap = ROADMAPS.map((slug) => ({
    url: `${SITE_URL}/resources/roadmaps/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.90,
  }));

  // Technical Tutorials
  const tutorialEntries: MetadataRoute.Sitemap = TUTORIALS.map((slug) => ({
    url: `${SITE_URL}/resources/tutorials/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.90,
  }));

  // Interview Questions
  const interviewEntries: MetadataRoute.Sitemap = INTERVIEW_QUESTIONS.map((slug) => ({
    url: `${SITE_URL}/resources/interview-questions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.89,
  }));

  // Project Ideas & Portfolios
  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((slug) => ({
    url: `${SITE_URL}/resources/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.89,
  }));

  // Country Pages
  const publishedCountries = countries.filter(
    (c) => c.status === "published" && c.activeStateSlugs.length > 0
  );
  const countryEntries: MetadataRoute.Sitemap = publishedCountries.map((country) => ({
    url: `${SITE_URL}/locations/${country.slug}`,
    lastModified: country.launchedAt ? new Date(country.launchedAt) : new Date(),
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.85,
  }));

  // State Pages
  const stateEntries: MetadataRoute.Sitemap = states
    .filter(
      (s) =>
        s.status === "published" &&
        s.activeCitySlugs.length > 0 &&
        publishedCountries.some((c) => c.activeStateSlugs.includes(s.slug))
    )
    .map((state) => ({
      url: `${SITE_URL}/locations/${state.countrySlug}/${state.slug}`,
      lastModified: state.launchedAt ? new Date(state.launchedAt) : new Date(),
      changeFrequency: "monthly" as ChangeFreq,
      priority: 0.83,
    }));

  // City Hub Pages
  const publishableCities = cities.filter(
    (c) =>
      c.status === "published" &&
      c.cityContext.trim().length > 50
  );
  const cityEntries: MetadataRoute.Sitemap = publishableCities.map((city) => ({
    url: `${SITE_URL}/locations/${city.countrySlug}/${city.stateSlug}/${city.slug}`,
    lastModified: city.launchedAt ? new Date(city.launchedAt) : new Date(),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.88,
  }));

  // City Resources Pages
  const cityResourceEntries: MetadataRoute.Sitemap = publishableCities.map((city) => ({
    url: `${SITE_URL}/locations/${city.countrySlug}/${city.stateSlug}/${city.slug}/resources`,
    lastModified: city.launchedAt ? new Date(city.launchedAt) : new Date(),
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.75,
  }));

  // City × Course (Location Detail) Pages
  const locationCourseEntries: MetadataRoute.Sitemap = locationPages
    .filter(isPublishableLocationPage)
    .map((page) => ({
      url: `${SITE_URL}/locations/${page.countrySlug}/${page.stateSlug}/${page.citySlug}/${page.courseSlug}`,
      lastModified: page.launchedAt ? new Date(page.launchedAt) : new Date(),
      changeFrequency: "weekly" as ChangeFreq,
      priority: 0.90,
    }));

  // Merge and sort by priority descending
  return [
    ...staticEntries,
    ...courseEntries,
    ...roadmapEntries,
    ...tutorialEntries,
    ...interviewEntries,
    ...projectEntries,
    ...countryEntries,
    ...stateEntries,
    ...cityEntries,
    ...cityResourceEntries,
    ...locationCourseEntries,
  ].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
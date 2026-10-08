import type { MetadataRoute } from "next";
import { COURSE_SLUGS } from "@/data/courses";
import { SITE } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/courses",
    "/why-crackleap",
    "/journey",
    "/how-it-works",
    "/contact",
    ...COURSE_SLUGS.map((s) => `/courses/${s}`),
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/courses/") ? 0.8 : 0.7,
  }));
}

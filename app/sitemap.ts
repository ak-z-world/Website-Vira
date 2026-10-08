import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://crackleap.vertexloop.in";
  // ISO date string without milliseconds (e.g., 2026-10-08T10:55:00Z)
  const lastModified = new Date().toISOString().split(".")[0] + "Z";

  const routes: Array<{
    path: string;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/courses", changeFrequency: "monthly", priority: 0.8 },
    { path: "/why-crackleap", changeFrequency: "monthly", priority: 0.7 },
    { path: "/journey", changeFrequency: "monthly", priority: 0.7 },
    { path: "/how-it-works", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/courses/python-agentic-ai-aws", changeFrequency: "monthly", priority: 0.8 },
    { path: "/courses/python-django", changeFrequency: "monthly", priority: 0.8 },
    { path: "/courses/react-js", changeFrequency: "monthly", priority: 0.8 },
    { path: "/courses/aws-devops", changeFrequency: "monthly", priority: 0.8 },
    { path: "/courses/python-full-stack", changeFrequency: "monthly", priority: 0.8 },
    { path: "/courses/generative-ai", changeFrequency: "monthly", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

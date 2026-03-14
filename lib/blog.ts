// lib/blog.ts
// Central utility for all blog operations.
// This file is the ONLY place that reads posts.json.
// All pages import from here — never import posts.json directly.

import posts from "@/data/posts.json";

// ─── TYPES ───────────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "intro"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "callout"; variant: "insight" | "warning" | "tip"; title: string; text: string }
  | { type: "codeBlock"; language: string; title: string; code: string }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "roadmap"; steps: RoadmapStep[] }
  | { type: "toolGrid"; categories: { category: string; tools: string[] }[] };

export interface RoadmapStep {
  phase: string;
  duration: string;
  title: string;
  skills: string[];
  why: string;
}

export interface PostSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  featured: boolean;
  seo: PostSEO;
  content: ContentBlock[];
}

// ─── GETTERS ─────────────────────────────────────────────────────────────────

// All posts sorted newest first
export function getAllPosts(): BlogPost[] {
  return (posts as BlogPost[]).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Single post by slug — returns undefined if not found
export function getPostBySlug(slug: string): BlogPost | undefined {
  return (posts as BlogPost[]).find((post) => post.slug === slug);
}

// Featured posts only
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

// Posts filtered by category
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Posts filtered by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

// Related posts — same category, excluding current post, max 3
export function getRelatedPosts(currentSlug: string, category: string): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 3);
}

// All unique categories
export function getAllCategories(): string[] {
  return [...new Set((posts as BlogPost[]).map((post) => post.category))];
}

// All unique tags
export function getAllTags(): string[] {
  const allTags = (posts as BlogPost[]).flatMap((post) => post.tags);
  return [...new Set(allTags)].sort();
}

// All slugs — used for generateStaticParams
export function getAllSlugs(): string[] {
  return (posts as BlogPost[]).map((post) => post.slug);
}

// ─── FORMATTERS ──────────────────────────────────────────────────────────────

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateISO(dateString: string): string {
  return new Date(dateString).toISOString();
}

// ─── JSON-LD GENERATORS ──────────────────────────────────────────────────────
// These generate structured data for each post — critical for Google rich results.

export function generateArticleJsonLd(post: BlogPost, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${baseUrl}/blog/${post.slug}`,
    headline: post.title,
    description: post.seo.metaDescription,
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}${post.coverImage}`,
      width: 1200,
      height: 630,
    },
    datePublished: formatDateISO(post.publishedAt),
    dateModified: formatDateISO(post.updatedAt),
    author: {
      "@type": "Organization",
      name: "ArivuOn Academy",
      url: baseUrl,
    },
    publisher: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: "ArivuOn Academy",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    keywords: post.seo.keywords.join(", "),
    articleSection: post.category,
    timeRequired: `PT${post.readingTime}M`,
    inLanguage: "en-US",
  };
}

export function generateBreadcrumbJsonLd(post: BlogPost, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug}`,
      },
    ],
  };
}

// Extract FAQ blocks from post content for FAQPage schema
export function generateFaqJsonLd(post: BlogPost, baseUrl: string) {
  const faqBlocks = post.content.filter(
    (block): block is Extract<ContentBlock, { type: "faq" }> =>
      block.type === "faq"
  );

  if (faqBlocks.length === 0) return null;

  const allQA = faqBlocks.flatMap((block) => block.items);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/blog/${post.slug}#faq`,
    mainEntity: allQA.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}
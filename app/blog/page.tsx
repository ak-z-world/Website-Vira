// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getAllPosts,
  getFeaturedPosts,
  getAllCategories,
  getAllTags,
  formatDate,
  type BlogPost,
} from "@/lib/blog";

const BASE_URL = "https://academy.arivuon.in";

// ─── DESIGN TOKENS (extracted from ArivuOn logo) ─────────────────────────────
// Gold primary  : #C9952A  ← logo gold text
// Gold bright   : #E8C060  ← logo ring highlight
// Gold pale bg  : #FBF3DC  ← ultra-light gold tint for bg
// Gold border   : #E0C068  ← border accent
// Deep navy     : #0D1B3E  ← logo background
// Navy mid      : #1E3A8A  ← consistent with Header
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Blog | DevOps, Python & Cloud Engineering Insights | ArivuOn Academy",
  description:
    "In-depth guides on Python, DevOps, AWS, CI/CD, and software engineering careers. Practical knowledge from ArivuOn Academy — trusted by learners worldwide.",
  keywords: [
    "devops tutorials", "python programming guides", "aws cloud tutorials",
    "software engineering blog", "cicd pipeline tutorial",
    "tech career advice india", "ArivuOn Academy blog",
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    title: "Blog | DevOps, Python & Cloud Engineering | ArivuOn Academy",
    description: "Practical guides on Python, DevOps, AWS, and software engineering careers.",
    siteName: "ArivuOn Academy",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArivuOn Academy Blog | Python, DevOps & Cloud",
    description: "Practical engineering guides — Python, DevOps, AWS.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

function BlogListingJsonLd({ posts }: { posts: BlogPost[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog`,
    name: "ArivuOn Academy Blog",
    description: "In-depth guides on Python, DevOps, AWS, and software engineering careers.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "ArivuOn Academy",
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: new Date(post.publishedAt).toISOString(),
      image: `${BASE_URL}${post.coverImage}`,
      description: post.excerpt,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── CATEGORY STYLES ─────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<string, string> = {
  DevOps:  "bg-[#FBF3DC] text-[#8B6914] border-[#E0C068]",
  Python:  "bg-[#EFF6FF] text-[#1E3A8A] border-[#BFDBFE]",
  Cloud:   "bg-[#F0F9FF] text-[#0C4A6E] border-[#BAE6FD]",
  React:   "bg-[#ECFEFF] text-[#155E75] border-[#A5F3FC]",
  Career:  "bg-[#F0FDF4] text-[#14532D] border-[#86EFAC]",
  default: "bg-[#F8F8F6] text-[#4B5563] border-[#E5E7EB]",
};

function CategoryPill({ category }: { category: string }) {
  const cls = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.default;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cls}`}>
      {category}
    </span>
  );
}

// ─── SECTION DIVIDER ─────────────────────────────────────────────────────────

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#C9952A]">✦</span>
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
        {label}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-[#E0C068]/40 to-transparent" />
    </div>
  );
}

// ─── FEATURED CARD ────────────────────────────────────────────────────────────

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col md:flex-row rounded-2xl overflow-hidden border border-[#E0C068]/30 bg-white shadow-sm hover:shadow-xl hover:border-[#C9952A]/50 transition-all duration-300"
      aria-label={`Read: ${post.title}`}
    >
      {/* Image */}
      <div className="relative w-full md:w-3/5 aspect-[16/9] md:aspect-auto min-h-[240px] overflow-hidden bg-[#0D1B3E]">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
        {/* Dark vignette so image doesn't feel raw */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/40 via-transparent to-transparent" />
        {/* Gold featured badge */}
        <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-gradient-to-r from-[#C9952A] to-[#E8C060] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wide">
          ✦ Featured
        </span>
      </div>

      {/* Content panel */}
      <div className="flex flex-col justify-center p-7 md:p-10 w-full md:w-2/5 bg-white">
        {/* Gold accent bar */}
        <div className="w-10 h-[3px] rounded-full bg-gradient-to-r from-[#C9952A] to-[#E8C060] mb-5" />

        <div className="flex items-center gap-2 mb-3">
          <CategoryPill category={post.category} />
          <span className="text-slate-400 text-xs">{post.readingTime} min read</span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-[#0D1B3E] leading-snug mb-3 group-hover:text-[#C9952A] transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-[#E0C068]/20 pt-4">
          <time className="text-xs text-slate-400" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          <span className="text-[#C9952A] text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            Read article
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── STANDARD POST CARD ───────────────────────────────────────────────────────

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#C9952A]/40 transition-all duration-300"
      aria-label={`Read: ${post.title}`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0D1B3E]">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Gold reveal bar on hover */}
        <div className="w-0 group-hover:w-8 h-[2px] rounded-full bg-gradient-to-r from-[#C9952A] to-[#E8C060] mb-3 transition-all duration-300" />

        <div className="flex items-center gap-2 mb-2.5">
          <CategoryPill category={post.category} />
          <span className="text-slate-400 text-xs">{post.readingTime} min</span>
        </div>

        <h2 className="text-[15px] font-bold text-[#0D1B3E] leading-snug mb-2.5 group-hover:text-[#C9952A] transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <time className="text-xs text-slate-400 border-t border-slate-100 pt-3" dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
      </div>
    </Link>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const allPosts     = getAllPosts();
  const featured     = getFeaturedPosts();
  const categories   = getAllCategories();
  const tags         = getAllTags();
  const regularPosts = allPosts.filter((p) => !p.featured);

  return (
    <>
      <BlogListingJsonLd posts={allPosts} />

      <main className="min-h-screen bg-white">

        {/* ── Hero — deep navy nebula, gold typography ── */}
        <section className="relative overflow-hidden bg-[#0D1B3E] py-20 px-4">

          {/* Background: subtle geometric grid matching logo's sacred geometry */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201,149,42,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,149,42,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "64px 64px",
              }}
            />
            {/* Gold nebula glow */}
            <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-[#C9952A]/8 blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#1E3A8A]/40 blur-[60px]" />
          </div>

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Gold pill badge */}
            <span className="inline-flex items-center gap-2 bg-[#C9952A]/10 border border-[#C9952A]/25 text-[#E8C060] text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C060] inline-block animate-pulse" />
              ArivuOn Academy — Knowledge Hub
            </span>

            <h1 className="text-4xl md:text-[52px] font-extrabold text-white leading-tight mb-5 tracking-tight">
              Python · DevOps · Cloud
              <span className="block bg-gradient-to-r from-[#C9952A] via-[#E8C060] to-[#C9952A] bg-clip-text text-transparent mt-1">
                Engineering Insights
              </span>
            </h1>

            <p className="text-slate-300/90 text-lg max-w-xl mx-auto leading-relaxed">
              Practical, in-depth guides for engineers — real projects,
              real tools, real career outcomes.
            </p>

            {/* Gold star divider */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9952A]/60" />
              <span className="text-[#C9952A]">✦</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9952A]/60" />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-14">

          {/* ── Category Filter Bar ── */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10 items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">
                Topics:
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border cursor-default ${
                    CATEGORY_STYLES[cat] ?? CATEGORY_STYLES.default
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* ── Featured ── */}
          {featured.length > 0 && (
            <section aria-label="Featured articles" className="mb-14">
              <SectionHeading label="Featured Articles" />
              <div className="flex flex-col gap-6">
                {featured.map((post) => (
                  <FeaturedCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* ── All Posts Grid ── */}
          {regularPosts.length > 0 && (
            <section aria-label="All articles">
              <SectionHeading label="All Articles" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* ── Empty State ── */}
          {allPosts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">✦</p>
              <p className="text-xl font-bold text-[#0D1B3E]">Blog coming soon.</p>
              <p className="text-sm text-slate-400 mt-2">Our first guides are being crafted.</p>
            </div>
          )}

          {/* ── Tags Cloud ── */}
          {tags.length > 0 && (
            <section aria-label="Topics" className="mt-16 pt-10 border-t border-[#E0C068]/20">
              <SectionHeading label="Topics Covered" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs bg-white border border-slate-200 text-slate-600 rounded-full hover:border-[#C9952A]/50 hover:text-[#C9952A] hover:bg-[#FBF3DC] transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
    </>
  );
}
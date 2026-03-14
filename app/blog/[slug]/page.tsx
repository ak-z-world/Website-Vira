// app/blog/[slug]/page.tsx
// Next.js 15: params is now a Promise — must be awaited in both
// generateMetadata() and the page component itself.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    getPostBySlug,
    getAllSlugs,
    getRelatedPosts,
    formatDate,
    generateArticleJsonLd,
    generateBreadcrumbJsonLd,
    generateFaqJsonLd,
    type BlogPost,
    type ContentBlock,
    type RoadmapStep,
} from "@/lib/blog";

const BASE_URL = "https://academy.arivuon.in";

// ─── STATIC PARAMS ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

// ─── DYNAMIC METADATA ─────────────────────────────────────────────────────────
// ✅ FIX: params is Promise<{ slug: string }> in Next.js 15

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;   // ← Promise, not plain object
}): Promise<Metadata> {
    const { slug } = await params;        // ← must await
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        metadataBase: new URL(BASE_URL),
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        keywords: post.seo.keywords,
        authors: [{ name: "ArivuOn Academy", url: BASE_URL }],
        creator: "ArivuOn Academy",
        publisher: "ArivuOn Academy",
        alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
        openGraph: {
            type: "article",
            url: `${BASE_URL}/blog/${post.slug}`,
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            siteName: "ArivuOn Academy",
            publishedTime: new Date(post.publishedAt).toISOString(),
            modifiedTime: new Date(post.updatedAt).toISOString(),
            authors: ["ArivuOn Academy"],
            section: post.category,
            tags: post.tags,
            images: [{
                url: `${BASE_URL}${post.coverImage}`,
                width: 1200,
                height: 630,
                alt: post.coverImageAlt,
            }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            images: [`${BASE_URL}${post.coverImage}`],
            creator: "@arivuonacademy",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1,
            },
        },
    };
}

// ─── CONTENT BLOCK RENDERERS ──────────────────────────────────────────────────

function IntroBlock({ text }: { text: string }) {
    return (
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium border-l-4 border-[#C9952A] pl-5 bg-[#FBF3DC]/50 py-4 pr-5 rounded-r-xl my-8">
            {text}
        </p>
    );
}

function ParagraphBlock({ text }: { text: string }) {
    return (
        <p className="text-slate-600 leading-[1.85] text-[15px] my-5">
            {text}
        </p>
    );
}

function Heading2Block({ text }: { text: string }) {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return (
        <div className="mt-14 mb-5">
            <div className="flex items-center gap-2 mb-1">
                <span className="text-[#C9952A] text-xs">✦</span>
            </div>
            <h2 id={id} className="text-2xl md:text-[28px] font-bold text-[#0D1B3E] leading-snug scroll-mt-24">
                {text}
            </h2>
            <div className="mt-2 w-12 h-[3px] rounded-full bg-gradient-to-r from-[#C9952A] to-[#E8C060]" />
        </div>
    );
}

function Heading3Block({ text }: { text: string }) {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return (
        <h3 id={id} className="text-xl font-bold text-[#0D1B3E] mt-10 mb-3 scroll-mt-24">
            {text}
        </h3>
    );
}

const CALLOUT_STYLES = {
    insight: {
        border: "border-[#E0C068]/50",
        bg: "bg-[#FBF3DC]/60",
        icon: "💡",
        iconBg: "bg-[#FBF3DC] border-[#E0C068]",
        titleColor: "text-[#8B6914]",
        textColor: "text-[#6B4F10]",
    },
    warning: {
        border: "border-[#1E3A8A]/20",
        bg: "bg-[#EFF6FF]/60",
        icon: "⚠️",
        iconBg: "bg-[#EFF6FF] border-[#BFDBFE]",
        titleColor: "text-[#1E3A8A]",
        textColor: "text-[#1E40AF]",
    },
    tip: {
        border: "border-[#86EFAC]/40",
        bg: "bg-[#F0FDF4]/60",
        icon: "✅",
        iconBg: "bg-[#F0FDF4] border-[#86EFAC]",
        titleColor: "text-[#14532D]",
        textColor: "text-[#166534]",
    },
};

function CalloutBlock({
    variant, title, text,
}: {
    variant: "insight" | "warning" | "tip";
    title: string;
    text: string;
}) {
    const s = CALLOUT_STYLES[variant];
    return (
        <div className={`rounded-xl border-2 ${s.border} ${s.bg} p-5 my-8 flex gap-4`}>
            <div className={`flex-shrink-0 w-9 h-9 rounded-lg border ${s.iconBg} flex items-center justify-center text-base`}>
                {s.icon}
            </div>
            <div>
                <p className={`font-bold text-sm mb-1 ${s.titleColor}`}>{title}</p>
                <p className={`text-sm leading-relaxed ${s.textColor}`}>{text}</p>
            </div>
        </div>
    );
}

function CodeBlock({
    language, title, code,
}: {
    language: string;
    title: string;
    code: string;
}) {
    return (
        <div className="my-8 rounded-xl overflow-hidden border border-[#1E3A8A]/20 shadow-md">
            <div className="flex items-center justify-between bg-[#0D1B3E] px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C9952A]" />
                    <span className="text-slate-300 text-xs font-medium truncate">{title}</span>
                </div>
                <span className="text-[#C9952A] text-[11px] font-bold font-mono bg-[#C9952A]/10 border border-[#C9952A]/20 px-2 py-0.5 rounded">
                    {language}
                </span>
            </div>
            <pre className="bg-[#0A1628] text-slate-200 text-sm leading-relaxed p-5 overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );
}

function RoadmapBlock({ steps }: { steps: RoadmapStep[] }) {
    return (
        <div className="my-10 space-y-3">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="relative flex gap-4 rounded-xl border border-slate-200 bg-white p-5 hover:border-[#E0C068]/60 hover:shadow-sm transition-all"
                >
                    <div className="flex-shrink-0 flex flex-col items-center pt-0.5">
                        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9952A] to-[#E8C060] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                            {index + 1}
                        </span>
                        {index < steps.length - 1 && (
                            <div className="w-px flex-1 bg-gradient-to-b from-[#E0C068]/40 to-transparent mt-2 min-h-[24px]" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                            <span className="text-xs font-bold text-[#C9952A] uppercase tracking-wider">
                                {step.phase}
                            </span>
                            <span className="text-xs text-slate-400 bg-[#FBF3DC] border border-[#E0C068]/30 px-2 py-0.5 rounded-full">
                                {step.duration}
                            </span>
                        </div>
                        <h4 className="font-bold text-[#0D1B3E] mb-2.5">{step.title}</h4>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {step.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            <span className="font-semibold text-[#0D1B3E]">Why: </span>
                            {step.why}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ToolGridBlock({
    categories,
}: {
    categories: { category: string; tools: string[] }[];
}) {
    return (
        <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
                <div
                    key={cat.category}
                    className="rounded-xl border border-[#E0C068]/30 bg-[#FBF3DC]/20 p-4 hover:border-[#C9952A]/40 transition-colors"
                >
                    <h4 className="text-xs font-bold text-[#8B6914] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9952A] inline-block" />
                        {cat.category}
                    </h4>
                    <ul className="space-y-1.5">
                        {cat.tools.map((tool) => (
                            <li key={tool} className="flex items-center gap-2 text-sm text-slate-700">
                                <span className="w-1 h-1 rounded-full bg-[#C9952A]/50 flex-shrink-0" />
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function FaqBlock({ items }: { items: { question: string; answer: string }[] }) {
    return (
        <div className="my-8 space-y-3">
            {items.map((qa, index) => (
                <details
                    key={index}
                    className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-[#E0C068]/50 transition-colors"
                >
                    <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-[#0D1B3E] text-sm hover:bg-[#FBF3DC]/30 transition-colors list-none">
                        <span>{qa.question}</span>
                        <span className="ml-4 flex-shrink-0 w-5 h-5 rounded-full border border-[#C9952A]/30 bg-[#FBF3DC]/50 flex items-center justify-center text-[#C9952A] group-open:rotate-45 transition-transform font-bold text-sm">
                            +
                        </span>
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-[#E0C068]/20 pt-4">
                        {qa.answer}
                    </div>
                </details>
            ))}
        </div>
    );
}

// ─── MASTER CONTENT RENDERER ──────────────────────────────────────────────────

function renderBlock(block: ContentBlock, index: number) {
    switch (block.type) {
        case "intro": return <IntroBlock key={index} text={block.text} />;
        case "paragraph": return <ParagraphBlock key={index} text={block.text} />;
        case "heading2": return <Heading2Block key={index} text={block.text} />;
        case "heading3": return <Heading3Block key={index} text={block.text} />;
        case "callout": return <CalloutBlock key={index} variant={block.variant} title={block.title} text={block.text} />;
        case "codeBlock": return <CodeBlock key={index} language={block.language} title={block.title} code={block.code} />;
        case "roadmap": return <RoadmapBlock key={index} steps={block.steps} />;
        case "toolGrid": return <ToolGridBlock key={index} categories={block.categories} />;
        case "faq":
            return (
                <div key={index}>
                    <FaqBlock items={block.items} />
                </div>
            );
        default: return null;
    }
}

// ─── RELATED CARD ─────────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-[#E0C068]/50 hover:bg-[#FBF3DC]/20 transition-all"
        >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#0D1B3E]">
                <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="64px"
                />
            </div>
            <div className="min-w-0">
                <p className="text-[11px] text-[#C9952A] font-bold mb-1 uppercase tracking-wide">
                    {post.category}
                </p>
                <p className="text-sm font-semibold text-[#0D1B3E] group-hover:text-[#C9952A] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                </p>
            </div>
        </Link>
    );
}

// ─── COURSE CTA SIDEBAR ───────────────────────────────────────────────────────

function CourseCta({ category }: { category: string }) {
    const COURSE_MAP: Record<string, { href: string; label: string }> = {
        DevOps: { href: "/courses/devops", label: "AWS DevOps Course" },
        Python: { href: "/courses/python", label: "Python Course" },
        Cloud: { href: "/courses/devops", label: "Cloud Training" },
        React: { href: "/courses/react", label: "React Course" },
    };
    const course = COURSE_MAP[category] ?? COURSE_MAP["DevOps"];

    return (
        <div className="sticky top-24 rounded-2xl overflow-hidden border border-[#E0C068]/30 shadow-sm">
            {/* Navy header */}
            <div className="bg-[#0D1B3E] px-6 py-5">
                <p className="text-[#E8C060] text-[11px] font-bold uppercase tracking-widest mb-1">
                    Learn by doing
                </p>
                <h3 className="font-bold text-white text-lg leading-snug">
                    Master {category}<br />with Real Projects
                </h3>
                <div className="mt-3 w-8 h-[2px] rounded-full bg-gradient-to-r from-[#C9952A] to-[#E8C060]" />
            </div>
            {/* Body */}
            <div className="bg-white px-6 py-5">
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                    Everything in this article — and much more — structured, project-based, globally accessible.
                </p>
                <Link
                    href={course.href}
                    className="block w-full text-center text-white text-sm font-bold py-3 rounded-xl bg-gradient-to-r from-[#C9952A] to-[#E8C060] hover:from-[#B8841E] hover:to-[#D4AA45] transition-all shadow-sm mb-2.5"
                >
                    View {course.label} →
                </Link>
                <Link
                    href="/contact"
                    className="block w-full text-center text-[#0D1B3E] text-sm font-medium py-2.5 rounded-xl border border-[#E0C068]/40 hover:bg-[#FBF3DC]/50 hover:border-[#C9952A]/50 transition-all"
                >
                    Talk to an Advisor
                </Link>
            </div>
        </div>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
// ✅ FIX: params typed as Promise<{ slug: string }> and awaited

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;   // ← Promise in Next.js 15
}) {
    const { slug } = await params;        // ← must await before use

    const post = getPostBySlug(slug);
    if (!post) notFound();

    const related = getRelatedPosts(post.slug, post.category);
    const faqJsonLd = generateFaqJsonLd(post, BASE_URL);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleJsonLd(post, BASE_URL)) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(post, BASE_URL)) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            <main className="min-h-screen bg-white">

                {/* ── Post Hero — navy nebula with gold accents ── */}
                <section className="relative overflow-hidden bg-[#0D1B3E] py-14 px-4 ">
                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{
                                backgroundImage: `
                  linear-gradient(rgba(201,149,42,0.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,149,42,0.6) 1px, transparent 1px)
                `,
                                backgroundSize: "48px 48px",
                            }}
                        />
                        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#C9952A]/6 blur-[70px]" />
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-7">
                            <Link href="/" className="hover:text-[#E8C060] transition-colors">Home</Link>
                            <span className="text-slate-600">/</span>
                            <Link href="/blog" className="hover:text-[#E8C060] transition-colors">Blog</Link>
                            <span className="text-slate-600">/</span>
                            <span className="text-slate-300 truncate max-w-[200px]">{post.title}</span>
                        </nav>

                        {/* Category + meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 bg-[#C9952A]/15 border border-[#C9952A]/30 text-[#E8C060] text-xs font-bold px-3 py-1 rounded-full">
                                {post.category}
                            </span>
                            <span className="text-slate-400 text-xs">{post.readingTime} min read</span>
                            <time className="text-slate-400 text-xs" dateTime={post.publishedAt}>
                                {formatDate(post.publishedAt)}
                            </time>
                        </div>

                        {/* Gold accent bar */}
                        <div className="w-10 h-[3px] rounded-full bg-gradient-to-r from-[#C9952A] to-[#E8C060] mb-5" />

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-slate-300/90 text-lg leading-relaxed mb-6">
                            {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Cover Image ── */}
                <div className="max-w-4xl mx-auto px-4 mt-1">
                    <div className="relative w-full aspect-video overflow-hidden shadow-xl bg-[#0D1B3E] border-x border-b border-[#E0C068]/20 rounded-b-2xl flex items-center justify-center">

                        <Image
                            src={post.coverImage}
                            alt={post.coverImageAlt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 896px) 100vw, 896px"
                            priority
                        />

                    </div>
                </div>

                {/* ── Main Content + Sidebar ── */}
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <div className="flex flex-col lg:flex-row gap-14">

                        {/* Article body */}
                        <article className="flex-1 min-w-0 max-w-3xl">
                            {post.content.map((block, index) => renderBlock(block, index))}

                            {/* Bottom CTA */}
                            <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-[#E0C068]/20">
                                <div
                                    className="bg-[#0D1B3E] px-8 py-8 text-center relative overflow-hidden"
                                >
                                    <div
                                        className="absolute inset-0 opacity-[0.04]"
                                        style={{
                                            backgroundImage: "radial-gradient(rgba(201,149,42,0.8) 1px, transparent 1px)",
                                            backgroundSize: "20px 20px",
                                        }}
                                    />
                                    <div className="relative">
                                        <p className="text-[#E8C060] text-xs font-bold uppercase tracking-widest mb-2">
                                            Ready to go deeper?
                                        </p>
                                        <h3 className="text-2xl font-extrabold text-white mb-2">
                                            Learn {post.category} with ArivuOn Academy
                                        </h3>
                                        <div className="flex items-center justify-center gap-3 mt-1 mb-5">
                                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9952A]/60" />
                                            <span className="text-[#C9952A] text-xs">✦</span>
                                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9952A]/60" />
                                        </div>
                                        <p className="text-slate-300/80 text-sm mb-7 max-w-md mx-auto">
                                            Structured courses, real projects, and career support — accessible globally.
                                        </p>
                                        <Link
                                            href="/courses"
                                            className="inline-block bg-gradient-to-r from-[#C9952A] to-[#E8C060] text-white font-bold text-sm px-8 py-3 rounded-xl hover:from-[#B8841E] hover:to-[#D4AA45] transition-all shadow-md"
                                        >
                                            Browse All Courses →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Author card */}
                            <div className="mt-8 flex items-center gap-4 p-5 rounded-xl border border-[#E0C068]/25 bg-[#FBF3DC]/20">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9952A] to-[#E8C060] flex items-center justify-center flex-shrink-0 text-white text-lg font-extrabold shadow-sm">
                                    A
                                </div>
                                <div>
                                    <p className="font-bold text-[#0D1B3E] text-sm">ArivuOn Academy</p>
                                    <p className="text-slate-500 text-xs mt-0.5">
                                        Tech Education Team · Python, DevOps &amp; Cloud ·{" "}
                                        <Link href="/" className="text-[#C9952A] hover:underline">
                                            academy.arivuon.in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="w-full lg:w-72 flex-shrink-0">
                            <CourseCta category={post.category} />

                            {related.length > 0 && (
                                <div className="mt-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[#C9952A] text-xs">✦</span>
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            Related Articles
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {related.map((rel) => (
                                            <RelatedCard key={rel.slug} post={rel} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
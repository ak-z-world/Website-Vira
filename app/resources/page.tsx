// app/resources/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceCard from './_components/ResourceCard';
import { UserCheck, Target, MapPin, RefreshCw, Code2, Unlock, Map, Terminal, Brain, Lightbulb, MessageSquare, BookOpen } from 'lucide-react';
import { breadcrumbSchema, webPageSchema } from './_lib/schema';

export const metadata: Metadata = {
  title: 'Free Developer Resources 2026 — Roadmaps, Projects, Interview Prep | Crack Leap Academy',
  description:
    'Explore 100+ free tech career resources: developer roadmaps 2026, project ideas, 1000+ interview questions, and in-depth tutorials for Python, React, AWS, DevOps, AI, and more.',
  keywords:
    'developer resources, programming roadmaps 2026, python interview questions, react projects, aws devops roadmap, ai engineer roadmap, tech career guide India',
  openGraph: {
    title: 'Free Developer Resources 2026 | Crack Leap Academy',
    description:
      'Roadmaps, projects, interview questions, and tutorials for Python, React, AWS, DevOps, AI/ML developers.',
    url: 'https://arivuon.com/resources',
    type: 'website',
  },
  alternates: { canonical: 'https://arivuon.com/resources' },
};

const FEATURED_RESOURCES = [
  {
    title: 'Python Developer Roadmap 2026',
    description:
      'Step-by-step guide from Python basics to senior developer. Month-by-month plan covering syntax, OOP, Django, FastAPI, testing, and cloud deployment.',
    href: '/resources/roadmaps/python-developer-roadmap-2026',
    badge: 'Roadmap',
    badgeColor: 'bg-green-50 text-green-700',
    tags: ['Python', 'Backend', 'Django', 'FastAPI'],
    readTime: '20 min read',
    difficulty: 'All Levels' as const,
    icon: <Terminal className="w-6 h-6" />,
    featured: true,
  },
  {
    title: 'AI Engineer Roadmap 2026',
    description:
      'Complete learning path for AI Engineers: Python, ML fundamentals, deep learning, LLMs, RAG systems, vector databases, and production AI deployment.',
    href: '/resources/roadmaps/ai-engineer-roadmap-2026',
    badge: 'Roadmap',
    badgeColor: 'bg-purple-50 text-purple-700',
    tags: ['AI/ML', 'LLMs', 'Python', 'PyTorch'],
    readTime: '25 min read',
    difficulty: 'All Levels' as const,
    icon: <Brain className="w-6 h-6" />,
    featured: true,
  },
  {
    title: '150+ Python Interview Questions & Answers',
    description:
      'Complete Python interview preparation covering data structures, OOP, decorators, generators, async programming, and system design for 2026 hiring.',
    href: '/resources/interview-questions/python-developer',
    badge: 'Interview Prep',
    badgeColor: 'bg-orange-50 text-orange-700',
    tags: ['Python', 'Interview', 'Data Structures', 'OOP'],
    readTime: '35 min read',
    difficulty: 'All Levels' as const,
    icon: <MessageSquare className="w-6 h-6" />,
    featured: true,
  },
];

const CATEGORY_CARDS = [
  {
    icon: <Map className="w-7 h-7" />,
    title: 'Developer Roadmaps',
    description: '10 career roadmaps with month-by-month learning plans for 2026.',
    href: '/resources/roadmaps',
    count: '10 roadmaps',
    color: 'from-blue-500 to-blue-700',
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    items: ['Python Developer', 'AWS DevOps', 'AI Engineer', 'Full Stack', 'Frontend', 'Backend', 'Data Scientist', 'ML Engineer', 'Cloud Engineer', 'Cybersecurity'],
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Project Ideas',
    description: '300+ project ideas across 10 technology stacks with implementation guides.',
    href: '/resources/projects',
    count: '300+ projects',
    color: 'from-emerald-500 to-emerald-700',
    bg: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    items: ['Python Projects', 'Django Projects', 'React Projects', 'AI/ML Projects', 'DevOps Projects', 'AWS Projects', 'Full Stack', 'Data Science', 'Cloud Projects', 'Mobile'],
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: 'Interview Questions',
    description: '1000+ interview questions for 10 tech roles with detailed answers.',
    href: '/resources/interview-questions',
    count: '1000+ questions',
    color: 'from-orange-500 to-orange-700',
    bg: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    items: ['Python Developer', 'Django Developer', 'React Developer', 'Full Stack', 'Backend', 'Frontend', 'DevOps', 'Data Scientist', 'ML Engineer', 'Cloud Engineer'],
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Tutorials & Guides',
    description: 'In-depth tutorials for 10 technologies from basics to production.',
    href: '/resources/tutorials',
    count: '10 tutorials',
    color: 'from-violet-500 to-violet-700',
    bg: 'from-violet-50 to-violet-100',
    border: 'border-violet-200',
    items: ['Python', 'Django', 'React', 'JavaScript', 'SQL & PostgreSQL', 'AWS', 'Docker', 'Git & GitHub', 'AI Fundamentals', 'DevOps Tools'],
  },
];

const STATS = [
  { label: 'Free Resources', value: '100+' },
  { label: 'Interview Questions', value: '1,200+' },
  { label: 'Project Ideas', value: '300+' },
  { label: 'Words of Content', value: '500K+' },
];

export default function ResourcesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ title: 'Developer Resources Hub 2026', description: 'Free roadmaps, projects, interview questions, and tutorials for developers.', url: 'https://arivuon.com/resources' })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/40 px-4 py-1.5 rounded-full text-sm font-medium text-blue-100 mb-6">
            <span>📚</span> Free Developer Resources — Updated for 2026
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Everything You Need to<br />
            <span className="text-yellow-300">Land Your Dream Dev Job</span>
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Roadmaps, project ideas, 1,200+ interview questions, and step-by-step tutorials — all free,
            all written by industry practitioners. Built for Indian developers targeting top tech companies.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-yellow-300">{s.value}</div>
                <div className="text-blue-100 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16">

        {/* What is Crack Leap Resources */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Crack Leap Resources?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Crack Leap Academy's resource library is a comprehensive, free knowledge hub for software developers,
              data scientists, DevOps engineers, and AI practitioners at every stage of their career.
              Every resource is written by experienced developers who have worked at top Indian and global tech companies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike generic tutorials, our resources are designed to be <strong>immediately actionable</strong> —
              with real project ideas you can add to your portfolio, interview questions asked at companies like
              Google, Amazon, Flipkart, and Razorpay, and career roadmaps built for the 2026 job market.
            </p>
          </div>
        </section>

        {/* Category Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-500 mb-8">Choose your focus area and dive in.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORY_CARDS.map((cat) => (
              <div key={cat.href} className={`bg-gradient-to-br ${cat.bg} border ${cat.border} rounded-2xl p-7 hover:shadow-md transition-all duration-200`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{cat.title}</h3>
                      <span className="text-xs font-semibold text-gray-500">{cat.count}</span>
                    </div>
                  </div>
                  <Link
                    href={cat.href}
                    className={`bg-gradient-to-r ${cat.color} text-white text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}
                  >
                    Browse →
                  </Link>
                </div>
                <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.slice(0, 5).map((item) => (
                    <span key={item} className="text-xs text-gray-600 bg-white/70 border border-white/80 px-2 py-0.5 rounded-full">
                      {item}
                    </span>
                  ))}
                  {cat.items.length > 5 && (
                    <span className="text-xs text-gray-500 bg-white/70 border border-white/80 px-2 py-0.5 rounded-full">
                      +{cat.items.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Resources</h2>
          <p className="text-gray-500 mb-8">Most popular resources this month.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_RESOURCES.map((resource) => (
              <ResourceCard key={resource.href} {...resource} />
            ))}
          </div>
        </section>

        {/* Why Use Our Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Developers Trust Crack Leap Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <UserCheck className="w-6 h-6 text-blue-600" />,
                title: 'Written by Practitioners',
                desc: 'All content created by developers who have worked in production systems at real companies.'
              },
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                title: 'Job-Focused',
                desc: 'Every resource is built around getting hired. We cover what companies actually ask in 2026.'
              },
              {
                icon: <MapPin className="w-6 h-6 text-blue-600" />,
                title: 'India-Relevant',
                desc: 'Salary data, company names, and career advice tailored to the Indian tech job market.'
              },
              {
                icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
                title: 'Updated for 2026',
                desc: 'Roadmaps and interview questions updated quarterly to reflect current hiring trends.'
              },
              {
                icon: <Code2 className="w-6 h-6 text-blue-600" />,
                title: 'Code-First Approach',
                desc: 'Every tutorial includes working code examples, not just theory.'
              },
              {
                icon: <Unlock className="w-6 h-6 text-blue-600" />,
                title: 'Completely Free',
                desc: 'All 100+ resources are free. No email required, no paywalls.'
              },
            ].map((feat) => (
              <div key={feat.title} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors group">
                <div className="flex-shrink-0 p-2 bg-blue-50/50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Start with a roadmap to understand your path, then build projects and prepare for interviews.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/resources/roadmaps" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 rounded-xl transition-colors">
              View All Roadmaps →
            </Link>
            <Link href="/resources/interview-questions" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Interview Prep
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
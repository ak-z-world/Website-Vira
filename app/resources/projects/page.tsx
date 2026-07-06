// app/resources/projects/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS_DATA } from './_data/projects';
import { breadcrumbSchema, webPageSchema } from '../_lib/schema';
import Breadcrumb from '../_components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Developer Project Ideas 2026 — 300+ Projects for Your Portfolio | ArivuOn Academy',
  description:
    'Browse 300+ real developer project ideas across Python, Django, React, Full Stack, AI, ML, Data Science, DevOps, AWS, and Cloud. Each category has 30+ projects with implementation guides, folder structures, and resume tips.',
  keywords:
    'developer project ideas 2026, python projects for resume, react projects portfolio, devops projects ideas, aws projects github, ai ml projects india, full stack project ideas',
  openGraph: {
    title: 'Developer Project Ideas 2026 — 300+ Portfolio Projects | ArivuOn Academy',
    description: '300+ real project ideas across 10 tech stacks with implementation guides for 2026 hiring.',
    url: 'https://arivuon.com/resources/projects',
    type: 'website',
  },
  alternates: { canonical: 'https://arivuon.com/resources/projects' },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Projects', href: '/resources/projects' },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  'All Levels': 'bg-blue-50 text-blue-700 border border-blue-200',
  Beginner: 'bg-green-50 text-green-700 border border-green-200',
  Intermediate: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  Advanced: 'bg-red-50 text-red-700 border border-red-200',
};

export default function ProjectsIndexPage() {
  const totalProjects = PROJECTS_DATA.reduce((sum, cat) => sum + cat.projects.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbs)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              title: 'Developer Project Ideas 2026',
              description: '300+ real developer project ideas with implementation guides.',
              url: 'https://arivuon.com/resources/projects',
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </div>
            <div>
              <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Project Ideas</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Developer Project Ideas 2026
              </h1>
            </div>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mb-8">
            {totalProjects}+ real project ideas across 10 technology stacks — each with implementation guides,
            folder structures, deployment notes, and resume impact tips for 2026 hiring.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {[
              { label: 'Project Ideas', value: `${totalProjects}+` },
              { label: 'Tech Stacks', value: '10' },
              { label: 'Impl. Guides', value: '30+' },
              { label: 'Levels', value: '3' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                <div className="text-xl font-extrabold text-yellow-300">{s.value}</div>
                <div className="text-blue-100 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">

        {/* What are these projects */}
        <section className="mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-gray-900 mb-3">How to Use These Project Lists</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Every project on this site is production-shaped — not a tutorial clone. Each category contains
              <strong> 10 beginner, 12 intermediate, and 8 advanced projects</strong> with full implementation
              guides covering folder structure, key files, step-by-step build instructions, and deployment notes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Build beginner projects to solidify fundamentals, intermediate projects for your primary portfolio,
              and one advanced project to demonstrate senior-level thinking in your target domain.
              Deploy every project — a live link is worth ten undeployed GitHub repos.
            </p>
          </div>
        </section>

        {/* Category Grid */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Technology</h2>
          <p className="text-gray-500 text-sm mb-7">Select a stack to see all projects, implementation guides, and resume tips.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS_DATA.map(cat => (
              <Link
                key={cat.slug}
                href={`/resources/projects/${cat.slug}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-200"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cat.color}15`, border: `1.5px solid ${cat.color}40` }}
                  >
                    <svg
                      className="w-5 h-5"
                      style={{ color: cat.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">{cat.projects.length} projects</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4 line-clamp-2">
                  {cat.description}
                </p>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.techStack.slice(0, 4).map(t => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {cat.techStack.length > 4 && (
                    <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-md">
                      +{cat.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${DIFFICULTY_COLORS[cat.difficulty]}`}
                  >
                    {cat.difficulty}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cat.readTime}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="mt-3 flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Browse projects</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Project counts by difficulty */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects by Difficulty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                level: 'Beginner',
                count: PROJECTS_DATA.reduce((sum, cat) => sum + cat.projects.filter(p => p.difficulty === 'Beginner').length, 0),
                color: 'border-green-400 bg-green-50',
                textColor: 'text-green-700',
                desc: 'Core language + framework fundamentals. Build these first to establish a solid base.',
                icon: 'M5 13l4 4L19 7',
                timeRange: '4–7 days each',
              },
              {
                level: 'Intermediate',
                count: PROJECTS_DATA.reduce((sum, cat) => sum + cat.projects.filter(p => p.difficulty === 'Intermediate').length, 0),
                color: 'border-yellow-400 bg-yellow-50',
                textColor: 'text-yellow-700',
                desc: 'Production-shaped projects that demonstrate real system design. These belong on your resume.',
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                timeRange: '2–4 weeks each',
              },
              {
                level: 'Advanced',
                count: PROJECTS_DATA.reduce((sum, cat) => sum + cat.projects.filter(p => p.difficulty === 'Advanced').length, 0),
                color: 'border-red-400 bg-red-50',
                textColor: 'text-red-700',
                desc: 'Senior and staff engineer portfolio pieces. Build one to differentiate at 15+ LPA interviews.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                timeRange: '4–8 weeks each',
              },
            ].map(tier => (
              <div key={tier.level} className={`border-2 ${tier.color} rounded-2xl p-6`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg className={`w-5 h-5 ${tier.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tier.icon} />
                    </svg>
                    <h3 className={`font-bold text-lg ${tier.textColor}`}>{tier.level}</h3>
                  </div>
                  <span className={`text-3xl font-extrabold ${tier.textColor}`}>{tier.count}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{tier.desc}</p>
                <span className="text-xs text-gray-500 font-medium">⏱ {tier.timeRange}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How to pick */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Project</h2>
          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Match your target job description',
                desc: 'Read 5 JDs for your target role. Note which technologies appear in every listing — those are the projects to build first. Building a project in the exact stack the company uses is the fastest path to interview callbacks.',
              },
              {
                step: '02',
                title: 'Build end-to-end, not breadth',
                desc: 'One fully deployed, well-tested, documented project beats five half-finished ones. Interviewers ask "walk me through your best project in detail" — you need to know every design decision intimately.',
              },
              {
                step: '03',
                title: 'Deploy every project',
                desc: 'A live URL with a clear README showing architecture, design decisions, and known trade-offs is worth more than a GitHub repo with 200 commits. Use Vercel, Railway, or AWS free tier — no excuses for no deployment.',
              },
              {
                step: '04',
                title: 'Quantify your README',
                desc: 'Add real numbers: "handles 2,000 req/sec at p99 < 50ms with Redis caching", "reduced query time from 4s to 80ms with composite index". Quantified claims are what separate memorable projects from the crowd.',
              },
            ].map(item => (
              <div key={item.step} className="flex gap-5 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm font-mono">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Build Your Portfolio?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Pick a technology stack, start with an intermediate project, deploy it, and document your decisions.
            One strong project a month is enough to land your next role.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/resources/projects/python-projects"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Python Projects →
            </Link>
            <Link
              href="/resources/projects/ai-projects"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              AI / LLM Projects
            </Link>
            <Link
              href="/resources/projects/devops-projects"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              DevOps Projects
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
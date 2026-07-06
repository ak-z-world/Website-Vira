// app/resources/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS_DATA, type Project, type ImplementationGuide } from '../_data/projects';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { breadcrumbSchema, faqSchema, articleSchema } from '../../_lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS_DATA.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = PROJECTS_DATA.find((c) => c.slug === slug);
  
  if (!cat) return { title: 'Not Found' };
  
  return {
    title: cat.seo.title,
    description: cat.seo.description,
    keywords: cat.seo.keywords.join(', '),
    openGraph: {
      title: cat.seo.title,
      description: cat.seo.description,
      url: `https://arivuon.com/resources/projects/${cat.slug}`,
      type: 'article',
    },
    alternates: { canonical: `https://arivuon.com/resources/projects/${cat.slug}` },
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const DIFFICULTY_BADGE: Record<string, string> = {
  Beginner: 'bg-green-50 text-green-700 border border-green-200',
  Intermediate: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  Advanced: 'bg-red-50 text-red-700 border border-red-200',
  'All Levels': 'bg-blue-50 text-blue-700 border border-blue-200',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col hover:border-blue-300 hover:shadow-sm transition-all duration-150">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-gray-900 text-sm leading-snug">{project.name}</h3>
        <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${DIFFICULTY_BADGE[project.difficulty]}`}>
          {project.difficulty}
        </span>
      </div>
      <p className="text-gray-500 text-xs leading-relaxed flex-grow mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {project.techStack.map((t) => (
          <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">{t}</span>
        ))}
      </div>
      <div className="pt-3 border-t border-gray-100 space-y-1">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg className="w-3.5 h-3.5 flex-shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{project.estimatedTime}</span>
        </div>
        <div className="flex items-start gap-1.5 text-xs text-gray-500">
          <svg className="w-3.5 h-3.5 flex-shrink-0 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="leading-relaxed">{project.resumeImpact}</span>
        </div>
      </div>
    </div>
  );
}

function ImplementationGuideCard({ guide }: { guide: ImplementationGuide }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
      <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-white font-bold text-sm">{guide.projectName}</h3>
      </div>

      <div className="p-5 space-y-6">
        {/* Folder Structure */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Folder Structure</p>
          <div className="bg-gray-950 rounded-lg overflow-x-auto">
            <pre className="text-green-400 font-mono text-xs p-4 leading-relaxed whitespace-pre">{guide.folderStructure}</pre>
          </div>
        </div>

        {/* Key Files */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Files</p>
          <div className="space-y-2">
            {guide.keyFiles.map((kf) => (
              <div key={kf.file} className="flex gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <code className="text-blue-700 font-mono text-xs flex-shrink-0 mt-0.5 leading-relaxed">{kf.file}</code>
                <span className="text-gray-600 text-xs leading-relaxed">{kf.purpose}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Build Steps */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Build Steps</p>
          <ol className="space-y-2">
            {guide.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Deployment Notes */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1.5">Deployment Notes</p>
          <p className="text-amber-800 text-sm leading-relaxed">{guide.deploymentNotes}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectCategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = PROJECTS_DATA.find((c) => c.slug === slug);
  
  if (!cat) notFound();

  const beginnerProjects = cat.projects.filter((p) => p.difficulty === 'Beginner');
  const intermediateProjects = cat.projects.filter((p) => p.difficulty === 'Intermediate');
  const advancedProjects = cat.projects.filter((p) => p.difficulty === 'Advanced');

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Projects', href: '/resources/projects' },
    { label: cat.title, href: `/resources/projects/${cat.slug}` },
  ];

  const tocItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'beginner', label: `Beginner Projects (${beginnerProjects.length})` },
    { id: 'intermediate', label: `Intermediate Projects (${intermediateProjects.length})` },
    { id: 'advanced', label: `Advanced Projects (${advancedProjects.length})` },
    ...(cat.implementationGuides.length > 0 ? [{ id: 'guides', label: 'Implementation Guides' }] : []),
    { id: 'resume', label: 'Resume Impact' },
    { id: 'interview', label: 'Interview Talking Points' },
    { id: 'faq', label: 'FAQ' },
  ];

  const canonicalUrl = `https://arivuon.com/resources/projects/${cat.slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(cat.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema({
          title: cat.seo.title,
          description: cat.seo.description,
          url: canonicalUrl,
          dateModified: '2025-12-01',
        }))
      }} />

      {/* Hero */}
      <section
        className="text-white py-14 px-4"
        style={{ background: `linear-gradient(135deg, ${cat.color}dd 0%, ${cat.color}99 100%)` }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/15 border border-white/25 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
              </svg>
            </div>
            <div>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Project Ideas</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{cat.title}</h1>
            </div>
          </div>
          <p className="text-white/85 text-base max-w-2xl mb-6 leading-relaxed">{cat.description}</p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center">
              <div className="text-xl font-extrabold">{cat.projects.length}</div>
              <div className="text-white/70 text-xs">Total Projects</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center">
              <div className="text-xl font-extrabold">{cat.implementationGuides.length}</div>
              <div className="text-white/70 text-xs">Full Guides</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2">
              <div className="flex flex-wrap gap-1.5">
                {cat.techStack.slice(0, 5).map((t) => (
                  <span key={t} className="text-xs bg-white/15 px-2 py-0.5 rounded-full text-white/90">{t}</span>
                ))}
                {cat.techStack.length > 5 && (
                  <span className="text-xs bg-white/15 px-2 py-0.5 rounded-full text-white/70">+{cat.techStack.length - 5} more</span>
                )}
              </div>
              <div className="text-white/60 text-xs mt-1">Tech Stack</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 py-12">
        <TableOfContents items={tocItems} />

        {/* Introduction */}
        <section id="intro" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Beginner', count: beginnerProjects.length, color: 'bg-green-50 border-green-200', text: 'text-green-700', time: '4–7 days each' },
              { label: 'Intermediate', count: intermediateProjects.length, color: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-700', time: '2–4 weeks each' },
              { label: 'Advanced', count: advancedProjects.length, color: 'bg-red-50 border-red-200', text: 'text-red-700', time: '4–8 weeks each' },
            ].map((tier) => (
              <div key={tier.label} className={`border rounded-xl p-4 text-center ${tier.color}`}>
                <div className={`text-3xl font-extrabold ${tier.text}`}>{tier.count}</div>
                <div className={`font-semibold text-sm ${tier.text}`}>{tier.label} Projects</div>
                <div className="text-gray-500 text-xs mt-1">{tier.time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Beginner */}
        <section id="beginner" className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Beginner Projects
              <span className="ml-2 text-sm font-normal text-gray-400">({beginnerProjects.length} projects)</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Build these to solidify your fundamentals. Focus on clean code, proper error handling, and a clear README before moving to intermediate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beginnerProjects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </section>

        {/* Intermediate */}
        <section id="intermediate" className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Intermediate Projects
              <span className="ml-2 text-sm font-normal text-gray-400">({intermediateProjects.length} projects)</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            These are your primary portfolio pieces. Deploy at least 2–3 of these with live URLs before applying to roles targeting 8–20 LPA.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {intermediateProjects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </section>

        {/* Advanced */}
        <section id="advanced" className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Advanced Projects
              <span className="ml-2 text-sm font-normal text-gray-400">({advancedProjects.length} projects)</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Build one of these to differentiate at senior-level interviews (15–40 LPA). These projects require
            solid intermediate foundations — do not skip ahead.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advancedProjects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        </section>

        {/* Implementation Guides */}
        {cat.implementationGuides.length > 0 && (
          <section id="guides" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Implementation Guides</h2>
            <p className="text-gray-500 text-sm mb-6">
              Full build guides for the top {cat.implementationGuides.length} projects — folder structure, key files,
              step-by-step instructions, and deployment notes.
            </p>
            {cat.implementationGuides.map((guide) => (
              <ImplementationGuideCard key={guide.projectName} guide={guide} />
            ))}
          </section>
        )}

        {/* Resume Impact */}
        <section id="resume" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Resume Impact</h2>
          <div className="space-y-3">
            {cat.resumeImpact.map((point, i) => (
              <div key={i} className="flex gap-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-green-800 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Talking Points */}
        <section id="interview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Interview Talking Points</h2>
          <div className="space-y-3">
            {cat.interviewTalkingPoints.map((point, i) => (
              <div key={i} className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-800 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features highlight for all projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">What Makes a Strong Project README</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Architecture Overview', desc: 'A diagram or clear prose description of every service, database, and how they connect. Interviewers read this first.' },
              { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Quantified Metrics', desc: '"Handles 2,000 req/sec at p99 < 50ms" or "reduced query time from 4s to 80ms with composite index" — numbers are memorable.' },
              { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', title: 'Setup Instructions', desc: 'docker compose up and the app runs. If setup takes more than 3 commands, reviewers abandon it. Make it trivial.' },
              { icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Design Decisions', desc: 'Explain why you chose PostgreSQL over MongoDB, or Celery over asyncio. Reasoning is what separates engineers from coders.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={cat.faqs} />
        </section>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-white text-center mb-12"
          style={{ background: `linear-gradient(135deg, ${cat.color}dd 0%, ${cat.color}99 100%)` }}
        >
          <h2 className="text-2xl font-bold mb-3">Start Building Today</h2>
          <p className="text-white/85 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
            Pick one intermediate project, deploy it, document your decisions, and move to the next.
            Consistency beats perfection — one shipped project per month changes your trajectory.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={`/resources/roadmaps/${cat.slug.replace('-projects', '-roadmap-2026').replace('data-science', 'data-scientist').replace('ml', 'ml-engineer').replace('aws', 'aws-devops').replace('cloud', 'cloud-engineer').replace('devops', 'aws-devops')}`}
              className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              View Learning Roadmap →
            </Link>
            <Link
              href="/resources/projects"
              className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/25 transition-colors text-sm"
            >
              All Project Categories
            </Link>
          </div>
        </div>

        <RelatedResources items={cat.relatedResources} />
      </article>
    </>
  );
}

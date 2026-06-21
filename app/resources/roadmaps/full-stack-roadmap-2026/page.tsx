// app/resources/roadmaps/full-stack-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Full Stack Developer Roadmap 2026 — React, Node.js, PostgreSQL, AWS | ArivuOn Academy',
  description:
    'Complete Full Stack Developer roadmap 2026: HTML/CSS, JavaScript, React, Next.js, Node.js/Django, PostgreSQL, REST APIs, Docker, and AWS deployment. Salary ₹8–35 LPA.',
  keywords:
    'full stack developer roadmap 2026, react nodejs roadmap india, full stack web developer career path, mern stack roadmap 2026, nextjs django full stack',
  openGraph: { title: 'Full Stack Developer Roadmap 2026 | ArivuOn Academy', url: 'https://arivuon.com/resources/roadmaps/full-stack-roadmap-2026' },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/full-stack-roadmap-2026' },
};

const FAQS = [
  { question: 'What is a Full Stack Developer?', answer: 'A Full Stack Developer can build complete web applications — both the frontend (what users see in the browser) and the backend (the server, database, and APIs). In India in 2026, the most common full stack combination is React/Next.js on the frontend with Django or Node.js/Express on the backend, PostgreSQL as the database, and AWS for deployment.' },
  { question: 'Should I use Django or Node.js as my backend?', answer: 'If you already know Python, use Django — the ecosystem is mature, hiring is strong, and Django REST Framework makes API building fast. If you prefer staying in JavaScript across the full stack, use Node.js with Express or Fastify. Both are valid in 2026. Django dominates in Indian product companies; Node.js is more common in startups and global companies. Pick one, go deep.' },
  { question: 'What salary can a Full Stack Developer earn in India in 2026?', answer: 'Entry-level (0–1 year): ₹5–10 LPA. Mid-level (2–4 years): ₹12–25 LPA. Senior Full Stack (5+ years): ₹25–50 LPA. At unicorns and MNCs, senior full stack engineers earn ₹40–80 LPA. Full stack engineers who can also handle DevOps and cloud command premium salaries.' },
  { question: 'Is Next.js required for a Full Stack role?', answer: 'Next.js is increasingly expected for frontend-heavy full stack roles in 2026. It handles SSR, SSG, and API routes in one framework, which reduces the need for a separate backend for many applications. However, for roles where Django/FastAPI handles the backend, plain React is sufficient. Know Next.js fundamentals regardless.' },
  { question: 'How important is TypeScript for Full Stack developers?', answer: 'TypeScript is now the industry default for JavaScript projects. Most new React and Node.js codebases use TypeScript. Interviewers at product companies expect TypeScript proficiency. Start using it from Month 3 of this roadmap — it will slow you down briefly but make you significantly more productive within weeks.' },
  { question: 'What databases should a Full Stack developer know?', answer: 'PostgreSQL is the primary relational database for full stack roles in India (used at Razorpay, Flipkart, Swiggy). Redis is essential for caching and sessions. MongoDB knowledge is useful for document-heavy applications. SQLite for development. Focus on PostgreSQL deeply — understand JOINs, indexes, transactions, and ORM query optimization.' },
];

const MONTHS = [
  { month: 'Month 1', title: 'HTML, CSS & Web Fundamentals', topics: ['HTML5 semantics: forms, tables, media, accessibility attributes', 'CSS3: box model, flexbox, CSS Grid, responsive design with media queries', 'CSS variables, animations, transitions', 'BEM methodology for CSS organization', 'Basics of browser DevTools for debugging', 'Git and GitHub: branching, PRs, merge conflicts'], project: 'Build a fully responsive multi-page portfolio website using pure HTML/CSS — no frameworks. Deploy on GitHub Pages.', milestone: 'Pixel-perfect responsive layouts without looking at documentation.' },
  { month: 'Month 2–3', title: 'JavaScript & TypeScript', topics: ['JS fundamentals: closures, prototypes, event loop, hoisting, scope', 'ES6+: destructuring, spread, async/await, Promises, modules', 'DOM manipulation and browser APIs', 'Fetch API, error handling, JSON', 'TypeScript: types, interfaces, generics, enums, utility types', 'Data structures in JS: Map, Set, WeakMap, iterators, generators', 'Testing with Jest: unit tests, mocking, coverage'], project: 'Build a TypeScript-powered kanban board with drag-and-drop, local storage persistence, and 80%+ Jest test coverage.', milestone: 'Write idiomatic TypeScript and debug async code without confusion.' },
  { month: 'Month 4–5', title: 'React & Next.js', topics: ['React core: JSX, state, props, hooks (useState, useEffect, useContext, useRef, useMemo)', 'React patterns: compound components, render props, custom hooks', 'State management: Zustand and React Query (TanStack Query)', 'Next.js 15: App Router, server/client components, Server Actions', 'Next.js data fetching: SSR, SSG, ISR, streaming', 'React Hook Form + Zod for forms and validation', 'Tailwind CSS: utility-first styling in React apps', 'Authentication: NextAuth.js / Clerk integration'], project: 'Build a full-featured job board app with Next.js 15: SSR listings, server actions for applications, Auth.js authentication, and Tailwind UI.', milestone: 'Build production-quality React applications with proper data fetching, auth, and state management.' },
  { month: 'Month 6–7', title: 'Backend: Django or Node.js', topics: ['Django REST Framework: models, serializers, ViewSets, permissions, throttling', 'OR Node.js: Express/Fastify, middleware, routing, error handling', 'JWT authentication and refresh token rotation', 'PostgreSQL with SQLAlchemy ORM (Django ORM or Prisma for Node)', 'Database migrations: Alembic or Django migrations', 'API design: REST conventions, versioning, pagination, filtering', 'Background tasks: Celery (Django) or BullMQ (Node)', 'File uploads: S3 integration with presigned URLs', 'API testing: pytest + DRF TestCase or Supertest for Node'], project: 'Build a multi-tenant SaaS backend with workspace isolation, JWT + refresh auth, Celery email tasks, S3 avatar uploads, and full pytest coverage.', milestone: 'Build and test production REST APIs with auth, file handling, and async tasks.' },
  { month: 'Month 8', title: 'Databases: PostgreSQL & Redis Deep Dive', topics: ['PostgreSQL advanced: window functions, CTEs, JSONB, full-text search', 'Query optimization: EXPLAIN ANALYZE, indexes (B-tree, GIN, partial), connection pooling with PgBouncer', 'Database design: normalization, denormalization trade-offs', 'Transactions and locking: MVCC, SELECT FOR UPDATE, deadlock prevention', 'Redis: data structures, pub/sub, sorted sets for leaderboards, Lua scripting', 'Caching patterns: cache-aside, write-through, cache invalidation strategies', 'Database security: row-level security (RLS) in PostgreSQL'], project: 'Optimize a slow Django/Node API — use EXPLAIN ANALYZE to identify bottlenecks, add composite indexes, implement Redis caching, and benchmark before/after with locust.', milestone: 'Reduce API response time by 10x using indexing and caching strategies.' },
  { month: 'Month 9', title: 'Docker & Deployment', topics: ['Docker: multi-stage builds, .dockerignore, production images', 'Docker Compose for full stack: frontend + backend + PostgreSQL + Redis + Nginx', 'Nginx: reverse proxy config, SSL termination, static file serving', 'AWS EC2 deployment: AMI setup, security groups, Elastic IP', 'AWS RDS PostgreSQL and ElastiCache Redis', 'GitHub Actions CI/CD: test → build → push → deploy', 'Environment management: AWS Secrets Manager, .env conventions', 'SSL certificates with Certbot and Let\'s Encrypt'], project: 'Deploy the SaaS project to AWS: EC2 (app) + RDS (PostgreSQL) + ElastiCache (Redis) + S3 (files) + CloudFront (frontend) + GitHub Actions pipeline.', milestone: 'Deploy and maintain a live production application accessible over HTTPS.' },
  { month: 'Month 10–12', title: 'System Design, Performance & Senior Skills', topics: ['Web performance: Core Web Vitals, lazy loading, code splitting, bundle analysis', 'API performance: N+1 queries, batching with DataLoader, GraphQL basics', 'System design: design Instagram, URL shortener, rate limiter', 'WebSockets and real-time: Socket.io or Django Channels', 'Microservices vs monolith: strangler fig, API gateway patterns', 'Security: OWASP Top 10, CSRF, XSS, SQL injection prevention, rate limiting', 'Accessibility: WCAG 2.1, ARIA, keyboard navigation', 'Code review, architecture documentation, ADRs'], project: 'Add real-time notifications to your SaaS (WebSockets), implement GraphQL API alongside REST, write architecture documentation, and record a 10-minute demo.', milestone: 'System design interviews at senior level. Full portfolio deployable on AWS. Ready for 12–25 LPA interviews.' },
];

const breadcrumbs = [
  { label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' }, { label: 'Full Stack Roadmap 2026', href: '/resources/roadmaps/full-stack-roadmap-2026' },
];

const TOC_ITEMS = [
  { id: 'intro', label: 'What Is a Full Stack Developer?' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'stacks', label: 'Popular Stacks in India' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'faq', label: 'FAQ' },
];

const RELATED = [
  { title: '100+ Full Stack Interview Questions', href: '/resources/interview-questions/full-stack-developer', description: 'React, Node.js, system design, and database questions for full stack roles.', category: 'Interview Prep', icon: '💬' },
  { title: 'Full Stack Project Ideas', href: '/resources/projects/full-stack-projects', description: '30+ full stack project ideas from CRUD apps to production SaaS.', category: 'Projects', icon: '🛠️' },
  { title: 'React Tutorial', href: '/resources/tutorials/react', description: 'In-depth React tutorial: hooks, patterns, and Next.js App Router.', category: 'Tutorial', icon: '📚' },
  { title: 'Frontend Roadmap 2026', href: '/resources/roadmaps/frontend-roadmap-2026', description: 'Go deeper on the frontend side with this dedicated roadmap.', category: 'Roadmap', icon: '🎨' },
  { title: 'Backend Roadmap 2026', href: '/resources/roadmaps/backend-roadmap-2026', description: 'Specialize in backend APIs, databases, and microservices.', category: 'Roadmap', icon: '⚙️' },
  { title: 'Python Course', href: '/courses/python', description: 'Learn Django and FastAPI for the backend half of your full stack.', category: 'Course', icon: '🎓' },
];

export default function FullStackRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Full Stack Developer Roadmap 2026', description: 'Complete full stack roadmap: React, Next.js, Django/Node, PostgreSQL, AWS.', url: 'https://arivuon.com/resources/roadmaps/full-stack-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🏗️</span>
            <div>
              <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Full Stack Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Full Stack Developer Roadmap 2026</h1>
            </div>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mb-6">React + Next.js on the frontend, Django or Node.js on the backend, PostgreSQL, Docker, and AWS. A complete 10-month plan to become a hireable full stack developer.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '🎯 All Levels', '⚡ React + Django/Node', '💰 ₹8–35 LPA Roles'].map(tag => (
              <span key={tag} className="bg-blue-500/30 border border-blue-400/40 px-3 py-1.5 rounded-full text-blue-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="intro" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Full Stack Developer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">A Full Stack Developer builds complete web applications end-to-end — the browser-rendered frontend and the server-side backend including APIs and databases. In 2026, full stack engineers are among the most in-demand profiles at Indian startups and product companies because they can ship features independently without waiting on specialized teams.</p>
          <p className="text-gray-600 leading-relaxed mb-4">The most common stacks hired in India in 2026: <strong>React + Django</strong> (dominant at funded startups), <strong>Next.js + Node.js</strong> (common at SaaS companies), and <strong>React + FastAPI</strong> (growing in AI-product companies). This roadmap covers React/Next.js on the frontend and gives you a Django or Node.js choice for the backend.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            {[
              { label: 'MERN Stack', stack: 'MongoDB + Express + React + Node', color: 'bg-green-50 border-green-200 text-green-700' },
              { label: 'React + Django', stack: 'React/Next.js + Django REST + PostgreSQL', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { label: 'Next.js Full Stack', stack: 'Next.js + Prisma + PostgreSQL + tRPC', color: 'bg-purple-50 border-purple-200 text-purple-700' },
            ].map(s => (
              <div key={s.label} className={`border rounded-xl p-4 text-center ${s.color}`}>
                <div className="font-bold text-sm mb-1">{s.label}</div>
                <div className="text-xs opacity-80">{s.stack}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Full Stack Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
                  <span className="text-blue-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>{t}</li>)}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4"><p className="text-blue-700 font-semibold text-sm mb-1">🛠️ Project</p><p className="text-blue-600 text-sm">{m.project}</p></div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><p className="text-amber-700 font-semibold text-sm mb-1">🎯 Milestone</p><p className="text-amber-600 text-sm">{m.milestone}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Stack Developer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left">Experience</th><th className="px-4 py-3 text-left">IT Services</th>
                <th className="px-4 py-3 text-left">Startup</th><th className="px-4 py-3 text-left">Product Co. / MNC</th>
              </tr></thead>
              <tbody>
                {[['0–1 yr', '₹4–7 LPA', '₹6–10 LPA', '₹10–18 LPA'], ['2–4 yr', '₹8–14 LPA', '₹12–22 LPA', '₹20–35 LPA'], ['5–8 yr', '₹14–22 LPA', '₹20–38 LPA', '₹35–60 LPA'], ['8+ yr Staff', '₹22–35 LPA', '₹35–55 LPA', '₹55–90 LPA']].map(([e, ...v], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{e}</td>
                    {v.map((val, vi) => <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{val}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Build Your Full Stack Skills</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">Structured React + Django training with real project deployments on AWS.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/react" className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Enrol in React Course →</Link>
            <Link href="/resources/interview-questions/full-stack-developer" className="bg-blue-500/30 border border-blue-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500/50 transition-colors">Full Stack Interview Prep</Link>
          </div>
        </div>
        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
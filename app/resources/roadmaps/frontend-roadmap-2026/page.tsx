// app/resources/roadmaps/frontend-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Frontend Developer Roadmap 2026 — React, TypeScript, Next.js | ArivuOn Academy',
  description: 'Complete frontend developer roadmap 2026: HTML/CSS, JavaScript, TypeScript, React, Next.js 15, performance optimization, accessibility, and testing. Salary ₹6–30 LPA.',
  keywords: 'frontend developer roadmap 2026, react developer roadmap, nextjs roadmap india, javascript typescript roadmap 2026, frontend engineer career path',
  openGraph: { title: 'Frontend Developer Roadmap 2026 | ArivuOn Academy', url: 'https://arivuon.com/resources/roadmaps/frontend-roadmap-2026' },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/frontend-roadmap-2026' },
};

const FAQS = [
  { question: 'What does a Frontend Developer do in 2026?', answer: 'A frontend developer builds everything users interact with in the browser: layouts, interactive components, data-driven UIs, forms, animations, and client-side logic. In 2026, frontend developers also work with server components, edge rendering (Next.js App Router), and Web APIs like WebSockets and Service Workers.' },
  { question: 'Is React still the best frontend framework in 2026?', answer: 'Yes. React remains the dominant frontend framework in India and globally in 2026. Next.js (built on React) is the production standard for new projects. Vue.js is popular in some companies but React dominates hiring. Svelte and Solid are worth knowing but not hiring-critical. Invest deeply in React and Next.js — it pays off reliably.' },
  { question: 'Do I need to learn TypeScript as a frontend developer?', answer: 'TypeScript is mandatory in 2026. Virtually every serious frontend codebase in Indian product companies uses TypeScript. Interviewers at Razorpay, Swiggy, Zepto, and Meesho expect TypeScript proficiency. Start with TypeScript from day one and never write vanilla JS for production work.' },
  { question: 'What is the salary for a Frontend Developer in India 2026?', answer: 'Entry-level (0–1 year): ₹4–8 LPA. Mid-level (2–4 years): ₹10–20 LPA. Senior Frontend (5+ years): ₹20–40 LPA. Frontend-specialized roles at unicorns (Razorpay, CRED) pay ₹35–60 LPA for senior engineers. Engineers who combine strong React skills with performance optimization and accessibility expertise are paid the most.' },
  { question: 'How important is CSS in 2026 with Tailwind everywhere?', answer: 'CSS fundamentals remain critical even with Tailwind. You need to understand the box model, flexbox, CSS Grid, specificity, and stacking contexts to debug layout issues efficiently. Tailwind removes boilerplate but does not replace CSS knowledge. Spend Month 1 mastering pure CSS before touching any utility framework.' },
  { question: 'What testing tools should a frontend developer know?', answer: 'Vitest or Jest for unit tests. React Testing Library for component tests (replaces Enzyme). Playwright or Cypress for end-to-end tests. Every senior frontend role expects you to write tests and understand testing pyramids. Minimum 60% coverage on critical user flows is the expectation at most product companies.' },
];

const MONTHS = [
  { month: 'Month 1', title: 'HTML5, CSS3 & Responsive Design', topics: ['HTML5 semantics, forms, validation, media elements', 'CSS box model, positioning, display types', 'Flexbox and CSS Grid — master both completely', 'Responsive design: mobile-first, media queries, container queries', 'CSS custom properties, animations, transitions', 'BEM naming, CSS architecture principles', 'Browser DevTools proficiency'], project: 'Build a pixel-perfect landing page clone (Stripe or Linear style) using only HTML/CSS. Must be fully responsive across mobile/tablet/desktop.', milestone: 'Build any layout from a Figma design without help.' },
  { month: 'Month 2–3', title: 'JavaScript Deep Dive & TypeScript', topics: ['JS engine: call stack, event loop, microtasks, macrotasks', 'Closures, scope, this binding, prototype chain', 'ES6+: destructuring, spread, generators, iterators, Proxy', 'Promises, async/await, error handling patterns', 'TypeScript: strict mode, interfaces, generics, mapped types, conditional types', 'Browser APIs: localStorage, IndexedDB, Intersection Observer, Web Workers', 'Jest/Vitest: unit testing functions and modules'], project: 'Build a TypeScript-only Pomodoro timer with IndexedDB persistence, Web Worker for background tick, and 90%+ test coverage via Vitest.', milestone: 'Write complex TypeScript generics without reference. Debug async race conditions.' },
  { month: 'Month 4–5', title: 'React 19 & Ecosystem', topics: ['React core: rendering, reconciliation, Fiber architecture', 'All hooks: useState, useEffect, useCallback, useMemo, useRef, useId, useTransition', 'React 19 features: use() hook, form actions, optimistic updates', 'Custom hooks: patterns, composition, testing', 'State management: Zustand for global state, React Query for server state', 'React Hook Form + Zod for type-safe forms', 'Testing: React Testing Library, user-event, accessibility queries', 'Code splitting, lazy loading, Suspense, error boundaries'], project: 'Build a GitHub profile explorer: React Query data fetching, Zustand favorites, skeleton loading, dark mode, fully tested with RTL + Vitest.', milestone: 'Architect React app state without prop drilling. Debug render performance with Profiler.' },
  { month: 'Month 6–7', title: 'Next.js 15 App Router & Performance', topics: ['Next.js App Router: layouts, pages, loading.tsx, error.tsx, not-found.tsx', 'Server Components vs Client Components — when and why', 'Server Actions for mutations without API routes', 'Data fetching: fetch caching, revalidation strategies (ISR)', 'Parallel and sequential data fetching, Suspense streaming', 'Metadata API, Open Graph, structured data for SEO', 'Next.js Image, Font, and Script optimization', 'Authentication: Auth.js (NextAuth v5) integration', 'Middleware for route protection and i18n'], project: 'Build a full-featured blog platform with Next.js 15: MDX content, ISR, Auth.js, Server Actions for comments, OG image generation, and perfect Lighthouse scores.', milestone: '90+ Lighthouse score on all metrics. Deploy production Next.js app with CI/CD.' },
  { month: 'Month 8', title: 'CSS Architecture, Design Systems & Animation', topics: ['Tailwind CSS: configuration, plugins, custom components, dark mode', 'shadcn/ui: component composition, theming, customization', 'Design system principles: tokens, component variants, accessibility', 'Radix UI primitives for accessible headless components', 'Framer Motion: entrance animations, layout animations, gestures', 'CSS-in-JS: CSS Modules for scoped styles in Next.js', 'Storybook: component documentation and visual testing'], project: 'Build a reusable component library with Tailwind + Radix UI: 15 accessible components, Storybook docs, Framer Motion animations, and npm-publishable package.', milestone: 'Build accessible UI components that pass WCAG 2.1 AA without third-party auditing.' },
  { month: 'Month 9', title: 'End-to-End Testing, Performance & Accessibility', topics: ['Playwright: page object models, network mocking, CI integration', 'Core Web Vitals: LCP, CLS, INP — measurement and optimization', 'Bundle analysis: webpack-bundle-analyzer, tree shaking', 'Image optimization: WebP, AVIF, responsive images, lazy loading strategies', 'WCAG 2.1 AA compliance: ARIA roles, keyboard navigation, focus management', 'axe-core and Lighthouse CI for automated accessibility testing', 'React DevTools Profiler: identifying wasted renders'], project: 'Audit the Next.js blog for performance and accessibility. Achieve 95+ Lighthouse scores, fix all axe-core violations, and add Playwright E2E tests for critical flows.', milestone: 'Identify and fix performance bottlenecks independently. Zero axe-core violations.' },
  { month: 'Month 10', title: 'Advanced Patterns, System Design & Deployment', topics: ['Micro-frontend architecture: Module Federation, single-spa', 'Real-time: WebSockets with socket.io, SSE for live feeds', 'Web Performance API: PerformanceObserver, Navigation Timing', 'PWA: Service Workers, Cache API, offline support, Web App Manifest', 'Frontend system design: design Twitter feed, Notion editor, Google Docs collab', 'CI/CD: GitHub Actions for lint/test/build/deploy to Vercel or S3+CloudFront', 'Monitoring: Sentry for error tracking, Datadog RUM'], project: 'Add real-time collaboration to a shared editor using WebSockets, implement offline support via Service Worker, and set up Sentry + Datadog RUM monitoring.', milestone: 'Design and justify frontend architecture at staff engineer level. Ready for senior frontend interviews.' },
];

const breadcrumbs = [
  { label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' }, { label: 'Frontend Roadmap 2026', href: '/resources/roadmaps/frontend-roadmap-2026' },
];
const TOC_ITEMS = [
  { id: 'intro', label: 'What Is a Frontend Developer?' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'tools', label: 'Tools & Stack' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'faq', label: 'FAQ' },
];
const RELATED = [
  { title: '120+ Frontend Interview Questions', href: '/resources/interview-questions/frontend-developer', description: 'CSS, JavaScript, React, performance, and system design questions.', category: 'Interview Prep', icon: '💬' },
  { title: 'React Projects for Portfolio', href: '/resources/projects/react-projects', description: '30+ React and Next.js project ideas from beginner to advanced.', category: 'Projects', icon: '🛠️' },
  { title: 'React Tutorial', href: '/resources/tutorials/react', description: 'Complete React tutorial: hooks, patterns, state management.', category: 'Tutorial', icon: '📚' },
  { title: 'JavaScript Tutorial', href: '/resources/tutorials/javascript', description: 'Deep dive into modern JavaScript and TypeScript.', category: 'Tutorial', icon: '📚' },
  { title: 'Full Stack Roadmap 2026', href: '/resources/roadmaps/full-stack-roadmap-2026', description: 'Extend your frontend skills into backend and databases.', category: 'Roadmap', icon: '🏗️' },
  { title: 'React Developer Course', href: '/courses/react', description: 'Structured React and Next.js training with project mentorship.', category: 'Course', icon: '🎓' },
];

export default function FrontendRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Frontend Developer Roadmap 2026', description: 'React, TypeScript, Next.js 15, performance, and accessibility roadmap.', url: 'https://arivuon.com/resources/roadmaps/frontend-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🎨</span>
            <div>
              <span className="text-cyan-200 text-sm font-semibold uppercase tracking-wider">Frontend Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Frontend Developer Roadmap 2026</h1>
            </div>
          </div>
          <p className="text-cyan-100 text-lg max-w-2xl mb-6">HTML/CSS → JavaScript → TypeScript → React → Next.js 15. A 10-month plan to become a senior frontend engineer with performance, accessibility, and testing skills.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '⚛️ React + Next.js 15', '🎯 All Levels', '💰 ₹6–40 LPA Roles'].map(tag => (
              <span key={tag} className="bg-cyan-500/30 border border-cyan-400/40 px-3 py-1.5 rounded-full text-cyan-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="intro" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Frontend Developer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">A frontend developer builds user interfaces — everything a user sees, clicks, and interacts with in a web browser. In 2026, senior frontend engineers are expected to own Core Web Vitals performance, implement WCAG accessibility, write Playwright E2E tests, and architect component systems. The bar has risen significantly beyond "making things look good."</p>
          <p className="text-gray-600 leading-relaxed">React remains the dominant framework with 68% market share in Indian product companies. Next.js 15 with the App Router is the production standard for new projects. TypeScript is non-negotiable. Tailwind CSS and shadcn/ui define the modern styling stack.</p>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Frontend Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-4">
                  <span className="text-cyan-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span>{t}</li>)}
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

        <section id="tools" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frontend Stack 2026</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'React 19', cat: 'UI Library', icon: '⚛️' }, { name: 'Next.js 15', cat: 'Framework', icon: '▲' },
              { name: 'TypeScript 5', cat: 'Language', icon: '💙' }, { name: 'Tailwind CSS', cat: 'Styling', icon: '🎨' },
              { name: 'shadcn/ui', cat: 'Components', icon: '🧱' }, { name: 'Radix UI', cat: 'Primitives', icon: '⭕' },
              { name: 'Zustand', cat: 'State', icon: '🐻' }, { name: 'React Query', cat: 'Server State', icon: '🔄' },
              { name: 'Zod', cat: 'Validation', icon: '✅' }, { name: 'Framer Motion', cat: 'Animation', icon: '✨' },
              { name: 'Vitest / Jest', cat: 'Unit Testing', icon: '🧪' }, { name: 'Playwright', cat: 'E2E Testing', icon: '🎭' },
              { name: 'Storybook', cat: 'Docs', icon: '📖' }, { name: 'Vite', cat: 'Bundler', icon: '⚡' },
              { name: 'Sentry', cat: 'Monitoring', icon: '🔍' }, { name: 'Vercel', cat: 'Deploy', icon: '🚀' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-cyan-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.cat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frontend Developer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-cyan-600 text-white">
                <th className="px-4 py-3 text-left">Experience</th><th className="px-4 py-3 text-left">IT Services</th>
                <th className="px-4 py-3 text-left">Startup</th><th className="px-4 py-3 text-left">Product Co. / MNC</th>
              </tr></thead>
              <tbody>
                {[['Fresher (0–1 yr)', '₹3–6 LPA', '₹5–9 LPA', '₹9–16 LPA'], ['Junior (2–3 yr)', '₹6–12 LPA', '₹10–18 LPA', '₹16–28 LPA'], ['Senior (4–6 yr)', '₹12–20 LPA', '₹18–32 LPA', '₹28–50 LPA'], ['Staff (7+ yr)', '₹20–32 LPA', '₹30–50 LPA', '₹50–85 LPA']].map(([e, ...v], i) => (
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

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Start Building with React</h2>
          <p className="text-cyan-100 mb-6 max-w-lg mx-auto">Structured React and Next.js training with performance, testing, and deployment labs.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/react" className="bg-white text-cyan-700 font-bold px-6 py-3 rounded-xl hover:bg-cyan-50 transition-colors">Enrol in React Course →</Link>
            <Link href="/resources/interview-questions/frontend-developer" className="bg-cyan-500/30 border border-cyan-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-cyan-500/50 transition-colors">Frontend Interview Prep</Link>
          </div>
        </div>
        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
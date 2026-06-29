// app/resources/roadmaps/backend-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Backend Developer Roadmap 2026 — APIs, Databases, Microservices | Crack Leap Academy',
  description: 'Backend developer roadmap 2026: REST APIs, PostgreSQL, Redis, Kafka, microservices, Docker, Kubernetes, and system design. Salary ₹8–40 LPA in India.',
  keywords: 'backend developer roadmap 2026, api developer roadmap india, microservices roadmap, postgresql redis backend, django fastapi backend roadmap',
  openGraph: { title: 'Backend Developer Roadmap 2026 | Crack Leap Academy', url: 'https://arivuon.com/resources/roadmaps/backend-roadmap-2026' },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/backend-roadmap-2026' },
};

const FAQS = [
  { question: 'What languages are used for backend development in India in 2026?', answer: 'Python (Django/FastAPI) dominates at product startups and AI companies. Java (Spring Boot) leads in enterprise and banking. Node.js (Express/Fastify) is common at global-facing SaaS companies. Go is growing at companies needing high-performance services (Zomato, Razorpay infrastructure). For most hiring in India, Python or Java is the pragmatic choice.' },
  { question: 'What databases must a backend developer know?', answer: 'PostgreSQL (relational, primary for most apps), Redis (caching, queues, pub-sub), MongoDB (document store, useful for flexible schemas), Elasticsearch (search). Know PostgreSQL deeply — advanced queries, indexing, replication. Understand when to pick relational vs NoSQL. Redis is used in almost every production backend.' },
  { question: 'What is the salary for a Backend Developer in India in 2026?', answer: 'Entry-level: ₹5–10 LPA. Mid-level (2–4 years): ₹12–25 LPA. Senior (5+ years): ₹25–50 LPA. Backend engineers who understand distributed systems and can design for 10M+ users earn ₹40–80 LPA at product companies and MNCs.' },
  { question: 'When should I learn microservices vs keep a monolith?', answer: 'Start with a well-structured monolith. Microservices add operational complexity (service discovery, distributed tracing, network failures, consistency) that is not justified until you have clear scaling bottlenecks or large independent teams. Understand microservices architecturally and know when to apply them — but do not build microservices-first as a beginner.' },
  { question: 'Is GraphQL replacing REST for backend APIs?', answer: 'No, REST remains dominant for internal and external APIs in India. GraphQL is widely used at companies with complex frontend data requirements (Facebook, Twitter, Swiggy). Know REST deeply. Add GraphQL knowledge as a secondary skill, especially if targeting product companies with complex mobile/web clients.' },
  { question: 'What message brokers should a backend developer know?', answer: 'Redis (via BullMQ or Celery) for task queues — essential for background jobs. Kafka for high-throughput event streaming (used at Zepto, Flipkart, Swiggy for order events, analytics). RabbitMQ for complex routing patterns. Start with Redis queues, learn Kafka fundamentals, skip RabbitMQ unless your target company uses it.' },
];

const MONTHS = [
  { month: 'Month 1–2', title: 'Python/Java Backend Foundations & HTTP', topics: ['HTTP/1.1 and HTTP/2: methods, headers, status codes, cookies, sessions', 'Python: async/await, type hints, dataclasses, Pydantic — OR — Java: Spring Boot basics, DI, IoC', 'REST API design: resource naming, versioning, pagination, filtering, sorting', 'FastAPI or Django REST Framework: routing, serialization, validation', 'Authentication: JWT (access + refresh), OAuth2 flows, API keys', 'Middleware: logging, request timing, CORS, rate limiting'], project: 'Build a complete task management REST API with JWT auth, role-based permissions, filtering, and OpenAPI docs.', milestone: 'Design and document a REST API that a frontend team can consume without clarification.' },
  { month: 'Month 3–4', title: 'PostgreSQL Deep Dive & ORM Mastery', topics: ['PostgreSQL internals: MVCC, WAL, vacuum, autovacuum', 'Advanced SQL: CTEs, window functions, JSONB operators, arrays, full-text search with tsvector', 'Indexing: B-tree, GIN, GiST, partial, composite indexes — when to use each', 'Query planning: EXPLAIN ANALYZE, identifying sequential scans, index-only scans', 'SQLAlchemy (Python) or JPA/Hibernate (Java): relationships, lazy vs eager loading, N+1 problem', 'Database migrations: Alembic or Flyway — versioned, idempotent, rollback-safe', 'Connection pooling: PgBouncer in transaction mode', 'Row-level security, partitioning for large tables'], project: 'Diagnose and fix a slow e-commerce database: add indexes, rewrite N+1 queries, implement pagination with keyset, benchmark with pgbench.', milestone: 'Reduce query time from seconds to milliseconds on 1M-row tables using indexing and query rewrite.' },
  { month: 'Month 5', title: 'Redis, Caching & Background Tasks', topics: ['Redis data structures: strings, hashes, lists, sets, sorted sets, streams, HyperLogLog', 'Caching patterns: cache-aside, write-through, write-behind, cache stampede prevention', 'Redis TTL strategies and cache invalidation', 'Celery (Python) or BullMQ (Node): task queues, priority, retries, dead-letter queues', 'Redis Pub/Sub for real-time event broadcasting', 'Rate limiting patterns: token bucket, sliding window with Redis sorted sets', 'Distributed locks with Redis SETNX / Redlock algorithm'], project: 'Add Redis caching to the task API: cache user profiles (TTL 5min), rate limiting (100 req/min per IP), Celery email tasks with retry logic.', milestone: 'Reduce API p95 latency by 80% via caching. Zero rate limiting bypasses.' },
  { month: 'Month 6', title: 'Microservices, Event-Driven & Kafka', topics: ['Microservices patterns: service discovery, API gateway, circuit breaker, saga, outbox pattern', 'Kafka fundamentals: producers, consumers, consumer groups, partitions, offsets, log compaction', 'Exactly-once semantics, idempotent consumers, offset management', 'Event-driven architecture: domain events, event sourcing concepts', 'gRPC for inter-service communication: protobuf, streaming, deadlines', 'Service mesh concepts: Istio sidecar, mTLS, circuit breaking', 'Distributed tracing: OpenTelemetry instrumentation for multi-service flows'], project: 'Split the monolith API into 3 services (users, tasks, notifications) communicating via Kafka events with the outbox pattern.', milestone: 'Trace a request end-to-end across 3 services in Jaeger. Handle Kafka consumer failures gracefully.' },
  { month: 'Month 7–8', title: 'Testing, Security & Production Hardening', topics: ['Testing pyramid: unit, integration, contract (Pact), E2E for APIs', 'pytest: fixtures, parametrize, factory_boy, httpx AsyncClient', 'API security: OWASP API Security Top 10, injection prevention, SSRF', 'Secrets management: AWS Secrets Manager, HashiCorp Vault dynamic secrets', 'Input validation and sanitization at every layer', 'Audit logging: who did what, when — immutable audit trails', 'API versioning strategies: URL, header, content negotiation', 'Performance testing: Locust for load testing, identifying bottlenecks'], project: 'Security audit + full test suite: 85%+ coverage, Pact contract tests, OWASP ZAP scan, Locust load test to 1000 concurrent users.', milestone: 'Ship a backend with zero critical OWASP vulnerabilities and 85%+ test coverage.' },
  { month: 'Month 9–10', title: 'System Design, Cloud Deployment & Senior Skills', topics: ['System design: URL shortener, rate limiter, distributed job scheduler, notification service', 'CAP theorem, eventual consistency, conflict resolution', 'Read replicas, CQRS, database sharding strategies', 'AWS deployment: EKS, RDS Multi-AZ, ElastiCache, SQS, MSK (managed Kafka)', 'Infrastructure cost optimization: connection pool sizing, instance rightsizing', 'SLIs, SLOs, error budgets for backend services', 'Technical documentation: ADRs, API changelogs, runbooks', 'Code review and mentorship best practices'], project: 'Design a notification service that handles 1M events/day: Kafka ingestion, fan-out to email/SMS/push, dead-letter queue, replay capability, full observability.', milestone: 'System design interview ready at senior/staff level for backend roles.' },
];

const breadcrumbs = [
  { label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' }, { label: 'Backend Roadmap 2026', href: '/resources/roadmaps/backend-roadmap-2026' },
];

const RELATED = [
  { title: '120+ Backend Interview Questions', href: '/resources/interview-questions/backend-developer', description: 'APIs, databases, system design, and distributed systems questions.', category: 'Interview Prep', icon: '💬' },
  { title: 'Python Developer Roadmap', href: '/resources/roadmaps/python-developer-roadmap-2026', description: 'Specialize in Python backend with Django and FastAPI.', category: 'Roadmap', icon: '🐍' },
  { title: 'AWS DevOps Roadmap', href: '/resources/roadmaps/aws-devops-roadmap-2026', description: 'Add deployment and infrastructure skills to your backend stack.', category: 'Roadmap', icon: '☁️' },
  { title: 'PostgreSQL Tutorial', href: '/resources/tutorials/postgresql', description: 'Deep dive into PostgreSQL for backend developers.', category: 'Tutorial', icon: '📚' },
  { title: 'Backend Developer Interview Questions', href: '/resources/interview-questions/backend-developer', description: 'System design, databases, and API questions with full answers.', category: 'Interview Prep', icon: '💬' },
  { title: 'DevOps Projects', href: '/resources/projects/devops-projects', description: 'Infrastructure and deployment projects to complement backend skills.', category: 'Projects', icon: '🛠️' },
];

export default function BackendRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Backend Developer Roadmap 2026', description: 'APIs, PostgreSQL, Kafka, microservices, and system design roadmap.', url: 'https://arivuon.com/resources/roadmaps/backend-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">⚙️</span>
            <div>
              <span className="text-teal-200 text-sm font-semibold uppercase tracking-wider">Backend Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Backend Developer Roadmap 2026</h1>
            </div>
          </div>
          <p className="text-teal-100 text-lg max-w-2xl mb-6">REST APIs → PostgreSQL deep dive → Redis → Kafka → microservices → system design. A 10-month plan to become a senior backend engineer in India.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '🎯 All Levels', '🐘 PostgreSQL + Kafka', '💰 ₹8–40 LPA Roles'].map(tag => (
              <span key={tag} className="bg-teal-500/30 border border-teal-400/40 px-3 py-1.5 rounded-full text-teal-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Does a Backend Developer Do?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Backend developers build the server-side logic, APIs, databases, and infrastructure that power applications. Users never see backend code directly — they see its results: fast responses, reliable data, and secure transactions. In 2026, backend engineers at Indian product companies design systems that handle millions of requests daily, manage terabytes of data, and maintain 99.9%+ uptime.</p>
          <p className="text-gray-600 leading-relaxed">The most critical backend skills for Indian hiring in 2026 are: REST API design, PostgreSQL query optimization, Redis caching, async background tasks, and system design for distributed systems. These are consistently the topics tested across rounds at Flipkart, Zepto, Razorpay, and Swiggy.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Backend Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-emerald-700 px-6 py-4">
                  <span className="text-teal-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-teal-500 mt-0.5 flex-shrink-0">✓</span>{t}</li>)}
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

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Backend Developer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-teal-600 text-white">
                <th className="px-4 py-3 text-left">Experience</th><th className="px-4 py-3 text-left">IT Services</th>
                <th className="px-4 py-3 text-left">Startup</th><th className="px-4 py-3 text-left">Product / MNC</th>
              </tr></thead>
              <tbody>
                {[['0–1 yr', '₹4–8 LPA', '₹6–11 LPA', '₹10–18 LPA'], ['2–4 yr', '₹8–15 LPA', '₹13–23 LPA', '₹20–38 LPA'], ['5–8 yr', '₹15–24 LPA', '₹22–40 LPA', '₹38–65 LPA'], ['8+ yr Staff', '₹24–38 LPA', '₹38–60 LPA', '₹60–100 LPA']].map(([e, ...v], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{e}</td>
                    {v.map((val, vi) => <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{val}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Build Production Backend Systems</h2>
          <p className="text-teal-100 mb-6 max-w-lg mx-auto">Python, Django, FastAPI, PostgreSQL, and AWS — structured with real projects.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/python" className="bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">Enrol in Python Course →</Link>
            <Link href="/resources/interview-questions/backend-developer" className="bg-teal-500/30 border border-teal-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-500/50 transition-colors">Backend Interview Prep</Link>
          </div>
        </div>
        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
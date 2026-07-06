// app/resources/projects/_data/projects.ts
// Complete project data for all 10 categories — production content, zero placeholders.

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  resumeImpact: string;
  estimatedTime: string;
  features: string[];
}

export interface ImplementationGuide {
  projectName: string;
  folderStructure: string;
  keyFiles: { file: string; purpose: string }[];
  steps: string[];
  deploymentNotes: string;
}

export interface RelatedResource {
  title: string;
  href: string;
  description: string;
  category: string;
  icon: string;
}

export interface ProjectCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  techStack: string[];
  readTime: string;
  lastUpdated: string;
  projects: Project[];
  implementationGuides: ImplementationGuide[];
  resumeImpact: string[];
  interviewTalkingPoints: string[];
  faqs: { question: string; answer: string }[];
  relatedResources: RelatedResource[];
  seo: { title: string; description: string; keywords: string[] };
}

// ─── Icon paths (Heroicons/Lucide-style outline SVG path data, 24x24 viewBox) ──
export const ICONS = {
  python: 'M12 2C9.5 2 8 3.5 8 5.5V8h4v1H6c-2 0-3 1.5-3 4s1 4 3 4h2v-2.5c0-1.5 1-3 3-3h4c1.7 0 3-1.3 3-3V5.5C18 3.5 16.5 2 14 2h-2zm-1.5 2.5a1 1 0 110 2 1 1 0 010-2zM12 22c2.5 0 4-1.5 4-3.5V16h-4v-1h6c2 0 3-1.5 3-4s-1-4-3-4h-2v2.5c0 1.5-1 3-3 3H9c-1.7 0-3 1.3-3 3v2.5c0 2 1.5 3.5 4 3.5h2zm1.5-2.5a1 1 0 110-2 1 1 0 010 2z',
  django: 'M5 3h4v15.5c0 2.5-1.8 3.5-4 3.5H3.5v-3H5c.8 0 1-.3 1-1V3zm5 6h4v9c0 2.5-1.8 4-4 4h-1v-3h1c.8 0 1-.3 1-1v-9zm0-6h4v4h-4V3z',
  react: 'M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm7 7c1.5.5 2.5 1.2 2.5 2s-1 1.5-2.5 2M5 9c-1.5.5-2.5 1.2-2.5 2s1 1.5 2.5 2M9 19c-.5 1.5-1.2 2.5-2 2.5s-1.5-1-2-2.5M15 19c.5 1.5 1.2 2.5 2 2.5s1.5-1 2-2.5',
  fullstack: 'M3 4h18v12H3V4zm0 14h18v2H3v-2zm6-9l3 3-3 3M14 11h3',
  ai: 'M9 2a1 1 0 011 1v1h4V3a1 1 0 112 0v1h.5A2.5 2.5 0 0119 6.5V8h1a1 1 0 110 2h-1v4h1a1 1 0 110 2h-1v1.5a2.5 2.5 0 01-2.5 2.5H16v1a1 1 0 11-2 0v-1h-4v1a1 1 0 11-2 0v-1h-.5A2.5 2.5 0 015 17.5V16H4a1 1 0 110-2h1v-4H4a1 1 0 110-2h1V6.5A2.5 2.5 0 017.5 4H8V3a1 1 0 011-1zm-1 6a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2H8z',
  ml: 'M3 13h4l3-9 4 18 3-9h4M3 13a2 2 0 100 4 2 2 0 000-4zM21 13a2 2 0 100 4 2 2 0 000-4z',
  dataScience: 'M4 19h16M4 19V9l4-4 4 4 4-6 4 8v8M8 19v-6m4 6v-9m4 9v-4',
  devops: 'M12 2l3 3-3 3-3-3 3-3zM4 12l3-3 3 3-3 3-3-3zM20 12l-3-3-3 3 3 3 3-3zM12 22l-3-3 3-3 3 3-3 3z',
  aws: 'M3 16.5l9 5 9-5M3 12l9 5 9-5M3 7.5l9 5 9-5L12 2.5 3 7.5z',
  cloud: 'M6 18a4 4 0 01-.4-7.98A6 6 0 0118 10a4.5 4.5 0 010 8H6z',
} as const;

// ─── Reusable related resources fragments ───────────────────────────────────
const courseLink = (href: string, title: string, description: string): RelatedResource => ({
  title, href, description, category: 'Course', icon: '🎓',
});
const roadmapLink = (href: string, title: string, description: string): RelatedResource => ({
  title, href, description, category: 'Roadmap', icon: '🗺️',
});
const interviewLink = (href: string, title: string, description: string): RelatedResource => ({
  title, href, description, category: 'Interview Prep', icon: '💬',
});
const tutorialLink = (href: string, title: string, description: string): RelatedResource => ({
  title, href, description, category: 'Tutorial', icon: '📚',
});

// ════════════════════════════════════════════════════════════════════════════
// 1. PYTHON PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const pythonProjects: ProjectCategory = {
  slug: 'python-projects',
  title: 'Python Projects',
  description:
    'A curated collection of 30+ Python projects spanning automation scripts, REST APIs, data tools, and production-grade backend systems — built to demonstrate real engineering skill to hiring managers in 2026.',
  icon: ICONS.python,
  color: '#10B981',
  difficulty: 'All Levels',
  techStack: ['Python 3.12+', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'pytest'],
  readTime: '18 min read',
  lastUpdated: 'December 2025',
  projects: [
    // Beginner (10)
    { name: 'CLI Expense Tracker', description: 'A command-line tool to log, categorize, and summarize personal expenses with CSV persistence and monthly reports.', techStack: ['Python', 'argparse', 'CSV'], difficulty: 'Beginner', resumeImpact: 'Demonstrates file I/O, CLI design, and data aggregation logic.', estimatedTime: '1 week', features: ['Add/edit/delete expense entries', 'Category-wise monthly summary', 'CSV import/export', 'Budget alert when category exceeds limit'] },
    { name: 'Password Strength Auditor', description: 'A tool that checks password strength against entropy rules and cross-references against a local breached-password dataset.', techStack: ['Python', 'hashlib', 'regex'], difficulty: 'Beginner', resumeImpact: 'Shows security awareness and string processing skill.', estimatedTime: '4 days', features: ['Entropy-based strength scoring', 'Common password dictionary check', 'SHA-1 breach database lookup', 'Suggestions for improvement'] },
    { name: 'Web Scraper for Job Listings', description: 'Scrapes job postings from a public listings site, deduplicates entries, and exports structured results to JSON/CSV.', techStack: ['Python', 'BeautifulSoup', 'requests'], difficulty: 'Beginner', resumeImpact: 'Proves ability to extract and structure unstructured web data.', estimatedTime: '1 week', features: ['Pagination handling', 'Rate-limited requests', 'Deduplication by job ID', 'Scheduled daily scrape via cron'] },
    { name: 'Markdown to PDF Converter', description: 'Converts Markdown files into styled PDF documents using a custom CSS theme, supporting tables, code blocks, and images.', techStack: ['Python', 'markdown', 'WeasyPrint'], difficulty: 'Beginner', resumeImpact: 'Demonstrates working with document generation libraries.', estimatedTime: '5 days', features: ['Custom CSS theming', 'Table of contents generation', 'Syntax-highlighted code blocks', 'Batch conversion mode'] },
    { name: 'Contact Book with JSON Persistence', description: 'A terminal-based contact manager storing structured contact data with search, tagging, and import/export.', techStack: ['Python', 'JSON', 'dataclasses'], difficulty: 'Beginner', resumeImpact: 'Shows OOP fundamentals and data modeling with dataclasses.', estimatedTime: '4 days', features: ['Fuzzy name search', 'Tag-based filtering', 'vCard export', 'Duplicate detection'] },
    { name: 'Simple URL Shortener (Local)', description: 'A Flask-based URL shortener using SQLite for storage with click tracking and custom alias support.', techStack: ['Python', 'Flask', 'SQLite'], difficulty: 'Beginner', resumeImpact: 'First exposure to web frameworks and database-backed apps.', estimatedTime: '1 week', features: ['Custom short alias', 'Click count tracking', 'Expiry dates for links', 'QR code generation'] },
    { name: 'Weather CLI Dashboard', description: 'Fetches live weather data from a public API and renders a colorized terminal dashboard with forecasts.', techStack: ['Python', 'requests', 'rich'], difficulty: 'Beginner', resumeImpact: 'Demonstrates API consumption and terminal UI rendering.', estimatedTime: '4 days', features: ['5-day forecast view', 'Multiple city tracking', 'Colorized severity alerts', 'Caching to reduce API calls'] },
    { name: 'File Organizer Automation', description: 'A script that watches a directory and auto-sorts files into folders by type, date, or custom rules.', techStack: ['Python', 'watchdog', 'pathlib'], difficulty: 'Beginner', resumeImpact: 'Shows practical automation and filesystem manipulation skills.', estimatedTime: '5 days', features: ['Real-time directory watching', 'Rule-based sorting config (YAML)', 'Duplicate file detection', 'Undo last sort operation'] },
    { name: 'Quiz Application with Scoring', description: 'A console quiz engine that loads questions from JSON, tracks scores, and persists a leaderboard.', techStack: ['Python', 'JSON', 'dataclasses'], difficulty: 'Beginner', resumeImpact: 'Reinforces control flow, data structures, and state management.', estimatedTime: '5 days', features: ['Timed questions', 'Difficulty-weighted scoring', 'Persistent leaderboard', 'Category selection'] },
    { name: 'PDF Invoice Generator', description: 'Generates professional PDF invoices from structured order data with line items, tax calculation, and branding.', techStack: ['Python', 'ReportLab', 'Jinja2'], difficulty: 'Beginner', resumeImpact: 'Demonstrates document generation and business logic implementation.', estimatedTime: '1 week', features: ['Line-item tax calculation', 'Custom branding/logo', 'Multi-currency support', 'Batch invoice generation'] },

    // Intermediate (12)
    { name: 'Blog REST API with JWT Auth', description: 'A full Django REST Framework API for a blogging platform with JWT authentication, role-based permissions, and comment threading.', techStack: ['Django', 'DRF', 'PostgreSQL', 'JWT'], difficulty: 'Intermediate', resumeImpact: 'Proves you can build secured, production-shaped REST APIs.', estimatedTime: '3 weeks', features: ['JWT access + refresh tokens', 'Role-based permissions (author/editor/admin)', 'Nested comment threading', 'Full-text search on posts', 'Rate limiting per user'] },
    { name: 'Task Queue with Celery + Redis', description: 'A background job processing system handling email notifications, report generation, and scheduled tasks via Celery.', techStack: ['Python', 'Celery', 'Redis', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'Demonstrates understanding of async task processing — a common interview topic.', estimatedTime: '2 weeks', features: ['Retry logic with exponential backoff', 'Periodic tasks via Celery Beat', 'Task result tracking', 'Dead-letter queue for failed tasks', 'Flower monitoring dashboard'] },
    { name: 'Real-Time Chat with Django Channels', description: 'A WebSocket-based chat application supporting multiple rooms, typing indicators, and message persistence.', techStack: ['Django Channels', 'WebSockets', 'Redis', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Shows real-time system design beyond standard request/response.', estimatedTime: '3 weeks', features: ['Multi-room support', 'Typing indicators', 'Message history persistence', 'Online presence tracking', 'File/image sharing'] },
    { name: 'E-Commerce REST API', description: 'A complete e-commerce backend with product catalog, cart, order processing, and Razorpay payment integration.', techStack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Razorpay'], difficulty: 'Intermediate', resumeImpact: 'Covers the most commonly asked backend interview domain — e-commerce systems.', estimatedTime: '4 weeks', features: ['Cart with stock validation', 'Razorpay payment webhook handling', 'Order status state machine', 'Coupon/discount engine', 'Admin inventory dashboard API'] },
    { name: 'URL Shortener with Analytics', description: 'A production-grade URL shortener using Redis caching, click analytics, and rate limiting via token bucket.', techStack: ['FastAPI', 'Redis', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'A favorite system design interview question — having built it gives you a real edge.', estimatedTime: '2 weeks', features: ['Base62 short code generation', 'Redis-cached redirects (sub-5ms)', 'Click analytics by geography/device', 'Token bucket rate limiting', 'Custom domain support'] },
    { name: 'Web Scraping Pipeline with Scrapy', description: 'A distributed scraping pipeline using Scrapy with proxy rotation, data validation, and PostgreSQL storage.', techStack: ['Scrapy', 'PostgreSQL', 'Docker'], difficulty: 'Intermediate', resumeImpact: 'Demonstrates pipeline architecture and resilient scraping at scale.', estimatedTime: '2 weeks', features: ['Proxy rotation middleware', 'Item validation pipelines', 'Duplicate filtering', 'Scheduled crawls via cron + Docker'] },
    { name: 'Multi-Tenant SaaS Backend', description: 'A subscription-based SaaS backend with workspace isolation, tiered plans, and usage metering.', techStack: ['Django', 'DRF', 'Stripe', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Multi-tenancy is a high-value, frequently asked system design topic.', estimatedTime: '4 weeks', features: ['Schema-per-tenant isolation', 'Plan-based feature gating', 'Usage metering and overage billing', 'Tenant-scoped admin panel'] },
    { name: 'GraphQL API with Strawberry', description: 'A GraphQL API layer over a PostgreSQL database using Strawberry, with DataLoader for N+1 query prevention.', techStack: ['Python', 'Strawberry GraphQL', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'GraphQL knowledge differentiates you in frontend-heavy product companies.', estimatedTime: '2 weeks', features: ['Query/mutation/subscription support', 'DataLoader batching', 'Field-level authorization', 'Schema introspection docs'] },
    { name: 'Log Aggregation & Alerting Tool', description: 'A tool that tails application logs, parses structured entries, and triggers Slack alerts on error-rate spikes.', techStack: ['Python', 'asyncio', 'Redis Streams'], difficulty: 'Intermediate', resumeImpact: 'Shows observability thinking — valued in backend and DevOps interviews alike.', estimatedTime: '2 weeks', features: ['Structured log parsing (JSON/regex)', 'Sliding window error-rate detection', 'Slack webhook alerting', 'Redis Streams for log buffering'] },
    { name: 'API Rate Limiter as a Service', description: 'A standalone rate-limiting microservice implementing token bucket and sliding window algorithms, usable by any client via gRPC.', techStack: ['Python', 'gRPC', 'Redis'], difficulty: 'Intermediate', resumeImpact: 'Demonstrates algorithmic depth applied to a real infrastructure problem.', estimatedTime: '2 weeks', features: ['Token bucket + sliding window algorithms', 'gRPC service interface', 'Per-client configurable limits', 'Redis Lua scripts for atomicity'] },
    { name: 'Inventory Management System', description: 'A warehouse inventory system with barcode-based stock tracking, low-stock alerts, and supplier reorder automation.', techStack: ['Django', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'A practical domain project that recruiters relate to immediately.', estimatedTime: '3 weeks', features: ['Barcode scan stock updates', 'Automated low-stock reorder emails', 'Multi-warehouse support', 'Audit trail for every stock change'] },
    { name: 'PDF Data Extraction Service', description: 'An API that extracts structured data (tables, key-value pairs) from uploaded PDF invoices using pdfplumber and regex rules.', techStack: ['FastAPI', 'pdfplumber', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Document processing is a recurring fintech/ops interview theme.', estimatedTime: '2 weeks', features: ['Table extraction from scanned PDFs', 'Configurable extraction rule sets', 'Confidence scoring per field', 'Async batch processing queue'] },

    // Advanced (8)
    { name: 'Microservices E-Commerce Platform', description: 'A fully decomposed e-commerce platform with separate services for catalog, cart, orders, and payments communicating via Kafka events.', techStack: ['FastAPI', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'], difficulty: 'Advanced', resumeImpact: 'The single strongest portfolio piece for senior backend interviews — proves distributed systems competence.', estimatedTime: '6 weeks', features: ['Event-driven order saga pattern', 'Outbox pattern for reliable publishing', 'Per-service PostgreSQL databases', 'Kubernetes deployment with Helm', 'Distributed tracing with Jaeger'] },
    { name: 'ML Model Serving Platform', description: 'A FastAPI-based platform for serving multiple ML models with versioning, A/B testing, and Prometheus monitoring.', techStack: ['FastAPI', 'Docker', 'MLflow', 'Prometheus'], difficulty: 'Advanced', resumeImpact: 'Bridges backend engineering and ML — highly valued at AI product companies.', estimatedTime: '4 weeks', features: ['Model version routing', 'A/B traffic splitting', 'Prometheus latency/throughput metrics', 'Automatic model rollback on error spike'] },
    { name: 'Real-Time Analytics Dashboard Backend', description: 'A backend that ingests high-volume event streams via Kafka, aggregates metrics in Redis Streams, and serves live dashboards over WebSockets.', techStack: ['Python', 'Kafka', 'Redis Streams', 'WebSockets'], difficulty: 'Advanced', resumeImpact: 'Streaming analytics is a top-tier system design topic at unicorns.', estimatedTime: '5 weeks', features: ['Kafka consumer group scaling', 'Windowed aggregation (1m/5m/1h)', 'WebSocket live metric push', 'Backpressure handling'] },
    { name: 'Distributed Job Scheduler', description: 'A cron-like distributed job scheduler with leader election, job persistence, and at-least-once execution guarantees.', techStack: ['Python', 'PostgreSQL', 'Redis', 'asyncio'], difficulty: 'Advanced', resumeImpact: 'Building infrastructure others rely on is a strong senior-engineer signal.', estimatedTime: '5 weeks', features: ['Leader election via Redis lock', 'Cron expression parsing', 'At-least-once execution with idempotency keys', 'Job retry with dead-letter handling'] },
    { name: 'Payment Gateway Reconciliation Engine', description: 'A system that reconciles internal transaction records against Razorpay/Stripe settlement reports, flagging mismatches automatically.', techStack: ['Django', 'PostgreSQL', 'Celery', 'Pandas'], difficulty: 'Advanced', resumeImpact: 'Fintech reconciliation is a niche, high-trust skill that pays a premium.', estimatedTime: '4 weeks', features: ['Automated daily reconciliation job', 'Mismatch detection and flagging', 'Audit-ready discrepancy reports', 'Idempotent reprocessing on failure'] },
    { name: 'CI/CD Pipeline Orchestrator', description: 'A self-hosted lightweight CI/CD orchestrator that builds Docker images, runs tests, and deploys to Kubernetes on Git push.', techStack: ['Python', 'Docker SDK', 'Kubernetes', 'FastAPI'], difficulty: 'Advanced', resumeImpact: 'Shows you understand the deployment pipeline, not just application code.', estimatedTime: '5 weeks', features: ['Webhook-triggered builds', 'Isolated build containers', 'Kubernetes rolling deploy automation', 'Build log streaming via WebSockets'] },
    { name: 'Multi-Region Notification Service', description: 'A fan-out notification service delivering email, SMS, and push notifications with regional failover and delivery tracking.', techStack: ['FastAPI', 'SQS', 'SNS', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Notification infrastructure is asked about at nearly every product company interview.', estimatedTime: '4 weeks', features: ['Multi-channel fan-out (email/SMS/push)', 'Regional provider failover', 'Delivery status webhooks', 'Retry with exponential backoff and DLQ'] },
    { name: 'API Gateway with Rate Limiting & Auth', description: 'A custom API gateway in front of multiple backend services handling auth, rate limiting, request routing, and circuit breaking.', techStack: ['FastAPI', 'Redis', 'Docker'], difficulty: 'Advanced', resumeImpact: 'Demonstrates infrastructure-level thinking valued in platform engineering roles.', estimatedTime: '4 weeks', features: ['JWT validation at the edge', 'Per-route rate limiting', 'Circuit breaker for unhealthy services', 'Request/response logging middleware'] },
  ],
  implementationGuides: [
    {
      projectName: 'Blog REST API with JWT Auth',
      folderStructure: `blog_api/
├── config/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   ├── accounts/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── permissions.py
│   ├── posts/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── filters.py
│   └── comments/
│       ├── models.py
│       ├── serializers.py
│       └── views.py
├── tests/
│   ├── test_auth.py
│   ├── test_posts.py
│   └── test_comments.py
├── requirements.txt
├── manage.py
└── .env.example`,
      keyFiles: [
        { file: 'config/settings.py', purpose: 'DRF + SimpleJWT configuration, installed apps, CORS, database connection from environment variables.' },
        { file: 'apps/accounts/permissions.py', purpose: 'Custom DRF permission classes implementing role-based access (author, editor, admin).' },
        { file: 'apps/posts/views.py', purpose: 'ViewSets with select_related/prefetch_related to avoid N+1 queries on author and comment counts.' },
        { file: 'apps/comments/models.py', purpose: 'Self-referential ForeignKey for nested comment threading with a depth limit.' },
      ],
      steps: [
        'Initialize Django project and apps: accounts, posts, comments.',
        'Configure SimpleJWT with access (15min) and refresh (7 day) token lifetimes.',
        'Build custom User model extending AbstractUser with a role field.',
        'Implement PostViewSet with DRF filters for search, ordering, and pagination.',
        'Add nested comment serialization with recursive depth handling.',
        'Write permission classes enforcing author-only edit/delete on posts.',
        'Add full-text search using PostgreSQL SearchVector on title/body.',
        'Write pytest-django tests covering auth flow, CRUD, and permission denial cases.',
        'Containerize with Docker and docker-compose (app + PostgreSQL).',
      ],
      deploymentNotes: 'Deploy to AWS EC2 behind Nginx with Gunicorn (3 workers), PostgreSQL on RDS, static files served via S3 + CloudFront. Set DEBUG=False and configure ALLOWED_HOSTS strictly.',
    },
    {
      projectName: 'URL Shortener with Analytics',
      folderStructure: `url_shortener/
├── app/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── routers/
│   │   ├── shorten.py
│   │   └── analytics.py
│   ├── services/
│   │   ├── encoder.py
│   │   └── rate_limiter.py
│   └── core/
│       └── config.py
├── tests/
│   ├── test_shorten.py
│   └── test_rate_limit.py
├── alembic/
├── docker-compose.yml
├── Dockerfile
└── requirements.txt`,
      keyFiles: [
        { file: 'app/services/encoder.py', purpose: 'Base62 encoding logic converting auto-increment IDs to short codes, with collision-free guarantee.' },
        { file: 'app/services/rate_limiter.py', purpose: 'Redis-backed token bucket implementation using a Lua script for atomic check-and-decrement.' },
        { file: 'app/routers/shorten.py', purpose: 'POST /shorten and GET /{code} endpoints — redirect path checks Redis cache before hitting PostgreSQL.' },
        { file: 'app/routers/analytics.py', purpose: 'Aggregation endpoints returning click counts by day, country (via IP geolocation), and referrer.' },
      ],
      steps: [
        'Design PostgreSQL schema: urls (id, long_url, short_code, created_at, owner_id) and clicks (url_id, timestamp, ip, country, referrer).',
        'Implement Base62 encoder service with a dedicated unit test for collision avoidance.',
        'Build POST /shorten endpoint with custom alias support and validation.',
        'Implement GET /{code} redirect with Redis cache-aside pattern (TTL 1 hour).',
        'Add async click logging that does not block the redirect response.',
        'Build the Redis Lua token bucket script for per-IP rate limiting.',
        'Add analytics aggregation queries using PostgreSQL window functions.',
        'Load test with Locust to confirm sub-10ms redirect latency under 500 RPS.',
      ],
      deploymentNotes: 'Deploy with the app on ECS Fargate, ElastiCache Redis for the hot-path cache, RDS PostgreSQL for persistence. Use CloudFront in front for additional edge caching of redirects.',
    },
    {
      projectName: 'Microservices E-Commerce Platform',
      folderStructure: `ecommerce-platform/
├── services/
│   ├── catalog-service/
│   │   ├── app/
│   │   └── Dockerfile
│   ├── cart-service/
│   │   ├── app/
│   │   └── Dockerfile
│   ├── order-service/
│   │   ├── app/
│   │   │   ├── outbox.py
│   │   │   └── saga.py
│   │   └── Dockerfile
│   └── payment-service/
│       ├── app/
│       └── Dockerfile
├── infra/
│   ├── k8s/
│   │   ├── catalog-deployment.yaml
│   │   ├── order-deployment.yaml
│   │   └── kafka-statefulset.yaml
│   └── helm/
├── docker-compose.yml
└── README.md`,
      keyFiles: [
        { file: 'services/order-service/app/outbox.py', purpose: 'Implements the transactional outbox pattern — order state changes and Kafka events committed atomically.' },
        { file: 'services/order-service/app/saga.py', purpose: 'Choreography-based saga coordinating cart → order → payment → inventory compensation flow.' },
        { file: 'infra/k8s/kafka-statefulset.yaml', purpose: 'Kafka StatefulSet manifest with persistent volumes and 3-broker replication.' },
      ],
      steps: [
        'Define service boundaries: catalog, cart, order, payment — each with its own PostgreSQL database.',
        'Set up a local Kafka cluster via docker-compose for development.',
        'Implement the outbox pattern in order-service: write order + outbox event in one transaction.',
        'Build a debezium-style poller that publishes outbox events to Kafka.',
        'Implement the saga: order-created → payment-requested → payment-confirmed/failed → inventory-reserved/released.',
        'Add compensating transactions for the failure path (refund, release stock).',
        'Instrument every service with OpenTelemetry and export traces to Jaeger.',
        'Write Helm charts for each service and deploy to a local kind cluster.',
        'Add a Postman/Bruno collection demonstrating the full order lifecycle.',
      ],
      deploymentNotes: 'Deploy to AWS EKS with each service in its own namespace, AWS MSK for managed Kafka, RDS per service (or schema-per-service on a shared cluster for cost control), and an ALB ingress in front of an API gateway service.',
    },
  ],
  resumeImpact: [
    'Demonstrates production-level Python beyond scripting — REST API design, authentication, and database modeling.',
    'Shows familiarity with async task processing (Celery/Redis), a frequent gap in junior candidates.',
    'Microservices and event-driven projects signal readiness for senior backend interviews.',
    'Deployed, live projects (not just GitHub code) prove you can ship — interviewers check this first.',
  ],
  interviewTalkingPoints: [
    'Be ready to explain why you chose Django vs FastAPI for a given project — framework trade-off reasoning is commonly probed.',
    'For the URL shortener, expect a live whiteboard extension: "now design it for 1 billion URLs" — know the sharding answer.',
    'For the e-commerce microservices project, explain the outbox pattern and why naive dual-writes break consistency.',
    'Quantify impact wherever possible: "reduced redirect latency to 8ms via Redis caching" beats "used Redis for caching."',
  ],
  faqs: [
    { question: 'Which Python project should I build first?', answer: 'Start with the CLI Expense Tracker or Contact Book if you are new to Python — they build core fundamentals without framework overhead. If you already know Python syntax, jump straight to the Blog REST API with JWT Auth, since authentication and CRUD APIs are the most commonly evaluated skill in interviews.' },
    { question: 'Do I need to deploy these projects, or is GitHub code enough?', answer: 'Deploy at least your top 2–3 projects. A live, working link with a README explaining architecture decisions is significantly more convincing to interviewers than unreviewed source code. Use a free tier (Railway, Render, or an AWS free-tier EC2 instance) if budget is a concern.' },
    { question: 'How do I make a simple project like a URL shortener stand out?', answer: 'Add the things a "tutorial" project skips: rate limiting, click analytics, proper indexing, and a load test proving your latency numbers. Document the design decisions in a README — interviewers read these and ask about specific choices you made.' },
    { question: 'Should I use Django or FastAPI for these projects?', answer: 'Use Django for projects needing an admin panel, built-in auth, and rapid CRUD scaffolding (blog, inventory, multi-tenant SaaS). Use FastAPI for projects emphasizing async performance, microservices, and OpenAPI-first design (URL shortener, ML serving, API gateway). Building one strong project in each shows range.' },
    { question: 'How long should each project realistically take?', answer: 'Beginner projects: 4–7 days at 2–3 hours/day. Intermediate projects: 2–4 weeks. Advanced projects: 4–6 weeks. Do not rush — a polished intermediate project with tests and documentation beats five unfinished advanced projects.' },
    { question: 'What should the README for each project include?', answer: 'Problem statement, architecture diagram or description, setup instructions, key design decisions and trade-offs, API documentation (or Swagger link), and a section on what you would improve with more time. This last section specifically signals seniority to reviewers.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/python-developer-roadmap-2026', 'Python Developer Roadmap 2026', 'The structured learning path these projects are designed to complement.'),
    interviewLink('/resources/interview-questions/python-developer', '150+ Python Interview Questions', 'Practice the questions interviewers ask about these exact project patterns.'),
    tutorialLink('/resources/tutorials/python', 'Python Tutorial', 'Core language fundamentals if you need to brush up before starting.'),
    courseLink('/courses/python', 'Python Developer Course', 'Structured mentorship while you build these projects.'),
    { title: 'Django Projects', href: '/resources/projects/django-projects', description: 'Go deeper into Django-specific project ideas.', category: 'Projects', icon: '🛠️' },
    { title: 'AWS Projects', href: '/resources/projects/aws-projects', description: 'Learn to deploy these Python projects to production AWS infrastructure.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ Python Projects for Your Portfolio (2026) — Beginner to Advanced',
    description: 'Build 30+ real Python projects: REST APIs, microservices, task queues, and ML serving systems. Full implementation guides, folder structures, and resume tips for 2026 hiring.',
    keywords: ['python projects 2026', 'python project ideas for resume', 'python backend projects', 'fastapi django projects', 'python portfolio projects india'],
  },
};



// ════════════════════════════════════════════════════════════════════════════
// 2. DJANGO PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const djangoProjects: ProjectCategory = {
  slug: 'django-projects',
  title: 'Django Projects',
  description:
    'Production-shaped Django projects covering the framework features Indian product companies test for: ORM optimization, DRF API design, Celery background processing, and multi-tenant architecture.',
  icon: ICONS.django,
  color: '#0C4B33',
  difficulty: 'All Levels',
  techStack: ['Django 5.x', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
  readTime: '17 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'Personal Blog with Admin Customization', description: 'A blog with a heavily customized Django admin for non-technical content editors, including rich text and image management.', techStack: ['Django', 'django-ckeditor', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Shows Django admin mastery — a frequently underestimated but valuable skill.', estimatedTime: '1 week', features: ['Custom admin actions and filters', 'Rich text editing', 'Draft/publish workflow', 'SEO meta fields per post'] },
    { name: 'Todo App with User Authentication', description: 'A multi-user todo application with Django auth, per-user task isolation, and due-date reminders.', techStack: ['Django', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Solidifies Django auth, sessions, and model relationships.', estimatedTime: '5 days', features: ['User registration/login', 'Per-user task isolation via FK', 'Due date sorting', 'Email reminder via Django signals'] },
    { name: 'Recipe Sharing Platform', description: 'A community recipe site with ratings, ingredient search, and user-submitted content moderation.', techStack: ['Django', 'PostgreSQL', 'django-taggit'], difficulty: 'Beginner', resumeImpact: 'Demonstrates many-to-many relationships and search implementation.', estimatedTime: '2 weeks', features: ['Ingredient-based search', 'Star rating aggregation', 'Tag-based filtering', 'Moderation queue for new submissions'] },
    { name: 'Event Booking System', description: 'An event listing and ticket booking platform with seat selection and capacity management.', techStack: ['Django', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Shows handling of business constraints like capacity and double-booking prevention.', estimatedTime: '2 weeks', features: ['Capacity-aware booking with row-level locking', 'QR code ticket generation', 'Booking cancellation with refund window', 'Organizer dashboard'] },
    { name: 'Library Management System', description: 'A library system tracking book inventory, member borrowing, and overdue fine calculation.', techStack: ['Django', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Classic CS domain project that translates well to interview discussion.', estimatedTime: '2 weeks', features: ['Borrow/return workflow with due dates', 'Automated overdue fine calculation', 'Book reservation queue', 'Member borrowing history'] },
    { name: 'Polling and Survey App', description: 'A real-time polling app with live result visualization and anonymous voting protection.', techStack: ['Django', 'Django Channels', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'First exposure to combining Django with WebSockets.', estimatedTime: '1 week', features: ['Live result updates via WebSocket', 'IP/session-based duplicate vote prevention', 'Poll expiry scheduling', 'Result export to CSV'] },
    { name: 'Job Board with Applicant Tracking', description: 'A job board where companies post listings and applicants apply with resume upload and status tracking.', techStack: ['Django', 'DRF', 'PostgreSQL', 'S3'], difficulty: 'Beginner', resumeImpact: 'A relatable domain that signals product thinking, not just CRUD competence.', estimatedTime: '2 weeks', features: ['Resume upload to S3', 'Application status pipeline', 'Employer applicant dashboard', 'Email notification on status change'] },
    { name: 'Expense Splitting App (Splitwise Clone)', description: 'A group expense tracker calculating who owes whom, with simplified debt settlement logic.', techStack: ['Django', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'The debt-simplification algorithm is a genuinely interesting talking point in interviews.', estimatedTime: '2 weeks', features: ['Group expense splitting (equal/custom)', 'Debt simplification graph algorithm', 'Settlement history', 'Multi-currency support'] },
    { name: 'Online Code Snippet Manager', description: 'A Pastebin-style app for saving, tagging, and sharing code snippets with syntax highlighting and expiry.', techStack: ['Django', 'Pygments', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Shows integration of third-party libraries cleanly into a Django app.', estimatedTime: '1 week', features: ['Syntax highlighting via Pygments', 'Expiring shareable links', 'Public/private snippet toggle', 'Fork/copy functionality'] },
    { name: 'Restaurant Table Reservation System', description: 'A reservation system preventing double-booking of tables with time-slot conflict detection.', techStack: ['Django', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Time-slot conflict logic is a recurring backend interview pattern.', estimatedTime: '2 weeks', features: ['Time-slot conflict detection', 'Table capacity matching', 'SMS reminder integration', 'Walk-in vs reservation handling'] },

    { name: 'Multi-Vendor Marketplace', description: 'A marketplace where multiple vendors list products under one platform, with vendor-specific dashboards and commission tracking.', techStack: ['Django', 'DRF', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Multi-vendor architecture is a strong differentiator from single-seller e-commerce clones.', estimatedTime: '4 weeks', features: ['Vendor onboarding and KYC workflow', 'Per-vendor commission calculation', 'Vendor-specific order dashboards', 'Platform-wide search across vendors'] },
    { name: 'Subscription Billing Platform', description: 'A SaaS billing system handling recurring subscriptions, proration, and Razorpay/Stripe webhook reconciliation.', techStack: ['Django', 'Celery', 'Razorpay', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Billing systems are notoriously tricky — building one well is a strong signal.', estimatedTime: '4 weeks', features: ['Proration on plan upgrade/downgrade', 'Webhook-driven subscription state sync', 'Dunning management for failed payments', 'Invoice PDF generation'] },
    { name: 'Real Estate Listing Platform', description: 'A property listing platform with geospatial search, filters, and saved-search email alerts.', techStack: ['Django', 'PostGIS', 'Celery', 'Elasticsearch'], difficulty: 'Intermediate', resumeImpact: 'Geospatial querying with PostGIS is a rare and valued skill.', estimatedTime: '4 weeks', features: ['Radius-based geospatial search', 'Elasticsearch-powered filtering', 'Saved search email digests via Celery Beat', 'Image gallery with lazy loading API'] },
    { name: 'Learning Management System (LMS)', description: 'A course platform with video lessons, quiz engine, progress tracking, and certificate generation.', techStack: ['Django', 'DRF', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Directly relevant if targeting edtech companies — shows domain alignment.', estimatedTime: '4 weeks', features: ['Course progress tracking', 'Auto-graded quiz engine', 'PDF certificate generation on completion', 'Drip content scheduling'] },
    { name: 'Healthcare Appointment System', description: 'A doctor-patient appointment platform with availability slots, reminders, and prescription record storage.', techStack: ['Django', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Healthcare domain projects demonstrate handling of sensitive data correctly.', estimatedTime: '3 weeks', features: ['Doctor availability slot management', 'SMS/email appointment reminders', 'Encrypted prescription history', 'No-show tracking and analytics'] },
    { name: 'Multi-Tenant Project Management Tool', description: 'A Jira-style project management tool with tenant isolation, kanban boards, and activity feeds.', techStack: ['Django', 'DRF', 'PostgreSQL', 'Django Channels'], difficulty: 'Intermediate', resumeImpact: 'Combines multi-tenancy with real-time updates — a strong dual-skill showcase.', estimatedTime: '4 weeks', features: ['Schema-based tenant isolation', 'Drag-and-drop kanban board API', 'Real-time activity feed via WebSocket', 'Role-based project permissions'] },
    { name: 'Content Moderation Pipeline', description: 'An async pipeline that screens user-uploaded content for policy violations using rule-based and ML-assisted checks.', techStack: ['Django', 'Celery', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Trust & safety engineering is an increasingly hired-for specialization.', estimatedTime: '3 weeks', features: ['Rule-based keyword/pattern flagging', 'Celery-based async moderation queue', 'Human review escalation workflow', 'Audit log of all moderation decisions'] },
    { name: 'API Analytics & Usage Metering', description: 'A middleware-based system that tracks per-client API usage, enforces quota tiers, and generates monthly usage reports.', techStack: ['Django', 'DRF', 'Redis', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Usage metering underpins every API-as-a-product business — a high-leverage skill.', estimatedTime: '3 weeks', features: ['Per-endpoint usage tracking middleware', 'Tiered quota enforcement', 'Monthly usage report generation', 'Overage billing webhook trigger'] },
    { name: 'Document Approval Workflow Engine', description: 'A configurable multi-step approval workflow system for documents, supporting parallel and sequential approval chains.', techStack: ['Django', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Workflow engines show systems-design thinking beyond basic CRUD.', estimatedTime: '4 weeks', features: ['Configurable approval chain definitions', 'Parallel and sequential approval support', 'Escalation on SLA breach', 'Full audit trail of approvals/rejections'] },
    { name: 'Customer Support Ticketing System', description: 'A Zendesk-style ticketing system with SLA tracking, agent assignment, and canned response macros.', techStack: ['Django', 'DRF', 'Celery', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'A relatable B2B SaaS domain that shows you can build internal tools, not just consumer apps.', estimatedTime: '4 weeks', features: ['SLA breach detection and alerting', 'Round-robin/load-based agent assignment', 'Canned response macros', 'Customer satisfaction survey on close'] },
    { name: 'Warehouse Order Fulfillment System', description: 'A backend coordinating order picking, packing, and shipping with real-time stock reservation across warehouses.', techStack: ['Django', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Logistics systems demonstrate handling concurrency and stock consistency correctly.', estimatedTime: '4 weeks', features: ['Stock reservation with row-level locking', 'Multi-warehouse fulfillment routing', 'Pick-pack-ship status pipeline', 'Carrier API integration for shipping labels'] },

    { name: 'Banking Core System Simulation', description: 'A simulated core banking system with double-entry ledger accounting, transaction atomicity, and fraud rule engine.', techStack: ['Django', 'PostgreSQL', 'Celery'], difficulty: 'Advanced', resumeImpact: 'Double-entry ledger design is one of the most respected backend portfolio pieces in fintech hiring.', estimatedTime: '6 weeks', features: ['Double-entry ledger with balance invariants', 'ACID-guaranteed transaction processing', 'Rule-based fraud flagging engine', 'End-of-day reconciliation reports'] },
    { name: 'Multi-Region SaaS with Data Residency', description: 'A SaaS backend supporting region-pinned tenant data (India/EU/US) for compliance, with cross-region read replicas.', techStack: ['Django', 'PostgreSQL', 'AWS RDS', 'Celery'], difficulty: 'Advanced', resumeImpact: 'Data residency and compliance architecture is a senior/staff-level differentiator.', estimatedTime: '6 weeks', features: ['Region-pinned tenant database routing', 'Cross-region read replica strategy', 'GDPR-compliant data export/delete', 'Region-aware Celery task routing'] },
    { name: 'High-Volume Notification Fan-Out System', description: 'A system fanning out millions of notifications across email/SMS/push with provider failover and delivery analytics.', techStack: ['Django', 'Celery', 'Redis', 'SQS'], difficulty: 'Advanced', resumeImpact: 'Scale-oriented infrastructure projects are exactly what senior backend interviews probe for.', estimatedTime: '5 weeks', features: ['Batched fan-out via Celery + SQS', 'Provider failover (SendGrid → SES)', 'Delivery analytics dashboard', 'Per-user notification preference engine'] },
    { name: 'Real-Time Bidding/Auction Platform', description: 'An auction platform with real-time bid updates, anti-sniping extension logic, and payment escrow.', techStack: ['Django Channels', 'Redis', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Real-time concurrency control under contention is a genuinely hard, impressive problem to have solved.', estimatedTime: '6 weeks', features: ['Real-time bid broadcasting via WebSocket', 'Anti-sniping auto-extend logic', 'Optimistic locking on bid placement', 'Escrow-style payment hold/release'] },
    { name: 'Multi-Currency Accounting Platform', description: 'An accounting backend handling multi-currency transactions, real-time exchange rate conversion, and financial reporting.', techStack: ['Django', 'PostgreSQL', 'Celery'], difficulty: 'Advanced', resumeImpact: 'Financial correctness under currency conversion is a precision-engineering showcase.', estimatedTime: '5 weeks', features: ['Real-time exchange rate ingestion', 'Multi-currency ledger normalization', 'P&L and balance sheet report generation', 'Audit-safe rounding strategy'] },
    { name: 'Distributed Cache Invalidation System', description: 'A Django-integrated system that propagates cache invalidation events across multiple app instances via Redis pub/sub.', techStack: ['Django', 'Redis', 'Celery'], difficulty: 'Advanced', resumeImpact: 'Cache invalidation is famously one of the two hard problems in computer science — solving it well stands out.', estimatedTime: '4 weeks', features: ['Redis pub/sub-based invalidation broadcast', 'Tag-based cache key grouping', 'Stale-while-revalidate strategy', 'Invalidation audit logging'] },
    { name: 'Compliance Audit Trail System', description: 'A tamper-evident audit logging system tracking every data mutation with cryptographic hash chaining.', techStack: ['Django', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Compliance-grade audit systems are required at every fintech and healthcare company — niche and valuable.', estimatedTime: '4 weeks', features: ['Hash-chained immutable audit entries', 'Field-level change tracking', 'Tamper detection verification job', 'Exportable compliance reports'] },
    { name: 'Internal Feature Flag & Experimentation Platform', description: 'A LaunchDarkly-style internal feature flag service with percentage rollouts and A/B experiment tracking.', techStack: ['Django', 'DRF', 'Redis', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Building internal platform tools is exactly what platform/infra teams hire for at scale-ups.', estimatedTime: '5 weeks', features: ['Percentage-based gradual rollout', 'User segment targeting rules', 'A/B experiment metric tracking', 'SDK client library for flag evaluation'] },
  ],
  implementationGuides: [
    {
      projectName: 'Multi-Vendor Marketplace',
      folderStructure: `marketplace/
├── config/
│   └── settings/
│       ├── base.py
│       ├── dev.py
│       └── prod.py
├── apps/
│   ├── vendors/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   └── views.py
│   ├── products/
│   │   ├── models.py
│   │   └── views.py
│   ├── orders/
│   │   ├── models.py
│   │   ├── services.py
│   │   └── tasks.py
│   └── commissions/
│       ├── models.py
│       └── services.py
├── tests/
├── requirements/
│   ├── base.txt
│   └── dev.txt
└── docker-compose.yml`,
      keyFiles: [
        { file: 'apps/vendors/models.py', purpose: 'Vendor model with KYC status, commission rate, and payout bank details (encrypted fields).' },
        { file: 'apps/orders/services.py', purpose: 'Order splitting logic — a single cart can produce multiple sub-orders, one per vendor.' },
        { file: 'apps/commissions/services.py', purpose: 'Commission calculation engine applied at order completion, feeding the vendor payout ledger.' },
      ],
      steps: [
        'Model Vendor, Product (FK to vendor), Order, and OrderItem (FK to vendor for split fulfillment).',
        'Implement cart-to-multi-order splitting: one customer cart becomes N vendor-scoped orders.',
        'Build vendor onboarding flow with KYC document upload and admin approval state machine.',
        'Implement commission calculation triggered on order delivery confirmation via Celery task.',
        'Build vendor-scoped DRF ViewSets using a custom permission class restricting query scope to request.user.vendor.',
        'Add platform-wide product search using PostgreSQL full-text search across all vendors.',
        'Write a payout batch job (Celery Beat, weekly) aggregating vendor commission balances.',
        'Test the full flow: multi-vendor cart → split orders → delivery → commission → payout.',
      ],
      deploymentNotes: 'Use separate Celery queues for order-processing vs payout-batch tasks to isolate failure domains. Deploy with Gunicorn + Nginx on EC2, RDS PostgreSQL, and ElastiCache Redis as the Celery broker.',
    },
    {
      projectName: 'Banking Core System Simulation',
      folderStructure: `core-banking/
├── apps/
│   ├── ledger/
│   │   ├── models.py
│   │   ├── services.py
│   │   └── invariants.py
│   ├── accounts/
│   │   ├── models.py
│   │   └── views.py
│   ├── transactions/
│   │   ├── models.py
│   │   ├── services.py
│   │   └── tasks.py
│   └── fraud/
│       ├── rules.py
│       └── engine.py
├── tests/
│   ├── test_ledger_invariants.py
│   └── test_transaction_atomicity.py
└── docker-compose.yml`,
      keyFiles: [
        { file: 'apps/ledger/invariants.py', purpose: 'Database-level CHECK constraints and application-level assertions ensuring debit/credit entries always balance to zero.' },
        { file: 'apps/transactions/services.py', purpose: 'Transaction service wrapping every transfer in select_for_update() row locks to prevent race conditions.' },
        { file: 'apps/fraud/engine.py', purpose: 'Rule evaluation engine checking velocity, amount thresholds, and pattern anomalies on every transaction.' },
      ],
      steps: [
        'Design the ledger schema: every transaction creates exactly two LedgerEntry rows (debit + credit) that must net to zero.',
        'Add a PostgreSQL CHECK constraint and a Django model-level clean() validating the double-entry invariant.',
        'Implement the transfer service using select_for_update() on both account rows, ordered by account ID to prevent deadlocks.',
        'Build the fraud rule engine: velocity check (transactions per minute), amount threshold, and geo-anomaly rule.',
        'Wrap the entire transfer + fraud check in a single atomic transaction using transaction.atomic().',
        'Implement an end-of-day reconciliation Celery task verifying total system balance equals zero.',
        'Write a concurrency test simulating 100 simultaneous transfers between the same two accounts to verify no balance corruption.',
      ],
      deploymentNotes: 'This project is for portfolio demonstration only — do not expose publicly without proper security review. Deploy in an isolated environment, document the double-entry invariant prominently in the README, as this is the centerpiece interview talking point.',
    },
  ],
  resumeImpact: [
    'Multi-tenant and billing projects directly map to the SaaS architecture patterns Indian startups hire for.',
    'The banking ledger project is a standout differentiator — very few candidates build correct double-entry systems.',
    'Demonstrates Django beyond CRUD: Celery orchestration, WebSockets, and complex permission systems.',
    'Shows you can reason about data consistency under concurrency — a top interview filter at series-B+ startups.',
  ],
  interviewTalkingPoints: [
    'For any project using select_for_update(), be ready to explain deadlock prevention via consistent lock ordering.',
    'For the multi-tenant project, explain the trade-off between schema-per-tenant vs shared-schema-with-tenant-id.',
    'For Celery-based projects, explain idempotency: what happens if a task runs twice due to a retry?',
    'Always be ready to discuss what you would change for 100x scale — interviewers probe this on every project.',
  ],
  faqs: [
    { question: 'Are these Django projects different from the Python project list?', answer: 'Yes — this list is Django-specific, leaning into framework features like the ORM, admin customization, Django Channels, and DRF patterns. The general Python projects list includes FastAPI and framework-agnostic projects. Build from both lists for a well-rounded backend portfolio.' },
    { question: 'Is Django still relevant for backend roles in 2026?', answer: 'Yes, strongly. Django remains the most-hired-for Python web framework in Indian product companies, especially at startups needing to move fast with a built-in admin panel, ORM, and auth system. FastAPI is growing for greenfield microservices, but Django expertise is rarely a liability and often a requirement.' },
    { question: 'How do I demonstrate ORM optimization skills through these projects?', answer: 'Use Django Debug Toolbar locally to catch N+1 queries, then fix them with select_related (for ForeignKey) and prefetch_related (for reverse FK/M2M). Document a before/after query count in your README — this is one of the most concrete, interview-ready proof points you can show.' },
    { question: 'Should I write tests for every project?', answer: 'At minimum, write tests for the intermediate and advanced projects — these are the ones you will discuss in interviews. Use pytest-django with factory_boy for test data. Aim for tests covering the happy path, a validation failure, and one concurrency/edge case per critical feature.' },
    { question: 'What is the hardest project on this list and is it worth attempting?', answer: 'The Banking Core System Simulation is the hardest — it requires correctly reasoning about transaction atomicity and concurrent access. It is absolutely worth attempting if you are targeting fintech roles (Razorpay, Zerodha, CRED, Groww) since it directly demonstrates the exact skill those companies screen for.' },
    { question: 'How do I handle multi-tenancy correctly in Django?', answer: 'Three common approaches: shared schema with a tenant_id column (simplest, used in the Multi-Tenant Project Management Tool guide), schema-per-tenant (stronger isolation, used in the Multi-Vendor Marketplace), and database-per-tenant (strongest isolation, highest operational cost). Pick shared-schema-with-tenant_id for most portfolio projects — it is simpler to implement correctly and is what most companies actually use at moderate scale.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/python-developer-roadmap-2026', 'Python Developer Roadmap 2026', 'Django REST Framework is covered in depth in Month 5–6 of this roadmap.'),
    interviewLink('/resources/interview-questions/django-developer', 'Django Developer Interview Questions', 'ORM, DRF, and Celery-focused interview preparation.'),
    tutorialLink('/resources/tutorials/django', 'Django Tutorial', 'Step-by-step Django fundamentals if you need a refresher.'),
    courseLink('/courses/python', 'Python Developer Course', 'Structured Django and FastAPI training with mentorship.'),
    { title: 'Python Projects', href: '/resources/projects/python-projects', description: 'Framework-agnostic Python projects including FastAPI-based systems.', category: 'Projects', icon: '🛠️' },
    { title: 'Full Stack Projects', href: '/resources/projects/full-stack-projects', description: 'Pair these Django backends with a React frontend.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ Django Projects for Your Portfolio (2026) — Beginner to Advanced',
    description: 'Build 30+ real Django projects: multi-vendor marketplaces, subscription billing, banking ledgers, and SaaS platforms. Full implementation guides for 2026 hiring.',
    keywords: ['django projects 2026', 'django project ideas resume', 'django rest framework projects', 'django saas project', 'django portfolio projects india'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 3. REACT PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const reactProjects: ProjectCategory = {
  slug: 'react-projects',
  title: 'React Projects',
  description:
    'React and Next.js 15 projects designed to showcase the exact skills frontend interviewers test in 2026: hooks composition, server components, performance optimization, and accessible UI design.',
  icon: ICONS.react,
  color: '#06B6D4',
  difficulty: 'All Levels',
  techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Query'],
  readTime: '17 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'Kanban Board with Drag and Drop', description: 'A Trello-style kanban board with drag-and-drop cards, local storage persistence, and keyboard accessibility.', techStack: ['React', 'TypeScript', '@dnd-kit'], difficulty: 'Beginner', resumeImpact: 'Demonstrates state management complexity beyond simple forms.', estimatedTime: '1 week', features: ['Drag-and-drop between columns', 'Keyboard-accessible reordering', 'LocalStorage persistence', 'Card labels and due dates'] },
    { name: 'Weather Dashboard', description: 'A weather app consuming a public API with geolocation, search, and a 5-day forecast view.', techStack: ['React', 'TypeScript', 'React Query'], difficulty: 'Beginner', resumeImpact: 'Covers async data fetching, loading states, and error boundaries.', estimatedTime: '5 days', features: ['Geolocation auto-detect', 'City search with debounce', 'Skeleton loading states', '5-day forecast cards'] },
    { name: 'Markdown Note-Taking App', description: 'A notes app with live Markdown preview, folder organization, and full-text search.', techStack: ['React', 'TypeScript', 'react-markdown'], difficulty: 'Beginner', resumeImpact: 'Shows controlled component patterns and real-time preview rendering.', estimatedTime: '1 week', features: ['Live Markdown preview pane', 'Folder/tag organization', 'Full-text client-side search', 'Export to PDF'] },
    { name: 'E-Commerce Product Filter UI', description: 'A product listing page with multi-faceted filtering, sorting, and URL-synced filter state.', techStack: ['React', 'TypeScript', 'React Router'], difficulty: 'Beginner', resumeImpact: 'URL-synced state is a commonly tested real-world pattern.', estimatedTime: '1 week', features: ['Multi-facet filters (price, category, rating)', 'URL query param sync', 'Debounced price range slider', 'Sort by relevance/price/rating'] },
    { name: 'Pomodoro Timer with Stats', description: 'A focus timer tracking work sessions with daily/weekly statistics and browser notifications.', techStack: ['React', 'TypeScript'], difficulty: 'Beginner', resumeImpact: 'Tests useEffect cleanup and browser API integration.', estimatedTime: '5 days', features: ['Customizable work/break intervals', 'Browser notification on session end', 'Daily/weekly stats chart', 'Session history log'] },
    { name: 'Recipe Finder with Favorites', description: 'A recipe search app with ingredient-based filtering, favoriting, and shareable recipe links.', techStack: ['React', 'TypeScript', 'React Query'], difficulty: 'Beginner', resumeImpact: 'Demonstrates clean data-fetching and optimistic UI updates.', estimatedTime: '1 week', features: ['Ingredient-based search', 'Favorite with optimistic UI', 'Shareable recipe URLs', 'Print-friendly recipe view'] },
    { name: 'GitHub Profile Explorer', description: 'A tool to search GitHub users and visualize their repositories, languages, and contribution stats.', techStack: ['React', 'TypeScript', 'Recharts'], difficulty: 'Beginner', resumeImpact: 'Shows chart integration and third-party API consumption.', estimatedTime: '1 week', features: ['User search with debounce', 'Language breakdown pie chart', 'Repository sort/filter', 'Rate-limit aware request handling'] },
    { name: 'Quiz App with Timer', description: 'A timed multiple-choice quiz with category selection, scoring, and a results breakdown screen.', techStack: ['React', 'TypeScript'], difficulty: 'Beginner', resumeImpact: 'Reinforces component composition and timer-driven state updates.', estimatedTime: '5 days', features: ['Per-question countdown timer', 'Category and difficulty selection', 'Results breakdown by category', 'Retry incorrect questions mode'] },
    { name: 'Expense Tracker with Charts', description: 'A personal finance tracker with category breakdown charts and monthly trend visualization.', techStack: ['React', 'TypeScript', 'Recharts', 'Zustand'], difficulty: 'Beginner', resumeImpact: 'Combines state management with data visualization — a common pairing in interviews.', estimatedTime: '1 week', features: ['Category-wise pie chart', 'Monthly trend line chart', 'CSV export', 'Budget threshold alerts'] },
    { name: 'Movie Search with Watchlist', description: 'A movie discovery app with search, details modal, and a persisted personal watchlist.', techStack: ['React', 'TypeScript', 'React Query'], difficulty: 'Beginner', resumeImpact: 'Tests modal state management and list mutation patterns.', estimatedTime: '1 week', features: ['Debounced search', 'Modal detail view', 'Watchlist add/remove with persistence', 'Genre-based filtering'] },

    { name: 'Real-Time Collaborative Whiteboard', description: 'A multi-user whiteboard with live cursor tracking and synchronized drawing via WebSockets.', techStack: ['React', 'TypeScript', 'Socket.io', 'Canvas API'], difficulty: 'Intermediate', resumeImpact: 'Real-time collaboration is one of the highest-signal frontend portfolio pieces.', estimatedTime: '3 weeks', features: ['Real-time synchronized drawing', 'Live cursor position broadcasting', 'Undo/redo with shared history', 'Room-based session isolation'] },
    { name: 'Next.js 15 Job Board with SSR', description: 'A job board using the Next.js App Router with server-rendered listings, server actions, and authentication.', techStack: ['Next.js 15', 'TypeScript', 'Auth.js', 'Tailwind'], difficulty: 'Intermediate', resumeImpact: 'Demonstrates App Router fluency — the current industry standard pattern.', estimatedTime: '3 weeks', features: ['Server-rendered job listings (SEO-friendly)', 'Server Actions for applications', 'Auth.js authentication', 'ISR for listing freshness'] },
    { name: 'Component Library with Storybook', description: 'A reusable, accessible component library built with Radix UI primitives, documented in Storybook, and published as an npm package.', techStack: ['React', 'TypeScript', 'Radix UI', 'Storybook'], difficulty: 'Intermediate', resumeImpact: 'Building reusable libraries proves design-system thinking — valued at scale-ups.', estimatedTime: '3 weeks', features: ['15+ accessible components', 'Storybook documentation with controls', 'Theming via CSS variables', 'npm-publishable package config'] },
    { name: 'E-Commerce Cart with Optimistic Updates', description: 'A shopping cart implementing optimistic UI updates, undo-on-error, and React Query mutation caching.', techStack: ['React', 'TypeScript', 'React Query', 'Zustand'], difficulty: 'Intermediate', resumeImpact: 'Optimistic updates with rollback is a frequently asked senior-frontend pattern.', estimatedTime: '2 weeks', features: ['Optimistic add/remove with rollback on error', 'Quantity debounced sync', 'Cart persistence across sessions', 'Stock-aware add-to-cart validation'] },
    { name: 'Data Table with Virtual Scrolling', description: 'A high-performance data table rendering 100,000+ rows using virtualization, sorting, and column filters.', techStack: ['React', 'TypeScript', 'TanStack Table', 'TanStack Virtual'], difficulty: 'Intermediate', resumeImpact: 'Virtualization for large datasets is a top frontend performance interview topic.', estimatedTime: '2 weeks', features: ['Row virtualization for 100k+ rows', 'Multi-column sort and filter', 'Column resize and reorder', 'CSV export of filtered view'] },
    { name: 'Multi-Step Form Wizard with Validation', description: 'A complex multi-step onboarding form with cross-step validation, progress persistence, and conditional fields.', techStack: ['React', 'TypeScript', 'React Hook Form', 'Zod'], difficulty: 'Intermediate', resumeImpact: 'Complex form orchestration is one of the most commonly underestimated frontend skills.', estimatedTime: '2 weeks', features: ['Cross-step Zod validation schema', 'Progress saved to localStorage', 'Conditional field rendering', 'Step navigation with validation gating'] },
    { name: 'Dashboard with Real-Time Charts', description: 'An analytics dashboard with live-updating charts via WebSocket, date range filtering, and exportable reports.', techStack: ['React', 'TypeScript', 'Recharts', 'Socket.io'], difficulty: 'Intermediate', resumeImpact: 'Dashboard UIs with live data are extremely common in B2B SaaS interview assignments.', estimatedTime: '2 weeks', features: ['WebSocket-driven live chart updates', 'Date range and granularity filters', 'PDF report export', 'Responsive multi-chart grid layout'] },
    { name: 'Progressive Web App with Offline Support', description: 'A PWA-enabled task manager with full offline functionality, background sync, and installability.', techStack: ['React', 'TypeScript', 'Service Workers', 'IndexedDB'], difficulty: 'Intermediate', resumeImpact: 'PWA and offline-first architecture knowledge differentiates senior frontend candidates.', estimatedTime: '3 weeks', features: ['Service Worker caching strategy', 'IndexedDB offline data store', 'Background sync on reconnect', 'Install prompt and app manifest'] },
    { name: 'Video Conferencing UI (WebRTC)', description: 'A video call interface using WebRTC peer connections with screen sharing and chat sidebar.', techStack: ['React', 'TypeScript', 'WebRTC', 'Socket.io'], difficulty: 'Intermediate', resumeImpact: 'WebRTC is a genuinely advanced browser API — very few candidates have hands-on experience.', estimatedTime: '4 weeks', features: ['Peer-to-peer video/audio via WebRTC', 'Screen sharing toggle', 'In-call text chat sidebar', 'Connection quality indicator'] },
    { name: 'Headless CMS-Powered Blog with Next.js', description: 'A statically generated blog pulling content from a headless CMS, with ISR, OG image generation, and full SEO.', techStack: ['Next.js 15', 'TypeScript', 'Tailwind'], difficulty: 'Intermediate', resumeImpact: 'Modern JAMstack architecture with ISR is exactly what content-heavy companies hire for.', estimatedTime: '2 weeks', features: ['ISR with on-demand revalidation', 'Dynamic OG image generation', 'MDX content rendering', 'Full sitemap and structured data'] },
    { name: 'Micro-Frontend Shell Application', description: 'A shell application loading independently deployed micro-frontends via Module Federation.', techStack: ['React', 'TypeScript', 'Webpack Module Federation'], difficulty: 'Intermediate', resumeImpact: 'Micro-frontend architecture knowledge is rare and highly valued at large product orgs.', estimatedTime: '3 weeks', features: ['Module Federation remote loading', 'Shared dependency management', 'Independent deployment per micro-app', 'Shell-level routing and auth context'] },

    { name: 'Real-Time Code Editor with Collaboration', description: 'A browser-based code editor (Monaco) with real-time multi-cursor collaborative editing, similar to VS Code Live Share.', techStack: ['React', 'TypeScript', 'Monaco Editor', 'Yjs', 'WebSockets'], difficulty: 'Advanced', resumeImpact: 'CRDT-based collaborative editing is an exceptional, rarely-built portfolio centerpiece.', estimatedTime: '6 weeks', features: ['CRDT-based conflict-free collaborative editing (Yjs)', 'Multi-cursor and selection presence', 'Syntax highlighting for 10+ languages', 'Session recording and playback'] },
    { name: 'Design Tool with Canvas Engine (Figma-lite)', description: 'A vector design tool with shape manipulation, layers panel, and a custom rendering engine on HTML5 Canvas.', techStack: ['React', 'TypeScript', 'Canvas API', 'Zustand'], difficulty: 'Advanced', resumeImpact: 'Building a custom rendering engine demonstrates deep graphics and performance understanding.', estimatedTime: '8 weeks', features: ['Custom shape rendering engine', 'Layer panel with z-index management', 'Multi-select and group transform', 'Undo/redo command pattern history'] },
    { name: 'Self-Hosted Analytics Platform Frontend', description: 'A Google Analytics-style dashboard ingesting custom event data with real-time visitor tracking and funnel visualization.', techStack: ['Next.js 15', 'TypeScript', 'Recharts', 'WebSockets'], difficulty: 'Advanced', resumeImpact: 'Analytics product UIs combine real-time data, complex visualization, and performance at scale.', estimatedTime: '6 weeks', features: ['Real-time visitor count via WebSocket', 'Funnel and retention visualization', 'Custom event query builder UI', 'Date comparison view (this week vs last)'] },
    { name: 'No-Code Form Builder', description: 'A drag-and-drop form builder generating dynamic, schema-driven forms with conditional logic and a public submission API.', techStack: ['React', 'TypeScript', '@dnd-kit', 'React Hook Form'], difficulty: 'Advanced', resumeImpact: 'Building tools that generate other applications shows meta-level engineering capability.', estimatedTime: '6 weeks', features: ['Drag-and-drop field builder canvas', 'Conditional logic rule engine', 'Schema-driven dynamic form rendering', 'Public form submission with validation'] },
    { name: 'Browser-Based Video Editor', description: 'A timeline-based video editing tool running entirely client-side using WebCodecs and Canvas compositing.', techStack: ['React', 'TypeScript', 'WebCodecs API', 'Canvas'], difficulty: 'Advanced', resumeImpact: 'WebCodecs is a cutting-edge browser API — extremely few engineers have shipped with it.', estimatedTime: '8 weeks', features: ['Multi-track timeline editing', 'Client-side video trim/merge via WebCodecs', 'Text overlay compositing', 'Export to MP4 in-browser'] },
    { name: 'Real-Time Multiplayer Game (Canvas)', description: 'A simple multiplayer browser game with server-authoritative state, client-side prediction, and lag compensation.', techStack: ['React', 'TypeScript', 'Canvas', 'WebSockets'], difficulty: 'Advanced', resumeImpact: 'Game networking concepts (prediction, reconciliation) translate directly to high-performance real-time UI roles.', estimatedTime: '6 weeks', features: ['Client-side prediction with server reconciliation', 'Interpolated remote player movement', 'Lag compensation for hit detection', 'Spectator mode'] },
    { name: 'Enterprise Design System with Theming Engine', description: 'A full design system with a token-based theming engine supporting runtime theme switching across 30+ components.', techStack: ['React', 'TypeScript', 'CSS Variables', 'Storybook'], difficulty: 'Advanced', resumeImpact: 'Design systems at this depth are typically owned by staff-level frontend engineers.', estimatedTime: '8 weeks', features: ['Token-based theming (colors, spacing, typography)', 'Runtime theme switching with no reload', '30+ documented accessible components', 'Visual regression testing via Chromatic'] },
    { name: 'AI-Powered Code Review Assistant UI', description: 'A frontend that streams LLM-generated code review comments inline on a diff viewer, with accept/reject actions per suggestion.', techStack: ['Next.js 15', 'TypeScript', 'Server-Sent Events'], difficulty: 'Advanced', resumeImpact: 'Combines modern AI streaming UX with complex diff-rendering — directly relevant to 2026 hiring trends.', estimatedTime: '5 weeks', features: ['SSE-based streaming AI suggestions', 'Inline diff annotation UI', 'Accept/reject/edit suggestion flow', 'Syntax-aware diff rendering'] },
  ],
  implementationGuides: [
    {
      projectName: 'Real-Time Collaborative Whiteboard',
      folderStructure: `collab-whiteboard/
├── app/
│   ├── room/[roomId]/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── Canvas.tsx
│   ├── Toolbar.tsx
│   └── CursorLayer.tsx
├── hooks/
│   ├── useSocket.ts
│   ├── useDrawing.ts
│   └── useCursors.ts
├── server/
│   └── socket-server.ts
├── lib/
│   └── canvas-utils.ts
└── types/
    └── drawing.ts`,
      keyFiles: [
        { file: 'hooks/useDrawing.ts', purpose: 'Manages local drawing state and emits stroke events over the socket connection, batched per animation frame.' },
        { file: 'hooks/useCursors.ts', purpose: 'Throttled cursor position broadcasting and rendering of remote peer cursors with name labels.' },
        { file: 'server/socket-server.ts', purpose: 'Standalone Socket.io server handling room joins, stroke relay, and cursor position relay.' },
      ],
      steps: [
        'Set up a standalone Socket.io server (separate from Next.js) handling room-based connections.',
        'Build the Canvas component with pointer event handlers capturing stroke points.',
        'Implement requestAnimationFrame-batched stroke emission to avoid flooding the socket.',
        'Add remote stroke rendering: incoming socket events draw onto the local canvas in real time.',
        'Implement cursor broadcasting throttled to 30fps with name/color per connected user.',
        'Build an undo/redo stack that is synchronized — broadcast undo events, not just local state changes.',
        'Add room creation and joining via shareable URL with a generated room ID.',
        'Test with multiple browser tabs simultaneously to verify sync correctness and no missed strokes.',
      ],
      deploymentNotes: 'Deploy the Next.js frontend to Vercel and the Socket.io server separately to a platform supporting persistent WebSocket connections (Railway, Fly.io, or an EC2 instance). Configure CORS and WebSocket upgrade headers correctly on the reverse proxy.',
    },
    {
      projectName: 'Data Table with Virtual Scrolling',
      folderStructure: `virtual-data-table/
├── app/
│   └── table/
│       └── page.tsx
├── components/
│   ├── DataTable.tsx
│   ├── TableHeader.tsx
│   └── VirtualRow.tsx
├── hooks/
│   └── useTableData.ts
├── lib/
│   └── csv-export.ts
└── types/
    └── table.ts`,
      keyFiles: [
        { file: 'components/DataTable.tsx', purpose: 'Composes TanStack Table for column/sort/filter logic with TanStack Virtual for row windowing.' },
        { file: 'components/VirtualRow.tsx', purpose: 'Memoized row renderer using absolute positioning based on virtualizer-calculated offsets.' },
        { file: 'hooks/useTableData.ts', purpose: 'Manages sort/filter state and derives the filtered dataset passed into the virtualizer.' },
      ],
      steps: [
        'Generate or fetch a 100,000-row dataset for realistic performance testing.',
        'Set up TanStack Table with column definitions, sorting, and global filter state.',
        'Integrate TanStack Virtual using the table\'s row model, rendering only visible rows.',
        'Memoize row components with React.memo to prevent unnecessary re-renders during scroll.',
        'Implement column resize and reorder using TanStack Table\'s column sizing API.',
        'Add a CSV export function operating on the currently filtered/sorted row model, not the raw dataset.',
        'Profile with React DevTools to confirm scroll performance stays above 50fps with all 100k rows loaded.',
      ],
      deploymentNotes: 'Deploy as a static export or to Vercel. No backend required for the demo — load data from a static JSON file or generate it client-side with a seeded random generator for reproducible demos.',
    },
  ],
  resumeImpact: [
    'WebSocket and real-time projects (whiteboard, video chat, multiplayer) are the strongest differentiators on a frontend resume.',
    'Virtualization and performance-focused projects directly answer the "how do you handle large datasets" interview question.',
    'Next.js 15 App Router projects prove you are current with the framework version companies are migrating to in 2026.',
    'Design system and component library projects show you think beyond features — toward maintainability and reuse.',
  ],
  interviewTalkingPoints: [
    'For any virtualized list project, be ready to explain why virtualization matters and the trade-offs vs pagination.',
    'For the collaborative whiteboard, explain conflict resolution — what happens when two users draw simultaneously?',
    'For Next.js projects, be ready to justify Server vs Client Component boundaries you chose and why.',
    'Always mention what Lighthouse score you achieved and what specific optimization got you there.',
  ],
  faqs: [
    { question: 'Should I use plain React or Next.js for these projects?', answer: 'Use Next.js 15 for anything that benefits from SSR/SSG and SEO (job boards, blogs, dashboards meant to be indexed). Use plain React + Vite for tools and apps that are purely client-side interactive (whiteboard, design tool, games) where SSR adds no value. Building strong examples in both shows range.' },
    { question: 'How important is TypeScript for these projects?', answer: 'Mandatory. Every project on this list should be built in TypeScript — it is the 2026 industry default and interviewers specifically look for type-safe code in take-home assignments and portfolio reviews. Use strict mode and avoid `any` types.' },
    { question: 'Which project best demonstrates senior-level frontend skill?', answer: 'The Real-Time Code Editor with Collaboration (CRDT-based) and the Design Tool with Canvas Engine are the strongest senior-level signals — they require understanding of conflict-free replicated data types and custom rendering pipelines respectively, topics most candidates have never touched.' },
    { question: 'Do I need a backend for these React projects?', answer: 'Some do (whiteboard, video chat, multiplayer game, code editor collaboration all need a WebSocket server). Others are purely client-side (Pomodoro timer, kanban board, markdown notes). For projects needing persistence without building a full backend, use Supabase or Firebase to keep focus on the frontend implementation.' },
    { question: 'How do I show performance optimization skills convincingly?', answer: 'Use React DevTools Profiler to identify and document wasted renders before/after a fix. For data-heavy projects, show Lighthouse scores and bundle size before/after code splitting. Quantified before/after numbers in your README are far more convincing than claiming "optimized for performance."' },
    { question: 'What accessibility standard should these projects meet?', answer: 'Target WCAG 2.1 AA. Use Radix UI or shadcn/ui primitives, which are accessible by default, for any interactive components (modals, dropdowns, tabs). Run axe DevTools on every project before considering it portfolio-ready — zero violations is achievable and expected at this level.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/frontend-roadmap-2026', 'Frontend Developer Roadmap 2026', 'The structured learning path these projects are designed to complement.'),
    interviewLink('/resources/interview-questions/react-developer', '120+ React Interview Questions', 'Practice questions covering hooks, performance, and the exact patterns used in these projects.'),
    tutorialLink('/resources/tutorials/react', 'React Tutorial', 'Hooks, patterns, and Next.js App Router fundamentals.'),
    courseLink('/courses/react', 'React Developer Course', 'Structured React and Next.js training with project mentorship.'),
    { title: 'Full Stack Projects', href: '/resources/projects/full-stack-projects', description: 'Pair these React frontends with a complete backend.', category: 'Projects', icon: '🛠️' },
    { title: 'JavaScript Tutorial', href: '/resources/tutorials/javascript', description: 'Strengthen the JavaScript fundamentals underneath every React project.', category: 'Tutorial', icon: '📚' },
  ],
  seo: {
    title: '30+ React & Next.js Projects for Your Portfolio (2026)',
    description: 'Build 30+ real React and Next.js 15 projects: collaborative tools, design systems, real-time apps, and performance-optimized UIs. Full implementation guides for 2026 hiring.',
    keywords: ['react projects 2026', 'nextjs project ideas resume', 'react portfolio projects india', 'react interview projects', 'frontend developer projects 2026'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 4. FULL STACK PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const fullStackProjects: ProjectCategory = {
  slug: 'full-stack-projects',
  title: 'Full Stack Projects',
  description:
    'Complete end-to-end applications combining React/Next.js frontends with Django or Node.js backends, PostgreSQL, and AWS deployment — the exact shape of projects full stack interviewers expect to see live and working.',
  icon: ICONS.fullstack,
  color: '#2563EB',
  difficulty: 'All Levels',
  techStack: ['Next.js 15', 'Django/Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  readTime: '18 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'Personal Finance Tracker', description: 'A full stack expense tracker with bank-statement CSV import, category auto-tagging, and a budgeting dashboard.', techStack: ['Next.js', 'Django REST', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'A complete CRUD + auth + dashboard app proves end-to-end capability.', estimatedTime: '2 weeks', features: ['CSV bank statement import and parsing', 'Rule-based category auto-tagging', 'Monthly budget dashboard', 'JWT-authenticated multi-device sync'] },
    { name: 'Recipe Sharing Social App', description: 'A full stack app where users post recipes, follow each other, and get a personalized feed.', techStack: ['Next.js', 'Django REST', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Covers social graph modeling — a recurring full stack interview theme.', estimatedTime: '3 weeks', features: ['Follow/unfollow social graph', 'Personalized feed algorithm', 'Recipe image upload to S3', 'Comment and like system'] },
    { name: 'Habit Tracker with Streaks', description: 'A habit-building app with daily check-ins, streak calculation, and progress visualization.', techStack: ['Next.js', 'FastAPI', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Streak logic and date-based aggregation is a clean, well-scoped full stack showcase.', estimatedTime: '2 weeks', features: ['Streak calculation with timezone awareness', 'Calendar heatmap visualization', 'Reminder notifications', 'Habit category grouping'] },
    { name: 'Polling Application with Live Results', description: 'A full stack poll creator with live-updating results visible to all viewers via WebSocket.', techStack: ['Next.js', 'Django Channels', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Pairs a simple domain with real-time tech for an outsized portfolio impact.', estimatedTime: '2 weeks', features: ['Real-time result updates via WebSocket', 'Anonymous voting with duplicate prevention', 'Poll embed widget', 'Result export as image/CSV'] },
    { name: 'Job Application Tracker', description: 'A personal CRM for job seekers tracking applications, interview stages, and follow-up reminders.', techStack: ['Next.js', 'FastAPI', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'A relatable, well-understood domain that lets reviewers focus purely on your code quality.', estimatedTime: '2 weeks', features: ['Kanban-style application pipeline', 'Interview date reminders', 'Resume version attachment per application', 'Analytics: response rate by source'] },
    { name: 'Bookmark Manager with Tagging', description: 'A full stack bookmarking tool with automatic metadata extraction, tagging, and full-text search.', techStack: ['Next.js', 'FastAPI', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Metadata scraping plus search demonstrates handling of unstructured external data.', estimatedTime: '2 weeks', features: ['Auto-fetch title/favicon/description on save', 'Tag-based organization', 'Full-text search across bookmarks', 'Browser extension for quick-save'] },
    { name: 'Event RSVP and Invitation System', description: 'A full stack event planning tool with invitations, RSVP tracking, and calendar export.', techStack: ['Next.js', 'Django REST', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'Covers email integration and ICS calendar file generation — practical, demonstrable skills.', estimatedTime: '2 weeks', features: ['Email invitation sending', 'RSVP status tracking dashboard', '.ics calendar file export', 'Guest list with plus-one handling'] },
    { name: 'Code Snippet Sharing Platform', description: 'A full stack Pastebin-style tool with syntax highlighting, expiring links, and view analytics.', techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis'], difficulty: 'Beginner', resumeImpact: 'A focused, well-bounded project that is easy to demo confidently in an interview.', estimatedTime: '2 weeks', features: ['Syntax-highlighted code display', 'Redis-cached expiring shareable links', 'View count analytics', 'Fork/duplicate snippet'] },
    { name: 'Restaurant Discovery and Review App', description: 'A full stack app with location-based restaurant discovery, reviews, and photo uploads.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'PostGIS'], difficulty: 'Beginner', resumeImpact: 'Geolocation-based discovery is a common pattern across many consumer apps.', estimatedTime: '3 weeks', features: ['Radius-based restaurant search', 'Photo review uploads to S3', 'Rating aggregation', 'Map view with clustered markers'] },
    { name: 'Simple CRM for Freelancers', description: 'A client and invoice management tool for freelancers with project tracking and PDF invoice generation.', techStack: ['Next.js', 'Django REST', 'PostgreSQL'], difficulty: 'Beginner', resumeImpact: 'A genuinely useful tool you would actually use yourself — strong narrative for interviews.', estimatedTime: '3 weeks', features: ['Client and project management', 'Time tracking per project', 'PDF invoice generation', 'Payment status tracking'] },

    { name: 'Multi-Tenant SaaS Starter Kit', description: 'A production-shaped SaaS boilerplate with workspace-based multi-tenancy, Stripe billing, and team invitations.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Stripe'], difficulty: 'Intermediate', resumeImpact: 'A SaaS starter is the single most reusable, demonstrable project type for startup interviews.', estimatedTime: '5 weeks', features: ['Workspace-scoped data isolation', 'Stripe subscription billing integration', 'Team member invitation flow', 'Role-based access control (owner/admin/member)'] },
    { name: 'Real-Time Customer Support Chat Widget', description: 'An embeddable live chat widget with an agent dashboard, conversation routing, and canned responses.', techStack: ['Next.js', 'Django Channels', 'PostgreSQL', 'Redis'], difficulty: 'Intermediate', resumeImpact: 'Building an embeddable widget shows you understand cross-origin and iframe constraints.', estimatedTime: '4 weeks', features: ['Embeddable widget via script tag', 'Agent dashboard with live conversation queue', 'Canned response library', 'Conversation history and offline message handling'] },
    { name: 'Online Code Judge / Compiler Platform', description: 'A LeetCode-style platform where users submit code that runs in sandboxed Docker containers and is auto-graded.', techStack: ['Next.js', 'FastAPI', 'Docker SDK', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Sandboxed code execution is a genuinely advanced systems problem — strong technical signal.', estimatedTime: '5 weeks', features: ['Sandboxed Docker-based code execution', 'Multi-language support (Python/JS/Java)', 'Test case grading with time/memory limits', 'Leaderboard and submission history'] },
    { name: 'Subscription Box E-Commerce Platform', description: 'A recurring-delivery e-commerce platform with subscription management, pause/skip, and Razorpay recurring billing.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Celery', 'Razorpay'], difficulty: 'Intermediate', resumeImpact: 'Recurring billing logic is significantly more complex than one-time checkout — shows depth.', estimatedTime: '5 weeks', features: ['Subscription pause/skip/cancel flow', 'Razorpay recurring payment mandate', 'Automated monthly fulfillment trigger', 'Customer self-service billing portal'] },
    { name: 'Collaborative Document Editor (Notion-lite)', description: 'A block-based document editor with real-time collaborative editing, nested pages, and permission sharing.', techStack: ['Next.js', 'Node.js', 'Yjs', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Block-based editors with real-time sync are among the most technically respected portfolio pieces.', estimatedTime: '6 weeks', features: ['CRDT-based real-time collaborative editing', 'Nested page hierarchy', 'Granular sharing permissions', 'Version history with rollback'] },
    { name: 'Video Course Platform with Progress Tracking', description: 'An online course platform with video streaming, progress tracking, quizzes, and completion certificates.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'AWS S3/CloudFront'], difficulty: 'Intermediate', resumeImpact: 'Video streaming infrastructure (signed URLs, adaptive playback) is a valuable niche skill.', estimatedTime: '5 weeks', features: ['Signed CloudFront URLs for video access control', 'Resume-from-last-position playback', 'Quiz engine with auto-grading', 'PDF certificate generation on course completion'] },
    { name: 'Ride-Sharing Dispatch System (Simplified)', description: 'A simplified Uber-style dispatch system matching riders to nearby drivers with live location tracking.', techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets'], difficulty: 'Intermediate', resumeImpact: 'Geospatial matching and real-time tracking is one of the most commonly asked system design domains.', estimatedTime: '6 weeks', features: ['Redis geospatial nearest-driver matching', 'Live location tracking via WebSocket', 'Fare estimation algorithm', 'Trip state machine (requested→ongoing→completed)'] },
    { name: 'Multi-Vendor Food Delivery Platform', description: 'A food delivery app with restaurant menus, cart, order tracking, and a delivery partner dashboard.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Celery', 'WebSockets'], difficulty: 'Intermediate', resumeImpact: 'Combines e-commerce, real-time tracking, and multi-role dashboards in one cohesive project.', estimatedTime: '6 weeks', features: ['Restaurant menu and availability management', 'Real-time order status tracking', 'Delivery partner assignment logic', 'Multi-role dashboards (customer/restaurant/rider)'] },
    { name: 'Internal Tool: Employee Onboarding Portal', description: 'An HR onboarding platform automating document collection, task checklists, and IT provisioning requests.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Internal tooling experience is exactly what platform/internal-tools teams hire for.', estimatedTime: '4 weeks', features: ['Document upload and e-signature workflow', 'Role-based onboarding checklist templates', 'Automated IT provisioning ticket creation', 'Manager approval workflow'] },
    { name: 'Real Estate CRM with Lead Scoring', description: 'A CRM for real estate agents tracking leads, property matches, and automated lead scoring based on engagement.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Celery'], difficulty: 'Intermediate', resumeImpact: 'Lead scoring logic demonstrates applied business-rule engineering, not just CRUD.', estimatedTime: '5 weeks', features: ['Engagement-based automated lead scoring', 'Property-to-lead matching engine', 'Email/call activity logging', 'Pipeline analytics dashboard'] },

    { name: 'Enterprise Project Management Suite', description: 'A full Jira/Linear-style PM tool with sprints, kanban, real-time updates, and a public API.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Redis', 'WebSockets'], difficulty: 'Advanced', resumeImpact: 'This is the single most comprehensive full stack portfolio piece possible — touches every major skill.', estimatedTime: '8 weeks', features: ['Sprint planning and burndown charts', 'Real-time kanban board sync', 'Public REST API with API key auth', 'Custom workflow state machines per team'] },
    { name: 'Multi-Tenant Analytics Platform', description: 'A self-hosted analytics platform (Mixpanel-lite) ingesting custom events and serving real-time dashboards per tenant.', techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Kafka', 'Redis'], difficulty: 'Advanced', resumeImpact: 'Event ingestion + multi-tenant analytics at this scale is a staff-engineer-level demonstration.', estimatedTime: '8 weeks', features: ['Kafka-based event ingestion pipeline', 'Real-time funnel and retention dashboards', 'Per-tenant data isolation and quotas', 'SDK for client-side event tracking'] },
    { name: 'Banking-Grade Payment Reconciliation Suite', description: 'A full stack reconciliation system matching internal transactions against payment gateway settlement reports.', techStack: ['Next.js', 'Django', 'PostgreSQL', 'Celery', 'Pandas'], difficulty: 'Advanced', resumeImpact: 'Financial reconciliation is a high-trust, high-value skill rarely demonstrated in portfolios.', estimatedTime: '6 weeks', features: ['Automated daily reconciliation against Razorpay/Stripe', 'Discrepancy flagging dashboard', 'Audit trail with exportable reports', 'Manual override workflow with approval'] },
    { name: 'Headless E-Commerce Platform with Plugin System', description: 'A composable e-commerce backend exposing GraphQL APIs, with a plugin architecture for custom checkout logic.', techStack: ['Next.js', 'Node.js', 'GraphQL', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Plugin architecture design demonstrates extensibility thinking valued in platform teams.', estimatedTime: '8 weeks', features: ['GraphQL-first headless commerce API', 'Plugin hook system for custom checkout steps', 'Multi-storefront support from one backend', 'Webhook system for third-party integrations'] },
    { name: 'Distributed Video Streaming Platform', description: 'A YouTube-lite platform with chunked video upload, transcoding pipeline, and adaptive bitrate streaming.', techStack: ['Next.js', 'FastAPI', 'AWS MediaConvert', 'S3', 'CloudFront'], difficulty: 'Advanced', resumeImpact: 'Video infrastructure (transcoding, ABR) is one of the most technically demanding full stack domains.', estimatedTime: '8 weeks', features: ['Chunked resumable video upload', 'Automated transcoding to multiple bitrates', 'HLS adaptive bitrate streaming', 'View analytics with watch-time heatmap'] },
    { name: 'Real-Time Fraud Detection Dashboard', description: 'A full stack fraud monitoring system streaming transaction events and flagging anomalies in real time for analyst review.', techStack: ['Next.js', 'FastAPI', 'Kafka', 'PostgreSQL', 'Redis'], difficulty: 'Advanced', resumeImpact: 'Real-time fraud systems sit at the intersection of data engineering and full stack — a rare, valuable combination.', estimatedTime: '7 weeks', features: ['Kafka-streamed transaction event processing', 'Rule-engine-based real-time flagging', 'Analyst review queue with case management', 'Live fraud rate dashboard'] },
    { name: 'API Marketplace with Usage-Based Billing', description: 'A platform where developers publish APIs, consumers subscribe, and usage is metered and billed automatically.', techStack: ['Next.js', 'Django REST', 'PostgreSQL', 'Redis', 'Stripe'], difficulty: 'Advanced', resumeImpact: 'Usage-based billing infrastructure is the backbone of the modern API economy — a premium skill.', estimatedTime: '7 weeks', features: ['Per-request usage metering middleware', 'Tiered and pay-as-you-go billing models', 'Developer API key management dashboard', 'Automated monthly invoice generation via Stripe'] },
    { name: 'Self-Hosted CI/CD Platform UI', description: 'A web UI and backend for a self-hosted CI/CD system showing live build logs, pipeline visualization, and deployment history.', techStack: ['Next.js', 'FastAPI', 'Docker SDK', 'PostgreSQL', 'WebSockets'], difficulty: 'Advanced', resumeImpact: 'Building developer tooling demonstrates you understand the systems engineers below you depend on.', estimatedTime: '8 weeks', features: ['Live streaming build logs via WebSocket', 'Visual pipeline DAG representation', 'Deployment rollback from history', 'Webhook-triggered pipeline runs'] },
  ],
  implementationGuides: [
    {
      projectName: 'Multi-Tenant SaaS Starter Kit',
      folderStructure: `saas-starter/
├── frontend/
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── [workspace]/
│   │   │   └── layout.tsx
│   │   ├── (auth)/
│   │   └── api/
│   ├── components/
│   └── lib/
├── backend/
│   ├── apps/
│   │   ├── workspaces/
│   │   ├── billing/
│   │   └── invitations/
│   ├── config/
│   └── tests/
├── docker-compose.yml
└── README.md`,
      keyFiles: [
        { file: 'backend/apps/workspaces/models.py', purpose: 'Workspace model with a Membership through-model carrying the role field (owner/admin/member).' },
        { file: 'backend/apps/billing/services.py', purpose: 'Stripe webhook handler synchronizing subscription status changes back into the Workspace model.' },
        { file: 'frontend/app/(dashboard)/[workspace]/layout.tsx', purpose: 'Workspace-scoped layout enforcing membership via a server-side check before rendering children.' },
      ],
      steps: [
        'Design the data model: Workspace, Membership (user, workspace, role), and Subscription.',
        'Implement workspace-scoped Django REST permissions checking Membership on every request.',
        'Build the Next.js dynamic route /[workspace]/... with a server-side membership guard in the layout.',
        'Integrate Stripe Checkout for subscription creation and webhook handling for status sync.',
        'Build the team invitation flow: generate invite token, email link, accept-invite endpoint.',
        'Implement role-based UI gating (only owner/admin sees billing settings).',
        'Add a workspace switcher in the frontend for users belonging to multiple workspaces.',
        'Write integration tests covering cross-workspace data isolation — verify a user in Workspace A can never read Workspace B data.',
      ],
      deploymentNotes: 'Deploy frontend to Vercel, backend to AWS EC2/ECS with RDS PostgreSQL. Use Stripe webhook signature verification and a dedicated webhook endpoint excluded from CSRF protection but protected by signature checks instead.',
    },
    {
      projectName: 'Ride-Sharing Dispatch System (Simplified)',
      folderStructure: `ride-dispatch/
├── frontend/
│   ├── app/
│   │   ├── rider/
│   │   └── driver/
│   └── components/
│       └── LiveMap.tsx
├── backend/
│   ├── app/
│   │   ├── matching/
│   │   │   ├── geo_service.py
│   │   │   └── dispatcher.py
│   │   ├── trips/
│   │   │   └── state_machine.py
│   │   └── websockets/
│   │       └── location_socket.py
│   └── tests/
└── docker-compose.yml`,
      keyFiles: [
        { file: 'backend/app/matching/geo_service.py', purpose: 'Redis GEOADD/GEORADIUS wrapper for storing and querying driver locations within a radius.' },
        { file: 'backend/app/trips/state_machine.py', purpose: 'Explicit trip state machine: requested → matched → ongoing → completed/cancelled, with valid transition enforcement.' },
        { file: 'backend/app/websockets/location_socket.py', purpose: 'WebSocket handler streaming driver location updates to the assigned rider every 3 seconds.' },
      ],
      steps: [
        'Set up Redis with geospatial commands to store live driver locations (GEOADD).',
        'Build the matching service: on ride request, query GEORADIUS for nearby available drivers, rank by ETA.',
        'Implement the trip state machine with explicit allowed-transition validation to prevent invalid state jumps.',
        'Build the WebSocket channel streaming driver location to the rider during an active trip.',
        'Implement fare estimation based on distance (Haversine) and a configurable base/per-km rate.',
        'Add driver app view: accept/reject incoming trip requests with a countdown timer.',
        'Simulate driver movement with a script for demo purposes (since you will not have real GPS hardware).',
        'Load test the matching service to confirm sub-second driver assignment at 100 concurrent requests.',
      ],
      deploymentNotes: 'Deploy with ElastiCache Redis for geospatial queries, the WebSocket service on ECS Fargate (sticky sessions via ALB), and PostgreSQL RDS for trip history. Document clearly in the README that this is a simplified simulation, not a production dispatch system.',
    },
  ],
  resumeImpact: [
    'Full stack projects prove end-to-end ownership — the single most requested trait in startup hiring.',
    'SaaS, marketplace, and ride-sharing style projects map directly onto the business domains Indian funded startups operate in.',
    'Demonstrating both frontend polish and backend correctness in one project is more convincing than two separate, narrower projects.',
    'A deployed, live-demoable full stack project with a clear README is the single highest-leverage portfolio asset for full stack interviews.',
  ],
  interviewTalkingPoints: [
    'Be ready to walk through your data model end-to-end — full stack interviews often start with "draw your schema."',
    'For multi-tenant projects, explain the exact isolation guarantee and how you tested for cross-tenant data leaks.',
    'For any real-time project, explain your reconnection strategy — what happens when the WebSocket drops?',
    'Always know your deployment architecture cold: what runs where, and what would break first under 10x load.',
  ],
  faqs: [
    { question: 'How is this list different from the Python, Django, and React project lists?', answer: 'Those lists focus on one layer of the stack in isolation. This list combines a complete frontend (Next.js/React) with a complete backend (Django REST or FastAPI), a real database, and a deployment story — these are the projects to build when you want to demonstrate end-to-end ownership, which is what full stack interviews specifically test for.' },
    { question: 'Which full stack project should I build first?', answer: 'Start with the Personal Finance Tracker or Job Application Tracker — both are well-scoped (2 weeks), force you to build complete auth + CRUD + dashboard flow, and are easy to explain confidently in an interview without getting lost in edge cases.' },
    { question: 'Should I use Django REST Framework or FastAPI for the backend?', answer: 'Use Django REST Framework for projects needing an admin panel and rapid relational modeling (SaaS starter, CRM, project management suite). Use FastAPI for projects emphasizing async performance and WebSockets (ride dispatch, real-time analytics, code judge). Having one strong project in each shows you can choose the right tool deliberately.' },
    { question: 'Do these projects need to be deployed to count as a strong portfolio piece?', answer: 'Yes. A full stack project is specifically being evaluated on the "full" claim — interviewers expect a live URL. Deploy frontend to Vercel (free) and backend + database to a low-cost AWS EC2/RDS setup or Railway. Document the architecture in your README with a diagram.' },
    { question: 'How do I avoid scope creep on a full stack project?', answer: 'Pick 4-6 core features before writing code and explicitly list "not building" items in your README (e.g., "no payment processing in v1"). Reviewers respect clear scoping far more than an unfinished attempt at everything. Ship a complete, polished version of a smaller feature set.' },
    { question: 'What is the single most impressive project on this list for a 12 LPA+ target?', answer: 'The Enterprise Project Management Suite and the Multi-Tenant Analytics Platform are the strongest signals for 15+ LPA roles — they require correctly handling real-time sync, multi-tenancy, and either complex state machines or high-throughput event ingestion, which together cover nearly every skill senior full stack interviews probe for.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/full-stack-roadmap-2026', 'Full Stack Developer Roadmap 2026', 'The structured 10-month learning path these projects are designed to complement.'),
    interviewLink('/resources/interview-questions/full-stack-developer', '100+ Full Stack Interview Questions', 'React, Node.js/Django, system design, and database questions for full stack roles.'),
    tutorialLink('/resources/tutorials/postgresql', 'PostgreSQL Tutorial', 'Deepen the database layer underneath every project on this list.'),
    courseLink('/courses/react', 'React Developer Course', 'Strengthen the frontend half of your full stack skill set.'),
    { title: 'React Projects', href: '/resources/projects/react-projects', description: 'Frontend-focused projects to pair with your own backend choice.', category: 'Projects', icon: '🛠️' },
    { title: 'Django Projects', href: '/resources/projects/django-projects', description: 'Backend-focused projects to pair with a React frontend.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ Full Stack Projects for Your Portfolio (2026) — React + Django/Node',
    description: 'Build 30+ complete full stack projects: SaaS starters, ride-sharing dispatch, video platforms, and marketplaces. Next.js, Django/FastAPI, PostgreSQL — full implementation guides.',
    keywords: ['full stack projects 2026', 'react django project ideas', 'full stack portfolio projects india', 'saas project ideas resume', 'mern full stack projects 2026'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 5. AI PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const aiProjects: ProjectCategory = {
  slug: 'ai-projects',
  title: 'AI Projects',
  description:
    'LLM, RAG, and applied AI projects covering exactly what 2026 AI Engineer interviews test: prompt engineering, retrieval pipelines, agentic workflows, and production-grade evaluation of AI systems.',
  icon: ICONS.ai,
  color: '#9333EA',
  difficulty: 'All Levels',
  techStack: ['Python', 'OpenAI/Anthropic API', 'LangChain', 'Pinecone/Chroma', 'FastAPI', 'Streamlit'],
  readTime: '18 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'AI Document Q&A Chatbot', description: 'A chatbot that answers questions about uploaded PDFs using a basic RAG pipeline with citation of source pages.', techStack: ['Python', 'OpenAI API', 'Chroma', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'The canonical first RAG project — proves you understand the core retrieval pattern.', estimatedTime: '1 week', features: ['PDF chunking and embedding', 'Source page citation in answers', 'Conversation history context', 'Streamlit chat UI'] },
    { name: 'AI Resume Reviewer', description: 'A tool that analyzes a resume against a job description and gives structured improvement feedback with a match score.', techStack: ['Python', 'OpenAI API', 'FastAPI'], difficulty: 'Beginner', resumeImpact: 'Demonstrates structured output extraction with function calling — a core LLM engineering skill.', estimatedTime: '1 week', features: ['Resume-to-JD match scoring', 'Structured feedback via function calling', 'Missing keyword detection', 'Improved bullet point suggestions'] },
    { name: 'AI Email Summarizer & Reply Drafter', description: 'A tool that summarizes long email threads and drafts contextual replies in a chosen tone.', techStack: ['Python', 'OpenAI API', 'FastAPI'], difficulty: 'Beginner', resumeImpact: 'Tests prompt engineering for tone control and summarization quality.', estimatedTime: '5 days', features: ['Thread summarization', 'Tone-adjustable reply drafting', 'Action item extraction', 'Multi-email batch processing'] },
    { name: 'AI-Powered Recipe Generator', description: 'Generates recipes from a list of available ingredients, with dietary restriction filtering and nutrition estimates.', techStack: ['Python', 'OpenAI API', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'A friendly, demoable project showing structured generation with constraints.', estimatedTime: '5 days', features: ['Ingredient-constrained generation', 'Dietary restriction filtering', 'Estimated nutrition breakdown', 'Step-by-step instruction formatting'] },
    { name: 'AI Meeting Notes Generator', description: 'Transcribes audio meetings and generates structured notes with action items and decisions made.', techStack: ['Python', 'Whisper API', 'OpenAI API'], difficulty: 'Beginner', resumeImpact: 'Combines speech-to-text with LLM summarization — a practical multi-model pipeline.', estimatedTime: '1 week', features: ['Audio transcription via Whisper', 'Action item and decision extraction', 'Speaker-attributed notes (if diarization available)', 'Exportable Markdown summary'] },
    { name: 'AI Sentiment & Theme Analyzer for Reviews', description: 'Analyzes a batch of product reviews, extracting sentiment, common themes, and a summary report.', techStack: ['Python', 'OpenAI API', 'Pandas'], difficulty: 'Beginner', resumeImpact: 'Shows batch processing patterns and aggregate insight generation from unstructured text.', estimatedTime: '1 week', features: ['Per-review sentiment scoring', 'Theme clustering across reviews', 'Aggregate summary report generation', 'CSV/Excel export of analysis'] },
    { name: 'AI Code Explainer & Documenter', description: 'A tool that explains code snippets in plain English and auto-generates docstrings.', techStack: ['Python', 'OpenAI API', 'FastAPI'], difficulty: 'Beginner', resumeImpact: 'Developer-tooling AI projects resonate strongly with engineering interviewers.', estimatedTime: '5 days', features: ['Plain-English code explanation', 'Auto-generated docstrings (multiple formats)', 'Complexity flag for overly complex functions', 'Multi-language support'] },
    { name: 'AI Travel Itinerary Planner', description: 'Generates day-by-day travel itineraries based on destination, budget, and interests, with real-time refinement via chat.', techStack: ['Python', 'OpenAI API', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'Conversational refinement loops are a core pattern in consumer AI products.', estimatedTime: '1 week', features: ['Budget and interest-constrained planning', 'Conversational itinerary refinement', 'Day-by-day structured output', 'Export to PDF/calendar'] },
    { name: 'AI Flashcard Generator from Notes', description: 'Converts uploaded study notes into spaced-repetition flashcards automatically.', techStack: ['Python', 'OpenAI API', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'EdTech-relevant project showing structured extraction from unstructured study material.', estimatedTime: '5 days', features: ['Auto-generated Q&A flashcards from notes', 'Difficulty tagging per card', 'Spaced repetition scheduling logic', 'Export to Anki format'] },
    { name: 'AI Image Caption & Alt-Text Generator', description: 'Generates accurate, accessible alt-text and captions for uploaded images using a vision-capable LLM.', techStack: ['Python', 'GPT-4V/Claude Vision API', 'FastAPI'], difficulty: 'Beginner', resumeImpact: 'Multi-modal AI experience (vision + language) is increasingly expected in 2026.', estimatedTime: '5 days', features: ['Vision-model-based caption generation', 'WCAG-compliant alt-text formatting', 'Batch image processing', 'Tone selection (descriptive/concise)'] },

    { name: 'Production RAG System with Reranking', description: 'A document Q&A system using hybrid search (vector + keyword), Cohere reranking, and full RAGAS evaluation.', techStack: ['Python', 'LangChain/LlamaIndex', 'Pinecone', 'Cohere'], difficulty: 'Intermediate', resumeImpact: 'This is the single most important AI Engineer interview project — production RAG done correctly.', estimatedTime: '3 weeks', features: ['Hybrid vector + BM25 keyword search', 'Cohere reranking for precision', 'RAGAS-based automated evaluation suite', 'Source citation with confidence scoring'] },
    { name: 'Multi-Agent Research Assistant', description: 'An agentic system where specialized agents (researcher, writer, fact-checker) collaborate to produce a researched report.', techStack: ['Python', 'LangGraph', 'OpenAI API', 'Tavily Search API'], difficulty: 'Intermediate', resumeImpact: 'Multi-agent orchestration is a 2026 frontier skill that very few candidates can demonstrate.', estimatedTime: '3 weeks', features: ['LangGraph-orchestrated agent workflow', 'Web search tool integration', 'Fact-checking agent cross-referencing claims', 'Structured report generation with citations'] },
    { name: 'AI-Powered SQL Query Generator', description: 'A natural-language-to-SQL interface that lets non-technical users query a database safely with schema-aware generation.', techStack: ['Python', 'OpenAI API', 'PostgreSQL', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'Text-to-SQL is a high-value enterprise AI use case directly relevant to data product teams.', estimatedTime: '2 weeks', features: ['Schema-aware SQL generation', 'Query safety validation (read-only enforcement)', 'Result explanation in plain English', 'Query history and reuse'] },
    { name: 'Customer Support AI Agent with Tool Use', description: 'A support agent that can look up order status, process refunds (with approval), and escalate to humans via function calling.', techStack: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Tool-use agents are the dominant 2026 AI product pattern — directly applicable to most companies.', estimatedTime: '3 weeks', features: ['Function calling for order/refund tools', 'Human-in-the-loop approval for sensitive actions', 'Conversation context with memory', 'Escalation routing on low confidence'] },
    { name: 'AI Content Moderation Pipeline', description: 'A pipeline classifying user-generated content for policy violations using LLM-based classification with human review escalation.', techStack: ['Python', 'OpenAI Moderation API', 'FastAPI', 'PostgreSQL'], difficulty: 'Intermediate', resumeImpact: 'Trust & safety AI is an increasingly dedicated specialization at every consumer platform.', estimatedTime: '2 weeks', features: ['Multi-category policy classification', 'Confidence-based human review escalation', 'Audit log of all moderation decisions', 'Appeal workflow for flagged content'] },
    { name: 'Semantic Search Engine for Internal Docs', description: 'A semantic search tool over a company knowledge base with permission-aware filtering and query analytics.', techStack: ['Python', 'sentence-transformers', 'Qdrant', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'Internal knowledge search is one of the most commonly funded enterprise AI use cases.', estimatedTime: '3 weeks', features: ['Semantic embedding search over documents', 'Permission-aware result filtering', 'Query analytics dashboard', 'Incremental document indexing'] },
    { name: 'AI-Powered Resume-to-Interview Question Generator', description: 'Generates tailored technical interview questions based on a candidate\'s resume and the target role.', techStack: ['Python', 'OpenAI API', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'A novel, well-scoped AI product idea that demonstrates creative application of LLMs.', estimatedTime: '2 weeks', features: ['Resume-tailored question generation', 'Difficulty calibration by experience level', 'Follow-up question suggestion chains', 'Answer evaluation rubric generation'] },
    { name: 'Voice-Based AI Assistant', description: 'A voice-interactive assistant combining speech-to-text, LLM reasoning, and text-to-speech for hands-free interaction.', techStack: ['Python', 'Whisper', 'OpenAI API', 'ElevenLabs/TTS'], difficulty: 'Intermediate', resumeImpact: 'Voice AI pipelines demonstrate orchestration across three distinct model types.', estimatedTime: '3 weeks', features: ['Real-time speech-to-text transcription', 'LLM-based conversational reasoning', 'Natural text-to-speech response', 'Interruption handling'] },
    { name: 'AI-Powered Code Review Bot', description: 'A GitHub bot that automatically reviews pull requests, flagging bugs, style issues, and suggesting improvements via comments.', techStack: ['Python', 'OpenAI API', 'GitHub API', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'Developer-facing AI tooling is highly visible and directly demonstrates engineering judgment.', estimatedTime: '3 weeks', features: ['GitHub webhook-triggered PR review', 'Diff-aware contextual code analysis', 'Inline comment posting via GitHub API', 'Severity-tagged suggestions (blocker/nit)'] },
    { name: 'Personalized Learning Path Generator', description: 'Generates adaptive learning paths based on a user\'s current knowledge assessment and learning goals.', techStack: ['Python', 'OpenAI API', 'PostgreSQL', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'EdTech personalization engines are a strong, demonstrable AI product pattern.', estimatedTime: '3 weeks', features: ['Knowledge gap assessment via adaptive quiz', 'Personalized curriculum sequencing', 'Progress-based path re-adjustment', 'Resource recommendation per topic'] },

    { name: 'Production AI Agent Platform with Memory', description: 'A multi-session AI agent platform with long-term memory, tool plugins, and a full observability/tracing layer.', techStack: ['Python', 'LangGraph', 'Pinecone', 'FastAPI', 'LangSmith'], difficulty: 'Advanced', resumeImpact: 'This is the flagship 2026 AI Engineer portfolio project — covers memory, tools, and observability together.', estimatedTime: '6 weeks', features: ['Long-term vector-based memory across sessions', 'Plugin architecture for custom tools', 'Full request tracing and cost tracking', 'Multi-agent handoff for specialized tasks'] },
    { name: 'Fine-Tuned Domain-Specific LLM Service', description: 'Fine-tunes an open-source LLM (LoRA) on domain-specific data and serves it via vLLM with an evaluation suite.', techStack: ['Python', 'PyTorch', 'PEFT/LoRA', 'vLLM'], difficulty: 'Advanced', resumeImpact: 'Hands-on fine-tuning and serving experience is rare and highly compensated.', estimatedTime: '6 weeks', features: ['LoRA fine-tuning pipeline on custom dataset', 'Before/after evaluation benchmark', 'vLLM high-throughput serving deployment', 'A/B comparison against base model'] },
    { name: 'Enterprise RAG Platform with Access Control', description: 'A multi-tenant RAG platform where document access is scoped per user/team, with audit logging of every query.', techStack: ['Python', 'LangChain', 'Pinecone', 'PostgreSQL', 'FastAPI'], difficulty: 'Advanced', resumeImpact: 'Access-controlled enterprise RAG is exactly what large companies need and rarely see well-built.', estimatedTime: '6 weeks', features: ['Document-level access control enforcement', 'Per-query audit logging for compliance', 'Multi-tenant index isolation', 'Citation verification against source permissions'] },
    { name: 'AI-Powered Data Pipeline Anomaly Detector', description: 'A system using LLM reasoning combined with statistical methods to detect and explain anomalies in data pipelines.', techStack: ['Python', 'OpenAI API', 'Pandas', 'FastAPI'], difficulty: 'Advanced', resumeImpact: 'Combining classical statistics with LLM explanation is a sophisticated, differentiated approach.', estimatedTime: '5 weeks', features: ['Statistical anomaly detection (z-score, IQR)', 'LLM-generated plain-English anomaly explanations', 'Root-cause suggestion based on pipeline metadata', 'Slack alert with explanation summary'] },
    { name: 'Real-Time AI Translation & Dubbing Pipeline', description: 'A pipeline that translates and dubs video content into multiple languages with voice cloning and lip-sync timing.', techStack: ['Python', 'Whisper', 'OpenAI API', 'TTS', 'FFmpeg'], difficulty: 'Advanced', resumeImpact: 'Multi-modal media AI pipelines are technically demanding and visually impressive in demos.', estimatedTime: '6 weeks', features: ['Speech-to-text transcription and translation', 'Voice-cloned text-to-speech dubbing', 'Timing alignment with original video', 'Multi-language batch export'] },
    { name: 'AI Model Evaluation & Benchmarking Platform', description: 'A platform that runs standardized benchmarks (RAGAS, custom evals) across multiple LLM providers and visualizes comparisons.', techStack: ['Python', 'RAGAS', 'FastAPI', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Evaluation infrastructure is the most underbuilt, most needed piece of AI engineering in 2026.', estimatedTime: '5 weeks', features: ['Multi-provider benchmark execution (OpenAI/Anthropic/open-source)', 'Custom eval suite builder', 'Cost-vs-quality comparison dashboard', 'Regression detection across model versions'] },
    { name: 'Autonomous Web Research Agent', description: 'An agent that autonomously browses the web, extracts information, and compiles a verified research report on a given topic.', techStack: ['Python', 'LangGraph', 'Playwright', 'OpenAI API'], difficulty: 'Advanced', resumeImpact: 'Browser-using agents represent the cutting edge of agentic AI capability in 2026.', estimatedTime: '6 weeks', features: ['Playwright-driven autonomous web browsing', 'Multi-source claim verification', 'Iterative research planning and re-querying', 'Structured report with source provenance'] },
    { name: 'AI-Powered Synthetic Data Generation Platform', description: 'A platform generating realistic synthetic datasets (tabular/text) for testing and model training, preserving statistical properties.', techStack: ['Python', 'OpenAI API', 'Faker', 'Pandas'], difficulty: 'Advanced', resumeImpact: 'Synthetic data generation addresses a real, recurring data-scarcity problem in regulated industries.', estimatedTime: '5 weeks', features: ['Schema-aware synthetic record generation', 'Statistical property preservation (distributions, correlations)', 'PII-safe generation for regulated domains', 'Quality validation against the original dataset'] },
  ],
  implementationGuides: [
    {
      projectName: 'Production RAG System with Reranking',
      folderStructure: `production-rag/
├── app/
│   ├── ingestion/
│   │   ├── chunker.py
│   │   ├── embedder.py
│   │   └── pipeline.py
│   ├── retrieval/
│   │   ├── hybrid_search.py
│   │   └── reranker.py
│   ├── generation/
│   │   └── answer_generator.py
│   ├── evaluation/
│   │   └── ragas_suite.py
│   └── main.py
├── tests/
└── requirements.txt`,
      keyFiles: [
        { file: 'app/ingestion/chunker.py', purpose: 'Implements recursive character-aware chunking with overlap, preserving paragraph boundaries where possible.' },
        { file: 'app/retrieval/hybrid_search.py', purpose: 'Combines Pinecone vector similarity search with BM25 keyword search, merging results via reciprocal rank fusion.' },
        { file: 'app/retrieval/reranker.py', purpose: 'Cohere rerank API integration applied to the top-50 hybrid results, returning the top-8 most relevant chunks.' },
        { file: 'app/evaluation/ragas_suite.py', purpose: 'RAGAS evaluation harness measuring context precision, context recall, faithfulness, and answer relevance against a golden test set.' },
      ],
      steps: [
        'Build the ingestion pipeline: chunk documents (500 tokens, 50 token overlap), embed with text-embedding-3-large, upsert to Pinecone.',
        'Implement BM25 keyword search alongside vector search for the hybrid retrieval layer.',
        'Merge hybrid results using reciprocal rank fusion before passing to the reranker.',
        'Integrate Cohere Rerank to refine the top candidates down to the most contextually relevant chunks.',
        'Build the generation step: construct a prompt with retrieved context and explicit citation instructions.',
        'Create a golden evaluation dataset (20-30 question/answer pairs) covering your document corpus.',
        'Run the RAGAS evaluation suite and document baseline scores for context precision, recall, and faithfulness.',
        'Iterate on chunk size, retrieval k, and reranking threshold, re-running RAGAS after each change to show measurable improvement.',
      ],
      deploymentNotes: 'Deploy as a FastAPI service on AWS ECS or Railway, with Pinecone as the managed vector store. Cache embeddings for repeated documents to control OpenAI API costs, and log every query/response pair for ongoing evaluation dataset growth.',
    },
    {
      projectName: 'Production AI Agent Platform with Memory',
      folderStructure: `agent-platform/
├── app/
│   ├── agents/
│   │   ├── orchestrator.py
│   │   └── specialist_agents.py
│   ├── memory/
│   │   ├── long_term.py
│   │   └── short_term.py
│   ├── tools/
│   │   ├── registry.py
│   │   └── builtin_tools.py
│   ├── observability/
│   │   └── tracing.py
│   └── main.py
├── tests/
└── requirements.txt`,
      keyFiles: [
        { file: 'app/agents/orchestrator.py', purpose: 'LangGraph state graph defining agent routing logic — decides which specialist agent or tool handles each turn.' },
        { file: 'app/memory/long_term.py', purpose: 'Vector-based long-term memory: stores and retrieves relevant past conversation summaries scoped per user.' },
        { file: 'app/tools/registry.py', purpose: 'Plugin registry pattern allowing new tools to be added without modifying the core agent loop.' },
        { file: 'app/observability/tracing.py', purpose: 'LangSmith integration capturing every LLM call, tool invocation, and token cost for full request tracing.' },
      ],
      steps: [
        'Design the LangGraph state machine: router node decides between direct response, tool use, or specialist agent handoff.',
        'Implement short-term memory (current conversation buffer) and long-term memory (Pinecone-backed summary retrieval).',
        'Build the tool registry pattern: each tool is a self-contained module registered with a schema for function calling.',
        'Add 3-4 example tools: web search, calculator, database lookup, and email draft.',
        'Implement memory consolidation: after each session, summarize and store key facts to long-term memory.',
        'Integrate LangSmith (or a custom tracing solution) to capture full execution traces with token cost per call.',
        'Build a cost dashboard aggregating spend per user/session from the trace data.',
        'Write evaluation scenarios testing multi-turn memory recall: "what did I tell you about X three sessions ago?"',
      ],
      deploymentNotes: 'Deploy as a FastAPI service with Pinecone for memory storage. Set hard per-user daily token budgets enforced before each LLM call to prevent runaway costs. Document the tracing dashboard prominently — it is the strongest interview talking point for this project.',
    },
  ],
  resumeImpact: [
    'A correctly-evaluated RAG system (with documented RAGAS scores) is the single most valuable AI Engineer portfolio piece in 2026.',
    'Agentic projects with tool use and memory directly map to the dominant AI product pattern companies are building toward.',
    'Demonstrating cost and latency awareness (not just "it works") signals production AI engineering maturity.',
    'Fine-tuning and model evaluation projects differentiate you from the majority of candidates who only call APIs.',
  ],
  interviewTalkingPoints: [
    'For any RAG project, be ready to explain your chunking strategy and why you chose those parameters specifically.',
    'Always have evaluation numbers ready — "it works well" is not credible; "context precision improved from 0.61 to 0.84" is.',
    'For agentic projects, explain failure handling: what happens when a tool call fails or the agent loops indefinitely?',
    'Be ready to discuss cost per request and how you would reduce it at 10x scale (caching, smaller models, batching).',
  ],
  faqs: [
    { question: 'Which AI project should I build first?', answer: 'Start with the AI Document Q&A Chatbot — it teaches the core RAG pattern (chunk, embed, retrieve, generate) that every other project on this list builds upon. Once comfortable, move to the Production RAG System with Reranking, which adds the production rigor interviewers specifically look for.' },
    { question: 'Do I need a GPU to build these AI projects?', answer: 'No, for most projects on this list. Projects using OpenAI/Anthropic/Claude APIs need no GPU at all — you are calling a hosted API. Only the Fine-Tuned Domain-Specific LLM Service project requires GPU access; use Google Colab (free tier) or a rented GPU instance (RunPod, Lambda Labs) for that one specifically.' },
    { question: 'How do I evaluate whether my RAG system is actually good?', answer: 'Build a golden test set of 20-30 question/answer pairs with known-correct answers from your document corpus. Run the RAGAS framework to measure context precision, context recall, faithfulness, and answer relevance. Document these scores in your README — this single addition separates a toy RAG demo from a credible engineering project.' },
    { question: 'Is LangChain necessary, or should I build RAG pipelines from scratch?', answer: 'Use LangChain or LlamaIndex to prototype quickly, but be able to explain what is happening underneath — interviewers frequently ask candidates to describe the retrieval pipeline without naming the library. For at least one project, build the pipeline with direct API calls (no framework) to prove you understand the mechanics, not just the abstraction.' },
    { question: 'How much will building these projects cost in API fees?', answer: 'Most beginner/intermediate projects cost ₹500–2,000 in OpenAI/Anthropic API credits if built and tested reasonably (cache responses during development, use gpt-4o-mini or Claude Haiku for iteration, switch to a stronger model only for final testing). Advanced projects with heavy evaluation suites or fine-tuning can run ₹3,000–8,000 — budget accordingly and use rate-limited test runs.' },
    { question: 'What separates a junior-level AI project from a senior-level one on this list?', answer: 'Three things: (1) documented evaluation metrics rather than anecdotal "it works," (2) explicit cost and latency tracking, and (3) failure-mode handling — what happens when retrieval finds nothing relevant, or a tool call errors. The advanced-tier projects (agent platform, fine-tuning, eval platform) bake these in by design; for beginner/intermediate projects, you must add this rigor yourself to make them senior-level signals.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/ai-engineer-roadmap-2026', 'AI Engineer Roadmap 2026', 'The structured 12-month learning path these projects are designed to complement.'),
    interviewLink('/resources/interview-questions/machine-learning-engineer', 'ML/AI Engineer Interview Questions', 'RAG, LLM, and system design questions matching these exact project patterns.'),
    tutorialLink('/resources/tutorials/ai-fundamentals', 'AI Fundamentals Tutorial', 'Core LLM and embedding concepts underlying every project on this list.'),
    courseLink('/courses/python-ai-aws-devops-combo', 'Python + AI Combo Course', 'Structured AI engineering training with hands-on RAG and agent projects.'),
    { title: 'ML Projects', href: '/resources/projects/ml-projects', description: 'Classical ML and MLOps-focused projects to pair with your AI portfolio.', category: 'Projects', icon: '🛠️' },
    { title: 'Data Science Projects', href: '/resources/projects/data-science-projects', description: 'Statistical and analytical projects underlying applied AI work.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ AI & LLM Projects for Your Portfolio (2026) — RAG, Agents, Fine-Tuning',
    description: 'Build 30+ real AI projects: RAG systems, multi-agent platforms, fine-tuned LLMs, and evaluation suites. Full implementation guides with RAGAS evaluation for 2026 AI Engineer hiring.',
    keywords: ['ai projects 2026', 'llm project ideas resume', 'rag system project', 'ai engineer portfolio projects', 'langchain project ideas india'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 6. ML PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const mlProjects: ProjectCategory = {
  slug: 'ml-projects',
  title: 'ML Engineering Projects',
  description:
    'Production ML Engineering projects covering feature pipelines, model serving, MLOps automation, and drift monitoring — the exact depth ML Engineer interviews test in 2026.',
  icon: ICONS.ml,
  color: '#6366F1',
  difficulty: 'All Levels',
  techStack: ['Python', 'PyTorch', 'scikit-learn', 'MLflow', 'Airflow', 'FastAPI', 'Docker', 'Kubernetes'],
  readTime: '17 min read',
  lastUpdated: 'December 2025',
  projects: [
    // Beginner (10)
    {
      name: 'House Price Prediction API',
      description: 'Train a gradient boosting regression model on tabular housing data, wrap it in a FastAPI endpoint, and containerize with Docker.',
      techStack: ['Python', 'XGBoost', 'FastAPI', 'Docker'],
      difficulty: 'Beginner',
      resumeImpact: 'Proves you can take a trained model from notebook to a callable REST endpoint.',
      estimatedTime: '1 week',
      features: ['Feature engineering pipeline in sklearn', 'FastAPI /predict endpoint with Pydantic validation', 'Dockerfile for deployment', 'Model performance README with RMSE/MAE'],
    },
    {
      name: 'Spam Email Classifier',
      description: 'A text classification pipeline using TF-IDF + logistic regression, served via FastAPI with batch prediction support.',
      techStack: ['Python', 'scikit-learn', 'FastAPI'],
      difficulty: 'Beginner',
      resumeImpact: 'Classic NLP classification pipeline demonstrating text preprocessing end-to-end.',
      estimatedTime: '5 days',
      features: ['TF-IDF vectorizer with n-gram support', 'Precision/recall/F1 evaluation report', 'Batch prediction endpoint', 'Threshold tuning for recall vs precision trade-off'],
    },
    {
      name: 'Customer Churn Predictor with SHAP',
      description: 'Binary churn classifier with full SHAP explainability, threshold calibration, and a Streamlit explanation dashboard.',
      techStack: ['Python', 'LightGBM', 'SHAP', 'Streamlit'],
      difficulty: 'Beginner',
      resumeImpact: 'SHAP explainability is increasingly required at every company shipping ML to non-technical stakeholders.',
      estimatedTime: '1 week',
      features: ['LightGBM training with Optuna tuning', 'SHAP waterfall and beeswarm plots', 'Threshold calibration via precision-recall curve', 'Streamlit explanation dashboard per prediction'],
    },
    {
      name: 'Time Series Demand Forecasting',
      description: 'Weekly product demand forecasting using LightGBM on engineered lag/rolling features, evaluated on MAPE.',
      techStack: ['Python', 'LightGBM', 'Pandas', 'Matplotlib'],
      difficulty: 'Beginner',
      resumeImpact: 'Time series is a universal business problem — every company wants forecasting.',
      estimatedTime: '1 week',
      features: ['Lag and rolling window feature engineering', 'Train/validation split respecting temporal order', 'MAPE/RMSE evaluation per SKU', 'Forecast confidence interval estimation'],
    },
    {
      name: 'Image Classification with Transfer Learning',
      description: 'Fine-tune EfficientNet-B0 on a 5-class custom dataset using PyTorch Lightning, with a FastAPI inference endpoint.',
      techStack: ['Python', 'PyTorch Lightning', 'EfficientNet', 'FastAPI'],
      difficulty: 'Beginner',
      resumeImpact: 'Transfer learning is the standard approach for every computer vision task — shows you know the right tool.',
      estimatedTime: '1 week',
      features: ['PyTorch Lightning training loop with callbacks', 'EfficientNet-B0 fine-tuning (frozen backbone → unfreeze)', 'Validation accuracy, confusion matrix', 'FastAPI /predict endpoint accepting image upload'],
    },
    {
      name: 'Sentiment Analysis API',
      description: 'Fine-tune DistilBERT on a labelled sentiment dataset and serve predictions with calibrated confidence scores.',
      techStack: ['Python', 'HuggingFace Transformers', 'FastAPI'],
      difficulty: 'Beginner',
      resumeImpact: 'Shows Hugging Face ecosystem familiarity — a baseline expectation for ML roles in 2026.',
      estimatedTime: '1 week',
      features: ['DistilBERT fine-tuning with trainer API', 'Temperature scaling for calibrated probabilities', 'Batch inference endpoint', 'Per-class F1 evaluation report'],
    },
    {
      name: 'Recommendation Engine (Collaborative Filtering)',
      description: 'User-item collaborative filtering using matrix factorization (ALS), served via FastAPI with a nearest-user fallback.',
      techStack: ['Python', 'implicit', 'FastAPI', 'Redis'],
      difficulty: 'Beginner',
      resumeImpact: 'Recommendation systems are one of the most asked-about ML domains in product company interviews.',
      estimatedTime: '1 week',
      features: ['ALS matrix factorization training', 'Top-N recommendations per user', 'Redis-cached recommendation results', 'Cold-start fallback to popularity-based ranking'],
    },
    {
      name: 'Anomaly Detection on Time Series',
      description: 'Detects operational anomalies in a metrics time series using Isolation Forest and a statistical baseline.',
      techStack: ['Python', 'scikit-learn', 'Pandas', 'Plotly'],
      difficulty: 'Beginner',
      resumeImpact: 'Anomaly detection is needed at every company running production systems — broadly applicable.',
      estimatedTime: '1 week',
      features: ['Isolation Forest training on rolling window features', 'Z-score statistical baseline for comparison', 'Interactive Plotly anomaly timeline', 'Configurable sensitivity threshold'],
    },
    {
      name: 'Credit Risk Scorecard',
      description: 'A logistic regression scorecard following the Weight of Evidence/Information Value methodology used in consumer credit.',
      techStack: ['Python', 'scikit-learn', 'scorecardpy', 'Pandas'],
      difficulty: 'Beginner',
      resumeImpact: 'WOE/IV methodology is the standard approach in BFSI — highly valued if targeting fintech.',
      estimatedTime: '1 week',
      features: ['WOE binning with IV calculation', 'Scorecard point conversion', 'Gini coefficient and KS statistic evaluation', 'Population stability index (PSI) monitoring'],
    },
    {
      name: 'Object Detection with YOLO',
      description: 'Fine-tune YOLOv8 on a custom labelled dataset for a specific detection task, with a FastAPI video-frame inference endpoint.',
      techStack: ['Python', 'YOLOv8', 'Ultralytics', 'FastAPI'],
      difficulty: 'Beginner',
      resumeImpact: 'Object detection experience is increasingly valuable as computer vision moves into every domain.',
      estimatedTime: '2 weeks',
      features: ['Custom dataset labelling with Roboflow', 'YOLOv8 fine-tuning pipeline', 'mAP50/mAP50-95 evaluation', 'FastAPI endpoint accepting image/video frame'],
    },

    // Intermediate (12)
    {
      name: 'MLflow Experiment Tracking Platform',
      description: 'A self-hosted MLflow setup tracking experiments for 5 different models, with automated champion selection and model registry promotion.',
      techStack: ['Python', 'MLflow', 'PostgreSQL', 'S3', 'Docker'],
      difficulty: 'Intermediate',
      resumeImpact: 'MLflow proficiency is now a baseline expectation for ML Engineer roles — this project proves operational depth.',
      estimatedTime: '2 weeks',
      features: ['MLflow tracking server on PostgreSQL + S3 artifact store', 'Automated champion/challenger evaluation job', 'Model registry staging → production workflow', 'Run comparison dashboard with parallel coordinates'],
    },
    {
      name: 'Feature Store with Feast + Redis',
      description: 'A Feast feature store serving online features from Redis and offline features from PostgreSQL with point-in-time correct joins.',
      techStack: ['Python', 'Feast', 'Redis', 'PostgreSQL'],
      difficulty: 'Intermediate',
      resumeImpact: 'Feature store knowledge directly addresses the training-serving skew problem — a top ML Engineer interview topic.',
      estimatedTime: '3 weeks',
      features: ['Offline feature view backed by PostgreSQL', 'Online serving via Redis materialization', 'Point-in-time correct training dataset generation', 'Feature freshness monitoring alerts'],
    },
    {
      name: 'Automated Retraining Pipeline with Airflow',
      description: 'An Airflow DAG orchestrating daily model retraining: data validation → feature engineering → training → evaluation → conditional registry push.',
      techStack: ['Python', 'Airflow', 'MLflow', 'DVC', 'Docker'],
      difficulty: 'Intermediate',
      resumeImpact: 'End-to-end automated retraining is the core MLOps deliverable — the project proves you can ship it.',
      estimatedTime: '3 weeks',
      features: ['Great Expectations data validation gate', 'DVC-tracked data and model versioning', 'Conditional registry promotion on metric threshold', 'Slack notification on pipeline success/failure'],
    },
    {
      name: 'Multi-Model Serving Gateway',
      description: 'A FastAPI gateway routing prediction requests across 4 model variants with A/B traffic splitting and per-model Prometheus metrics.',
      techStack: ['Python', 'FastAPI', 'Docker', 'Prometheus', 'Grafana'],
      difficulty: 'Intermediate',
      resumeImpact: 'Multi-model routing with observability is exactly what senior ML Engineer interviews probe for.',
      estimatedTime: '2 weeks',
      features: ['Weighted A/B traffic routing per model', 'Prometheus latency/throughput/error metrics per model', 'Grafana dashboard with model comparison panels', 'Automatic canary rollback on error spike'],
    },
    {
      name: 'Model Drift Detection Service',
      description: 'An Evidently AI-powered drift monitoring service comparing production prediction distributions to training baselines, alerting on significant drift.',
      techStack: ['Python', 'Evidently AI', 'FastAPI', 'PostgreSQL', 'Slack API'],
      difficulty: 'Intermediate',
      resumeImpact: 'Production model monitoring is the most common gap in ML portfolios — filling it is a strong differentiator.',
      estimatedTime: '2 weeks',
      features: ['Feature distribution drift via KS test and PSI', 'Prediction drift detection', 'Automated weekly HTML drift reports', 'Slack alert when drift exceeds configured threshold'],
    },
    {
      name: 'ONNX Model Optimization Pipeline',
      description: 'A pipeline converting PyTorch models to ONNX, applying quantization, and benchmarking latency vs accuracy trade-offs.',
      techStack: ['Python', 'PyTorch', 'ONNX Runtime', 'FastAPI'],
      difficulty: 'Intermediate',
      resumeImpact: 'Model optimization for inference is a specialized, high-value skill for roles requiring low-latency serving.',
      estimatedTime: '2 weeks',
      features: ['PyTorch to ONNX export pipeline', 'INT8 post-training quantization', 'Latency benchmarking (p50/p95/p99) before/after', 'Accuracy degradation report per optimization level'],
    },
    {
      name: 'Hyperparameter Optimization Platform',
      description: 'An Optuna-based HPO system running distributed trials on a Ray cluster with experiment comparison and best-trial export.',
      techStack: ['Python', 'Optuna', 'Ray Tune', 'MLflow'],
      difficulty: 'Intermediate',
      resumeImpact: 'Distributed HPO at scale is a concrete demonstration of ML engineering beyond single-machine training.',
      estimatedTime: '3 weeks',
      features: ['Optuna study with PostgreSQL backend', 'Ray distributed trial execution', 'MLflow-logged trial results', 'Pruning via MedianPruner for early stopping of poor trials'],
    },
    {
      name: 'NLP Pipeline with spaCy and Custom NER',
      description: 'A production NLP pipeline with custom Named Entity Recognition trained on domain-specific annotations, served via FastAPI.',
      techStack: ['Python', 'spaCy', 'Prodigy/Label Studio', 'FastAPI'],
      difficulty: 'Intermediate',
      resumeImpact: 'Custom NER for a domain-specific entity type (medical, legal, fintech) is a high-value, rare skill.',
      estimatedTime: '3 weeks',
      features: ['Custom entity annotation with Label Studio', 'spaCy NER training pipeline', 'F1 per entity type evaluation', 'FastAPI batch inference endpoint with span offsets'],
    },
    {
      name: 'Tabular Data AutoML Benchmarker',
      description: 'A benchmarking harness comparing AutoML libraries (AutoGluon, FLAML, H2O AutoML) on multiple datasets with runtime/accuracy metrics.',
      techStack: ['Python', 'AutoGluon', 'FLAML', 'H2O AutoML', 'MLflow'],
      difficulty: 'Intermediate',
      resumeImpact: 'Comparative framework evaluation shows engineering maturity — choosing the right tool, not just the most popular one.',
      estimatedTime: '2 weeks',
      features: ['Standardized evaluation harness across 5 datasets', 'Runtime, AUC, and RMSE comparison matrix', 'MLflow-logged results for reproducibility', 'Markdown benchmark report auto-generated'],
    },
    {
      name: 'Graph Neural Network for Fraud Detection',
      description: 'A GNN-based fraud detector modelling transaction networks where nodes are accounts and edges are transfers.',
      techStack: ['Python', 'PyTorch Geometric', 'FastAPI'],
      difficulty: 'Intermediate',
      resumeImpact: 'GNN application to fraud is a cutting-edge, interview-ready topic at fintech companies.',
      estimatedTime: '4 weeks',
      features: ['Transaction graph construction from raw data', 'GraphSAGE/GAT-based node classification', 'AUC-ROC, precision@k evaluation', 'FastAPI inference on live transaction subgraphs'],
    },
    {
      name: 'Multi-Label Text Classification Service',
      description: 'A multi-label classifier for support tickets (assigning multiple category tags) using BERT, with threshold tuning per label.',
      techStack: ['Python', 'HuggingFace', 'scikit-learn', 'FastAPI'],
      difficulty: 'Intermediate',
      resumeImpact: 'Multi-label classification with per-label threshold tuning is significantly more complex than single-label tasks.',
      estimatedTime: '2 weeks',
      features: ['BERT fine-tuning with BCEWithLogitsLoss', 'Per-label threshold optimization via F1', 'Calibration plot per label', 'FastAPI /classify endpoint with confidence per tag'],
    },
    {
      name: 'Model Explainability Dashboard',
      description: 'A Streamlit dashboard providing SHAP, LIME, and counterfactual explanations for any sklearn or XGBoost model loaded at runtime.',
      techStack: ['Python', 'SHAP', 'LIME', 'DiCE-ML', 'Streamlit'],
      difficulty: 'Intermediate',
      resumeImpact: 'Explainability tooling is mandated by RBI/SEBI for financial ML models — high-value skill in regulated domains.',
      estimatedTime: '2 weeks',
      features: ['SHAP waterfall, force, and summary plots', 'LIME local explanation per prediction', 'DiCE counterfactual: "what would change this prediction"', 'Side-by-side model comparison mode'],
    },

    // Advanced (8)
    {
      name: 'End-to-End MLOps Platform on Kubernetes',
      description: 'A full MLOps stack on EKS: Airflow for orchestration, MLflow for tracking, KServe for serving, and Evidently for monitoring — all deployed via Helm.',
      techStack: ['Python', 'Kubernetes', 'Airflow', 'MLflow', 'KServe', 'Evidently'],
      difficulty: 'Advanced',
      resumeImpact: 'The single most comprehensive ML Engineer portfolio project possible — covers every MLOps dimension.',
      estimatedTime: '8 weeks',
      features: ['Helm-deployed MLOps stack on EKS', 'Airflow DAG: data validation → training → registry push', 'KServe InferenceService with HPA autoscaling', 'Evidently drift reports fed into Airflow retraining trigger'],
    },
    {
      name: 'Real-Time Feature Engineering Pipeline',
      description: 'A Flink/Kafka Streams pipeline computing real-time features (velocity, recency, frequency) for a fraud model within 100ms.',
      techStack: ['Python', 'Apache Flink', 'Kafka', 'Redis', 'FastAPI'],
      difficulty: 'Advanced',
      resumeImpact: 'Real-time feature computation under latency constraints is a senior ML infrastructure skill.',
      estimatedTime: '6 weeks',
      features: ['Flink streaming job computing sliding window aggregations', 'Feature results written to Redis for sub-millisecond online serving', 'Schema registry for Kafka message contracts', 'Latency SLO: 95th percentile feature freshness under 500ms'],
    },
    {
      name: 'Distributed Model Training with PyTorch DDP',
      description: 'A multi-GPU distributed training pipeline using PyTorch DDP, with gradient checkpointing, mixed precision, and efficient checkpoint management.',
      techStack: ['Python', 'PyTorch DDP', 'NCCL', 'AWS EC2 GPU'],
      difficulty: 'Advanced',
      resumeImpact: 'Distributed training experience is required for every AI lab and large-scale ML team role.',
      estimatedTime: '5 weeks',
      features: ['DistributedDataParallel training across 4 GPUs', 'Gradient accumulation + AMP mixed precision', 'Efficient checkpoint sharding with safetensors', 'Linear learning rate warmup scaling with device count'],
    },
    {
      name: 'Shadow Mode A/B Testing Framework for Models',
      description: 'A production traffic shadowing framework running a challenger model alongside the champion, comparing predictions without affecting users.',
      techStack: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Prometheus'],
      difficulty: 'Advanced',
      resumeImpact: 'Shadow mode testing is the gold-standard approach for risk-free model rollout — rarely built but frequently asked about.',
      estimatedTime: '4 weeks',
      features: ['Async shadow prediction dispatch (zero latency impact)', 'Prediction agreement rate tracking', 'Statistical significance test for challenger superiority', 'Automated promotion recommendation on threshold breach'],
    },
    {
      name: 'ML Model Governance & Lineage Platform',
      description: 'A system tracking full model lineage: training data version → code commit → hyperparameters → model artifact → deployments → business metrics.',
      techStack: ['Python', 'MLflow', 'DVC', 'PostgreSQL', 'FastAPI'],
      difficulty: 'Advanced',
      resumeImpact: 'Model governance is mandated by financial regulators in India — building a platform for it is a premium differentiator.',
      estimatedTime: '5 weeks',
      features: ['Full lineage graph: data → code → model → deployment', 'Immutable audit log of every model promotion decision', 'Impact analysis: which deployments use a given dataset version', 'Regulatory-ready model card export (PDF)'],
    },
    {
      name: 'Continual Learning System with Concept Drift Adaptation',
      description: 'A system that detects concept drift and triggers targeted model updates on only the drifted segments without full retraining.',
      techStack: ['Python', 'River (online ML)', 'Kafka', 'PostgreSQL', 'MLflow'],
      difficulty: 'Advanced',
      resumeImpact: 'Continual learning without catastrophic forgetting is a genuinely hard ML engineering problem — rare in portfolios.',
      estimatedTime: '6 weeks',
      features: ['River-based online learning for low-latency adaptation', 'ADWIN drift detector per feature stream', 'Selective retraining on drifted cohort only', 'A/B comparison of updated vs stable model segments'],
    },
    {
      name: 'LLM Fine-Tuning Pipeline with LoRA + Evaluation',
      description: 'A LoRA fine-tuning pipeline for a domain-specific task (code generation, support QA), with automated BLEU/BERTScore/custom eval on every run.',
      techStack: ['Python', 'PEFT', 'LoRA', 'vLLM', 'MLflow'],
      difficulty: 'Advanced',
      resumeImpact: 'Fine-tuning infrastructure with rigorous evaluation is among the most valued and least common ML portfolio items.',
      estimatedTime: '6 weeks',
      features: ['Dataset preparation and tokenization pipeline', 'LoRA fine-tuning via HuggingFace PEFT', 'BLEU, BERTScore, and task-specific eval on every run', 'vLLM serving of the merged fine-tuned model'],
    },
    {
      name: 'AutoML Pipeline Builder (No-Code UI)',
      description: 'A Streamlit-based tool that lets non-ML engineers upload a CSV, select a target, and get a trained, evaluated model with a downloadable ONNX artifact.',
      techStack: ['Python', 'AutoGluon', 'Streamlit', 'ONNX', 'FastAPI'],
      difficulty: 'Advanced',
      resumeImpact: 'Building tools that democratize ML for non-engineers shows product thinking alongside engineering depth.',
      estimatedTime: '5 weeks',
      features: ['Automated EDA with data quality report', 'AutoGluon-powered model selection and training', 'Leaderboard with all tried models ranked by metric', 'One-click ONNX export + FastAPI serving code generation'],
    },
  ],
  implementationGuides: [
    {
      projectName: 'Automated Retraining Pipeline with Airflow',
      folderStructure: `ml-retraining-pipeline/
├── dags/
│   └── retraining_dag.py
├── src/
│   ├── data/
│   │   ├── validate.py
│   │   └── features.py
│   ├── training/
│   │   ├── train.py
│   │   └── evaluate.py
│   └── registry/
│       └── promote.py
├── tests/
│   └── test_dag.py
├── dvc.yaml
├── .dvc/
├── docker-compose.yml
└── requirements.txt`,
      keyFiles: [
        { file: 'dags/retraining_dag.py', purpose: 'Airflow DAG with TaskFlow API: validate → feature_eng → train → evaluate → promote tasks with XCom handoff.' },
        { file: 'src/data/validate.py', purpose: 'Great Expectations suite checking row count, schema, null rates, and distribution bounds — raises AirflowSkipException on failure.' },
        { file: 'src/registry/promote.py', purpose: 'Compares challenger AUC against current production champion in MLflow registry — promotes only if improvement exceeds threshold.' },
      ],
      steps: [
        'Define DVC pipeline stages: pull data → validate → featurize → train → evaluate. Each stage tracked with dvc.yaml.',
        'Implement Airflow DAG using the TaskFlow API (@task decorator) for clean Python function tasks.',
        'Add Great Expectations validation checkpoint as the first task — fail fast on data quality issues.',
        'Implement the training task logging all params, metrics, and the model artifact to MLflow.',
        'Build the promote task: query MLflow registry for the current Production model, compare AUC, promote challenger if it wins.',
        'Add a Slack notification task (triggered on success or failure) using the SlackWebhookOperator.',
        'Containerize Airflow with Docker Compose including the webserver, scheduler, and a local MLflow server.',
        'Write a DAG unit test using pytest verifying task ordering and that the promote task handles tie/loss correctly.',
      ],
      deploymentNotes: 'Deploy Airflow on Kubernetes using the official Helm chart with the KubernetesExecutor so each task runs in an isolated pod. Use S3 for MLflow artifact storage and RDS PostgreSQL as the Airflow metadata DB. Mount DVC remote config as a Kubernetes secret.',
    },
    {
      projectName: 'End-to-End MLOps Platform on Kubernetes',
      folderStructure: `mlops-platform/
├── helm/
│   ├── airflow/
│   │   └── values.yaml
│   ├── mlflow/
│   │   └── values.yaml
│   └── kserve/
│       └── inferenceservice.yaml
├── dags/
│   └── full_pipeline_dag.py
├── src/
│   ├── training/
│   ├── serving/
│   └── monitoring/
├── k8s/
│   ├── namespaces.yaml
│   └── rbac.yaml
├── terraform/
│   └── eks.tf
└── README.md`,
      keyFiles: [
        { file: 'helm/kserve/inferenceservice.yaml', purpose: 'KServe InferenceService CRD deploying the MLflow-registered model with HPA scaling from 1 to 10 pods on CPU utilization.' },
        { file: 'src/monitoring/drift_trigger.py', purpose: 'Evidently drift report generator running as a CronJob, writing results to PostgreSQL and triggering Airflow DAG via REST API when drift threshold breached.' },
        { file: 'terraform/eks.tf', purpose: 'EKS cluster with a GPU node pool (for training), a CPU spot node pool (for serving), and Karpenter autoscaler.' },
      ],
      steps: [
        'Provision EKS cluster with Terraform: two node groups — GPU on-demand for training, CPU spot for inference.',
        'Deploy Airflow via Helm with KubernetesExecutor — training pods request GPU resources via tolerations.',
        'Deploy MLflow server with PostgreSQL backend and S3 artifact store.',
        'Deploy KServe and create an InferenceService pointing to the MLflow model URI.',
        'Configure HPA on the InferenceService targeting 60% CPU utilization, min 1 / max 10 replicas.',
        'Deploy Evidently drift monitoring as a Kubernetes CronJob running nightly.',
        'Wire the drift job to trigger the Airflow retraining DAG via the Airflow REST API when PSI > 0.25.',
        'Deploy Prometheus + Grafana via kube-prometheus-stack; create a Grafana dashboard covering training duration, serving latency, and drift score over time.',
      ],
      deploymentNotes: 'The full stack is designed to run on EKS. For a local demo, replace EKS with k3d or kind, MLflow artifact store with MinIO, and GPU node pool with CPU-only training. Document both environments in the README so interviewers can run it locally.',
    },
    {
      projectName: 'Feature Store with Feast + Redis',
      folderStructure: `feast-feature-store/
├── feature_repo/
│   ├── feature_store.yaml
│   ├── entities.py
│   ├── feature_views.py
│   └── feature_services.py
├── src/
│   ├── ingestion/
│   │   └── backfill.py
│   ├── training/
│   │   └── generate_dataset.py
│   └── serving/
│       └── online_serving.py
├── tests/
│   └── test_point_in_time.py
└── docker-compose.yml`,
      keyFiles: [
        { file: 'feature_repo/feature_views.py', purpose: 'Feast FeatureView definitions mapping entity keys to feature columns with TTL and batch source configuration.' },
        { file: 'src/training/generate_dataset.py', purpose: 'Uses feast.HistoricalDataset to generate point-in-time correct training datasets from an entity-timestamp DataFrame.' },
        { file: 'tests/test_point_in_time.py', purpose: 'Verifies point-in-time correctness: features joined must reflect values as of the event timestamp, not current values.' },
      ],
      steps: [
        'Define entities (e.g., customer_id) and feature views sourced from a PostgreSQL offline store.',
        'Configure feature_store.yaml with offline store (PostgreSQL), online store (Redis), and registry (local file or S3).',
        'Run feast apply to register all feature views and entities.',
        'Backfill offline store features from historical data using a custom ingestion script.',
        'Run feast materialize to push current feature values from offline to online Redis store.',
        'Implement the training dataset generator using get_historical_features with event timestamps.',
        'Implement the online serving path using get_online_features for sub-millisecond feature lookup.',
        'Write a test that deliberately creates a data leakage scenario and verifies the point-in-time join prevents it.',
      ],
      deploymentNotes: 'Deploy the Feast registry to S3 for team sharing, offline store on RDS PostgreSQL, and online store on ElastiCache Redis. Run materialization as a daily Airflow task, not on-demand, to avoid latency spikes during serving.',
    },
  ],
  resumeImpact: [
    'Automated retraining pipelines prove you can reduce model maintenance to zero manual effort — the core MLOps promise.',
    'Feature store projects directly address training-serving skew — a question asked at every senior ML Engineer interview.',
    'Distributed training and LLM fine-tuning experience places you in the top 5% of ML portfolio breadth.',
    'Drift monitoring with automated retraining triggers is the missing piece in most ML portfolios — filling it stands out immediately.',
  ],
  interviewTalkingPoints: [
    'For the retraining pipeline, explain idempotency: what happens if the Airflow task runs twice due to a retry?',
    'For the feature store, explain the exact mechanism of point-in-time correctness and what breaks without it.',
    'For KServe deployments, explain how HPA scaling works and what metric drives it in your setup.',
    'For shadow mode testing, explain why you must correct for p-value inflation when running multiple comparison windows.',
  ],
  faqs: [
    { question: 'What is the difference between an ML project and an MLOps project?', answer: 'An ML project focuses on the model: data preparation, training, and evaluation. An MLOps project focuses on the system around the model: pipelines that automate retraining, infrastructure that serves predictions reliably at scale, and monitoring that detects when the model degrades. The advanced projects on this list are MLOps projects — building them proves production readiness beyond notebook experiments.' },
    { question: 'Is Airflow required for ML pipelines, or can I use other tools?', answer: 'Airflow is the most commonly deployed orchestrator in Indian data and ML teams. Alternatives include Prefect (simpler Python-native API), Dagster (asset-based, growing adoption), and Kubeflow Pipelines (Kubernetes-native). For portfolio purposes, Airflow knowledge is the safest choice because it appears in the most job descriptions. Mention your framework choice awareness in interviews.' },
    { question: 'How important is Kubernetes for ML Engineering roles?', answer: 'Very important at product companies and AI labs. Companies running multiple ML models in production almost universally use Kubernetes for serving. You do not need to be a Kubernetes expert, but you must be able to write deployment manifests, understand HPA scaling, and debug pod failures. The End-to-End MLOps Platform project covers exactly this.' },
    { question: 'Should I focus on the beginner or advanced projects first?', answer: 'Build 2-3 beginner projects to get comfortable with the training-to-serving pattern, then go directly to the Automated Retraining Pipeline and Feature Store projects — these two intermediate projects are what most senior ML Engineer job descriptions specifically describe. The advanced Kubernetes-based platform project is for staff-level roles.' },
    { question: 'What ONNX optimization gains can I realistically claim in my README?', answer: 'For INT8 quantization on typical tabular models: 2-4x inference speedup, 3-4x model size reduction, with less than 0.5% accuracy degradation. For vision models: 2-3x speedup. Always run the benchmark yourself and document the exact numbers — "approximately 3x faster" with a benchmark table beats any generic claim.' },
    { question: 'Which ML project best demonstrates readiness for an ML Engineer role at a unicorn?', answer: 'The End-to-End MLOps Platform on Kubernetes and the Shadow Mode A/B Testing Framework together cover every dimension unicorn ML teams evaluate: pipeline automation, reliable serving, safe rollout strategy, and observability. If you can walk through both in an interview and explain every design decision, you are prepared for senior ML Engineer interviews at Swiggy, Meesho, and Zepto.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/ml-engineer-roadmap-2026', 'ML Engineer Roadmap 2026', 'The 10-month structured path these projects are designed to complement.'),
    interviewLink('/resources/interview-questions/machine-learning-engineer', 'ML Engineer Interview Questions', 'MLOps, system design, and Python questions matching these project patterns.'),
    tutorialLink('/resources/tutorials/python', 'Python Tutorial', 'Core Python engineering skills underlying every ML project.'),
    courseLink('/courses/python-ai-aws-devops-combo', 'Python + AI + AWS Combo Course', 'Structured ML Engineering training with hands-on pipeline projects.'),
    { title: 'AI Projects', href: '/resources/projects/ai-projects', description: 'LLM and RAG projects that complement classical ML engineering skills.', category: 'Projects', icon: '🛠️' },
    { title: 'Data Science Projects', href: '/resources/projects/data-science-projects', description: 'Statistical and analytical projects forming the foundation of ML engineering.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ ML Engineering Projects for Your Portfolio (2026) — MLOps, Pipelines, Serving',
    description: 'Build 30+ production ML projects: automated retraining pipelines, feature stores, model serving gateways, drift monitoring, and Kubernetes-based MLOps platforms. Full guides for 2026 hiring.',
    keywords: ['ml engineering projects 2026', 'mlops project ideas', 'machine learning portfolio projects india', 'airflow mlflow project', 'feature store feast project'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 7. DATA SCIENCE PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const dataScienceProjects: ProjectCategory = {
  slug: 'data-science-projects',
  title: 'Data Science Projects',
  description:
    'End-to-end data science projects covering EDA, statistical analysis, A/B testing, ML modeling, and business storytelling — the full skill set data science interviews evaluate in 2026.',
  icon: ICONS.dataScience,
  color: '#EC4899',
  difficulty: 'All Levels',
  techStack: ['Python', 'Pandas', 'scikit-learn', 'Plotly', 'Streamlit', 'PostgreSQL', 'Tableau/Metabase'],
  readTime: '16 min read',
  lastUpdated: 'December 2025',
  projects: [
    // Beginner (10)
    { name: 'E-Commerce Sales EDA', description: 'Comprehensive exploratory analysis on a real e-commerce dataset revealing revenue drivers, seasonal patterns, and customer segments.', techStack: ['Python', 'Pandas', 'Plotly', 'Seaborn'], difficulty: 'Beginner', resumeImpact: 'Every data science interview starts with "walk me through an EDA you did" — this project gives you a compelling answer.', estimatedTime: '1 week', features: ['Revenue by category, region, and time', 'RFM customer segmentation', 'Basket size distribution analysis', 'Interactive Plotly dashboard published as HTML'] },
    { name: 'Movie Recommendation System', description: 'A hybrid recommender using collaborative filtering (SVD) and content-based similarity with a Streamlit UI for live recommendations.', techStack: ['Python', 'Surprise', 'scikit-learn', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'Recommenders are one of the most asked-about ML domains — having built one gives you a concrete answer.', estimatedTime: '1 week', features: ['SVD collaborative filtering on MovieLens', 'TF-IDF content similarity fallback', 'Cold-start handling for new users', 'Interactive Streamlit rating → recommend loop'] },
    { name: 'COVID-19 Data Analysis & Visualization', description: 'A geospatial and temporal analysis of pandemic spread patterns with country-level comparisons and intervention impact analysis.', techStack: ['Python', 'Pandas', 'Plotly', 'GeoPandas'], difficulty: 'Beginner', resumeImpact: 'Public health data analysis demonstrates handling of real, messy, time-sensitive datasets.', estimatedTime: '1 week', features: ['7-day rolling average trend analysis', 'Choropleth map of case density', 'Correlation of policy interventions with case reduction', 'Excess mortality estimation'] },
    { name: 'Credit Card Fraud Detection', description: 'An imbalanced classification pipeline detecting fraudulent transactions using SMOTE oversampling and cost-sensitive learning.', techStack: ['Python', 'scikit-learn', 'imbalanced-learn', 'XGBoost'], difficulty: 'Beginner', resumeImpact: 'Imbalanced classification is the real-world default in fraud, medical, and churn domains — knowing how to handle it is expected.', estimatedTime: '1 week', features: ['SMOTE + Tomek Links for class balancing', 'Cost-sensitive XGBoost with class_weight', 'Precision@k and Average Precision evaluation', 'Threshold optimization for business cost minimization'] },
    { name: 'IPL Cricket Statistics Dashboard', description: 'An interactive analysis of IPL match data with batting/bowling performance metrics, venue effects, and win predictors.', techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'Domain-specific analysis for a relatable Indian context — immediately engaging for any Indian interviewer.', estimatedTime: '1 week', features: ['Batsman strike rate and average over seasons', 'Bowler economy and wicket rate analysis', 'Venue win percentage heat map', 'Head-to-head team comparison'] },
    { name: 'Hospital Readmission Prediction', description: 'A 30-day hospital readmission risk model on the Diabetes 130 dataset with calibrated probabilities and a clinical explanation report.', techStack: ['Python', 'scikit-learn', 'SHAP', 'Pandas'], difficulty: 'Beginner', resumeImpact: 'Healthcare ML projects demonstrate statistical rigor and calibration awareness beyond standard accuracy chasing.', estimatedTime: '1 week', features: ['Missing value imputation strategies compared', 'Logistic regression with calibration plot', 'SHAP summary for clinical feature importance', 'Brier score and reliability diagram evaluation'] },
    { name: 'Stock Price Trend Analysis', description: 'A technical analysis and forecasting project on Nifty 50 stocks using moving averages, RSI, and an ARIMA baseline.', techStack: ['Python', 'yfinance', 'statsmodels', 'Plotly'], difficulty: 'Beginner', resumeImpact: 'Finance domain analysis with time series methods is broadly relevant and easy to demo in any interview.', estimatedTime: '1 week', features: ['OHLCV data collection via yfinance', 'SMA, EMA, RSI, Bollinger Bands computation', 'ARIMA forecast with confidence intervals', 'Candlestick chart with indicators overlaid'] },
    { name: 'Customer Lifetime Value Segmentation', description: 'An RFM + CLV analysis segmenting customers into actionable tiers with revenue projections per segment.', techStack: ['Python', 'Pandas', 'lifetimes', 'Plotly'], difficulty: 'Beginner', resumeImpact: 'CLV and RFM segmentation is one of the most universally useful data science skills in any B2C company.', estimatedTime: '1 week', features: ['RFM score calculation and percentile bucketing', 'BG/NBD CLV model using lifetimes library', 'Revenue projection per customer tier', 'Segment-specific retention recommendations'] },
    { name: 'Natural Language Processing on News Articles', description: 'Topic modeling, sentiment analysis, and keyword extraction on a news corpus with a searchable Streamlit interface.', techStack: ['Python', 'spaCy', 'BERTopic', 'Streamlit'], difficulty: 'Beginner', resumeImpact: 'NLP on unstructured text is an expected core skill for data science roles dealing with text data.', estimatedTime: '1 week', features: ['BERTopic topic modeling with dynamic topic visualization', 'Named entity extraction with spaCy', 'Sentiment trend over time by topic', 'Streamlit article search and topic explorer'] },
    { name: 'Real Estate Price Prediction Dashboard', description: 'A property price predictor for Indian metros using location features, trained and served via a Streamlit interactive form.', techStack: ['Python', 'scikit-learn', 'Streamlit', 'Folium'], difficulty: 'Beginner', resumeImpact: 'A well-executed India-specific prediction project that resonates immediately in domestic interviews.', estimatedTime: '1 week', features: ['Location-encoded feature engineering', 'Gradient boosting price prediction', 'Price heatmap on Folium interactive map', 'Streamlit form for custom property valuation'] },

    // Intermediate (12)
    { name: 'A/B Test Design and Analysis Framework', description: 'A complete A/B testing toolkit covering experiment design (power analysis), data collection simulation, and statistical significance testing with multiple comparison correction.', techStack: ['Python', 'scipy', 'Pandas', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'A/B testing rigor is the most commonly evaluated skill in product data science interviews at any consumer tech company.', estimatedTime: '2 weeks', features: ['Sample size calculator (power analysis)', 'Simulated experiment runner', 'Z-test, t-test, and Mann-Whitney U comparison', 'Benjamini-Hochberg correction for multiple comparisons'] },
    { name: 'Supply Chain Demand Forecasting Pipeline', description: 'A multi-SKU demand forecasting system with hierarchical reconciliation, uncertainty quantification, and a business KPI dashboard.', techStack: ['Python', 'statsforecast', 'Pandas', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'Supply chain analytics is a massive, high-paying vertical — demonstrating it directly opens doors in e-commerce and FMCG.', estimatedTime: '3 weeks', features: ['MSTL + ETS ensemble forecasting per SKU', 'Hierarchical reconciliation (product → category → total)', 'Prediction interval estimation', 'Inventory KPI dashboard: stockout rate, excess inventory cost'] },
    { name: 'User Funnel & Retention Analysis', description: 'A product analytics project measuring funnel conversion, cohort retention, and identifying the highest-impact drop-off points.', techStack: ['Python', 'Pandas', 'PostgreSQL', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'Funnel and cohort analysis is the most practically useful data science skill at any product company.', estimatedTime: '2 weeks', features: ['Multi-step funnel conversion rate per cohort', 'Weekly/monthly cohort retention heatmap', 'Drop-off attribution by user segment', 'Statistical test for funnel improvement significance'] },
    { name: 'Causal Inference: Uplift Modeling', description: 'An uplift modeling project estimating the causal effect of a marketing treatment on conversion using T-learner and S-learner approaches.', techStack: ['Python', 'causalml', 'XGBoost', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'Causal inference differentiates senior data scientists from those who only correlate — increasingly asked in interviews.', estimatedTime: '3 weeks', features: ['T-learner and S-learner uplift models', 'Qini coefficient evaluation', 'Treatment targeting recommendations by CATE decile', 'Comparison of treated vs control conversion rates'] },
    { name: 'Geospatial Retail Site Selection Analysis', description: 'A data-driven framework for optimal retail outlet placement using footfall, demographic, and competitive density data.', techStack: ['Python', 'GeoPandas', 'scikit-learn', 'Folium'], difficulty: 'Intermediate', resumeImpact: 'Geospatial analytics for business decisions is valued at every consumer goods and retail company.', estimatedTime: '3 weeks', features: ['Catchment area analysis with drive-time polygons', 'Competitor density score calculation', 'Demographic scoring from census data', 'Site ranking model with interactive Folium map'] },
    { name: 'Social Media Influencer Analytics Platform', description: 'A platform analyzing influencer engagement quality, audience authenticity, and campaign ROI for brand partnerships.', techStack: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Twitter API'], difficulty: 'Intermediate', resumeImpact: 'Digital marketing analytics is a large, growing hiring vertical — this project maps directly to martech roles.', estimatedTime: '3 weeks', features: ['Engagement rate vs follower count anomaly detection', 'Fake follower estimation via engagement pattern analysis', 'Campaign reach and earned media value calculation', 'Influencer comparison dashboard in Streamlit'] },
    { name: 'Churn Cohort Analysis with Intervention Modeling', description: 'A churn analysis going beyond prediction to simulate the revenue impact of targeted retention interventions on specific customer cohorts.', techStack: ['Python', 'scikit-learn', 'Pandas', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'Connecting model output to business revenue impact is what separates insight-driven from technically-adequate data scientists.', estimatedTime: '2 weeks', features: ['Survival analysis (Kaplan-Meier, Cox PH)', 'Intervention simulation: contact top-N churners monthly', 'Revenue impact model per intervention budget', 'ROI curve showing optimal intervention investment'] },
    { name: 'Financial Fraud Network Analysis', description: 'A network analysis revealing fraud rings in transaction data using community detection and graph centrality metrics.', techStack: ['Python', 'NetworkX', 'PyVis', 'Pandas'], difficulty: 'Intermediate', resumeImpact: 'Network/graph analytics for fraud is a specialized fintech skill that differentiates portfolios immediately.', estimatedTime: '3 weeks', features: ['Transaction network graph construction', 'Louvain community detection for fraud ring identification', 'Betweenness centrality for key node identification', 'Interactive PyVis network visualization'] },
    { name: 'Dynamic Pricing Analytics Engine', description: 'A price elasticity modeling project computing optimal dynamic prices that maximize revenue per product segment.', techStack: ['Python', 'scikit-learn', 'Pandas', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'Dynamic pricing is a core data science application in e-commerce, ride-sharing, and hospitality.', estimatedTime: '3 weeks', features: ['Price elasticity estimation via regression', 'Revenue optimization via elasticity curve', 'Segment-specific pricing recommendations', 'Competitor price monitoring integration'] },
    { name: 'Predictive HR Analytics: Flight Risk Model', description: 'A people analytics model predicting employee attrition risk and identifying the most impactful retention factors.', techStack: ['Python', 'XGBoost', 'SHAP', 'Streamlit'], difficulty: 'Intermediate', resumeImpact: 'HR analytics is a growing data science vertical — relevant at every large company with a significant workforce.', estimatedTime: '2 weeks', features: ['Attrition risk scoring model', 'SHAP-based top-3 risk factors per employee', 'Department-level retention risk heatmap', 'Manager intervention recommendation report'] },
    { name: 'Product Search Ranking Optimization', description: 'A learn-to-rank model improving product search result ordering based on click and purchase signals.', techStack: ['Python', 'LightGBM (LambdaRank)', 'Pandas', 'FastAPI'], difficulty: 'Intermediate', resumeImpact: 'Learning-to-rank is the core algorithm behind every e-commerce search — a high-value specialized skill.', estimatedTime: '3 weeks', features: ['Click/purchase signal feature engineering', 'LambdaRank training with NDCG optimization', 'NDCG@10 offline evaluation', 'A/B comparison framework for ranking change'] },
    { name: 'Survey Analysis & NPS Driver Identification', description: 'An NPS analysis identifying the strongest drivers of promoter vs detractor sentiment using text + rating features.', techStack: ['Python', 'Pandas', 'scikit-learn', 'spaCy', 'Plotly'], difficulty: 'Intermediate', resumeImpact: 'Customer voice analysis (NPS, CSAT) is expected in any consumer-facing product data science role.', estimatedTime: '2 weeks', features: ['NPS driver regression on text + rating features', 'Topic extraction from open-text verbatims', 'Promoter vs detractor language comparison', 'Executive summary report generation'] },

    // Advanced (8)
    { name: 'Experimentation Platform with Bayesian Analysis', description: 'A full A/B testing platform using Bayesian inference for real-time experiment monitoring and early stopping without inflating Type I error.', techStack: ['Python', 'PyMC', 'FastAPI', 'PostgreSQL', 'Streamlit'], difficulty: 'Advanced', resumeImpact: 'Bayesian experimentation is the gold standard at data-mature companies (Booking.com, Spotify, Swiggy) — building it is a strong signal.', estimatedTime: '5 weeks', features: ['Bayesian conjugate update for conversion rates', 'Expected loss and probability of being best metrics', 'Early stopping with ROPE (Region of Practical Equivalence)', 'Real-time experiment monitoring dashboard'] },
    { name: 'Multi-Touch Attribution Model', description: 'A data-driven attribution model (Shapley values) allocating conversion credit across marketing touchpoints for budget optimization.', techStack: ['Python', 'scikit-learn', 'Pandas', 'Plotly'], difficulty: 'Advanced', resumeImpact: 'Attribution modeling is required at every D2C and B2C company spending on paid marketing — niche and valuable.', estimatedTime: '4 weeks', features: ['Shapley value attribution via coalitional game theory', 'Markov chain-based attribution baseline', 'Budget reallocation recommendation engine', 'Channel ROI comparison dashboard'] },
    { name: 'Real-Time Recommendation Engine with Bandit', description: 'A contextual bandit-based recommendation system updating explore-exploit decisions in real time based on observed reward.', techStack: ['Python', 'Vowpal Wabbit', 'FastAPI', 'Redis'], difficulty: 'Advanced', resumeImpact: 'Bandit algorithms for online learning are the recommendation architecture at Netflix, YouTube, and Swiggy — rare and valued.', estimatedTime: '5 weeks', features: ['Contextual LinUCB bandit implementation', 'Real-time reward signal ingestion via Redis', 'Thompson Sampling comparison', 'Regret curve visualization vs greedy baseline'] },
    { name: 'Large-Scale EDA Automation Tool', description: 'A tool that ingests any CSV/Parquet dataset and auto-generates a full EDA report (distributions, correlations, outliers, recommendations) as HTML.', techStack: ['Python', 'Pandas', 'Plotly', 'Great Expectations', 'Jinja2'], difficulty: 'Advanced', resumeImpact: 'Building tooling that accelerates other data scientists\' workflows demonstrates platform thinking and engineering maturity.', estimatedTime: '4 weeks', features: ['Schema inference and type detection', 'Distribution plots, correlation matrix, and outlier flags', 'Great Expectations profiling integration', 'Parameterized Jinja2 HTML report generation'] },
    { name: 'Propensity Modeling for Marketing Targeting', description: 'A full propensity-to-purchase model with IPW debiasing, calibration, and a Streamlit campaign targeting simulator.', techStack: ['Python', 'XGBoost', 'scikit-learn', 'Streamlit'], difficulty: 'Advanced', resumeImpact: 'Propensity modeling with bias correction is the expected standard for senior data scientists in growth and marketing teams.', estimatedTime: '4 weeks', features: ['Inverse probability weighting (IPW) for selection bias correction', 'Platt scaling calibration', 'Decile gain chart and Kolmogorov-Smirnov lift', 'Campaign simulator: budget → expected conversions'] },
    { name: 'Synthetic Data Generation with Statistical Fidelity', description: 'A platform generating statistically faithful synthetic tabular data using CTGAN and SDV, with fidelity and privacy metrics.', techStack: ['Python', 'SDV', 'CTGAN', 'Pandas'], difficulty: 'Advanced', resumeImpact: 'Synthetic data is mandated in regulated environments (BFSI, healthcare) — building a generation platform is premium niche.', estimatedTime: '4 weeks', features: ['CTGAN training on sensitive tabular data', 'Statistical fidelity metrics: Wasserstein distance, correlation preservation', 'Privacy evaluation: DCR (Distance to Closest Record)', 'Downstream ML utility test: model trained on synthetic vs real'] },
    { name: 'Economic Impact Modeling with Difference-in-Differences', description: 'A quasi-experimental DiD analysis measuring the economic impact of a government policy change on regional business metrics.', techStack: ['Python', 'statsmodels', 'linearmodels', 'Pandas', 'Plotly'], difficulty: 'Advanced', resumeImpact: 'Causal policy evaluation with DiD is a specialized econometrics skill valued in public sector, consulting, and policy-adjacent roles.', estimatedTime: '5 weeks', features: ['Parallel trends assumption validation', 'Two-way fixed effects DiD regression', 'Event study plot for dynamic treatment effects', 'Robustness checks with synthetic control baseline'] },
    { name: 'Real-Time Bidding Win Rate Prediction', description: 'A sub-10ms win rate prediction model for programmatic advertising bid optimization, serving from a low-latency FastAPI endpoint.', techStack: ['Python', 'XGBoost', 'ONNX Runtime', 'FastAPI', 'Redis'], difficulty: 'Advanced', resumeImpact: 'Ad tech ML under strict latency constraints is one of the most technically demanding data science applications.', estimatedTime: '5 weeks', features: ['Feature engineering on bid request signals', 'XGBoost → ONNX export for low-latency inference', 'Redis feature cache for sub-1ms feature retrieval', 'Win rate calibration and bid price optimization formula'] },
  ],
  implementationGuides: [
    {
      projectName: 'A/B Test Design and Analysis Framework',
      folderStructure: `ab-testing-framework/
├── src/
│   ├── design/
│   │   ├── sample_size.py
│   │   └── randomization.py
│   ├── analysis/
│   │   ├── frequentist.py
│   │   ├── bayesian.py
│   │   └── corrections.py
│   └── visualization/
│       └── plots.py
├── notebooks/
│   └── example_analysis.ipynb
├── tests/
└── requirements.txt`,
      keyFiles: [
        { file: 'src/design/sample_size.py', purpose: 'Power analysis calculator: given MDE, baseline rate, alpha, and power — returns minimum sample size per variant.' },
        { file: 'src/analysis/frequentist.py', purpose: 'Z-test and t-test implementations with one-sided/two-sided option, returning p-value, confidence interval, and effect size.' },
        { file: 'src/analysis/corrections.py', purpose: 'Benjamini-Hochberg FDR correction for experiments testing multiple metrics simultaneously.' },
      ],
      steps: [
        'Implement the sample size calculator using scipy.stats — inputs: baseline rate, MDE, alpha (0.05), power (0.80).',
        'Build the randomization module: deterministic user assignment via hashed user_id % 100 for reproducibility.',
        'Implement frequentist analysis: z-test for proportions, Welch t-test for continuous metrics.',
        'Add effect size calculations: Cohen\'s h for proportions, Cohen\'s d for continuous outcomes.',
        'Implement Benjamini-Hochberg correction as a utility applied when testing multiple metrics.',
        'Build a Bayesian analysis path using scipy.stats.beta conjugate updates for conversion rate experiments.',
        'Create a single analyze_experiment(control_data, treatment_data, metrics) function encapsulating the full pipeline.',
        'Write a simulation test: generate synthetic data with a known true effect, verify the framework detects it at the expected power.',
      ],
      deploymentNotes: 'Package as a Python library installable via pip. Include a Streamlit demo app that lets users paste raw data and see the full analysis. Publish the Streamlit demo to Streamlit Cloud for a live, zero-infrastructure demo link.',
    },
    {
      projectName: 'Experimentation Platform with Bayesian Analysis',
      folderStructure: `bayesian-exp-platform/
├── app/
│   ├── api/
│   │   ├── experiments.py
│   │   └── events.py
│   ├── analysis/
│   │   ├── bayesian_engine.py
│   │   └── stopping_rules.py
│   └── main.py
├── dashboard/
│   └── streamlit_app.py
├── tests/
└── docker-compose.yml`,
      keyFiles: [
        { file: 'app/analysis/bayesian_engine.py', purpose: 'Conjugate Beta-Binomial update computing posterior distributions, probability of being best, and expected loss per variant.' },
        { file: 'app/analysis/stopping_rules.py', purpose: 'ROPE-based stopping rule: stops the experiment when the credible interval for the difference falls entirely within the region of practical equivalence.' },
        { file: 'dashboard/streamlit_app.py', purpose: 'Real-time dashboard showing posterior distributions as violin plots, probability of being best as a progress bar, and experiment status.' },
      ],
      steps: [
        'Design the data model: Experiment, Variant, and ExperimentEvent (user_id, variant_id, converted, timestamp).',
        'Implement the Beta-Binomial conjugate update: start with Beta(1,1) prior, update with observed successes and failures.',
        'Calculate "probability of being best" via Monte Carlo sampling from all variant posteriors (10,000 samples).',
        'Calculate "expected loss" per variant: expected regret from choosing each variant as winner.',
        'Implement the ROPE stopping rule checking if the highest-density interval of the difference falls within [-MDE, +MDE].',
        'Build a FastAPI /events endpoint receiving conversion events and updating variant statistics in PostgreSQL.',
        'Build the Streamlit dashboard querying the API and rendering live posterior distributions.',
        'Test with simulated data where the true winner has a 10% relative lift — verify early stopping does not trigger before sufficient data.',
      ],
      deploymentNotes: 'Deploy FastAPI on AWS ECS, PostgreSQL on RDS. The Streamlit dashboard can run on Streamlit Cloud connecting to the deployed API. Document the ROPE parameters and prior choice prominently — these are the exact implementation decisions interviewers probe.',
    },
  ],
  resumeImpact: [
    'A/B testing analysis projects directly map to what product data scientists at consumer tech companies do daily.',
    'Causal inference projects (uplift, DiD, Bayesian experiments) signal senior-level statistical thinking beyond correlation.',
    'Business-connected outputs (CLV projections, campaign ROI, budget reallocation) show you translate analysis into decisions.',
    'India-specific datasets (IPL, Nifty 50, metro real estate) make your projects immediately engaging to domestic interviewers.',
  ],
  interviewTalkingPoints: [
    'For A/B testing projects, always be ready to discuss Type I/II error trade-offs and why you chose your alpha level.',
    'For churn and CLV projects, be ready to explain the difference between correlation and causation in your findings.',
    'For NLP projects, explain how you would scale sentiment analysis to 10M reviews per day.',
    'For causal inference projects, explain what assumption your method relies on and how you validated it.',
  ],
  faqs: [
    { question: 'Do I need strong statistics for data science interviews?', answer: 'Yes, for product data science roles at tech companies. Expect questions on A/B testing design (power analysis, sample size), p-value interpretation, confidence intervals, and basic probability. The A/B Test Design Framework project on this list directly prepares you for these questions because you will have built the mechanics yourself.' },
    { question: 'Should I use Jupyter notebooks or Python scripts for these projects?', answer: 'Both, structured correctly. Use Jupyter notebooks for analysis and EDA (they communicate findings visually). Use Python scripts/modules for reusable pipelines (the A/B framework, forecasting pipeline). The cleanest portfolio approach: a notebooks/ folder for analysis narrative and a src/ package for the reusable code, with the notebook importing from src.' },
    { question: 'Which project best demonstrates business impact awareness?', answer: 'The Churn Cohort Analysis with Intervention Modeling and the Multi-Touch Attribution Model both directly translate model output into business revenue impact — they answer "so what?" which is the hardest question junior data scientists fail in interviews. Build one of these to demonstrate business acumen alongside statistical skill.' },
    { question: 'Is Tableau required, or is Plotly/Streamlit enough?', answer: 'Plotly + Streamlit is sufficient for most data science portfolios. Tableau is valued in analytics and BI-heavy roles. If you are targeting product analytics or growth data science roles, Plotly dashboards published as Streamlit apps are more technically impressive than static Tableau dashboards. Add Tableau knowledge if the JDs you are targeting specifically list it.' },
    { question: 'How do I make an EDA project stand out from a hundred similar ones?', answer: 'Three things: (1) arrive at a non-obvious insight — something the obvious chart does not show, (2) connect every finding to a business action or hypothesis, and (3) end with a clear recommendation section. The difference between a data dump and a data story is whether you can answer "what should the business do differently because of this analysis?"' },
    { question: 'Is causal inference necessary for data science roles in India?', answer: 'For junior roles: no. For mid-senior product data science roles at companies like Swiggy, Razorpay, Meesho, or Zepto: increasingly yes. These companies run hundreds of experiments and need data scientists who understand whether their interventions actually caused the observed change. The A/B testing and uplift modeling projects on this list directly address this requirement.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/data-scientist-roadmap-2026', 'Data Scientist Roadmap 2026', 'The 10-month structured learning path these projects complement.'),
    interviewLink('/resources/interview-questions/data-scientist', '100+ Data Scientist Interview Questions', 'Statistics, ML, SQL, and case study questions for data science interviews.'),
    tutorialLink('/resources/tutorials/sql', 'SQL Tutorial', 'SQL is used in every data science project — master it here.'),
    courseLink('/courses/python-ai-aws-devops-combo', 'Python + AI Combo Course', 'Structured data science and AI training with project mentorship.'),
    { title: 'ML Engineering Projects', href: '/resources/projects/ml-projects', description: 'Productionize the models you build in these data science projects.', category: 'Projects', icon: '🛠️' },
    { title: 'AI Projects', href: '/resources/projects/ai-projects', description: 'Extend your data skills into LLMs and applied AI systems.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ Data Science Projects for Your Portfolio (2026) — EDA, ML, A/B Testing',
    description: 'Build 30+ real data science projects: A/B testing frameworks, demand forecasting, causal inference, recommenders, and Bayesian experimentation. Full guides for 2026 data science hiring.',
    keywords: ['data science projects 2026', 'data science portfolio projects india', 'ab testing project python', 'data science project ideas resume', 'pandas plotly streamlit projects'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 8. DEVOPS PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const devopsProjects: ProjectCategory = {
  slug: 'devops-projects',
  title: 'DevOps Projects',
  description: 'Production-grade DevOps projects covering CI/CD pipelines, container orchestration, infrastructure automation, observability, and SRE practices — exactly what DevOps Engineer interviews test in 2026.',
  icon: ICONS.devops,
  color: '#F97316',
  difficulty: 'All Levels',
  techStack: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana', 'AWS', 'Ansible'],
  readTime: '17 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'Dockerized Multi-Service Application', description: 'Containerize a FastAPI + PostgreSQL + Redis + Nginx stack using Docker Compose with health checks, named volumes, and environment-based config.', techStack: ['Docker', 'Docker Compose', 'Nginx', 'FastAPI'], difficulty: 'Beginner', resumeImpact: 'Proves you can containerize a real multi-service app — the baseline DevOps hiring expectation.', estimatedTime: '1 week', features: ['Multi-stage Dockerfile for minimal production image', 'Docker Compose with depends_on + healthcheck', 'Nginx reverse proxy config', 'Secrets via .env file — never hardcoded'] },
    { name: 'Linux Server Hardening Automation', description: 'An Ansible playbook hardening a fresh Ubuntu 22.04 server to CIS Benchmark Level 1: SSH key auth, UFW, fail2ban, unattended upgrades, and auditd.', techStack: ['Ansible', 'Ubuntu 22.04', 'UFW', 'fail2ban'], difficulty: 'Beginner', resumeImpact: 'Security hardening automation is expected at every company running self-managed servers.', estimatedTime: '1 week', features: ['SSH key-only auth, root login disabled', 'UFW default-deny with minimal open ports', 'fail2ban SSH brute-force protection', 'Unattended security upgrades via cron'] },
    { name: 'GitHub Actions CI Pipeline', description: 'A GitHub Actions workflow running lint, unit tests, Docker build, and image push to Docker Hub on every pull request and merge to main.', techStack: ['GitHub Actions', 'Docker', 'Python'], difficulty: 'Beginner', resumeImpact: 'CI pipeline construction is the first thing every DevOps interview evaluates.', estimatedTime: '5 days', features: ['PR-triggered lint + test workflow', 'Docker build and push to Docker Hub', 'Status badge in README', 'Dependency caching for faster builds'] },
    { name: 'Nginx Load Balancer with Upstream Failover', description: 'Nginx as L7 load balancer across 3 backend instances with health-check failover, rate limiting, and request logging.', techStack: ['Nginx', 'Docker Compose', 'FastAPI'], difficulty: 'Beginner', resumeImpact: 'Nginx configuration is tested in nearly every backend and DevOps interview.', estimatedTime: '5 days', features: ['Round-robin upstream with passive health checks', 'Rate limiting 100 req/min per IP', 'Gzip compression for API responses', 'Access log with upstream response time'] },
    { name: 'Bash Monitoring Script Suite', description: 'Bash scripts monitoring CPU, memory, disk, and open ports — alerting via Slack webhook when thresholds breach.', techStack: ['Bash', 'cron', 'Slack API', 'Ubuntu'], difficulty: 'Beginner', resumeImpact: 'Demonstrates practical scripting — every on-call engineer writes monitoring scripts.', estimatedTime: '5 days', features: ['CPU/memory/disk threshold alerts', 'Slack webhook notification with hostname and metric', 'Cron-scheduled every 5 minutes', 'Log rotation for script output'] },
    { name: 'SSL/TLS Automation with Certbot', description: 'Automate Let\'s Encrypt certificate issuance, Nginx HTTPS config, and auto-renewal via a single Ansible role.', techStack: ['Ansible', 'Nginx', 'Certbot', 'Ubuntu'], difficulty: 'Beginner', resumeImpact: 'TLS automation is a foundational ops task every DevOps engineer handles on day one.', estimatedTime: '4 days', features: ['Certbot webroot challenge automation', 'Nginx HTTPS vhost config generation', 'Auto-renewal cron job with pre/post hooks', 'HTTP to HTTPS redirect enforcement'] },
    { name: 'Docker Image Security Scanner in CI', description: 'GitHub Actions workflow scanning Docker images with Trivy on every build, blocking merge if CRITICAL CVEs are found.', techStack: ['GitHub Actions', 'Trivy', 'Docker'], difficulty: 'Beginner', resumeImpact: 'Container security scanning is now a baseline CI expectation at product companies.', estimatedTime: '4 days', features: ['Trivy image scan in CI pipeline', 'CRITICAL severity blocks PR merge', 'SARIF report uploaded to GitHub Security tab', 'Weekly base image re-scan via scheduled workflow'] },
    { name: 'Log Aggregation with Loki + Grafana', description: 'Promtail + Loki + Grafana stack aggregating Docker container logs with label-based filtering and alert rules on error rate.', techStack: ['Grafana Loki', 'Promtail', 'Grafana', 'Docker Compose'], difficulty: 'Beginner', resumeImpact: 'Loki is rapidly replacing ELK for container log aggregation — knowing it is a 2026 hiring advantage.', estimatedTime: '1 week', features: ['Promtail scraping Docker container logs via labels', 'Loki log retention and chunk caching config', 'Grafana dashboard with log volume + error rate panels', 'Alert rule firing on error rate > 5%'] },
    { name: 'PostgreSQL Backup Automation to S3', description: 'Automated pg_dump → S3 upload → GPG encryption → retention policy with weekly restore testing.', techStack: ['Bash', 'PostgreSQL', 'AWS S3', 'cron'], difficulty: 'Beginner', resumeImpact: 'Backup and restore automation is a critical ops responsibility often overlooked in portfolios.', estimatedTime: '5 days', features: ['pg_dump with custom format piped to S3', 'GPG encryption of backup archives', '30-day S3 lifecycle retention policy', 'Weekly automated restore test verifying integrity'] },
    { name: 'Service Uptime Monitor with PagerDuty', description: 'Python-based uptime monitor polling 10 endpoints every 60 seconds, firing PagerDuty incidents on consecutive failures.', techStack: ['Python', 'requests', 'PagerDuty API', 'Docker'], difficulty: 'Beginner', resumeImpact: 'On-call tooling demonstrates operational maturity beyond building and deploying.', estimatedTime: '5 days', features: ['Configurable endpoint list via YAML', 'Consecutive-failure threshold before alert', 'PagerDuty event API integration', 'Status page HTML auto-generated per check run'] },
    { name: 'Full CI/CD Pipeline: GitHub Actions + ECS Blue-Green', description: 'End-to-end pipeline: lint → test → Docker build → Trivy scan → push ECR → blue-green deploy to ECS Fargate.', techStack: ['GitHub Actions', 'AWS ECR', 'AWS ECS Fargate', 'Docker'], difficulty: 'Intermediate', resumeImpact: 'Complete CI/CD from code to production is the #1 evaluated DevOps portfolio piece at Indian product companies.', estimatedTime: '2 weeks', features: ['Multi-environment promotion staging to prod on tag', 'Blue-green ECS deployment with ALB target group switch', 'Rollback job triggered on smoke test failure', 'Slack notification per pipeline stage'] },
    { name: 'Kubernetes Cluster from Scratch with kubeadm', description: 'Bootstrap a 3-node K8s cluster using kubeadm on Ubuntu VMs with Calico CNI, metrics-server, and Ingress Nginx.', techStack: ['Kubernetes', 'kubeadm', 'Calico', 'Ubuntu'], difficulty: 'Intermediate', resumeImpact: 'Building a cluster from scratch proves K8s internals understanding beyond managed EKS abstraction.', estimatedTime: '2 weeks', features: ['kubeadm init + join on 1 control-plane + 2 workers', 'Calico CNI for pod networking', 'metrics-server and Horizontal Pod Autoscaler', 'Nginx Ingress with TLS via cert-manager'] },
    { name: 'GitOps Deployment with ArgoCD', description: 'GitOps workflow where merging to main triggers ArgoCD to sync Kubernetes manifests from Git with automated rollback on health failure.', techStack: ['ArgoCD', 'Kubernetes', 'Helm', 'GitHub Actions'], difficulty: 'Intermediate', resumeImpact: 'GitOps with ArgoCD is the current production standard at every K8s-running company.', estimatedTime: '2 weeks', features: ['ArgoCD Application pointing to Helm chart in Git', 'Automated sync and self-heal enabled', 'Rollback on Kubernetes health check failure', 'App-of-Apps pattern for multi-service deployment'] },
    { name: 'Prometheus + Grafana Observability Stack on K8s', description: 'kube-prometheus-stack with custom PromQL alerting rules, Grafana USE/RED dashboards, and PagerDuty routing.', techStack: ['Prometheus', 'Grafana', 'Alertmanager', 'Kubernetes'], difficulty: 'Intermediate', resumeImpact: 'Prometheus/Grafana is the universal observability stack — fluent configuration is a senior DevOps expectation.', estimatedTime: '2 weeks', features: ['kube-prometheus-stack Helm deployment', 'Custom PromQL alerts: p99 latency, error rate, saturation', 'Grafana USE method dashboard', 'Alertmanager routing to PagerDuty and Slack'] },
    { name: 'Ansible Configuration Management for Server Fleet', description: 'Ansible managing a 10-server fleet: app, database, cache, and load balancer roles with idempotent playbooks and Vault secrets.', techStack: ['Ansible', 'Ubuntu', 'PostgreSQL', 'Nginx', 'Redis'], difficulty: 'Intermediate', resumeImpact: 'Ansible configuration management is widely used across Indian IT services — high hiring value.', estimatedTime: '3 weeks', features: ['Role-based playbook structure', 'Ansible Vault for encrypted secret variables', 'Idempotent execution verified with --check mode', 'Molecule tests for role validation'] },
    { name: 'Chaos Engineering with LitmusChaos', description: 'Controlled failure experiments (pod kill, CPU stress, network latency) on a staging K8s cluster with automated blast-radius reports.', techStack: ['LitmusChaos', 'Kubernetes', 'Prometheus', 'Grafana'], difficulty: 'Intermediate', resumeImpact: 'Chaos engineering is a strong SRE signal — very few candidates have hands-on experience.', estimatedTime: '2 weeks', features: ['LitmusChaos ChaosEngine pod-delete experiment', 'Network latency injection 50ms to downstream calls', 'CPU hog experiment with auto-rollback on SLO breach', 'Grafana annotations showing experiment windows'] },
    { name: 'Distributed Tracing with OpenTelemetry + Jaeger', description: 'Instrument a 3-service microservices app with OTEL auto-instrumentation exporting traces to Jaeger for end-to-end latency analysis.', techStack: ['OpenTelemetry', 'Jaeger', 'FastAPI', 'Docker Compose'], difficulty: 'Intermediate', resumeImpact: 'Distributed tracing is the missing observability pillar in most DevOps portfolios — adding it stands out.', estimatedTime: '2 weeks', features: ['OTEL auto-instrumentation for FastAPI and PostgreSQL', 'Trace context propagation across HTTP service calls', 'Jaeger UI waterfall latency breakdown', 'Sampling: always-on for errors, 5% for success'] },
    { name: 'Secrets Management with HashiCorp Vault on K8s', description: 'Vault managing dynamic database credentials and PKI certificates with Kubernetes pod injection via Vault Agent Sidecar.', techStack: ['HashiCorp Vault', 'Kubernetes', 'PostgreSQL', 'Helm'], difficulty: 'Intermediate', resumeImpact: 'Vault for dynamic secrets is the gold standard for production secret management — rare in candidate portfolios.', estimatedTime: '2 weeks', features: ['Dynamic PostgreSQL credentials with 60-minute TTL', 'Vault PKI backend issuing short-lived TLS certs', 'Kubernetes auth method for pod identity', 'Vault Agent sidecar injecting secrets as env vars'] },
    { name: 'Multi-Environment Terraform + GitHub Actions Pipeline', description: 'Terraform-managed infrastructure promoting changes dev to staging to prod with plan approval gates and S3 state locking.', techStack: ['Terraform', 'GitHub Actions', 'AWS', 'S3', 'DynamoDB'], difficulty: 'Intermediate', resumeImpact: 'Terraform in a multi-environment CI/CD pipeline is the most requested IaC skill in Indian DevOps hiring.', estimatedTime: '2 weeks', features: ['Terragrunt-structured dev/staging/prod environments', 'GitHub Actions: plan on PR, apply on merge with manual approval gate', 'S3 remote state + DynamoDB lock per environment', 'Checkov scan blocking PRs with CRITICAL IaC misconfigs'] },
    { name: 'ELK Stack Log Alerting', description: 'Elastic Stack deployment ingesting application logs, Kibana dashboards, and Elasticsearch Watcher alerts on error patterns.', techStack: ['Elasticsearch', 'Logstash', 'Kibana', 'Filebeat', 'Docker'], difficulty: 'Intermediate', resumeImpact: 'ELK is the dominant log stack in Indian enterprises — operational depth is valued.', estimatedTime: '3 weeks', features: ['Filebeat shipping logs from 5 application containers', 'Logstash pipeline parsing and routing logs', 'Kibana APM and log explorer dashboards', 'Watcher alert on 5xx error rate spike > 10%'] },
    { name: 'SRE Runbook Automation with Ansible + PagerDuty', description: 'Automated runbook execution triggered by PagerDuty webhooks — specific alert types trigger specific Ansible playbooks.', techStack: ['Ansible', 'PagerDuty', 'FastAPI', 'Ubuntu'], difficulty: 'Intermediate', resumeImpact: 'Alert-driven automation is the SRE toil-reduction practice most companies aspire to — building it is rare.', estimatedTime: '3 weeks', features: ['PagerDuty webhook receiver in FastAPI', 'Alert-type to playbook mapping config', 'Ansible playbooks for top 5 common incidents', 'Execution log posted back to PagerDuty incident'] },
    { name: 'Internal Developer Platform with Backstage', description: 'A Backstage IDP with software catalog, golden path templates, TechDocs, and Kubernetes plugin for live service status.', techStack: ['Backstage', 'Kubernetes', 'GitHub Actions', 'PostgreSQL'], difficulty: 'Advanced', resumeImpact: 'Platform engineering with Backstage is a staff-level DevOps skill — building one is exceptionally rare in portfolios.', estimatedTime: '7 weeks', features: ['Software catalog auto-populated from GitHub topics', 'Scaffolding templates for new FastAPI or React service', 'TechDocs auto-generated from repo mkdocs.yaml', 'Kubernetes plugin showing pod status per catalog entity'] },
    { name: 'Service Mesh with Istio + mTLS', description: 'Istio service mesh enabling automatic mTLS between all services, canary traffic management, circuit breakers, and Kiali topology visualization.', techStack: ['Istio', 'Kubernetes', 'Kiali', 'Prometheus'], difficulty: 'Advanced', resumeImpact: 'Istio service mesh configuration is a niche, high-value skill at companies running complex microservice estates.', estimatedTime: '5 weeks', features: ['PeerAuthentication enforcing mTLS cluster-wide', 'VirtualService canary: 10% traffic to v2', 'DestinationRule circuit breaker on consecutive 5xx', 'Kiali topology graph with traffic flow and error rates'] },
    { name: 'Karpenter Spot-First Autoscaling on EKS', description: 'Karpenter-based autoscaling mixing Spot and On-Demand instances with automated Spot interruption handling and rebalancing.', techStack: ['AWS EKS', 'Karpenter', 'Kubernetes', 'Python'], difficulty: 'Advanced', resumeImpact: 'FinOps-aware infrastructure design is increasingly required at senior DevOps roles — quantifiable cost savings are a strong metric.', estimatedTime: '4 weeks', features: ['Karpenter NodePool with Spot-first On-Demand fallback', 'AWS Node Termination Handler for graceful eviction', 'Pod disruption budgets preventing service disruption', 'Cost dashboard comparing Spot vs On-Demand spend'] },
    { name: 'Compliance-as-Code with OPA Gatekeeper', description: 'OPA Gatekeeper enforcing organizational compliance policies as code: no privileged containers, required labels, image registry allowlist.', techStack: ['OPA Gatekeeper', 'Kubernetes', 'Rego', 'GitHub Actions'], difficulty: 'Advanced', resumeImpact: 'Policy-as-code is mandated in regulated industries and large enterprises — building it shows governance engineering depth.', estimatedTime: '4 weeks', features: ['ConstraintTemplate and Constraint for 10 security policies', 'Deny privileged containers, host network, latest image tag', 'Require app/team/env labels on all deployments', 'OPA policy unit tests in CI via conftest'] },
    { name: 'Zero-Downtime Database Migration Pipeline', description: 'A pipeline executing zero-downtime PostgreSQL schema migrations using the expand-contract pattern with automated rollback on failure.', techStack: ['Python', 'Alembic', 'PostgreSQL', 'GitHub Actions'], difficulty: 'Advanced', resumeImpact: 'Zero-downtime migrations are an unsolved pain point at most companies — demonstrating a solution is highly memorable.', estimatedTime: '4 weeks', features: ['Expand phase: add column, backfill, add index CONCURRENTLY', 'Contract phase: drop old column after traffic validation', 'Automated rollback if p99 query time increases > 20%', 'Migration dry-run in staging with production data clone'] },
    { name: 'eBPF Network Observability with Cilium + Hubble', description: 'Cilium + Hubble providing L7 network policy enforcement and real-time network flow visualization for a Kubernetes cluster.', techStack: ['Cilium', 'Hubble', 'Kubernetes', 'Grafana'], difficulty: 'Advanced', resumeImpact: 'eBPF-based networking is cutting-edge — knowing it places you in the top 2% of DevOps candidates.', estimatedTime: '5 weeks', features: ['Cilium replacing kube-proxy for eBPF-based routing', 'Hubble UI with real-time pod-to-pod traffic map', 'L7 HTTP policy enforcement on specific routes', 'Grafana dashboard for Cilium network metrics'] },
    { name: 'Custom Kubernetes Operator with kopf', description: 'A custom Kubernetes operator written in Python with kopf that monitors a stateful app and performs automated recovery when health checks fail.', techStack: ['Python', 'kopf', 'Kubernetes', 'Prometheus'], difficulty: 'Advanced', resumeImpact: 'Writing a Kubernetes operator demonstrates the deepest level of K8s engineering — a principal engineer signal.', estimatedTime: '6 weeks', features: ['Custom CRD defining desired app state', 'kopf operator reconciling actual vs desired state every 30s', 'Automated recovery: restart pod, scale up replica, failover to standby', 'Prometheus metrics exported per operator reconciliation loop'] },
    { name: 'Multi-Cluster Kubernetes Federation with Flux', description: 'Multi-cluster setup using Flux CD managing workload distribution across 3 clusters from a single GitOps control plane.', techStack: ['Kubernetes', 'Flux CD', 'Cluster API', 'Helm'], difficulty: 'Advanced', resumeImpact: 'Multi-cluster fleet management is a principal/staff DevOps competency rarely demonstrated at interview level.', estimatedTime: '6 weeks', features: ['Cluster API provisioning workload clusters declaratively', 'Flux multi-tenant configuration with team isolation', 'Cross-cluster service discovery via submariner', 'Policy enforcement via Kyverno across all clusters'] },
  ],
  implementationGuides: [
    {
      projectName: 'Full CI/CD Pipeline: GitHub Actions + ECS Blue-Green',
      folderStructure: `ci-cd-ecs/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── deploy-staging.yml
│       └── deploy-prod.yml
├── app/
│   └── Dockerfile
├── infra/
│   └── terraform/
│       ├── ecs.tf
│       ├── ecr.tf
│       └── alb.tf
├── scripts/
│   ├── smoke-test.sh
│   └── rollback.sh
└── README.md`,
      keyFiles: [
        { file: '.github/workflows/ci.yml', purpose: 'PR-triggered: lint → pytest → Docker build → Trivy scan → push ECR tagged with commit SHA.' },
        { file: '.github/workflows/deploy-staging.yml', purpose: 'Merge-to-main: pull ECR image → register new ECS task definition → update service → smoke test → Slack notify.' },
        { file: '.github/workflows/deploy-prod.yml', purpose: 'Tag-push (v*.*.*): manual approval gate → blue-green ALB target group switch → smoke test → rollback on failure.' },
        { file: 'scripts/rollback.sh', purpose: 'Queries ECS for previous task definition revision, re-registers it, waits for stability, re-runs smoke test.' },
      ],
      steps: [
        'Provision ECR repository and ECS Fargate cluster + service via Terraform.',
        'Write ci.yml: ruff lint → pytest → docker build --target production → trivy image scan → push ECR tagged $GITHUB_SHA.',
        'Write deploy-staging.yml: render task definition template with new image URI → ecs register-task-definition → ecs update-service.',
        'Add smoke-test.sh: curl /health on ALB URL and assert HTTP 200 within 120 seconds.',
        'Wire rollback: if smoke test exits non-zero, immediately re-register previous task definition.',
        'Write deploy-prod.yml with GitHub environment requiring manual approval from a named reviewer.',
        'Implement blue-green: two ECS target groups (blue/prod) behind ALB — deploy job switches listener rule after health check passes.',
        'Add Slack notification on deploy success/failure to a #deployments channel.',
      ],
      deploymentNotes: 'Store AWS credentials using OIDC federation, not long-lived keys. Set ECS deployment minimum healthy percent to 100%, maximum to 200% for zero-downtime rolling updates. Use ECS Exec for production debugging instead of SSH.',
    },
    {
      projectName: 'GitOps Deployment with ArgoCD',
      folderStructure: `gitops-argocd/
├── apps/
│   └── api/
│       ├── Chart.yaml
│       ├── values.yaml
│       ├── values-staging.yaml
│       └── templates/
│           ├── deployment.yaml
│           ├── service.yaml
│           └── ingress.yaml
├── argocd/
│   └── applications/
│       ├── api-staging.yaml
│       └── api-prod.yaml
├── .github/
│   └── workflows/
│       └── image-build.yml
└── README.md`,
      keyFiles: [
        { file: 'argocd/applications/api-staging.yaml', purpose: 'ArgoCD Application CRD pointing to apps/api Helm chart in Git, staging namespace, automated sync + self-heal enabled.' },
        { file: 'argocd/applications/api-prod.yaml', purpose: 'Same chart, prod namespace, automated sync disabled — requires manual sync via ArgoCD UI or CLI.' },
      ],
      steps: [
        'Install ArgoCD via Helm, expose via Ingress with TLS.',
        'Create the app-of-apps Application pointing to argocd/applications/ directory in Git.',
        'Write Helm charts for the API: Deployment, Service, Ingress, HPA with per-environment values overrides.',
        'Create staging Application with automated sync + self-heal — ArgoCD auto-deploys on every Git push.',
        'Create prod Application with manual sync only.',
        'CI (GitHub Actions) builds Docker image, pushes to ECR, updates image.tag in values-staging.yaml via git commit.',
        'Configure ArgoCD Prometheus ServiceMonitor — alert if out-of-sync for > 10 minutes.',
        'Configure ArgoCD notifications posting sync success/failure to Slack.',
      ],
      deploymentNotes: 'Use SOPS + AWS KMS for encrypted secrets in Helm values files. Configure ArgoCD OIDC SSO with GitHub. Never commit plain-text secrets to the GitOps repo.',
    },
    {
      projectName: 'Prometheus + Grafana Observability Stack on K8s',
      folderStructure: `observability-stack/
├── helm/
│   └── kube-prometheus-stack/
│       └── values.yaml
├── alerts/
│   ├── latency-rules.yaml
│   └── error-rate-rules.yaml
├── dashboards/
│   ├── use-method.json
│   └── red-method.json
├── alertmanager/
│   └── config.yaml
└── README.md`,
      keyFiles: [
        { file: 'alerts/latency-rules.yaml', purpose: 'PrometheusRule: fires P99LatencyHigh when histogram_quantile(0.99) > 500ms for 5 minutes.' },
        { file: 'alerts/error-rate-rules.yaml', purpose: 'PrometheusRule: fires HighErrorRate when 5xx rate / total rate > 0.05 for 2 minutes.' },
        { file: 'alertmanager/config.yaml', purpose: 'Routes critical alerts to PagerDuty, warnings to Slack, inhibits warnings when critical already firing.' },
      ],
      steps: [
        'Deploy kube-prometheus-stack via Helm with ServiceMonitor auto-discovery enabled.',
        'Write PrometheusRule files covering the four Golden Signals: latency, traffic, errors, saturation.',
        'Configure Alertmanager: critical to PagerDuty, warning to Slack, inhibition rules to prevent storm.',
        'Import USE method Grafana dashboard covering node CPU utilization, saturation, errors.',
        'Build RED method Grafana dashboard per service: request rate, error rate %, duration p50/p99.',
        'Add SLO dashboard showing error budget consumption over 30 days.',
        'Instrument FastAPI app with prometheus_client exporting custom business metrics.',
        'Unit test PromQL alert expressions with promtool.',
      ],
      deploymentNotes: 'Use Thanos sidecar if you need > 2 weeks of metrics retention. Store Grafana dashboards as ConfigMaps and auto-provision via the Grafana sidecar. Use Grafana Cloud free tier to avoid self-hosting Grafana.',
    },
  ],
  resumeImpact: [
    'A complete CI/CD pipeline from PR to production ECS deploy is the highest-value DevOps portfolio piece for Indian hiring.',
    'GitOps with ArgoCD demonstrates production deployment patterns used at Swiggy, Zepto, and Razorpay.',
    'Prometheus + Grafana with custom alerts proves you can own production observability independently.',
    'Advanced projects (Backstage IDP, Istio, OPA Gatekeeper) target staff-level DevOps and Platform Engineering roles.',
  ],
  interviewTalkingPoints: [
    'For CI/CD projects, always explain your rollback strategy: how fast, how automated, what triggers it.',
    'For Kubernetes projects, explain HPA: metrics-server → HPA controller → scale decision — without looking it up.',
    'For GitOps projects, explain why GitOps is more reliable than push-based deployment from CI.',
    'For observability projects, walk through a real incident investigation: which dashboard you open first and why.',
  ],
  faqs: [
    { question: 'Which DevOps project should I build first?', answer: 'Start with Dockerized Multi-Service Application and GitHub Actions CI Pipeline — these two together prove you can containerize and automate delivery, the absolute baseline for any DevOps role. Then build the Full CI/CD Pipeline with ECS Blue-Green as your centrepiece project.' },
    { question: 'Do I need real AWS infrastructure for these projects?', answer: 'Yes for intermediate/advanced projects. Use the AWS Free Tier (EC2 t3.micro, ECS Fargate 5-hour limit, RDS db.t3.micro). Set up AWS Cost Budgets with a ₹1,000/month alert. The Terraform projects on this list stay within free tier if destroyed after demo.' },
    { question: 'Is Kubernetes absolutely necessary for DevOps roles in India in 2026?', answer: 'Yes for any product company role. Every funded Indian startup runs Kubernetes in production. The CKA certification combined with 2-3 Kubernetes projects puts you in a strong position for any DevOps interview.' },
    { question: 'Should I use Jenkins or GitHub Actions?', answer: 'GitHub Actions for all new projects — zero infrastructure, native GitHub integration. Jenkins knowledge is still valued at IT services firms (TCS, Wipro, Infosys) with large on-premise client setups. Know GitHub Actions deeply, understand Jenkins conceptually.' },
    { question: 'What is the difference between DevOps and Platform Engineering?', answer: 'DevOps focuses on CI/CD and deployment automation for specific teams. Platform Engineering builds the internal developer platform every team uses — golden path templates, self-service infrastructure, developer portals. The Backstage IDP project is a Platform Engineering project. Senior DevOps roles increasingly require platform thinking.' },
    { question: 'How do I demonstrate SRE skills without large-scale systems?', answer: 'Build the Chaos Engineering, Prometheus + Grafana, and SRE Runbook Automation projects in a local k3d or kind cluster. Simulate realistic workloads and document your SLO definitions and error budget calculations. Interviewers evaluate your reasoning about reliability, not the scale.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/aws-devops-roadmap-2026', 'AWS DevOps Engineer Roadmap 2026', 'The 12-month structured path these projects complement.'),
    interviewLink('/resources/interview-questions/devops-engineer', '100+ DevOps Interview Questions', 'Docker, Kubernetes, Terraform, CI/CD, and SRE questions with answers.'),
    tutorialLink('/resources/tutorials/docker', 'Docker Tutorial', 'Master containerization before tackling the Kubernetes projects.'),
    courseLink('/courses/devops', 'AWS DevOps Course', 'Structured DevOps training with hands-on AWS and Kubernetes labs.'),
    { title: 'AWS Projects', href: '/resources/projects/aws-projects', description: 'AWS-specific infrastructure projects to deploy your DevOps work.', category: 'Projects', icon: '🛠️' },
    { title: 'Cloud Projects', href: '/resources/projects/cloud-projects', description: 'Multi-cloud architecture projects extending your DevOps skills.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ DevOps Projects for Your Portfolio (2026) — CI/CD, Kubernetes, Terraform',
    description: 'Build 30+ real DevOps projects: CI/CD pipelines, Kubernetes clusters, GitOps with ArgoCD, Prometheus observability, and Istio service mesh. Full implementation guides for 2026 hiring.',
    keywords: ['devops projects 2026', 'kubernetes project ideas resume', 'cicd pipeline project github actions', 'terraform devops project', 'devops portfolio projects india'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 9. AWS PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const awsProjects: ProjectCategory = {
  slug: 'aws-projects',
  title: 'AWS Projects',
  description: 'Hands-on AWS projects covering core services, serverless, EKS, security hardening, and cost optimization — exactly what AWS certifications and cloud engineer interviews validate in 2026.',
  icon: ICONS.aws,
  color: '#FF9900',
  difficulty: 'All Levels',
  techStack: ['AWS EC2', 'AWS ECS/EKS', 'AWS Lambda', 'Terraform', 'S3', 'RDS', 'CloudFront', 'IAM'],
  readTime: '17 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'Static Website on S3 + CloudFront + Route53', description: 'Host a Next.js static export on S3 with CloudFront OAC, custom domain via Route53, and HTTPS via ACM — all Terraform-managed.', techStack: ['AWS S3', 'CloudFront', 'Route53', 'ACM', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'The most fundamental AWS deployment pattern — every cloud interview assumes you know this.', estimatedTime: '5 days', features: ['S3 static website with Origin Access Control', 'CloudFront HTTPS-only enforcement', 'ACM certificate via DNS validation', 'Route53 A-record alias to CloudFront'] },
    { name: 'EC2 Web Server with Auto Scaling Group', description: 'FastAPI on EC2 with Auto Scaling Group, ALB, launch template, and CloudWatch-based scaling policies.', techStack: ['AWS EC2', 'ALB', 'Auto Scaling', 'CloudWatch', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'EC2 + ASG is the foundational compute pattern — required knowledge for every cloud role.', estimatedTime: '1 week', features: ['Launch template with user-data bootstrapping app', 'ALB target group with HTTP health check', 'Scale-out policy: CPU > 70% for 5 min', 'Scale-in policy: CPU < 30% for 10 min'] },
    { name: 'RDS PostgreSQL Multi-AZ with Read Replica + Bastion', description: 'RDS PostgreSQL Multi-AZ in private subnet with read replica, accessible only via bastion host.', techStack: ['AWS RDS', 'VPC', 'EC2 Bastion', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'Multi-AZ RDS with read replica is the AWS database pattern most commonly asked about in interviews.', estimatedTime: '1 week', features: ['Multi-AZ primary RDS in private subnet', 'Read replica in separate AZ', 'Bastion host in public subnet with SSH key auth', 'Security group: DB port open only from bastion SG'] },
    { name: 'S3 Event-Driven Image Resizing with Lambda', description: 'S3-triggered Lambda that resizes uploaded images to 3 thumbnail sizes and writes back to S3 with metadata tagging.', techStack: ['AWS S3', 'Lambda', 'Pillow', 'CloudWatch'], difficulty: 'Beginner', resumeImpact: 'S3 event → Lambda is the canonical serverless pattern — every AWS interview mentions it.', estimatedTime: '5 days', features: ['S3 ObjectCreated trigger on uploads/ prefix', 'Lambda resizes to 200px, 500px, 1080px', 'Output to thumbnails/ prefix with metadata tag', 'CloudWatch log stream with processing time per image'] },
    { name: 'Custom VPC with Public/Private Subnets', description: 'Custom VPC with 2 public and 2 private subnets across 2 AZs, NAT Gateway, IGW, and route tables — Terraform-managed.', techStack: ['AWS VPC', 'Terraform', 'NAT Gateway', 'Route Tables'], difficulty: 'Beginner', resumeImpact: 'VPC design is the first topic in every AWS Solutions Architect interview — this project forces mastery.', estimatedTime: '5 days', features: ['/16 VPC with /24 public and /24 private subnets per AZ', 'NAT Gateway in each public subnet for AZ-local egress', 'Separate route tables: public to IGW, private to NAT', 'VPC Flow Logs enabled to CloudWatch'] },
    { name: 'SQS + Lambda Async Processing Pipeline', description: 'Decoupled pipeline: API writes jobs to SQS, Lambda consumer processes them asynchronously with DLQ handling.', techStack: ['AWS SQS', 'Lambda', 'FastAPI on EC2', 'CloudWatch'], difficulty: 'Beginner', resumeImpact: 'SQS + Lambda decoupling is the AWS async pattern most asked about in backend/cloud interviews.', estimatedTime: '5 days', features: ['Standard SQS with visibility timeout tuning', 'Lambda SQS event source mapping batch size 10', 'DLQ for messages failing 3 processing attempts', 'CloudWatch alarm on DLQ message count > 0'] },
    { name: 'IAM Roles and Policies Audit Tool', description: 'Python boto3 tool auditing IAM users, roles, and policies — flagging overly permissive policies and missing MFA.', techStack: ['Python', 'boto3', 'AWS IAM', 'JSON'], difficulty: 'Beginner', resumeImpact: 'IAM security awareness is evaluated in every AWS interview — building an audit tool proves depth.', estimatedTime: '5 days', features: ['List all IAM users without MFA enabled', 'Flag policies with Action:* or Resource:*', 'Check for access keys older than 90 days', 'JSON + CSV report of findings'] },
    { name: 'CloudWatch Dashboard and Composite Alarms', description: 'Terraform-managed CloudWatch setup with custom metric filters, composite alarms, and SNS-to-email notification.', techStack: ['AWS CloudWatch', 'SNS', 'Terraform', 'EC2', 'RDS'], difficulty: 'Beginner', resumeImpact: 'CloudWatch alarm configuration is a daily task for any AWS engineer — fluency is expected.', estimatedTime: '5 days', features: ['EC2 alarms: CPU, memory via CloudWatch Agent, disk', 'RDS alarms: CPU, FreeStorageSpace, DatabaseConnections', 'Composite alarm: fires when CPU AND error rate both high', 'SNS email subscription for alarm notification'] },
    { name: 'AWS Budget and Cost Anomaly Alerts', description: 'Terraform-managed cost governance: monthly budgets per service, anomaly detection, and Slack notification via Lambda + SNS.', techStack: ['AWS Budgets', 'Cost Anomaly Detection', 'SNS', 'Lambda'], difficulty: 'Beginner', resumeImpact: 'FinOps awareness is increasingly evaluated in cloud engineer interviews.', estimatedTime: '5 days', features: ['Monthly budget per service (EC2, RDS, data transfer)', 'Cost Anomaly Detection with 20% threshold', 'SNS to Lambda to Slack webhook for anomaly notification', 'Budget vs actual spend dashboard via CUR'] },
    { name: 'Route53 Health-Check-Based Failover', description: 'Route53 active-passive failover between primary EC2 instance and static S3 maintenance page on health check failure.', techStack: ['AWS Route53', 'EC2', 'S3', 'CloudWatch', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'DNS-based failover is a core HA pattern — shows you can design for failure.', estimatedTime: '4 days', features: ['Route53 health check on primary EC2 /health endpoint', 'Primary record with failover routing policy', 'Secondary record pointing to S3 maintenance page', 'CloudWatch alarm on health check failure'] },
    { name: 'Three-Tier Architecture with Terraform', description: 'Complete 3-tier AWS: ALB → EC2 ASG (app) → RDS Multi-AZ (db) in a properly segmented VPC, fully Terraform-managed.', techStack: ['Terraform', 'AWS EC2', 'RDS', 'ALB', 'VPC'], difficulty: 'Intermediate', resumeImpact: 'The 3-tier architecture is the most whiteboarded AWS design in interviews — Terraform code is definitive proof.', estimatedTime: '2 weeks', features: ['Separate security groups per tier with minimal ingress', 'RDS Multi-AZ with automated backups to S3', 'ALB access logs to S3 with Athena query setup', 'Systems Manager Session Manager replacing bastion host'] },
    { name: 'EKS Cluster with Karpenter and IRSA', description: 'Production-ready EKS cluster with Karpenter autoscaler, IRSA for pod-level IAM, AWS Load Balancer Controller, and EBS CSI driver.', techStack: ['AWS EKS', 'Karpenter', 'Terraform', 'Helm', 'IAM'], difficulty: 'Intermediate', resumeImpact: 'EKS with Karpenter + IRSA is the 2026 production Kubernetes standard on AWS.', estimatedTime: '3 weeks', features: ['EKS managed node group + Karpenter NodePool Spot-first', 'IRSA per-service-account IAM roles', 'AWS Load Balancer Controller managing ALB Ingress', 'EBS CSI driver with StorageClass for dynamic PVC'] },
    { name: 'Serverless REST API: API Gateway + Lambda + DynamoDB', description: 'Fully serverless CRUD API using API Gateway + Lambda + DynamoDB via AWS SAM, with JWT authorizer and throttling.', techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'AWS SAM', 'Python'], difficulty: 'Intermediate', resumeImpact: 'Serverless API architecture is a common AWS interview design question.', estimatedTime: '2 weeks', features: ['SAM template defining all resources', 'JWT Lambda Authorizer validating Cognito tokens', 'DynamoDB single-table design with GSI', 'API Gateway throttling: 1000 RPS burst, 500 RPS steady'] },
    { name: 'EventBridge + Step Functions Order Saga', description: 'Event-driven order processing: EventBridge routing + Step Functions orchestrating a 4-step Lambda saga with compensating transactions.', techStack: ['AWS EventBridge', 'Step Functions', 'Lambda', 'SQS', 'DynamoDB'], difficulty: 'Intermediate', resumeImpact: 'Step Functions saga is the AWS-native distributed transaction answer — frequently asked in SA interviews.', estimatedTime: '2 weeks', features: ['EventBridge custom bus routing order events by type', 'Step Functions Express Workflow for order saga', 'Compensating transactions on payment failure', 'DLQ for events exhausting all retry attempts'] },
    { name: 'Multi-Account AWS Organization with SCP', description: 'AWS Organization with 3 accounts (management, prod, staging) and SCPs preventing resource creation outside approved regions.', techStack: ['AWS Organizations', 'SCP', 'Terraform', 'IAM Identity Center'], difficulty: 'Intermediate', resumeImpact: 'Multi-account governance is standard at every enterprise using AWS.', estimatedTime: '2 weeks', features: ['Organizations with management + 2 member accounts', 'SCP: deny all regions except ap-south-1 and us-east-1', 'SCP: deny RDS deletion without snapshot', 'IAM Identity Center SSO for cross-account access'] },
    { name: 'AWS WAF + Shield for DDoS Protection', description: 'WAF Web ACL with AWS managed rule groups, custom rate-based rules, and CloudFront integration protecting a public API.', techStack: ['AWS WAF', 'CloudFront', 'ALB', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'WAF configuration is a security expectation at any public-facing AWS deployment.', estimatedTime: '2 weeks', features: ['AWS Managed Rules: Core rule set + Known bad inputs', 'Custom rate-based rule: block IPs exceeding 2000 req/5min', 'IP reputation list blocking known malicious sources', 'WAF logging to S3 with Athena for attack analysis'] },
    { name: 'Serverless Data Lake: S3 + Glue + Athena', description: 'Serverless data lake ingesting JSON events to S3, catalogued by Glue Crawlers, queryable via Athena, visualized in QuickSight.', techStack: ['AWS S3', 'Glue', 'Athena', 'QuickSight', 'Lambda'], difficulty: 'Intermediate', resumeImpact: 'Serverless data lake architecture is asked about in data engineering and SA interviews.', estimatedTime: '3 weeks', features: ['S3 partitioned by year/month/day for Athena pruning', 'Glue Crawler auto-discovering schema on new partitions', 'Athena named queries for business KPI reporting', 'QuickSight dashboard reading from Athena'] },
    { name: 'Secrets Manager with Auto-Rotation', description: 'Secrets Manager managing RDS credentials with automatic 30-day rotation via Lambda rotation function, injected into ECS tasks.', techStack: ['AWS Secrets Manager', 'Lambda', 'RDS', 'ECS', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'Automatic secret rotation is a security best practice most engineers know but few have implemented.', estimatedTime: '2 weeks', features: ['Secrets Manager with 30-day rotation schedule', 'Custom Lambda rotation function updating RDS user password', 'ECS task definition referencing secret ARN as env var', 'CloudTrail audit of every secret access event'] },
    { name: 'Disaster Recovery with Cross-Region Replication', description: 'Active-passive DR: S3 CRR, RDS snapshot copy to secondary region, Route53 failover, documented RTO/RPO.', techStack: ['AWS S3', 'RDS', 'Route53', 'Lambda', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'DR design is evaluated at every AWS Solutions Architect interview.', estimatedTime: '3 weeks', features: ['S3 Cross-Region Replication to secondary region', 'RDS automated backups copied to secondary via Lambda', 'Route53 health-check-based failover between regions', 'DR runbook documenting RTO 4h / RPO 1h'] },
    { name: 'AWS Config + Security Hub Compliance Dashboard', description: 'AWS Config rules enforcing CIS Benchmark controls, Security Hub aggregating findings, Lambda auto-remediation for S3 public access.', techStack: ['AWS Config', 'Security Hub', 'Lambda', 'SNS', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'Compliance-as-code with auto-remediation is mandated at enterprise AWS deployments.', estimatedTime: '2 weeks', features: ['20 Config rules aligned to CIS AWS Foundations Benchmark', 'Security Hub with CIS standard enabled', 'Lambda auto-remediation: block S3 public access on violation', 'SNS alert for CRITICAL Security Hub findings'] },
    { name: 'CloudFront Lambda@Edge A/B Testing', description: 'Lambda@Edge implementing origin-level A/B testing — 10% of traffic to v2 S3 bucket without redirects or client-side logic.', techStack: ['CloudFront', 'Lambda@Edge', 'S3', 'CloudWatch'], difficulty: 'Intermediate', resumeImpact: 'Lambda@Edge A/B at CDN layer is a sophisticated pattern very few engineers have implemented hands-on.', estimatedTime: '2 weeks', features: ['Viewer-request Lambda@Edge modifying origin on cookie', '10% random allocation with sticky session cookie', 'Assignment logged to CloudWatch for analysis', 'Header injection for downstream analytics attribution'] },
    { name: 'Kinesis Data Streams Real-Time Pipeline', description: 'Real-time pipeline ingesting clickstream events via Kinesis, processed by Lambda, stored in DynamoDB + S3 Parquet via Firehose.', techStack: ['AWS Kinesis', 'Lambda', 'DynamoDB', 'S3', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'Kinesis streaming pipelines are asked about in data engineering and SA interviews.', estimatedTime: '2 weeks', features: ['Kinesis Data Stream with 4 shards', 'Lambda consumer with checkpointing and bisect-on-error', 'DynamoDB hot storage for last 24h aggregations', 'Kinesis Firehose parallel path to S3 Parquet'] },
    { name: 'Well-Architected Review + Remediation', description: 'Full AWS Well-Architected review across all 6 pillars with documented findings, remediation Terraform code, and re-review report.', techStack: ['AWS Well-Architected Tool', 'Terraform', 'AWS Config', 'Security Hub'], difficulty: 'Advanced', resumeImpact: 'Running a formal Well-Architected review demonstrates senior-level cloud judgment.', estimatedTime: '5 weeks', features: ['Workload assessment across 6 pillars', 'HRI-prioritized remediation plan', 'Terraform code fixing top 5 security and reliability HRIs', 'Before/after Security Hub score comparison'] },
    { name: 'Multi-Region Active-Active Architecture', description: 'Active-active deployment across ap-south-1 and us-east-1 with Route53 latency-based routing, Aurora Global Database, and DynamoDB Global Tables.', techStack: ['AWS Route53', 'Aurora Global', 'DynamoDB Global Tables', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'Multi-region active-active is the most advanced AWS pattern — centrepiece of SA Professional exams.', estimatedTime: '6 weeks', features: ['Route53 latency-based routing between two regions', 'Aurora Global Database RPO < 1s', 'DynamoDB Global Tables for session and user data', 'Documented conflict resolution strategy for write conflicts'] },
    { name: 'AWS Control Tower Landing Zone', description: 'Control Tower landing zone automating account vending, guardrail enforcement, and centralized logging across a 5-account organization.', techStack: ['AWS Control Tower', 'Organizations', 'CloudFormation StackSets', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'Landing zone automation is a consulting and enterprise cloud specialization.', estimatedTime: '6 weeks', features: ['Control Tower with 5 OUs', 'Account Factory for automated new account provisioning', 'Preventive and detective guardrails via SCPs + Config rules', 'Centralized CloudTrail and Config to Log Archive account'] },
    { name: 'Cost Optimization: 40% AWS Bill Reduction', description: 'Documented cost optimization audit: identify waste, implement Reserved Instances, Compute Optimizer rightsizing, S3 lifecycle.', techStack: ['AWS Cost Explorer', 'Compute Optimizer', 'Trusted Advisor', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'Quantified cost reduction is one of the strongest interview metrics you can cite.', estimatedTime: '4 weeks', features: ['Compute Optimizer rightsizing applied to EC2 + RDS fleet', 'Convertible Reserved Instances for predictable workloads', 'S3 Intelligent Tiering for objects > 128KB', 'Cost savings dashboard with before/after by service'] },
    { name: 'Zero-Trust AWS Network Architecture', description: 'Zero-trust design using AWS PrivateLink, VPC endpoints, no public IPs on any workload, IAM Conditions enforcing VPC source restriction.', techStack: ['AWS VPC', 'PrivateLink', 'IAM', 'Route53 Resolver', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'Zero-trust networking is a board-level security requirement at enterprise companies.', estimatedTime: '5 weeks', features: ['Interface VPC endpoints for all AWS services used', 'S3 and DynamoDB gateway endpoints replacing NAT', 'IAM condition: aws:SourceVpc restricting API to VPC only', 'DNS resolution via Route53 Resolver for private hosted zones'] },
    { name: 'SageMaker Pipeline: Train → Evaluate → Deploy', description: 'SageMaker Pipeline automating training, evaluation, model registration, and conditional deployment of a classification model.', techStack: ['AWS SageMaker', 'S3', 'Lambda', 'Step Functions', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'SageMaker Pipelines bridges cloud engineering and ML — valued at companies running ML on AWS.', estimatedTime: '5 weeks', features: ['SageMaker Pipeline: preprocess → train → evaluate → condition → register', 'Model Registry staging to production approval workflow', 'SageMaker endpoint auto-scaling with Application Auto Scaling', 'CloudWatch model quality monitor with data drift detection'] },
    { name: 'AWS X-Ray + Container Insights Full Observability', description: 'Full observability for EKS workload using X-Ray distributed tracing, Container Insights cluster metrics, and Synthetics canaries.', techStack: ['AWS X-Ray', 'CloudWatch Container Insights', 'CloudWatch Synthetics', 'EKS'], difficulty: 'Advanced', resumeImpact: 'Native AWS observability is preferred at companies minimizing third-party tool sprawl.', estimatedTime: '4 weeks', features: ['AWS Distro for OpenTelemetry sidecar for X-Ray', 'Container Insights: pod CPU/memory, node saturation dashboards', 'CloudWatch Synthetics canary running API health checks every 5 min', 'ServiceLens combining traces, metrics, and logs in one view'] },
    { name: 'Custom SCP Library with OPA Unit Tests', description: 'A library of 20 production-tested SCPs covering security, compliance, and cost governance — tested via OPA conftest and deployed via Terraform.', techStack: ['AWS Organizations', 'SCP', 'Terraform', 'OPA', 'Python'], difficulty: 'Advanced', resumeImpact: 'A reusable SCP library demonstrates governance engineering at scale.', estimatedTime: '4 weeks', features: ['SCPs: deny root API usage, enforce MFA, require encryption at rest', 'SCPs: deny non-approved regions, deny EC2 without IMDSv2', 'OPA conftest unit tests for every SCP', 'Terraform module deploying SCPs to org units by category'] },
  ],
  implementationGuides: [
    {
      projectName: 'Three-Tier Architecture with Terraform',
      folderStructure: `three-tier-aws/
├── modules/
│   ├── vpc/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   ├── ec2-asg/
│   │   ├── main.tf
│   │   └── user-data.sh
│   ├── rds/
│   │   └── main.tf
│   └── alb/
│       └── main.tf
├── environments/
│   ├── staging/
│   │   └── main.tf
│   └── prod/
│       └── main.tf
├── backend.tf
└── README.md`,
      keyFiles: [
        { file: 'modules/vpc/main.tf', purpose: 'VPC with 2 public + 2 private subnets across 2 AZs, NAT Gateways, route tables, and VPC Flow Logs to CloudWatch.' },
        { file: 'modules/ec2-asg/user-data.sh', purpose: 'User-data: installs CloudWatch Agent, app service, signals ASG success via cfn-signal after health check passes.' },
        { file: 'modules/rds/main.tf', purpose: 'RDS PostgreSQL Multi-AZ in private subnets, parameter group, Enhanced Monitoring, automated backups.' },
      ],
      steps: [
        'Write vpc module: VPC, subnets, IGW, NAT Gateways, route tables, per-tier security groups.',
        'Write alb module: ALB with HTTP→HTTPS redirect listener, HTTPS listener forwarding to ASG target group.',
        'Write ec2-asg module: launch template with user-data, ASG min/max/desired, step scaling policies.',
        'Write rds module: DB subnet group in private subnets, Multi-AZ instance, parameter group.',
        'Compose modules in environments/staging/main.tf, passing vpc_id and subnet_ids between modules.',
        'Configure S3 + DynamoDB Terraform backend in backend.tf for state locking.',
        'Run terraform plan → review → terraform apply. Verify app reachable via ALB DNS.',
        'Load test with locust, verify ASG scale-out fires then scale-in after load drops.',
      ],
      deploymentNotes: 'Use distinct Terraform directories per environment. Enable RDS deletion protection in prod. Tag every resource with Environment, Project, ManagedBy=Terraform for cost allocation.',
    },
    {
      projectName: 'EKS Cluster with Karpenter and IRSA',
      folderStructure: `eks-karpenter/
├── terraform/
│   ├── eks.tf
│   ├── karpenter.tf
│   ├── irsa.tf
│   └── addons.tf
├── helm/
│   ├── karpenter/values.yaml
│   └── aws-load-balancer-controller/values.yaml
├── karpenter/
│   ├── nodepool.yaml
│   └── ec2nodeclass.yaml
└── manifests/
    └── test-deployment.yaml`,
      keyFiles: [
        { file: 'terraform/eks.tf', purpose: 'EKS cluster with minimal managed node group for system workloads — application pods run on Karpenter-provisioned nodes.' },
        { file: 'terraform/irsa.tf', purpose: 'IRSA module: creates IAM role with trust policy bound to specific Kubernetes service account, attached to required policy.' },
        { file: 'karpenter/nodepool.yaml', purpose: 'Karpenter NodePool: Spot-first (c6i, m6i, r6i), On-Demand fallback, 24h TTL for idle nodes.' },
      ],
      steps: [
        'Create EKS cluster with system node group (t3.medium x2) for Karpenter and add-ons.',
        'Deploy Karpenter via Helm with cluster name and interruption queue ARN.',
        'Create EC2NodeClass referencing correct AMI family and node IAM instance profile.',
        'Create NodePool with Spot + On-Demand requirements and 24h expiry TTL.',
        'Deploy AWS Load Balancer Controller via Helm with IRSA.',
        'Create IRSA roles for application service accounts (e.g., api-sa → S3 read on specific bucket).',
        'Install EBS CSI driver with IRSA for dynamic PVC provisioning.',
        'Deploy test Deployment requesting 4 CPU — verify Karpenter provisions new node within 90s.',
      ],
      deploymentNotes: 'Set up Karpenter interruption handling: create SQS queue and EventBridge rules for Spot notices before deploying Karpenter. Use taints on system node group to prevent app pods scheduling there. Enable EKS control plane logging (API, audit, authenticator) to CloudWatch.',
    },
    {
      projectName: 'Serverless REST API: API Gateway + Lambda + DynamoDB',
      folderStructure: `serverless-api/
├── template.yaml
├── src/
│   ├── handlers/
│   │   ├── create.py
│   │   ├── read.py
│   │   ├── update.py
│   │   └── delete.py
│   ├── authorizer/
│   │   └── jwt_authorizer.py
│   └── shared/
│       ├── db.py
│       └── models.py
├── tests/
│   └── test_handlers.py
├── events/
│   └── sample_event.json
└── Makefile`,
      keyFiles: [
        { file: 'template.yaml', purpose: 'SAM template defining all Lambdas, API Gateway, DynamoDB table, authorizer, throttling, and IAM roles.' },
        { file: 'src/authorizer/jwt_authorizer.py', purpose: 'Lambda authorizer verifying Cognito JWT: decodes token, validates exp and iss claims, returns IAM policy document.' },
        { file: 'src/shared/db.py', purpose: 'DynamoDB client wrapper with single-table access patterns (PK/SK), conditional writes, and consistent reads.' },
      ],
      steps: [
        'Design DynamoDB single-table schema: PK=USER#{user_id}, SK=ITEM#{item_id} covering all access patterns.',
        'Write SAM template: DynamoDB table, Lambda functions per CRUD operation, API Gateway with JWT authorizer.',
        'Implement JWT authorizer: decode Cognito token, validate claims, return Allow/Deny policy.',
        'Implement CRUD handlers using the DynamoDB wrapper — conditional writes for optimistic locking.',
        'Configure API Gateway throttling at 1000 RPS burst, 500 RPS steady-state.',
        'Write pytest tests with moto for DynamoDB mocking.',
        'Run sam local start-api for local testing before deployment.',
        'Deploy with sam deploy --guided, verify endpoints with Postman.',
      ],
      deploymentNotes: 'Use Lambda Power Tuning tool to find the optimal memory setting for your function. Enable Lambda X-Ray active tracing. Set DynamoDB to on-demand capacity for unpredictable traffic, switch to provisioned + auto-scaling once traffic patterns are known.',
    },
  ],
  resumeImpact: [
    'Terraform-managed 3-tier architecture in a properly segmented VPC is the baseline AWS portfolio expectation for cloud roles.',
    'EKS with Karpenter + IRSA demonstrates 2026-current AWS Kubernetes expertise beyond basic managed node groups.',
    'Cost optimization projects with documented ₹ savings are exceptionally memorable in AWS interviews.',
    'Advanced projects (multi-region active-active, Control Tower, zero-trust) target AWS Solutions Architect Professional level roles.',
  ],
  interviewTalkingPoints: [
    'For every VPC project, draw the routing table for both public and private subnets from memory.',
    'For EKS projects, explain IRSA: why it is more secure than node-level instance profiles and how the token exchange works.',
    'For WAF projects, explain why rate-based rules need careful threshold tuning to avoid blocking legitimate traffic bursts.',
    'For cost optimization projects, quote actual before/after numbers — percentage reduction is more memorable than describing the approach.',
  ],
  faqs: [
    { question: 'Will these AWS projects cost a lot on my personal account?', answer: 'Most beginner projects run within the AWS Free Tier or cost under ₹200 if destroyed promptly. Intermediate projects (EKS, RDS Multi-AZ, NAT Gateway) cost ₹500–2,000 per week if left running. Use terraform destroy immediately after capturing screenshots. Set a ₹1,500/month AWS Budget alert to avoid surprises.' },
    { question: 'Do I need AWS certifications along with these projects?', answer: 'Projects and certifications complement each other. The optimal sequence: build 5–7 projects → pass AWS SAA-C03 → add 2–3 advanced projects → consider SAP-C02. The cert validates breadth; the projects prove depth.' },
    { question: 'Is Terraform required or can I use CloudFormation?', answer: 'Use Terraform. It is cloud-agnostic, has cleaner syntax, better module ecosystem, and is the default IaC tool at most Indian product companies. CloudFormation is used at enterprises locked into AWS-native tooling — understand it conceptually but invest practice time in Terraform.' },
    { question: 'Which project is most likely to come up in an AWS interview?', answer: 'The 3-Tier Architecture and VPC Design projects are asked about in virtually every AWS cloud interview. EKS + Karpenter is the most valued intermediate project for container workload roles. For senior/architect roles, Multi-Region Active-Active and DR projects demonstrate judgment at the expected level.' },
    { question: 'How do I demo AWS projects in an interview without live infrastructure?', answer: 'Capture architecture diagrams, Terraform plan output, AWS console screenshots, and Grafana dashboard screenshots during your build. Record a short screen capture of a key workflow. Include these in your GitHub README. Interviewers evaluate your ability to explain decisions, not run live demos.' },
    { question: 'Which AWS project is highest value for a fresher?', answer: 'Static Website on S3 + CloudFront + Route53 + ACM: costs under ₹50/month to keep live, gives a public URL, covers four core AWS services. After that, EC2 + Auto Scaling Group + ALB covers remaining core compute concepts needed for AWS Developer and SysOps exams.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/aws-devops-roadmap-2026', 'AWS DevOps Engineer Roadmap 2026', 'The structured 12-month path these projects complement.'),
    roadmapLink('/resources/roadmaps/cloud-engineer-roadmap-2026', 'Cloud Engineer Roadmap 2026', 'Broader multi-cloud context for AWS skills.'),
    interviewLink('/resources/interview-questions/cloud-engineer', '100+ Cloud Engineer Interview Questions', 'AWS architecture, networking, and security questions with answers.'),
    tutorialLink('/resources/tutorials/aws', 'AWS Tutorial', 'Core AWS service fundamentals before starting these projects.'),
    courseLink('/courses/devops', 'AWS DevOps Course', 'Structured AWS training with hands-on labs.'),
    { title: 'DevOps Projects', href: '/resources/projects/devops-projects', description: 'CI/CD and Kubernetes projects that deploy onto AWS infrastructure.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ AWS Projects for Your Portfolio (2026) — EC2, EKS, Lambda, Terraform',
    description: 'Build 30+ real AWS projects: 3-tier architecture, EKS clusters, serverless APIs, DR setups, WAF, and multi-region active-active. Full Terraform implementation guides for 2026 AWS hiring.',
    keywords: ['aws projects 2026', 'aws project ideas resume', 'terraform aws project', 'eks project ideas', 'aws solutions architect project ideas india'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// 10. CLOUD PROJECTS
// ════════════════════════════════════════════════════════════════════════════
const cloudProjects: ProjectCategory = {
  slug: 'cloud-projects',
  title: 'Cloud Engineering Projects',
  description: 'Multi-cloud and cloud-agnostic projects spanning AWS, GCP, and Azure — covering networking, security, FinOps, and architecture patterns that cloud engineer and solutions architect interviews evaluate in 2026.',
  icon: ICONS.cloud,
  color: '#0EA5E9',
  difficulty: 'All Levels',
  techStack: ['AWS', 'GCP', 'Azure', 'Terraform', 'Kubernetes', 'Pulumi', 'Python boto3/gcloud'],
  readTime: '17 min read',
  lastUpdated: 'December 2025',
  projects: [
    { name: 'GCP Cloud Run Serverless API', description: 'Deploy a containerized FastAPI on Google Cloud Run with Cloud SQL PostgreSQL, Secret Manager, and Cloud Armor WAF — all via Terraform.', techStack: ['GCP Cloud Run', 'Cloud SQL', 'Terraform', 'Docker'], difficulty: 'Beginner', resumeImpact: 'Cloud Run is GCP\'s most popular serverless compute — adds GCP breadth to an AWS-heavy portfolio.', estimatedTime: '5 days', features: ['Cloud Run service with min-instances=0 (scale to zero)', 'Cloud SQL PostgreSQL with private IP via VPC connector', 'Secret Manager for DB credentials as env vars', 'Cloud Armor WAF policy on Load Balancer'] },
    { name: 'Azure AKS with Azure AD Workload Identity', description: 'Containerized app on Azure Kubernetes Service with Azure AD workload identity, Azure Container Registry, and Application Gateway Ingress.', techStack: ['Azure AKS', 'ACR', 'Azure AD', 'Terraform', 'Helm'], difficulty: 'Beginner', resumeImpact: 'AKS with Azure AD is the enterprise Microsoft cloud standard — adds Azure range to an AWS-focused portfolio.', estimatedTime: '1 week', features: ['AKS with Azure AD-integrated RBAC', 'Workload Identity for pod-level credential binding', 'ACR integrated with AKS pull permissions', 'Application Gateway Ingress Controller with TLS'] },
    { name: 'BigQuery Data Warehouse with Looker Studio Dashboard', description: 'Load a public dataset into BigQuery, design a star schema with partitioned/clustered tables, and build a Looker Studio dashboard.', techStack: ['GCP BigQuery', 'Looker Studio', 'Python', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'BigQuery is the dominant cloud data warehouse in India\'s analytics market — fluency is expected for data engineering roles.', estimatedTime: '1 week', features: ['Date-partitioned and clustered table design', 'Optimized SQL reducing bytes processed by 90%', 'Scheduled queries for daily aggregation', 'Looker Studio dashboard with BigQuery BI Engine'] },
    { name: 'Azure Blob Storage + CDN Static Site', description: 'Static site on Azure Blob Storage with Azure CDN, custom domain, HTTPS via DigiCert, and geo-restriction rules.', techStack: ['Azure Blob Storage', 'Azure CDN', 'Azure DNS', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'Azure Blob + CDN is the Azure equivalent of S3 + CloudFront — proves you apply the same patterns across clouds.', estimatedTime: '4 days', features: ['Static website hosting on Azure Blob', 'Azure CDN Standard with custom domain', 'HTTPS via Azure-managed DigiCert certificate', 'Cache rules: CSS/JS 30 days, HTML 1 hour'] },
    { name: 'GCP Pub/Sub + Cloud Functions Pipeline', description: 'Event-driven pipeline: Cloud Pub/Sub receives JSON events, Cloud Functions processes them, results written to Cloud Firestore.', techStack: ['GCP Pub/Sub', 'Cloud Functions', 'Firestore', 'Python'], difficulty: 'Beginner', resumeImpact: 'Pub/Sub + Cloud Functions mirrors SQS + Lambda — proves you understand cloud-agnostic event-driven patterns.', estimatedTime: '5 days', features: ['Pub/Sub topic with dead-letter topic', 'Cloud Functions v2 triggered by Pub/Sub message', 'Firestore write with retry on conflict', 'Cloud Monitoring dashboard for message processing lag'] },
    { name: 'Multi-Cloud DNS Failover: AWS Primary + GCP Secondary', description: 'Route53 health-check-based failover detecting AWS ALB failure and switching to GCP Cloud Run secondary within 60 seconds.', techStack: ['AWS Route53', 'GCP Cloud Run', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'Multi-cloud failover demonstrates cloud-agnostic resilience thinking — notable differentiation from single-cloud portfolios.', estimatedTime: '5 days', features: ['Route53 health check on primary ALB /health', 'Failover record set pointing to GCP Cloud Run URL', 'CloudWatch alarm on health check failure', 'Automated recovery test verifying failover within 60s'] },
    { name: 'Cloud Cost Comparison Tool (AWS + GCP + Azure)', description: 'Python tool querying AWS Cost Explorer, GCP Billing, and Azure Cost Management APIs producing a unified monthly spend report.', techStack: ['Python', 'boto3', 'google-cloud-billing', 'azure-mgmt-costmanagement'], difficulty: 'Beginner', resumeImpact: 'FinOps tooling across multiple clouds is a niche skill that consulting and platform teams specifically hire for.', estimatedTime: '1 week', features: ['Unified spend by service across all three clouds', 'Month-over-month change percentage per cloud', 'Projected month-end spend based on daily burn rate', 'CSV + HTML report export'] },
    { name: 'GCP IAM Policy Auditor', description: 'Python tool using GCP IAM Policy Analyser API to identify overly permissive bindings, service accounts with Owner role, unused permissions.', techStack: ['Python', 'Google Cloud IAM', 'google-cloud-asset', 'Terraform'], difficulty: 'Beginner', resumeImpact: 'GCP IAM auditing mirrors the AWS IAM audit project — shows consistent security thinking across clouds.', estimatedTime: '5 days', features: ['List all service accounts with primitive roles', 'Identify service accounts unused for 90 days', 'Check for allUsers or allAuthenticatedUsers bindings', 'JSON remediation plan per finding'] },
    { name: 'Azure DevOps Pipeline with Terraform', description: 'Azure DevOps pipeline automating infrastructure deployment: Terraform plan on PR, manual approval gate, Terraform apply on merge.', techStack: ['Azure DevOps', 'Terraform', 'Azure', 'YAML pipelines'], difficulty: 'Beginner', resumeImpact: 'Azure DevOps is dominant in enterprise Microsoft shops — opens doors to IT services Terraform/Azure roles.', estimatedTime: '5 days', features: ['Multi-stage YAML: validate → plan → approve → apply', 'Azure Pipeline environments with manual approval gate', 'Terraform state on Azure Blob Storage backend', 'Pipeline failure notification to Teams channel'] },
    { name: 'Azure Logic Apps Business Process Automation', description: 'Azure Logic Apps workflow: new form submission → email + Teams notification + CRM record creation — no custom code.', techStack: ['Azure Logic Apps', 'Office 365', 'Microsoft Teams', 'HTTP Connector'], difficulty: 'Beginner', resumeImpact: 'Logic Apps demonstrates Azure integration platform knowledge valued at enterprise Microsoft-stack companies.', estimatedTime: '4 days', features: ['HTTP trigger receiving form submission JSON', 'Office 365 email action to notify team', 'Teams channel message action', 'Conditional notification path based on lead score'] },
    { name: 'GKE Autopilot Production Deployment', description: 'Multi-service app on GKE Autopilot with Workload Identity, Cloud Armor WAF, managed TLS via cert-manager, and Cloud Monitoring.', techStack: ['GKE Autopilot', 'Workload Identity', 'Cloud Armor', 'Terraform', 'Helm'], difficulty: 'Intermediate', resumeImpact: 'GKE Autopilot is GCP\'s recommended Kubernetes offering — production deployment proves GCP Kubernetes depth.', estimatedTime: '2 weeks', features: ['GKE Autopilot with node auto-provisioning', 'Workload Identity for pod-level GCP service account binding', 'Cloud Armor WAF rule set on Load Balancer', 'Managed TLS via cert-manager + Google-managed certificates'] },
    { name: 'Pulumi Multi-Cloud IaC (AWS + GCP)', description: 'Pulumi TypeScript project provisioning equivalent infrastructure on AWS (S3 + CloudFront) and GCP (GCS + Cloud CDN) from a single codebase.', techStack: ['Pulumi', 'TypeScript', 'AWS', 'GCP'], difficulty: 'Intermediate', resumeImpact: 'Pulumi with real-language IaC is growing adoption — knowing it alongside Terraform is a notable differentiator.', estimatedTime: '2 weeks', features: ['Pulumi stack per cloud provider', 'Shared TypeScript StaticSite component working on both clouds', 'Pulumi state stored in Pulumi Cloud', 'CrossGuard policy: no public bucket ACL on either provider'] },
    { name: 'Tekton CI/CD on GKE', description: 'Tekton Pipelines CI/CD on GKE: build image → push to Artifact Registry → deploy via Helm, triggered by Cloud Build webhook.', techStack: ['Tekton Pipelines', 'GKE', 'GCP Artifact Registry', 'Cloud Build'], difficulty: 'Intermediate', resumeImpact: 'Tekton is Kubernetes-native CI/CD — proves cloud-agnostic pipeline design beyond GitHub Actions.', estimatedTime: '3 weeks', features: ['Tekton Pipeline: git-clone → kaniko-build → helm-deploy Tasks', 'Cloud Build webhook triggering Tekton PipelineRun via EventListener', 'Artifact Registry with vulnerability scanning', 'Tekton Dashboard for pipeline run visualization'] },
    { name: 'GCP Dataflow Streaming Pipeline (Apache Beam)', description: 'Dataflow job consuming Pub/Sub clickstream events, applying windowed aggregations, writing results to BigQuery.', techStack: ['GCP Dataflow', 'Apache Beam', 'Pub/Sub', 'BigQuery', 'Python'], difficulty: 'Intermediate', resumeImpact: 'Dataflow / Apache Beam is the GCP streaming standard — expected for GCP data engineering roles.', estimatedTime: '3 weeks', features: ['Python Apache Beam pipeline with Pub/Sub IO source', 'Fixed and sliding window aggregations per event type', 'BigQuery streaming inserts with at-least-once delivery', 'Dataflow job monitoring via Cloud Monitoring'] },
    { name: 'Azure Monitor + Microsoft Sentinel SIEM', description: 'Azure Monitor aggregating logs from VMs, AKS, and services, with Sentinel analytics rules for threat detection and playbook automation.', techStack: ['Azure Monitor', 'Microsoft Sentinel', 'Log Analytics', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'Azure Sentinel is the enterprise SIEM on Azure — setup experience is valued at security-conscious enterprises.', estimatedTime: '2 weeks', features: ['Log Analytics workspace with diagnostic settings per resource', 'Sentinel analytics rule: detect impossible travel login', 'Sentinel playbook auto-responding to medium severity incidents', 'Workbook dashboard for security posture overview'] },
    { name: 'Terraform Cloud with Sentinel Policy Governance', description: 'Terraform Cloud workspace setup with VCS-driven runs, Sentinel cost estimation policies, and team RBAC for multi-environment IaC.', techStack: ['Terraform Cloud', 'GitHub', 'Sentinel', 'AWS'], difficulty: 'Intermediate', resumeImpact: 'Terraform Cloud with governance policies is how large orgs manage IaC at scale.', estimatedTime: '2 weeks', features: ['VCS-driven workspace: PR triggers plan, merge triggers apply with approval', 'Sentinel policy checking cost estimates before apply', 'Team-based RBAC: read/plan/apply permissions per team', 'Slack notifications on plan and apply events'] },
    { name: 'Cross-Cloud Data Replication: RDS to BigQuery via Airbyte', description: 'Self-hosted Airbyte replicating AWS RDS PostgreSQL to GCP BigQuery incrementally, with dbt transformations on the warehouse.', techStack: ['Airbyte', 'AWS RDS', 'GCP BigQuery', 'dbt', 'Docker'], difficulty: 'Intermediate', resumeImpact: 'Cross-cloud data movement is a universal need — Airbyte + dbt is the modern data stack standard.', estimatedTime: '3 weeks', features: ['Airbyte self-hosted on Docker Compose', 'RDS to BigQuery incremental sync via updated_at cursor', 'dbt models transforming raw BigQuery data to analytics schema', 'Airbyte connection health alerts via webhook'] },
    { name: 'Azure Container Apps with KEDA Scaling', description: 'Scalable microservice on Azure Container Apps with KEDA event-driven autoscaling based on Azure Service Bus queue depth.', techStack: ['Azure Container Apps', 'KEDA', 'Service Bus', 'ACR', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'Azure Container Apps + KEDA is Microsoft\'s serverless Kubernetes offering — valuable for Azure-first companies.', estimatedTime: '2 weeks', features: ['Container App min 0 / max 10 replicas', 'KEDA Service Bus scaler triggering on queue length > 5', 'Dapr sidecar for service-to-service invocation', 'Azure Monitor metrics for replica count and latency'] },
    { name: 'FinOps Dashboard: Multi-Cloud Cost Attribution', description: 'Grafana dashboard pulling AWS Cost Explorer, GCP Billing export (BigQuery), and Azure Cost Management into a unified view by team.', techStack: ['Grafana', 'Python', 'AWS Cost Explorer', 'GCP BigQuery', 'Azure API'], difficulty: 'Intermediate', resumeImpact: 'A working multi-cloud FinOps dashboard is a unique portfolio piece every cloud platform team wishes it had.', estimatedTime: '3 weeks', features: ['Unified cost by cloud per week/month', 'Cost per team via normalized resource tags across clouds', 'Anomaly flag: services with > 30% WoW cost increase', 'Reserved/Spot utilization efficiency score per cloud'] },
    { name: 'Cloud-Native DR Playbook: AWS Primary + GCP Secondary', description: 'Documented and automated DR playbook covering RTO/RPO for a 3-tier app with Terraform-driven failover to GCP secondary.', techStack: ['AWS', 'GCP', 'Terraform', 'Route53', 'Python'], difficulty: 'Intermediate', resumeImpact: 'A tested, documented DR runbook is a deliverable most companies want but rarely have.', estimatedTime: '3 weeks', features: ['RDS backup replicated to GCP Cloud SQL via pg_dump + GCS', 'Terraform script bringing up GCP secondary in < 30 min', 'Route53 failover switching DNS to GCP Load Balancer', 'DR drill runbook with step-by-step checklist and RTO/RPO targets'] },
    { name: 'Azure Service Bus Event-Driven Microservices', description: 'Two microservices communicating via Azure Service Bus topics with dead-letter queue handling and message session grouping.', techStack: ['Azure Service Bus', 'Python', 'Azure Functions', 'Terraform'], difficulty: 'Intermediate', resumeImpact: 'Azure Service Bus is the Azure equivalent of SQS + SNS — proves you understand the cross-cloud mapping.', estimatedTime: '2 weeks', features: ['Service Bus topic with 2 subscriptions and filter rules', 'Message sessions for ordered processing per entity', 'DLQ handler Azure Function reprocessing failed messages', 'Service Bus Explorer for message inspection in development'] },
    { name: 'Multi-Cloud Kubernetes Federation with Cilium Cluster Mesh', description: 'EKS (AWS) and GKE (GCP) connected via Cilium Cluster Mesh for cross-cluster service discovery and mTLS.', techStack: ['AWS EKS', 'GKE', 'Cilium Cluster Mesh', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'Multi-cloud Kubernetes federation is an extremely advanced pattern — a principal engineer portfolio centerpiece.', estimatedTime: '7 weeks', features: ['Cilium installed on both clusters with shared CA', 'Cluster Mesh: pods in EKS call services in GKE by DNS', 'mTLS enforced between all cross-cluster calls', 'Grafana Hubble relay showing cross-cluster traffic flows'] },
    { name: 'Cloud Landing Zone Terraform Module Library', description: 'Reusable Terraform module library implementing landing zone patterns for AWS and GCP from a single repository with OPA unit tests.', techStack: ['Terraform', 'AWS', 'GCP', 'OPA Conftest', 'GitHub Actions'], difficulty: 'Advanced', resumeImpact: 'A production-grade reusable IaC module library is what platform teams aspire to — a consulting-grade differentiator.', estimatedTime: '7 weeks', features: ['15 Terraform modules: vpc-aws, vpc-gcp, eks, gke, iam-aws, iam-gcp, logging', 'Module versioning via Git tags', 'OPA conftest policy tests for every module', 'GitHub Actions: lint + validate + policy check + publish on tag'] },
    { name: 'Self-Service Cloud Infrastructure Portal with Backstage', description: 'Backstage-powered portal where developers request cloud resources via form — fulfilled automatically by Terraform Cloud.', techStack: ['Backstage', 'Terraform Cloud', 'GitHub Actions', 'AWS', 'GCP'], difficulty: 'Advanced', resumeImpact: 'Self-service infrastructure portals are the frontier of platform engineering — targets staff/principal engineering roles.', estimatedTime: '8 weeks', features: ['Backstage software template for cloud resource request', 'Template renders Terraform code, opens PR in infra repo', 'Terraform Cloud workspace auto-created and applied on PR merge', 'Resource details returned to requester via GitHub comment'] },
    { name: 'eBPF Cloud Network Security with Tetragon', description: 'Tetragon (Cilium eBPF) deployment providing runtime security enforcement and network observability on EKS.', techStack: ['Tetragon', 'Cilium', 'EKS', 'Falco', 'Grafana'], difficulty: 'Advanced', resumeImpact: 'eBPF runtime security is cutting-edge in 2026 — extremely few candidates have practical experience.', estimatedTime: '5 weeks', features: ['Tetragon TracingPolicy: block DNS to known malicious domains', 'Tetragon TracingPolicy: alert on outbound from non-whitelisted pods', 'Falco rules for process execution anomalies in containers', 'Grafana dashboard correlating Tetragon events with pod identity'] },
    { name: 'DORA Metrics Dashboard from GitHub + PagerDuty + Jira', description: 'DORA metrics dashboard (Deployment Frequency, Lead Time, MTTR, Change Failure Rate) pulling from GitHub, PagerDuty, and Jira APIs.', techStack: ['Python', 'GitHub API', 'PagerDuty API', 'Jira API', 'Grafana'], difficulty: 'Advanced', resumeImpact: 'DORA metrics implementation shows you think about engineering productivity at the organizational level.', estimatedTime: '5 weeks', features: ['Deployment Frequency: GitHub Releases API per repo per day', 'Lead Time: first commit to deploy timestamp via GitHub API', 'MTTR: PagerDuty incident created to resolved duration', 'Change Failure Rate: deploys followed by incident within 1 hour'] },
    { name: 'Cloud Security Posture Management (CSPM) Tool', description: 'Python-based CSPM scanning AWS, GCP, and Azure for misconfigurations and generating severity-ranked remediation reports.', techStack: ['Python', 'boto3', 'google-cloud-asset', 'azure-mgmt', 'Jinja2'], difficulty: 'Advanced', resumeImpact: 'Building a CSPM tool from scratch demonstrates deep multi-cloud security knowledge rarely shown by candidates.', estimatedTime: '6 weeks', features: ['20 security checks per cloud (public S3, open SGs, default VPC)', 'Severity-ranked findings with CVSS-style scoring', 'Automated Jinja2 HTML remediation report per cloud account', 'GitHub Actions: weekly scheduled CSPM run with S3 upload'] },
    { name: 'AI-Powered Cloud Cost Optimization Agent', description: 'LLM-powered agent analysing AWS Cost Explorer and GCP Billing, identifying waste, generating Terraform PR patches for optimizations.', techStack: ['Python', 'OpenAI API', 'boto3', 'Terraform', 'GitHub API'], difficulty: 'Advanced', resumeImpact: 'Combining AI with cloud cost engineering is novel and memorable — directly addresses a universal pain point.', estimatedTime: '6 weeks', features: ['Cost Explorer and GCP Billing data normalization', 'LLM analysis for rightsizing, idle resource, and reservation opportunities', 'Auto-generated Terraform PR with rightsizing changes', 'Human-in-the-loop: PR requires engineer approval before apply'] },
    { name: 'SOC 2 Compliance Automation on AWS', description: 'Automated evidence collection for SOC 2 Type II controls using AWS Config, CloudTrail, and Security Hub — exported to auditor-ready evidence package.', techStack: ['AWS Config', 'CloudTrail', 'Security Hub', 'Python', 'S3'], difficulty: 'Advanced', resumeImpact: 'Compliance automation is a high-value specialized skill — every company pursuing SOC 2 needs engineers who can automate evidence.', estimatedTime: '6 weeks', features: ['Config rules mapped to SOC 2 CC controls with evidence collection', 'CloudTrail query for audit trails per control requirement', 'Python evidence packager generating timestamped PDFs per control', 'Security Hub findings mapped to SOC 2 risk register'] },
    { name: 'GCP Cloud Armor + reCAPTCHA Enterprise Bot Protection', description: 'Cloud Armor WAF rules combined with reCAPTCHA Enterprise score-based adaptive protection on a Cloud Run API.', techStack: ['GCP Cloud Armor', 'reCAPTCHA Enterprise', 'Cloud Run', 'Terraform'], difficulty: 'Advanced', resumeImpact: 'Bot protection at cloud edge combining WAF + reCAPTCHA at infrastructure level is an advanced security specialization.', estimatedTime: '4 weeks', features: ['Cloud Armor with OWASP top-10 rule set', 'reCAPTCHA Enterprise token validation in Cloud Armor rule', 'Adaptive protection ML-based DDoS rule generation', 'Cloud Armor logs in BigQuery for threat analysis'] },
  ],
  implementationGuides: [
    {
      projectName: 'GCP Cloud Run Serverless API',
      folderStructure: `gcp-cloud-run-api/
├── app/
│   ├── main.py
│   ├── database.py
│   └── Dockerfile
├── terraform/
│   ├── main.tf
│   ├── cloud_run.tf
│   ├── cloud_sql.tf
│   ├── iam.tf
│   └── vpc.tf
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md`,
      keyFiles: [
        { file: 'terraform/cloud_run.tf', purpose: 'Cloud Run service with min_instance_count=0, max_instance_count=10, env vars from Secret Manager secret versions, VPC connector.' },
        { file: 'terraform/cloud_sql.tf', purpose: 'Cloud SQL PostgreSQL 15 with private IP only, no public IP, automated backups, and VPC connector for Cloud Run connectivity.' },
        { file: 'terraform/iam.tf', purpose: 'Service account for Cloud Run with roles: cloudsql.client and secretmanager.secretAccessor — minimal permissions only.' },
      ],
      steps: [
        'Enable Cloud Run, Cloud SQL, Secret Manager, VPC Access APIs via terraform google_project_service.',
        'Create VPC with private subnet and serverless VPC access connector.',
        'Create Cloud SQL PostgreSQL with private IP in private subnet — no public IP.',
        'Store DB password in Secret Manager via Terraform, grant Cloud Run service account secretAccessor.',
        'Build Cloud Run service resource: reference Secret Manager secrets as env vars, set VPC connector.',
        'Write GitHub Actions workflow: docker build → push to Artifact Registry → terraform apply updating image.',
        'Attach Cloud Armor WAF policy to the Cloud Run Load Balancer backend service.',
        'Load test to verify scale-to-zero and scale-out, document cold start latency in README.',
      ],
      deploymentNotes: 'Use Cloud Run min-instances=1 in production if cold start latency is unacceptable. Enable Cloud Run traffic splitting for canary deployments. Store Terraform state in GCS bucket with versioning enabled.',
    },
    {
      projectName: 'FinOps Dashboard: Multi-Cloud Cost Attribution',
      folderStructure: `finops-dashboard/
├── collectors/
│   ├── aws_collector.py
│   ├── gcp_collector.py
│   └── azure_collector.py
├── normalizer/
│   └── normalize.py
├── storage/
│   └── postgres_sink.py
├── grafana/
│   └── dashboards/
│       └── multi-cloud-cost.json
├── scheduler/
│   └── daily_collect.py
├── docker-compose.yml
└── requirements.txt`,
      keyFiles: [
        { file: 'collectors/aws_collector.py', purpose: 'boto3 Cost Explorer get_cost_and_usage with GroupBy SERVICE and Team tag filter, returning normalized cost records.' },
        { file: 'collectors/gcp_collector.py', purpose: 'BigQuery query against GCP billing export dataset, grouping by service and project label for team attribution.' },
        { file: 'normalizer/normalize.py', purpose: 'Maps cloud-specific records into unified schema: {date, cloud, service, team, amount_usd} for consistent Grafana queries.' },
      ],
      steps: [
        'Enable AWS Cost Explorer tag-based allocation with Team tag required on all resources.',
        'Enable GCP billing export to BigQuery and configure dataset name in gcp_collector.py.',
        'Enable Azure Cost Management export to storage account, configure collector to read it.',
        'Implement normalize.py mapping each cloud\'s service taxonomy to unified category names.',
        'Create PostgreSQL schema: cloud_costs(date, cloud, service, team, amount_usd, currency).',
        'Schedule daily collection via cron with error handling and alerting on failure.',
        'Configure Grafana with PostgreSQL data source and import dashboard JSON.',
        'Add anomaly detection: query for services with > 30% WoW increase, display as alert panel.',
      ],
      deploymentNotes: 'Deploy collector as Docker container on small EC2 or Cloud Run with cron schedule. Use separate IAM roles per cloud with read-only cost permissions. PostgreSQL can be RDS db.t3.micro — cost data volume is very low.',
    },
    {
      projectName: 'Pulumi Multi-Cloud IaC (AWS + GCP)',
      folderStructure: `pulumi-multi-cloud/
├── components/
│   ├── StaticSite.ts
│   └── types.ts
├── stacks/
│   ├── aws-stack/
│   │   └── index.ts
│   └── gcp-stack/
│       └── index.ts
├── policies/
│   └── no-public-buckets.ts
├── Pulumi.yaml
├── package.json
└── README.md`,
      keyFiles: [
        { file: 'components/StaticSite.ts', purpose: 'ComponentResource abstracting static site hosting — accepts provider type "aws"|"gcp" and creates appropriate S3/GCS + CDN resources.' },
        { file: 'stacks/aws-stack/index.ts', purpose: 'Pulumi program instantiating StaticSite with AWS provider, Route53 record, and CloudFront distribution.' },
        { file: 'policies/no-public-buckets.ts', purpose: 'Pulumi CrossGuard policy checking no S3 or GCS bucket has public ACL — blocks pulumi up if violated.' },
      ],
      steps: [
        'Initialize Pulumi TypeScript project with @pulumi/aws and @pulumi/gcp providers.',
        'Create StaticSite ComponentResource accepting config and provider discriminator.',
        'Implement AWS branch: S3 website bucket + OAC + CloudFront distribution + ACM cert.',
        'Implement GCP branch: Cloud Storage bucket + backend bucket + Cloud CDN + managed SSL.',
        'Create aws-stack and gcp-stack programs importing and instantiating the shared component.',
        'Write CrossGuard policy preventing public bucket ACLs on both providers.',
        'Run pulumi up on both stacks, verify both sites serve identical content at different URLs.',
        'Add GitHub Actions: pulumi preview on PR, pulumi up on merge, policy check on every run.',
      ],
      deploymentNotes: 'Store Pulumi state in Pulumi Cloud (free for individuals). Use Pulumi ESC for secrets management. Export stack outputs and consume in downstream stacks via StackReference.',
    },
  ],
  resumeImpact: [
    'Multi-cloud projects (AWS + GCP + Azure) significantly differentiate from single-cloud candidates in consulting and enterprise roles.',
    'FinOps and cost attribution projects are immediately relatable to engineering managers — quantified savings are memorable.',
    'Advanced projects (cluster federation, CSPM tool, compliance automation) target cloud architect and principal engineer levels.',
    'Pulumi knowledge alongside Terraform shows you evaluate and choose IaC tooling deliberately — impresses senior interviewers.',
  ],
  interviewTalkingPoints: [
    'For multi-cloud projects, explain the trade-offs of running workloads across clouds vs all-in on one provider.',
    'For GCP projects, explain how Workload Identity differs from AWS IRSA — same problem, different token exchange mechanism.',
    'For the FinOps dashboard, explain your cost schema normalization strategy and why you chose that data model.',
    'For compliance automation, identify which SOC 2 controls are easiest to automate and which require manual evidence.',
  ],
  faqs: [
    { question: 'Do I need accounts on all three clouds for these projects?', answer: 'No — pick AWS as primary and add one of GCP or Azure for breadth. GCP gives $300 free credit for new accounts. Azure gives $200. The multi-cloud projects are designed to be built one cloud at a time. You do not need all three simultaneously.' },
    { question: 'Is multi-cloud experience valued in Indian hiring in 2026?', answer: 'Yes, increasingly. IT services companies work with clients on all three clouds. AWS dominates product startups; Azure is default in banking (HDFC, ICICI) and enterprises with Microsoft licensing; GCP is dominant for data engineering with BigQuery. Adding GCP is highest-value for data roles, Azure for enterprise/BFSI roles.' },
    { question: 'What is the difference between DevOps, AWS, and Cloud project lists?', answer: 'DevOps projects cover pipeline, container, and operational tooling — mostly cloud-agnostic. AWS projects are AWS-specific service implementations. Cloud projects cover GCP, Azure, and multi-cloud patterns. Build from all three lists for a comprehensive cloud portfolio.' },
    { question: 'Is Pulumi worth learning if I already know Terraform?', answer: 'Worth knowing conceptually. Terraform remains dominant in the Indian job market in 2026. Pulumi\'s real-language advantage matters most for complex abstractions and testing. The Pulumi multi-cloud project demonstrates you can evaluate tools deliberately — which impresses senior interviewers.' },
    { question: 'Which GCP project best demonstrates expertise for a data engineering role?', answer: 'BigQuery Data Warehouse Analytics combined with the GCP Dataflow Streaming Pipeline cover the full GCP data engineering stack. BigQuery is dominant in India\'s analytics market — deep hands-on experience is a clear differentiator for data roles.' },
    { question: 'How do I prove cloud architecture skills without enterprise workloads?', answer: 'Three approaches: (1) Build the Cloud-Native DR Playbook and document RTO/RPO reasoning — interviewers evaluate thinking, not scale. (2) Architect an open-source app\'s cloud deployment from scratch, documenting each service choice. (3) Write Architecture Decision Records (ADRs) documenting why you chose specific services over alternatives.' },
  ],
  relatedResources: [
    roadmapLink('/resources/roadmaps/cloud-engineer-roadmap-2026', 'Cloud Engineer Roadmap 2026', 'The 10-month structured path these projects complement.'),
    roadmapLink('/resources/roadmaps/aws-devops-roadmap-2026', 'AWS DevOps Roadmap 2026', 'Deeper AWS-specific skills these projects build on.'),
    interviewLink('/resources/interview-questions/cloud-engineer', '100+ Cloud Engineer Interview Questions', 'Architecture, security, and multi-cloud questions with detailed answers.'),
    tutorialLink('/resources/tutorials/aws', 'AWS Tutorial', 'AWS fundamentals before starting cloud architecture projects.'),
    courseLink('/courses/devops', 'AWS DevOps Course', 'Structured AWS and cloud training with hands-on architecture labs.'),
    { title: 'AWS Projects', href: '/resources/projects/aws-projects', description: 'AWS-specific projects complementing these multi-cloud patterns.', category: 'Projects', icon: '🛠️' },
  ],
  seo: {
    title: '30+ Cloud Engineering Projects for Portfolio (2026) — AWS, GCP, Azure, Multi-Cloud',
    description: 'Build 30+ cloud engineering projects: GKE, Azure AKS, BigQuery, multi-cloud FinOps, Pulumi IaC, CSPM, and SOC 2 compliance automation. Full guides for 2026 cloud hiring.',
    keywords: ['cloud engineering projects 2026', 'gcp project ideas resume', 'azure project ideas portfolio', 'multi cloud terraform project', 'cloud engineer portfolio projects india'],
  },
};

// ════════════════════════════════════════════════════════════════════════════
// MASTER EXPORT — all 10 categories
// ════════════════════════════════════════════════════════════════════════════
export const PROJECTS_DATA: ProjectCategory[] = [
  pythonProjects,
  djangoProjects,
  reactProjects,
  fullStackProjects,
  aiProjects,
  mlProjects,
  dataScienceProjects,
  devopsProjects,
  awsProjects,
  cloudProjects,
];

// app/resources/roadmaps/python-developer-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Python Developer Roadmap 2026 — Complete Month-by-Month Guide | Crack Leap Academy',
  description:
    'Complete Python developer roadmap 2026 with month-by-month plan. Learn Python, Django, FastAPI, PostgreSQL, Redis, Docker, AWS, and land a ₹8–30 LPA Python developer job.',
  keywords:
    'python developer roadmap 2026, how to learn python, python career path, python backend developer roadmap, django fastapi roadmap, python jobs india',
  openGraph: {
    title: 'Python Developer Roadmap 2026 | Crack Leap Academy',
    description: 'Step-by-step Python developer roadmap with 12-month plan, projects, and interview prep.',
    url: 'https://arivuon.com/resources/roadmaps/python-developer-roadmap-2026',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/python-developer-roadmap-2026' },
};

const TOC_ITEMS = [
  { id: 'what-is-python-developer', label: 'What Is a Python Developer?' },
  { id: 'who-should-learn', label: 'Who Should Learn Python?' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'timeline', label: 'Learning Timeline Overview' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'skills', label: 'Skills Required' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'projects', label: 'Projects to Build' },
  { id: 'interview-prep', label: 'Interview Preparation' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'careers', label: 'Career Opportunities' },
  { id: 'salary', label: 'Expected Salary in India' },
  { id: 'mistakes', label: 'Common Mistakes to Avoid' },
  { id: 'resources', label: 'Learning Resources' },
  { id: 'faq', label: 'FAQ' },
];

const MONTHS = [
  {
    month: 'Month 1–2',
    title: 'Python Fundamentals',
    topics: [
      'Python syntax, variables, data types (int, float, str, bool)',
      'Control flow: if/elif/else, for loops, while loops, break/continue',
      'Functions: def, return, default arguments, *args, **kwargs',
      'Built-in data structures: list, tuple, dict, set',
      'List comprehensions and generator expressions',
      'File I/O: reading and writing text/CSV/JSON files',
      'Exception handling: try/except/finally, custom exceptions',
      'Modules and packages: importing, creating, __init__.py',
      'Standard library: os, sys, datetime, collections, itertools',
    ],
    project: 'Build a command-line expense tracker that reads/writes CSV files.',
    milestone: 'Write Python scripts without looking at documentation for basic tasks.',
  },
  {
    month: 'Month 3',
    title: 'Object-Oriented Programming & Advanced Python',
    topics: [
      'Classes, objects, instance vs class attributes',
      'Inheritance, multiple inheritance, MRO',
      'Dunder/magic methods: __init__, __str__, __repr__, __len__, __eq__',
      'Properties (@property), classmethods, staticmethods',
      'Decorators: creating and using function decorators',
      'Generators and lazy evaluation with yield',
      'Context managers: with statement, __enter__/__exit__',
      'Type hints and mypy for static type checking',
      'Python internals: GIL, memory management, garbage collection',
    ],
    project: 'Build an object-oriented library management system with file persistence.',
    milestone: 'Understand Python\'s data model and write idiomatic Pythonic code.',
  },
  {
    month: 'Month 4',
    title: 'Databases & SQL',
    topics: [
      'Relational database concepts: tables, rows, columns, primary/foreign keys',
      'SQL fundamentals: SELECT, INSERT, UPDATE, DELETE, JOINs',
      'PostgreSQL: installation, psql CLI, creating databases and users',
      'Python + PostgreSQL: psycopg2, connection pooling',
      'SQLAlchemy Core and ORM: models, sessions, queries',
      'Database migrations with Alembic',
      'Indexing strategies and EXPLAIN ANALYZE',
      'Transactions, ACID properties',
      'Introduction to Redis: strings, lists, hashes, expiry',
    ],
    project: 'Build a student grade management API backed by PostgreSQL using raw SQLAlchemy.',
    milestone: 'Write complex JOIN queries and understand ORM-generated SQL.',
  },
  {
    month: 'Month 5–6',
    title: 'Django Web Framework',
    topics: [
      'Django architecture: MVT pattern, request/response cycle',
      'Django ORM: models, migrations, querysets, select_related, prefetch_related',
      'Django REST Framework: serializers, APIView, ViewSets, routers',
      'Authentication: session auth, JWT with djangorestframework-simplejwt',
      'Permissions and throttling in DRF',
      'Django admin customization',
      'Celery for async task queues with Redis broker',
      'Django signals and custom middleware',
      'Testing: pytest-django, factory_boy, APITestCase',
      'Django caching: Memcached and Redis cache backends',
    ],
    project: 'Build a full e-commerce REST API with user auth, products, orders, and Celery-powered email notifications.',
    milestone: 'Build and test a production-quality Django REST API with authentication.',
  },
  {
    month: 'Month 7',
    title: 'FastAPI & Modern Python APIs',
    topics: [
      'FastAPI core: path operations, request/response models with Pydantic',
      'Async Python: asyncio, async/await, event loop',
      'FastAPI dependency injection system',
      'Database with SQLAlchemy (async) + Alembic',
      'FastAPI authentication: OAuth2, JWT, API keys',
      'Background tasks and WebSockets in FastAPI',
      'API documentation: Swagger UI and ReDoc',
      'Pydantic v2: validators, computed fields, model config',
      'Testing FastAPI with pytest and TestClient',
    ],
    project: 'Build a real-time notification service using FastAPI + WebSockets + Redis Pub/Sub.',
    milestone: 'Understand async Python deeply and build high-performance APIs.',
  },
  {
    month: 'Month 8',
    title: 'Docker & Containerization',
    topics: [
      'Docker fundamentals: images, containers, Dockerfile',
      'Multi-stage Docker builds for Python applications',
      'docker-compose for local development with PostgreSQL and Redis',
      'Docker networking and volumes',
      'Pushing to Docker Hub and ECR',
      'Environment variable management with .env files',
      'Health checks in Docker containers',
      'Introduction to Kubernetes: pods, deployments, services',
      'Deploying Python apps to a local Kubernetes cluster (minikube)',
    ],
    project: 'Containerize your Django or FastAPI app with Docker Compose (app + PostgreSQL + Redis + Nginx).',
    milestone: 'Run your applications in containers and understand container orchestration basics.',
  },
  {
    month: 'Month 9–10',
    title: 'AWS Deployment & Cloud',
    topics: [
      'AWS core services: EC2, S3, RDS, ElastiCache, SQS',
      'IAM: users, roles, policies, least privilege principle',
      'Deploying Django/FastAPI to EC2 with Nginx + Gunicorn',
      'AWS RDS (PostgreSQL) setup and connection from application',
      'S3 for media file storage, boto3 SDK',
      'CloudFront CDN for static and media files',
      'GitHub Actions CI/CD pipeline: lint → test → build → deploy',
      'Environment secrets management with AWS Secrets Manager',
      'Monitoring with CloudWatch logs and alarms',
      'AWS Lambda for serverless Python functions',
    ],
    project: 'Deploy your e-commerce API to AWS: EC2 + RDS + ElastiCache + S3 + GitHub Actions CI/CD.',
    milestone: 'Deploy, monitor, and maintain a production Python application on AWS.',
  },
  {
    month: 'Month 11–12',
    title: 'System Design & Senior Skills',
    topics: [
      'System design fundamentals: scalability, availability, consistency',
      'Design patterns in Python: Singleton, Factory, Observer, Strategy',
      'Microservices vs monolith: when to choose each',
      'API gateway patterns and rate limiting',
      'Message queues: RabbitMQ and Kafka basics',
      'Caching strategies: cache-aside, write-through, write-behind',
      'Database sharding and read replicas',
      'Code review best practices and writing clean Python',
      'Contributing to open source Python projects',
      'Mock system design interviews: design URL shortener, job board, payment system',
    ],
    project: 'Build a URL shortener with rate limiting, analytics, caching, and high-availability deployment.',
    milestone: 'Design and explain systems that handle 100K+ users. Ready for senior Python interviews.',
  },
];

const FAQS = [
  {
    question: 'How long does it take to become a Python developer?',
    answer:
      'With consistent 3–4 hours of daily study, you can reach junior-level Python developer proficiency in 8–10 months. To reach mid-level where you can handle Django/FastAPI projects independently takes 12–15 months. Senior Python developers typically have 3+ years of production experience.',
  },
  {
    question: 'What salary can a Python developer expect in India in 2026?',
    answer:
      'Entry-level Python developers (0–1 year) earn ₹4–8 LPA. Mid-level developers (2–4 years) earn ₹10–20 LPA. Senior Python developers (5+ years) earn ₹20–45 LPA. Specialized roles in AI/ML with Python can command ₹30–60 LPA at product companies.',
  },
  {
    question: 'Should I learn Django or FastAPI first?',
    answer:
      'Learn Django first. Django provides structure, includes an ORM, admin interface, authentication, and follows the batteries-included philosophy. Understanding Django deeply will make learning FastAPI much easier. FastAPI is better for high-performance APIs and microservices, but Django is more commonly asked in Indian job interviews.',
  },
  {
    question: 'Do I need to know JavaScript to be a Python backend developer?',
    answer:
      'No, you don\'t need JavaScript for pure Python backend roles. However, knowing basic JavaScript helps you communicate better with frontend teams and builds more well-rounded applications. Understanding REST API contracts and how frontend applications consume APIs is more important.',
  },
  {
    question: 'Which Python certifications are worth getting?',
    answer:
      'The most industry-respected Python-related certifications are: AWS Certified Developer (validates cloud deployment skills), PCEP/PCAP (Python Institute certifications), and Django REST Framework knowledge demonstrated through projects. Certifications matter less than GitHub projects and practical experience in Indian hiring.',
  },
  {
    question: 'Is Python in demand for jobs in India in 2026?',
    answer:
      'Yes, Python is the most in-demand programming language in India for 2026. Companies hiring Python developers include: Flipkart, Razorpay, Zepto, Swiggy, Meesho, Ola, Dunzo, all IT services companies (TCS, Infosys, Wipro), startups, and MNCs (Google, Amazon, Microsoft India). Python is also the primary language for AI/ML roles, making demand even higher.',
  },
  {
    question: 'What is the best Python web framework to learn in 2026?',
    answer:
      'Django remains the most hireable Python web framework for backend roles. FastAPI is the best choice for building microservices and ML model APIs. Flask is lightweight and good for learning but is being replaced by FastAPI in new projects. If you only have time for one, learn Django first, then FastAPI.',
  },
  {
    question: 'Can a non-CS graduate become a Python developer?',
    answer:
      'Absolutely. Many successful Python developers in India come from non-CS backgrounds including mechanical engineering, commerce, and arts. Python is beginner-friendly and the developer community is supportive. Focus on building 3–4 strong portfolio projects, contribute to open source, and practice interview questions. Your degree matters far less than your demonstrated skills.',
  },
];

const RELATED = [
  {
    title: '150+ Python Interview Questions & Answers 2026',
    href: '/resources/interview-questions/python-developer',
    description: 'Prepare for Python developer interviews with questions from beginner to system design.',
    category: 'Interview Prep',
    icon: '💬',
  },
  {
    title: '30+ Python Projects for Your Portfolio',
    href: '/resources/projects/python-projects',
    description: 'Beginner to advanced Python project ideas with implementation guides.',
    category: 'Projects',
    icon: '🛠️',
  },
  {
    title: 'AWS DevOps Engineer Roadmap 2026',
    href: '/resources/roadmaps/aws-devops-roadmap-2026',
    description: 'Add cloud skills to your Python stack with this AWS DevOps roadmap.',
    category: 'Roadmap',
    icon: '☁️',
  },
  {
    title: 'Django Tutorial: Build a Production API',
    href: '/resources/tutorials/django',
    description: 'In-depth Django REST Framework tutorial from setup to AWS deployment.',
    category: 'Tutorial',
    icon: '📚',
  },
  {
    title: 'Python Developer Course',
    href: '/courses/python',
    description: 'Structured Python course with mentorship from Crack Leap instructors.',
    category: 'Course',
    icon: '🎓',
  },
  {
    title: 'AI Engineer Roadmap 2026',
    href: '/resources/roadmaps/ai-engineer-roadmap-2026',
    description: 'Extend your Python skills into AI/ML with this comprehensive roadmap.',
    category: 'Roadmap',
    icon: '🤖',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
  { label: 'Python Developer Roadmap 2026', href: '/resources/roadmaps/python-developer-roadmap-2026' },
];

export default function PythonRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Python Developer Roadmap 2026', description: 'Complete month-by-month Python developer roadmap for 2026.', url: 'https://arivuon.com/resources/roadmaps/python-developer-roadmap-2026', dateModified: '2025-12-01' })) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🐍</span>
            <div>
              <span className="text-green-200 text-sm font-semibold uppercase tracking-wider">Developer Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Python Developer Roadmap 2026
              </h1>
            </div>
          </div>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            A complete, opinionated, month-by-month learning plan to go from Python beginner to
            a hireable Python backend developer earning ₹8–30 LPA.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 12-Month Plan', '🎯 All Levels', '📅 Updated December 2025', '🇮🇳 India-focused'].map(tag => (
              <span key={tag} className="bg-green-500/30 border border-green-400/40 px-3 py-1.5 rounded-full text-green-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        {/* What is a Python Developer */}
        <section id="what-is-python-developer" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Python Developer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Python developer is a software engineer who uses Python as their primary programming language to build 
            web applications, APIs, data pipelines, automation tools, and machine learning systems. Python is the 
            world's most popular programming language as of 2025, according to TIOBE, IEEE Spectrum, and the 
            Stack Overflow Developer Survey, and demand for Python developers in India has grown over 40% year-on-year.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Python developers typically specialize in one of three areas: <strong>backend web development</strong> 
            (Django, FastAPI), <strong>data engineering and data science</strong> (Pandas, PySpark, Airflow), or 
            <strong>AI/ML engineering</strong> (PyTorch, TensorFlow, LangChain). This roadmap focuses on backend 
            web development and API engineering — the highest-demand Python specialization in Indian companies.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="font-semibold text-green-800 mb-2">🎯 What You'll Be Able to Do After This Roadmap</p>
            <ul className="text-green-700 text-sm space-y-1">
              <li>✅ Build production REST APIs with Django REST Framework and FastAPI</li>
              <li>✅ Design and optimize PostgreSQL database schemas</li>
              <li>✅ Implement authentication, authorization, and security best practices</li>
              <li>✅ Write comprehensive tests with pytest and maintain 80%+ code coverage</li>
              <li>✅ Containerize applications with Docker and deploy to AWS</li>
              <li>✅ Set up CI/CD pipelines with GitHub Actions</li>
              <li>✅ Handle 10,000+ concurrent users with proper caching and async patterns</li>
              <li>✅ Pass technical interviews at Indian product companies (Flipkart, Razorpay, Meesho, Zepto)</li>
            </ul>
          </div>
        </section>

        {/* Who Should Learn */}
        <section id="who-should-learn" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Learn Python in 2026?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '👨‍🎓', title: 'CS/IT Graduates', desc: 'Fresh graduates who want to specialize in backend development and land their first 8–12 LPA role.' },
              { icon: '🔄', title: 'Career Switchers', desc: 'Professionals from other fields (engineering, finance, teaching) who want to transition into software development.' },
              { icon: '☕', title: 'Java/.NET Developers', desc: 'Enterprise developers who want to add Python skills for AI/ML, data engineering, or startups.' },
              { icon: '📊', title: 'Excel/Data Analysts', desc: 'Analysts who want to automate workflows and graduate to data science or data engineering roles.' },
              { icon: '🛠️', title: 'DevOps Engineers', desc: 'Ops engineers who write automation scripts and want to build internal tools and APIs in Python.' },
              { icon: '🤖', title: 'AI/ML Aspirants', desc: 'Those who want to enter the AI field — Python is the primary language for all ML/AI work.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prerequisites */}
        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
          <p className="text-gray-600 mb-5">
            Python is beginner-friendly. You do not need prior programming experience to start this roadmap. 
            However, the following will make your journey faster:
          </p>
          <div className="space-y-3">
            {[
              { need: 'Basic computer skills', why: 'You should be comfortable using a terminal/command prompt and editing files.', required: true },
              { need: 'Problem-solving mindset', why: 'Programming is about breaking problems into smaller pieces. Logical thinking matters more than math.', required: true },
              { need: 'English reading ability', why: 'Most Python documentation, tutorials, and Stack Overflow answers are in English.', required: true },
              { need: 'Basic algebra and logic', why: 'Simple if/then logic and arithmetic. No calculus required for backend development.', required: false },
              { need: 'Any programming language', why: 'If you know any other language, you\'ll find Python syntax much easier to pick up.', required: false },
            ].map(item => (
              <div key={item.need} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.required ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {item.required ? '!' : '✓'}
                </span>
                <div>
                  <span className="font-semibold text-gray-900">{item.need}</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${item.required ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                    {item.required ? 'Required' : 'Nice to have'}
                  </span>
                  <p className="text-gray-500 text-sm mt-1">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Timeline Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-4 py-3 text-left rounded-tl-lg">Timeline</th>
                  <th className="px-4 py-3 text-left">Phase</th>
                  <th className="px-4 py-3 text-left">Focus</th>
                  <th className="px-4 py-3 text-left rounded-tr-lg">Goal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Month 1–2', 'Python Core', 'Syntax, data structures, OOP, file I/O', 'Write scripts and solve LeetCode Easy'],
                  ['Month 3', 'Advanced Python', 'Decorators, generators, type hints, internals', 'Write idiomatic Pythonic code'],
                  ['Month 4', 'Databases', 'SQL, PostgreSQL, SQLAlchemy, Redis', 'Build database-backed applications'],
                  ['Month 5–6', 'Django', 'ORM, DRF, authentication, Celery, testing', 'Build production REST APIs'],
                  ['Month 7', 'FastAPI', 'Async Python, Pydantic, dependency injection', 'Build high-performance async APIs'],
                  ['Month 8', 'DevOps', 'Docker, docker-compose, Kubernetes basics', 'Containerize and run applications'],
                  ['Month 9–10', 'AWS & CI/CD', 'EC2, RDS, S3, GitHub Actions deployment', 'Deploy production applications'],
                  ['Month 11–12', 'System Design', 'Design patterns, scalability, senior skills', 'Pass senior Python interviews'],
                ].map(([time, phase, focus, goal], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-green-700 border-b border-gray-100 whitespace-nowrap">{time}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{phase}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{focus}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Month-by-Month Roadmap */}
        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Python Developer Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-green-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                      <h3 className="text-white font-bold text-xl">{m.title}</h3>
                    </div>
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      Phase {idx + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Topics to Learn</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((topic, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700 font-semibold text-sm mb-1">🛠️ Project</p>
                      <p className="text-blue-600 text-sm">{m.project}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-700 font-semibold text-sm mb-1">🎯 Milestone</p>
                      <p className="text-amber-600 text-sm">{m.milestone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills Required for Python Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: 'Core Python Skills',
                color: 'green',
                skills: ['Python 3.x syntax and semantics', 'Object-oriented programming', 'Functional programming patterns', 'Async programming with asyncio', 'Type annotations and mypy', 'Testing with pytest', 'Debugging and profiling', 'Virtual environments and pip'],
              },
              {
                category: 'Web Framework Skills',
                color: 'blue',
                skills: ['Django ORM and migrations', 'Django REST Framework', 'FastAPI with Pydantic', 'URL routing and views', 'Middleware and signals', 'Template engines', 'WebSocket handling', 'API versioning strategies'],
              },
              {
                category: 'Database Skills',
                color: 'purple',
                skills: ['PostgreSQL query optimization', 'SQLAlchemy ORM', 'Database normalization', 'Indexing strategies', 'Connection pooling', 'Database migrations', 'Redis for caching/queues', 'NoSQL basics (MongoDB)'],
              },
              {
                category: 'DevOps & Cloud Skills',
                color: 'orange',
                skills: ['Docker and containerization', 'AWS EC2, RDS, S3', 'Nginx and Gunicorn', 'GitHub Actions CI/CD', 'Environment management', 'Log aggregation', 'Performance monitoring', 'Security best practices'],
              },
            ].map(section => (
              <div key={section.category} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{section.category}</h3>
                <ul className="space-y-2">
                  {section.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'Python 3.12+', category: 'Language', icon: '🐍' },
              { name: 'Django 5.x', category: 'Framework', icon: '🌐' },
              { name: 'FastAPI 0.11x', category: 'Framework', icon: '⚡' },
              { name: 'PostgreSQL 16', category: 'Database', icon: '🐘' },
              { name: 'Redis 7', category: 'Cache/Queue', icon: '🔴' },
              { name: 'Celery', category: 'Task Queue', icon: '🌿' },
              { name: 'Docker', category: 'DevOps', icon: '🐳' },
              { name: 'AWS EC2/RDS/S3', category: 'Cloud', icon: '☁️' },
              { name: 'GitHub Actions', category: 'CI/CD', icon: '🔄' },
              { name: 'pytest', category: 'Testing', icon: '🧪' },
              { name: 'SQLAlchemy', category: 'ORM', icon: '🔗' },
              { name: 'Pydantic', category: 'Validation', icon: '✅' },
              { name: 'Nginx', category: 'Web Server', icon: '⚙️' },
              { name: 'Git', category: 'Version Control', icon: '📝' },
              { name: 'VS Code / PyCharm', category: 'IDE', icon: '💻' },
              { name: 'Postman / Bruno', category: 'API Testing', icon: '📮' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-green-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.category}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Projects to Build</h2>
          <p className="text-gray-600 mb-6">
            Employers at Indian product companies evaluate candidates primarily on their GitHub portfolio. 
            Build these projects in order — each builds on the previous.
          </p>
          <div className="space-y-4">
            {[
              { level: 'Beginner', color: 'green', projects: ['CLI expense tracker (CSV file storage)', 'Password generator and manager', 'Web scraper with BeautifulSoup and requests', 'Simple calculator with error handling', 'Contact book with JSON persistence'] },
              { level: 'Intermediate', color: 'blue', projects: ['Blog API with Django REST Framework + JWT auth', 'Task management API with Celery email notifications', 'Real-time chat with Django Channels + WebSockets', 'E-commerce REST API with payments integration', 'URL shortener with click analytics and Redis caching'] },
              { level: 'Advanced', color: 'purple', projects: ['Microservices e-commerce platform (Django + FastAPI + Kafka)', 'ML model serving API with FastAPI + Docker + monitoring', 'Multi-tenant SaaS backend with subscription billing', 'GitHub Actions CI/CD pipeline deploying to AWS ECS', 'Real-time analytics dashboard with PostgreSQL + Redis Streams'] },
            ].map(tier => (
              <div key={tier.level} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className={`px-5 py-3 ${tier.level === 'Beginner' ? 'bg-green-600' : tier.level === 'Intermediate' ? 'bg-blue-600' : 'bg-purple-600'} text-white`}>
                  <h3 className="font-bold">{tier.level} Projects</h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {tier.projects.map(proj => (
                    <li key={proj} className="flex items-center gap-3 px-5 py-3 text-gray-600 text-sm hover:bg-gray-50">
                      <span className="text-green-500">→</span> {proj}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/resources/projects/python-projects" className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:underline">
              View 30+ Python project ideas with full implementation guides →
            </Link>
          </div>
        </section>

        {/* Interview Prep */}
        <section id="interview-prep" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Preparation Strategy</h2>
          <p className="text-gray-600 mb-6">Start practicing interview questions from Month 4 onwards. Here is the interview structure for Python developer roles in India:</p>
          <div className="space-y-4">
            {[
              { round: 'Round 1', title: 'Online Coding Assessment', desc: 'LeetCode Easy/Medium problems using Python. Focus: arrays, strings, hashmaps, two pointers, sliding window. Platforms: HackerRank, LeetCode, Coderbyte.', duration: '60–90 minutes' },
              { round: 'Round 2', title: 'Core Python Technical Interview', desc: 'Python fundamentals, OOP, decorators, generators, memory management, GIL, async. Be ready to write code on screen and explain your approach.', duration: '45–60 minutes' },
              { round: 'Round 3', title: 'Framework & Project Deep Dive', desc: 'Questions on Django/FastAPI, your portfolio projects, database design decisions, API design, and caching strategies. Walk through your best project in detail.', duration: '60 minutes' },
              { round: 'Round 4', title: 'System Design', desc: 'Design scalable systems: URL shortener, ride-sharing backend, e-commerce platform. Mid-senior roles only. Focus: database schema, API design, caching, scaling.', duration: '45–60 minutes' },
              { round: 'Round 5', title: 'HR & Behavioral', desc: 'Tell me about yourself, conflict resolution, biggest technical challenge, salary expectations. Practice STAR format answers.', duration: '30 minutes' },
            ].map((round, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span className="font-bold text-gray-900">{round.title}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{round.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{round.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link href="/resources/interview-questions/python-developer" className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:underline">
              Practice 150+ Python interview questions with detailed answers →
            </Link>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Certifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-3 text-left">Certification</th>
                  <th className="px-4 py-3 text-left">Provider</th>
                  <th className="px-4 py-3 text-left">Cost (approx.)</th>
                  <th className="px-4 py-3 text-left">When to Take</th>
                  <th className="px-4 py-3 text-left">Hiring Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AWS Certified Developer – Associate', 'Amazon Web Services', '₹15,000', 'Month 10', '⭐⭐⭐⭐⭐'],
                  ['PCEP – Python Entry Programmer', 'Python Institute', '₹6,000', 'Month 3', '⭐⭐'],
                  ['PCAP – Python Associate Programmer', 'Python Institute', '₹12,000', 'Month 5', '⭐⭐⭐'],
                  ['AWS Certified Solutions Architect', 'Amazon Web Services', '₹15,000', 'Month 12', '⭐⭐⭐⭐⭐'],
                  ['Google Professional Cloud Developer', 'Google Cloud', '₹18,000', 'Month 12', '⭐⭐⭐⭐'],
                ].map(([cert, provider, cost, when, value], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{cert}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{provider}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cost}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{when}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Note: Portfolio projects carry more weight than certifications at most Indian product companies. 
            Get the AWS cert after deployment experience — it validates skills you've already used.
          </p>
        </section>

        {/* Career & Salary */}
        <section id="careers" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { role: 'Python Backend Developer', companies: 'Flipkart, Meesho, Zepto, Dunzo, Swiggy', description: 'Build APIs, services, and backend systems using Django, FastAPI, and Python microservices.' },
              { role: 'Python Software Engineer', companies: 'TCS, Infosys, Wipro, Cognizant, Capgemini', description: 'Enterprise Python development for client projects, automation, and internal tools.' },
              { role: 'Python Developer (Fintech)', companies: 'Razorpay, Zerodha, CRED, Groww, PhonePe', description: 'Build payment APIs, trading engines, and financial data processing systems.' },
              { role: 'API Engineer', companies: 'Juspay, BrowserStack, Postman, Freshworks', description: 'Design and maintain public APIs consumed by thousands of developers globally.' },
              { role: 'ML Engineer (Python)', companies: 'Google, Amazon, Microsoft, Sarvam AI', description: 'Build ML pipelines, model serving APIs, and AI infrastructure using Python.' },
              { role: 'Data Engineer (Python)', companies: 'Data.world, Uber, Hotstar, ShareChat', description: 'Build ETL pipelines, data lakes, and streaming systems using Python + PySpark.' },
            ].map(career => (
              <div key={career.role} className="p-5 bg-white border border-gray-200 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-1">{career.role}</h3>
                <p className="text-blue-600 text-xs font-medium mb-2">{career.companies}</p>
                <p className="text-gray-500 text-sm">{career.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expected Salary — Python Developers in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-left">Startup</th>
                  <th className="px-4 py-3 text-left">Mid-size</th>
                  <th className="px-4 py-3 text-left">Product Companies</th>
                  <th className="px-4 py-3 text-left">MNCs (Google, Amazon)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fresher (0 yr)', '₹4–6 LPA', '₹5–8 LPA', '₹8–15 LPA', '₹20–35 LPA'],
                  ['Junior (1–2 yr)', '₹6–10 LPA', '₹8–15 LPA', '₹12–20 LPA', '₹25–40 LPA'],
                  ['Mid (3–5 yr)', '₹10–18 LPA', '₹14–22 LPA', '₹20–35 LPA', '₹35–60 LPA'],
                  ['Senior (5–8 yr)', '₹18–28 LPA', '₹22–35 LPA', '₹35–55 LPA', '₹50–80 LPA'],
                  ['Staff/Principal', '₹25–40 LPA', '₹35–55 LPA', '₹55–90 LPA', '₹80–120+ LPA'],
                ].map(([exp, ...vals], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{exp}</td>
                    {vals.map((v, vi) => (
                      <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            *Data sourced from Glassdoor India, LinkedIn Salary, and AmbitionBox (December 2025). 
            Actual salaries vary by city, company, and individual negotiation.
          </p>
        </section>

        {/* Mistakes */}
        <section id="mistakes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {[
              { mistake: 'Tutorial Hell', solution: 'After completing any tutorial, immediately build something new from scratch. Don\'t watch another tutorial — struggle first.' },
              { mistake: 'Learning too many frameworks at once', solution: 'Master Django fully before moving to FastAPI. Jumping between Flask, Django, and FastAPI simultaneously leads to shallow knowledge of all three.' },
              { mistake: 'Ignoring testing', solution: 'Untested code is the #1 red flag in Python interviews and code reviews. Write tests from Month 5 onwards as a non-negotiable habit.' },
              { mistake: 'Skipping SQL fundamentals', solution: 'ORM is not a replacement for SQL knowledge. Interviewers ask raw SQL questions. Spend time mastering JOINs, indexes, and EXPLAIN ANALYZE.' },
              { mistake: 'Building projects without deploying them', solution: 'GitHub repositories without live deployments signal that you can\'t ship. Deploy every project — even a free tier EC2 or Railway.app instance.' },
              { mistake: 'Neglecting async programming', solution: 'FastAPI and modern Python backend work heavily uses async/await. Understand the event loop, asyncio, and when NOT to use async.' },
              { mistake: 'Copying code without understanding it', solution: 'Stack Overflow and ChatGPT answers can work without teaching you anything. Type every code example by hand. Understand before you copy.' },
            ].map(item => (
              <div key={item.mistake} className="flex gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                <span className="flex-shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                <div>
                  <span className="font-semibold text-red-800">{item.mistake}: </span>
                  <span className="text-red-700 text-sm">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { category: '📖 Books', items: ['Fluent Python by Luciano Ramalho (best Python book)', 'Python Tricks by Dan Bader (Pythonic patterns)', 'Two Scoops of Django by Feldroy (best practices)', 'Architecture Patterns with Python by Harry Percival', 'Clean Code adapted for Python by Alan Gauld'] },
              { category: '🎓 Free Courses', items: ['CS50P: Introduction to Programming with Python (Harvard)', 'Python for Everybody (University of Michigan — Coursera)', 'Django for Beginners / Django for APIs (official book)', 'FastAPI Official Documentation (excellent tutorials)', 'Real Python website (best free Python tutorials)'] },
              { category: '🧪 Practice Platforms', items: ['LeetCode (algorithmic problems in Python)', 'Exercism Python track (idiomatic Python exercises)', 'HackerRank Python challenges', 'Project Euler (mathematical programming)', 'Kaggle (data science and Python competitions)'] },
              { category: '🏆 Communities', items: ['Python subreddit (r/Python, r/learnpython)', 'Django forum (forum.djangoproject.com)', 'Crack Leap Discord (Indian developers community)', 'Python Discord server', 'Twitter/X: follow @gvanrossum, @pybites, @realpython'] },
            ].map(section => (
              <div key={section.category} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-blue-500 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Your Python Journey?</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Get structured Python training with mentorship from senior engineers who work at product companies.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/python" className="bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors">
              Enrol in Python Course →
            </Link>
            <Link href="/resources/interview-questions/python-developer" className="bg-green-500/30 border border-green-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-500/50 transition-colors">
              Practice Interview Questions
            </Link>
          </div>
        </div>

        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
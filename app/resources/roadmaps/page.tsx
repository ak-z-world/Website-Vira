// app/resources/roadmaps/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceCard from '../_components/ResourceCard';
import Breadcrumb from '../_components/Breadcrumb';
import { Terminal, CloudCog, Brain, Layers, Monitor, Server, BarChart, Cpu, Cloud, Shield } from 'lucide-react';
import { breadcrumbSchema } from '../_lib/schema';

export const metadata: Metadata = {
  title: 'Developer Roadmaps 2026 — Python, AWS, AI, Full Stack, DevOps | ArivuOn Academy',
  description:
    'Free developer roadmaps 2026 with month-by-month learning plans. Python, AWS DevOps, AI Engineer, Full Stack, Frontend, Backend, Data Science, ML, Cloud, and Cybersecurity roadmaps.',
  keywords:
    'developer roadmap 2026, python developer roadmap, aws devops roadmap, ai engineer roadmap, full stack developer roadmap, data scientist roadmap india',
  openGraph: {
    title: 'Developer Roadmaps 2026 | ArivuOn Academy',
    description: 'Month-by-month career roadmaps for Python, AWS, AI, Full Stack, DevOps developers.',
    url: 'https://arivuon.com/resources/roadmaps',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps' },
};

const ROADMAPS = [
  {
    title: 'Python Developer Roadmap 2026',
    description: 'Complete path from Python beginner to senior backend developer. Covers syntax, OOP, Django, FastAPI, testing, PostgreSQL, Redis, Docker, and AWS deployment.',
    href: '/resources/roadmaps/python-developer-roadmap-2026',
    badge: 'Backend',
    badgeColor: 'bg-green-50 text-green-700',
    tags: ['Python', 'Django', 'FastAPI', 'PostgreSQL'],
    readTime: '20 min read',
    difficulty: 'All Levels' as const,
    icon: <Terminal className="w-6 h-6" />,
    featured: true,
  },
  {
    title: 'AWS DevOps Engineer Roadmap 2026',
    description: 'From Linux basics to senior DevOps. Covers AWS core services, CI/CD pipelines, Terraform, Docker, Kubernetes, monitoring, and SRE practices.',
    href: '/resources/roadmaps/aws-devops-roadmap-2026',
    badge: 'DevOps',
    badgeColor: 'bg-orange-50 text-orange-700',
    tags: ['AWS', 'DevOps', 'Kubernetes', 'Terraform'],
    readTime: '22 min read',
    difficulty: 'All Levels' as const,
    icon: <CloudCog className="w-6 h-6" />,
    featured: true,
  },
  {
    title: 'AI Engineer Roadmap 2026',
    description: 'End-to-end path for AI Engineers. Covers Python, ML, deep learning, transformers, LLMs, RAG, vector databases, LangChain, and production AI systems.',
    href: '/resources/roadmaps/ai-engineer-roadmap-2026',
    badge: 'AI/ML',
    badgeColor: 'bg-purple-50 text-purple-700',
    tags: ['AI', 'LLMs', 'Python', 'PyTorch'],
    readTime: '25 min read',
    difficulty: 'All Levels' as const,
    icon: <Brain className="w-6 h-6" />,
    featured: true,
  },
  {
    title: 'Full Stack Developer Roadmap 2026',
    description: 'Become a T-shaped full stack developer. HTML to React frontend, Node.js/Django backend, databases, REST/GraphQL APIs, authentication, and cloud deployment.',
    href: '/resources/roadmaps/full-stack-roadmap-2026',
    badge: 'Full Stack',
    badgeColor: 'bg-blue-50 text-blue-700',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    readTime: '24 min read',
    difficulty: 'All Levels' as const,
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: 'Frontend Developer Roadmap 2026',
    description: 'From HTML/CSS to senior frontend engineer. Covers JavaScript, TypeScript, React, Next.js, state management, performance optimization, and accessibility.',
    href: '/resources/roadmaps/frontend-roadmap-2026',
    badge: 'Frontend',
    badgeColor: 'bg-cyan-50 text-cyan-700',
    tags: ['React', 'TypeScript', 'Next.js', 'CSS'],
    readTime: '20 min read',
    difficulty: 'All Levels' as const,
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: 'Backend Developer Roadmap 2026',
    description: 'Master backend development: APIs, databases, caching, message queues, system design, microservices, and cloud deployment patterns.',
    href: '/resources/roadmaps/backend-roadmap-2026',
    badge: 'Backend',
    badgeColor: 'bg-teal-50 text-teal-700',
    tags: ['APIs', 'PostgreSQL', 'Redis', 'Microservices'],
    readTime: '22 min read',
    difficulty: 'All Levels' as const,
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Data Scientist Roadmap 2026',
    description: 'From statistics and Python to production ML models. Covers EDA, feature engineering, ML algorithms, deep learning, MLOps, and business communication.',
    href: '/resources/roadmaps/data-scientist-roadmap-2026',
    badge: 'Data Science',
    badgeColor: 'bg-pink-50 text-pink-700',
    tags: ['Python', 'Pandas', 'Sklearn', 'MLflow'],
    readTime: '23 min read',
    difficulty: 'All Levels' as const,
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    title: 'ML Engineer Roadmap 2026',
    description: 'Bridge the gap between data science and engineering. Covers ML pipelines, model serving, feature stores, MLOps, Kubernetes-based ML, and LLM deployment.',
    href: '/resources/roadmaps/ml-engineer-roadmap-2026',
    badge: 'ML/AI',
    badgeColor: 'bg-indigo-50 text-indigo-700',
    tags: ['MLOps', 'PyTorch', 'Kubernetes', 'Airflow'],
    readTime: '24 min read',
    difficulty: 'Intermediate' as const,
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: 'Cloud Engineer Roadmap 2026',
    description: 'Master cloud architecture on AWS/GCP/Azure. Covers networking, compute, storage, security, IAM, cost optimization, and multi-cloud strategies.',
    href: '/resources/roadmaps/cloud-engineer-roadmap-2026',
    badge: 'Cloud',
    badgeColor: 'bg-sky-50 text-sky-700',
    tags: ['AWS', 'Azure', 'GCP', 'Terraform'],
    readTime: '21 min read',
    difficulty: 'All Levels' as const,
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: 'Cybersecurity Engineer Roadmap 2026',
    description: 'Enter the security field: networking, Linux, ethical hacking, web security, SOC operations, cloud security, and certifications like CEH, OSCP, AWS Security.',
    href: '/resources/roadmaps/cyber-security-roadmap-2026',
    badge: 'Security',
    badgeColor: 'bg-red-50 text-red-700',
    tags: ['Security', 'Linux', 'Networking', 'Cloud Security'],
    readTime: '22 min read',
    difficulty: 'All Levels' as const,
    icon: <Shield className="w-6 h-6" />,
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
];

export default function RoadmapsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.map(b => ({ ...b }))} />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Developer Roadmaps 2026
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Month-by-month learning plans for 10 high-demand tech roles. Know exactly what to learn,
            when to learn it, and what projects to build.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-gray-600 text-lg">
            <strong className="text-gray-900">10 career roadmaps</strong> — from beginner to senior level, 
            each with 12-month plans, skill checklists, and project recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ROADMAPS.map((roadmap) => (
            <ResourceCard key={roadmap.href} {...roadmap} />
          ))}
        </div>

        <section className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Use These Roadmaps</h2>
          <p className="text-gray-600 mb-4">
            Each roadmap is designed as a complete learning system, not just a list of topics. 
            Follow these steps to get maximum value:
          </p>
          <ol className="space-y-3 text-gray-600">
            {[
              'Choose one roadmap based on your target role and current background.',
              'Read the prerequisites section first — if you\'re missing fundamentals, start there.',
              'Follow the month-by-month plan without skipping phases.',
              'Build every project listed — employers evaluate portfolios, not just certifications.',
              'Practice interview questions in parallel from Month 3 onwards.',
              'Join the ArivuOn Discord to get feedback on your projects.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
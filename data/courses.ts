export type Course = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  icon: string;
  featured?: boolean;
  overview: string[];
  learn: string[];
  project: { title: string; desc: string };
  audience: string;
};

export const COURSES: Course[] = [
  {
    slug: "python-agentic-ai-aws",
    name: "Python + Agentic AI + AWS",
    tagline: "Our flagship track — from Python foundations to AI agents to cloud deployment.",
    tags: ["Python", "Agentic AI", "AWS"],
    icon: "cpu",
    featured: true,
    overview: [
      "The complete loop: start with Python foundations, move into Agentic AI basics — how AI agents perceive, plan and act with tools — and finish by deploying everything on AWS with DevOps practices.",
      "This is the track for learners who want the full modern stack in one structured, mentor-led program: code it, agent-ify it, ship it.",
    ],
    learn: [
      "Python foundations, OOP & APIs",
      "Agentic AI basics — ReAct reasoning, tool use, multi-agent workflows",
      "Building AI-powered features and assistants",
      "AWS core services (EC2, S3, IAM)",
      "CI/CD pipelines with Docker",
      "Infrastructure as Code & production deployment practices",
    ],
    project: {
      title: "Launch an AI product to production",
      desc: "Design, build and deploy an AI-powered product end to end — agent logic, APIs and cloud infrastructure.",
    },
    audience:
      "Learners who want the complete modern loop — Python to AI agents to cloud — in a single structured program.",
  },
  {
    slug: "python-django",
    name: "Python Django Development",
    tagline: "Backend engineering with Python and Django — APIs, databases and deployment.",
    tags: ["Python", "Django", "PostgreSQL", "REST APIs"],
    icon: "terminal",
    overview: [
      "A backend-focused program covering Python in depth and Django for production web development — from language fundamentals to REST APIs backed by PostgreSQL.",
      "You learn by building real backend systems: authentication, data modeling and deployed APIs — the work backend engineers do every day.",
    ],
    learn: [
      "Python fundamentals",
      "Object-oriented programming & APIs",
      "Django & REST framework",
      "PostgreSQL & data modeling",
      "Authentication & deployment fundamentals",
    ],
    project: {
      title: "Build a production SaaS dashboard backend",
      desc: "Build a production-grade backend with authentication, PostgreSQL and deployed REST APIs.",
    },
    audience:
      "Students and career switchers who want to become backend developers with production-grade Python skills.",
  },
  {
    slug: "react-js",
    name: "React JS Development",
    tagline: "Modern frontend engineering — React, Next.js and TypeScript, production-style.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: "code",
    overview: [
      "A frontend program built around how production interfaces are actually made — React fundamentals through to Next.js, TypeScript and state management.",
      "Every concept is tied to a build: components, hooks, APIs and deployment, so you finish with interfaces you can demo.",
    ],
    learn: [
      "React fundamentals & Hooks",
      "Next.js & TypeScript",
      "State management & API integration",
      "Styling with Tailwind CSS",
      "Production-ready frontend practices",
    ],
    project: {
      title: "Craft a production SaaS app",
      desc: "Craft a production-grade frontend application with dashboards, API integrations and deployment.",
    },
    audience:
      "Learners who want to build modern, production-quality user interfaces with React and Next.js.",
  },
  {
    slug: "aws-devops",
    name: "AWS & DevOps Engineering",
    tagline: "Cloud infrastructure and delivery — from EC2 to CI/CD to production.",
    tags: ["AWS", "Docker", "CI/CD", "Linux"],
    icon: "cloud",
    overview: [
      "A cloud and DevOps program that takes you from AWS fundamentals to running real production infrastructure — compute, storage, containers and automated delivery.",
      "Taught with a builder's mindset: you provision, containerize and deploy, and you learn to monitor what you ship.",
    ],
    learn: [
      "AWS core (EC2, S3, IAM)",
      "Linux fundamentals for cloud engineers",
      "Docker & container workflows",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Production deployment & monitoring practices",
    ],
    project: {
      title: "Ship a deployment pipeline on AWS",
      desc: "Ship an end-to-end deployment pipeline on AWS with monitoring — the way production teams deliver software.",
    },
    audience:
      "Learners aiming for cloud and DevOps roles who want hands-on infrastructure experience, not just theory.",
  },
  {
    slug: "python-full-stack",
    name: "Python Full Stack Development",
    tagline: "End-to-end product building — Python backend, React frontend, deployed live.",
    tags: ["Python", "Django", "React", "PostgreSQL"],
    icon: "layers",
    overview: [
      "The full-stack program connects both ends of product engineering: a Python and Django backend with REST APIs, and a React frontend that consumes them — backed by PostgreSQL and deployed as one system.",
      "You learn how the pieces fit together by building complete products, not isolated exercises.",
    ],
    learn: [
      "Python foundations, OOP & APIs",
      "Django & REST API development",
      "PostgreSQL & data modeling",
      "React fundamentals, Hooks & state management",
      "Frontend-backend integration",
      "Authentication & end-to-end deployment",
    ],
    project: {
      title: "Build and deploy a full-stack product",
      desc: "Ship a complete production product: Django REST backend, React frontend, PostgreSQL — deployed end to end.",
    },
    audience:
      "Learners who want to own entire products — from database to deployment — as full-stack developers.",
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    tagline: "Applied GenAI engineering — LLMs, assistants and AI-powered features.",
    tags: ["Python", "LLMs", "PyTorch", "MLOps"],
    icon: "brain",
    overview: [
      "An applied Generative AI program for builders: how large language models work, how to evaluate them, and how to ship AI-powered features into real products.",
      "Theory stays grounded — every module ends with something running: an assistant, a feature, a deployed API.",
    ],
    learn: [
      "Python for AI",
      "ML fundamentals & model concepts",
      "Working with LLMs — prompting, evaluation, grounding",
      "Data handling for AI applications",
      "Building AI-powered features",
      "Deploying AI via APIs (MLOps basics)",
    ],
    project: {
      title: "Create and deploy an AI assistant",
      desc: "Create an AI assistant, train and evaluate models, and deploy it behind an API.",
    },
    audience:
      "Developers and students who want to move from using AI tools to engineering with them.",
  },
];

export const COURSE_SLUGS = COURSES.map((c) => c.slug);

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export const FORMAT_POINTS = [
  "Live online, mentor-led sessions",
  "Project-based learning — build, don't just watch",
  "1:1 mentorship, code reviews & doubt support",
  "Verifiable certificate + skill report",
  "Resume & LinkedIn guidance",
];

export const COURSE_INTERESTS = [
  ...COURSES.map((c) => c.name),
  "College / institutional partnership",
  "Something else",
];

import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

const LLMS_TEXT = `# CrackLeap Academy

> CrackLeap by Vertex Loop is a modern technology training academy offering live, mentor-led programs in Agentic AI, Generative AI, Python, React, and AWS DevOps. Mentored by active software engineers who ship production code daily.

CrackLeap Academy bridges the gap between academic theory and production engineering. Learners build production-grade projects, receive strict code reviews, work 1:1 with engineers, and earn verifiable credentials and comprehensive skill reports. Cohorts run live online and are open to learners worldwide. CrackLeap also partners with colleges and universities through formal academic MOU partnerships.

## Core Courses & Programs

- [Python + Agentic AI + AWS (Flagship)](https://crackleap.vertexloop.in/courses/python-agentic-ai-aws): The complete modern loop — from Python foundations and OOP to Agentic AI (ReAct reasoning, tool use, multi-agent architectures) and cloud deployment on AWS with Docker & CI/CD. Capstone: Launch an AI product to production.
- [Python & Django Development](https://crackleap.vertexloop.in/courses/python-django): Backend engineering with Python, Django, PostgreSQL, and REST APIs. Production authentication, data modeling, and API deployment. Capstone: Build a production SaaS dashboard backend.
- [React JS Development](https://crackleap.vertexloop.in/courses/react-js): Modern frontend engineering with React, Next.js, and TypeScript. Component architecture, hooks, state management, and Tailwind CSS. Capstone: Craft a production SaaS application.
- [AWS & DevOps Engineering](https://crackleap.vertexloop.in/courses/aws-devops): Cloud infrastructure, Docker container workflows, CI/CD pipelines, Linux fundamentals, and Infrastructure as Code on AWS. Capstone: Ship an end-to-end deployment pipeline on AWS with monitoring.
- [Python Full Stack Development](https://crackleap.vertexloop.in/courses/python-full-stack): End-to-end product development connecting a Django REST backend with a React frontend, backed by PostgreSQL and deployed live. Capstone: Build and deploy a complete full-stack product.
- [Generative AI](https://crackleap.vertexloop.in/courses/generative-ai): Applied GenAI engineering — LLMs, prompting, evaluation, PyTorch, AI assistants, and deploying AI models via APIs (MLOps). Capstone: Create and deploy an AI assistant.

## Key Links & Resources

- [Home](https://crackleap.vertexloop.in/): Overview of CrackLeap Academy, philosophy, testimonials, and course preview.
- [Course Catalog](https://crackleap.vertexloop.in/courses): Detailed breakdown of all six mentor-led training tracks.
- [Why CrackLeap](https://crackleap.vertexloop.in/why-crackleap): Our engineering-led teaching model, production mindset, and portfolio-first approach.
- [Learner Journey](https://crackleap.vertexloop.in/journey): Five-stage progression: Student to Learner to Builder to Developer to Career-Ready.
- [How It Works](https://crackleap.vertexloop.in/how-it-works): Four steps: Explore, Join Live, Build Projects, Get Certified & Career-Ready.
- [Contact & Admissions](https://crackleap.vertexloop.in/contact): Enroll in live cohorts or establish college institutional MOU partnerships.
- [Sitemap](https://crackleap.vertexloop.in/sitemap.xml): XML sitemap for search crawlers.

## Institutional & Organization Details

- **Name**: CrackLeap Academy (CrackLeap)
- **Parent Company**: Vertex Loop Pvt Ltd (https://vertexloop.in)
- **Headquarters**: Chennai, Tamil Nadu, India
- **Admissions Email**: hello@vertexloop.in
- **Phone / WhatsApp**: +91 94457 70160
- **Delivery Mode**: Live online interactive cohorts worldwide
- **Social Media**:
  - LinkedIn: https://www.linkedin.com/company/crack-leap
  - Instagram: https://www.instagram.com/crackleapacademy
  - X / Twitter: https://x.com/LoopVertex99532
  - GitHub: https://github.com/vertexloopindia
  - Vertex Loop LinkedIn: https://www.linkedin.com/company/vertex-loop
`;

export function GET() {
  return new NextResponse(LLMS_TEXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

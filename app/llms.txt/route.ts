import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

const LLMS_TEXT = `# CrackLeap Academy

> CrackLeap Academy is a live, mentor-led software training academy by Vertex Loop Pvt Ltd, based in Chennai, India and teaching in IST. Programs in Python + Agentic AI + AWS, Python Django, Python Full Stack, React JS, AWS & DevOps and Generative AI — taught by active Vertex Loop engineers who ship production code, and open to learners worldwide.

CrackLeap is the education arm of Vertex Loop Pvt Ltd. Every session is live and mentor-led (never pre-recorded): learners build production-grade projects, receive 1:1 mentorship and code reviews, and earn a verifiable certificate linked to their portfolio plus a skill report. CrackLeap is honest about outcomes: there is no placement provision or placement guarantee — learners get career-preparation guidance, portfolio building and interview preparation. Founding college MOU partnerships are now open.

## Core Courses & Programs

- [Python + Agentic AI + AWS (Flagship)](https://crackleap.vertexloop.in/courses/python-agentic-ai-aws): The complete modern loop — from Python foundations and OOP to Agentic AI (ReAct reasoning, tool use, multi-agent workflows) and cloud deployment on AWS with Docker & CI/CD. Capstone: Launch an AI product to production.
- [Python Django Development](https://crackleap.vertexloop.in/courses/python-django): Backend engineering with Python, Django, PostgreSQL, and REST APIs. Production authentication, data modeling, and API deployment. Capstone: Build a production SaaS dashboard backend.
- [React JS Development](https://crackleap.vertexloop.in/courses/react-js): Modern frontend engineering with React, Next.js, and TypeScript. Component architecture, hooks, state management, and Tailwind CSS. Capstone: Craft a production SaaS application.
- [AWS & DevOps Engineering](https://crackleap.vertexloop.in/courses/aws-devops): Cloud infrastructure, Docker container workflows, CI/CD pipelines, Linux fundamentals, and Infrastructure as Code on AWS. Designed around hands-on practice on AWS WorkSpaces for real-world simulation. Capstone: Ship an end-to-end deployment pipeline on AWS with monitoring.
- [Python Full Stack Development](https://crackleap.vertexloop.in/courses/python-full-stack): End-to-end product development connecting a Django REST backend with a React frontend, backed by PostgreSQL and deployed live. Capstone: Build and deploy a complete full-stack product.
- [Generative AI](https://crackleap.vertexloop.in/courses/generative-ai): Applied GenAI engineering — LLMs, prompting, evaluation, AI assistants, and deploying AI features via APIs. Capstone: Create and deploy an AI assistant.

## Key Links & Resources

- [Home](https://crackleap.vertexloop.in/): Overview of CrackLeap Academy, how learning works, what learners build, and frequently asked questions.
- [Course Catalog](https://crackleap.vertexloop.in/courses): Detailed breakdown of all mentor-led training programs.
- [Why CrackLeap](https://crackleap.vertexloop.in/why-crackleap): Our engineering-led teaching model, production mindset, and portfolio-first approach.
- [Learner Journey](https://crackleap.vertexloop.in/journey): Five-stage progression: Student to Learner to Builder to Developer to Career-Ready.
- [How It Works](https://crackleap.vertexloop.in/how-it-works): Four steps: Explore, Join Live, Build Projects, Get Certified & Career-Ready.
- [For Colleges](https://crackleap.vertexloop.in/for-colleges): College partnership and MOU information — live training programs and workshops for your students, with custom institutional pricing.
- [Contact & Admissions](https://crackleap.vertexloop.in/contact): Enroll in live cohorts or discuss a college institutional partnership.
- [Sitemap](https://crackleap.vertexloop.in/sitemap.xml): XML sitemap for search crawlers.

## Fees & Partnerships

- **Individual course fees**: not published as a fixed list — the current fee for a course and cohort is shared on enquiry or a call (hello@vertexloop.in). CrackLeap is designed to cost less than the big classroom academies because it teaches live online, without cutting training depth.
- **College partnerships**: pricing is custom per college and package, quoted in a written proposal. No placement guarantees are made to colleges or students.

## Institutional & Organization Details

- **Name**: CrackLeap Academy (CrackLeap)
- **Parent Company**: Vertex Loop Pvt Ltd (https://vertexloop.in)
- **Based in**: Chennai, Tamil Nadu, India
- **Admissions Email**: hello@vertexloop.in
- **Phone / WhatsApp**: +91 94457 70160
- **Delivery Mode**: Live online, mentor-led cohorts worldwide, taught in IST
- **Teaching & Support Languages**: English (trainers are fluent), Tamil, Hindi, Tanglish, Hinglish
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

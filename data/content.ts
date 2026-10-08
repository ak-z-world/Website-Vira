export const SITE = {
  name: "CrackLeap Academy",
  url: "https://crackleap.vertexloop.in",
  email: "hello@vertexloop.in",
  phone: "+91 94457 70160",
  parent: "Vertex Loop Pvt Ltd",
  parentUrl: "https://vertexloop.in",
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/crack-leap", key: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/crackleapacademy", key: "instagram" },
  { label: "X", href: "https://x.com/LoopVertex99532", key: "x" },
  { label: "GitHub", href: "https://github.com/vertexloopindia", key: "github" },
  { label: "Vertex Loop on LinkedIn", href: "https://www.linkedin.com/company/vertex-loop", key: "linkedin" },
] as const;

export const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Why CrackLeap", href: "/why-crackleap" },
  { label: "Journey", href: "/journey" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const ANNOUNCEMENT = {
  colleges: "For colleges — founding MOU partnerships now open",
  learners: "For learners — live online cohorts open worldwide",
};

export const TOOLS = [
  "Python", "Django", "AWS", "Docker", "Kubernetes",
  "React", "Next.js", "TypeScript", "Git",
];

export const WHY_CARDS = [
  {
    title: "Industry-Aligned Curriculum",
    text: "Content drawn from real client work at Vertex Loop — not outdated theory. Modern stacks, real constraints.",
  },
  {
    title: "Hands-on Projects",
    text: "Production-grade builds, not toy demos. Auth, dashboards, APIs, deployment — your portfolio.",
  },
  {
    title: "1:1 Mentorship",
    text: "Learn from active engineers, get code reviews, doubt support, and career preparation guidance.",
  },
  {
    title: "Modern Tools",
    text: "React, Next.js, Python, Django, AWS, Docker, AI/ML — the tools teams use in production today.",
  },
];

export const DIFFERENCE = [
  {
    title: "Production mindset",
    text: "You ship projects you can demo, not just complete assignments.",
  },
  {
    title: "Engineer-led teaching",
    text: "Mentors are active builders at Vertex Loop, not full-time trainers.",
  },
  {
    title: "Portfolio first",
    text: "GitHub, live deploys, case studies you can share.",
  },
  {
    title: "Career preparation focus",
    text: "Helps you prepare for placements and internships with guidance, not promises.",
  },
];

export const WHAT_YOU_GET = [
  "Mentor-led live sessions",
  "Project reviews and code feedback",
  "Capstone portfolio to showcase",
  "Verifiable certificate + skill report",
  "Resume & LinkedIn guidance to prepare for opportunities",
];

export type Program = {
  track: string;
  title: string;
  tags: string[];
  points: string[];
  project: string;
  projectDesc: string;
  focus: string;
  featured?: boolean;
};

export const PROGRAMS: Program[] = [
  {
    track: "Backend",
    title: "Python & Django Development",
    tags: ["Python", "Django", "PostgreSQL", "REST APIs"],
    points: ["Python fundamentals", "OOP & APIs", "Django & REST", "PostgreSQL & Deployment fundamentals"],
    project: "Build a production SaaS dashboard",
    projectDesc: "Build a production SaaS dashboard with authentication and deployed APIs.",
    focus: "Backend & Python Development skills",
  },
  {
    track: "Cloud",
    title: "AWS & DevOps Engineering",
    tags: ["AWS", "Docker", "CI/CD", "Linux"],
    points: ["AWS Core (EC2, S3, IAM)", "CI/CD & Docker", "Infrastructure as Code", "Production Deployment Practices"],
    project: "Ship a deployment pipeline on AWS",
    projectDesc: "Ship an end-to-end deployment pipeline on AWS with monitoring.",
    focus: "Cloud & DevOps engineering workflows",
  },
  {
    track: "AI",
    title: "AI & Machine Learning",
    tags: ["Python", "PyTorch", "LLMs", "MLOps"],
    points: ["Python for AI", "ML fundamentals & Models", "Data handling & Evaluation", "Building AI-powered features"],
    project: "Create and deploy an AI assistant",
    projectDesc: "Create an AI assistant, train models and deploy via API.",
    focus: "Applied AI & ML engineering",
  },
  {
    track: "Frontend",
    title: "React & Next.js",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    points: ["React fundamentals & Hooks", "Next.js & TypeScript", "State management & APIs", "Production-ready frontend"],
    project: "Craft a production SaaS app",
    projectDesc: "Craft a production-grade SaaS app with dashboards and integrations.",
    focus: "Modern frontend & full-stack development",
  },
  {
    track: "Data",
    title: "Data Science & ML",
    tags: ["Python", "Pandas", "Scikit", "SQL"],
    points: ["Data analysis with Python", "ML pipelines", "Visualization & Storytelling", "Real-world datasets & Projects"],
    project: "Design a BI dashboard with insights",
    projectDesc: "Design a business intelligence dashboard with predictive insights.",
    focus: "Data analysis & ML fundamentals",
  },
  {
    track: "Full Stack + AI + DevOps",
    title: "Full Stack + AI + DevOps Combo",
    tags: ["React", "Python", "AI", "AWS"],
    points: ["Frontend + Backend integration", "AI feature integration", "Cloud deployment", "End-to-end product building"],
    project: "Launch an AI product to production",
    projectDesc: "Launch an AI-powered full-stack product to production.",
    focus: "Product engineering end-to-end",
    featured: true,
  },
];

export const LEVELS = [
  { name: "Foundation", level: "Beginner Friendly", text: "Core concepts + guided projects" },
  { name: "Core Builder", level: "Intermediate", text: "Production projects + reviews" },
  { name: "Advanced", level: "Deep Dive", text: "Architecture + real-world workflows" },
  { name: "Career Prep", level: "Portfolio Focus", text: "Guidance to prepare for opportunities" },
];

export const PATHS = [
  {
    who: "Students",
    goal: "Start Strong",
    level: "Foundation",
    text: "Build fundamentals with Python & React, understand how production apps work.",
  },
  {
    who: "Graduates",
    goal: "Build Specialization",
    level: "Core",
    text: "Pick AI/ML, AWS & DevOps, or Data Science. Ship a capstone you can demo.",
  },
  {
    who: "Professionals",
    goal: "Level Up & Showcase",
    level: "Advanced",
    text: "Full Stack + AI + DevOps combo, interview preparation guidance, portfolio reviews.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Explore Programs",
    text: "Choose your track — Python, AI/ML, React, AWS & DevOps, Data Science or Full Stack combo.",
  },
  {
    n: "02",
    title: "Join Live Sessions",
    text: "Attend mentor-led live classes, get doubt support and code reviews.",
  },
  {
    n: "03",
    title: "Build Projects",
    text: "Build production-grade projects with guidance. Portfolio that demonstrates real skills.",
  },
  {
    n: "04",
    title: "Get Certified & Career Ready",
    text: "Earn verifiable certificate, skill report, plus resume, LinkedIn and interview guidance to prepare for opportunities.",
  },
];

export const JOURNEY = ["Student", "Learner", "Builder", "Developer", "Career-Ready"];

export const ECOSYSTEM = [
  { title: "Product Development", text: "SaaS, AI tools, internal platforms" },
  { title: "Tech Services", text: "For startups & enterprises across India & Gulf" },
  { title: "CrackLeap Academy", text: "Learning initiative — practical, mentor-led" },
  { title: "Active Practitioners", text: "Mentors = current Vertex Loop engineers" },
];

export const TESTIMONIALS = [
  {
    quote: "Mentor was a working engineer. Code reviews were strict, which helped me improve fast. I finally built projects I can demo.",
    role: "Learner — CSE Background",
    track: "Python & Django Track",
  },
  {
    quote: "Hands-on approach made it click. Building real dashboards and APIs gave me confidence to prepare for interviews.",
    role: "Career Switcher — Non-CS",
    track: "Full Stack Combo",
  },
  {
    quote: "The live sessions and portfolio focus helped me prepare better. Resume and LinkedIn guidance was practical and actionable.",
    role: "Graduate — React Batch",
    track: "React & Next.js",
  },
];

export const FAQS = [
  {
    q: "Are the sessions live or recorded?",
    a: "Live only. Every session is mentor-led and live, with doubt support and code reviews — not pre-recorded videos.",
  },
  {
    q: "Do you provide placements?",
    a: "We are honest about this: there is no placement provision. We help you prepare for placements and internships with guidance, portfolio building, and interview preparation — not promises.",
  },
  {
    q: "Who are the mentors?",
    a: "Mentors are active engineers at Vertex Loop who ship production code daily — not full-time career trainers. You learn from people who build real systems for real clients.",
  },
  {
    q: "What will I actually build?",
    a: "Production-grade projects: a SaaS dashboard with authentication and deployed APIs, an end-to-end deployment pipeline on AWS, an AI assistant deployed via API, BI dashboards with predictive insights — work you can demo, not toy assignments.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. You earn a verifiable certificate linked to your live portfolio, plus a skill report you can share when you prepare for opportunities.",
  },
  {
    q: "Who is CrackLeap for?",
    a: "Students, graduates, professionals and career switchers — anyone who wants structured, mentor-led programs in Python, AI/ML, React, AWS & DevOps, and Data Science.",
  },
  {
    q: "How do I start?",
    a: "Explore programs, join live mentor-led sessions, build production projects, and get certified — with resume, LinkedIn and interview guidance along the way. Write to hello@vertexloop.in to begin.",
  },
];

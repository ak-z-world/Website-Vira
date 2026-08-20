"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Clock,
  Users,
  ArrowRight,
  BookOpen,
  Code2,
  Layout,
  Zap,
  TrendingUp,
  Palette,
  Globe,
  Award,
  Layers,
  Terminal,
  TestTube,
  Monitor,
  Database,
  Workflow,
  Briefcase,
  Target,
  Rocket,
  Server,
  Check,
  Flame,
} from "lucide-react";
import { useGlobal } from "@/app/providers";

export default function ReactCoursePage() {
  const { t, price, originalPrice } = useGlobal();

  // State management for interactive V2 Neumorphic Tabs
  const [activeModule, setActiveModule] = useState(0);

  const courseDetails = {
    title: "React Development",
    subtitle: "Modern Frontend Mastery",
    description: t("courses.react.description"),
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    fee: "₹10,000",
    originalFee: "₹35,000",
    nextBatch: "March 28, 2026",
    seatsLeft: "10",
    rating: "4.9",
  };

  const modules = [
    {
      title: "courses.react.modules.fundamentals.title",
      duration: "courses.react.modules.fundamentals.duration",
      icon: <Code2 className="w-5 h-5" />,
      projects: 3,
      topics: [
        "courses.react.modules.fundamentals.topics.jsx",
        "courses.react.modules.fundamentals.topics.props",
        "courses.react.modules.fundamentals.topics.hooks",
        "courses.react.modules.fundamentals.topics.events",
        "courses.react.modules.fundamentals.topics.lifecycle",
      ],
    },
    {
      title: "courses.react.modules.advanced.title",
      duration: "courses.react.modules.advanced.duration",
      icon: <Zap className="w-5 h-5" />,
      projects: 3,
      topics: [
        "courses.react.modules.advanced.topics.context",
        "courses.react.modules.advanced.topics.customHooks",
        "courses.react.modules.advanced.topics.performance",
        "courses.react.modules.advanced.topics.error",
        "courses.react.modules.advanced.topics.splitting",
      ],
    },
    {
      title: "courses.react.modules.nextjs.title",
      duration: "courses.react.modules.nextjs.duration",
      icon: <Layout className="w-5 h-5" />,
      projects: 4,
      topics: [
        "courses.react.modules.nextjs.topics.router",
        "courses.react.modules.nextjs.topics.serverClient",
        "courses.react.modules.nextjs.topics.api",
        "courses.react.modules.nextjs.topics.rendering",
        "courses.react.modules.nextjs.topics.middleware",
      ],
    },
    {
      title: "courses.react.modules.modern.title",
      duration: "courses.react.modules.modern.duration",
      icon: <Cpu className="w-5 h-5" />,
      projects: 3,
      topics: [
        "courses.react.modules.modern.topics.typescript",
        "courses.react.modules.modern.topics.testing",
        "courses.react.modules.modern.topics.state",
        "courses.react.modules.modern.topics.ui",
        "courses.react.modules.modern.topics.animations",
      ],
    },
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: "courses.react.benefits.projects" },
    { icon: <Layers className="w-5 h-5" />, text: "courses.react.benefits.patterns" },
    { icon: <Monitor className="w-5 h-5" />, text: "courses.react.benefits.fullstack" },
    { icon: <Users className="w-5 h-5" />, text: "courses.react.benefits.mentorship" },
    { icon: <Database className="w-5 h-5" />, text: "courses.react.benefits.portfolio" },
  ];

  const technologies = [
    { name: "React 18", icon: <Code2 className="w-4 h-4" />, category: "Library" },
    { name: "Next.js 14", icon: <Layout className="w-4 h-4" />, category: "Framework" },
    { name: "TypeScript", icon: <Terminal className="w-4 h-4" />, category: "Language" },
    { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" />, category: "Styling" },
    { name: "Redux Toolkit", icon: <Workflow className="w-4 h-4" />, category: "State" },
    { name: "Jest & RTL", icon: <TestTube className="w-4 h-4" />, category: "Testing" },
    { name: "Vite", icon: <Zap className="w-4 h-4" />, category: "Build Tool" },
    { name: "Framer Motion", icon: <Globe className="w-4 h-4" />, category: "Animations" },
  ];

  const outcomes = [
    t("courses.react.outcomes.scalable"),
    t("courses.react.outcomes.nextjs"),
    t("courses.react.outcomes.typescript"),
    t("courses.react.outcomes.ui"),
    t("courses.react.outcomes.testing"),
    t("courses.react.outcomes.redux"),
    t("courses.react.outcomes.performance"),
    t("courses.react.outcomes.deployment"),
  ];

  const projects = [
    {
      title: "courses.react.projects.ecommerce.title",
      description: "courses.react.projects.ecommerce.description",
      technologies: [
        "courses.react.projects.ecommerce.technologies.next",
        "courses.react.projects.ecommerce.technologies.tailwind",
        "courses.react.projects.ecommerce.technologies.redux",
      ],
    },
    {
      title: "courses.react.projects.social.title",
      description: "courses.react.projects.social.description",
      technologies: [
        "courses.react.projects.social.technologies.react",
        "courses.react.projects.social.technologies.context",
        "courses.react.projects.social.technologies.mui",
      ],
    },
    {
      title: "courses.react.projects.analytics.title",
      description: "courses.react.projects.analytics.description",
      technologies: [
        "courses.react.projects.analytics.technologies.next",
        "courses.react.projects.analytics.technologies.typescript",
        "courses.react.projects.analytics.technologies.api",
      ],
    },
  ];

  // V2 Design Utility Core Framework Tokens
  const neoCard = "bg-[#F8F9FE] shadow-[12px_12px_24px_#d9dbe6,-12px_-12px_24px_#ffffff] rounded-3xl border border-white/50";
  const neoButton = "bg-[#F8F9FE] shadow-[6px_6px_12px_#d9dbe6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d9dbe6,inset_-4px_-4px_8px_#ffffff] transition-all rounded-xl";
  const neoInset = "bg-[#F8F9FE] shadow-[inset_6px_6px_12px_#d9dbe6,inset_-6px_-6px_12px_#ffffff] rounded-2xl";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "React JS Frontend Development Course",
            description: "Learn modern frontend development with React JS, JavaScript, components, hooks, state management and build real-world web applications.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Crack Leap Academy",
              url: "https://academy.arivuon.in",
            },
            url: "https://academy.arivuon.in/courses/react-js",
            image: "https://academy.arivuon.in/og-image.png",
            inLanguage: "en",
            availableLanguage: "en",
            educationalLevel: "Beginner to Advanced",
            teaches: [
              "JavaScript ES6",
              "React JS",
              "React Hooks",
              "Component-Based Architecture",
              "State Management",
              "REST API Integration",
              "Frontend Development",
              "Responsive Web Design",
            ],
            courseMode: "online",
            isAccessibleForFree: false,
            offers: {
              "@type": "Offer",
              category: "Paid",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: "https://academy.arivuon.in/courses/react-js",
            },
          }),
        }}
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9398KXWC97"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9398KXWC97');
          `,
        }}
      />

      <div className="min-h-screen bg-[#F8F9FE] text-slate-800 font-sans selection:bg-violet-200 overflow-hidden">
        {/* Dynamic V2 Ambient Structural Lighting */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#EAE8FE]/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl pointer-events-none" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative z-10">

          {/* 1. HERO MAIN VIEWPORT SECTION */}
          <section className="grid lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-8">
              <div className={`${neoButton} inline-flex items-center gap-2 px-4 py-2 border border-violet-100/50`}>
                <TrendingUp className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-800 tracking-wide">
                  High-Demand Skill
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                {courseDetails.title.split(" ")[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  {courseDetails.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                {courseDetails.subtitle} — {courseDetails.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className={`${neoButton} flex items-center gap-4 px-6 py-4`}>
                  <div className="p-2 bg-violet-100 rounded-lg text-violet-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{courseDetails.duration}</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Duration</div>
                  </div>
                </div>
                <div className={`${neoButton} flex items-center gap-4 px-6 py-4`}>
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{courseDetails.level}</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Level</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_30px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Hero Right Pricing Module */}
            <div className="lg:col-span-5 relative">
              <div className={`${neoCard} p-8 relative overflow-hidden`}>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-2xl" />

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-slate-500 font-medium">Course Fee</h3>
                    <span className="bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1 rounded-full">
                      20% OFF
                    </span>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-extrabold text-slate-900">{price || courseDetails.fee}</span>
                    <span className="text-xl text-slate-400 line-through mb-1">{originalPrice || courseDetails.originalFee}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                      <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-500">
                        {benefit.icon}
                      </div>
                      {t(benefit.text)}
                    </div>
                  ))}
                </div>

                <div className={`${neoInset} p-5 mb-6`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-slate-800">Next Batch Starts</span>
                    <span className="text-sm font-bold text-violet-600">{courseDetails.nextBatch}</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] h-2 rounded-full mb-2 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-violet-500 to-indigo-500 w-[80%] h-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500">
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-200 border border-white" />
                      <div className="w-5 h-5 rounded-full bg-violet-200 border border-white" />
                      <div className="w-5 h-5 rounded-full bg-fuchsia-200 border border-white" />
                    </div>
                    <span>{courseDetails.seatsLeft} seats left</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 1.5 TECH BANNER STACK SLIDER MOCK */}
          <div className="w-full mb-8 px-4">
            <div className="max-w-6xl mx-auto bg-[#F8F9FE] shadow-[6px_6px_12px_#d9dbe6,-6px_-6px_12px_#ffffff] rounded-2xl py-4 px-6 md:px-8 border border-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center md:text-left shrink-0">
                Built with industry-leading technologies
              </span>
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8F9FE] shadow-[4px_4px_8px_#d9dbe6,-4px_-4px_8px_#ffffff] border border-white/80 rounded-full px-4 py-1.5 flex items-center gap-2 font-semibold text-slate-600 shrink-0 text-xs md:text-sm hover:-translate-y-0.5 transition-transform duration-200 cursor-default">
                    <div className="p-1 bg-violet-50 rounded-md text-violet-600">
                      {tech.icon}
                    </div>
                    <span className="text-slate-600 font-medium tracking-tight whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. STATS BAR DATAGRID */}
          <section className="w-full mb-16 px-4">
            <div className="max-w-6xl mx-auto bg-[#b68ee8]/40 shadow-[12px_12px_24px_#d9dbe6,-12px_-12px_24px_#ffffff] rounded-3xl border border-white/60 p-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-y-0 py-6 sm:divide-x sm:divide-violet-200/40">
                {[
                  { val: "6+", label: "Real Projects" },
                  { val: "120+", label: "Hours of Learning" },
                  { val: "10+", label: "Modern Tools" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center px-4 flex flex-col justify-center items-center group">
                    <div className="text-3xl lg:text-4xl font-extrabold text-violet-600 mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {stat.val}
                    </div>
                    <div className="text-[10px] lg:text-xs font-medium text-slate-400 tracking-normal whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. CURRICULUM INTERACTIVE SYSTEM SECTION */}
          <section className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100/50 text-violet-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-violet-200">
              <BookOpen className="w-3.5 h-3.5" /> Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Structured <span className="text-violet-600">Syllabus Matrix</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
              From basics to advanced orchestration concepts — become a professional engineer in 12 weeks.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all duration-300 ${activeModule === idx
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_8px_16px_rgba(124,58,237,0.3)] scale-105"
                      : `${neoButton} text-slate-600 hover:text-violet-600`
                    }`}>
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${activeModule === idx ? "bg-white/20" : "bg-violet-100 text-violet-700"}`}>
                    {idx + 1}
                  </span>
                  {t(mod.title)}
                </button>
              ))}
            </div>

            <div className={`${neoCard} p-8 md:p-12 text-left relative`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${neoInset} h-64 md:h-80 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-indigo-50/20" />
                  <div className="relative text-violet-600 mb-4 p-4 bg-white shadow-md rounded-2xl">
                    {modules[activeModule].icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 relative z-10">{t(modules[activeModule].title)}</h4>
                  <p className="text-sm text-slate-500 mt-1 relative z-10">{t(modules[activeModule].duration)}</p>
                </div>

                <div className="space-y-6">
                  <ul className="grid gap-3">
                    {modules[activeModule].topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        {t(topic)}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-xl font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    {t("courses.react.includesProjects")} {modules[activeModule].projects} {t("courses.react.project")}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. ECOSYSTEM PRODUCTION PORTFOLIO PROJECTS */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100/50 text-violet-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-violet-200">
                <Layers className="w-4 h-4" /> Practical Track
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Build <span className="text-violet-600">Real Applications</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`${neoCard} p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{t(project.title)}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t(project.description)}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-100">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full border border-violet-100">
                        {t(tech)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. METRICS OUTCOMES & CAREER OUTLOOK GRID */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <div className={`${neoCard} p-8 bg-white border border-gray-100`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Master Frontend Architectures</h3>
                    <p className="text-sm font-medium text-slate-500">Skills You'll Gain</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg text-white">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3">
                {outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm leading-tight text-slate-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${neoCard} p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">React Career Outlook</h3>
                  <p className="text-sm font-medium text-slate-500">Why target metrics choose modern engineers</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">Average Salary</span>
                  <span className="text-xl font-extrabold text-violet-600">₹8 - ₹15 LPA</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">Job Growth Rate</span>
                  <span className="text-xl font-extrabold text-violet-600">40% YoY</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-600">Industry Demand</span>
                  <span className="text-xl font-extrabold text-indigo-600">Very High</span>
                </div>
              </div>

              <div className={`${neoInset} p-5 mt-6`}>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target Roles</span>
                <span className="text-sm font-medium text-slate-700">
                  Frontend UI Engineer, React Developer, Next.js Fullstack Engineer, Web Application Developer
                </span>
              </div>
            </div>
          </div>

          {/* 5.5 CONNECTED KNOWLEDGE BASE & LOCATION HUBS */}
          <section className="mb-16">
            <div className="bg-[#F4F5FA] rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                React & Frontend Learning Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl font-medium">
                Accelerate your frontend development career with free technical guides, career roadmaps, interview preparation banks, and city training cohorts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Link
                  href="/resources/roadmaps/frontend-roadmap-2026"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Career Roadmap</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    Frontend Developer Roadmap 2026 →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">React, Next.js 15, TypeScript</div>
                </Link>

                <Link
                  href="/resources/interview-questions/react-developer"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Interview Prep</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    100+ React Interview Q&As →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Hooks, Redux, Performance & Architecture</div>
                </Link>

                <Link
                  href="/resources/tutorials/react"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Free Guide</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    React & Next.js Tutorial →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">State, Server Components & Routing</div>
                </Link>

                <Link
                  href="/resources/projects/react-projects"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Portfolio Builders</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    30+ React Project Ideas →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Full stack & responsive applications</div>
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-slate-700">React Training in Tamil Nadu:</span>
                <Link href="/locations/india/tamil-nadu/chennai/react" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Chennai</Link>
                <Link href="/locations/india/tamil-nadu/coimbatore/react" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Coimbatore</Link>
                <Link href="/locations/india/tamil-nadu/salem/react" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Salem</Link>
                <Link href="/locations/india/tamil-nadu/madurai/react" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Madurai</Link>
                <Link href="/locations/india/tamil-nadu" className="px-2.5 py-1 text-[#8B5CF6] font-semibold hover:underline">All Tamil Nadu Hubs →</Link>
              </div>
            </div>
          </section>

          {/* 6. BOTTOM CTA CONVERSION MODULE */}
          <section className="bg-[#EAE8FE]/60 shadow-[12px_12px_24px_#d1d3e2,-12px_-12px_24px_#ffffff] rounded-[32px] p-6 md:p-10 mb-20 border border-white/40">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#F8F9FE] shadow-[4px_4px_10px_#c8cad8] rounded-3xl flex-shrink-0 flex items-center justify-center text-violet-600">
                  <Code2 className="w-16 h-16 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    <span className="text-violet-600 block font-bold text-xl md:text-2xl mb-1">
                      {t("courses.react.ctaTitle") ? t("courses.react.ctaTitle").split(" Your ")[0] : "Ready to Start Your"} Your
                    </span>
                    React Journey Today
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 font-medium max-w-sm">
                    Join thousands of developers who launched their careers with our React development program.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="bg-[#F8F9FE] shadow-[6px_6px_16px_#c8cad8,-6px_-6px_16px_#ffffff] rounded-2xl p-6 border border-white">
                  <div className="flex flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900 leading-none">
                        {price || courseDetails.fee}
                      </div>
                      <div className="text-sm text-slate-400 line-through mt-1">
                        {originalPrice || courseDetails.originalFee}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Next batch starts
                      </div>
                      <div className="text-sm font-extrabold text-violet-600">
                        {courseDetails.nextBatch}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-[0_4px_12px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all duration-200">
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white shadow-[3px_3px_8px_#d9dbe6,-3px_-3px_8px_#ffffff] text-slate-700 text-sm font-bold rounded-xl hover:text-violet-600 hover:-translate-y-0.5 transition-all duration-200 border border-slate-100">
                      Book Free Demo
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs font-bold mt-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500 fill-current" />
                  <span>Only {courseDetails.seatsLeft} seats available • Portfolio review included</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Clock,
  Users,
  Rocket,
  ArrowRight,
  BookOpen,
  Briefcase,
  Cpu,
  TrendingUp,
  Database,
  Brain,
  BarChart3,
  Server,
  Award,
  Target,
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  Flame,
} from "lucide-react";
import Image from "next/image";
import { useGlobal } from "@/app/providers";

export default function DataScienceCoursePage() {
  const { t, price, originalPrice } = useGlobal();
  const [activeModule, setActiveModule] = useState(0);

  // Dynamic Modules mapping structural keys to translation paths
  const modules = [
    {
      title: t("courses.dataScience.modules.python.title"),
      duration: t("courses.dataScience.modules.python.duration"),
      icon: <Code2 className="w-5 h-5" />,
      projects: 2,
      topics: [
        t("courses.dataScience.modules.python.topics.intro"),
        t("courses.dataScience.modules.python.topics.libraries"),
        t("courses.dataScience.modules.python.topics.datatypes"),
        t("courses.dataScience.modules.python.topics.control"),
        t("courses.dataScience.modules.python.topics.functions"),
        t("courses.dataScience.modules.python.topics.oop"),
      ],
    },
    {
      title: t("courses.dataScience.modules.fundamentals.title"),
      duration: t("courses.dataScience.modules.fundamentals.duration"),
      icon: <BarChart3 className="w-5 h-5" />,
      projects: 3,
      topics: [
        t("courses.dataScience.modules.fundamentals.topics.analysis"),
        t("courses.dataScience.modules.fundamentals.topics.numpy"),
        t("courses.dataScience.modules.fundamentals.topics.pandas"),
        t("courses.dataScience.modules.fundamentals.topics.stats"),
        t("courses.dataScience.modules.fundamentals.topics.viz"),
      ],
    },
    {
      title: t("courses.dataScience.modules.machineLearning.title"),
      duration: t("courses.dataScience.modules.machineLearning.duration"),
      icon: <Brain className="w-5 h-5" />,
      projects: 4,
      topics: [
        t("courses.dataScience.modules.machineLearning.topics.ml"),
        t("courses.dataScience.modules.machineLearning.topics.dl"),
        t("courses.dataScience.modules.machineLearning.topics.nlp"),
        t("courses.dataScience.modules.machineLearning.topics.cv"),
      ],
    },
    {
      title: t("courses.dataScience.modules.tools.title"),
      duration: t("courses.dataScience.modules.tools.duration"),
      icon: <Server className="w-5 h-5" />,
      projects: 2,
      topics: [
        t("courses.dataScience.modules.tools.topics.jupyter"),
        t("courses.dataScience.modules.tools.topics.training"),
        t("courses.dataScience.modules.tools.topics.projects"),
        t("courses.dataScience.modules.tools.topics.deployment"),
      ],
    },
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: t("courses.dataScience.benefits.certification") },
    { icon: <Clock className="w-5 h-5" />, text: t("courses.dataScience.benefits.hours") },
    { icon: <Cpu className="w-5 h-5" />, text: t("courses.dataScience.benefits.projects") },
    { icon: <Users className="w-5 h-5" />, text: t("courses.dataScience.benefits.mentorship") },
  ];

  const tools = [
    { name: "Python 3.11+", icon: <Code2 className="w-4 h-4" /> },
    { name: "NumPy", icon: <Database className="w-4 h-4" /> },
    { name: "Pandas", icon: <Database className="w-4 h-4" /> },
    { name: "Scikit-Learn", icon: <Cpu className="w-4 h-4" /> },
    { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },
    { name: "REST API", icon: <Server className="w-4 h-4" /> },
  ];

  const testimonials = [
    {
      text: "The best Data Science course I've taken. Projects and mentorship are amazing!",
      name: "Arjun R.",
      role: "Data Scientist",
    },
    {
      text: "Well-structured and beginner friendly. Highly recommended!",
      name: "Sneha P.",
      role: "ML Engineer",
    },
    {
      text: "Practical learning with real-world projects. Worth every penny.",
      name: "Vikram S.",
      role: "AI Developer",
    },
  ];

  // Neumorphic Utility Classes
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
            name: t("courses.dataScience.title"),
            description: t("courses.dataScience.description"),
            provider: {
              "@type": "EducationalOrganization",
              name: "Crack Leap Academy",
              url: "https://academy.arivuon.in",
            },
            url: "https://academy.arivuon.in/courses/data-science",
            image: "https://academy.arivuon.in/og-image.png",
            inLanguage: "en",
            availableLanguage: "en",
            educationalLevel: t("courses.dataScience.courseDetails.level"),
            courseMode: "online",
            isAccessibleForFree: false,
            offers: {
              "@type": "Offer",
              category: "Paid",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: "https://academy.arivuon.in/courses/data-science",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-[#F8F9FE] text-slate-800 font-sans selection:bg-violet-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#EAE8FE]/40 via-transparent to-transparent pointer-events-none" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative z-10">
          {/* 1. HERO SECTION */}
          <section className="grid lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-8">
              <div className={`${neoButton} inline-flex items-center gap-2 px-4 py-2 border border-violet-100/50`}>
                <TrendingUp className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-800 tracking-wide">
                  {t("courses.dataScience.tagline")}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                {t("courses.dataScience.title").split(" & ")[0]} & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  {t("courses.dataScience.title").split(" & ")[1]}
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                {t("courses.dataScience.subtitle")}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className={`${neoButton} flex items-center gap-4 px-6 py-4`}>
                  <div className="p-2 bg-violet-100 rounded-lg text-violet-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {t("courses.dataScience.courseDetails.duration")}
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Duration
                    </div>
                  </div>
                </div>
                <div className={`${neoButton} flex items-center gap-4 px-6 py-4`}>
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {t("courses.dataScience.courseDetails.level")}
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Level
                    </div>
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

            {/* Hero Right Pricing Card */}
            <div className="lg:col-span-5 relative">
              <div className={`${neoCard} p-8 relative overflow-hidden`}>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-slate-500 font-medium">Course Fee</h3>
                    <span className="bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1 rounded-full">
                      20% OFF
                    </span>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-extrabold text-slate-900">{price}</span>
                    <span className="text-xl text-slate-400 line-through mb-1">{originalPrice}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                      <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-500">
                        {benefit.icon}
                      </div>
                      {benefit.text}
                    </div>
                  ))}
                </div>

                <div className={`${neoInset} p-5 mb-6`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-slate-800">Next Batch Starts</span>
                    <span className="text-sm font-bold text-violet-600">
                      {t("courses.dataScience.courseDetails.nextBatch")}
                    </span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] h-2 rounded-full mb-2 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-violet-500 to-indigo-500 w-[75%] h-full rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500">
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-200 border border-white" />
                      <div className="w-5 h-5 rounded-full bg-violet-200 border border-white" />
                      <div className="w-5 h-5 rounded-full bg-fuchsia-200 border border-white" />
                    </div>
                    <span>{t("courses.dataScience.courseDetails.seatsLeft")} seats left</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 1.5 TECH BANNER */}
          <div className="w-full mb-8 px-4">
            <div className="max-w-6xl mx-auto bg-[#F8F9FE] shadow-[6px_6px_12px_#d9dbe6,-6px_-6px_12px_#ffffff] rounded-2xl py-4 px-6 md:px-8 border border-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center md:text-left shrink-0">
                Built with industry-leading technologies
              </span>
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
                {[
                  { name: "Python 3.11+", src: "/assets/icons/python.png" },
                  { name: "NumPy", src: "/assets/icons/image1.png" },
                  { name: "Pandas", src: "/assets/icons/django.png" },
                  { name: "Scikit-Learn", src: "/assets/icons/git.png" },
                  { name: "TensorFlow", src: "/assets/icons/tensor.png" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8F9FE] shadow-[4px_4px_8px_#d9dbe6,-4px_-4px_8px_#ffffff] border border-white/80 rounded-full px-4 py-1.5 flex items-center gap-2 font-semibold text-slate-600 shrink-0 text-xs md:text-sm transition-transform duration-200 cursor-default">
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <Image src={tech.src} alt={tech.name} width={25} height={25} className="object-contain" priority />
                    </div>
                    <span className="text-slate-600 font-medium tracking-tight whitespace-nowrap">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. STATS BAR */}
          <section className="w-full mb-16 px-4">
            <div className="max-w-6xl mx-auto bg-[#b68ee8]/40 shadow-[12px_12px_24px_#d9dbe6,-12px_-12px_24px_#ffffff] rounded-3xl border border-white/60 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 py-6 md:divide-x md:divide-violet-200/40">
                {[
                  { val: "10+", label: "Real Projects" },
                  { val: "120+", label: "Hours of Learning" },
                  { val: "1:1", label: "Mentorship" },
                  { val: "94%", label: "Placement Assistance" },
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

          {/* 3. CURRICULUM INTERACTIVE SECTION */}
          <section className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100/50 text-violet-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-violet-200">
              <BookOpen className="w-3.5 h-3.5" /> Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {t("courses.dataScience.curriculumTitle").split(" You'll ")[0]}{" "}
              <span className="text-violet-600">You'll Learn</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto">{t("courses.dataScience.curriculumDesc")}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    activeModule === idx
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_8px_16px_rgba(124,58,237,0.3)] scale-105"
                      : `${neoButton} text-slate-600 hover:text-violet-600`
                  }`}>
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${activeModule === idx ? "bg-white/20" : "bg-violet-100 text-violet-700"}`}>
                    {idx + 1}
                  </span>
                  {mod.title}
                </button>
              ))}
            </div>

            <div className={`${neoCard} p-8 md:p-12 text-left relative`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${neoInset} h-64 md:h-80 flex items-center justify-center relative overflow-hidden p-6`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-indigo-50/20" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image src="/assets/icons/course1.png" alt="Data Science Course" width={400} height={400} className="object-contain drop-shadow-2xl" priority />
                  </div>
                </div>

                <div className="space-y-6">
                  <ul className="grid gap-4">
                    {modules[activeModule].topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-xl font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    Includes {modules[activeModule].projects} hands-on projects ({modules[activeModule].duration})
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. OUTCOMES & TOOLS GRID */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <div className={`${neoCard} p-8 bg-white border border-gray-100`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{t("courses.dataScience.careerTitle")}</h3>
                    <p className="text-sm font-medium text-slate-500">{t("courses.dataScience.careerSubtitle")}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-slate-600">Average Salary Hike</span>
                  <span className="text-xl font-extrabold text-violet-600">65%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-slate-600">Project Completion Rate</span>
                  <span className="text-xl font-extrabold text-violet-600">98%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-600">Industry Demand</span>
                  <span className="text-xl font-extrabold text-indigo-600">Very High</span>
                </div>
              </div>

              <div className={`${neoInset} p-4`}>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Job Roles</span>
                <span className="text-sm font-medium text-slate-700">
                  Data Scientist, ML Engineer, AI Developer, Data Analyst
                </span>
              </div>
            </div>

            <div className={`${neoCard} p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{t("courses.dataScience.toolsTitle")}</h3>
                  <p className="text-sm font-medium text-slate-500">{t("courses.dataScience.toolsSubtitle")}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool, idx) => (
                  <div key={idx} className={`${neoButton} flex flex-col items-center justify-center py-6 gap-3`}>
                    <div className="text-violet-600 w-8 h-8 flex items-center justify-center">{tool.icon}</div>
                    <span className="text-xs font-bold text-slate-600 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. TESTIMONIALS */}
          <section className="mb-24 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-violet-600 mb-2">Loved by Learners</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 relative px-10 md:px-0">
              {testimonials.map((t, idx) => (
                <div key={idx} className={`${neoCard} p-6 flex flex-col justify-between`}>
                  <div>
                    <p className="text-slate-700 font-medium leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex gap-1 text-amber-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-violet-100/50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-200 border-2 border-white shadow-sm flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <span className="text-xs font-medium text-slate-500">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5.5 CONNECTED KNOWLEDGE BASE & LOCATION HUBS */}
          <section className="mb-16">
            <div className="bg-[#F4F5FA] rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Data Science & AI Learning Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl font-medium">
                Deepen your analytical and machine learning capabilities with our free technical guides, career roadmaps, interview preparation banks, and city training cohorts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Link
                  href="/resources/roadmaps/data-scientist-roadmap-2026"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Career Roadmap</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    Data Scientist Roadmap 2026 →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Math, Python, ML & Deep Learning</div>
                </Link>

                <Link
                  href="/resources/interview-questions/data-scientist"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Interview Prep</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    100+ Data Science Q&As →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Algorithms, Feature Engineering & SQL</div>
                </Link>

                <Link
                  href="/resources/roadmaps/ai-engineer-roadmap-2026"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">AI Engineering</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    AI Engineer Roadmap 2026 →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">LLMs, RAG, LangChain & Vector DBs</div>
                </Link>

                <Link
                  href="/resources/projects/data-science-projects"
                  className="p-4 bg-white/80 rounded-2xl border border-white/80 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group"
                >
                  <div className="text-xs font-bold text-[#8B5CF6] mb-1">Portfolio Builders</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                    30+ Data Science Project Ideas →
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Predictive analytics & vision models</div>
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-slate-700">Data Science Training in Tamil Nadu:</span>
                <Link href="/locations/india/tamil-nadu/chennai/data-science" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Chennai</Link>
                <Link href="/locations/india/tamil-nadu/coimbatore/data-science" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Coimbatore</Link>
                <Link href="/locations/india/tamil-nadu/salem/data-science" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Salem</Link>
                <Link href="/locations/india/tamil-nadu/madurai/data-science" className="px-2.5 py-1 bg-white rounded-lg text-slate-600 hover:text-[#8B5CF6] border border-slate-200/60">Madurai</Link>
                <Link href="/locations/india/tamil-nadu" className="px-2.5 py-1 text-[#8B5CF6] font-semibold hover:underline">All Tamil Nadu Hubs →</Link>
              </div>
            </div>
          </section>

          {/* 6. BOTTOM CTA BANNER */}
          <section className="bg-[#EAE8FE]/60 shadow-[12px_12px_24px_#d1d3e2,-12px_-12px_24px_#ffffff] rounded-[32px] p-6 md:p-10 mb-20 border border-white/40">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 flex-shrink-0 flex items-center justify-center relative">
                  <Image src="/assets/icons/course2.png" alt="Data Science Journey" width={400} height={400} className="object-contain" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    <span className="text-violet-600 block font-bold text-xl md:text-2xl mb-1">
                      {t("courses.dataScience.ctaTitle").split(" Your ")[0]} Your
                    </span>
                    Data Science Journey?
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 font-medium max-w-sm">
                    {t("courses.dataScience.ctaDesc")}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="bg-[#F8F9FE] shadow-[6px_6px_16px_#c8cad8,-6px_-6px_16px_#ffffff] rounded-2xl p-6 border border-white">
                  <div className="flex flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900 leading-none">{price}</div>
                      <div className="text-sm text-slate-400 line-through mt-1">{originalPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Next batch starts
                      </div>
                      <div className="text-sm font-extrabold text-violet-600">
                        {t("courses.dataScience.courseDetails.nextBatch")}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-[0_4px_12px_rgba(124,58,237,0.3)]">
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white shadow-[3px_3px_8px_#d9dbe6,-3px_-3px_8px_#ffffff] text-slate-700 text-sm font-bold rounded-xl border border-slate-100">
                      Book Free Demo
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs font-bold mt-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500 fill-current" />
                  <span>Only {t("courses.dataScience.courseDetails.seatsLeft")} seats available</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
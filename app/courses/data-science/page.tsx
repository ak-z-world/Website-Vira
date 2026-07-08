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
  FileCode,
  Award,
  Target,
  Server,
  PlayCircle,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Send,
  Flame,
} from "lucide-react";
import Image from "next/image";
import { useGlobal } from "@/app/providers";

export default function DataScienceCoursePage() {
  const { t, price, originalPrice } = useGlobal();

  // UI state for the neumorphic tabs
  const [activeModule, setActiveModule] = useState(0);

  // RESTORED EXACT ORIGINAL DATA STRUCTURES
  const courseDetails = {
    title: "Data Science & AI Development",
    subtitle:
      "Master Data Science, Machine Learning, and AI. Build intelligent applications using real-world datasets.",
    description:
      "Become an expert in Data Science using Python, ML, Deep Learning, NLP, and Computer Vision.",
    duration: "6 Weeks",
    level: "Beginner to Professional",
    nextBatch: "March 10, 2026",
    seatsLeft: "8",
    enrolled: "2k+",
    rating: "4.9",
  };

  const modules = [
    {
      title: "Python Programming",
      topics: [
        "Introduction to Python",
        "Library functions",
        "Datatypes & Operators",
        "Control statements",
        "Functions",
        "Object-Oriented Programming",
      ],
      icon: <Code2 className="w-5 h-5" />,
      duration: "3 Weeks",
      projects: 2,
    },
    {
      title: "Data Science Fundamentals",
      topics: [
        "Data Analysis",
        "NumPy Fundamentals",
        "Pandas for Data Processing",
        "Statistics",
        "Data Visualization with Seaborn",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
      duration: "3 Weeks",
      projects: 3,
    },
    {
      title: "AI & Machine Learning",
      topics: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
      icon: <Brain className="w-5 h-5" />,
      duration: "2 Weeks",
      projects: 4,
    },
    {
      title: "Tools & Deployment",
      topics: [
        "Jupyter Notebook",
        "Model Training",
        "Real-world AI Projects",
        "Deployment",
      ],
      icon: <Server className="w-5 h-5" />,
      duration: "1 Week",
      projects: 2,
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "Industry Recognized Certification",
    },
    { icon: <Clock className="w-5 h-5" />, text: "120+ Hours of Learning" },
    { icon: <FileCode className="w-5 h-5" />, text: "10+ Real-world Projects" },
    { icon: <Users className="w-5 h-5" />, text: "1:1 Expert Mentorship" },
  ];

  const outcomes = [
    "Analyze real-world datasets",
    "Build Machine Learning models",
    "Build Deep Learning systems",
    "Create NLP applications",
    "Build Computer Vision apps",
    "Deploy AI models",
    "Work with Pandas and NumPy",
    "Become job-ready Data Scientist",
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

  // Neumorphic Utility Classes for Lavender Theme
  const neoCard =
    "bg-[#F8F9FE] shadow-[12px_12px_24px_#d9dbe6,-12px_-12px_24px_#ffffff] rounded-3xl border border-white/50";
  const neoButton =
    "bg-[#F8F9FE] shadow-[6px_6px_12px_#d9dbe6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d9dbe6,inset_-4px_-4px_8px_#ffffff] transition-all rounded-xl";
  const neoInset =
    "bg-[#F8F9FE] shadow-[inset_6px_6px_12px_#d9dbe6,inset_-6px_-6px_12px_#ffffff] rounded-2xl";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Data Science & Machine Learning Course",
            description:
              "Become a Data Scientist by learning Python, Data Analysis, Machine Learning, Deep Learning, and real-world data projects.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Crack Leap Academy",
              url: "https://academy.arivuon.in",
            },
            url: "https://academy.arivuon.in/courses/data-science",
            image: "https://academy.arivuon.in/og-image.png",
            inLanguage: "en",
            availableLanguage: "en",
            educationalLevel: "Beginner to Advanced",
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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9398KXWC97"></script>
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
        {/* Background Ambient Gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#EAE8FE]/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl pointer-events-none" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative z-10">
          {/* 1. HERO SECTION */}
          <section className="grid lg:grid-cols-12 gap-12 items-center mb-12">
            {/* Hero Left */}
            <div className="lg:col-span-7 space-y-8">
              <div
                className={`${neoButton} inline-flex items-center gap-2 px-4 py-2 border border-violet-100/50`}>
                <TrendingUp className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-800 tracking-wide">
                  High-Demand Course
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                {courseDetails.title.split(" & ")[0]} & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  {courseDetails.title.split(" & ")[1]}
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                {courseDetails.subtitle}
              </p>

              <div className="flex flex-wrap gap-6">
                <div
                  className={`${neoButton} flex items-center gap-4 px-6 py-4`}>
                  <div className="p-2 bg-violet-100 rounded-lg text-violet-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {courseDetails.duration}
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Duration
                    </div>
                  </div>
                </div>
                <div
                  className={`${neoButton} flex items-center gap-4 px-6 py-4`}>
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {courseDetails.level}
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
                <button className="flex items-center gap-3 font-semibold text-slate-700 hover:text-violet-600 transition-colors">
                  <PlayCircle className="w-12 h-12 text-violet-200 fill-violet-600/10 shadow-[6px_6px_12px_#d9dbe6,-6px_-6px_12px_#ffffff] rounded-full" />
                  Watch Trailer
                </button>
              </div>
            </div>

            {/* Hero Right Pricing Card */}
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
                    <span className="text-5xl font-extrabold text-slate-900">
                      {price}
                    </span>
                    <span className="text-xl text-slate-400 line-through mb-1">
                      {originalPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-slate-700 font-medium">
                      <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-500">
                        {benefit.icon}
                      </div>
                      {benefit.text}
                    </div>
                  ))}
                </div>

                <div className={`${neoInset} p-5 mb-6`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-slate-800">
                      Next Batch Starts
                    </span>
                    <span className="text-sm font-bold text-violet-600">
                      {courseDetails.nextBatch}
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
                    <span>{courseDetails.seatsLeft} seats left</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 1.5 TECH BANNER */}
          <div className="w-full mb-8 px-4">
            <div className="max-w-6xl mx-auto bg-[#F8F9FE] shadow-[6px_6px_12px_#d9dbe6,-6px_-6px_12px_#ffffff] rounded-2xl py-4 px-6 md:px-8 border border-white flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              {/* Left Label */}
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center md:text-left shrink-0">
                Built with industry-leading technologies
              </span>

              {/* Tech Items Container - Forced to single line via md:flex-nowrap and overflow-x-auto handles extreme edge cases */}
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
                {[
                  { name: "Python 3.11+", src: "/assets/icons/python.png" },
                  { name: "Django 4.2+", src: "/assets/icons/django.png" },
                  { name: "PostgreSQL", src: "/assets/icons/image1.png" },
                  { name: "Git & GitHub", src: "/assets/icons/git.png" },
                  { name: "TensorFlow", src: "/assets/icons/tensor.png" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8F9FE] shadow-[4px_4px_8px_#d9dbe6,-4px_-4px_8px_#ffffff] border border-white/80 rounded-full px-4 py-1.5 flex items-center gap-2 font-semibold text-slate-600 shrink-0 text-xs md:text-sm hover:-translate-y-0.5 transition-transform duration-200 cursor-default">
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={25}
                        height={25}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="text-slate-600 font-medium tracking-tight whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. STATS BAR */}
          <section className="w-full mb-16 px-4">
            <div className="max-w-6xl mx-auto bg-[#b68ee8]/40 shadow-[12px_12px_24px_#d9dbe6,-12px_-12px_24px_#ffffff] rounded-3xl border border-white/60 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 py-6 divide-x divide-violet-200/40">
                {[
                  { val: "10+", label: "Real Projects" },
                  { val: "100+", label: "Hours of Learning" },
                  { val: "1:1", label: "Mentorship" },
                  { val: "94%", label: "Placement Assistance" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center px-4 flex flex-col justify-center items-center group">
                    {/* Exact clean typography scaling for values */}
                    <div className="text-3xl lg:text-4xl font-extrabold text-violet-600 mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {stat.val}
                    </div>
                    {/* Subtle text styling matching image 2 */}
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
              What <span className="text-violet-600">You'll Learn</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
              A structured path from Python fundamentals to building advanced
              Data Science applications.
            </p>

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
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${activeModule === idx ? "bg-white/20" : "bg-violet-100 text-violet-700"}`}>
                    {idx + 1}
                  </span>
                  {mod.title}
                </button>
              ))}
            </div>

            <div className={`${neoCard} p-8 md:p-12 text-left relative`}>
              {/* Arrow Controls as per UI (Visual layout representation) */}
              <button
                className={`${neoButton} absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10 hidden md:flex text-slate-500 hover:text-violet-600`}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className={`${neoButton} absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10 hidden md:flex text-slate-500 hover:text-violet-600`}>
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* 3D Image Area */}
                <div
                  className={`${neoInset} h-64 md:h-80 flex items-center justify-center relative overflow-hidden p-6`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-indigo-50/20" />

                  {/* Image Component */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/assets/icons/course1.png"
                      alt="Data Science Course"
                      width={400}
                      height={400}
                      className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                      priority // Use priority if this is LCP (Largest Contentful Paint) image
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <ul className="grid gap-4">
                    {modules[activeModule].topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 font-medium text-slate-700">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-xl font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    Includes {modules[activeModule].projects} hands-on projects
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. OUTCOMES & TOOLS GRID */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* Career Outcomes Card */}
            <div className={`${neoCard} p-8 bg-white border border-gray-100`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Career Outcomes
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      What graduates achieve
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg text-white">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-slate-600">
                    Average Salary Hike
                  </span>
                  <span className="text-xl font-extrabold text-violet-600">
                    65%
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-slate-600">
                    Project Completion Rate
                  </span>
                  <span className="text-xl font-extrabold text-violet-600">
                    98%
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-slate-600">
                    Industry Demand
                  </span>
                  <span className="text-xl font-extrabold text-indigo-600">
                    Very High
                  </span>
                </div>
              </div>

              <div className={`${neoInset} p-4`}>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Job Roles
                </span>
                <span className="text-sm font-medium text-slate-700">
                  Data Scientist, ML Engineer, AI Developer, Data Analyst
                </span>
              </div>
            </div>

            {/* Tools & Tech Card */}
            <div className={`${neoCard} p-8`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Tools & Technologies
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    You'll work with the best
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className={`${neoButton} flex flex-col items-center justify-center py-6 gap-3`}>
                    <div className="text-violet-600 w-8 h-8 flex items-center justify-center">
                      {tool.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-600 text-center">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. TESTIMONIALS (NEWLY ADDED) */}
          <section className="mb-24 relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-violet-600 mb-2">
                Loved by Learners
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative px-10 md:px-0">
              {/* Slider Controls */}
              <button
                className={`${neoButton} absolute left-[-10px] md:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10 text-slate-500 hover:text-violet-600`}>
                <ChevronLeft className="w-6 h-6" />
              </button>

              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`${neoCard} p-6 flex flex-col justify-between`}>
                  <div>
                    <p className="text-slate-700 font-medium leading-relaxed mb-4">
                      "{t.text}"
                    </p>
                    <div className="flex gap-1 text-amber-400 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-violet-100/50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-200 border-2 border-white shadow-sm flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {t.name}
                      </h4>
                      <span className="text-xs font-medium text-slate-500">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                className={`${neoButton} absolute right-[-10px] md:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10 text-slate-500 hover:text-violet-600`}>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </section>

          {/* 6. BOTTOM CTA BANNER */}
          <section className="bg-[#EAE8FE]/60 shadow-[12px_12px_24px_#d1d3e2,-12px_-12px_24px_#ffffff] rounded-[32px] p-6 md:p-10 mb-20 border border-white/40">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Side: Image & Text Typography */}
              <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                {/* Added responsive sizing (w-36 h-36 base, md:w-44 md:h-44, lg:w-56 lg:h-56) */}
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 flex-shrink-0 flex items-center justify-center relative">
                  <Image
                    src="/assets/icons/course2.png"
                    alt="Data Science Journey"
                    width={400} // Increased bounds to allow higher scaling resolution
                    height={400}
                    className="object-contain drop-shadow-[0_10px_15px_rgba(124,58,237,0.2)]"
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    <span className="text-violet-600 block font-bold text-xl md:text-2xl mb-1">
                      Ready to Start Your
                    </span>
                    Data Science Journey?
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 font-medium max-w-sm">
                    Join the next batch and build real-world intelligent
                    applications with confidence.
                  </p>
                </div>
              </div>

              {/* Right Side: Neumorphic Interactive Purchase Card */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <div className="bg-[#F8F9FE] shadow-[6px_6px_16px_#c8cad8,-6px_-6px_16px_#ffffff] rounded-2xl p-6 border border-white">
                  {/* Top Info Row inside the inner card */}
                  <div className="flex flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900 leading-none">
                        {price}
                      </div>
                      <div className="text-sm text-slate-400 line-through mt-1">
                        {originalPrice}
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

                  {/* Action Buttons Row inside the inner card */}
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

                {/* Seats indicator centered precisely below the inner card */}
                <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs font-bold mt-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500 fill-current" />
                  <span>Only {courseDetails.seatsLeft} seats available</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

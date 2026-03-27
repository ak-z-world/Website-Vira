"use client";

import {
  ArrowRight,
  Sparkles,
  Users,
  Award,
  ChevronRight,
  PlayCircle,
  Star,
  TrendingUp,
  CheckCircle,
  Brain,
  Zap,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CourseTab = "python" | "devops" | "python-ai-aws-devops-combo";

interface CourseStats {
  students: string;
  projects: string;
}

interface CourseStatsMap {
  python: CourseStats;
  devops: CourseStats;
  react: CourseStats;
}

interface TabItem {
  id: CourseTab;
  label: string;
  color: string;
  bgColor: string;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState("python-ai-aws-devops-combo");

  const tabs: TabItem[] = [
    {
      id: "python-ai-aws-devops-combo",
      label: "Python + AI + AWS DevOps (Combo)",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      id: "python",
      label: "Python",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: "devops",
      label: "AWS DevOps",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  const getCourseTitle = () => {
    switch (activeTab) {
      case "python-ai-aws-devops-combo":
        return "Python + AI + AWS DevOps Engineering (Combo Pack)";
      case "python":
        return "Python & Django Development";
      case "devops":
        return "AWS DevOps Engineering";
      default:
        return "Python + AI + AWS DevOps Engineering (Combo Pack)";
    }
  };

  const getCourseDescription = () => {
    switch (activeTab) {
      case "python-ai-aws-devops-combo":
        return "Backend Development + AI (Basics) + CI/CD + Docker + AWS with real-world deployment projects";
      case "python":
        return "Master Django, REST APIs, Database Design & real-world projects";
      case "devops":
        return "Docker, CI/CD, AWS Cloud & automation";
      default:
        return "Backend Development + CI/CD + Docker + AWS with real-world deployment projects";
    }
  };

  const getCoursePrice = () => {
    switch (activeTab) {
      case "python-ai-aws-devops-combo":
        return "₹10,000";
      case "python":
        return "₹10,000";
      case "devops":
        return "₹10,000";
      default:
        return "₹10,000";
    }
  };

  const getCourseDuration = () => {
    switch (activeTab) {
      case "python-ai-aws-devops-combo":
        return "12 Weeks";
      case "python":
        return "6 Weeks";
      case "devops":
        return "6 Weeks";
      default:
        return "12 Weeks";
    }
  };

  const getCourseIcon = () => {
    switch (activeTab) {
      case "python-ai-aws-devops-combo":
        return <Rocket className="w-5 h-5 xs:w-6 xs:h-6 text-white" />;
      case "python":
        return <Sparkles className="w-5 h-5 xs:w-6 xs:h-6 text-white" />;
      case "devops":
        return <TrendingUp className="w-5 h-5 xs:w-6 xs:h-6 text-white" />;
      default:
        return <Rocket className="w-5 h-5 xs:w-6 xs:h-6 text-white" />;
    }
  };

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9398KXWC97"></script>

      {/* Google Tag Manager - Inline Script */}
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

      <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-[#F8FAFF] to-[#E0ECFF] px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mobile Optimized Blobs */}
          <div className="absolute -top-20 -left-20 xs:-top-32 xs:-left-32 w-48 h-48 xs:w-64 xs:h-64 sm:w-96 sm:h-96 lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-[#1E3A8A]/20 via-[#3B82F6]/10 to-transparent rounded-full blur-2xl xs:blur-3xl"></div>

          <div className="absolute top-20 xs:top-32 right-0 w-40 h-40 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-bl from-[#0E2A5A]/20 via-[#3B82F6]/10 to-transparent rounded-full blur-2xl xs:blur-3xl"></div>

          {/* Large Nebula Blob — visible from sm+ */}
          <div className="hidden sm:block absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

          {/* Secondary Blob — visible from sm+ */}
          <div className="hidden sm:block absolute -bottom-40 -left-40 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl animate-[spin_40s_linear_infinite]"></div>

          {/* Floating Orb — visible from md+ */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-indigo-500/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>

          {/* Star Particles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[length:30px_30px] xs:bg-[length:40px_40px] opacity-20"></div>

          {/* Orange/Warm Accents */}
          <div className="hidden sm:block absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="hidden sm:block absolute -bottom-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute top-1/2 left-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-50/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Quantum Effects — visible from md+ */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          {/* Main quantum orbit */}
          <div
            className="absolute top-[35%] left-[20%] w-[350px] lg:w-[450px] h-[350px] lg:h-[450px] border border-indigo-500/30 rounded-full animate-spin opacity-60"
            style={{ animationDuration: "60s" }}
          />

          <div
            className="absolute top-[35%] left-[20%] w-[550px] lg:w-[750px] h-[500px] lg:h-[650px] border border-indigo-500/30 rounded-full animate-spin opacity-80"
            style={{ animationDuration: "60s" }}
          />

          {/* Secondary orbit */}
          <div
            className="absolute top-[40%] left-[25%] w-[250px] lg:w-[320px] h-[250px] lg:h-[320px] border border-cyan-400/40 rounded-full animate-spin opacity-50"
            style={{ animationDuration: "40s", animationDirection: "reverse" }}
          />

          {/* Core glow */}
          <div className="absolute top-[48%] left-[33%] w-20 lg:w-28 h-20 lg:h-28 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
        </div>

        {/* Neural Network Nodes — visible from md+ */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[25%] left-[12%] w-2.5 h-2.5 lg:w-3 lg:h-3 bg-cyan-400 rounded-full animate-ping"></div>

          <div
            className="absolute top-[45%] left-[28%] w-2 h-2 bg-indigo-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />

          <div
            className="absolute top-[60%] left-[18%] w-2 h-2 bg-purple-400 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="absolute top-[35%] left-[30%] w-2 h-2 bg-blue-400 rounded-full animate-ping"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 w-full">
                {/* Main Heading */}
                <div className="relative space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Quantum Nebula Glow */}
                  <div className="absolute -inset-8 xs:-inset-10 sm:-inset-12 md:-inset-16 lg:-inset-20 bg-gradient-to-r from-[#1E3A8A]/20 via-[#3B82F6]/10 to-transparent blur-2xl xs:blur-3xl rounded-full"></div>

                  {/* Heading */}
                  <h1 className="relative font-bold leading-tight tracking-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="bg-gradient-to-r from-[#0B1F3A] via-[#0E2A5A] to-[#1E3A8A] bg-clip-text text-transparent block">
                      Accelerate Your
                    </span>

                    <span className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent animate-[pulse_4s_ease-in-out_infinite] block mt-1 xs:mt-2">
                      Tech Career
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed max-w-2xl text-sm xs:text-base sm:text-lg md:text-xl">
                    Transform your career with industry-focused training at
                    <span className="font-semibold text-[#0E2A5A]"> ArivuOn Academy</span>.
                    Master Python, AI & ML, DevOps, and React with hands-on projects, expert mentorship, and placement support.
                  </p>
                </div>

                {/* Code particles — hidden on mobile */}
                <div className="hidden xs:block absolute inset-0 opacity-10 text-indigo-400 text-xs font-mono pointer-events-none">
                  <div className="absolute top-20 left-10 animate-float">{'{ AI }'}</div>
                  <div className="absolute top-40 right-20 animate-float delay-1000">{'< ML />'}</div>
                  <div className="absolute bottom-20 left-32 animate-float delay-500">{'0101'}</div>
                  <div className="absolute bottom-40 right-40 animate-float delay-700">{'< />'}</div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 xs:gap-4 pt-2 xs:pt-4 md:pt-6">
                  {/* Primary Button */}
                  <Link
                    href="/courses"
                    className="group relative inline-flex items-center justify-center gap-2 xs:gap-3 px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base bg-gradient-to-r from-[#0E2A5A] via-[#1E3A8A] to-[#2563EB] text-white font-semibold rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-[2px] hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#38BDF8] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

                    <span className="relative z-10">
                      Explore Programs
                    </span>

                    <ArrowRight className="relative z-10 w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Secondary Button */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base border border-[#1E3A8A]/30 text-[#0E2A5A] font-semibold bg-white hover:bg-[#F1F5FF] rounded-lg xs:rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
                  >
                    <PlayCircle className="w-4 h-4 xs:w-5 xs:h-5 text-[#2563EB] group-hover:scale-110 transition-transform" />

                    <span className="hidden xs:inline">Free</span> Career Session
                  </Link>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2.5 xs:gap-3 sm:gap-4 md:gap-5">
                  {[
                    {
                      icon: <Users className="w-4 h-4 xs:w-5 xs:h-5 text-[#2563EB]" />,
                      title: "1:1 Industry Mentorship",
                      subtitle: null,
                    },
                    {
                      icon: <Award className="w-4 h-4 xs:w-5 xs:h-5 text-[#1E3A8A]" />,
                      title: "Certification",
                      subtitle: "ArivuOn Academy",
                    },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-2.5 xs:gap-3 sm:gap-4 px-3 xs:px-4 sm:px-5 py-3 xs:py-3.5 sm:py-4 bg-white border border-[#E6ECFF] rounded-lg xs:rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg xs:rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-[#BFDBFE] group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>

                      {/* Text */}
                      <div className="flex flex-col leading-tight min-w-0">
                        <span className="text-xs xs:text-sm sm:text-base font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors truncate">
                          {feature.title}
                        </span>

                        {feature.subtitle && (
                          <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-[#2563EB] whitespace-nowrap">
                            {feature.subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Interactive Card */}
              <div className="relative w-full mt-6 sm:mt-8 lg:mt-0">
                {/* Main Card */}
                <div className="relative bg-white border border-[#E6ECFF] rounded-2xl xs:rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="px-3.5 xs:px-4 sm:px-5 md:px-6 pt-3.5 xs:pt-4 sm:pt-5 md:pt-6">
                    <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 mb-3.5 xs:mb-4 sm:mb-5 md:mb-6">
                      <div className="flex gap-1.5 xs:gap-2">
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                      </div>

                      <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-[#1E3A8A] tracking-wide truncate">
                        ArivuOn Academy Dashboard
                      </span>
                    </div>

                    {/* Course Selector - Responsive Tabs */}
                    <div className="mb-5 xs:mb-6 sm:mb-8">
                      <div className="flex flex-nowrap xs:flex-wrap gap-1.5 xs:gap-2 sm:gap-3 overflow-x-auto pb-2 xs:pb-0 scrollbar-hide -mx-3.5 xs:mx-0 px-3.5 xs:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {tabs.map((tab) => {
                          const isActive = activeTab === tab.id;

                          return (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`relative flex-shrink-0 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 border ${isActive ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-lg" : "bg-white text-gray-700 border-gray-200 hover:border-[#2563EB] hover:text-[#1E3A8A]"}`}
                            >
                              {tab.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="px-3.5 xs:px-4 sm:px-5 md:px-6 pb-3.5 xs:pb-4 sm:pb-5 md:pb-6">
                    <div className="space-y-2.5 xs:space-y-3 sm:space-y-4">
                      {/* Course Card */}
                      <div className="p-3.5 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#F8FAFF] to-[#EEF2FF] border border-[#E6ECFF]">
                        <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                          {/* Icon */}
                          <div className="flex-shrink-0 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white shadow-md">
                            {getCourseIcon()}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-xs xs:text-sm sm:text-base md:text-lg text-[#0F172A] mb-1 xs:mb-1.5 leading-snug">
                              {getCourseTitle()}
                            </h3>

                            <p className="text-[11px] xs:text-xs sm:text-sm text-gray-600 mb-2.5 xs:mb-3 leading-relaxed">
                              {getCourseDescription()}
                            </p>

                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className="font-bold text-[#1E3A8A] text-xs xs:text-sm sm:text-base">
                                {getCoursePrice()}
                              </span>

                              <span className="text-[10px] xs:text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                                {getCourseDuration()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Next Batch */}
                      <div className="p-3 xs:p-3.5 sm:p-4 bg-[#F8FAFF] border border-[#E6ECFF] rounded-lg xs:rounded-xl sm:rounded-2xl">
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <div className="text-[11px] xs:text-xs sm:text-sm font-semibold text-[#0F172A]">
                              Next Batch Starts
                            </div>
                            <div className="text-[10px] xs:text-xs text-gray-500">
                              Limited seats available
                            </div>
                          </div>

                          <div className="text-right flex-shrink-0">
                            <div className="text-[11px] xs:text-xs sm:text-sm font-bold text-[#2563EB]">
                              March 15, 2026
                            </div>
                            <div className="text-[10px] xs:text-xs text-gray-500">
                              Enroll before Mar 10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-3.5 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-5 md:py-6 border-t border-[#E6ECFF] bg-[#F8FAFF]">
                    <Link
                      href={`/contact?course=${activeTab}`}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm xs:text-base bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#172554] hover:to-[#1D4ED8] text-white font-semibold rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Start Learning at ArivuOn
                      <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5" />
                    </Link>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="hidden sm:flex absolute -top-10 xs:-top-12 sm:-top-14 -right-2 sm:-right-4 md:-right-6 w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-lg xs:rounded-xl sm:rounded-2xl text-white items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">98%</div>
                    <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs leading-tight">Success Rate</div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="hidden sm:flex absolute -bottom-4 sm:-bottom-6 right-3 sm:right-4 md:right-6 px-3 xs:px-4 sm:px-5 py-2 xs:py-3 bg-white border border-[#E6ECFF] rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md items-center gap-2 xs:gap-3">
                  <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#EEF2FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-[#2563EB]" />
                  </div>

                  <div className="text-xs xs:text-xs sm:text-sm font-semibold text-[#0F172A] whitespace-nowrap">
                    ArivuOn Academy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 xs:h-24 sm:h-32 pointer-events-none"></div>
      </section>

      <style jsx>{`
        @supports (scrollbar-width: none) {
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Responsive padding adjustments */
        @media (max-width: 374px) {
          .section-padding {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        /* Ensure icons don't overflow */
        svg {
          flex-shrink: 0;
        }

        /* Custom scrollbar for tabs on mobile */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Hero;
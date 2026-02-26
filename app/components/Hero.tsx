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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CourseTab = "python" | "devops" | "react" | "datascience";

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
  const [activeTab, setActiveTab] = useState<CourseTab>("python");

  const tabs: TabItem[] = [
    {
      id: "python",
      label: "Python",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      id: "devops",
      label: "DevOps",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "react",
      label: "React",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: "datascience",
      label: "Data Science",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const getCourseTitle = () => {
    switch (activeTab) {
      case "python":
        return "Python Full Stack Development";
      case "devops":
        return "DevOps Engineering";
      case "react":
        return "React Development";
      case "datascience":
        return "Data Science & AI";
      default:
        return "Python Full Stack Development";
    }
  };

  const getCourseDescription = () => {
    switch (activeTab) {
      case "python":
        return "Master Django, FastAPI, AI/ML & real-world projects";
      case "devops":
        return "Docker, Kubernetes, AWS Cloud & automation";
      case "react":
        return "Modern React, Next.js, TypeScript & state management";
      case "datascience":
        return "Machine Learning, Deep Learning, NLP & Computer Vision";
      default:
        return "Master Django, FastAPI, AI/ML & real-world projects";
    }
  };

  const getCoursePrice = () => {
    switch (activeTab) {
      case "python":
        return "₹35,000";
      case "devops":
        return "₹35,000";
      case "react":
        return "₹35,000";
      case "datascience":
        return "₹35,000";
      default:
        return "₹35,000";
    }
  };

  const getCourseDuration = () => {
    switch (activeTab) {
      case "python":
        return "12 Weeks";
      case "devops":
        return "16 Weeks";
      case "react":
        return "10 Weeks";
      case "datascience":
        return "14 Weeks";
      default:
        return "12 Weeks";
    }
  };


  const getCourseIcon = () => {
    switch (activeTab) {
      case "python":
        return <Sparkles className="w-6 h-6 text-white" />;
      case "devops":
        return <TrendingUp className="w-6 h-6 text-white" />;
      case "react":
        return <Star className="w-6 h-6 text-white" />;
      case "datascience":
        return <Brain className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFF] to-[#E0ECFF] pt-32 pb-10 md:pt-10 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#1E3A8A]/20 via-[#3B82F6]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0E2A5A]/20 via-[#3B82F6]/10 to-transparent rounded-full blur-3xl"></div>
        {/* Large Nebula Blob */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

        {/* Secondary Blob */}
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl animate-[spin_40s_linear_infinite]"></div>

        {/* Floating Orb */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>

        {/* Star Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      {/* Quantum Effects — LEFT SIDE ONLY */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Main quantum orbit */}
        <div className="
    absolute
    top-[35%]
    left-[20%]
    w-[450px]
    h-[450px]
    border border-indigo-500/30
    rounded-full
    animate-spin
    opacity-60
  " style={{ animationDuration: "60s" }} />
        <div className="
    absolute
    top-[35%]
    left-[20%]
    w-[750px]
    h-[650px]
    border border-indigo-500/30
    rounded-full
    animate-spin
    opacity-80
  " style={{ animationDuration: "60s" }} />

        {/* Secondary orbit */}
        <div className="
    absolute
    top-[40%]
    left-[25%]
    w-[320px]
    h-[320px]
    border border-cyan-400/40
    rounded-full
    animate-spin
    opacity-50
  " style={{ animationDuration: "40s", animationDirection: "reverse" }} />

        {/* Core glow */}
        <div className="
    absolute
    top-[48%]
    left-[33%]
    w-[120px]
    h-[120px]
    bg-indigo-500/20
    rounded-full
    blur-2xl
    animate-pulse
  " />

      </div>
      {/* Neural network nodes */}
      {/* Neural Network Nodes — LEFT AREA */}
      <div className="absolute inset-0 pointer-events-none z-0">

        <div className="absolute top-[25%] left-[12%] w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>

        <div className="absolute top-[45%] left-[28%] w-2 h-2 bg-indigo-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }} />

        <div className="absolute top-[60%] left-[18%] w-2 h-2 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "2s" }} />

        <div className="absolute top-[35%] left-[30%] w-2 h-2 bg-blue-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }} />

      </div>
      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)]">

                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                  <Brain className="w-5 h-5 text-[#0B1F3A]" />
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#0B1F3A] tracking-wide">
                    ArivuOn Quantum Excellence
                  </div>
                  <div className="text-xs text-gray-600">
                    98% Success Probability
                  </div>
                </div>

              </div>

              {/* Main Heading */}
              <div className="relative space-y-4 sm:space-y-5 md:space-y-6">

                {/* Quantum Nebula Glow */}
                <div className="
    absolute 
    -inset-10 sm:-inset-14 md:-inset-16 lg:-inset-20
    bg-gradient-to-r 
    from-[#1E3A8A]/20 
    via-[#3B82F6]/10 
    to-transparent 
    blur-3xl 
    rounded-full
  "></div>

                {/* Heading */}
                <h1 className="
    relative 
    font-bold 
    leading-tight 
    tracking-tight

    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    xl:text-7xl
  ">

                  <span className="
      bg-gradient-to-r 
      from-[#0B1F3A] 
      via-[#0E2A5A] 
      to-[#1E3A8A] 
      bg-clip-text 
      text-transparent
    ">
                    Accelerate Your
                  </span>

                  <br />

                  <span className="
      bg-gradient-to-r 
      from-[#1E3A8A] 
      via-[#2563EB] 
      to-[#38BDF8] 
      bg-clip-text 
      text-transparent
      animate-[pulse_4s_ease-in-out_infinite]
    ">
                    Tech Career
                  </span>

                </h1>

                {/* Description */}
                <p className="
    text-gray-600 
    leading-relaxed 
    max-w-xl sm:max-w-2xl

    text-base
    sm:text-lg
    md:text-xl
  ">
                  Transform your career with industry-focused training at
                  <span className="font-semibold text-[#0E2A5A]"> ArivuOn Academy</span>.
                  Master Python, DevOps, and React with hands-on projects, expert mentorship, and placement support.
                </p>

              </div>
              {/* Code particles */}
              <div className="absolute inset-0 opacity-10 text-indigo-400 text-xs font-mono pointer-events-none">

                <div className="absolute top-20 left-10 animate-float">{'{ AI }'}</div>
                <div className="absolute top-40 right-20 animate-float delay-1000">{'< ML />'}</div>
                <div className="absolute bottom-20 left-32 animate-float delay-500">{'0101'}</div>
                <div className="absolute bottom-40 right-40 animate-float delay-700">{'< />'}</div>

              </div>

              {/* CTA Buttons */}
              <div className="
  flex 
  flex-col 
  sm:flex-row 
  items-stretch sm:items-center
  gap-3 sm:gap-4 
  pt-4 sm:pt-6
">

                {/* Primary Button */}
                <Link
                  href="/courses"
                  className="
      group 
      relative 
      inline-flex 
      items-center 
      justify-center 
      gap-2 sm:gap-3

      px-6 sm:px-8
      py-3 sm:py-4

      text-sm sm:text-base

      bg-gradient-to-r 
      from-[#0E2A5A] 
      via-[#1E3A8A] 
      to-[#2563EB]

      text-white 
      font-semibold 

      rounded-xl sm:rounded-2xl

      shadow-lg
      shadow-blue-900/20

      hover:shadow-blue-900/40
      hover:-translate-y-[2px]
      hover:scale-[1.02]

      transition-all 
      duration-300
    "
                >

                  {/* Glow effect */}
                  <div className="
      absolute 
      inset-0 
      rounded-xl sm:rounded-2xl
      bg-gradient-to-r 
      from-[#2563EB] 
      to-[#38BDF8] 
      opacity-0 
      group-hover:opacity-20 
      blur-xl 
      transition-all 
      duration-500
    "></div>

                  <span className="relative z-10">
                    Explore Programs
                  </span>

                  <ArrowRight className="
      relative z-10
      w-4 h-4 sm:w-5 sm:h-5
      group-hover:translate-x-1
      transition-transform
    "/>

                </Link>


                {/* Secondary Button */}
                <Link
                  href="/contact"
                  className="
      group
      inline-flex 
      items-center 
      justify-center 
      gap-2

      px-6 sm:px-8
      py-3 sm:py-4

      text-sm sm:text-base

      border 
      border-[#1E3A8A]/30

      text-[#0E2A5A]
      font-semibold 

      bg-white
      hover:bg-[#F1F5FF]

      rounded-xl sm:rounded-2xl

      shadow-sm
      hover:shadow-md

      hover:-translate-y-[2px]

      transition-all 
      duration-300
    "
                >

                  <PlayCircle className="
      w-4 h-4 sm:w-5 sm:h-5
      text-[#2563EB]
      group-hover:scale-110
      transition-transform
    "/>

                  Free Career Session

                </Link>

              </div>

              {/* Features */}
              <div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  gap-4 sm:gap-5
">

  {[
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB]" />,
      title: "1:1 Industry Mentorship",
      subtitle: null,
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E3A8A]" />,
      title: "Certification",
      subtitle: "ArivuOn Academy",
    },
  ].map((feature, idx) => (

    <div
      key={idx}
      className="
        group
        flex items-center gap-3 sm:gap-4

        px-4 sm:px-5
        py-3 sm:py-4

        bg-white
        border border-[#E6ECFF]

        rounded-xl sm:rounded-2xl

        shadow-sm
        hover:shadow-md
        hover:-translate-y-[2px]

        transition-all duration-300
      "
    >

      {/* Icon */}
      <div className="
        flex items-center justify-center

        w-9 h-9 sm:w-10 sm:h-10

        rounded-lg sm:rounded-xl

        bg-gradient-to-br
        from-[#EFF6FF]
        to-[#DBEAFE]

        border border-[#BFDBFE]

        group-hover:scale-110
        transition-transform
      ">
        {feature.icon}
      </div>


      {/* Text */}
      <div className="flex flex-col leading-tight">

        <span className="
          text-sm sm:text-base
          font-semibold
          text-[#0F172A]
          group-hover:text-[#1E3A8A]
          transition-colors
        ">
          {feature.title}
        </span>

        {feature.subtitle && (
          <span className="
            text-xs sm:text-sm
            font-medium
            text-[#2563EB]
            whitespace-nowrap
          ">
            {feature.subtitle}
          </span>
        )}

      </div>

    </div>

  ))}

</div>
            </div>

            {/* Right Side - Interactive Card */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">

              {/* Main Card */}
              <div className="
    relative

    bg-white
    border border-[#E6ECFF]

    rounded-2xl sm:rounded-3xl

    shadow-md hover:shadow-xl

    transition-all duration-300

    overflow-hidden
  ">

                {/* Header */}
                <div className="px-4 sm:px-6 pt-1 sm:pt-1">

                  <div className="flex items-center gap-2 sm:gap-3 mb-5">

                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    </div>

                    <span className="
          text-xs sm:text-sm
          font-semibold
          text-[#1E3A8A]
          tracking-wide
        ">
                      ArivuOn Academy Dashboard
                    </span>

                  </div>


                  {/* Course Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 sm:mb-8">

                    {tabs.map((tab) => (

                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
              px-3 sm:px-4
              py-2.5 sm:py-3

              text-xs sm:text-sm

              rounded-lg sm:rounded-xl

              font-semibold

              transition-all duration-300

              ${activeTab === tab.id
                            ? "bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-md"
                            : "bg-[#F8FAFF] text-gray-600 hover:bg-[#EEF2FF]"
                          }
            `}
                      >
                        {tab.label}
                      </button>

                    ))}

                  </div>

                </div>


                {/* Course Content */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">

                  <div className="space-y-4">

                    {/* Course Card */}
                    <div className="
          p-4 sm:p-5

          rounded-xl sm:rounded-2xl

          bg-gradient-to-br from-[#F8FAFF] to-[#EEF2FF]

          border border-[#E6ECFF]
        ">

                      <div className="flex items-start gap-3 sm:gap-4">

                        {/* Icon */}
                        <div className="
              w-10 h-10 sm:w-12 sm:h-12

              rounded-lg sm:rounded-xl

              bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]

              flex items-center justify-center

              text-white

              shadow-md
            ">
                          {getCourseIcon()}
                        </div>


                        {/* Content */}
                        <div className="flex-1">

                          <h3 className="
                font-bold
                text-base sm:text-lg
                text-[#0F172A]
                mb-1
              ">
                            {getCourseTitle()}
                          </h3>

                          <p className="
                text-sm
                text-gray-600
                mb-3
              ">
                            {getCourseDescription()}
                          </p>


                          <div className="flex items-center justify-between">

                            <span className="
                  font-bold
                  text-[#1E3A8A]
                  text-sm sm:text-base
                ">
                              {getCoursePrice()}
                            </span>

                            <span className="
                  text-xs sm:text-sm
                  text-gray-500
                ">
                              {getCourseDuration()}
                            </span>

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* Next Batch */}
                    <div className="
          p-3 sm:p-4

          bg-[#F8FAFF]

          border border-[#E6ECFF]

          rounded-lg sm:rounded-xl
        ">

                      <div className="flex items-center justify-between">

                        <div>
                          <div className="text-sm font-semibold text-[#0F172A]">
                            Next Batch Starts
                          </div>
                          <div className="text-xs text-gray-500">
                            Limited seats available
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-bold text-[#2563EB]">
                            March 15, 2026
                          </div>
                          <div className="text-xs text-gray-500">
                            Enroll before Mar 10
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* Footer */}
                <div className="
      px-4 sm:px-6
      py-4 sm:py-5

      border-t border-[#E6ECFF]

      bg-[#F8FAFF]
    ">

                  <Link
                    href={`/contact?course=${activeTab}`}
                    className="
          w-full

          flex items-center justify-center gap-2

          py-3

          text-sm sm:text-base

          bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]

          hover:from-[#172554] hover:to-[#1D4ED8]

          text-white

          font-semibold

          rounded-lg sm:rounded-xl

          shadow-md hover:shadow-lg

          transition-all duration-300
        "
                  >
                    Start Learning at ArivuOn
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                </div>

              </div>


              {/* Success Badge */}
              <div className="
    hidden sm:flex

    absolute -top-6 -right-6

    w-20 h-20 sm:w-28 sm:h-28

    bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]

    rounded-xl sm:rounded-2xl

    text-white

    items-center justify-center

    shadow-lg
  ">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold">98%</div>
                  <div className="text-[10px] sm:text-xs">Success Rate</div>
                </div>
              </div>


              {/* Trust Badge */}
              <div className="
    hidden sm:flex

    absolute -bottom-6 right-6

    px-3 py-2 sm:px-4 sm:py-3

    bg-white

    border border-[#E6ECFF]

    rounded-lg sm:rounded-xl

    shadow-md

    items-center gap-2 sm:gap-3
  ">

                <div className="
      w-8 h-8 sm:w-10 sm:h-10

      bg-[#EEF2FF]

      rounded-lg

      flex items-center justify-center
    ">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB]" />
                </div>

                <div className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                  ArivuOn Academy
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

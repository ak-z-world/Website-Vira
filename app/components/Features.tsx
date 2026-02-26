"use client";

import {
  Video,
  Users,
  Briefcase,
  FileCode,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(1);

  const features: Feature[] = [
    {
      id: 1,
      icon: <Video />,
      title: "Live Interactive Sessions",
      description:
        "Attend real-time expert sessions with instant doubt solving.",
      benefits: [
        "Live mentor interaction",
        "Recorded access",
        "Peer coding",
        "Live debugging",
      ],
    },
    {
      id: 2,
      icon: <Users />,
      title: "1:1 Mentorship",
      description:
        "Dedicated mentor support with career guidance & progress reviews.",
      benefits: [
        "Personal mentor",
        "Weekly reviews",
        "Career roadmap",
        "Interview preparation",
      ],
    },
    {
      id: 3,
      icon: <FileCode />,
      title: "Real-World Projects",
      description:
        "Build production-level applications used in real companies.",
      benefits: [
        "Portfolio ready",
        "GitHub projects",
        "Deployment training",
        "Industry architecture",
      ],
    },
    {
      id: 4,
      icon: <Award />,
      title: "ArivuOn Certification",
      description:
        "Industry-recognized certification to boost hiring potential.",
      benefits: [
        "Verified certificate",
        "LinkedIn proof",
        "Global validity",
        "Skill recognition",
      ],
    },
  ];

  const learningMethods = [
    { icon: <Clock />, text: "Flexible Learning" },
    { icon: <ShieldCheck />, text: "100% Practical Training" },
    { icon: <Sparkles />, text: "Modern Tools & AI" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">

      {/* VISIBLE NEBULA BACKGROUND */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-2xl"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2563EB 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-blue-50 border border-blue-200 text-blue-700 font-semibold mb-4">

            <Zap className="w-4 h-4"/>
            ArivuOn Learning System

          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">

            Experience Modern  
            <span className="text-blue-600"> Tech Education</span>

          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Built for career acceleration with real-world training and expert mentorship.
          </p>

        </div>


        {/* LEARNING METHODS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">

          {learningMethods.map((method, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-5
              hover:border-blue-500 hover:shadow-lg
              transition-all duration-300 hover:-translate-y-1"
            >

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 flex items-center justify-center
                bg-blue-50 text-blue-600 rounded-lg
                group-hover:scale-110 transition">

                  {method.icon}

                </div>

                <span className="font-semibold text-gray-800">
                  {method.text}
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* FEATURE LIST */}
          <div className="grid sm:grid-cols-2 gap-5">

            {features.map((feature) => {

              const isActive = feature.id === activeFeature;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}

                  className={`relative p-6 rounded-xl border text-left transition-all duration-300

                  ${
                    isActive
                      ? "border-blue-600 shadow-lg scale-[1.02]"
                      : "border-gray-200 hover:border-blue-400 hover:shadow-md"
                  }

                  bg-white
                  `}
                >

                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl border border-blue-500 animate-pulse"/>
                  )}

                  <div className="flex items-start gap-4">

                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg
transition-all duration-300

${
  isActive
    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-110"
    : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
}`}>

                      {feature.icon}

                    </div>

                    <div>

                      <h3 className={`font-bold text-lg
                      ${isActive ? "text-blue-600" : "text-gray-900"}`}>

                        {feature.title}

                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                </button>
              );
            })}

          </div>


          {/* DETAILS PANEL */}
          <div className="
  bg-white
  border border-blue-200
  rounded-2xl

  p-6 sm:p-7 md:p-8

  shadow-lg

  h-fit
  self-start
">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 flex items-center justify-center rounded-lg
              bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

                {features[activeFeature - 1].icon}

              </div>

              <div>

                <h3 className="text-xl font-bold text-gray-900">
                  {features[activeFeature - 1].title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {features[activeFeature - 1].description}
                </p>

              </div>

            </div>


            {/* BENEFITS */}
            <div className="space-y-3 mb-6">

              {features[activeFeature - 1].benefits.map((benefit, index) => (

                <div key={index} className="flex items-center gap-3">

                  <CheckCircle className="w-5 h-5 text-blue-600"/>

                  <span className="text-gray-700">{benefit}</span>

                </div>

              ))}

            </div>


            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white font-semibold py-3 rounded-lg
              hover:scale-[1.02] transition"
            >

              Start Learning
              <ArrowRight className="w-4 h-4"/>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
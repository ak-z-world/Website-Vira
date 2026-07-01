"use client";

import React from "react";
import { ArrowRight, PlayCircle, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F7FF] flex  overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0 font-sans">
      {/* ── Light Theme Ambient Glows ── */}
      <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Replaced with the new Lavender color: #9362F3 */}
      <div className="absolute bottom-0 right-[-5%] w-[40rem] h-[40rem] bg-[#9362F3]/10 rounded-full blur-[100px] pointer-events-none" />
      {/* ───────────────────────── Main Container ───────────────────────── */}
      <div className="w-full  relative z-10">
        {/* ───────────────────────── Hero Grid ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]  px-12 gap-10 xl:gap-16 min-h-[88vh]">
          {/* ═════════════════════ LEFT CONTENT ═════════════════════ */}
          <div
            className="
    flex
    flex-col
    justify-center

    w-full

    lg:pr-10

    items-center
    lg:items-start

    text-center
    lg:text-left

    mx-auto
    lg:mx-0
  ">
            {/* Badge */}

            <div
              className="
    hero-badge
    inline-flex
    items-center
    gap-1
    px-2
    py-2
    rounded-full
    bg-white
    border
    border-gray-200
    shadow-[0_12px_40px_rgba(31,41,55,.08)]
    mb-8
  ">
              <Rocket className="w-6 h-6  text-amber-500 shrink-0" />

              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                1000+ Students Already Transformed
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
    hero-title
    text-[#111827]

    w-full
  

    leading-[0.92]
    tracking-[-0.055em]
  ">
              <span className="block">Become a</span>

              <span className="block">Job-Ready</span>

              <span
                className="
      block

      bg-gradient-to-r
      from-[#C88CFB]
      to-[#9362F3]

      bg-clip-text
      text-transparent

      text-[0.88em]
      leading-[1.5]
    ">
                Software Engineer
              </span>
            </h1>

            {/* Paragraph */}

            <p
              className="
            hero-subtitle
            max-w-[640px]
            mt-8
        ">
              Learn Python, AI, DevOps & React through <br /> real-world
              projects and expert mentorship.
            </p>

            {/* Buttons */}

            <div
              className="
    flex
    flex-col
    sm:flex-row
    items-center
    lg:items-start
    gap-5
    mt-10
  ">
              <button
                className="
    hero-btn
    flex
    items-center
    gap-2
    text-white
    font-semibold
    transition-all
    duration-300
    px-6 
    py-3
    rounded-xl

    /* Exact Soft Lavender from your image */
    bg-[#c562f3]
    
    /* Subtle inner border for edge lighting */
    border border-white/20

    /* NEOMORPHISM: Light shadow top-left, Dark shadow bottom-right */
    shadow-[4px_4px_10px_rgba(88,60,200,0.7),-4px_-4px_10px_rgba(255,255,255,0.35)]

    /* Hover State: Expands the light/shadow to look like it's lifting */
    hover:shadow-[6px_6px_14px_rgba(88,60,200,0.8),-6px_-6px_14px_rgba(255,255,255,0.45)]
    hover:-translate-y-[1px]

    /* Active State: True Neomorphic press (shadows go inside) */
    active:shadow-[inset_5px_5px_10px_rgba(88,60,200,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3)]
    active:translate-y-[2px]
  ">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                className="
      hero-btn
      flex
      items-center
      gap-2
      text-[#111827]
      font-semibold
      transition-all
      duration-300
      
      /* Ultra-Realistic Soft Lavender Styling */
      bg-gradient-to-b 
      from-[#F9F8FC] 
      to-[#E8E4F2]
      border 
      border-white/80
      shadow-[0_12px_24px_rgba(124,58,237,0.15),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-3px_4px_rgba(124,58,237,0.1)]
      
      /* Hover State: Enhanced light and lift */
      hover:shadow-[0_16px_32px_rgba(124,58,237,0.2),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(124,58,237,0.15)]
      hover:-translate-y-[1px]
      
      /* Active State: Realistic physical press down */
      active:shadow-[inset_0_4px_8px_rgba(124,58,237,0.2),inset_0_-2px_4px_rgba(255,255,255,0.6)]
      active:translate-y-[2px]
    ">
                <PlayCircle className="w-5 h-5 text-[#4F46E5]" />
                Watch Success Stories
              </button>
            </div>
          </div>

          {/* ══ RIGHT COLUMN: Hero Image ══ */}
          <div className="w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0 relative">
            {/* Wrapper container: Keeps absolute floating elements tethered to the main image */}
            <div className="relative w-full max-w-[620px] sm:max-w-md lg:max-w-lg xl:max-w-[800px] mt-25 mr-35">
              {/* Main Dashboard Image */}
              <img
                src="/assets/hero.png"
                alt="Academy Dashboard Presentation"
                className="w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] relative z-10"
                loading="lazy"
              />

              {/* ══ LEFT SIDE ICONS ══ */}
              {/* Python */}
              <div className="absolute top-[12%] -left-[2%] md:-left-[10%] w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_5s_ease-in-out_infinite_0.2s]">
                <img
                  src="/assets/icons/python.png"
                  alt="Python"
                  className="w-6 h-6 md:w-10 md:h-10 object-contain"
                />
              </div>

              {/* React */}
              <div className="absolute top-[30%] -left-[5%] md:-left-[12%] w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s]">
                <img
                  src="/assets/icons/react.png"
                  alt="React"
                  className="w-5 h-5 md:w-8 md:h-8 object-contain"
                />
              </div>

              {/* Tensor */}
              <div className="absolute top-[45%] -left-[5%] md:-left-[12%] w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s]">
                <img
                  src="/assets/icons/tensor.png"
                  alt="Tensor"
                  className="w-5 h-5 md:w-8 md:h-8 object-contain"
                />
              </div>

              {/* Cloud */}
              <div className="absolute top-[75%] -left-[5%] md:-left-[12%] w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s]">
                <img
                  src="/assets/icons/cloud.png"
                  alt="Cloud"
                  className="w-5 h-5 md:w-8 md:h-8 object-contain"
                />
              </div>

              {/* ══ RIGHT SIDE ICONS ══ */}
              {/* AWS */}
              <div className="absolute top-[5%] -right-[2%] md:-right-[8%] w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_6.5s_ease-in-out_infinite_0.8s]">
                <img
                  src="/assets/icons/aws.png"
                  alt="AWS"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>

              {/* Docker */}
              <div className="absolute top-[32%] -right-[6%] md:-right-[15%] w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_5.5s_ease-in-out_infinite_2.1s]">
                <img
                  src="/assets/icons/docker.png"
                  alt="Docker"
                  className="w-7 h-7 md:w-10 md:h-10 object-contain"
                />
              </div>

              {/* React */}
              <div className="absolute top-[62%] -right-[8%] md:-right-[18%] w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_6s_ease-in-out_infinite_1.2s]">
                <img
                  src="/assets/icons/kubernets.png"
                  alt="React"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>

              {/* Git */}
              <div className="absolute bottom-[8%] -right-[4%] md:-right-[10%] w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_4.8s_ease-in-out_infinite_0.5s]">
                <img
                  src="/assets/icons/git.png"
                  alt="Git"
                  className="w-5 h-5 md:w-7 md:h-7 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind requires the keyframes to be defined somewhere for arbitrary animations to work smoothly without altering your tailwind.config.js */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `,
        }}
      />
    </section>
  );
}

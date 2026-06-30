"use client";

import React from "react";
import { ArrowRight, PlayCircle, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F7FF] flex items-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0 font-sans">
      {/* ── Light Theme Ambient Glows ── */}
      <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[40rem] h-[40rem] bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ───────────────────────── Main Container ───────────────────────── */}
      <div className="w-full  relative z-10">
        {/* ───────────────────────── Hero Grid ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-12 gap-8 xl:gap-10 min-h-[88vh]">
          {/* ═════════════════════ LEFT CONTENT ═════════════════════ */}
          <div
              className="
                flex
                flex-col
                justify-center

                items-center
                lg:items-start

                text-center
                lg:text-left

                w-full

                max-w-none

                lg:pr-8

                lg:-ml-20
              "
            >
            {/* Badge */}

            <div
              className="
            hero-badge

            inline-flex
            items-center
            gap-2

            px-5
            py-3

            rounded-full

            bg-white

            border

            border-white/80

            shadow-[0_12px_40px_rgba(31,41,55,.08)]

            mb-8
        ">
              <Rocket className="w-4 h-4 text-amber-500" />

              <span>1000+ Students Already Transformed</span>
            </div>

            {/* Heading */}

            <h1
              className="
            hero-title

            max-w-[760px]

            text-[#111827]
        ">
              Become a
              <br />
              Job-Ready
              <br />
              <span
                className="
                bg-gradient-to-r
                from-[#4F46E5]
                to-[#7C3AED]

                bg-clip-text

                text-transparent

                whitespace-nowrap
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
              Learn Python, AI, DevOps & React through real-world projects and
              expert mentorship. Build production-grade projects, master
              industry tools, and get placed in top product companies within
              months.
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

                bg-gradient-to-r

                from-[#4F46E5]

                to-[#7C3AED]

                text-white

                font-semibold

                shadow-xl

                hover:scale-[1.03]

                duration-300
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

                bg-white

                border

                border-white

                shadow-[0_10px_30px_rgba(0,0,0,.08)]

                text-[#111827]

                font-semibold

                hover:shadow-xl

                duration-300
            ">
                <PlayCircle className="w-5 h-5 text-[#4F46E5]" />
                Watch Success Stories
              </button>
            </div>
          </div>

          {/* ══ RIGHT COLUMN: Hero Image ══ */}
          <div className="w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0 relative">
            <img
              src="/assets/hero3.png"
              alt="Academy Dashboard Presentation"
              /* The max widths below control exactly how large the image gets on desktop to ensure it aligns perfectly with the text height */
              className="w-full max-w-[520px] sm:max-w-md lg:max-w-lg xl:max-w-[1200px] h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              loading="lazy"
            />
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

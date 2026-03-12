"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  CloudCog,
  Cpu,
  Clock,
  ArrowRight,
  Zap,
  Brain,
} from "lucide-react";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  price: string;
  badge?: string;
}

export default function Courses() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  const courses: Course[] = [
    {
      id: 1,
      title: "Python Full Stack Development",
      description:
        "Build production-grade applications using Python, Django, FastAPI and AI integration.",
      icon: <Code2 className="w-6 h-6" />,
      duration: "12 Weeks",
      price: "₹10,000",
      badge: "Most Popular",
    },
    {
      id: 2,
      title: "DevOps Engineering",
      description:
        "Master Docker, Kubernetes, CI/CD pipelines and AWS Cloud deployment.",
      icon: <CloudCog className="w-6 h-6" />,
      duration: "16 Weeks",
      price: "₹10,000",
      badge: "High Demand",
    },
    {
      id: 3,
      title: "React Development",
      description:
        "Build scalable frontend applications using React, Next.js and TypeScript.",
      icon: <Cpu className="w-6 h-6" />,
      duration: "10 Weeks",
      price: "₹10,000",
      badge: "Trending",
    },
  ];

  return (

    <section
      ref={ref}
      id="courses"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >

      {/* Nebula background glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          top-0 left-0
          w-[500px]
          h-[500px]
          bg-blue-600/10
          rounded-full
          blur-[10px]
        "/>

        <div className="
          absolute
          bottom-0 right-0
          w-[500px]
          h-[500px]
          bg-indigo-600/10
          rounded-full
          blur-[10px]
        "/>

      </div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >

          {/* Badge */}
          <div className="
            inline-flex items-center gap-3
            px-5 py-2
            rounded-full
            bg-blue-50
            border border-blue-100
            mb-6
          ">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              ArivuOn Academy Programs
            </span>
          </div>

          {/* Heading */}
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold
            text-gray-900
            mb-6
          ">
            Industry-Focused

            <span className="
              block
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              bg-clip-text
              text-transparent
            ">
              Tech Programs
            </span>

          </h2>

          {/* Description */}
          <p className="
            text-gray-600
            text-base sm:text-lg
            max-w-2xl mx-auto
          ">
            Master real-world technologies with expert mentorship,
            production projects and career-focused learning.
          </p>

        </div>


        {/* Courses grid */}
        <div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6 sm:gap-8 lg:gap-10
">

          {courses.map((course, index) => (

            <div
              key={course.id}
              className="
group
relative
overflow-hidden

rounded-2xl

bg-white/80
backdrop-blur-xl

border border-[#E6ECFF]

p-6 sm:p-7 lg:p-8

transition-all duration-500 ease-out

hover:-translate-y-3
hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]

will-change-transform
"
            >

              {/* Quantum glow background */}
              <div className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-opacity duration-700
">

                <div className="
absolute
-top-20
-left-20
w-40
h-40
bg-blue-500/20
rounded-full
blur-3xl
animate-pulse
"/>

                <div className="
absolute
-bottom-20
-right-20
w-40
h-40
bg-indigo-500/20
rounded-full
blur-3xl
animate-pulse
"/>

              </div>


              {/* Animated gradient border */}
              <div className="
absolute inset-0
rounded-2xl
opacity-0
group-hover:opacity-100
transition duration-700
pointer-events-none
">

                <div className="
absolute inset-0
rounded-2xl
border
border-blue-400/40
animate-pulse
"/>

              </div>


              {/* Badge */}
              {course.badge && (

                <div className="
absolute
top-4 right-4
z-20

px-3 py-1

text-xs font-semibold

bg-gradient-to-r
from-blue-600
to-indigo-600

text-white

rounded-full

shadow-md

animate-fade-in
">

                  {course.badge}

                </div>

              )}


              {/* Icon */}
              <div className="
relative z-10

w-14 h-14 sm:w-16 sm:h-16

flex items-center justify-center

rounded-xl

bg-gradient-to-br
from-blue-50
to-indigo-50

text-blue-600

mb-5

transition-all duration-500

group-hover:scale-110
group-hover:rotate-3

shadow-sm
group-hover:shadow-md
">

                <div className="animate-float-slow">

                  {course.icon}

                </div>

              </div>


              {/* Title */}
              <h3 className="
relative z-10

text-xl sm:text-2xl

font-bold

text-gray-900

mb-3

transition-all duration-300

group-hover:text-blue-600
">

                {course.title}

              </h3>


              {/* Description */}
              <p className="
relative z-10

text-gray-600

text-sm sm:text-base

mb-6

leading-relaxed
">

                {course.description}

              </p>


              {/* Details */}
              <div className="
relative z-10

flex items-center justify-between

mb-7

text-sm
">

                <div className="
flex items-center gap-2

text-gray-500
">

                  <Clock className="w-4 h-4" />

                  <span className="font-medium">
                    {course.duration}
                  </span>

                </div>

                <div className="
text-base

font-bold

bg-gradient-to-r
from-blue-600
to-indigo-600

bg-clip-text
text-transparent
">

                  {course.price}

                </div>

              </div>


              {/* CTA */}
              <Link
                href="/contact"
                className="
relative z-10

flex items-center justify-center gap-2

py-3.5

rounded-xl

font-semibold

text-white

bg-gradient-to-r
from-blue-600
to-indigo-600

transition-all duration-300

hover:scale-[1.05]
hover:shadow-lg

active:scale-[0.98]
"
              >

                Enroll Now

                <ArrowRight className="
w-4 h-4

transition-transform duration-300

group-hover:translate-x-1
"/>

              </Link>


              {/* subtle neural dots */}
              <div className="
absolute inset-0
pointer-events-none
opacity-0
group-hover:opacity-100
transition duration-700
">

                <div className="
absolute
top-6 left-6
w-1.5 h-1.5
bg-blue-400
rounded-full
animate-ping
"/>

                <div className="
absolute
bottom-8 right-10
w-1.5 h-1.5
bg-indigo-400
rounded-full
animate-ping
delay-300
"/>

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
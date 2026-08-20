"use client";

import {
  Star,
  Quote,
  Award,
  TrendingUp,
  Brain,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  salaryIncrease: string;
  placementTime: string;
  course: string;
  videoUrl?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Python Developer",
      company: "Google",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "Crack Leap Academy transformed my career completely. The Python course was incredibly comprehensive - from Django to FastAPI to real ML projects. Within 3 months of completing the course, I received offers from top tech companies.",
      rating: 5,
      salaryIncrease: "180%",
      placementTime: "3 months",
      course: "Python Full Stack",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "DevOps Engineer",
      company: "Amazon Web Services",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "The DevOps program at Crack Leap Academy is top-notch. The hands-on labs with Kubernetes, AWS, and CI/CD pipelines prepared me perfectly for real-world scenarios. My mentor helped me land my dream role with a massive salary hike.",
      rating: 5,
      salaryIncrease: "220%",
      placementTime: "2 months",
      course: "DevOps Engineering",
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Frontend Lead",
      company: "Microsoft",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "I came from a non-tech background, but Crack Leap Academy made the transition smooth. The React course covered everything from fundamentals to advanced state architecture. Today, I lead a team building cutting-edge web applications.",
      rating: 5,
      salaryIncrease: "250%",
      placementTime: "4 months",
      course: "React Development",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-[#F8F9FE] relative overflow-hidden text-slate-800">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F4F5FA] border border-white/80 rounded-full px-4 py-2 mb-4 shadow-[3px_3px_8px_#dcdde3,-3px_-3px_8px_#ffffff]">
            <Brain className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-xs sm:text-sm font-bold text-[#8B5CF6]">
              Real Student Outcomes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Loved by Learners, <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
              Hired by Industry Leaders
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Discover how students from non-tech and beginner backgrounds transformed into high-earning software professionals.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#F4F5FA] p-6 rounded-2xl border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] text-center">
            <div className="text-3xl font-extrabold text-[#8B5CF6] mb-2">5,000+</div>
            <div className="text-sm font-medium text-slate-600">Career Transformations</div>
          </div>
          <div className="bg-[#F4F5FA] p-6 rounded-2xl border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] text-center">
            <div className="text-3xl font-extrabold text-[#8B5CF6] mb-2">2.5x</div>
            <div className="text-sm font-medium text-slate-600">Average Salary Hike</div>
          </div>
          <div className="bg-[#F4F5FA] p-6 rounded-2xl border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] text-center">
            <div className="text-3xl font-extrabold text-[#8B5CF6] mb-2">4.9/5</div>
            <div className="text-sm font-medium text-slate-600">Student Satisfaction</div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 sm:-translate-x-6 z-10 w-11 h-11 bg-[#F4F5FA] rounded-full shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] border border-white/80 flex items-center justify-center hover:text-[#8B5CF6] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 sm:translate-x-6 z-10 w-11 h-11 bg-[#F4F5FA] rounded-full shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] border border-white/80 flex items-center justify-center hover:text-[#8B5CF6] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Main Card */}
            <div className="bg-[#F4F5FA] rounded-3xl shadow-[10px_10px_24px_#dcdde3,-10px_-10px_24px_#ffffff] border border-white/80 overflow-hidden">
              <div className="grid lg:grid-cols-12">
                {/* Left Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 md:p-12">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-violet-100/60 px-3.5 py-1.5 rounded-full mb-6 text-xs font-bold text-violet-700">
                      <Brain className="w-4 h-4 text-[#8B5CF6]" />
                      <span>Verified Graduate</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                          <img
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                          ✓
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {activeTestimonial.name}
                        </h3>
                        <p className="text-[#8B5CF6] font-semibold text-sm sm:text-base">
                          {activeTestimonial.role}
                        </p>
                        <p className="text-slate-500 text-xs sm:text-sm font-medium">
                          {activeTestimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-6">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                      <span className="text-xs font-semibold text-slate-500 ml-2">
                        {activeTestimonial.rating}.0 / 5.0 Rating
                      </span>
                    </div>

                    <div className="relative mb-8">
                      <Quote className="absolute -top-3 -left-3 w-8 h-8 text-violet-200" />
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed pl-4 font-medium">
                        "{activeTestimonial.content}"
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="text-center p-3 sm:p-4 bg-white/70 rounded-2xl border border-white/80 shadow-sm">
                        <div className="text-xs text-slate-500 mb-1 font-medium">
                          Program
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900">
                          {activeTestimonial.course}
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm">
                        <div className="text-xs text-emerald-700 mb-1 font-medium">
                          Salary Hike
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-emerald-800">
                          {activeTestimonial.salaryIncrease}
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-violet-50 rounded-2xl border border-violet-100 shadow-sm">
                        <div className="text-xs text-violet-700 mb-1 font-medium">
                          Placement
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-violet-800">
                          {activeTestimonial.placementTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#F4F5FA] to-[#edeef8] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-200/60 flex flex-col justify-between">
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-5">
                      Career Progression Journey
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-[#8B5CF6] shadow-sm">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900">
                            Course Enrollment & Live Labs
                          </div>
                          <div className="text-xs text-slate-500">
                            Hands-on code execution from day 1
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-[#8B5CF6] shadow-sm">
                          <Brain className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900">
                            Production Capstone Building
                          </div>
                          <div className="text-xs text-slate-500">
                            Real architecture and cloud deployment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <Link
                      href="/courses"
                      className="block w-full py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-bold rounded-2xl text-center shadow-[4px_6px_16px_rgba(139,92,246,0.35)] hover:shadow-[6px_10px_22px_rgba(139,92,246,0.45)] hover:-translate-y-0.5 transition-all text-sm"
                    >
                      Apply Now for Next Batch
                    </Link>
                    <Link
                      href="/contact"
                      className="block w-full py-3.5 bg-[#F4F5FA] border border-white/80 text-slate-800 font-bold rounded-2xl text-center shadow-[3px_3px_7px_#dcdde3,-3px_-3px_7px_#ffffff] hover:text-[#8B5CF6] hover:-translate-y-0.5 transition-all text-sm"
                    >
                      Book Free Career Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] w-8 shadow-sm"
                    : "bg-[#d1d3dc] w-2.5"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-slate-200/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
              <Award className="w-10 h-10 text-[#8B5CF6] mx-auto mb-3" />
              <div className="text-2xl font-extrabold text-slate-900">4.9 / 5.0</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Average Graduate Rating</div>
            </div>
            
            <div className="text-center p-6 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
              <TrendingUp className="w-10 h-10 text-[#8B5CF6] mx-auto mb-3" />
              <div className="text-2xl font-extrabold text-slate-900">2.5x</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Average Salary Hike</div>
            </div>
            
            <div className="text-center p-6 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
              <Brain className="w-10 h-10 text-[#8B5CF6] mx-auto mb-3" />
              <div className="text-2xl font-extrabold text-slate-900">100%</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Hands-on Project Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

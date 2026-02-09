"use client";

import {
  Star,
  Quote,
  Award,
  TrendingUp,
  Zap,
  Brain,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  ExternalLink,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
        "Vira Academy transformed my career completely. The Python course was incredibly comprehensive - from Django to FastAPI to real ML projects. Within 3 months of completing the course, I received offers from 5 companies including Google.",
      rating: 5,
      salaryIncrease: "180%",
      placementTime: "3 months",
      course: "Python Full Stack",
      videoUrl: "#",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "DevOps Engineer",
      company: "Amazon Web Services",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "The DevOps program at Vira Academy is top-notch. The hands-on labs with Kubernetes, AWS, and CI/CD pipelines prepared me perfectly for real-world scenarios. My mentor helped me land my dream job at AWS with a massive salary hike.",
      rating: 5,
      salaryIncrease: "220%",
      placementTime: "2 months",
      course: "DevOps Engineering",
      videoUrl: "#",
      socialLinks: {
        linkedin: "#",
        portfolio: "#",
      },
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Frontend Lead",
      company: "Microsoft",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "I came from a non-tech background, but Vira Academy made the transition smooth. The React course covered everything from basics to advanced concepts. Today, I lead a team at Microsoft building cutting-edge React applications.",
      rating: 5,
      salaryIncrease: "250%",
      placementTime: "4 months",
      course: "React Development",
      videoUrl: "#",
      socialLinks: {
        linkedin: "#",
        github: "#",
        portfolio: "#",
      },
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Full Stack Developer",
      company: "TCS Digital",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "The 1:1 mentorship at Vira Academy was game-changing. My mentor helped me build a portfolio that stood out. I went from ₹6 LPA to ₹18 LPA in just 6 months. The placement team was incredibly supportive throughout.",
      rating: 5,
      salaryIncrease: "200%",
      placementTime: "6 months",
      course: "Python Full Stack",
      socialLinks: {
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Neha Reddy",
      role: "Cloud Engineer",
      company: "Infosys",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "As a working professional, the flexible schedule was crucial. The weekend batches and recorded sessions helped me upskill without leaving my job. The certification opened doors to better opportunities.",
      rating: 5,
      salaryIncrease: "150%",
      placementTime: "5 months",
      course: "DevOps Engineering",
      socialLinks: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 6,
      name: "Arun Kumar",
      role: "Product Manager",
      company: "Wipro",
      image:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Arun&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9",
      content:
        "The React program helped me transition from a designer to a developer. The project-based learning approach gave me confidence to build real applications. Vira Academy truly cares about student success.",
      rating: 5,
      salaryIncrease: "170%",
      placementTime: "3 months",
      course: "React Development",
      videoUrl: "#",
      socialLinks: {
        linkedin: "#",
        portfolio: "#",
      },
    },
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setAutoPlay(false);
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated Quote Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FF7A1E 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="section-padding relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm px-6 py-3 rounded-2xl border border-orange-200/50 mb-6">
            <TrendingUp className="w-5 h-5 text-[#FF7A1E]" />
            {/* <span className="text-sm font-semibold text-gray-900">
              Career Transformations
            </span> */}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Vira Academy
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our alumni who transformed their careers and achieved
            their dream jobs through Vira Academy's industry-focused training
            programs.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#FF7A1E] mb-2">5,000+</div>
            <div className="text-sm text-gray-600">Career Transformations</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#FF7A1E] mb-2">2.5x</div>
            <div className="text-sm text-gray-600">Average Salary Hike</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-[#FF7A1E] mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Student Satisfaction</div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:border-[#FF7A1E] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center hover:border-[#FF7A1E] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Testimonial Content */}
                <div className="p-8 md:p-12">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-2 rounded-full mb-6">
                      <Brain className="w-4 h-4 text-[#FF7A1E]" />
                      <span className="text-sm font-semibold text-gray-900">
                        Vira Academy Alumni
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          ✓
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {activeTestimonial.name}
                        </h3>
                        <p className="text-[#FF7A1E] font-semibold">
                          {activeTestimonial.role}
                        </p>
                        <p className="text-gray-600">
                          {activeTestimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#FF9A3E] text-[#FF9A3E]"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {activeTestimonial.rating}/5 Rating
                      </span>
                    </div>

                    <div className="relative mb-8">
                      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-orange-100" />
                      <p className="text-lg text-gray-700 leading-relaxed pl-4">
                        "{activeTestimonial.content}"
                      </p>
                    </div>

                    {/* Course & Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">
                          Course Taken
                        </div>
                        <div className="font-bold text-gray-900">
                          {activeTestimonial.course}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">
                          Salary Increase
                        </div>
                        <div className="font-bold text-green-600">
                          {activeTestimonial.salaryIncrease}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">
                          Time to Placement
                        </div>
                        <div className="font-bold text-blue-600">
                          {activeTestimonial.placementTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Success Metrics & CTA */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 border-l border-gray-200">
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">
                        Success Journey
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-[#FF7A1E]" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Course Enrollment
                            </div>
                            <div className="text-sm text-gray-600">
                              Joined Vira Academy
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <Brain className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Skill Development
                            </div>
                            <div className="text-sm text-gray-600">
                              Mastered industry skills
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto">
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3">
                          Start Your Success Story
                        </h5>
                        <p className="text-sm text-gray-600 mb-4">
                          Join thousands of successful graduates who transformed
                          their careers with Vira Academy.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <a
                          href="/contact"
                          className="block w-full py-3.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl text-center hover:shadow-lg transition-shadow"
                        >
                          Apply Now for Next Batch
                        </a>
                        <a
                          href="/contact"
                          className="block w-full py-3.5 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
                        >
                          Book Free Career Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] w-10"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
       

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Trusted by Students Worldwide
            </h4>
            <p className="text-gray-600">
              Join our community of successful tech professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <Award className="w-12 h-12 text-[#FF7A1E] mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <TrendingUp className="w-12 h-12 text-[#FF7A1E] mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">2.5x</div>
              <div className="text-sm text-gray-600">Average Salary Hike</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <Brain className="w-12 h-12 text-[#FF7A1E] mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">5,000+</div>
              {/* <div className="text-sm text-gray-600">
                Career Transformations
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

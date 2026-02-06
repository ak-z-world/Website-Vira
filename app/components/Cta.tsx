"use client";

import {
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Users,
  Brain,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Cta = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const [seatsLeft, setSeatsLeft] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A1E]/5 via-white to-[#FF9A3E]/5"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#FF7A1E]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tr from-[#FF9A3E]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FF7A1E 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm px-6 py-3 rounded-2xl border border-orange-200/50 mb-8">
                  <Brain className="w-5 h-5 text-[#FF7A1E]" />
                  <span className="text-sm font-semibold text-gray-900">
                    Limited Time Opportunity
                  </span>
                  <span className="px-2 py-1 bg-[#FF7A1E] text-white text-xs font-bold rounded-full">
                    20% Scholarship
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Start Your Tech Journey
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent animate-gradient">
                    At Vira Academy
                  </span>
                </h2>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                  Join thousands of successful graduates who transformed their
                  careers with industry-focused training, hands-on projects, and
                  guaranteed placement support.
                </p>
              </div>

              

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl p-8 mb-12 border border-gray-200/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Next Batch Starts In
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>
                        Limited seats available. Enroll before timer runs out!
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex flex-col items-center justify-center text-white">
                          <div className="text-2xl font-bold">
                            {value.toString().padStart(2, "0")}
                          </div>
                          <div className="text-xs uppercase">{unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Selection & CTA */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Course Options */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Select Your Program
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Python Full Stack",
                        duration: "12 Weeks",
                        price: "₹35,000",
                        seats: 8,
                        badge: "Most Popular",
                      },
                      {
                        title: "DevOps Engineering",
                        duration: "16 Weeks",
                        price: "₹55,000",
                        seats: 6,
                        badge: "High Demand",
                      },
                      {
                        title: "React Development",
                        duration: "10 Weeks",
                        price: "₹35,000",
                        seats: 10,
                        badge: "Trending",
                      },
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-[#FF7A1E] transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                            <div className="text-[#FF7A1E]">
                              {index === 0 && <Brain className="w-6 h-6" />}
                              {index === 1 && <Zap className="w-6 h-6" />}
                              {index === 2 && <Sparkles className="w-6 h-6" />}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-900">
                                {course.title}
                              </h4>
                              <span className="px-2 py-1 bg-orange-100 text-[#FF7A1E] text-xs font-bold rounded-full">
                                {course.badge}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>{course.duration}</span>
                              <span>•</span>
                              <span>{course.seats} seats left</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {course.price}
                          </div>
                          <div className="text-sm text-gray-600 line-through opacity-0 group-hover:opacity-100 transition-opacity">
                            ₹
                            {parseInt(
                              course.price.replace("₹", "").replace(",", ""),
                            ) * 1.25}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Enrollment Benefits
                    </h3>
                    <div className="space-y-3">
                      {[
                        "20% Scholarship on early enrollment",
                        "Free career consultation session",
                        "Lifetime access to course updates",
                        "1:1 mentorship with industry experts",
                        "100% placement assistance",
                        "Industry-recognized certification",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="group relative flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-200/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span>Enroll Now - Get 20% Off</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <Clock className="w-5 h-5" />
                      Book Free Demo Class
                    </Link>

                    <div className="text-center text-sm text-gray-300 pt-4">
                      <p className="mb-2">
                        <span className="font-medium">
                          Limited seats available:
                        </span>{" "}
                        <span className="font-bold text-white">
                          {seatsLeft}/50 seats left
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Need help choosing?</span>{" "}
                        <a
                          href="tel:+919677377316"
                          className="underline hover:text-white"
                        >
                          Call Vira Counselor: +91 96773 77316
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="px-8 md:px-12 py-8 bg-gradient-to-r from-orange-50 to-orange-100/50 border-t border-orange-200/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    
                    <div className="text-sm text-gray-600">
                      Get job-ready with our comprehensive career services
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF7A1E] text-[#FF7A1E] font-semibold rounded-xl hover:bg-orange-50 transition-colors"
                  >
                    Explore All Programs
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Contact Admissions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium">
                <span className="w-20 h-px bg-gray-300"></span>
                Trusted by students from 50+ companies
                <span className="w-20 h-px bg-gray-300"></span>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro"].map(
                (company, idx) => (
                  <div
                    key={idx}
                    className="h-16 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:border-[#FF7A1E] transition-colors group"
                  >
                    <div className="text-lg font-bold text-gray-700 group-hover:text-[#FF7A1E] transition-colors">
                      {company}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

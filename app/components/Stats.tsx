"use client";

import {
  Users,
  Award,
  Briefcase,
  Star,
  Target,
  Globe,
  Zap,
  TrendingUp,
  Brain,
  Rocket,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatItem {
  id: number;
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  color: string;
  gradient: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const Stats = () => {
  const [countStarted, setCountStarted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !countStarted) {
      setCountStarted(true);
    }
  }, [inView, countStarted]);

  const statsData: StatItem[] = [
    {
      id: 1,
      icon: <Users className="w-7 h-7" />,
      value: 5000,
      suffix: "+",
      label: "Career Transformations",
      description: "Students trained & placed",
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
    },
   
    {
      id: 2,
      icon: <Award className="w-7 h-7" />,
      value: 1200,
      suffix: "+",
      label: "Projects Completed",
      description: "Real-world applications built",
      color: "text-orange-600",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 3,
      icon: <Star className="w-7 h-7" />,
      value: 50,
      suffix: "+",
      label: "Industry Mentors",
      description: "Expert trainers",
      color: "text-purple-600",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const features: FeatureItem[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry-Focused Curriculum",
      description:
        "Designed with input from tech leaders at Google, Amazon & Microsoft",
      color: "text-[#FF7A1E]",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Hands-on Learning",
      description: "Build 10+ real projects with code reviews and feedback",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Vira Academy certifications valued worldwide",
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/30"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #FF7A1E 1px, transparent 1px),
                           linear-gradient(to bottom, #FF7A1E 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 backdrop-blur-sm px-6 py-3 rounded-2xl border border-orange-200/50 mb-6">
            <TrendingUp className="w-5 h-5 text-[#FF7A1E]" />
            <span className="text-sm font-semibold text-gray-900">
              Vira Academy Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
              Vira Academy
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join India's most trusted tech training academy with a proven track
            record of transforming careers through industry-focused education
            and hands-on learning.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-[#FF7A1E]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF7A1E] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF7A1E] transition-colors opacity-0 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Success Story */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Success Guarantee</h4>
                  <p className="text-gray-300">
                    98% of our graduates land jobs within 3 months of course
                    completion, with an average salary hike of 150%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF7A1E]/20 transition-colors duration-500 pointer-events-none"></div>

                  {/* Icon with Gradient Background */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>

                  {/* Animated Counter */}
                  <div className="mb-2">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">
                      {countStarted ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          separator=","
                          suffix={stat.suffix || ""}
                          className={stat.color}
                        />
                      ) : (
                        <span className={stat.color}>0{stat.suffix || ""}</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {stat.description}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-900">
                    {stat.label}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-1000 ease-out ${
                          countStarted ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <Award className="w-8 h-8 text-[#FF7A1E] mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  5-Star Rating
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">
                  Global Alumni
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200/50">
          <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-2xl p-8 md:p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-orange-100 mb-6">
                  Join the next batch starting March 15, 2026. Limited seats
                  available.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-sm">100% Placement Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-sm">1:1 Mentorship</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3.5 bg-white text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
                >
                  Apply Now
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-center hover:bg-white/10 transition-colors"
                >
                  Free Demo Class
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

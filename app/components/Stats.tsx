"use client";

import {
  Target,
  Brain,
  Globe,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Stats = () => {

  const features: FeatureItem[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry-Focused Curriculum",
      description:
        "Designed based on real-world industry requirements and modern tech stacks.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Hands-on Project Learning",
      description:
        "Build real production-level applications with mentor guidance.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Globally Recognized Certification",
      description:
        "ArivuOn certifications recognized by startups and global companies.",
    },
  ];

  return (
    <section className="relative pb-16 sm:pb-20 md:pb-24 lg:pb-30 bg-white overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/10 rounded-full blur-1xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/10 rounded-full blur-1xl"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-4">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              ArivuOn Academy Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">

            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ArivuOn Academy
            </span>

          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide industry-aligned training, hands-on experience, and mentorship
            to help you build a successful career in modern technology.
          </p>

        </div>


        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
              group
              relative
              bg-white
              border border-gray-200
              rounded-2xl
              p-6 sm:p-7
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              hover:border-blue-400
              "
            >

              {/* icon */}
              <div className="
              w-12 h-12
              flex items-center justify-center
              rounded-xl
              bg-blue-50
              text-blue-600
              mb-4
              group-hover:scale-110
              transition
              ">
                {feature.icon}
              </div>


              {/* title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {feature.title}
              </h3>


              {/* description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>


              {/* hover glow */}
              <div className="
              absolute inset-0
              rounded-2xl
              opacity-0 group-hover:opacity-100
              transition duration-500
              pointer-events-none
              border border-blue-400/20
              ">
              </div>

            </div>

          ))}

        </div>



        {/* CTA */}
        <div className="mt-14 sm:mt-16">

          <div className="
          bg-gradient-to-r from-blue-600 to-indigo-600
          rounded-2xl
          p-6 sm:p-8 md:p-10
          text-white
          ">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  Start Your Tech Career Today
                </h3>

                <p className="text-blue-100 text-sm sm:text-base">
                  Limited seats available. Join the upcoming ArivuOn batch.
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm">

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-300"/>
                    Placement Support
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-300"/>
                    Mentor Guidance
                  </div>

                </div>

              </div>


              {/* buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                <a
                  href="/contact"
                  className="
                  px-6 py-3
                  bg-white
                  text-blue-600
                  font-semibold
                  rounded-xl
                  text-center
                  hover:bg-blue-50
                  transition
                  "
                >
                  Apply Now
                </a>

                <a
                  href="/contact"
                  className="
                  px-6 py-3
                  border border-white
                  text-white
                  font-semibold
                  rounded-xl
                  text-center
                  hover:bg-white/10
                  transition
                  "
                >
                  Book Free Demo
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
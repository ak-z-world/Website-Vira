"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Users, Target, Award, Globe, Crown, Cpu, CheckCircle, 
  Sparkles, ArrowRight, ChevronRight, Zap, Rocket 
} from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mission',
      description: 'Empowering individuals with cutting-edge tech skills that transform careers and drive innovation.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Industry-leading education with uncompromising quality standards.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Global network of learners, mentors, and industry leaders.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuous curriculum evolution matching industry trends.',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Industry-First Approach',
      desc: 'Our curriculum is designed with industry experts and updated with real-world trends.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Learn by Building',
      desc: 'Hands-on projects and case studies are at the core of our teaching methodology.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Future Ready Learning',
      desc: 'We equip learners with the skills, mindset, and confidence to thrive in tomorrow\'s tech world.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans text-slate-800 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:flex lg:items-center lg:justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] mb-8 border border-white">
            <Crown className="w-4 h-4 text-[#6366F1]" />
            <span className="text-sm font-semibold text-[#6366F1]">Premium Tech Education</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">Crack Leap</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            We're redefining tech education through immersive, industry-aligned programs that bridge the gap between theoretical knowledge and real-world application.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-2xl font-bold flex items-center gap-2 shadow-[4px_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[6px_10px_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-1">
              Start Your Learning Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold flex items-center gap-2 shadow-[6px_6px_16px_#e6e9f5,-6px_-6px_16px_#ffffff] hover:shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] transition-all duration-300">
              Explore Programs
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </motion.div>

        {/* Hero 3D Asset Placeholder (REPLACED WITH ACTUAL IMAGE) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 mt-26 lg:mt-0 relative flex justify-end"
        >
          {/* Main container preserving aspect ratio and size */}
          <div className="w-full max-w-[550px] aspect-square relative">
            
            {/* The Actual Image - Using fill to fit the container */}
            <Image
              src="/assets/icons/image9.png" // Your provided asset path
              alt="Crack Leap Hero 3D Illustration"
              fill // Makes image fill the parent relative container
              className="object-cover" // Ensures the entire image is visible within the aspect ratio
              priority // Tells Next.js to load this image early (as it is in the hero)
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Defines responsive image sizes
            />

          </div>
        </motion.div>
      </section>

      {/* Evolution Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-[#6366F1] rounded-full"></div>
            <div className="w-1 h-4 bg-[#8B5CF6] rounded-full opacity-50"></div>
          </div>
          <span className="text-sm font-bold text-[#6366F1] uppercase tracking-wider">Our Evolution</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 leading-tight">
              Redefining Tech Education for a Better Tomorrow
            </h2>
            
            <div className="space-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[6px_6px_16px_#e6e9f5,-6px_-6px_16px_#ffffff] text-[#6366F1] shrink-0 group-hover:shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-[40px] p-4 shadow-[12px_12px_36px_#e6e9f5,-12px_-12px_36px_#ffffff] border border-white relative overflow-hidden">
              <div className="relative w-full h-[450px] bg-[#F8F9FE] rounded-[32px] overflow-hidden shadow-inner flex items-center justify-center">
                {/* 3D Arrow Illustration */}
                <Image 
                  src="/assets/icons/image19.png" 
                  alt="Upward Growth Arrow" 
                  fill
                  className="object-cover object-center scale-110"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-12 left-10 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-[8px_8px_24px_rgba(0,0,0,0.05)] border border-white/50 z-10 w-64">
                <p className="text-sm font-semibold text-slate-600 mb-4">Empowering Learners Worldwide</p>
                <p className="text-4xl font-extrabold text-[#6366F1] mb-2">10K+</p>
                <p className="text-sm text-slate-500 mb-4">Learners Trusted Us</p>
                <div className="flex items-center">
                  {/* Mock Avatars */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 ${i !== 1 ? '-ml-3' : ''} shadow-sm overflow-hidden`}>
                       <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#F8F9FE] flex items-center justify-center -ml-3 shadow-[inset_2px_2px_4px_#e6e9f5] z-10">
                    <span className="text-xs font-bold text-[#6366F1]">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-[#6366F1] rounded-full"></div>
            <div className="w-1 h-4 bg-[#8B5CF6] rounded-full opacity-50"></div>
          </div>
          <span className="text-sm font-bold text-[#6366F1] uppercase tracking-wider">Our Principles</span>
        </div>
        
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
          The Core of Everything We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[32px] p-8 shadow-[8px_8px_24px_#e6e9f5,-8px_-8px_24px_#ffffff] border border-white hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F8F9FE] flex items-center justify-center shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] text-[#6366F1] mb-8">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative bg-white rounded-[40px] shadow-[12px_12px_36px_#e6e9f5,-12px_-12px_36px_#ffffff] border border-white overflow-hidden flex flex-col md:flex-row items-center min-h-[350px]">
          
          {/* Background Portal Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/icons/image8.png" 
              alt="Portal" 
              fill
              className="object-cover md:object-right object-center opacity-80"
            />
          </div>

          <div className="relative z-10 p-12 md:w-3/5">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ready to Transform <br/> Your Career?
            </h2>
            <p className="text-slate-600 mb-10 max-w-md">
              Join thousands of learners who have accelerated their careers with ArivuOn Academy's industry-leading programs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 bg-[#6366F1] text-white rounded-xl font-bold flex items-center gap-2 shadow-[4px_6px_16px_rgba(99,102,241,0.3)] hover:bg-[#4f46e5] transition-colors">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3.5 bg-white text-slate-700 rounded-xl font-bold flex items-center gap-2 shadow-[4px_4px_12px_#e6e9f5,-4px_-4px_12px_#ffffff] hover:shadow-[inset_2px_2px_6px_#e6e9f5,inset_-2px_-2px_6px_#ffffff] transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Benefits Bar */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-white rounded-[32px] p-6 shadow-[8px_8px_24px_#e6e9f5,-8px_-8px_24px_#ffffff] border border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitItem icon={<Cpu />} title="Practical Learning" desc="Real-world projects & case studies" />
            <BenefitItem icon={<Award />} title="Certified Programs" desc="Industry-recognized certifications" />
            <BenefitItem icon={<Users />} title="Expert Mentorship" desc="Learn from industry professionals" />
            <BenefitItem icon={<CheckCircle />} title="Dedicated Support" desc="Guidance at every step" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for the bottom benefits row
function BenefitItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#F8F9FE] shadow-[inset_2px_2px_6px_#e6e9f5,inset_-2px_-2px_6px_#ffffff] border border-transparent hover:border-white transition-colors">
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] text-[#6366F1] shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-500 font-medium mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
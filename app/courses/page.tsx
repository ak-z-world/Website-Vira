"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Filter,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Updated course data to support multiple brand logos per card
  const allCourses = [
    {
      id: 0,
      title: 'Python AI AWS DevOps Engineering (Combo Pack)',
      description: 'Master Python programming, AI basics, Django backend development, CI/CD pipelines, Docker, and AWS cloud deployment with real-world production projects.',
      logos: ['/assets/icons/python.png', '/assets/icons/aws.png'],
      duration: '8 Weeks',
      level: 'Beginner to Advanced',
      fee: '₹10,000',
      features: [
        'Python Programming',
        'AI Fundamentals',
        'Django Backend Development',
        'Docker & AWS',
        'CI/CD Pipelines'
      ],
      popular: true,
    },
    {
      id: 1,
      title: 'Python & Django Development',
      description: 'Master Python, Django, REST APIs, and Database Design with hands-on projects.',
      logos: ['/assets/icons/python.png', '/assets/icons/django.png'],
      duration: '6 Weeks',
      level: 'Beginner Friendly',
      fee: '₹10,000',
      features: [
        'Django',
        'REST APIs',
        'Database Design',
        'Real Projects',
        'Placement Support'
      ],
      popular: true,
    },
    {
      id: 2,
      title: 'DevOps Engineering',
      description: 'Learn CI/CD, Docker, AWS, and infrastructure automation from industry experts.',
      logos: ['/assets/icons/aws.png'], // Add your devops/infinity loop icon here
      duration: '6 Weeks',
      level: 'Intermediate',
      fee: '₹10,000',
      features: [
        'Docker',
        'AWS Cloud',
        'CI/CD Pipeline',
        'Terraform',
        'Cloud Security'
      ],
      popular: true,
    },
    {
      id: 3,
      title: 'React & Modern Frontend',
      description: 'Build interactive UIs with React, Next.js, TypeScript, and state management.',
      logos: ['/assets/icons/react.png'],
      duration: '6 Weeks',
      level: 'Beginner Friendly',
      fee: '₹10,000',
      features: [
        'React & Next.js',
        'TypeScript',
        'State Management',
        'Testing',
        'Deployment'
      ],
      popular: false,
    },
    {
      id: 4,
      title: 'Data Science & AI Engineering',
      description: 'Master Data Science, Machine Learning, NLP, and Computer Vision with real-world projects.',
      logos: ['/assets/icons/tensor.png'],
      duration: '6 Weeks',
      level: 'Intermediate',
      fee: '₹10,000',
      features: [
        'Python for Data Science',
        'NumPy & Pandas',
        'Machine Learning',
        'NLP & Computer Vision'
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans text-slate-800 pb-20">

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-7 py-2 rounded-full bg-white shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] mb-6">
            <Sparkles className="w-4 h-4 text-[#a438d6]" />
            <span className="text-sm font-semibold text-[#a357c7]">Industry-Focused Programs</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c562f3] to-[#bd6ce2]">Courses</span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Choose from our comprehensive range of industry-aligned programs designed to launch your tech career at ArivuOn Academy.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-2xl shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] text-[#c562f3]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-800">15K+</p>
                <p className="text-sm text-slate-500 font-medium">Happy Learners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-2xl shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] text-[#c562f3]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-800">25+</p>
                <p className="text-sm text-slate-500 font-medium">Expert Mentors</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Hero Asset */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-end">
          <div className="relative w-[600px] h-[500px]">
            {/* Replace with your actual 3D asset path */}
            <Image
              src="/assets/icons/image22.png"
              alt="Crack Leap Learning Platform"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Area - White Neumorphic Container */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-[10px_10px_30px_#e6e9f5,-10px_-10px_30px_#ffffff] p-8 lg:p-12">

          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                All <span className="text-[#c562f3]">Programs</span>
              </h2>
              <p className="text-slate-500">Explore our most popular and career-transforming programs.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F8F9FE] rounded-2xl py-3 pl-12 pr-4 outline-none border border-transparent focus:border-[#c562f3]/30 transition-all shadow-inner text-sm font-medium"
                />
              </div>
              <button className="p-3 bg-white rounded-2xl shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] text-slate-600 hover:text-[#c562f3] transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allCourses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase())).map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[32px] p-8 shadow-[8px_8px_24px_#e6e9f5,-8px_-8px_24px_#ffffff] border border-white flex flex-col h-full relative overflow-hidden group hover:shadow-[12px_12px_32px_#dce0f0,-12px_-12px_32px_#ffffff] transition-all duration-300"
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-[#8B5CF6] to-[#c562f3] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Logos */}
                <div className="flex gap-4 mb-6">
                  {course.logos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-16 md:w-15 md:h-15 rounded-2xl bg-[#F8F9FE] flex items-center justify-center p-1.5 shadow-inner"
                    >
                      <img
                        src={logo}
                        alt="Technology icon"
                        className="w-full h-full object-contain scale-155 hover:scale-150 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{course.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow">{course.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#c562f3] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Metadata */}
                <div className="flex items-center gap-6 text-xs font-semibold text-slate-500 mb-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#F8F9FE] flex items-center justify-center shadow-inner">⏱</span>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#F8F9FE] flex items-center justify-center shadow-inner">📈</span>
                    {course.level}
                  </div>
                </div>

                {/* Footer / Price */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Course Fee</p>
                    <p className="text-2xl font-bold text-[#c562f3]">{course.fee}</p>
                  </div>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] text-[#c562f3] group-hover:bg-[#c562f3] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
            <BenefitCard icon={<Briefcase />} title="Hands-on Projects" desc="Real-world projects for practical learning" />
            <BenefitCard icon={<Users />} title="Expert Mentorship" desc="Learn from industry experts & mentors" />
            <BenefitCard icon={<Award />} title="Certification" desc="Industry-recognized completion certificates" />
            <BenefitCard icon={<ShieldCheck />} title="Career Support" desc="Resume, Interview & Placement assistance" />
          </div>

        </div>
      </section>
    </div>
  );
}

// Sub-component for the benefits row
function BenefitCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F9FE] border border-white shadow-[inset_2px_2px_6px_#e6e9f5,inset_-2px_-2px_6px_#ffffff]">
      <div className="p-3 bg-white rounded-xl shadow-[2px_2px_8px_#e6e9f5,-2px_-2px_8px_#ffffff] text-[#c562f3] shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
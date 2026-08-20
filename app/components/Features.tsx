import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Industry Expert Mentorship',
      description: 'Learn from professionals working in top tech companies.',
      icon: (
        <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Hands-on Projects',
      description: 'Build real-world projects and boost your portfolio.',
      icon: (
        <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Placement Assistance',
      description: 'Resume & mock interviews with top recruiters.',
      icon: (
        <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Flexible Learning',
      description: 'Live classes, recordings and continuous doubt support.',
      icon: (
        <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Certification Program',
      description: 'Earn globally recognized, verified certificates.',
      icon: (
        <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="w-full bg-[#F4F5FA] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center">
        
        {/* Centered Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-12 sm:mb-14 text-center tracking-tight">
          Why Choose Crack Leap Academy?
        </h2>

        {/* Responsive Grid */}
        <div className="w-full max-w-[90rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#F4F5FA] rounded-[2rem] p-6 lg:p-7 flex flex-col items-start shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_20px_#d0d2dc,-10px_-10px_20px_#ffffff] h-full"
            >
              <div className="flex flex-row xl:flex-col items-center xl:items-start gap-4 mb-4 xl:mb-5">
                {/* Recessed Icon Container */}
                <div className="w-14 h-14 rounded-2xl flex-shrink-0 bg-[#F4F5FA] flex items-center justify-center shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff] border border-white/40">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-slate-800 leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-500 font-medium leading-relaxed mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full bg-[#F4F5FA] pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sans flex justify-center">
        <div className="relative w-full max-w-[90rem] rounded-[2.5rem] bg-gradient-to-r from-[#8B5CF6] via-[#9F75FF] to-[#C4B5FD] overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 lg:p-12 shadow-[10px_10px_30px_rgba(139,92,246,0.25)] border border-white/30">
          
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-3/5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Take the Leap Towards Your Dream Tech Career
            </h2>
            
            <p className="text-white/95 text-sm sm:text-base lg:text-lg mb-8 max-w-md font-medium leading-relaxed">
              Join our free career consultation session and speak with industry mentors.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F8F9FE] text-[#8B5CF6] px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-[0px_8px_20px_rgba(0,0,0,0.1),inset_2px_2px_4px_#ffffff] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_12px_25px_rgba(0,0,0,0.15)] group"
            >
              Contact Us
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Right Content (3D Illustration) */}
          <div className="relative w-full md:w-2/5 h-52 sm:h-64 md:h-72 mt-8 md:mt-0 z-10 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[420px]">
              <Image
                src="/assets/icons/cta.png" 
                alt="Tech Career Illustration"
                fill
                className="object-contain object-center md:object-right drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
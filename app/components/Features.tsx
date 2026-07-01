import React from 'react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Industry Expert Mentorship',
      description: 'Learn from professionals working in top tech companies.',
      // User/Mentor Icon
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Hands-on Projects',
      description: 'Build real-world projects and boost your portfolio.',
      // Code/Tools Icon
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Placement Assistance',
      description: 'Resume, mock interviews & job placement support.',
      // Rocket/Briefcase Icon
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Flexible Learning',
      description: 'Live classes, recordings and doubt support.',
      // Cloud/Sync Icon
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Certification Program',
      description: 'Earn globally recognized certificates.',
      // Certificate/Award Icon
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
    <div className="w-full bg-[#f0f4f8] py-16 px-4 md:px-8 lg:px-12 font-sans flex flex-col items-center">
      
      {/* Centered Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-12 text-center drop-shadow-sm">
        Why Choose Crack Leap Academy?
      </h2>

      {/* Responsive Grid 
          - 1 column on standard mobile
          - 2 columns on large mobile/small tablets
          - 3 columns on standard laptops
          - 5 columns on large desktop screens to match Figma
      */}
      <div className="w-full max-w-[100rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
        
        {features.map((feature) => (
          <div
            key={feature.id}
            // Extruded Neomorphic Card Base
            className="bg-[#f0f4f8] rounded-[2rem] p-6 lg:p-8 flex flex-col items-start shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] transition-transform duration-300 hover:-translate-y-2 h-full"
          >
            
            <div className="flex flex-row xl:flex-col items-center xl:items-start gap-4 mb-4 xl:mb-6">
              
              {/* Recessed Icon Container (Inset Shadow) */}
              <div className="w-14 h-14 rounded-2xl flex-shrink-0 bg-[#f0f4f8] flex items-center justify-center shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-[#2d2a5d] leading-tight">
                {feature.title}
              </h3>
              
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed mt-auto">
              {feature.description}
            </p>

          </div>
        ))}

      </div>
    </div>
    <div className="w-full bg-[#f0f4f8] py-4 px-4 md:px-8 lg:px-8 font-sans flex justify-center">
      
      {/* Banner Container - Added explicit height (260px-280px) and separated horizontal/vertical padding to squeeze it vertically */}
      <div className="relative w-full max-w-[90rem] h-auto md:h-[280px] lg:h-[260px] rounded-[2.5rem] bg-gradient-to-r from-[#8B75FF] via-[#A892FF] to-[#D5C6FF] overflow-hidden flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-8 lg:px-12 shadow-[10px_10px_30px_rgba(139,117,255,0.2)]">
        
        {/* Left Content (Text & Button) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-[50%] lg:w-3/5">
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.25] mb-4">
            Take the Leap Towards Your<br className="hidden" /> Dream Tech Career
          </h2>
          
          <p className="text-white/95 text-sm md:text-base lg:text-lg mb-8 max-w-md font-medium">
            Join our free webinar and talk to our experts.
          </p>
          
          {/* Action Button - Updated to "Contact Us" */}
          <button className="flex items-center justify-center gap-2 bg-[#f8f9fc] text-[#8B75FF] px-8 py-3.5 rounded-2xl font-bold text-sm md:text-base shadow-[0px_8px_20px_rgba(0,0,0,0.1),inset_2px_2px_4px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_25px_rgba(0,0,0,0.15)] group">
            Contact Us
            {/* Arrow Icon */}
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>

        </div>

        {/* Right Content (3D Illustration) */}
        <div className="relative w-full md:w-[45%] lg:w-2/5 h-64 md:h-80 lg:h-96 mt-10 md:mt-0 z-10 flex items-center justify-center">
          
          {/* UPDATE THIS PATH:
            Change the src to match the exact file name and location of your image 
            (e.g., '/assets/images/cta-illustration.png')
          */}
          <div className="relative w-full h-full max-w-[500px]">
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
    </div>
    </>
  );
}
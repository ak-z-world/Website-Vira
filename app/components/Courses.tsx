import React from 'react';
import Image from 'next/image';

export default function TopPrograms() {
  const courses = [
    {
      id: 1,
      title: 'Python & Django',
      duration: '6 Weeks',
      projects: '20+ Projects',
      // Mapped to the laptop illustration based on your expected design
      image: '/assets/icons/image10.png', 
      placement: 'Placement Support',
      package: '₹12 LPA Avg Package',
      tech: [
        { name: 'Python', path: '/assets/icons/python.png' },
        { name: 'Django', path: '/assets/icons/django.png' },
      ],
    },
    {
      id: 2,
      title: 'DevOps Engineering',
      duration: '6 Weeks',
      projects: '25+ Projects',
      // Mapped to the server/cloud illustration
      image: '/assets/icons/image11.png', 
      placement: 'Placement Support',
      package: '₹16 LPA Avg Package',
      tech: [
        { name: 'AWS', path: '/assets/icons/aws.png' },
        { name: 'Docker', path: '/assets/icons/docker.png' },
        { name: 'Kubernetes', path: '/assets/icons/kubernets.png' },
      ],
    },
    {
      id: 3,
      title: 'React Development',
      duration: '6 Weeks',
      projects: '15+ Projects',
      // Mapped to the UI/browser windows illustration
      image: '/assets/icons/image12.png', 
      placement: 'Placement Support',
      package: '₹10 LPA Avg Package',
      tech: [
        { name: 'React', path: '/assets/icons/react.png' },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F4F5FA] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center justify-center">
      
      {/* Main Container */}
      <div className="w-full max-w-[90rem] relative bg-[#F4F5FA] p-6 sm:p-8 lg:p-10 rounded-[28px] md:rounded-[3rem] shadow-[10px_10px_24px_#dcdde3,-10px_-10px_24px_#ffffff] border border-white/60">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 sm:mb-10 ml-2 tracking-tight">
          Top Programs
        </h2>

        {/* Grid Layout: Responsive adjustments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          
          {courses.map((course) => (
            <div
              key={course.id}
              // Neomorphic card body
              className="bg-[#F4F5FA] rounded-[2rem] p-3.5 sm:p-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_20px_#d0d2dc,-10px_-10px_20px_#ffffff]"
            >
              
              {/* Left Side: Soft Lavender Image Area matching the target image */}
              <div className="w-full sm:w-[45%] h-48 sm:h-auto min-h-[160px] rounded-[1.5rem] bg-gradient-to-br from-[#e8eafc] to-[#f4f5fa] relative flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/60">
                <div className="relative w-full h-full p-3 md:p-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-contain drop-shadow-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Right Side: Course Content */}
              <div className="flex flex-col justify-center w-full sm:w-[55%] py-2 pr-2">
                
                <h3 className="text-[17px] font-bold text-slate-800 mb-3 text-center sm:text-left leading-tight">
                  {course.title}
                </h3>

                {/* Tech Stack Icons */}
                <div className="flex justify-center sm:justify-start gap-2 mb-3">
                  {course.tech.map((techItem, index) => (
                    <div 
                      key={index} 
                      className="w-10 h-10 rounded-xl bg-[#F4F5FA] flex items-center justify-center shadow-[3px_3px_6px_#dcdde3,-3px_-3px_6px_#ffffff] border border-white/60"
                      title={techItem.name}
                    >
                      <div className="relative w-6 h-6">
                        <Image 
                          src={techItem.path} 
                          alt={techItem.name} 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duration & Projects Text */}
                <div className="flex justify-center sm:justify-start items-center gap-2 text-[12px] sm:text-[13px] text-slate-500 font-semibold mb-4">
                  <span>{course.duration}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>{course.projects}</span>
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-auto">
                  
                  {/* Placement Support Badge */}
                  <div className="flex items-center gap-1.5 bg-[#F4F5FA] px-2.5 py-1.5 rounded-full shadow-[3px_3px_6px_#dcdde3,-3px_-3px_6px_#ffffff] border border-white/60">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-[10px] font-bold text-slate-600 whitespace-nowrap">
                      {course.placement}
                    </span>
                  </div>

                  {/* Salary Package Badge */}
                  <div className="flex items-center gap-1.5 bg-[#F4F5FA] px-2.5 py-1.5 rounded-full shadow-[3px_3px_6px_#dcdde3,-3px_-3px_6px_#ffffff] border border-white/60">
                    <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-[10px] font-bold text-slate-600 whitespace-nowrap">
                      {course.package}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
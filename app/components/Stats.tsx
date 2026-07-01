import React from 'react';
import Image from 'next/image';

export default function TransformationJourney() {
  const steps = [
    {
      id: 1,
      title: 'Student',
      subtitle: 'Start Your Journey',
      image: '/assets/icons/image13.png',
      footerText: '₹0 LPA',
    },
    {
      id: 2,
      title: 'Learner',
      subtitle: 'Learn In-Demand Skills',
      image: '/assets/icons/image14.png',
    },
    {
      id: 3,
      title: 'Builder',
      subtitle: 'Build Real Projects',
      image: '/assets/icons/image15.png',
    },
    {
      id: 4,
      title: 'Developer',
      subtitle: 'Work on Live Projects',
      image: '/assets/icons/image16.png',
    },
    {
      id: 5,
      title: 'Software Engineer',
      subtitle: 'Get Hired & Grow',
      image: '/assets/icons/image17.png',
    },
  ];

  // Total steps used for generating the progress dots
  const totalSteps = steps.length;

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4 md:p-10 font-sans flex flex-col items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-[90rem] relative bg-[#f0f4f8] p-6 lg:p-10 rounded-3xl md:rounded-[3rem] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 md:mb-12 ml-2 md:ml-4 text-center md:text-left">
          Your Transformation Journey
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 w-full items-stretch z-0">
          
          {/* Dashed Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-400 -z-10 transform -translate-y-4"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 bg-[#f0f4f8] rounded-2xl md:rounded-3xl p-4 lg:p-6 flex flex-row md:flex-col justify-between items-center md:items-stretch shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] transition-transform duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
            >
              
              {/* Header */}
              <div className="flex items-center md:items-start gap-3 lg:gap-4 md:mb-4 w-full md:w-auto">
                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[#f0f4f8] flex items-center justify-center text-gray-700 font-bold text-lg shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]">
                  {step.id}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="hidden md:block w-full h-32 lg:h-40 relative flex-grow my-2">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                  priority={step.id === 1}
                />
              </div>

              {/* Footer */}
              <div className="mt-0 md:mt-4 flex items-center justify-end md:justify-center min-h-[24px] w-full md:w-auto">
                {step.footerText ? (
                  <span className="text-sm font-semibold text-gray-400 whitespace-nowrap">
                    {step.footerText}
                  </span>
                ) : (
                  /* Dynamic Step-by-Step Progress Indicator */
                  <div className="flex gap-1.5 items-center">
                    {Array.from({ length: totalSteps }).map((_, index) => {
                      const stepNumber = index + 1;
                      const isActive = stepNumber <= step.id;
                      
                      return (
                        <div
                          key={stepNumber}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'w-4 md:w-6 bg-[#6366f1] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]' // Active step (Indigo)
                              : 'w-1.5 md:w-2 bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5)]' // Inactive step (Neomorphic inset)
                          }`}
                        />
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
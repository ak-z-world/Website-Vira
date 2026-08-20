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

  const totalSteps = steps.length;

  return (
    <section className="w-full bg-[#F4F5FA] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-[90rem] relative bg-[#F4F5FA] p-6 sm:p-8 lg:p-10 rounded-[28px] md:rounded-[3rem] shadow-[10px_10px_24px_#dcdde3,-10px_-10px_24px_#ffffff] border border-white/60">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 sm:mb-12 ml-2 md:ml-4 text-center md:text-left tracking-tight">
          Your Transformation Journey
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 w-full items-stretch z-0">
          
          {/* Dashed Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full border-t-2 border-dashed border-slate-300 -z-10 transform -translate-y-4"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 bg-[#F4F5FA] rounded-2xl md:rounded-3xl p-5 lg:p-6 flex flex-col justify-between items-stretch shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_20px_#d0d2dc,-10px_-10px_20px_#ffffff]"
            >
              
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[#F4F5FA] flex items-center justify-center text-[#8B5CF6] font-bold text-base shadow-[inset_2px_2px_5px_#d1d3dc,inset_-2px_-2px_5px_#ffffff] border border-white/40">
                  {step.id}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base lg:text-lg font-bold text-slate-800 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* Step Image — visible responsively across all screen sizes */}
              <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 relative my-2 flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain drop-shadow-sm"
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                  priority={step.id === 1}
                />
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-center min-h-[24px] w-full pt-3 border-t border-slate-200/60">
                {step.footerText ? (
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                              ? 'w-4 md:w-5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] shadow-[0_1px_3px_rgba(139,92,246,0.4)]'
                              : 'w-1.5 md:w-2 bg-[#d1d3dc] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]'
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
    </section>
  );
}
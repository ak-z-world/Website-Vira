// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, PlayCircle, Rocket } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       className="
//     relative
//     w-full

//     min-h-[100svh]
//     lg:min-h-screen

//     bg-[#F5F7FF]

//     flex
//     items-center

//     overflow-hidden

//     px-4
//     sm:px-6
//     md:px-8
//     lg:px-10
//     xl:px-12
//     2xl:px-16

//     pt-24
//     sm:pt-28
//     md:pt-32
//     lg:pt-0

//     pb-12
//     sm:pb-16
//     md:pb-20
//     lg:pb-0

//     font-sans
//   "
//     >
//       {/* ── Light Theme Ambient Glows ── */}
//       <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />

//       {/* Replaced with the new Lavender color: #9362F3 */}
//       <div className="absolute bottom-0 right-[-5%] w-[40rem] h-[40rem] bg-[#9362F3]/10 rounded-full blur-[100px] pointer-events-none" />
//       {/* ───────────────────────── Main Container ───────────────────────── */}
//       <div className="w-full  relative z-10">
//         {/* ───────────────────────── Hero Grid ───────────────────────── */}
//         <div
//           className="
//     grid
//     grid-cols-1
//     lg:grid-cols-2
//     items-center
//     max-w-[1400px]
//     mx-auto
//     w-full
//     gap-12
//     lg:gap-14
//     xl:gap-16
//     px-4
//     sm:px-6
//     md:px-8
//     lg:px-10
//     xl:px-12
//     py-10       /* Base padding for mobile */
//     lg:py-35    /* Replaces the min-h. Adjust to py-12 or py-20 as needed */
//   "
//         >
//           {/* ═════════════════════ LEFT CONTENT ═════════════════════ */}
//           <div
//             className="flex
//     flex-col
//     justify-center

//     w-full
//     max-w-xl
//     sm:max-w-2xl
//     lg:max-w-none

//     mx-auto
//     lg:mx-0

//     items-center
//     lg:items-start

//     text-center
//     lg:text-left

//     px-4
//     sm:px-6
//     md:px-8
//     lg:px-0

//     py-8
//     sm:py-10
//     md:py-12
//     lg:py-0

//     gap-5
//     sm:gap-6
//     md:gap-7

//     lg:pr-8
//     xl:pr-10
//     2xl:pr-16 "
//           >
//             {/* Badge */}

//             <div
//               className="
//     hero-badge
//     inline-flex
//     items-center
//     justify-center
//     sm:justify-start

//     gap-2
//     sm:gap-3

//     px-3
//     sm:px-4
//     md:px-5

//     py-2
//     sm:py-2.5

//     rounded-full

//     bg-white
//     border
//     border-gray-200

//     shadow-[0_12px_40px_rgba(31,41,55,.08)]

//     mb-6
//     sm:mb-8

//     max-w-full
//     w-fit
//   "
//             >
//               <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-500 shrink-0" />

//               <span
//                 className="
//       text-xs
//       sm:text-sm
//       md:text-base

//       font-medium
//       text-gray-700

//       leading-tight

//       text-center
//       sm:text-left

//       break-words
//     "
//               >
//                 1000+ Students Already Transformed
//               </span>
//             </div>

//             {/* Heading */}

//             <h1
//               className="
//     hero-title
//     text-[#111827]
//     w-full
//     font-bold

//     /* 📱 Mobile First (Base) */
//     text-5xl
//     leading-[1.1]
//     tracking-[-0.02em]

//     /* 📱 Small Tablets */
//     sm:text-6xl
//     sm:leading-none
//     sm:tracking-[-0.03em]

//     /* 💻 Laptops (Restoring your original tight spacing) */
//     md:text-7xl
//     md:leading-[0.92]
//     md:tracking-[-0.055em]

//     /* 🖥️ Large Desktops */
//     lg:text-[4.5rem]
//     xl:text-[5.5rem]
//   "
//             >
//               <span className="block">Become a</span>
//               <span className="block">Job Ready</span>
//               <span
//                 className="
//       block
//       bg-gradient-to-r
//       from-[#C88CFB]
//       to-[#9362F3]
//       bg-clip-text
//       text-transparent
//       text-[0.88em]
      
//       /* Mobile spacing for the gradient text */
//       leading-[1.3]
//       md:leading-[1.5]
//       pb-2
//     "
//               >
//                 Software Engineer
//               </span>
//             </h1>

//             {/* Paragraph */}

//             <p
//               className="
//             hero-subtitle
//             max-w-[640px]
//             mt-8
//         "
//             >
//               Learn Python, AI, DevOps & React through <br /> real-world
//               projects and expert mentorship.
//             </p>

//             {/* Buttons */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 sm:flex-row
//                 items-stretch
//                 sm:items-center
//                 lg:items-start
//                 w-full
//                 sm:w-auto
//                 gap-4
//                 sm:gap-5
//                 mt-8
//                 sm:mt-10
//               "
//             >
//               <Link
//                 href="/courses"
//                 className="
//                   hero-btn
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   text-white
//                   font-bold
//                   transition-all
//                   duration-300
//                   px-7
//                   py-3.5
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-[#8B5CF6]
//                   to-[#6366F1]
//                   border-t
//                   border-white/30
//                   shadow-[4px_6px_18px_rgba(139,92,246,0.35)]
//                   hover:shadow-[6px_10px_24px_rgba(139,92,246,0.45)]
//                   hover:-translate-y-0.5
//                   active:scale-98
//                 "
//               >
//                 Start Learning
//                 <ArrowRight className="w-5 h-5" />
//               </Link>

//               <Link
//                 href="/about"
//                 className="
//                   hero-btn
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   text-slate-800
//                   font-bold
//                   transition-all
//                   duration-300
//                   px-7
//                   py-3.5
//                   rounded-2xl
//                   bg-[#F4F5FA]
//                   border
//                   border-white/80
//                   shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]
//                   hover:shadow-[6px_6px_14px_#d0d2dc,-6px_-6px_14px_#ffffff]
//                   hover:text-[#8B5CF6]
//                   hover:-translate-y-0.5
//                   active:shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]
//                 "
//               >
//                 <PlayCircle className="w-5 h-5 text-[#8B5CF6]" />
//                 Explore Programs
//               </Link>
//             </div>
//           </div>

//           {/* ══ RIGHT COLUMN: Hero Image ══ */}
//           <div className="w-full flex justify-center lg:justify-end items-center mt-6 lg:mt-0 relative overflow-hidden sm:overflow-visible">
//             {/* Wrapper container: Keeps absolute floating elements tethered to the main image */}
//             <div className="relative w-full max-w-[620px] sm:max-w-md lg:max-w-lg xl:max-w-[760px] mt-0">
//               {/* Main Dashboard Image */}
//               <Image
//                 src="/assets/hero.png"
//                 alt="Academy Dashboard Presentation"
//                 width={800}
//                 height={550}
//                 priority
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
//                 className="w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] relative z-10"
//               />

//               {/* ══ LEFT SIDE ICONS ══ */}
//               {/* Python */}
//               <div className="hidden sm:flex absolute top-[12%] left-0 md:-left-[8%] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_5s_ease-in-out_infinite_0.2s]">
//                 <Image
//                   src="/assets/icons/python.png"
//                   alt="Python"
//                   width={40}
//                   height={40}
//                   className="w-6 h-6 md:w-10 md:h-10 object-contain"
//                 />
//               </div>

//               {/* React */}
//               <div className="hidden sm:flex absolute top-[30%] left-0 md:-left-[10%] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s]">
//                 <Image
//                   src="/assets/icons/react.png"
//                   alt="React"
//                   width={32}
//                   height={32}
//                   className="w-5 h-5 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Tensor */}
//               <div className="hidden sm:flex absolute top-[45%] left-0 md:-left-[10%] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s]">
//                 <Image
//                   src="/assets/icons/tensor.png"
//                   alt="Tensor"
//                   width={32}
//                   height={32}
//                   className="w-5 h-5 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Cloud */}
//               <div className="hidden sm:flex absolute top-[75%] left-0 md:-left-[10%] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s]">
//                 <Image
//                   src="/assets/icons/cloud.png"
//                   alt="Cloud"
//                   width={32}
//                   height={32}
//                   className="w-5 h-5 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* ══ RIGHT SIDE ICONS ══ */}
//               {/* AWS */}
//               <div className="hidden sm:flex absolute top-[5%] right-0 md:-right-[6%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_6.5s_ease-in-out_infinite_0.8s]">
//                 <Image
//                   src="/assets/icons/aws.png"
//                   alt="AWS"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Docker */}
//               <div className="hidden sm:flex absolute top-[32%] right-0 md:-right-[12%] w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_5.5s_ease-in-out_infinite_2.1s]">
//                 <Image
//                   src="/assets/icons/docker.png"
//                   alt="Docker"
//                   width={40}
//                   height={40}
//                   className="w-7 h-7 md:w-10 md:h-10 object-contain"
//                 />
//               </div>

//               {/* Kubernetes */}
//               <div className="hidden sm:flex absolute top-[62%] right-0 md:-right-[14%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_6s_ease-in-out_infinite_1.2s]">
//                 <Image
//                   src="/assets/icons/kubernets.png"
//                   alt="Kubernetes"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Git */}
//               <div className="hidden sm:flex absolute bottom-[8%] right-0 md:-right-[8%] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_4.8s_ease-in-out_infinite_0.5s]">
//                 <Image
//                   src="/assets/icons/git.png"
//                   alt="Git"
//                   width={28}
//                   height={28}
//                   className="w-5 h-5 md:w-7 md:h-7 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tailwind requires the keyframes to be defined somewhere for arbitrary animations to work smoothly without altering your tailwind.config.js */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }
//       `,
//         }}
//       />
//     </section>
//   );
// }




// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, PlayCircle, Rocket } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       className="
//     relative
//     w-full

//     min-h-[100svh]
//     lg:min-h-screen

//     bg-[#F5F7FF]

//     flex
//     items-center

//     overflow-hidden

//     px-4
//     sm:px-6
//     md:px-8
//     lg:px-10
//     xl:px-12
//     2xl:px-16

//     pt-24
//     sm:pt-28
//     md:pt-32
//     lg:pt-0

//     pb-12
//     sm:pb-16
//     md:pb-20
//     lg:pb-0

//     font-sans
//   "
//     >
//       {/* ── Light Theme Ambient Glows ── */}
//       <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />

//       {/* Replaced with the new Lavender color: #9362F3 */}
//       <div className="absolute bottom-0 right-[-5%] w-[40rem] h-[40rem] bg-[#9362F3]/10 rounded-full blur-[100px] pointer-events-none" />
//       {/* ───────────────────────── Main Container ───────────────────────── */}
//       <div className="w-full  relative z-10">
//         {/* ───────────────────────── Hero Grid ───────────────────────── */}
//         <div
//           className="
//    flex
//     items-center
//     mx-auto
//     w-full
//     gap-12
//     lg:gap-14
//     xl:gap-16
//     px-4
//     sm:px-6
//     md:px-8
   
//     py-10       /* Base padding for mobile */
//     lg:py-35    /* Replaces the min-h. Adjust to py-12 or py-20 as needed */
//   "
//         >
//           {/* ═════════════════════ LEFT CONTENT ═════════════════════ */}
//           <div
//             className="flex
//     flex-col
//     justify-center

//    w-[40%]

//     mx-auto
//     lg:mx-0

//     items-center
//     lg:items-start

//     text-center
//     lg:text-left

//     px-4
//     sm:px-6
//     md:px-8
//     lg:px-0

//     py-8
//     sm:py-10
//     md:py-12
//     lg:py-0

//     gap-5
//     sm:gap-6
//     md:gap-7

//     "
//           >
//             {/* Badge */}

//             <div
//               className="
//     hero-badge
//     inline-flex
//     items-center
//     justify-center
//     sm:justify-start

//     gap-2
//     sm:gap-3

//     px-3
//     sm:px-4
//     md:px-5

//     py-2
//     sm:py-2.5

//     rounded-full

//     bg-white
//     border
//     border-gray-200

//     shadow-[0_12px_40px_rgba(31,41,55,.08)]

//     mb-6
//     sm:mb-8

//     max-w-full
//     w-fit
//   "
//             >
//               <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-500 shrink-0" />

//               <span
//                 className="
//       text-xs
//       sm:text-sm
//       md:text-base

//       font-medium
//       text-gray-700

//       leading-tight

//       text-center
//       sm:text-left

//       break-words
//     "
//               >
//                 1000+ Students Already Transformed
//               </span>
//             </div>

//             {/* Heading */}

//             <h1
//               className="
//     hero-title
//     text-[#111827]
//     w-full
//     font-bold

//     /* 📱 Mobile First (Base) */
//     text-5xl
//     leading-[1.1]
//     tracking-[-0.02em]

//     /* 📱 Small Tablets */
//     sm:text-6xl
//     sm:leading-none
//     sm:tracking-[-0.03em]

//     /* 💻 Laptops (Restoring your original tight spacing) */
//     md:text-7xl
//     md:leading-[0.92]
//     md:tracking-[-0.055em]

//     /* 🖥️ Large Desktops */
//     lg:text-[4.5rem]
//     xl:text-[5.5rem]
//   "
//             >
//               <span className="block">Become a</span>
//               <span className="block">Job Ready</span>
//               <span
//                 className="
//       block
//       bg-gradient-to-r
//       from-[#C88CFB]
//       to-[#9362F3]
//       bg-clip-text
//       text-transparent
//       text-[0.88em]
      
//       /* Mobile spacing for the gradient text */
//       leading-[1.3]
//       md:leading-[1.5]
//       pb-2
//     "
//               >
//                 Software Engineer
//               </span>
//             </h1>

//             {/* Paragraph */}

//             <p
//               className="
//             hero-subtitle
//             max-w-[640px]
//             mt-8
//         "
//             >
//               Learn Python, AI, DevOps & React through <br /> real-world
//               projects and expert mentorship.
//             </p>

//             {/* Buttons */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 sm:flex-row
//                 items-stretch
//                 sm:items-center
//                 lg:items-start
//                 w-full
//                 sm:w-auto
//                 gap-4
//                 sm:gap-5
//                 mt-8
//                 sm:mt-10
//               "
//             >
//               <Link
//                 href="/courses"
//                 className="
//                   hero-btn
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   text-white
//                   font-bold
//                   transition-all
//                   duration-300
//                   px-7
//                   py-3.5
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-[#8B5CF6]
//                   to-[#6366F1]
//                   border-t
//                   border-white/30
//                   shadow-[4px_6px_18px_rgba(139,92,246,0.35)]
//                   hover:shadow-[6px_10px_24px_rgba(139,92,246,0.45)]
//                   hover:-translate-y-0.5
//                   active:scale-98
//                 "
//               >
//                 Start Learning
//                 <ArrowRight className="w-5 h-5" />
//               </Link>

//               <Link
//                 href="/about"
//                 className="
//                   hero-btn
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   text-slate-800
//                   font-bold
//                   transition-all
//                   duration-300
//                   px-7
//                   py-3.5
//                   rounded-2xl
//                   bg-[#F4F5FA]
//                   border
//                   border-white/80
//                   shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]
//                   hover:shadow-[6px_6px_14px_#d0d2dc,-6px_-6px_14px_#ffffff]
//                   hover:text-[#8B5CF6]
//                   hover:-translate-y-0.5
//                   active:shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]
//                 "
//               >
//                 <PlayCircle className="w-5 h-5 text-[#8B5CF6]" />
//                 Explore Programs
//               </Link>
//             </div>
//           </div>

//           {/* ══ RIGHT COLUMN: Hero Image ══ */}
//           <div className="w-[50%]  flex justify-center lg:justify-end items-center mt-6 lg:mt-0 relative overflow-hidden sm:overflow-visible">
//             {/* Wrapper container: Keeps absolute floating elements tethered to the main image */}
//             <div className="relative w-full max-w-[620px] sm:max-w-md lg:max-w-lg  mt-0">
//               {/* Main Dashboard Image */}
//               <Image
//                 src="/assets/hero.png"
//                 alt="Academy Dashboard Presentation"
//                 width={800}
//                 height={550}
//                 priority
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
//                 className="w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] relative z-10"
//               />

//               {/* ══ LEFT SIDE ICONS ══ */}
//               {/* Python */}
//               <div className="absolute top-[0%] left-0 md:-left-[8%] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_5s_ease-in-out_infinite_0.2s] -translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/python.png"
//                   alt="Python"
//                   width={40}
//                   height={40}
//                   className="w-6 h-6 md:w-10 md:h-10 object-contain"
//                 />
//               </div>

//               {/* React */}
//               <div className="absolute top-[30%] left-0 md:-left-[10%] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s] -translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/react.png"
//                   alt="React"
//                   width={32}
//                   height={32}
//                   className="w-5 h-5 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Tensor */}
//               <div className="absolute top-[55%] left-0 md:-left-[10%] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s] -translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/tensor.png"
//                   alt="Tensor"
//                   width={32}
//                   height={32}
//                   className="w-5 h-5 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Cloud */}
//               <div className="absolute top-[85%] left-0 md:-left-[10%] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_7s_ease-in-out_infinite_1.5s] -translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/cloud.png"
//                   alt="Cloud"
//                   width={32}
//                   height={32}
//                   className="w-5 h-5 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* ══ RIGHT SIDE ICONS ══ */}
//               {/* AWS */}
//               <div className="absolute top-[5%] right-0 md:-right-[6%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_6.5s_ease-in-out_infinite_0.8s] translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/aws.png"
//                   alt="AWS"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Docker */}
//               <div className="absolute top-[32%] right-0 md:-right-[12%] w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_5.5s_ease-in-out_infinite_2.1s] translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/docker.png"
//                   alt="Docker"
//                   width={40}
//                   height={40}
//                   className="w-7 h-7 md:w-10 md:h-10 object-contain"
//                 />
//               </div>

//               {/* Kubernetes */}
//               <div className="absolute top-[62%] right-0 md:-right-[14%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_6s_ease-in-out_infinite_1.2s] translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/kubernets.png"
//                   alt="Kubernetes"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 object-contain"
//                 />
//               </div>

//               {/* Git */}
//               <div className="absolute bottom-[8%] right-0 md:-right-[8%] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 z-20 animate-[float_4.8s_ease-in-out_infinite_0.5s] translate-x-1/2 -translate-y-1/2">
//                 <Image
//                   src="/assets/icons/git.png"
//                   alt="Git"
//                   width={28}
//                   height={28}
//                   className="w-5 h-5 md:w-7 md:h-7 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tailwind requires the keyframes to be defined somewhere for arbitrary animations to work smoothly without altering your tailwind.config.js */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }
//       `,
//         }}
//       />
//     </section>
//   );
// }




// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, PlayCircle, Rocket } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       className="
//         relative
//         w-full
//         min-h-[100svh]
//         lg:min-h-screen
//         bg-[#F5F7FF]
//         flex
//         items-center
//         overflow-hidden
//         px-4
//         sm:px-6
//         md:px-8
//         lg:px-10
//         xl:px-12
//         2xl:px-16
//         pt-24
//         sm:pt-28
//         md:pt-32
//         lg:pt-0
//         pb-12
//         sm:pb-16
//         md:pb-20
//         lg:pb-0
//         font-sans
//       "
//     >
//       {/* ── Light Theme Ambient Glows ── */}
//       <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />
//       <div className="absolute bottom-0 right-[-5%] w-[40rem] h-[40rem] bg-[#9362F3]/10 rounded-full blur-[100px] pointer-events-none" />

//       {/* ───────────────────────── Main Container ───────────────────────── */}
//       <div className="w-full relative z-10">
//         <div
//           className="
//             flex
//             flex-col
//             lg:flex-row
//             items-center
//             mx-auto
//             w-full
//             max-w-[1400px]
//             gap-12
//             lg:gap-14
//             xl:gap-16
//             px-4
//             sm:px-6
//             md:px-8
//             lg:px-10
//             xl:px-12
//             py-10
//             lg:py-35
//           "
//         >
//           {/* ═════════════════════ LEFT CONTENT ═════════════════════ */}
//           <div
//             className="
//               flex
//               flex-col
//               justify-center
//               w-full
//               lg:w-[45%]
//               items-center
//               lg:items-start
//               text-center
//               lg:text-left
//               gap-5
//               sm:gap-6
//               md:gap-7
//               z-20
//             "
//           >
//             {/* Badge */}
//             <div
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 sm:justify-start
//                 gap-2
//                 sm:gap-3
//                 px-3
//                 sm:px-4
//                 md:px-5
//                 py-2
//                 sm:py-2.5
//                 rounded-full
//                 bg-white
//                 border
//                 border-gray-200
//                 shadow-[0_12px_40px_rgba(31,41,55,.08)]
//                 mb-6
//                 sm:mb-8
//                 max-w-full
//                 w-fit
//               "
//             >
//               <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-500 shrink-0" />
//               <span
//                 className="
//                   text-xs
//                   sm:text-sm
//                   md:text-base
//                   font-medium
//                   text-gray-700
//                   leading-tight
//                   text-center
//                   sm:text-left
//                   break-words
//                 "
//               >
//                 1000+ Students Already Transformed
//               </span>
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 text-[#111827]
//                 w-full
//                 font-bold
//                 text-5xl
//                 leading-[1.1]
//                 tracking-[-0.02em]
//                 sm:text-6xl
//                 sm:leading-none
//                 sm:tracking-[-0.03em]
//                 md:text-7xl
//                 md:leading-[0.92]
//                 md:tracking-[-0.055em]
//                 lg:text-[4.5rem]
//                 xl:text-[5.5rem]
//               "
//             >
//               <span className="block">Become a</span>
//               <span className="block">Job Ready</span>
//               <span
//                 className="
//                   block
//                   bg-gradient-to-r
//                   from-[#C88CFB]
//                   to-[#9362F3]
//                   bg-clip-text
//                   text-transparent
//                   text-[0.88em]
//                   leading-[1.3]
//                   md:leading-[1.5]
//                   pb-2
//                 "
//               >
//                 Software Engineer
//               </span>
//             </h1>

//             {/* Paragraph */}
//             <p className="max-w-[640px] mt-8 text-lg text-gray-600 leading-relaxed">
//               Learn Python, AI, DevOps & React through <br /> real-world
//               projects and expert mentorship.
//             </p>

//             {/* Buttons */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 sm:flex-row
//                 items-stretch
//                 sm:items-center
//                 lg:items-start
//                 w-full
//                 sm:w-auto
//                 gap-4
//                 sm:gap-5
//                 mt-8
//                 sm:mt-10
//               "
//             >
//               <Link
//                 href="/courses"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   text-white
//                   font-bold
//                   transition-all
//                   duration-300
//                   px-7
//                   py-3.5
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-[#8B5CF6]
//                   to-[#6366F1]
//                   border-t
//                   border-white/30
//                   shadow-[4px_6px_18px_rgba(139,92,246,0.35)]
//                   hover:shadow-[6px_10px_24px_rgba(139,92,246,0.45)]
//                   hover:-translate-y-0.5
//                   active:scale-98
//                 "
//               >
//                 Start Learning
//                 <ArrowRight className="w-5 h-5" />
//               </Link>

//               <Link
//                 href="/about"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   text-slate-800
//                   font-bold
//                   transition-all
//                   duration-300
//                   px-7
//                   py-3.5
//                   rounded-2xl
//                   bg-[#F4F5FA]
//                   border
//                   border-white/80
//                   shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]
//                   hover:shadow-[6px_6px_14px_#d0d2dc,-6px_-6px_14px_#ffffff]
//                   hover:text-[#8B5CF6]
//                   hover:-translate-y-0.5
//                   active:shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]
//                 "
//               >
//                 <PlayCircle className="w-5 h-5 text-[#8B5CF6]" />
//                 Explore Programs
//               </Link>
//             </div>
//           </div>

//           {/* ══ RIGHT COLUMN: Hero Image with Circular Icon Layout ══ */}
//           <div className="w-full lg:w-[55%] flex justify-center items-center relative mt-12 lg:mt-0">
//             {/* The "Globe" Container - This keeps everything centered */}
//             <div className="relative w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] aspect-square flex items-center justify-center">
              
//               {/* ── BACKGROUND CIRCLE OF ICONS (Wikipedia Style) ── */}
//               <div className="absolute inset-0 z-0 pointer-events-none">
                
//                 {/* --- ROW 1: TOP --- */}
//                 <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_5s_ease-in-out_infinite_0.2s]">
//                   <Image src="/assets/icons/python.png" alt="Python" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
//                 </div>
//                 <div className="absolute top-[5%] left-[20%] -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_6s_ease-in-out_infinite_0.5s]">
//                   <Image src="/assets/icons/aws.png" alt="AWS" width={32} height={32} className="w-5 h-5 md:w-8 md:h-8 object-contain" />
//                 </div>
//                 <div className="absolute top-[5%] right-[20%] translate-x-1/2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_7s_ease-in-out_infinite_0.8s]">
//                   <Image src="/assets/icons/react.png" alt="React" width={32} height={32} className="w-5 h-5 md:w-8 md:h-8 object-contain" />
//                 </div>

//                 {/* --- ROW 2: UPPER SIDES --- */}
//                 <div className="absolute top-[25%] left-[2%] -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_5.5s_ease-in-out_infinite_1.2s]">
//                   <Image src="/assets/icons/docker.png" alt="Docker" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
//                 </div>
//                 <div className="absolute top-[25%] right-[2%] translate-x-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_6.5s_ease-in-out_infinite_1.5s]">
//                   <Image src="/assets/icons/tensor.png" alt="Tensor" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
//                 </div>

//                 {/* --- ROW 3: MIDDLE SIDES --- */}
//                 <div className="absolute top-1/2 left-[-2%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_4.8s_ease-in-out_infinite_0.5s]">
//                   <Image src="/assets/icons/cloud.png" alt="Cloud" width={32} height={32} className="w-5 h-5 md:w-8 md:h-8 object-contain" />
//                 </div>
//                 <div className="absolute top-1/2 right-[-2%] translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_5.5s_ease-in-out_infinite_2.1s]">
//                   <Image src="/assets/icons/kubernets.png" alt="Kubernetes" width={32} height={32} className="w-5 h-5 md:w-8 md:h-8 object-contain" />
//                 </div>

//                 {/* --- ROW 4: LOWER SIDES --- */}
//                 <div className="absolute top-[75%] left-[2%] -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_6s_ease-in-out_infinite_1.8s]">
//                   <Image src="/assets/icons/git.png" alt="Git" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
//                 </div>
//                 <div className="absolute top-[75%] right-[2%] translate-x-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_7.5s_ease-in-out_infinite_0.3s]">
//                   <Image src="/assets/icons/python.png" alt="Python" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
//                 </div>

//                 {/* --- ROW 5: BOTTOM --- */}
//                 <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_5s_ease-in-out_infinite_2.5s]">
//                   <Image src="/assets/icons/react.png" alt="React" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10 object-contain" />
//                 </div>
//                 <div className="absolute bottom-[5%] left-[20%] -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_6s_ease-in-out_infinite_0.7s]">
//                   <Image src="/assets/icons/docker.png" alt="Docker" width={32} height={32} className="w-5 h-5 md:w-8 md:h-8 object-contain" />
//                 </div>
//                 <div className="absolute bottom-[5%] right-[20%] translate-x-1/2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 animate-[float_7s_ease-in-out_infinite_1.1s]">
//                   <Image src="/assets/icons/aws.png" alt="AWS" width={32} height={32} className="w-5 h-5 md:w-8 md:h-8 object-contain" />
//                 </div>
//               </div>

//               {/* ── MAIN DASHBOARD IMAGE (On top of the icons) ── */}
//               <div className="relative z-10 w-full max-w-[85%] lg:max-w-[70%]">
//                 <Image
//                   src="/assets/hero.png"
//                   alt="Academy Dashboard Presentation"
//                   width={800}
//                   height={550}
//                   priority
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
//                   className="w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Animation Keyframes */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }
//       `,
//         }}
//       />
//     </section>
//   );
// }




















"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, Rocket } from "lucide-react";

// ── Icon data for the two concentric rings ──
// Outer ring: 12 icons, 30° apart
const outerRing = [
  { src: "/assets/icons/python.png", alt: "Python", angle: 0, size: "large" },
  { src: "/assets/icons/aws.png", alt: "AWS", angle: 30, size: "small" },
  { src: "/assets/icons/react.png", alt: "React", angle: 60, size: "medium" },
  { src: "/assets/icons/docker.png", alt: "Docker", angle: 90, size: "large" },
  { src: "/assets/icons/tensor.png", alt: "Tensor", angle: 120, size: "medium" },
  { src: "/assets/icons/cloud.png", alt: "Cloud", angle: 150, size: "small" },
  { src: "/assets/icons/kubernets.png", alt: "Kubernetes", angle: 180, size: "medium" },
  { src: "/assets/icons/git.png", alt: "Git", angle: 210, size: "small" },
  { src: "/assets/icons/python.png", alt: "Python", angle: 240, size: "large" },
  { src: "/assets/icons/react.png", alt: "React", angle: 270, size: "medium" },
  { src: "/assets/icons/docker.png", alt: "Docker", angle: 300, size: "large" },
  { src: "/assets/icons/aws.png", alt: "AWS", angle: 330, size: "small" },
];



// ── Helper to get size classes ──
const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22";
    case "medium":
      return "w-11 h-11 md:w-14 md:h-14 lg:w-17 lg:h-17";
    case "small":
      return "w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14";
    default:
      return "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20";
  }
};

const getImageSize = (size: string) => {
  switch (size) {
    case "large":
      return "w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11";
    case "medium":
      return "w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8";
    case "small":
      return "w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7";
    default:
      return "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10";
  }
};

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[100svh]
        lg:min-h-screen
        bg-[#F5F7FF]
        flex
        items-center
        overflow-hidden
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16
        pt-24
        sm:pt-28
        md:pt-32
        lg:pt-0
        pb-12
        sm:pb-16
        md:pb-20
        lg:pb-0
        font-sans
      "
    >
      {/* ── Light Theme Ambient Glows ── */}
      <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[40rem] h-[40rem] bg-[#9362F3]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ───────────────────────── Main Container ───────────────────────── */}
      <div className="w-full relative z-10">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            mx-auto
            w-full
            max-w-[1400px]
            gap-12
            lg:gap-14
            xl:gap-16
           
            pb-8

          pt-10
            lg:pt-35
          "
        >
          {/* ═════════════════════ LEFT CONTENT ═════════════════════ */}
          <div
            className="
              flex
              flex-col
              justify-center
              w-full
              lg:w-[45%]
              items-center
              lg:items-start
              text-center
              lg:text-left
              gap-5
              sm:gap-6
              md:gap-7
              z-20
            "
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                sm:justify-start
                gap-2
                sm:gap-3
                px-3
                sm:px-4
                md:px-5
                py-2
                sm:py-2.5
                rounded-full
                bg-white
                border
                border-gray-200
                shadow-[0_12px_40px_rgba(31,41,55,.08)]
                mb-6
                sm:mb-8
                max-w-full
                w-fit
              "
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-500 shrink-0" />
              <span
                className="
                  text-xs
                  sm:text-sm
                  font-medium
                  text-gray-700
                  leading-tight
                  text-center
                  sm:text-left
                  break-words
                "
              >
                1000+ Students Already Transformed
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[#111827]
                w-full
                font-bold
                text-3xl
                leading-[1.1]
                tracking-[-0.02em]
                sm:text-2xl
                sm:leading-none
                sm:tracking-[-0.03em]
                md:text-5xl
                md:tracking-[-0.055em]
                lg:text-[4.5rem]
                xl:text-[5.5rem]
              "
            >
              <span className="block">Become a</span>
              <span className="block">Job Ready</span>
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#C88CFB]
                  to-[#9362F3]
                  bg-clip-text
                  text-transparent
                  text-[0.88em]
                  leading-[1.3]
                  pb-2
                "
              >
                Software Engineer
              </span>
            </h1>

            {/* Paragraph */}
            <p className="max-w-[640px] mt-5 md:mt-8 text-base  md:text-lg text-gray-600 leading-relaxed">
              Learn Python, AI, DevOps & React through <br /> real-world
              projects and expert mentorship.
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                lg:items-start
                w-full
                sm:w-auto
                gap-4
                sm:gap-5
                mt-8
                sm:mt-10
              "
            >
              <Link
                href="/courses"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  text-white
                  font-bold
                  transition-all
                  duration-300
                  px-7
                  py-3.5
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#8B5CF6]
                  to-[#6366F1]
                  border-t
                  border-white/30
                  shadow-[4px_6px_18px_rgba(139,92,246,0.35)]
                  hover:shadow-[6px_10px_24px_rgba(139,92,246,0.45)]
                  hover:-translate-y-0.5
                  active:scale-98
                "
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  text-slate-800
                  font-bold
                  transition-all
                  duration-300
                  px-7
                  py-3.5
                  rounded-2xl
                  bg-[#F4F5FA]
                  border
                  border-white/80
                  shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]
                  hover:shadow-[6px_6px_14px_#d0d2dc,-6px_-6px_14px_#ffffff]
                  hover:text-[#8B5CF6]
                  hover:-translate-y-0.5
                  active:shadow-[inset_3px_3px_6px_#d1d3dc,inset_-3px_-3px_6px_#ffffff]
                "
              >
                <PlayCircle className="w-5 h-5 text-[#8B5CF6]" />
                Explore Programs
              </Link>
            </div>
          </div>

          {/* ══ RIGHT COLUMN: Hero Image with Perfect Circular Icon Layout ══ */}
          <div className="w-full lg:w-[55%] flex justify-center items-center relative mt-12 lg:mt-0">
            {/* The "Globe" Container - Perfect circle base */}
            <div className="relative w-full max-w-[480px] sm:max-w-[580px] lg:max-w-[680px] aspect-square flex items-center justify-center">

              {/* ── OUTER RING OF ICONS (12 icons at 30° intervals) ── */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {outerRing.map((icon, index) => {
                  const angleRad = (icon.angle * Math.PI) / 180;
                  // 42% radius for outer ring
                  const radius = 42;
                  const x = 50 + radius * Math.cos(angleRad);
                  const y = 50 + radius * Math.sin(angleRad);
                  return (
                    <div
                      key={`outer-${index}`}
                      className={`absolute bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100  ${getSizeClasses(icon.size)}`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={44}
                        height={44}
                        className={`object-contain ${getImageSize(icon.size)}`}
                      />
                    </div>
                  );
                })}
              </div>

           

              {/* ── MAIN DASHBOARD IMAGE (On top of all icons) ── */}
              <div className="relative z-10 w-full max-w-[75%] lg:max-w-[70%]">
                <Image
                  src="/assets/hero.png"
                  alt="Academy Dashboard Presentation"
                  width={800}
                  height={550}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `,
        }}
      />
    </section>
  );
}
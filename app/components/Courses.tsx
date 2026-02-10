// "use client";

// import {
//   Code2,
//   CloudCog,
//   Cpu,
//   ChevronRight,
//   Clock,
//   Users,
//   TrendingUp,
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Zap,
//   Award,
//   Briefcase,
//   Brain,
// } from "lucide-react";
// import Link from "next/link";

// interface Course {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   duration: string;
//   level: string;
//   students: string;
//   placementRate: string;
//   price: string;
//   color: string;
//   bgGradient: string;
//   features: string[];
//   badge?: string;
// }

// const Courses = () => {
//   const courses: Course[] = [
//     {
//       id: 1,
//       title: "Python Development",
//       description:
//         "Master Python, Django, FastAPI, and build real-world applications with AI/ML integration.",
//       icon: <Code2 className="w-7 h-7" />,
//       duration: "12 Weeks",
//       level: "Beginner to Advanced",
//       students: "1,200+",
//       placementRate: "96%",
//       price: "₹35,000",
//       color: "from-orange-500 to-amber-500",
//       bgGradient: "bg-gradient-to-br from-orange-50 to-amber-50",
//       features: [
//         "Django & FastAPI Framework",
//         "REST APIs & Microservices",
//         "Database Design & Optimization",
//         "AI/ML Fundamentals",
//         "Real-time Applications",
//         "DevOps Deployment",
//       ],
//       badge: "Most Popular",
//     },
//     {
//       id: 2,
//       title: "DevOps Engineering",
//       description:
//         "Master CI/CD pipelines, Docker, Kubernetes, AWS Cloud, and infrastructure automation.",
//       icon: <CloudCog className="w-7 h-7" />,
//       duration: "16 Weeks",
//       level: "Intermediate to Advanced",
//       students: "850+",
//       placementRate: "98%",
//       price: "₹55,000",
//       color: "from-blue-500 to-cyan-500",
//       bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
//       features: [
//         "Docker & Containerization",
//         "Kubernetes Orchestration",
//         "AWS/Azure Cloud Services",
//         "CI/CD with Jenkins/GitLab",
//         "Infrastructure as Code",
//         "Monitoring & Logging",
//       ],
//       badge: "High Demand",
//     },
//     {
//       id: 3,
//       title: "React Development",
//       description:
//         "Build interactive UIs with React, Next.js 14, TypeScript, and modern state management.",
//       icon: <Cpu className="w-7 h-7" />,
//       duration: "10 Weeks",
//       level: "Beginner to Advanced",
//       students: "1,500+",
//       placementRate: "95%",
//       price: "₹35,000",
//       color: "from-purple-500 to-pink-500",
//       bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
//       features: [
//         "React ",
//         "TypeScript & Modern JavaScript",
//         "State Management",
//         "Performance Optimization",
//         "Testing & Deployment",
//         "UI/UX Best Practices",
//       ],
//       badge: "Trending",
//     },
//   ];


//   return (
//     <section
//       id="courses"
//       className="relative py-24 bg-gradient-to-b from-white to-gray-50/50"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF7A1E] rounded-full mix-blend-multiply filter blur-3xl"></div>
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-40 left-5 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl animate-float"></div>
//       <div className="absolute bottom-40 right-5 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl animate-float-delay"></div>

//       <div className="section-padding relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-3 rounded-2xl border border-orange-200/50 mb-6">
//             <Brain className="w-5 h-5 text-[#FF7A1E]" />
//             <span className="text-sm font-semibold text-gray-900">
//               Vira Academy Programs
//             </span>
//             <div className="flex items-center gap-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   className="w-4 h-4 fill-[#FF7A1E] text-[#FF7A1E]"
//                 />
//               ))}
//             </div>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               Industry-Focused
//             </span>{" "}
//             <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent">
//               Tech Programs
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Accelerate your tech career with Vira Academy's hands-on training
//             programs. Learn from industry experts, work on real projects, and
//             get guaranteed placement support.
//           </p>
//         </div>

       

//         {/* Courses Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="group relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//             >
//               {/* Badge */}
//               {course.badge && (
//                 <div className="absolute -top-3 right-6 z-10">
//                   <div className="px-4 py-1.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white text-sm font-semibold rounded-full shadow-lg">
//                     {course.badge}
//                   </div>
//                 </div>
//               )}

//               {/* Card Content */}
//               <div className="p-8">
//                 {/* Icon & Title */}
//                 <div
//                   className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6`}
//                 >
//                   {course.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF7A1E] transition-colors">
//                   {course.title}
//                 </h3>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {course.description}
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-3 mb-8">
//                   {course.features.slice(0, 4).map((feature, index) => (
//                     <div key={index} className="flex items-center gap-3">
//                       <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center flex-shrink-0">
//                         <CheckCircle className="w-3 h-3 text-green-600" />
//                       </div>
//                       <span className="text-sm text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Course Details */}
//                 <div
//                   className={`${course.bgGradient} rounded-2xl p-5 mb-8 border border-gray-100`}
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                         <Clock className="w-4 h-4" />
//                         Duration
//                       </div>
//                       <div className="font-bold text-gray-900">
//                         {course.duration}
//                       </div>
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                         <Users className="w-4 h-4" />
//                         Students
//                       </div>
//                       <div className="font-bold text-gray-900">
//                         {course.students}
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-600 mb-1">
//                         Placement Rate
//                       </div>
//                       <div className="font-bold text-green-600">
//                         {course.placementRate}
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-600 mb-1">
//                         Program Fee
//                       </div>
//                       <div className="font-bold text-gray-900">
//                         {course.price}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <Link
//                   href={`/courses/${course.id === 1 ? "python" : course.id === 2 ? "devops" : "react"}`}
//                   className="group/btn w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 hover:-translate-y-0.5"
//                 >
//                   <span>Explore Program</span>
//                   <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                 </Link>
//               </div>

//               {/* Hover Effect Border */}
//               <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FF7A1E]/20 transition-colors duration-500 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-3xl p-8 md:p-12 text-white">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <Zap className="w-4 h-4" />
//                 <span className="text-sm font-semibold">
//                   Vira Academy Advantage
//                 </span>
//               </div>
//               <h3 className="text-3xl md:text-4xl font-bold mb-4">
//                 Start Your Tech Journey at Vira
//               </h3>
//               <p className="text-orange-100 mb-6">
//                 Join thousands of successful graduates. Get 20% scholarship on
//                 early enrollment.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <div className="px-4 py-2 bg-white/20 rounded-lg">
//                   <div className="text-sm">Next Batch</div>
//                   <div className="font-bold">March 15, 2026</div>
//                 </div>
//                 <div className="px-4 py-2 bg-white/20 rounded-lg">
//                   <div className="text-sm">Seats Available</div>
//                   <div className="font-bold">24/50</div>
//                 </div>
//                 <div className="px-4 py-2 bg-white/20 rounded-lg">
//                   <div className="text-sm">Scholarship</div>
//                   <div className="font-bold">20% Off</div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <Link
//                 href="/courses"
//                 className="block w-full py-4 bg-white text-[#FF7A1E] font-semibold rounded-xl text-center hover:bg-orange-50 transition-colors"
//               >
//                 View All Programs
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block w-full py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-center hover:bg-white/10 transition-colors"
//               >
//                 Book Free Career Consultation
//               </Link>
//               <div className="text-center text-sm text-orange-100 pt-2">
//                 <span className="font-medium">Need guidance?</span>{" "}
//                 <a
//                   href="tel:+919677377316"
//                   className="underline hover:text-white"
//                 >
//                   Call Vira Counselor: +91 96773 77316
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Trust Badges */}
//         <div className="mt-16 pt-12 border-t border-gray-200">
//           <div className="text-center mb-8">
//             <h4 className="text-lg font-semibold text-gray-900 mb-2">
//               Vira Academy Students Work At
//             </h4>
           
//           </div>
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//             {["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro"].map(
//               (company, idx) => (
//                 <div
//                   key={idx}
//                   className="h-16 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:border-[#FF7A1E] transition-colors group"
//                 >
//                   <div className="text-xl font-bold text-gray-700 group-hover:text-[#FF7A1E] transition-colors">
//                     {company}
//                   </div>
//                 </div>
//               ),
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;



"use client";

import {
  Code2,
  CloudCog,
  Cpu,
  ChevronRight,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Award,
  Briefcase,
  Brain,
} from "lucide-react";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  price: string;
  color: string;
  bgGradient: string;
  features: string[];
  badge?: string;
}

const Courses = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Python Development",
      description:
        "Master Python, Django, FastAPI, and build real-world applications with AI/ML integration.",
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      price: "₹35,000",
      color: "from-orange-500 to-amber-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-amber-50",
      features: [
        "Django & FastAPI Framework",
        "REST APIs & Microservices",
        "Database Design & Optimization",
        "AI/ML Fundamentals",
        "Real-time Applications",
        "DevOps Deployment",
      ],
      badge: "Most Popular",
    },
    {
      id: 2,
      title: "DevOps Engineering",
      description:
        "Master CI/CD pipelines, Docker, Kubernetes, AWS Cloud, and infrastructure automation.",
      icon: <CloudCog className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      duration: "16 Weeks",
      level: "Intermediate to Advanced",
      price: "₹55,000",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      features: [
        "Docker & Containerization",
        "Kubernetes Orchestration",
        "AWS/Azure Cloud Services",
        "CI/CD with Jenkins/GitLab",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
      badge: "High Demand",
    },
    {
      id: 3,
      title: "React Development",
      description:
        "Build interactive UIs with React, Next.js 14, TypeScript, and modern state management.",
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      price: "₹35,000",
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50",
      features: [
        "React ",
        "TypeScript & Modern JavaScript",
        "State Management",
        "Performance Optimization",
        "Testing & Deployment",
        "UI/UX Best Practices",
      ],
      badge: "Trending",
    },
  ];

  return (
    <section
      id="courses"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50/50"
    >
      {/* Background Pattern - Responsive sizes */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#FF7A1E] rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl"></div>
      </div>

      {/* Floating Elements - Hide on mobile, show on tablet and up */}
      <div className="hidden sm:block absolute top-20 left-5 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl animate-float"></div>
      <div className="hidden sm:block absolute bottom-20 right-5 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl animate-float-delay"></div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl border border-orange-200/50 mb-4 sm:mb-6">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7A1E]" />
            <span className="text-xs sm:text-sm font-semibold text-gray-900">
              Vira Academy Programs
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FF7A1E] text-[#FF7A1E]"
                />
              ))}
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Industry-Focused
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] bg-clip-text text-transparent block sm:inline">
              Tech Programs
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Accelerate your tech career with Vira Academy's hands-on training
            programs. Learn from industry experts, work on real projects, and
            get placement support.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute -top-2 sm:-top-3 right-4 sm:right-6 z-10">
                  <div className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                    {course.badge}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                {/* Icon & Title */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-4 sm:mb-6`}
                >
                  {course.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#FF7A1E] transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {course.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-600" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Course Details */}
                <div
                  className={`${course.bgGradient} rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 border border-gray-100`}
                >
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        Duration
                      </div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        {course.duration}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">
                        Program Fee
                      </div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/courses/${course.id === 1 ? "python" : course.id === 2 ? "devops" : "react"}`}
                  className="group/btn w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-gray-200 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-[#FF7A1E]/20 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FF7A1E] to-[#FF9A3E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-semibold">
                  Vira Academy Advantage
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Start Your Tech Journey at Vira
              </h3>
              <p className="text-orange-100 mb-4 sm:mb-6 text-sm sm:text-base">
                Join thousands of successful graduates. Get 20% scholarship on
                early enrollment.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-lg">
                  <div className="text-xs sm:text-sm">Next Batch</div>
                  <div className="font-bold text-sm sm:text-base">March 15, 2026</div>
                </div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-lg">
                  <div className="text-xs sm:text-sm">Seats Available</div>
                  <div className="font-bold text-sm sm:text-base">24/50</div>
                </div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-lg">
                  <div className="text-xs sm:text-sm">Scholarship</div>
                  <div className="font-bold text-sm sm:text-base">20% Off</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Link
                href="/courses"
                className="block w-full py-3 sm:py-4 bg-white text-[#FF7A1E] font-semibold rounded-lg sm:rounded-xl text-center hover:bg-orange-50 transition-colors text-sm sm:text-base"
              >
                View All Programs
              </Link>
              <Link
                href="/contact"
                className="block w-full py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg sm:rounded-xl text-center hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                Book Free Career Consultation
              </Link>
              <div className="text-center text-xs sm:text-sm text-orange-100 pt-2">
                <span className="font-medium">Need guidance?</span>{" "}
                <a
                  href="tel:+919677377316"
                  className="underline hover:text-white whitespace-nowrap"
                >
                  Whatsapp Vira Counselor: +91 96773 77316
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="mt-8 sm:mt-12 md:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Vira Academy Students Work At
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
            {["Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro"].map(
              (company, idx) => (
                <div
                  key={idx}
                  className="h-12 sm:h-16 flex items-center justify-center bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-[#FF7A1E] transition-colors group"
                >
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 group-hover:text-[#FF7A1E] transition-colors">
                    {company}
                  </div>
                </div>
              ),
            )}
          </div>
        </div> */}
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Courses;
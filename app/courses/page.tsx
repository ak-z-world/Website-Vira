import { Code2, CloudCog, Cpu, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const allCourses = [
    {
      id: 1,
      title: 'Python Full Stack Development',
      description: 'Master Python, Django, FastAPI, and modern web development with hands-on projects.',
      icon: <Code2 className="w-8 h-8" />,
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      students: '1,200+',
      fee: '₹28,000',
      features: ['Django & FastAPI', 'REST APIs', 'Database Design', 'AI/ML Basics', 'Real Projects', 'Placement Support'],
      popular: true,
    },
    {
      id: 2,
      title: 'DevOps Engineering',
      description: 'Learn CI/CD, Docker, Kubernetes, AWS, and infrastructure automation from experts.',
      icon: <CloudCog className="w-8 h-8" />,
      duration: '16 Weeks',
      level: 'Intermediate',
      students: '850+',
      fee: '₹30,000',
      features: ['Docker & Kubernetes', 'AWS Cloud', 'CI/CD Pipeline', 'Terraform', 'Monitoring Tools', 'Cloud Security'],
      popular: true,
    },
    {
      id: 3,
      title: 'React & Modern Frontend',
      description: 'Build interactive UIs with React, Next.js, TypeScript, and state management.',
      icon: <Cpu className="w-8 h-8" />,
      duration: '10 Weeks',
      level: 'Beginner to Advanced',
      students: '1,500+',
      fee: '₹25,000',
      features: ['React & Next.js', 'TypeScript', 'State Management', 'Testing', 'Performance', 'Deployment'],
      popular: false,
    },
    
  ];

  return (
  <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">

    {/* HERO SECTION */}
    <section className="relative pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>

      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4"/>
            Industry-Focused Programs
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of industry-aligned programs designed to launch your tech career.
          </p>

        </div>

      </div>
    </section>


    {/* COURSES GRID */}
    <section className="pb-12 sm:pb-16 md:pb-20">

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              All{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Explore our most popular and career-transforming programs.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {allCourses.map((course) => (

              <div
                key={course.id}
                className={`group relative bg-white border border-blue-100 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-visible ${
  course.popular ? "border-blue-500" : ""
}`}
              >

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
                </div>


                {/* Popular badge */}
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}


                {/* Icon */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {course.icon}
                </div>


                {/* Title */}
                <h3 className="relative z-10 text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>


                {/* Description */}
                <p className="relative z-10 text-gray-600 text-sm sm:text-base mb-5">
                  {course.description}
                </p>


                {/* Features */}
                <div className="relative z-10 space-y-2 mb-6">

                  {course.features.slice(0, 4).map((feature, index) => (

                    <div key={index} className="flex items-center gap-2">

                      <CheckCircle className="w-4 h-4 text-blue-500"/>

                      <span className="text-xs sm:text-sm text-gray-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>


                {/* Stats */}
                <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-6">

                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4"/>
                    {course.duration}
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4"/>
                    {course.students}
                  </div>

                </div>


                {/* Bottom */}
                <div className="relative z-10 flex items-center justify-between">

                  <div>

                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                      {course.fee}
                    </div>

                    <div className="text-xs text-gray-500">
                      Course Fee
                    </div>

                  </div>


                  <Link
                    href={`/contact?course=${course.title}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >

                    Enroll Now

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  </div>
);
}
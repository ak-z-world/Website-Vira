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
      fee: '₹45,000',
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
      fee: '₹55,000',
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
      fee: '₹35,000',
      features: ['React & Next.js', 'TypeScript', 'State Management', 'Testing', 'Performance', 'Deployment'],
      popular: false,
    },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#FF7A1E]">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Choose from our comprehensive range of industry-focused programs designed to make you job-ready
            </p>
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All <span className="text-[#FF7A1E]">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete catalog of tech courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <div
                key={course.id}
                className={`bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  course.popular ? 'border-2 border-[#FF7A1E] relative' : ''
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#FF7A1E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7A1E] to-[#FF9A3E] flex items-center justify-center text-white mb-6">
                  {course.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                
                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {course.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-[#FF7A1E]">{course.fee}</div>
                    <div className="text-sm text-gray-500">Course Fee</div>
                  </div>
                  <Link
                    href={`/contact?course=${course.title}`}
                    className="btn-secondary px-6 py-2"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
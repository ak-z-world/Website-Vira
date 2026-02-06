import { Cpu, Clock, Users, CheckCircle, ArrowRight, BookOpen, Code2, Layout, Zap, Sparkles, TrendingUp, Palette, Globe, Shield, Award, Star, Layers, GitBranch, Terminal, TestTube, Smartphone, Monitor, Database, Workflow, Briefcase, Target, Rocket, Server } from 'lucide-react';
import Link from 'next/link';

export default function ReactCoursePage() {
  const courseDetails = {
    title: 'React Development',
    subtitle: 'Modern Frontend Mastery',
    description: 'Master React, Next.js, TypeScript, and modern frontend tools to build high-performance web applications.',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    students: '1,800+',
    fee: '₹42,000',
    originalFee: '₹52,000',
    nextBatch: 'March 28, 2024',
    seatsLeft: '10',
    rating: '4.9',
    reviews: '568',
  };

  const modules = [
    { 
      title: 'React Fundamentals', 
      topics: ['JSX & Components', 'Props & State Management', 'Hooks Ecosystem', 'Event Handling', 'Component Lifecycle'],
      icon: <Code2 className="w-5 h-5" />,
      duration: '3 Weeks',
      projects: 3
    },
    { 
      title: 'Advanced React Patterns', 
      topics: ['Context API & Redux', 'Custom Hooks', 'Performance Optimization', 'Error Boundaries', 'Code Splitting'],
      icon: <Zap className="w-5 h-5" />,
      duration: '3 Weeks',
      projects: 3
    },
    { 
      title: 'Next.js Mastery', 
      topics: ['App Router Architecture', 'Server & Client Components', 'API Routes', 'SSR/SSG/ISR', 'Middleware & Auth'],
      icon: <Layout className="w-5 h-5" />,
      duration: '3 Weeks',
      projects: 4
    },
    { 
      title: 'Modern Development', 
      topics: ['TypeScript Integration', 'Testing with Jest & RTL', 'State Management', 'UI Libraries', 'Animations'],
      icon: <Cpu className="w-5 h-5" />,
      duration: '3 Weeks',
      projects: 3
    },
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: 'Build 6+ production-ready projects' },
    { icon: <Layers className="w-5 h-5" />, text: 'Master modern React patterns' },
    { icon: <Monitor className="w-5 h-5" />, text: 'Full-stack application development' },
    { icon: <Users className="w-5 h-5" />, text: 'Industry expert mentorship' },
    { icon: <Briefcase className="w-5 h-5" />, text: 'Career guidance & interviews' },
    { icon: <Database className="w-5 h-5" />, text: 'GitHub portfolio setup' },
  ];

  const technologies = [
    { name: 'React 18', icon: <Code2 className="w-4 h-4" />, category: 'Library' },
    { name: 'Next.js 14', icon: <Layout className="w-4 h-4" />, category: 'Framework' },
    { name: 'TypeScript', icon: <Terminal className="w-4 h-4" />, category: 'Language' },
    { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" />, category: 'Styling' },
    { name: 'Redux Toolkit', icon: <Workflow className="w-4 h-4" />, category: 'State' },
    { name: 'Jest & RTL', icon: <TestTube className="w-4 h-4" />, category: 'Testing' },
    { name: 'Vite', icon: <Zap className="w-4 h-4" />, category: 'Build Tool' },
    { name: 'Framer Motion', icon: <Globe className="w-4 h-4" />, category: 'Animations' },
  ];

  const outcomes = [
    'Build scalable React applications with modern architecture',
    'Master Next.js for production-ready applications',
    'Implement TypeScript for type-safe development',
    'Create responsive UIs with Tailwind CSS',
    'Set up comprehensive testing with Jest & React Testing Library',
    'Implement state management with Redux Toolkit',
    'Optimize application performance',
    'Deploy applications to production',
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with cart, checkout, payment integration, and admin dashboard',
      technologies: ['Next.js 14', 'Stripe', 'Tailwind', 'Redux']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social platform with posts, comments, likes, and user authentication',
      technologies: ['React', 'Firebase', 'Context API', 'Material-UI']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization platform with charts, filters, and real-time updates',
      technologies: ['Next.js', 'Recharts', 'TypeScript', 'API Integration']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-50" />
        
        <div className="section-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/courses" className="hover:text-orange-600 transition-colors">Courses</Link>
              <span>›</span>
              <span className="text-orange-600 font-semibold">React Development</span>
            </div> */}
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-600">High-Demand Skill</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  React <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Development</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Master modern frontend development with React and Next.js. Build fast, scalable, and beautiful applications that users love.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{courseDetails.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{courseDetails.level}</div>
                    <div className="text-sm text-gray-600">Level</div>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{courseDetails.rating}/5</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {/* <Link 
                    href="#curriculum" 
                    className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5" />
                    View Syllabus
                  </Link> */}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-3xl opacity-20" />
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-4xl font-bold text-gray-900">{courseDetails.fee}</div>
                      <div className="text-sm text-gray-500 line-through">{courseDetails.originalFee}</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-4 py-2 rounded-full">
                      20% OFF
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                          <div className="text-orange-500">{benefit.icon}</div>
                        </div>
                        <span className="text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 border border-orange-200 rounded-2xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Next Batch Starts</span>
                      <span className="font-bold text-orange-600">{courseDetails.nextBatch}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="font-semibold">{courseDetails.seatsLeft} seats left</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="block text-center py-3 bg-gray-50 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
                  >
                    Book Free Demo Class
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-4">
                <Cpu className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Modern Tech Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Master the <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  React Ecosystem
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <div className="text-orange-500">{tech.icon}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/30 border border-purple-200 rounded-3xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">6+</div>
                  <div className="text-gray-600">Real Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">120+</div>
                  <div className="text-gray-600">Hours of Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-gray-600">Modern Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-4">
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Comprehensive Learning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Structured <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Curriculum
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From basics to advanced concepts - become a React expert in 12 weeks
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white">{module.icon}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-500">{module.duration}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                  
                  <ul className="space-y-2 mb-4">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm text-gray-500">
                    Includes {module.projects} hands-on projects
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-4">
                <Layers className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Portfolio Projects</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Build <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Real Applications
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-600">Skills You'll Gain</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                  Master <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Frontend Development
                  </span>
                </h2>
                
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur-3xl opacity-20" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                  <div className="text-center mb-8">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-2xl font-bold mb-2">React Career Outlook</h3>
                    <p className="text-gray-300">Why React developers are in high demand</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Average Salary</span>
                      <span className="text-2xl font-bold text-purple-400">₹8-15 LPA</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Job Growth Rate</span>
                      <span className="text-2xl font-bold text-purple-400">40% YoY</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Placement Rate</span>
                      <span className="text-2xl font-bold text-purple-400">96%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Industry Demand</span>
                      <span className="text-2xl font-bold text-purple-400">Very High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">Limited Seats Available</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
              Start Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                React Journey
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of developers who launched their careers with our React development program.
            </p>
            
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{courseDetails.fee}</div>
                  <div className="text-gray-500 line-through">{courseDetails.originalFee}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next batch starts</div>
                  <div className="text-lg font-bold text-orange-600">{courseDetails.nextBatch}</div>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  href="/contact" 
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center gap-2">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                <Link 
                  href="/contact" 
                  className="group bg-white border border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    Book Free Demo
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
              
              <div className="mt-6 text-sm text-gray-500 text-center">
                Only {courseDetails.seatsLeft} seats available • Portfolio review included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {/* <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Explore <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  More Courses
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expand your full-stack development skills
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                href="/courses/python-django" 
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">Python & Django</h3>
                    <p className="text-gray-600 text-sm">Backend development mastery</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">10 Weeks</div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              
              <Link 
                href="/courses/devops" 
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">DevOps Engineering</h3>
                    <p className="text-gray-600 text-sm">CI/CD, Docker & Kubernetes</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">16 Weeks</div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              
              <Link 
                href="/courses/fullstack" 
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">Full Stack Development</h3>
                    <p className="text-gray-600 text-sm">React + Django complete stack</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">20 Weeks</div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
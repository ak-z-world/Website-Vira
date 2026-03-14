"use client";
import { Cpu, Clock, Users, CheckCircle, ArrowRight, BookOpen, Code2, Layout, Zap, Sparkles, TrendingUp, Palette, Globe, Shield, Award, Star, Layers, GitBranch, Terminal, TestTube, Smartphone, Monitor, Database, Workflow, Briefcase, Target, Rocket, Server } from 'lucide-react';
import Link from 'next/link';
import { useGlobal } from "@/app/providers";


export default function ReactCoursePage() {
  const { t, price, originalPrice } = useGlobal();
  const courseDetails = {
    title: 'React Development',
    subtitle: 'Modern Frontend Mastery',
    description: t("courses.react.description"),
    duration: '6 Weeks',
    level: 'Beginner to Advanced',
    fee: '₹10,000',
    originalFee: '₹35,000',
    nextBatch: 'March 28, 2026',
    seatsLeft: '10',
    rating: '4.9',
  };

  const modules = [
    {
      title: "courses.react.modules.fundamentals.title",
      duration: "courses.react.modules.fundamentals.duration",
      topics: [
        "courses.react.modules.fundamentals.topics.jsx",
        "courses.react.modules.fundamentals.topics.props",
        "courses.react.modules.fundamentals.topics.hooks",
        "courses.react.modules.fundamentals.topics.events",
        "courses.react.modules.fundamentals.topics.lifecycle",
      ],
      icon: <Code2 className="w-5 h-5" />,
      projects: 3,
    },
    {
      title: "courses.react.modules.advanced.title",
      duration: "courses.react.modules.advanced.duration",
      topics: [
        "courses.react.modules.advanced.topics.context",
        "courses.react.modules.advanced.topics.customHooks",
        "courses.react.modules.advanced.topics.performance",
        "courses.react.modules.advanced.topics.error",
        "courses.react.modules.advanced.topics.splitting",
      ],
      icon: <Zap className="w-5 h-5" />,
      projects: 3,
    },
    {
      title: "courses.react.modules.nextjs.title",
      duration: "courses.react.modules.nextjs.duration",
      topics: [
        "courses.react.modules.nextjs.topics.router",
        "courses.react.modules.nextjs.topics.serverClient",
        "courses.react.modules.nextjs.topics.api",
        "courses.react.modules.nextjs.topics.rendering",
        "courses.react.modules.nextjs.topics.middleware",
      ],
      icon: <Layout className="w-5 h-5" />,
      projects: 4,
    },
    {
      title: "courses.react.modules.modern.title",
      duration: "courses.react.modules.modern.duration",
      topics: [
        "courses.react.modules.modern.topics.typescript",
        "courses.react.modules.modern.topics.testing",
        "courses.react.modules.modern.topics.state",
        "courses.react.modules.modern.topics.ui",
        "courses.react.modules.modern.topics.animations",
      ],
      icon: <Cpu className="w-5 h-5" />,
      projects: 3,
    },
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: "courses.react.benefits.projects" },
    { icon: <Layers className="w-5 h-5" />, text: "courses.react.benefits.patterns" },
    { icon: <Monitor className="w-5 h-5" />, text: "courses.react.benefits.fullstack" },
    { icon: <Users className="w-5 h-5" />, text: "courses.react.benefits.mentorship" },
    { icon: <Database className="w-5 h-5" />, text: "courses.react.benefits.portfolio" },
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
    t("courses.react.outcomes.scalable"),
    t("courses.react.outcomes.nextjs"),
    t("courses.react.outcomes.typescript"),
    t("courses.react.outcomes.ui"),
    t("courses.react.outcomes.testing"),
    t("courses.react.outcomes.redux"),
    t("courses.react.outcomes.performance"),
    t("courses.react.outcomes.deployment"),
  ];

  const projects = [
    {
      title: "courses.react.projects.ecommerce.title",
      description: "courses.react.projects.ecommerce.description",
      technologies: [
        "courses.react.projects.ecommerce.technologies.next",
        "courses.react.projects.ecommerce.technologies.tailwind",
        "courses.react.projects.ecommerce.technologies.redux",
      ],
    },
    {
      title: "courses.react.projects.social.title",
      description: "courses.react.projects.social.description",
      technologies: [
        "courses.react.projects.social.technologies.react",
        "courses.react.projects.social.technologies.context",
        "courses.react.projects.social.technologies.mui",
      ],
    },
    {
      title: "courses.react.projects.analytics.title",
      description: "courses.react.projects.analytics.description",
      technologies: [
        "courses.react.projects.analytics.technologies.next",
        "courses.react.projects.analytics.technologies.typescript",
        "courses.react.projects.analytics.technologies.api",
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "React JS Frontend Development Course",
            "description": "Learn modern frontend development with React JS, JavaScript, components, hooks, state management and build real-world web applications.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ArivuOn Academy",
              "url": "https://academy.arivuon.in"
            },
            "url": "https://academy.arivuon.in/courses/react-js",
            "image": "https://academy.arivuon.in/og-image.png",
            "inLanguage": "en",
            "availableLanguage": "en",
            "educationalLevel": "Beginner to Advanced",
            "teaches": [
              "JavaScript ES6",
              "React JS",
              "React Hooks",
              "Component-Based Architecture",
              "State Management",
              "REST API Integration",
              "Frontend Development",
              "Responsive Web Design"
            ],
            "courseMode": "online",
            "isAccessibleForFree": false,
            "offers": {
              "@type": "Offer",
              "category": "Paid",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://academy.arivuon.in/courses/react-js"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT12H"
            },
            "keywords": [
              "React JS course",
              "React JS training online",
              "Frontend development with React",
              "React JS certification course",
              "Learn React JS for beginners"
            ]
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-10 pb-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-50" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full blur-3xl opacity-50" />

          <div className="section-padding relative z-10">
            <div className="max-w-6xl mx-auto">


              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-blue-600">High-Demand Skill</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                    React <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Development</span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                    {t("courses.react.description")}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center h-full">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{courseDetails.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{courseDetails.level}</div>
                      <div className="text-sm text-gray-600">Level</div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center h-full">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{courseDetails.rating}/5</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                    >
                      Enroll Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    {/* <Link 
                    href="#curriculum" 
                    className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5" />
                    View Syllabus
                  </Link> */}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl opacity-20" />
                  <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-4xl font-bold text-gray-900">{courseDetails.fee}</div>
                        <div className="text-sm text-gray-500 line-through">{courseDetails.originalFee}</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-4 py-2 rounded-full">
                        20% OFF
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                            <div className="text-blue-500">{benefit.icon}</div>
                          </div>
                          <span className="text-gray-700">{t(benefit.text)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-2xl p-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Next Batch Starts</span>
                        <span className="font-bold text-blue-600">{courseDetails.nextBatch}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-semibold">{courseDetails.seatsLeft} seats left</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block text-center py-3 bg-gray-50 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
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
        <section className="py-8 bg-white">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-600">Modern Tech Stack</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                  Master the <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    React Ecosystem
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <div className="text-blue-500">{tech.icon}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/30 border border-indigo-200 rounded-3xl p-8">
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
        <section id="curriculum" className="py-8 bg-gray-50">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-600">Comprehensive Learning</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                  Structured <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
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
                    className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                        <div className="text-white">{module.icon}</div>
                      </div>

                      <div className="text-sm font-medium text-gray-500">
                        {t(module.duration)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {t(module.title)}
                    </h3>

                    <ul className="space-y-2 mb-4">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                          <span>{t(topic)}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-sm text-gray-500">
                      {t("courses.react.includesProjects")} {module.projects}{" "}
                      {t("courses.react.project")}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8 bg-white">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-600">Portfolio Projects</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                  Build <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Real Applications
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute -top-4 left-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>

                    <div className="pt-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {t(project.title)}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {t(project.description)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                          >
                            {t(tech)}
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
        <section className="py-8 bg-gray-50">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-blue-600">Skills You'll Gain</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                    Master <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                      Frontend Development
                    </span>
                  </h2>

                  <div className="space-y-4">
                    {outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full blur-3xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                    <div className="text-center mb-8">
                      <Briefcase className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                      <h3 className="text-2xl font-bold mb-2">React Career Outlook</h3>
                      <p className="text-gray-300">Why React developers are in high demand</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">Average Salary</span>
                        <span className="text-2xl font-bold text-indigo-400">₹8-15 LPA</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">Job Growth Rate</span>
                        <span className="text-2xl font-bold text-indigo-400">40% YoY</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span className="text-gray-300">Industry Demand</span>
                        <span className="text-2xl font-bold text-indigo-400">Very High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600">Limited Seats Available</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                Start Your <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
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
                    <div className="text-lg font-bold text-blue-600">{courseDetails.nextBatch}</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/contact"
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-2">
                      Enroll Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="group bg-white border border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
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
      </div>
    </>
  );
}
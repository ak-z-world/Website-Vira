"use client";
import { useGlobal } from '@/app/providers';
import { CloudCog, Clock, Users, CheckCircle, ArrowRight, BookOpen, Server, Zap, Sparkles, TrendingUp, Database, Terminal, Cpu, Globe, Shield, Award, Star, Layers, GitBranch, Codepen, Cloud, Settings, HardDrive, Wifi, Workflow, Briefcase, Target, Rocket, Layout, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function DevOpsCoursePage() {
  const { t, price, originalPrice } = useGlobal();

  const courseDetails = {
    title: 'DevOps Engineering',
    subtitle: 'Master Cloud & Automation',
    description: t("courses.devops.description"),
    duration: '6 Weeks',
    level: 'Intermediate to Advanced',
    fee: '₹10,000',
    originalFee: '₹38,000',
    nextBatch: 'March 25, 2026',
    seatsLeft: '6',
    rating: '4.8',
  };

  const modules = [
    {
      title: "courses.devops.modules.fundamentals.title",
      duration: "courses.devops.modules.fundamentals.duration",
      topics: [
        "courses.devops.modules.fundamentals.topics.intro",
        "courses.devops.modules.fundamentals.topics.problems",
        "courses.devops.modules.fundamentals.topics.culture",
        "courses.devops.modules.fundamentals.topics.lifecycle",
        "courses.devops.modules.fundamentals.topics.agile",
        "courses.devops.modules.fundamentals.topics.roles",
        "courses.devops.modules.fundamentals.topics.tools",
      ],
      icon: <Terminal className="w-5 h-5" />,
      projects: 2,
    },

    {
      title: "courses.devops.modules.aws.title",
      duration: "courses.devops.modules.aws.duration",
      topics: [
        "courses.devops.modules.aws.topics.cloud",
        "courses.devops.modules.aws.topics.infrastructure",
        "courses.devops.modules.aws.topics.iam",
        "courses.devops.modules.aws.topics.ec2",
        "courses.devops.modules.aws.topics.security",
        "courses.devops.modules.aws.topics.networking",
        "courses.devops.modules.aws.topics.practice",
      ],
      icon: <Cloud className="w-5 h-5" />,
      projects: 2,
    },

    {
      title: "courses.devops.modules.git.title",
      duration: "courses.devops.modules.git.duration",
      topics: [
        "courses.devops.modules.git.topics.importance",
        "courses.devops.modules.git.topics.architecture",
        "courses.devops.modules.git.topics.installation",
        "courses.devops.modules.git.topics.commands",
        "courses.devops.modules.git.topics.branching",
        "courses.devops.modules.git.topics.github",
        "courses.devops.modules.git.topics.practice",
      ],
      icon: <GitBranch className="w-5 h-5" />,
      projects: 2,
    },

    {
      title: "courses.devops.modules.jenkins.title",
      duration: "courses.devops.modules.jenkins.duration",
      topics: [
        "courses.devops.modules.jenkins.topics.cicd",
        "courses.devops.modules.jenkins.topics.architecture",
        "courses.devops.modules.jenkins.topics.installation",
        "courses.devops.modules.jenkins.topics.pipelines",
        "courses.devops.modules.jenkins.topics.integration",
        "courses.devops.modules.jenkins.topics.automation",
        "courses.devops.modules.jenkins.topics.practice",
      ],
      icon: <Cpu className="w-5 h-5" />,
      projects: 3,
    },

    {
      title: "courses.devops.modules.terraform.title",
      duration: "courses.devops.modules.terraform.duration",
      topics: [
        "courses.devops.modules.terraform.topics.iac",
        "courses.devops.modules.terraform.topics.architecture",
        "courses.devops.modules.terraform.topics.providers",
        "courses.devops.modules.terraform.topics.configuration",
        "courses.devops.modules.terraform.topics.aws",
        "courses.devops.modules.terraform.topics.bestPractices",
        "courses.devops.modules.terraform.topics.practice",
      ],
      icon: <Settings className="w-5 h-5" />,
      projects: 2,
    },

    {
      title: "courses.devops.modules.finalProject.title",
      duration: "courses.devops.modules.finalProject.duration",
      topics: [
        "courses.devops.modules.finalProject.topics.cloudwatch",
        "courses.devops.modules.finalProject.topics.monitoring",
        "courses.devops.modules.finalProject.topics.bestPractices",
        "courses.devops.modules.finalProject.topics.infrastructure",
        "courses.devops.modules.finalProject.topics.git",
        "courses.devops.modules.finalProject.topics.jenkins",
        "courses.devops.modules.finalProject.topics.terraform",
        "courses.devops.modules.finalProject.topics.walkthrough",
      ],
      icon: <Workflow className="w-5 h-5" />,
      projects: 2,
    },
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: "courses.devops.benefits.liveTraining" },
    { icon: <Layers className="w-5 h-5" />, text: "courses.devops.benefits.smallBatch" },
    { icon: <Workflow className="w-5 h-5" />, text: "courses.devops.benefits.handsOn" },
    { icon: <Users className="w-5 h-5" />, text: "courses.devops.benefits.mentorship" },
    { icon: <Cpu className="w-5 h-5" />, text: "courses.devops.benefits.project" },
  ];

  const outcomes = [
    t("courses.devops.outcomes.ciCd"),
    t("courses.devops.outcomes.awsDeploy"),
    t("courses.devops.outcomes.gitWorkflow"),
    t("courses.devops.outcomes.jenkinsAutomation"),
    t("courses.devops.outcomes.terraformProvision"),
    t("courses.devops.outcomes.monitoring"),
    t("courses.devops.outcomes.bestPractices"),
    t("courses.devops.outcomes.projectExperience"),
  ];

  const tools = [
    { name: 'Kubernetes', icon: <Cpu className="w-4 h-4" />, category: 'Orchestration' },
    { name: 'AWS', icon: <Cloud className="w-4 h-4" />, category: 'Cloud Platform' },
    { name: 'Jenkins', icon: <Settings className="w-4 h-4" />, category: 'CI/CD' },
    { name: 'Terraform', icon: <HardDrive className="w-4 h-4" />, category: 'Infrastructure as Code' },
  ];

  const projects = [
    {
      title: t("courses.devops.projects.cicd.title"),
      description: t("courses.devops.projects.cicd.description"),
      technologies: [
        t("courses.devops.projects.cicd.technologies.jenkins"),
        t("courses.devops.projects.cicd.technologies.git"),
        t("courses.devops.projects.cicd.technologies.aws"),
      ],
    },
    {
      title: t("courses.devops.projects.microservices.title"),
      description: t("courses.devops.projects.microservices.description"),
      technologies: [
        t("courses.devops.projects.microservices.technologies.git"),
        t("courses.devops.projects.microservices.technologies.jenkins"),
        t("courses.devops.projects.microservices.technologies.terraform"),
      ],
    },
    {
      title: t("courses.devops.projects.infrastructure.title"),
      description: t("courses.devops.projects.infrastructure.description"),
      technologies: [
        t("courses.devops.projects.infrastructure.technologies.terraform"),
        t("courses.devops.projects.infrastructure.technologies.aws"),
        t("courses.devops.projects.infrastructure.technologies.cloudwatch"),
      ],
    },
  ];

  return (
    <div className="
min-h-screen
bg-gradient-to-b
from-white
via-blue-50/30
to-white
overflow-hidden
">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AWS DevOps Engineering Course",
            "description": "Learn AWS DevOps with hands-on projects including CI/CD pipelines, Docker, Kubernetes, Terraform, and cloud deployment.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ArivuOn Academy",
              "url": "https://academy.arivuon.in"
            },
            "url": "https://academy.arivuon.in/courses/aws-devops",
            "image": "https://academy.arivuon.in/og-image.png",
            "inLanguage": "en",
            "availableLanguage": "en",
            "educationalLevel": "Beginner to Advanced",
            "teaches": [
              "AWS Cloud",
              "DevOps Fundamentals",
              "CI/CD Pipelines",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Infrastructure as Code",
              "Cloud Deployment"
            ],
            "courseMode": "online",
            "isAccessibleForFree": false,
            "offers": {
              "@type": "Offer",
              "category": "Paid",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://academy.arivuon.in/courses/devops"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": "PT12H"
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="
relative
pt-8 sm:pt-10 md:pt-12 lg:pt-14
pb-2 sm:pb-4 md:pb-6
overflow-hidden
">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-50" />

        <div className="section-padding relative z-10">
          <div className="max-w-6xl mx-auto">


            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-indigo-600">High-Demand Career</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                  DevOps <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Engineering</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  {t("courses.devops.description")}
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
                    className="
group inline-flex items-center justify-center gap-3

bg-gradient-to-r from-blue-500 to-indigo-600

text-white font-semibold

px-6 sm:px-7 md:px-8
py-3 sm:py-3.5 md:py-4

rounded-xl

hover:shadow-2xl hover:shadow-blue-500/30
hover:scale-105 hover:-translate-y-0.5

transition-all duration-300
"
                  >
                    Enroll Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20" />
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-4xl font-bold text-gray-900">{courseDetails.fee}</div>
                      <div className="text-sm text-gray-500 line-through">{courseDetails.originalFee}</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-4 py-2 rounded-full">
                      15% OFF
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
                      <span className="font-bold text-indigo-600">{courseDetails.nextBatch}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
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
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                <CloudCog className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-indigo-600">DevOps Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Master the <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Complete Stack
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <div className="text-blue-500">{tool.icon}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.category}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-3xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600">Real Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                  <div className="text-gray-600">Hours of Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
                  <div className="text-gray-600">DevOps Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-4 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-indigo-600">Comprehensive Learning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Structured <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Curriculum
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From fundamentals to advanced concepts - become job-ready in 16 weeks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="
group relative

bg-white
border border-gray-100

rounded-xl sm:rounded-2xl

p-5 sm:p-6

hover:border-blue-400
hover:shadow-xl
hover:-translate-y-1

transition-all duration-300
"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white">{module.icon}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-500">{t(module.duration)}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t(module.title)}</h3>

                  <ul className="space-y-2 mb-4">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span>{t(topic)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-sm text-gray-500">
                    Includes {module.projects} hands-on projects
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-1 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                <Layers className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-indigo-600">Hands-on Experience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Real-World <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Projects
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
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
      <section className="py-10 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-1 py-2 mb-6">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-indigo-600">Career Skills</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                  What You'll <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Master
                  </span>
                </h2>

                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl opacity-20" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                  <div className="text-center mb-8">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-2xl font-bold mb-2">DevOps Career Outlook</h3>
                    <p className="text-gray-300">Why DevOps is in high demand</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Average Salary</span>
                      <span className="text-2xl font-bold text-blue-400">₹12-20 LPA</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Job Growth Rate</span>
                      <span className="text-2xl font-bold text-blue-400">45% YoY</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-300">Industry Demand</span>
                      <span className="text-2xl font-bold text-blue-400">Very High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-3 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-200 rounded-full px-1 py-2 mb-6">
              <Rocket className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-semibold text-indigo-600">Limited Seats Available</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
              Launch Your <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                DevOps Career
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join the most comprehensive DevOps program and become an in-demand DevOps Engineer in 16 weeks.
            </p>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{courseDetails.fee}</div>
                  <div className="text-gray-500 line-through">{courseDetails.originalFee}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next batch starts</div>
                  <div className="text-lg font-bold text-indigo-600">{courseDetails.nextBatch}</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
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
                Only {courseDetails.seatsLeft} seats available
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
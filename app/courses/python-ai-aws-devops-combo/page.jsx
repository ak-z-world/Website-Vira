"use client";
import { useGlobal } from "@/app/providers";
import Head from "next/head";
import {
    Code2,
    Layout,
    Database,
    Cloud,
    GitBranch,
    Settings,
    Users,
    Award,
    Clock,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    Briefcase,
    Rocket,
    Target,
    Workflow,
    FileCode,
    Cpu,
    BookOpen
} from "lucide-react";
import Link from "next/link";

export default function PythonAiAwsComboPage() {
    const { t, price, originalPrice } = useGlobal();
    const courseDetails = {
        title: "Python + AI + AWS DevOps Engineering (Combo Pack)",
        subtitle:
            "Build intelligent Django applications and deploy them to AWS with CI/CD and Infrastructure as Code.",
        description: t("courses.pythonDevopsCombo.courseDetails.description"),
        duration: "12 Weeks",
        level: "Beginner to Advanced",
        fee: "₹10,000",
        originalFee: "₹65,000",
        nextBatch: "March 30, 2026",
        seatsLeft: "10",
        rating: "4.9",
    };

    const modules = [
        {
            title: "courses.pythonDevopsCombo.modules.pythonFundamentals.title",
            duration: "courses.pythonDevopsCombo.modules.pythonFundamentals.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.pythonFundamentals.topics.syntax",
                "courses.pythonDevopsCombo.modules.pythonFundamentals.topics.functions",
                "courses.pythonDevopsCombo.modules.pythonFundamentals.topics.files",
                "courses.pythonDevopsCombo.modules.pythonFundamentals.topics.practice",
            ],
            icon: <Code2 className="w-5 h-5" />,
            projects: 2,
        },

        {
            title: "courses.pythonDevopsCombo.modules.djangoDevelopment.title",
            duration: "courses.pythonDevopsCombo.modules.djangoDevelopment.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.djangoDevelopment.topics.architecture",
                "courses.pythonDevopsCombo.modules.djangoDevelopment.topics.models",
                "courses.pythonDevopsCombo.modules.djangoDevelopment.topics.auth",
                "courses.pythonDevopsCombo.modules.djangoDevelopment.topics.rest",
            ],
            icon: <Layout className="w-5 h-5" />,
            projects: 3,
        },

        {
            title: "courses.pythonDevopsCombo.modules.databaseApi.title",
            duration: "courses.pythonDevopsCombo.modules.databaseApi.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.databaseApi.topics.postgres",
                "courses.pythonDevopsCombo.modules.databaseApi.topics.orm",
                "courses.pythonDevopsCombo.modules.databaseApi.topics.optimization",
                "courses.pythonDevopsCombo.modules.databaseApi.topics.deploymentPrep",
            ],
            icon: <Database className="w-5 h-5" />,
            projects: 2,
        },

        {
            title: "courses.pythonDevopsCombo.modules.devopsFundamentals.title",
            duration: "courses.pythonDevopsCombo.modules.devopsFundamentals.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.devopsFundamentals.topics.lifecycle",
                "courses.pythonDevopsCombo.modules.devopsFundamentals.topics.agile",
                "courses.pythonDevopsCombo.modules.devopsFundamentals.topics.cicd",
                "courses.pythonDevopsCombo.modules.devopsFundamentals.topics.roles",
            ],
            icon: <Workflow className="w-5 h-5" />,
            projects: 1,
        },

        {
            title: "courses.pythonDevopsCombo.modules.awsInfrastructure.title",
            duration: "courses.pythonDevopsCombo.modules.awsInfrastructure.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.awsInfrastructure.topics.iam",
                "courses.pythonDevopsCombo.modules.awsInfrastructure.topics.ec2",
                "courses.pythonDevopsCombo.modules.awsInfrastructure.topics.networking",
                "courses.pythonDevopsCombo.modules.awsInfrastructure.topics.deployment",
            ],
            icon: <Cloud className="w-5 h-5" />,
            projects: 2,
        },

        {
            title: "courses.pythonDevopsCombo.modules.gitCicd.title",
            duration: "courses.pythonDevopsCombo.modules.gitCicd.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.gitCicd.topics.git",
                "courses.pythonDevopsCombo.modules.gitCicd.topics.github",
                "courses.pythonDevopsCombo.modules.gitCicd.topics.jenkins",
                "courses.pythonDevopsCombo.modules.gitCicd.topics.pipelines",
            ],
            icon: <GitBranch className="w-5 h-5" />,
            projects: 2,
        },

        {
            title: "courses.pythonDevopsCombo.modules.terraformMonitoring.title",
            duration: "courses.pythonDevopsCombo.modules.terraformMonitoring.duration",
            topics: [
                "courses.pythonDevopsCombo.modules.terraformMonitoring.topics.terraform",
                "courses.pythonDevopsCombo.modules.terraformMonitoring.topics.awsInfra",
                "courses.pythonDevopsCombo.modules.terraformMonitoring.topics.cloudwatch",
                "courses.pythonDevopsCombo.modules.terraformMonitoring.topics.finalProject",
            ],
            icon: <Settings className="w-5 h-5" />,
            projects: 2,
        },
    ];

    const benefits = [
        { icon: <Award className="w-5 h-5" />, text: "courses.pythonDevopsCombo.benefits.certification" },
        { icon: <Clock className="w-5 h-5" />, text: "courses.pythonDevopsCombo.benefits.hours" },
        { icon: <FileCode className="w-5 h-5" />, text: "courses.pythonDevopsCombo.benefits.projects" },
        { icon: <Users className="w-5 h-5" />, text: "courses.pythonDevopsCombo.benefits.mentorship" },
    ];

    const outcomes = [
        t("courses.pythonDevopsCombo.outcomes.buildApps"),
        t("courses.pythonDevopsCombo.outcomes.createApis"),
        t("courses.pythonDevopsCombo.outcomes.deployAws"),
        t("courses.pythonDevopsCombo.outcomes.cicd"),
        t("courses.pythonDevopsCombo.outcomes.terraform"),
        t("courses.pythonDevopsCombo.outcomes.monitoring"),
        t("courses.pythonDevopsCombo.outcomes.bestPractices"),
        t("courses.pythonDevopsCombo.outcomes.careerReady"),
    ];

    const tools = [
        { name: "Python 3.11+", icon: <Code2 className="w-4 h-4" /> },
        { name: "Django 4.2+", icon: <Layout className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
        { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
        { name: "Git & GitHub", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Jenkins", icon: <Workflow className="w-4 h-4" /> },
        { name: "Terraform", icon: <Settings className="w-4 h-4" /> },
    ];

    const whoCanJoin = [
        "Students & Fresh Graduates",
        "Working IT Professionals",
        "Developers & System Engineers",
        "Career Switchers",
        "Beginners interested in AI, Cloud & Backend Development",
    ];

    const batchDetails = {
        mode: "Live Online",
        batchSize: "Max 10 Students",
        morning: "8:30 AM – 9:30 AM (AST)",
        evening: "8:30 PM – 9:30 PM (AST)",
    };

    const finalProject = {
        title: "End-to-End AI-Powered Production Deployment Project",
        description:
            "Build an AI-powered Django application → Push to GitHub → Configure Jenkins CI/CD → Provision AWS infrastructure using Terraform → Deploy to production.",
        technologies: ["Python", "Django", "AI Basics", "AWS", "Git", "Jenkins", "Terraform"],
    };

    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": "Python + AI + AWS DevOps Combo Course",
                        "description": "Comprehensive combo program covering Python programming, Artificial Intelligence fundamentals, and DevOps tools like AWS, Jenkins, Terraform and CI/CD with real-world projects.",
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "ArivuOn Academy",
                            "url": "https://academy.arivuon.in"
                        },
                        "url": "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
                        "image": "https://academy.arivuon.in/og-image.png",
                        "inLanguage": "en",
                        "availableLanguage": "en",
                        "educationalLevel": "Beginner to Advanced",
                        "teaches": [
                            "Python Programming",
                            "Data Structures with Python",
                            "Artificial Intelligence Basics",
                            "Machine Learning Fundamentals",
                            "Django Backend Development",
                            "REST API Design",
                            "DevOps Fundamentals",
                            "CI/CD Pipelines",
                            "AWS Cloud Infrastructure",
                            "Terraform Infrastructure as Code",
                            "CloudWatch Monitoring"
                        ],
                        "courseMode": "online",
                        "isAccessibleForFree": false,
                        "offers": {
                            "@type": "Offer",
                            "category": "Paid",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock",
                            "url": "https://academy.arivuon.in/courses/python-ai-aws-devops-combo"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "online",
                            "courseWorkload": "PT20H"
                        }
                    })
                }}
            />

            <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">

                <section className="relative pt-10 pb-5 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60" />

                    <div className="section-padding relative z-10">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                                {/* LEFT CONTENT */}
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                                        <TrendingUp className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm font-semibold text-blue-600">
                                            High-Demand Python + AI + DevOps Career
                                        </span>
                                    </div>

                                    <h1 className="font-bold tracking-tight mb-4 leading-tight
               text-4xl sm:text-5xl md:text-6xl lg:text-7xl">

                                        <span className="block">
                                            Python
                                        </span>

                                        <span className="block bg-gradient-to-r from-[#EFBF04] to-[#856A00] bg-clip-text text-transparent">
                                            + AI (Basics)
                                        </span>

                                        <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                            + AWS DevOps
                                        </span>

                                    </h1>

                                    <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                                        {t("courses.pythonDevopsCombo.courseDetails.description")}
                                    </p>

                                    {/* STATS GRID */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                        <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center h-full">
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {courseDetails.duration}
                                            </div>
                                            <div className="text-sm text-gray-600">Duration</div>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {courseDetails.level}
                                            </div>
                                            <div className="text-sm text-gray-600">Level</div>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col justify-center items-center text-center h-full">
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {courseDetails.rating}/5
                                            </div>
                                            <div className="text-sm text-gray-600">Rating</div>
                                        </div>
                                    </div>

                                    {/* CTA BUTTON */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/contact"
                                            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                                        >
                                            Enroll Now
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* RIGHT PRICING CARD */}
                                <div className="relative">
                                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl opacity-20" />

                                    <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">

                                        {/* PRICE HEADER */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <div className="text-4xl font-bold text-gray-900">
                                                    {courseDetails.fee}
                                                </div>
                                                <div className="text-sm text-gray-500 line-through">
                                                    {courseDetails.originalFee}
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-4 py-2 rounded-full">
                                                75% OFF
                                            </div>
                                        </div>

                                        {/* BENEFITS */}
                                        <div className="space-y-4 mb-6">
                                            {benefits.map((benefit, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                                        <div className="text-blue-500">{benefit.icon}</div>
                                                    </div>

                                                    <span className="text-gray-700">
                                                        {t(benefit.text)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* BATCH INFO */}
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-2xl p-4 mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold text-gray-900">
                                                    Next Batch Starts
                                                </span>
                                                <span className="font-bold text-blue-600">
                                                    {courseDetails.nextBatch}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                                        style={{ width: "75%" }}
                                                    ></div>
                                                </div>
                                                <span className="font-semibold">
                                                    {courseDetails.seatsLeft} seats left
                                                </span>
                                            </div>
                                        </div>

                                        {/* DEMO CTA */}
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

                {/* TECH STACK */}
                <section className="py-5 bg-white">
                    <div className="section-padding">
                        <div className="max-w-6xl mx-auto">

                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                                    <Cpu className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-semibold text-blue-600">
                                        Tech Stack
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                                    Master the{" "}
                                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                        Modern AI + DevOps Stack
                                    </span>
                                </h2>
                            </div>

                            {/* TOOL GRID */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                                {tools.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="p-2 bg-blue-50 rounded-lg">
                                            <div className="text-blue-500">{tool.icon}</div>
                                        </div>
                                        <span className="font-medium text-gray-900">{tool.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* STATS STRIP */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-3xl p-8">
                                <div className="grid md:grid-cols-3 gap-8 text-center">
                                    <div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                                        <div className="text-gray-600">Real Projects</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                                        <div className="text-gray-600">Hours of Learning</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">1:1</div>
                                        <div className="text-gray-600">Mentorship</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CURRICULUM */}
                <section id="curriculum" className="py-5 bg-gray-50">
                    <div className="section-padding">
                        <div className="max-w-6xl mx-auto">

                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                                    <BookOpen className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-semibold text-blue-600">
                                        Curriculum
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                                    Structured{" "}
                                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                        Learning Path
                                    </span>
                                </h2>

                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Comprehensive curriculum designed to make you Python + AI + DevOps ready
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {modules.map((module, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
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

                {/* OUTCOMES */}
                <section className="py-8 bg-white">
                    <div className="section-padding">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                {/* LEFT SIDE */}
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                                        <Target className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm font-semibold text-blue-600">
                                            What You'll Achieve
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                                        Become a{" "}
                                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                            Python + AI + DevOps Engineer
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

                                {/* RIGHT SIDE */}
                                <div className="relative">
                                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl opacity-20" />

                                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">

                                        <div className="text-center mb-8">
                                            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                                            <h3 className="text-2xl font-bold mb-2">Career Outcomes</h3>
                                            <p className="text-gray-300">Industry impact after completion</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                <span className="text-gray-300">Avg. Salary Hike</span>
                                                <span className="text-2xl font-bold text-blue-400">65%</span>
                                            </div>

                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                <span className="text-gray-300">Placement Support</span>
                                                <span className="text-2xl font-bold text-blue-400">Yes</span>
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

                {/* FINAL CTA */}
                <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
                    <div className="absolute -top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60" />

                    <div className="section-padding relative z-10">
                        <div className="max-w-4xl mx-auto text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                                <Rocket className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-semibold text-blue-600">
                                    Limited Combo Offer
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                                Launch Your{" "}
                                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                    Python + AI + DevOps
                                </span>{" "}
                                Career
                            </h2>

                            {/* Subtitle */}
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                                Build AI-powered applications. Deploy to AWS. Automate everything.
                                Become industry-ready in just {courseDetails.duration}.
                            </p>

                            {/* Pricing Card */}
                            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto mb-10">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">

                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-bold text-gray-900">
                                            {courseDetails.fee}
                                        </div>
                                        <div className="text-gray-500 line-through">
                                            {courseDetails.originalFee}
                                        </div>
                                    </div>

                                    <div className="text-center sm:text-right">
                                        <div className="text-sm text-gray-500">
                                            Next Batch Starts
                                        </div>
                                        <div className="text-lg font-bold text-blue-600">
                                            {courseDetails.nextBatch}
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
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

                                {/* Scarcity Line */}
                                <div className="mt-6 text-sm text-gray-500 text-center">
                                    Only {courseDetails.seatsLeft} seats available
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
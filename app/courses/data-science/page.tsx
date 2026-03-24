"use client";

import {
    Code2,
    Clock,
    Users,
    CheckCircle,
    ArrowRight,
    BookOpen,
    Briefcase,
    Cpu,
    TrendingUp,
    Database,
    Brain,
    BarChart3,
    FileCode,
    Award,
    Target,
    Rocket,
    Layout,
    Server
} from "lucide-react";

import Link from "next/link";
import { useGlobal } from "@/app/providers";

export default function DataScienceCoursePage() {

    const { t, price, originalPrice } = useGlobal();

    const courseDetails = {
        title: "Data Science & AI Development",
        subtitle:
            "Master Data Science, Machine Learning, and AI. Build intelligent applications using real-world datasets.",
        description:
            "Become an expert in Data Science using Python, ML, Deep Learning, NLP, and Computer Vision.",
        duration: "6 Weeks",
        level: "Beginner to Professional",
        nextBatch: "March 10, 2026",
        seatsLeft: "10",
        rating: "4.9",
    };

    const modules = [

        {
            title: "Python Programming",
            topics: [
                "Introduction to Python",
                "Library functions",
                "Datatypes & Operators",
                "Control statements",
                "Functions",
                "Object-Oriented Programming"
            ],
            icon: <Code2 className="w-5 h-5" />,
            duration: "3 Weeks",
            projects: 2
        },

        {
            title: "Data Science Fundamentals",
            topics: [
                "Data Analysis",
                "NumPy Fundamentals",
                "Pandas for Data Processing",
                "Statistics",
                "Data Visualization with Seaborn"
            ],
            icon: <BarChart3 className="w-5 h-5" />,
            duration: "3 Weeks",
            projects: 3
        },

        {
            title: "AI & Machine Learning",
            topics: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision"
            ],
            icon: <Brain className="w-5 h-5" />,
            duration: "2 Weeks",
            projects: 4
        },

        {
            title: "Tools & Deployment",
            topics: [
                "Jupyter Notebook",
                "Model Training",
                "Real-world AI Projects",
                "Deployment"
            ],
            icon: <Server className="w-5 h-5" />,
            duration: "1 Week",
            projects: 2
        }

    ];

    const benefits = [

        {
            icon: <Award className="w-5 h-5" />,
            text: "Industry Recognized Certification"
        },

        {
            icon: <Clock className="w-5 h-5" />,
            text: "120+ Hours of Learning"
        },

        {
            icon: <FileCode className="w-5 h-5" />,
            text: "10+ Real-world Projects"
        },

        {
            icon: <Users className="w-5 h-5" />,
            text: "1:1 Expert Mentorship"
        }

    ];

    const outcomes = [

        "Analyze real-world datasets",

        "Build Machine Learning models",

        "Build Deep Learning systems",

        "Create NLP applications",

        "Build Computer Vision apps",

        "Deploy AI models",

        "Work with Pandas and NumPy",

        "Become job-ready Data Scientist"

    ];

    const tools = [

        { name: "Python", icon: <Code2 className="w-4 h-4" /> },

        { name: "NumPy", icon: <Database className="w-4 h-4" /> },

        { name: "Pandas", icon: <Database className="w-4 h-4" /> },

        { name: "Scikit-Learn", icon: <Cpu className="w-4 h-4" /> },

        { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },

        { name: "Jupyter Notebook", icon: <FileCode className="w-4 h-4" /> },

        { name: "Seaborn", icon: <BarChart3 className="w-4 h-4" /> },

        { name: "Matplotlib", icon: <BarChart3 className="w-4 h-4" /> }

    ];


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": "Data Science & Machine Learning Course",
                        "description": "Become a Data Scientist by learning Python, Data Analysis, Machine Learning, Deep Learning, and real-world data projects.",
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "ArivuOn Academy",
                            "url": "https://academy.arivuon.in"
                        },
                        "url": "https://academy.arivuon.in/courses/data-science",
                        "image": "https://academy.arivuon.in/og-image.png",
                        "inLanguage": "en",
                        "availableLanguage": "en",
                        "educationalLevel": "Beginner to Advanced",
                        "teaches": [
                            "Python for Data Science",
                            "Data Analysis",
                            "Pandas",
                            "NumPy",
                            "Data Visualization",
                            "Machine Learning",
                            "Deep Learning",
                            "Artificial Intelligence",
                            "Statistics for Data Science"
                        ],
                        "courseMode": "online",
                        "isAccessibleForFree": false,
                        "offers": {
                            "@type": "Offer",
                            "category": "Paid",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock",
                            "url": "https://academy.arivuon.in/courses/data-science"
                        },
                        "hasCourseInstance": {
                            "@type": "CourseInstance",
                            "courseMode": "online",
                            "courseWorkload": "PT15H"
                        }
                    })
                }}
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9398KXWC97"></script>

            {/* 3. Google Tag Manager - Inline Script (The Fix) */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9398KXWC97');
        `,
                }}
            />

            <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">




                {/* HERO SECTION */}
                <section className="relative pt-8 pb-1 overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />

                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-60" />


                    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">

                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-12 items-center">


                                {/* LEFT */}
                                <div>

                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">

                                        <TrendingUp className="w-4 h-4 text-blue-500" />

                                        <span className="text-sm font-semibold text-indigo-600">
                                            High-Demand Course
                                        </span>

                                    </div>


                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">

                                        Data Science &

                                        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                            {" "}AI
                                        </span>

                                    </h1>


                                    <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                                        {courseDetails.subtitle}
                                    </p>



                                    {/* STATS */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">


                                        <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow text-center">

                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {courseDetails.duration}
                                            </div>

                                            <div className="text-sm text-gray-600">
                                                Duration
                                            </div>

                                        </div>



                                        <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow text-center">

                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {courseDetails.level}
                                            </div>

                                            <div className="text-sm text-gray-600">
                                                Level
                                            </div>

                                        </div>


                                    </div>



                                    {/* BUTTON */}
                                    <Link
                                        href="/contact"
                                        className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                                    >

                                        Enroll Now

                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                                    </Link>


                                </div>




                                {/* RIGHT PRICE CARD */}
                                <div className="relative">

                                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20" />

                                    <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">


                                        <div className="flex items-center justify-between mb-6">

                                            <div>

                                                <div className="text-4xl font-bold text-gray-900">
                                                    {price}
                                                </div>

                                                <div className="text-sm text-gray-500 line-through">
                                                    {originalPrice}
                                                </div>

                                            </div>


                                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-4 py-2 rounded-full">
                                                25% OFF
                                            </div>

                                        </div>




                                        {/* BENEFITS */}
                                        <div className="space-y-4 mb-6">

                                            {benefits.map((benefit, index) => (

                                                <div key={index} className="flex items-center gap-3">

                                                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">

                                                        <div className="text-blue-500">
                                                            {benefit.icon}
                                                        </div>

                                                    </div>

                                                    <span className="text-gray-700">
                                                        {benefit.text}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>



                                        {/* BATCH */}
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-2xl p-4 mb-6">

                                            <div className="flex items-center justify-between mb-2">

                                                <span className="font-semibold text-gray-900">
                                                    Next Batch Starts
                                                </span>

                                                <span className="font-bold text-indigo-600">
                                                    {courseDetails.nextBatch}
                                                </span>

                                            </div>


                                            <div className="flex items-center gap-2 text-sm text-gray-600">

                                                <div className="w-full bg-gray-200 rounded-full h-2">

                                                    <div
                                                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                                                        style={{ width: "75%" }}
                                                    />

                                                </div>

                                                <span className="font-semibold">
                                                    {courseDetails.seatsLeft} seats left
                                                </span>

                                            </div>

                                        </div>



                                        <Link
                                            href="/contact"
                                            className="block text-center py-3 bg-gray-50 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-orange-300 hover:bg-blue-50 transition-all duration-300"
                                        >

                                            Book Free Demo Class

                                        </Link>


                                    </div>

                                </div>


                            </div>
                            {/* Tools & Technologies */}
                            <section className="py-5 bg-white">
                                <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                                    <div className="max-w-6xl mx-auto">

                                        <div className="text-center mb-12">

                                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-200 rounded-full px-4 py-2 mb-4">
                                                <Cpu className="w-4 h-4 text-blue-500" />
                                                <span className="text-sm font-semibold text-indigo-600">
                                                    Tech Stack
                                                </span>
                                            </div>

                                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                                                Master the{" "}
                                                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                                    Data Science Stack
                                                </span>
                                            </h2>

                                        </div>


                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

                                            {tools.map((tool, index) => (

                                                <div
                                                    key={index}
                                                    className="group flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                                                >

                                                    <div className="p-2 bg-blue-50 rounded-lg">
                                                        <div className="text-blue-500">
                                                            {tool.icon}
                                                        </div>
                                                    </div>

                                                    <span className="font-medium text-gray-900">
                                                        {tool.name}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>


                                        {/* stats block */}
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-3xl p-3">

                                            <div className="grid md:grid-cols-3 gap-8">

                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                                        12+
                                                    </div>
                                                    <div className="text-gray-600">
                                                        Real Projects
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                                        120+
                                                    </div>
                                                    <div className="text-gray-600">
                                                        Hours of Learning
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                                        1:1
                                                    </div>
                                                    <div className="text-gray-600">
                                                        Mentorship Sessions
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </section>

                            {/* Learning Outcomes */}
                            <section className=" bg-white">

                                <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

                                    <div className="max-w-6xl mx-auto">

                                        <div className="grid lg:grid-cols-2 gap-16 items-center">


                                            {/* LEFT */}
                                            <div>

                                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6">
                                                    <Target className="w-4 h-4 text-blue-500" />
                                                    <span className="text-sm font-semibold text-indigo-600">
                                                        What You'll Achieve
                                                    </span>
                                                </div>


                                                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">

                                                    Become a{" "}
                                                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                                        Data Scientist
                                                    </span>

                                                </h2>


                                                <div className="space-y-4">

                                                    {outcomes.map((outcome, index) => (

                                                        <div key={index} className="flex items-start gap-3">

                                                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">

                                                                <CheckCircle className="w-4 h-4 text-white" />

                                                            </div>

                                                            <span className="text-gray-700">
                                                                {outcome}
                                                            </span>

                                                        </div>

                                                    ))}

                                                </div>


                                            </div>


                                            {/* RIGHT CARD */}
                                            <div className="relative">

                                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-10" />

                                                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-2 text-white">

                                                    <div className="text-center mb-8">

                                                        <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-400" />

                                                        <h3 className="text-2xl font-bold mb-2">
                                                            Career Outcomes
                                                        </h3>

                                                        <p className="text-gray-300">
                                                            What graduates achieve
                                                        </p>

                                                    </div>


                                                    <div className="space-y-1">

                                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                            <span className="text-gray-300">Avg. Salary Hike</span>
                                                            <span className="text-2xl font-bold text-blue-400">85%</span>
                                                        </div>

                                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                            <span className="text-gray-300">Project Completion</span>
                                                            <span className="text-2xl font-bold text-blue-400">98%</span>
                                                        </div>

                                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                            <span className="text-gray-300">Industry Demand</span>
                                                            <span className="text-2xl font-bold text-indigo-500">Extremely High</span>
                                                        </div>

                                                    </div>


                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </section>


                        </div>

                    </div>

                </section>

            </div>
        </>

    );

}

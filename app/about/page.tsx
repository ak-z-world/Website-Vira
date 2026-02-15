"use client";

import { Users, Target, Award, Globe, Crown, Cpu, CheckCircle, Sparkles, ArrowRight, ChevronRight, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";
// import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mission',
      description: 'Empowering individuals with cutting-edge tech skills that transform careers and drive innovation.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Industry-leading education with uncompromising quality standards.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Global network of learners, mentors, and industry leaders.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuous curriculum evolution matching industry trends.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Founded', description: 'Launched with Python courses', highlight: true },
    { year: '2025', title: 'Expansion', description: 'Added DevOps & React programs' },
    { year: '2026', title: 'Global', description: 'International online batches launched', highlight: true }
  ];


  const leadership = [
    {
      icon: <Crown className="w-7 h-7" />,
      initials: 'S',
      name: 'Shiva Vignesh',
      role: 'Founder & CEO',
      bio: ' 15+ years in software development, DevOps Specialist',
      expertise: ['Cloud Architecture', 'DevOps']
    },
    {
      icon: <Crown className="w-7 h-7" />,
      initials: 'S',
      name: 'Arun Kumar',
      role: 'Co-Founder & CTO',
      bio: 'Full Stack Ai Developer, React Expert',
      expertise: ['python', 'React', 'Full Stack', 'AI', 'ML', 'Deep Learning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-50" />

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">Premium Tech Education</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              About <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Vira Academy</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're redefining tech education through immersive, industry-aligned programs that bridge
              the gap between theoretical knowledge and real-world application.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Learning Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                Explore Programs
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones + Leadership Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="section-padding max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Journey & Leadership
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Milestones that shaped us and the people driving our vision
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Animated Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.3 }
                }
              }}
              className="relative"
            >

              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 to-orange-500 rounded-full" />

              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="relative pl-16 mb-12"
                >
                  {/* Dot */}
                  <div className={`absolute left-3 w-6 h-6 rounded-full ${item.highlight
                    ? "bg-orange-500 shadow-lg shadow-orange-400/40"
                    : "bg-gray-300"
                    }`} />

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="text-orange-600 font-bold text-xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Leadership Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } }
              }}
              className="grid gap-8"
            >
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.04 }}
                  className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-3xl opacity-40 pointer-events-none" />

                  <div className="relative flex gap-6 items-start">

                    <motion.div
                      animate={{ rotate: [0, 6, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="relative w-16 h-16 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 blur-md opacity-40" />

                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-xl border border-white/20">
                        {leader.icon}
                      </div>
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold">{leader.name}</h3>
                      <p className="text-orange-600 font-medium mb-2">{leader.role}</p>
                      <p className="text-gray-600 mb-4">{leader.bio}</p>

                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>


      {/* Stats Grid */}
      {/* <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <div className="text-orange-500">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Our Evolution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                Redefining <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Tech Education
                </span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Founded in 2024 by industry veterans, Vira Academy emerged from a critical insight:
                  traditional education fails to equip students with practical, industry-relevant skills.
                </p>
                <p className="leading-relaxed">
                  Starting with a single Python and Devops course in a modest classroom, we've evolved into a
                  comprehensive training ecosystem. Our growth is fueled by relentless focus on
                  project-based learning and continuous curriculum innovation.
                </p>
                <p className="leading-relaxed">
                  Today, we stand as a beacon of excellence in tech education, preparing students
                  not just for jobs, but for impactful careers in technology.
                </p>
              </div>

            </div>

            <div className="relative flex justify-center items-center perspective-[1200px]">

  {/* Outer energy field */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="absolute w-[600px] h-[600px] rounded-full border border-orange-400/20"
  />

  {/* Inner rotating ring */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    className="absolute w-[480px] h-[480px] rounded-full border border-orange-500/30"
  />

  {/* Glow core */}
  <div className="absolute w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />

  {/* Main holographic console */}
  <motion.div
    initial={{ opacity: 0, scale: 0.85, rotateX: 10 }}
    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
    transition={{ duration: 1.2 }}
    whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
    className="relative bg-black/70 backdrop-blur-xl border border-orange-500/40 rounded-3xl shadow-[0_0_60px_rgba(255,122,30,0.25)] overflow-hidden"
  >

    {/* Animated grid background */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,122,30,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,30,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

    {/* Scanner beam */}
    <motion.div
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent blur-md"
    />

    {/* Certificate hologram */}
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="relative p-10"
    >
      <img
        src="/certificate.png"
        alt="Certificate"
        className="w-[420px] rounded-2xl shadow-[0_0_40px_rgba(255,122,30,0.35)]"
      />
    </motion.div>

  </motion.div>

  {/* Floating particles */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    className="absolute w-[700px] h-[700px] pointer-events-none"
  >
    <div className="absolute top-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full blur-sm" />
    <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-orange-500 rounded-full blur-sm" />
    <div className="absolute left-10 top-1/3 w-2 h-2 bg-orange-300 rounded-full blur-sm" />
    <div className="absolute right-10 top-1/4 w-2 h-2 bg-orange-400 rounded-full blur-sm" />
  </motion.div>

</div>


            {/* <div className="relative">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full blur-3xl" />
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                      <div className="text-gray-600">Students Transformed</div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                      <div className="text-gray-600">Industry Experts</div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">1200+</div>
                      <div className="text-gray-600">Real Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-orange-600">Our Principles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Core <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              The foundation of everything we build at Vira Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 relative`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* <Testimonials/> */}




      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-3xl opacity-50" />

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">Ready to Transform?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
              Begin Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Tech Journey
              </span> Today
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands who've accelerated their careers with Vira Academy's industry-leading programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-10 py-5 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Next batch starts in 2 weeks • Limited seats available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
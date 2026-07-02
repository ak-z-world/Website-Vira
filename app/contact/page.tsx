"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  ChevronRight,
  HelpCircle,
  Lock,
  PhoneCall,
  Zap,
  Target,
  Plus,
  Minus
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    website: "", // honeypot
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const courses = [
    "Python AI AWS Devops Combo",
    "Python Development",
    "DevOps Engineering",
    "React Development",
    "Data Science",
    "Full Stack Development",
    "Career Consultation",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
          website: "",
        });
        setIsSubmitted(true);
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactOptions = [
    {
      icon: <MessageSquare className="w-5 h-5 text-[#a357c7]" />,
      title: "WhatsApp",
      subtitle: "Chat with us on WhatsApp",
      action: "#",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#a357c7]" />,
      title: "Email Us",
      subtitle: "hello@arvuonacademy.com",
      action: "mailto:hello@arvuonacademy.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#a357c7]" />,
      title: "Office Hours",
      subtitle: "Mon - Sat : 9AM - 7PM",
      action: null,
    },
  ];

  const faqs = [
    {
      question: 'What programs does ArivuOn Academy offer?',
      answer: 'We offer a range of industry-aligned programs including Python Development, DevOps Engineering, React Development, and Full Stack Development, all designed to prepare you for the global job market.',
    },
    {
      question: 'How can I enroll in a course?',
      answer: 'You can easily enroll by selecting your desired program from the Courses page and clicking the "Enroll Now" button, or by scheduling a free career session with our counselors.',
    },
    {
      question: 'Are the courses online or offline?',
      answer: 'All our core courses are fully online. Students can learn from anywhere in the world through live sessions and structured digital learning materials.',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! While we do not guarantee job placements, we provide comprehensive career assistance including resume building, portfolio guidance, and mock interview preparation.',
    },
  ];

  const heroFeatures = [
    { icon: <PhoneCall className="w-4 h-4" />, label: "Friendly Support" },
    { icon: <Zap className="w-4 h-4" />, label: "Quick Response" },
    { icon: <Target className="w-4 h-4" />, label: "Expert Guidance" },
    { icon: <Lock className="w-4 h-4" />, label: "Your Success" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans text-slate-800 pb-24 overflow-hidden">

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] mb-8 border border-white">
            <MessageSquare className="w-4 h-4 text-[#a357c7]" />
            <span className="text-sm font-semibold text-[#a357c7]">Get in Touch</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            Let's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a357c7] to-[#cb78f1]">Connect</span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed">
            We're here to help you navigate your tech career journey. Reach out to us through any of the channels below.
          </p>

          {/* Hero Feature Pills */}
          <div className="flex flex-wrap gap-4">
            {heroFeatures.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-[6px_6px_16px_#e6e9f5,-6px_-6px_16px_#ffffff]">
                <div className="w-8 h-8 rounded-full bg-[#F8F9FE] flex items-center justify-center text-[#a357c7] shadow-inner">
                  {feat.icon}
                </div>
                <span className="text-xs font-bold text-slate-600">{feat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero 3D Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-end"
        >
          <div className="w-full max-w-[600px] aspect-square relative">
            <Image
              src="/assets/icons/image20.png"
              alt="3D Headphones Illustration"
              fill
              className="object-contain mix-blend-multiply" // mix-blend helps if the jpg has a white background
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-10 shadow-[12px_12px_36px_#e6e9f5,-12px_-12px_36px_#ffffff] border border-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#cb78f1] to-[#a357c7]"></div>
              <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
            </div>
            <p className="text-slate-500 mb-8">Fill out the form and our team will get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for spam prevention */}
              <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#F8F9FE] border-transparent rounded-2xl py-3.5 px-5 outline-none shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] focus:ring-2 focus:ring-[#a357c7]/40 transition-all text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hello@yourmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F8F9FE] border-transparent rounded-2xl py-3.5 px-5 outline-none shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] focus:ring-2 focus:ring-[#a357c7]/40 transition-all text-slate-700 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 (00000 00000)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#F8F9FE] border-transparent rounded-2xl py-3.5 px-5 outline-none shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] focus:ring-2 focus:ring-[#a357c7]/40 transition-all text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Course Interest</label>

                  <div className="relative">
                    {/* Neomorphic Dropdown Button */}
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-[#F8F9FE] border-transparent rounded-2xl py-3.5 px-5 cursor-pointer shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] transition-all text-slate-700 flex justify-between items-center select-none"
                    >
                      <span className={formData.course ? "text-slate-700 font-medium" : "text-slate-400"}>
                        {formData.course || "Select your interest"}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 pointer-events-none ${isDropdownOpen ? "-rotate-90 text-[#8B5CF6]" : "rotate-90"}`}
                      />
                    </div>

                    {/* Neomorphic Dropdown Menu */}
                    {isDropdownOpen && (
                      <>
                        {/* Invisible overlay to close dropdown when clicking outside */}
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setIsDropdownOpen(false)}
                        />

                        <div className="absolute top-full left-0 w-full mt-4 bg-[#F8F9FE] rounded-[24px] p-3 shadow-[12px_12px_36px_#e6e9f5,-12px_-12px_36px_#ffffff] border border-white/60 z-50 origin-top animate-in fade-in slide-in-from-top-4 duration-200">
                          <ul className="max-h-60 overflow-y-auto space-y-1 scrollbar-hide">
                            {courses.map((course, idx) => (
                              <li
                                key={idx}
                                onClick={() => {
                                  // Pass a synthetic event to your existing handleChange function
                                  handleChange({
                                    target: { name: 'course', value: course }
                                  } as any);
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-4 py-3 rounded-xl cursor-pointer text-sm transition-all duration-200 ${formData.course === course
                                    ? "bg-[#F8F9FE] text-[#8B5CF6] font-bold shadow-[inset_3px_3px_6px_#e6e9f5,inset_-3px_-3px_6px_#ffffff]"
                                    : "text-slate-600 font-medium hover:bg-[#F8F9FE] hover:shadow-[inset_2px_2px_5px_#e6e9f5,inset_-2px_-2px_5px_#ffffff] hover:text-[#8B5CF6]"
                                  }`}
                              >
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your query or how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#F8F9FE] border-transparent rounded-2xl py-3.5 px-5 outline-none shadow-[inset_4px_4px_10px_#e6e9f5,inset_-4px_-4px_10px_#ffffff] focus:ring-2 focus:ring-[#a357c7]/40 transition-all text-slate-700 placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#a357c7] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[4px_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[6px_10px_24px_rgba(99,102,241,0.4)] transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-5 h-5 ml-1" />}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
                <Lock className="w-4 h-4" />
                <span>We respect your privacy. Your information is safe with us.</span>
              </div>
            </form>
          </div>

          {/* Right: Contact Info & Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Options Card */}
            <div className="bg-white rounded-[40px] p-8 shadow-[12px_12px_36px_#e6e9f5,-12px_-12px_36px_#ffffff] border border-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <h2 className="text-lg font-bold text-slate-900">Contact Options</h2>
              </div>

              <div className="space-y-4">
                {contactOptions.map((opt, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-[#F8F9FE] rounded-2xl shadow-[inset_2px_2px_6px_#e6e9f5,inset_-2px_-2px_6px_#ffffff] hover:bg-white transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] shrink-0">
                        {opt.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{opt.title}</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{opt.subtitle}</p>
                      </div>
                    </div>
                    {opt.action && (
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#a357c7] transition-colors" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Immediate Help Card with Image */}
            <div className="relative bg-gradient-to-br from-[#8B5CF6] to-[#a357c7] rounded-[40px] p-8 md:p-10 shadow-[12px_12px_36px_#e6e9f5,-12px_-12px_36px_#ffffff] border border-white/40 overflow-hidden flex items-center">

              {/* Text Content */}
              <div className="relative z-10 max-w-[65%]">
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-2 tracking-tight">Need immediate help?</h3>
                <p className="text-white/90 text-sm md:text-base mb-3">Call us directly and speak with our experts.</p>

                <div className="mb-1">
                  <p className="text-3xl md:text-2xl font-extrabold text-white tracking-wide">+91 94457 70190</p>
                </div>
                <p className="text-white/80 text-xs md:text-sm font-medium">Available Mon - Sat : 9AM - 7PM</p>
              </div>

              {/* 3D Phone Image positioned perfectly on the right */}
              <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
                <Image
                  src="/assets/icons/image7.png"
                  alt="3D Phone Icon"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust / Logos Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="border-y border-slate-200 py-10 flex flex-col items-center">
          <p className="text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest text-center">
            Trusted by thousands of aspiring tech professionals
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulating the logos from the design */}
            <span className="text-2xl font-bold font-serif">Google</span>
            <span className="text-2xl font-bold flex items-center gap-2"><div className="w-5 h-5 grid grid-cols-2 gap-0.5"><div className="bg-current"></div><div className="bg-current"></div><div className="bg-current"></div><div className="bg-current"></div></div> Microsoft</span>
            <span className="text-2xl font-bold italic">aws</span>
            <span className="text-2xl font-bold border-2 border-current rounded-full px-2 py-1">DELL</span>
            <span className="text-2xl font-bold text-red-600">A Adobe</span>
            <span className="text-2xl font-black italic tracking-tighter">NVIDIA</span>
          </div>
        </div>
      </section>

      {/* FAQs & Support Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: FAQs */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[4px_4px_10px_#e6e9f5,-4px_-4px_10px_#ffffff] mb-6 border border-white">
              <HelpCircle className="w-4 h-4 text-[#a357c7]" />
              <span className="text-sm font-semibold text-[#a357c7]">Help & Support</span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Frequently <br /> Asked Questions
            </h2>
            <p className="text-slate-500 mb-10">Questions? We've got answers.</p>

            <div className="space-y-4 mb-8">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-[6px_6px_16px_#e6e9f5,-6px_-6px_16px_#ffffff] border border-white overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-[#F8F9FE] text-[#a357c7] shadow-inner' : 'bg-white text-slate-400 shadow-[2px_2px_6px_#e6e9f5,-2px_-2px_6px_#ffffff]'}`}>
                      {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mx-6 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-white text-slate-700 rounded-xl font-bold flex items-center gap-2 shadow-[4px_4px_12px_#e6e9f5,-4px_-4px_12px_#ffffff] hover:shadow-[inset_2px_2px_6px_#e6e9f5,inset_-2px_-2px_6px_#ffffff] transition-all">
              View All FAQs
              <ChevronRight className="w-4 h-4 text-[#a357c7]" />
            </button>
          </div>

          {/* Right: Graphic Card - Ultra Realistic Neomorphic Style */}
          <div className="bg-[#F8F9FE] rounded-[40px] p-10 shadow-[14px_14px_32px_#d1d9e6,-14px_-14px_32px_#ffffff,inset_1px_1px_3px_rgba(255,255,255,0.7),inset_-1px_-1px_3px_rgba(209,217,230,0.2)] border border-white/60 text-center flex flex-col items-center relative overflow-hidden transition-all duration-500 hover:shadow-[16px_16px_36px_#c8d0e0,-16px_-16px_36px_#ffffff]">

            {/* Optional: Subtle ambient glow behind the image to add depth */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-38 h-38 bg-gradient-to-br from-[#e0e4ff] to-[#f0f3ff] blur-3xl rounded-full z-0 pointer-events-none"></div>

            <div className="w-full max-w-[450px] aspect-[4/3] relative mb--10 z-10 drop-shadow-[0_20px_25px_rgba(139,92,246,0.15)]">
              <Image
                src="/assets/icons/image21.png"
                alt="3D Envelope Graphic"
                fill
                className="object-contain hover:-translate-y-2 transition-transform duration-500"
              /* Removed mix-blend-multiply to keep the 3D asset glossy and pristine */
              />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-800 mb-4 z-10 tracking-tight drop-shadow-sm">
              We're here to help you succeed
            </h3>

            <p className="text-slate-500 mb-10 max-w-[300px] text-sm leading-relaxed z-10 font-medium">
              Have a question or need guidance? Our team is ready to support you on your journey.
            </p>

            {/* Tactile Gradient Button: Raised by default, presses inward on hover */}
            <button className="z-10 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#a357c7] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff,0_10px_20px_rgba(139,92,246,0.25)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.2),0_4px_8px_rgba(139,92,246,0.2)] hover:scale-[0.98] active:scale-95 transition-all duration-300 border-t border-white/30 group">
              Start a Live Chat
              <MessageSquare className="w-5 h-5 ml-1 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
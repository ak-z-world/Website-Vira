"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Calendar,
  Users,
  Award,
  HelpCircle,
  Building,
  Globe,
  Smartphone,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    website: "", // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    "Python Development",
    "DevOps Engineering",
    "React Development",
    "Data Science",
    "Full Stack Development",
    "Career Consultation",
    "Other",
  ];

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Whatsapp Support",
      details: ["+91 96773 77316"],
      subtitle: "Available 9 AM - 7 PM",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/50",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["viraacademy.info@gmail.com"],
      subtitle: "Response within 24 hours",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100/50",
    },

    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9 AM - 7 PM"],
      subtitle: "Sunday: Closed",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100/50",
    },
  ];

  const faqs = [
    {
      question: 'What is Vira Academy?',
      answer: 'Vira Academy is an online software training platform that provides career-focused courses designed to help students build practical technical skills and prepare for the global job market.',
      category: 'general'
    },
    {
      question: 'Are the courses online or offline?',
      answer: 'All courses at Vira Academy are fully online. Students can learn from anywhere in the world through live sessions and structured digital learning materials.',
      category: 'courses'
    },
    {
      question: 'Who can enroll in your courses?',
      answer: 'Anyone interested in learning software skills can enroll, including students, fresh graduates, working professionals, and career changers.',
      category: 'enrollment'
    },
    {
      question: 'Do you provide placement guarantees?',
      answer: 'We do not guarantee job placements. However, we provide career assistance such as resume building, portfolio guidance, and mock interview preparation.',
      category: 'career'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-50" />

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">
                Get in Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your tech career? Our admissions team is here
              to guide you through every step of your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="section-padding flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}
                >
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{info.subtitle}</p>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
                <div className="absolute -top-4 left-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-4 py-2 rounded-full">
                    <Send className="w-4 h-4" />
                    Quick Response
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Thank you for contacting Vira Academy. Our admissions team
                      will reach out to you within 24 hours.
                    </p>
                    {/* <div className="flex gap-4 justify-center">
                      <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                      >
                        Browse Courses
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div> */}
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Send us a message
                      </h2>
                      <p className="text-gray-600">
                        Fill out the form below and we'll get back to you as
                        soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            autoComplete="off"
                            tabIndex={-1}
                            style={{ position: "absolute", left: "-9999px" }}
                          />
                          <label className="block text-gray-700 mb-3 font-semibold">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                            placeholder="Arun Kumar"
                          />

                        </div>
                        <div className="group">
                          <label className="block text-gray-700 mb-3 font-semibold">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                            placeholder="akzworld@ak.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-gray-700 mb-3 font-semibold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-gray-700 mb-3 font-semibold">
                            Course Interest
                          </label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300 appearance-none"
                          >
                            <option value="">Select your interest</option>
                            {courses.map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-gray-700 mb-3 font-semibold">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300 resize-none"
                          placeholder="Tell us about your career goals and how we can help..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-5 px-8 rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <Send className="w-5 h-5" />
                            Send Message
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our Privacy
                        Policy. We'll respond within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Quick Action Cards */}
              <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Book a Demo
                        </div>
                        <div className="text-sm text-gray-500">
                          Live course preview
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/courses"
                    className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Zap className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          View Courses
                        </div>
                        <div className="text-sm text-gray-500">
                          Explore programs
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Users className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Admission Process
                        </div>
                        <div className="text-sm text-gray-500">
                          Step-by-step guide
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>



              {/* Support Info */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 border border-orange-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Need Immediate Help?
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For urgent inquiries, call our support line:
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    +91 96773 77316
                  </div>
                  <p className="text-sm text-gray-500">
                    Available 9 AM - 7 PM, Monday to Saturday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">
                  Common Questions
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to the most common questions about our programs and
                admissions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
              >
                View all FAQs
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">
                Ready to Start?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
              Begin Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Tech Transformation
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of successful graduates who started their journey
              with a simple conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
              >
                Talk to Admissions
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

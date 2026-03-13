"use client";
import Image from "next/image";
import {
  Code2,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  Award,
  MessageSquare,
} from "lucide-react";

import Link from "next/link";
import { useGlobal } from "@/app/providers";
import { label } from "framer-motion/client";

const Footer = () => {
  const { language, setLanguage, currency, setCurrency } = useGlobal();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const courses = [
    { label: "Python & Django", href: "/courses/python" },
    { label: "DevOps Engineering", href: "/courses/devops" },
    { label: "React Development", href: "/courses/react" },
    { label: "Data Science", href: "/courses/datasci" },
    { label: "Python + Devops Combo", href: "/courses/python-aws-devops-combo" },
  ];

  return (
    <footer className="relative bg-white border-t border-blue-100 overflow-hidden">

      {/* subtle nebula glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/40 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link href="/" className="flex items-center gap-3 mb-5 group">

              <div className="relative group flex items-center">

  <div className="
    absolute inset-0
    bg-gradient-to-r from-blue-500/20 to-indigo-500/20
    blur-lg
    rounded-full
    opacity-0
    group-hover:opacity-100
    transition duration-500
  "></div>

  <Image
    src="/assets/icons/logo2.png"
    alt="ArivuOn Academy Logo"
    width={200}
    height={80}
    priority
    className="
      relative
      h-12 sm:h-14 md:h-16 lg:h-18
      w-auto

      transition-all duration-500

      group-hover:scale-110
      group-hover:-translate-y-1
      hover:rotate-[2deg]
    "
  />

</div>

              <div>
                <div className="text-xl font-bold text-gray-900">
                  ArivuOn
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-1">
                    Academy
                  </span>
                </div>

                <div className="text-xs text-gray-500">
                  Premium Tech Education
                </div>
              </div>

            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Transform your career with industry-focused programs, expert mentorship,
              real-world projects, and structured placement preparation.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h3 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (

                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition group"
                  >

                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />

                    {link.label}

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* COURSES */}
          <div>

            <h3 className="font-semibold text-gray-900 mb-4">
              Programs
            </h3>

            <ul className="space-y-3">

              {courses.map((course) => (

                <li key={course.label}>

                  <Link
                    href={course.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition group"
                  >

                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />

                    {course.label}

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="font-semibold text-gray-900 mb-4">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>

                <span className="text-gray-600 text-sm">
                  +91 94457 70160
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>

                <span className="text-gray-600 text-sm">
                  info@arivuon.in
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* TRUST BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {[
            {
              icon: <Shield className="w-5 h-5 text-white"/>,
              title: "Secure Learning",
              desc: "Safe & protected learning environment",
            },
            {
              icon: <Award className="w-5 h-5 text-white"/>,
              title: "Certified Programs",
              desc: "Industry-recognized certifications",
            },
            {
              icon: <MessageSquare className="w-5 h-5 text-white"/>,
              title: "Dedicated Support",
              desc: "Continuous mentor assistance",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="flex items-center gap-4 bg-white border border-blue-100 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition"
            >

              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>

              <div>

                <div className="font-semibold text-gray-900 text-sm">
                  {item.title}
                </div>

                <div className="text-xs text-gray-600">
                  {item.desc}
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM BAR */}
        <div className="border-t border-blue-100 pt-6">

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between text-sm">

            {/* Language */}
            <div className="flex gap-4">

              <button
                onClick={() => setLanguage("en")}
                className={`${
                  language === "en"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLanguage("ar")}
                className={`${
                  language === "ar"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Arabic
              </button>

            </div>


            {/* Currency */}
            <div className="flex flex-wrap gap-2">

              {[
                { code: "INR", symbol: "₹" },
                { code: "USD", symbol: "$" },
                { code: "EUR", symbol: "€" },
                { code: "AED", symbol: "د.إ" },
                { code: "KWD", symbol: "د.ك" },
              ].map((cur) => (

                <button
                  key={cur.code}
                  onClick={() => setCurrency(cur.code)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition
                  ${
                    currency === cur.code
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >

                  {cur.symbol} {cur.code}

                </button>

              ))}

            </div>


            {/* copyright */}
            <div className="text-gray-500 text-center lg:text-right">

              © {new Date().getFullYear()} ArivuOn Academy. All rights reserved.

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
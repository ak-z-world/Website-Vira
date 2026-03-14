"use client";
import Image from "next/image";
import {
  Mail,
  Phone,
  ArrowRight,
  Shield,
  Award,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useGlobal } from "@/app/providers";

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
    { label: "Data Science", href: "/courses/data-science" },
    { label: "Python + AI + DevOps Combo", href: "/courses/python-ai-aws-devops-combo" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const trustBadges = [
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Secure Learning",
      desc: "Safe & protected learning environment",
    },
    {
      icon: <Award className="w-5 h-5 text-white" />,
      title: "Certified Programs",
      desc: "Industry-recognized certifications",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      title: "Dedicated Support",
      desc: "Continuous mentor assistance",
    },
  ];

  const currencies = [
    { code: "INR", symbol: "₹" },
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "AED", symbol: "د.إ" },
    { code: "KWD", symbol: "د.ك" },
  ];

  return (
    <footer className="relative bg-white border-t border-blue-100 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-2">

            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
                <Image
                  src="/assets/icons/logo2.png"
                  alt="ArivuOn Academy Logo"
                  width={200}
                  height={80}
                  priority
                  className="relative h-12 sm:h-14 w-auto transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-[2deg]"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  ArivuOn
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-1">
                    Academy
                  </span>
                </div>
                <div className="text-xs text-gray-500">Premium Tech Education</div>
              </div>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Transform your career with industry-focused programs, expert mentorship,
              real-world projects, and structured placement preparation.
            </p>

            {/* Legal links shown under brand on mobile & tablet */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 lg:hidden">
              {legalLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-5">
                  <Link
                    href={link.href}
                    className="text-xs text-gray-500 hover:text-blue-600 underline underline-offset-2 transition"
                  >
                    {link.label}
                  </Link>
                  {i < legalLinks.length - 1 && (
                    <span className="text-gray-300 text-xs select-none">|</span>
                  )}
                </span>
              ))}
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    href={course.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
              Contact
            </h3>
            <div className="space-y-3">

              <a href="tel:+919445770160" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-600 text-sm group-hover:text-blue-600 transition">
                  +91 94457 70160
                </span>
              </a>

              <a href="mailto:info@arivuon.in" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-600 text-sm group-hover:text-blue-600 transition">
                  info@arivuon.in
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* ── TRUST BADGES ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {trustBadges.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white border border-blue-100 rounded-xl p-4 sm:p-5 hover:shadow-md hover:border-blue-300 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-blue-100 pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Language toggles */}
            <div className="flex items-center justify-center lg:justify-start gap-1">
              <span className="text-xs text-gray-400 mr-1">Language:</span>
              {["en", "ar"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                    language === lang
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {lang === "en" ? "English" : "Arabic"}
                </button>
              ))}
            </div>

            {/* Currency toggles */}
            <div className="flex flex-wrap justify-center gap-2">
              {currencies.map((cur) => (
                <button
                  key={cur.code}
                  onClick={() => setCurrency(cur.code)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                    currency === cur.code
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {cur.symbol} {cur.code}
                </button>
              ))}
            </div>

            {/* Legal + Copyright */}
            <div className="flex flex-col items-center gap-2 lg:items-end">

              {/* Legal links — desktop only (mobile shown under brand above) */}
              <div className="hidden lg:flex items-center gap-2">
                {legalLinks.map((link, i) => (
                  <span key={link.label} className="flex items-center gap-2">
                    <Link
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-blue-600 underline underline-offset-2 transition"
                    >
                      {link.label}
                    </Link>
                    {i < legalLinks.length - 1 && (
                      <span className="text-gray-300 text-xs select-none">|</span>
                    )}
                  </span>
                ))}
              </div>

              <p className="text-xs text-gray-400 text-center lg:text-right">
                © {new Date().getFullYear()} ArivuOn Academy. All rights reserved.
              </p>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
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
    <footer className="relative bg-[#F8F9FE] border-t border-white/80 shadow-[0_-10px_30px_rgba(220,221,227,0.5)] overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#8B5CF6]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#6366F1]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-0 mb-3 group" aria-label="Crack Leap Academy Home">
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#6366F1]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
                <Image
                  src="/name_logo.png"
                  alt="Crack Leap Academy Logo"
                  width={200}
                  height={100}
                  priority
                  className="relative h-16 sm:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-medium">
              Transform your career with industry-focused programs, expert mentorship,
              real-world projects, and structured placement preparation.
            </p>

            {/* Legal links shown under brand on mobile & tablet */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 lg:hidden">
              {legalLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-3">
                  <Link
                    href={link.href}
                    className="text-xs font-semibold text-slate-500 hover:text-[#8B5CF6] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < legalLinks.length - 1 && (
                    <span className="text-slate-300 text-xs select-none">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm sm:text-base tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#8B5CF6] transition-colors group font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#8B5CF6]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm sm:text-base tracking-tight">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    href={course.href}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#8B5CF6] transition-colors group font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#8B5CF6]" />
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm sm:text-base tracking-tight">
              Contact
            </h3>
            <div className="space-y-3">
              <a href="tel:+919445770160" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#F4F5FA] shadow-[3px_3px_7px_#dcdde3,-3px_-3px_7px_#ffffff] flex items-center justify-center shrink-0 group-hover:shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff] transition-all">
                  <Phone className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <span className="text-slate-600 text-sm font-medium group-hover:text-[#8B5CF6] transition-colors">
                  +91 94457 70160
                </span>
              </a>

              <a href="mailto:info@arivuon.in" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#F4F5FA] shadow-[3px_3px_7px_#dcdde3,-3px_-3px_7px_#ffffff] flex items-center justify-center shrink-0 group-hover:shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff] transition-all">
                  <Mail className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <span className="text-slate-600 text-sm font-medium group-hover:text-[#8B5CF6] transition-colors">
                  info@arivuon.in
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* ── TRUST BADGES ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {trustBadges.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#F4F5FA] border border-white/80 rounded-2xl p-4 sm:p-5 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#d0d2dc,-8px_-8px_18px_#ffffff] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                {item.icon}
              </div>
              <div>
                <div className="font-bold text-slate-800 text-sm">{item.title}</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-slate-200/80 pt-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Language toggles */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5">
              <span className="text-xs font-semibold text-slate-500 mr-1">Language:</span>
              {["en", "ar"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                    language === lang
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-[2px_2px_6px_rgba(139,92,246,0.3)]"
                      : "bg-[#F4F5FA] text-slate-600 shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] hover:text-[#8B5CF6]"
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
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    currency === cur.code
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-[2px_2px_6px_rgba(139,92,246,0.3)]"
                      : "bg-[#F4F5FA] text-slate-600 shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] hover:text-[#8B5CF6]"
                  }`}
                >
                  {cur.symbol} {cur.code}
                </button>
              ))}
            </div>

            {/* Legal + Copyright */}
            <div className="flex flex-col items-center gap-2 lg:items-end">
              {/* Legal links — desktop only */}
              <div className="hidden lg:flex items-center gap-3">
                {legalLinks.map((link, i) => (
                  <span key={link.label} className="flex items-center gap-3">
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-slate-500 hover:text-[#8B5CF6] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {i < legalLinks.length - 1 && (
                      <span className="text-slate-300 text-xs select-none">|</span>
                    )}
                  </span>
                ))}
              </div>

              <p className="text-xs font-medium text-slate-400 text-center lg:text-right">
                © {new Date().getFullYear()} Crack Leap Academy. All rights reserved.
              </p>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
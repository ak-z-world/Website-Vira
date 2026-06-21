'use client';

import Link from 'next/link';
import { Sparkles, ArrowLeft, Bell } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] relative flex items-center justify-center overflow-hidden bg-[#FAFAFA] rounded-3xl m-4 sm:m-6 lg:m-8 border border-[#E2E8F0] shadow-sm">
      
      {/* ── BACKGROUND MESH GRADIENTS ── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] animate-pulse mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1E3A8A]/10 rounded-full blur-[100px] animate-pulse delay-1000 mix-blend-multiply pointer-events-none"></div>

      {/* ── CONTENT CONTAINER ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        
        {/* Status Pill */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#2563EB]/20 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          <span className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wider">
            In Development
          </span>
        </div>

        {/* Hero Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight mb-6 leading-[1.1]">
          Something <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]">
            Extraordinary
          </span>{' '}
          is coming.
        </h1>

        <p className="text-lg sm:text-xl text-[#64748B] mb-12 max-w-2xl leading-relaxed">
          We are actively crafting this page to bring you an unparalleled educational experience. Our architects are currently building something special for you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[#334155] font-semibold shadow-sm hover:bg-[#F8FAFF] hover:border-[#2563EB]/30 hover:text-[#1E3A8A] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => alert("Notification system coming soon!")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1E3A8A] text-[#FFFFFF] font-semibold shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
          >
            <Bell className="w-5 h-5" />
            Notify Me When Ready
          </button>
        </div>

      </div>
    </div>
  );
}

export default ComingSoon;
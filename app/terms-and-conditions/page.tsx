'use client';

import { Shield, FileText, CheckCircle, Users, Globe, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <FileText className="w-4 h-4" /> },
    { id: 'placement', title: 'Placement Assistance', icon: <Users className="w-4 h-4" /> },
    { id: 'refund', title: 'Refund Policy', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'conduct', title: 'Student Behavior', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'punctuality', title: 'Punctuality', icon: <Clock className="w-4 h-4" /> },
    { id: 'facilities', title: 'Online Facilities', icon: <Globe className="w-4 h-4" /> },
    { id: 'attendance', title: 'Course Attendance', icon: <Clock className="w-4 h-4" /> },
    { id: 'privacy', title: 'Data Protection', icon: <Shield className="w-4 h-4" /> },
    { id: 'global', title: 'Global Access', icon: <Globe className="w-4 h-4" /> },
    { id: 'holidays', title: 'Public Holidays', icon: <Clock className="w-4 h-4" /> },
    { id: 'resume', title: 'Resume Building', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4F5FA] border border-white/80 rounded-full px-4 py-2 mb-6 shadow-[3px_3px_8px_#dcdde3,-3px_-3px_8px_#ffffff]">
              <Shield className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs sm:text-sm font-bold text-[#8B5CF6]">Legal Policies</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
              Terms & <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">Conditions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              By enrolling in our courses, you agree to abide by the following transparent terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-3">
                  <div className="bg-[#F4F5FA] border border-white/80 rounded-2xl p-4 shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Quick Navigation</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Jump directly to sections
                    </p>
                  </div>

                  <div className="bg-[#F4F5FA] border border-white/80 rounded-2xl p-2 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff]">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl mb-1 text-left transition-all duration-300 ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-md font-bold'
                            : 'text-slate-600 hover:text-[#8B5CF6] font-medium'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg ${
                          activeSection === section.id ? 'bg-white/20 text-white' : 'text-[#8B5CF6]'
                        }`}>
                          {section.icon}
                        </div>
                        <span className="text-xs sm:text-sm">{section.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-3">
                <div className="bg-[#F4F5FA] border border-white/80 rounded-3xl shadow-[10px_10px_24px_#dcdde3,-10px_-10px_24px_#ffffff] overflow-hidden">
                  {/* Content Header */}
                  <div className="border-b border-slate-200/60 p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      Crack Leap Academy Terms & Conditions
                    </h2>
                    <p className="text-slate-600 text-sm font-medium mt-2 leading-relaxed">
                      Welcome to Crack Leap Academy. We thank you for choosing us as your career learning partner for professional software training.
                    </p>
                  </div>

                  {/* Content Sections */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Overview Section */}
                    {activeSection === 'overview' && (
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 bg-white/70 rounded-2xl border border-white/80 shadow-sm">
                          <Shield className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Welcome to Crack Leap Academy</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                              Our mission is to empower students worldwide with career-oriented training, real-world project portfolios, and practical skills to prepare them for the global technology job market.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium mt-3">
                              By enrolling in any of our courses, workshops, or bootcamps, you agree to abide by the policies and expectations detailed below.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Placement Assistance Section */}
                    {activeSection === 'placement' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Placement Assistance</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Crack Leap Academy provides dedicated career guidance and placement preparation but does not guarantee job offers. Career assistance includes resume optimization, GitHub portfolio reviews, technical mock interviews, and recruiter interview referrals.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Refund Policy Section */}
                    {activeSection === 'refund' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                              <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Refund & Cancellation Policy</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Refund requests must be formally submitted to our support team before course batch commencement according to our standard refund schedule. Once access to premium live batches and repository content is provisioned, refunds are handled per the batch timeline policy.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Student Behavior Section */}
                    {activeSection === 'conduct' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-md">
                              <AlertCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Student Behavior & Code of Conduct</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Students are expected to maintain professional, inclusive, and respectful conduct in all live classes, discussion forums, and community channels. Disruptive behavior may result in warnings or suspension without a refund.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Punctuality Section */}
                    {activeSection === 'punctuality' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                              <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Session Punctuality</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Students must attend scheduled online sessions promptly. Recorded sessions are provided for revision, but live interactive participation is strongly encouraged for optimal concept mastery.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Online Facilities Section */}
                    {activeSection === 'facilities' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Use of Online Facilities & IP</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            All proprietary curriculum materials, source code templates, and video lessons are the intellectual property of Crack Leap Academy. Redistribution, unauthorized screen sharing, or public hosting of materials is strictly prohibited.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Course Attendance Section */}
                    {activeSection === 'attendance' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Course Attendance & Milestone Submissions</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            To qualify for graduation certificates and career referral consideration, students must maintain at least 80% attendance and submit all major hands-on project milestones on schedule.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Data Protection Section */}
                    {activeSection === 'privacy' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                              <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Data Protection & Privacy</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Student personal data is encrypted and handled in accordance with modern international data protection standards. Your contact details are never sold or shared with unauthorized third parties.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Global Access Section */}
                    {activeSection === 'global' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Global Access & Supported Currencies</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Crack Leap Academy serves learners globally. Courses can be enrolled using multiple international currencies including INR, USD, EUR, AED, and KWD with secure payment gateways.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Public Holidays Section */}
                    {activeSection === 'holidays' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                              <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Public Holidays</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Classes are typically paused during major national holidays. Any rescheduled sessions will be communicated in advance via your cohort learning channel.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Resume Building Section */}
                    {activeSection === 'resume' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Resume & Portfolio Support</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Mentors assist learners in crafting ATS-compliant resumes, setting up live project deployments on AWS/Vercel, and preparing tailored portfolio talking points for technical recruiter interviews.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Agreement Section */}
                  <div className="border-t border-slate-200/60 p-6 sm:p-8 bg-[#F4F5FA]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center flex-shrink-0 shadow-md">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">Your Enrollment Agreement</h3>
                        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                          By completing enrollment with Crack Leap Academy, you confirm that you have read, understood, and agreed to these terms and conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
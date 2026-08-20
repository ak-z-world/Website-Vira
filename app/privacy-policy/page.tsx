'use client';

import { Shield, Lock, Eye, FileText, Globe, Cookie, Link as LinkIcon, RefreshCw, Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <Shield className="w-4 h-4" /> },
    { id: 'commitment', title: 'Our Commitment', icon: <Lock className="w-4 h-4" /> },
    { id: 'data-collection', title: 'Data We Collect', icon: <Eye className="w-4 h-4" /> },
    { id: 'data-use', title: 'How We Use Data', icon: <FileText className="w-4 h-4" /> },
    { id: 'data-sharing', title: 'Data Sharing', icon: <Globe className="w-4 h-4" /> },
    { id: 'ip', title: 'Intellectual Property', icon: <FileText className="w-4 h-4" /> },
    { id: 'security', title: 'Security Measures', icon: <Lock className="w-4 h-4" /> },
    { id: 'cookies', title: 'Cookies', icon: <Cookie className="w-4 h-4" /> },
    { id: 'links', title: 'External Links', icon: <LinkIcon className="w-4 h-4" /> },
    { id: 'international', title: 'International Users', icon: <Globe className="w-4 h-4" /> },
    { id: 'updates', title: 'Policy Updates', icon: <RefreshCw className="w-4 h-4" /> },
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
              <Lock className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs sm:text-sm font-bold text-[#8B5CF6]">Privacy & Security</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
              Privacy <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              At Crack Leap Academy, your privacy is paramount. This Privacy Policy outlines how we collect, use, encrypt, and protect your personal information.
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
                      Jump to specific policy sections
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
                      Privacy Policy – Crack Leap Academy
                    </h2>
                    <p className="text-slate-600 text-sm font-medium mt-2 leading-relaxed">
                      Effective Date: January 1, 2026. This policy applies to all websites, student portals, and services managed by Crack Leap Academy.
                    </p>
                  </div>

                  {/* Content Sections */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Overview */}
                    {activeSection === 'overview' && (
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-6 bg-white/70 rounded-2xl border border-white/80 shadow-sm">
                          <Shield className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Introduction & Overview</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                              Crack Leap Academy is dedicated to protecting the privacy of our students, alumni, mentors, and site visitors. We only collect the minimal personal data necessary to provide high-quality learning experiences, cohort mentoring, and career support.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Commitment */}
                    {activeSection === 'commitment' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Our Privacy Commitment</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            We never sell or rent your personal information to marketing brokers. We handle your email, contact details, payment receipts, and project submissions with strict technical and organizational safeguards.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Data Collection */}
                    {activeSection === 'data-collection' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Information We Collect</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium mb-3">
                            We may collect basic information when you fill out consultation forms, register for a course, or interact with our learning portal:
                          </p>
                          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5 font-medium pl-2">
                            <li>Name, email address, phone number, and city/country</li>
                            <li>Course enrollment preferences and tech background</li>
                            <li>Session attendance, assignment submissions, and quiz completion</li>
                            <li>Technical diagnostic logs for online class delivery</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Data Use */}
                    {activeSection === 'data-use' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">How We Use Collected Data</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Your data is used solely to provide educational services, process course credentials, schedule 1-on-1 mentor sessions, verify graduation certificates, and keep you informed about important cohort updates.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Data Sharing */}
                    {activeSection === 'data-sharing' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Data Sharing & Third Parties</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            We only share information with trusted infrastructure providers (such as video streaming services, cloud hosting, and certified payment processors) required to deliver classes. In placement assistance workflows, resumes are shared with hiring partners only with your explicit consent.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* IP */}
                    {activeSection === 'ip' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Intellectual Property & Student Work</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            You retain 100% ownership of any custom software code, repositories, and portfolio applications you build during your coursework. Academy instructional materials remain the intellectual property of Crack Leap Academy.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Security */}
                    {activeSection === 'security' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                              <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Security & Encryption</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            We implement TLS/HTTPS encryption across all websites and databases, enforce least-privilege administrative access, and conduct regular security reviews to prevent unauthorized access.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Cookies */}
                    {activeSection === 'cookies' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Cookie className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Cookie Policy</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            We use essential cookies to remember your language and currency preferences and secure session authentication. You can manage or disable cookie preferences in your browser settings at any time.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* External Links */}
                    {activeSection === 'links' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <LinkIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">External Links & Resources</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Our curriculum may reference external developer tools (e.g. GitHub, AWS, Docker Hub). We are not responsible for the privacy practices of external third-party websites.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* International */}
                    {activeSection === 'international' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">International Data Protection</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Crack Leap Academy serves learners worldwide. We process and store personal information adhering to recognized data privacy standards across India, the Middle East, Europe, and the US.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Updates */}
                    {activeSection === 'updates' && (
                      <div className="space-y-4">
                        <div className="p-6 bg-white/70 border border-white/80 rounded-2xl shadow-sm">
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-white shadow-md">
                              <RefreshCw className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Policy Updates & Notifications</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            We may revise this Privacy Policy periodically to match technological or regulatory updates. The most current version is always available on this page with an updated timestamp.
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
                        <h3 className="text-base font-bold text-slate-900 mb-1">Questions About Your Privacy?</h3>
                        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                          For data inquiries or assistance with your account details, contact our data protection team at{" "}
                          <a href="mailto:info@arivuon.in" className="text-[#8B5CF6] font-bold hover:underline">
                            info@arivuon.in
                          </a>.
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
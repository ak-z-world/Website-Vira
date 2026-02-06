'use client';

import { Shield, FileText, CheckCircle, Users, Globe, Clock, Mail, AlertCircle } from 'lucide-react';
import Link from 'next/link';
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-60" />
        
        <div className="section-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Legal Policies</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Terms & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Conditions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                By enrolling in our courses, you agree to abide by the following terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 border border-orange-200 rounded-2xl p-4 mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Quick Navigation</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Jump to specific sections
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-2xl p-2 shadow-sm">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-300 ${
                          activeSection === section.id
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          activeSection === section.id ? 'bg-orange-100' : 'bg-gray-100'
                        }`}>
                          <div className={`${activeSection === section.id ? 'text-orange-600' : 'text-gray-500'}`}>
                            {section.icon}
                          </div>
                        </div>
                        <span className="font-medium text-sm">{section.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden">
                  {/* Content Header */}
                  <div className="border-b border-gray-100 p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          Vira Academy Terms & Conditions
                        </h2>
                        <p className="text-gray-600 mt-2">
                          Welcome to Vira Academy! We thank you for choosing us as your learning partner for professional software training.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Sections */}
                  <div className="p-6 md:p-8 space-y-8">
                    {/* Overview Section */}
                    {activeSection === 'overview' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-2xl border border-orange-200">
                          <Shield className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Welcome to Vira Academy</h3>
                            <p className="text-gray-700 leading-relaxed">
                              We thank you for choosing us as your learning partner for professional software training. Our mission is to empower students worldwide with career-oriented training and practical skills to prepare them for the competitive global job market.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                              By enrolling in our courses, you agree to abide by the following terms and conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Placement Assistance Section */}
                    {activeSection === 'placement' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                              <Users className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Placement Assistance</h3>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-xl">
                              <p className="text-gray-700">
                                Vira Academy provides career guidance and placement assistance but does not guarantee job placement. Placement assistance includes resume building support, portfolio development, and mock interview preparation to improve employability.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Refund Policy Section */}
                    {activeSection === 'refund' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                              <CheckCircle className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Refund & Cancellation Policy</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-green-50 rounded-xl">
                            <p className="text-gray-700">
                              For detailed information, please refer to our refund policy. Refund requests must be submitted directly through official communication channels within the specified timeframe.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Student Behavior Section */}
                    {activeSection === 'conduct' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                              <AlertCircle className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Student Behavior</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-red-50 rounded-xl">
                            <p className="text-gray-700">
                              Students are expected to maintain professional and respectful behavior in all online classes and communications. Disruptive behavior in virtual sessions may result in disciplinary action, including removal from the course without a refund.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Punctuality Section */}
                    {activeSection === 'punctuality' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                              <Clock className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Punctuality</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-yellow-50 rounded-xl">
                            <p className="text-gray-700">
                              Students must attend scheduled online sessions on time. Repeated lateness or absence may lead to warnings from the trainer.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Online Facilities Section */}
                    {activeSection === 'facilities' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                              <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Use of Online Facilities</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-purple-50 rounded-xl">
                            <p className="text-gray-700">
                              Students are encouraged to use the provided learning platforms responsibly. Unauthorized recording, sharing of course materials, or misuse of academy resources is strictly prohibited.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Course Attendance Section */}
                    {activeSection === 'attendance' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                              <Clock className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Course Attendance</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-blue-50 rounded-xl">
                            <p className="text-gray-700">
                              Regular participation in online sessions is required to successfully complete the course. In case of unavoidable circumstances such as technical issues or instructor availability, postponed sessions will be rescheduled.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Data Protection Section */}
                    {activeSection === 'privacy' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                              <Shield className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Data Protection</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-green-50 rounded-xl">
                            <p className="text-gray-700">
                              Vira Academy ensures the confidentiality of personal data. Information collected during enrollment will be used solely for educational, administrative, and promotional purposes in accordance with applicable international data protection standards.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Global Access Section */}
                    {activeSection === 'global' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                              <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Global Access & Payments</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-indigo-50 rounded-xl">
                            <p className="text-gray-700">
                              Vira Academy offers fully online learning accessible from anywhere in the world. Course fees may be paid in accepted currencies based on the student's country and available payment options.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Public Holidays Section */}
                    {activeSection === 'holidays' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Clock className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Public Holidays</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              Online classes may not be conducted on major public holidays unless otherwise informed in advance for special sessions.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Resume Building Section */}
                    {activeSection === 'resume' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                              <FileText className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Resume and Portfolio Building</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-cyan-50 rounded-xl">
                            <p className="text-gray-700">
                              Vira Academy assists students in developing professional resumes and portfolios to enhance career opportunities.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Agreement Section */}
                  <div className="border-t border-gray-100 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100/30">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Your Agreement</h3>
                        <p className="text-gray-700">
                          By enrolling in Vira Academy, you acknowledge that you have read, understood, and agreed to these terms and conditions.
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
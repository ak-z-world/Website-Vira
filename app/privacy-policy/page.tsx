'use client';

import { Shield, Lock, Eye, FileText, Globe, Cookie, Link, RefreshCw, Mail } from 'lucide-react';
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
    { id: 'links', title: 'External Links', icon: <Link className="w-4 h-4" /> },
    { id: 'international', title: 'International Users', icon: <Globe className="w-4 h-4" /> },
    { id: 'updates', title: 'Policy Updates', icon: <RefreshCw className="w-4 h-4" /> },
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
                <Lock className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Privacy & Security</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Privacy <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Policy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                At Vira Academy, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
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
                          Privacy Policy – Vira Academy
                        </h2>
                        <p className="text-gray-600 mt-2">
                          By using our website or enrolling in our programs, you agree to the practices described in this policy.
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
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Policy – Vira Academy</h3>
                            <p className="text-gray-700 leading-relaxed">
                              At Vira Academy, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you access our website or use our online learning services. By using our website or enrolling in our programs, you agree to the practices described in this policy.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Our Commitment Section */}
                    {activeSection === 'commitment' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Lock className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Our Commitment to Your Privacy</h3>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <p className="text-gray-700">
                                We value your trust and are committed to protecting the confidentiality of the information you share with us. This policy explains:
                              </p>
                            </div>
                            
                            <div className="space-y-3 pl-4">
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-orange-600 text-sm">•</span>
                                </div>
                                <p className="text-gray-700">The types of data we collect</p>
                              </div>
                              
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-orange-600 text-sm">•</span>
                                </div>
                                <p className="text-gray-700">How we use your information</p>
                              </div>
                              
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-orange-600 text-sm">•</span>
                                </div>
                                <p className="text-gray-700">The measures we take to safeguard your data</p>
                              </div>
                            </div>
                            
                            <div className="p-4 bg-orange-50 rounded-xl mt-4">
                              <p className="text-gray-700">
                                By accessing our website or enrolling in our courses, you agree to the terms outlined below.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Data We Collect Section */}
                    {activeSection === 'data-collection' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Eye className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Data We Collect</h3>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3">Personal Information</h4>
                              <div className="p-4 bg-orange-50 rounded-xl">
                                <p className="text-gray-700 mb-3">
                                  We collect information that you voluntarily provide to us, including:
                                </p>
                                <div className="grid md:grid-cols-2 gap-2 pl-4">
                                  {['Name', 'Email address', 'Contact details', 'Payment information (processed securely through third-party payment providers)', 'Any additional information submitted through forms, registrations, or inquiries'].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-600 text-xs">•</span>
                                      </div>
                                      <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-3">Usage Information</h4>
                              <div className="p-4 bg-orange-50 rounded-xl">
                                <p className="text-gray-700">
                                  We may automatically collect certain technical data such as your IP address, browser type, device information, pages visited, and time spent on our website. This information helps us improve website performance and enhance your learning experience.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* How We Use Data Section */}
                    {activeSection === 'data-use' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <FileText className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">How We Use Your Information</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700 mb-4">
                              We use your information to:
                            </p>
                            <div className="grid md:grid-cols-2 gap-3 pl-4">
                              {[
                                'Respond to inquiries and provide course information',
                                'Process registrations and deliver online training programs',
                                'Manage payments and account access',
                                'Send important updates about courses, services, or policies',
                                'Improve our website, platform functionality, and user experience'
                              ].map((item, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-orange-600 text-xs">•</span>
                                  </div>
                                  <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Data Sharing Section */}
                    {activeSection === 'data-sharing' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Data Sharing Policy</h3>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <h4 className="font-semibold text-gray-900 mb-2">No Marketing Sale of Data</h4>
                              <p className="text-gray-700">
                                Your personal information will not be sold or rented to third parties for marketing purposes.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                              <p className="text-gray-700">
                                We may share information with trusted partners such as payment processors, hosting providers, and communication services strictly for operational purposes. These partners are required to maintain confidentiality and data security.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                              <p className="text-gray-700">
                                Information may be disclosed if required by law or to protect our legal rights and the safety of our users.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Intellectual Property Section */}
                    {activeSection === 'ip' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <FileText className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Course Materials and Intellectual Property</h3>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <p className="text-gray-700">
                                All course content provided by Vira Academy is for personal educational use only.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <p className="text-gray-700">
                                Unauthorized copying, recording, reproduction, or distribution of course materials is prohibited.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-orange-50 rounded-xl">
                              <p className="text-gray-700">
                                We reserve the right to update course materials to maintain relevance and quality.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Security Measures Section */}
                    {activeSection === 'security' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Lock className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Data Security Measures</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, misuse, or disclosure. While we strive to protect your data, no online system can guarantee absolute security. Users are encouraged to safeguard their account credentials.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Cookies Section */}
                    {activeSection === 'cookies' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Cookie className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Cookies</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              We use cookies and similar technologies to improve website functionality, remember preferences, and analyze performance. You may disable cookies through your browser settings, though some features of the website may be limited.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* External Links Section */}
                    {activeSection === 'links' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Link className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">External Links</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. Users should review the privacy policies of third-party websites before sharing personal information.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* International Users Section */}
                    {activeSection === 'international' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">International Users</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              Vira Academy operates as a global online learning platform. By using our services from any location worldwide, you consent to the collection and processing of your information in accordance with this Privacy Policy and applicable international data protection regulations.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Policy Updates Section */}
                    {activeSection === 'updates' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <RefreshCw className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Policy Updates</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The most current version will always be available on our website, along with the effective date of the update.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contact Us Section */}
                    {activeSection === 'contact' && (
                      <div className="animate-in fade-in duration-300">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                              <Mail className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-orange-50 rounded-xl">
                            <p className="text-gray-700">
                              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact Vira Academy through our official communication channels.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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
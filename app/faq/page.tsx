'use client';

import { ChevronDown, HelpCircle, Globe, Clock, Award, Users, Mail, BookOpen, Monitor, CreditCard, CheckCircle, Wifi, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    { 
      question: 'What is Crack Leap Academy?', 
      answer: 'Crack Leap Academy is an online software training platform that provides career-focused courses designed to help students build practical technical skills and prepare for the global job market.',
      category: 'general'
    },
    { 
      question: 'Are the courses online or offline?', 
      answer: 'All courses at Crack Leap Academy are fully online. Students can learn from anywhere in the world through live sessions and structured digital learning materials.',
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
    { 
      question: 'What courses do you offer?', 
      answer: 'We offer professional software training in areas such as programming, web development, testing, cloud technologies, and other in-demand technical skills. Course availability may be updated regularly.',
      category: 'courses'
    },
    { 
      question: 'How are classes conducted?', 
      answer: 'Classes are conducted through live online sessions with trainers, along with recorded materials, assignments, and practical projects.',
      category: 'learning'
    },
    { 
      question: 'Will I get course materials and recordings?', 
      answer: 'Yes, enrolled students receive access to course materials and, when available, recorded sessions for revision and self-paced learning.',
      category: 'learning'
    },
    { 
      question: 'How long are the courses?', 
      answer: 'Course durations vary depending on the program. Each course includes a structured schedule with timelines shared during enrollment.',
      category: 'courses'
    },
    { 
      question: 'What payment methods do you accept?', 
      answer: 'We accept payments in supported currencies based on the student\'s country through secure online payment systems.',
      category: 'payment'
    },
    { 
      question: 'Can I get a refund if I cancel my enrollment?', 
      answer: 'Refunds are handled according to our refund policy. Students should review the refund terms and submit requests through official channels.',
      category: 'payment'
    },
    { 
      question: 'Do I receive a certificate after completing the course?', 
      answer: 'Yes, students who successfully complete the course requirements will receive a certificate of completion.',
      category: 'certification'
    },
    { 
      question: 'What technical requirements are needed to join classes?', 
      answer: 'Students need a stable internet connection, a computer or laptop, and required software tools specified for their course.',
      category: 'technical'
    },
    { 
      question: 'Can I interact with trainers during the course?', 
      answer: 'Yes, students can interact with trainers during live sessions and ask questions for clarification and guidance.',
      category: 'learning'
    },
    { 
      question: 'Do you provide support after course completion?', 
      answer: 'Yes, we provide limited post-course guidance related to career preparation and clarification of learned concepts.',
      category: 'support'
    },
    { 
      question: 'How can I contact Crack Leap Academy for support?', 
      answer: 'You can contact us through our official website, email, or designated communication channels for any academic or technical support.',
      category: 'support'
    },
  ];

  const categories = [
    { id: 'all', name: 'All FAQs', count: faqs.length, icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'general', name: 'General', count: faqs.filter(f => f.category === 'general').length, icon: <Globe className="w-4 h-4" /> },
    { id: 'courses', name: 'Courses', count: faqs.filter(f => f.category === 'courses').length, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'enrollment', name: 'Enrollment', count: faqs.filter(f => f.category === 'enrollment').length, icon: <Users className="w-4 h-4" /> },
    { id: 'learning', name: 'Learning', count: faqs.filter(f => f.category === 'learning').length, icon: <Monitor className="w-4 h-4" /> },
    { id: 'career', name: 'Career', count: faqs.filter(f => f.category === 'career').length, icon: <Award className="w-4 h-4" /> },
    { id: 'payment', name: 'Payment', count: faqs.filter(f => f.category === 'payment').length, icon: <CreditCard className="w-4 h-4" /> },
    { id: 'technical', name: 'Technical', count: faqs.filter(f => f.category === 'technical').length, icon: <Wifi className="w-4 h-4" /> },
    { id: 'support', name: 'Support', count: faqs.filter(f => f.category === 'support').length, icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getCategoryIcon = (category : string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : <HelpCircle className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4F5FA] border border-white/80 rounded-full px-4 py-2 mb-6 shadow-[3px_3px_8px_#dcdde3,-3px_-3px_8px_#ffffff]">
              <HelpCircle className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs sm:text-sm font-bold text-[#8B5CF6]">Quick Answers</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">Questions</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Find quick, clear answers to common questions about our programs, curriculum, enrollment, and support at Crack Leap Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white shadow-[4px_6px_16px_rgba(139,92,246,0.35)] -translate-y-0.5'
                        : 'bg-[#F4F5FA] border border-white/80 text-slate-600 shadow-[3px_3px_7px_#dcdde3,-3px_-3px_7px_#ffffff] hover:text-[#8B5CF6] hover:shadow-[5px_5px_10px_#d0d2dc,-5px_-5px_10px_#ffffff]'
                    }`}
                  >
                    <span className={activeCategory === category.id ? 'text-white' : 'text-[#8B5CF6]'}>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-[#e8eaf2] text-slate-500'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Grid */}
            <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-[#F4F5FA] border border-white/80 rounded-2xl shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] hover:shadow-[8px_8px_18px_#d0d2dc,-8px_-8px_18px_#ffffff] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 sm:p-7"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[#F4F5FA] shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center flex-shrink-0 text-[#8B5CF6]">
                            {getCategoryIcon(faq.category)}
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-wider">
                              {faq.category}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 leading-snug">
                          {faq.question}
                        </h3>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? 'max-h-96 opacity-100 mt-3 pt-3 border-t border-slate-200/60' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-[3px_3px_6px_#dcdde3,-3px_-3px_6px_#ffffff] ${
                        openIndex === index 
                          ? 'bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] text-white rotate-180' 
                          : 'bg-[#F4F5FA] text-slate-600'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Still Have Questions Section */}
            <div className="mt-16 sm:mt-20">
              <div className="bg-[#F4F5FA] border border-white/80 shadow-[10px_10px_24px_#dcdde3,-10px_-10px_24px_#ffffff] rounded-3xl p-8 sm:p-12 text-center">
                <div className="inline-flex items-center gap-2 bg-[#F4F5FA] border border-white/80 rounded-full px-4 py-2 mb-6 shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff]">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-xs sm:text-sm font-bold text-[#8B5CF6]">Need More Help?</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-slate-900 tracking-tight">
                  Still Have <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">Questions?</span>
                </h2>
                
                <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm sm:text-base font-medium leading-relaxed">
                  Can't find the answer you're looking for? Our academic counseling team is ready to assist you with any questions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@arivuon.in"
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-bold px-7 py-3.5 rounded-2xl shadow-[4px_6px_18px_rgba(139,92,246,0.35)] hover:shadow-[6px_10px_24px_rgba(139,92,246,0.45)] hover:-translate-y-0.5 transition-all text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </a>
                  <a 
                    href="tel:+919445770160"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#F4F5FA] border border-white/80 text-slate-800 font-bold px-7 py-3.5 rounded-2xl shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#d0d2dc,-6px_-6px_14px_#ffffff] hover:text-[#8B5CF6] hover:-translate-y-0.5 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#8B5CF6]" />
                    Call Us: +91 94457 70160
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
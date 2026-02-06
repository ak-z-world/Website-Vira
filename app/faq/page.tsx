'use client';

import { ChevronDown, HelpCircle, Globe, Clock, Award, Users, Mail, BookOpen, Monitor, CreditCard, CheckCircle, Wifi, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

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
      question: 'How can I contact Vira Academy for support?', 
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-60" />
        
        <div className="section-padding relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-600">Quick Answers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions about courses, enrollment, and support at Vira Academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-orange-300 hover:shadow-lg'
                    }`}
                  >
                    <span className="text-orange-500">{category.icon}</span>
                    <span>{category.name}</span>
                    <span className={`text-sm px-2 py-0.5 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                            <div className="text-orange-500">
                              {getCategoryIcon(faq.category)}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                              {faq.category}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                          {faq.question}
                        </h3>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white rotate-180' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

           

            {/* Still Have Questions Section */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-orange-600">Need More Help?</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Still Have <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Questions?</span>
                  </h2>
                  
                  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Can't find the answer you're looking for? Our support team is here to help you with any questions about courses, enrollment, or technical issues.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:viraacademy.info@gmail.com"
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      Email Support
                    </a>
                    <a 
                      href="tel:+919677377316"
                      className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      Call Support
                    </a>
                  </div>
                  
                  <div className="mt-8 text-sm text-gray-500">
                    <p>Average response time: 2-4 hours during business hours</p>
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
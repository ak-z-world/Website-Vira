import { Users, Target, Award, Globe, Sparkles, TrendingUp, CheckCircle, ArrowRight, ChevronRight, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mission',
      description: 'Empowering individuals with cutting-edge tech skills that transform careers and drive innovation.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Industry-leading education with uncompromising quality standards.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'Global network of learners, mentors, and industry leaders.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuous curriculum evolution matching industry trends.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Launched with Python courses', highlight: true },
    { year: '2021', title: 'Expansion', description: 'Added DevOps & React programs' },
    { year: '2022', title: 'Growth', description: '1000+ students trained globally' },
    { year: '2023', title: 'Recognition', description: 'Awarded "Best Tech Institute"' },
    { year: '2024', title: 'Global', description: 'International online batches launched', highlight: true }
  ];

  const stats = [
    { value: '5000+', label: 'Students Trained', icon: <TrendingUp className="w-5 h-5" />, change: '+42% YoY' },
    { value: '1200+', label: 'Projects', icon: <Sparkles className="w-5 h-5" />, change: 'Real-world impact' },
    { value: '50+', label: 'Expert Trainers', icon: <Users className="w-5 h-5" />, change: 'Industry veterans' }
  ];

  const leadership = [
    {
      initials: 'AK',
      name: 'Arjun Kapoor',
      role: 'Founder & CEO',
      bio: 'Ex-Google, 15+ years in software development',
      expertise: ['Tech Strategy', 'Scalability']
    },
    {
      initials: 'PS',
      name: 'Priya Sharma',
      role: 'Head of Training',
      bio: 'Ex-Amazon, DevOps Specialist',
      expertise: ['Cloud Architecture', 'DevOps']
    },
    {
      initials: 'RV',
      name: 'Rahul Verma',
      role: 'Lead Instructor',
      bio: 'Full Stack Developer, React Expert',
      expertise: ['React', 'Full Stack']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-50" />
        
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">Premium Tech Education</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              About <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Vira Academy</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're redefining tech education through immersive, industry-aligned programs that bridge 
              the gap between theoretical knowledge and real-world application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Learning Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                Explore Programs
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <div className="text-orange-500">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Our Evolution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
                Redefining <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Tech Education
                </span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Founded in 2020 by industry veterans, Vira Academy emerged from a critical insight: 
                  traditional education fails to equip students with practical, industry-relevant skills.
                </p>
                <p className="leading-relaxed">
                  Starting with a single Python course in a modest classroom, we've evolved into a 
                  comprehensive training ecosystem. Our growth is fueled by relentless focus on 
                  project-based learning and continuous curriculum innovation.
                </p>
                <p className="leading-relaxed">
                  Today, we stand as a beacon of excellence in tech education, preparing students 
                  not just for jobs, but for impactful careers in technology.
                </p>
              </div>
             
            </div>
            
            <div className="relative">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full blur-3xl" />
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
                      <div className="text-gray-600">Students Transformed</div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                      <div className="text-gray-600">Industry Experts</div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-orange-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-2">1200+</div>
                      <div className="text-gray-600">Real Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold text-orange-600">Our Principles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Core <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              The foundation of everything we build at Vira Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 relative`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>


<Testimonials/>
      



      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-3xl opacity-50" />
        
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
              Begin Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Tech Journey
              </span> Today
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands who've accelerated their careers with Vira Academy's industry-leading programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold px-10 py-5 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              Next batch starts in 2 weeks • Limited seats available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
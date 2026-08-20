import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowRight, 
  Bookmark,
  ShieldCheck,
  Star,
  ThumbsUp,
  Users,
  CheckCircle2,
  MonitorPlay,
  FileCode2,
  Map,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { breadcrumbSchema, webPageSchema } from './_lib/schema';

export const metadata: Metadata = {
  title: 'Free Developer Resources 2026 — Roadmaps, Projects, Interview Prep | Crack Leap Academy',
  description:
    'Explore 100+ free tech career resources: developer roadmaps 2026, project ideas, 1000+ interview questions, and in-depth tutorials for Python, React, AWS, DevOps, AI, and more.',
  keywords:
    'developer resources, programming roadmaps 2026, python interview questions, react projects, aws devops roadmap, ai engineer roadmap, tech career guide India',
  openGraph: {
    title: 'Free Developer Resources 2026 | Crack Leap Academy',
    description:
      'Roadmaps, projects, interview questions, and tutorials for Python, React, AWS, DevOps, AI/ML developers.',
    url: 'https://academy.arivuon.in/resources',
    type: 'website',
  },
  alternates: { canonical: 'https://academy.arivuon.in/resources' },
};

const FEATURED_RESOURCES = [
  {
    title: 'Frontend Developer Roadmap 2026',
    description: 'A complete step-by-step roadmap to become a frontend developer in 2026. Updated and beginner friendly.',
    href: '/resources/roadmaps/frontend-developer-roadmap-2026',
    badge: 'Roadmap',
    badgeColor: 'text-emerald-600 bg-emerald-50 border border-emerald-200',
    stats: '12 modules • 540+ enrolled',
    image: '/assets/icons/image12.png'
  },
  {
    title: 'Python & Django Backend Project Guide',
    description: 'Build production-ready REST APIs, authentication, and database schemas with real-world architecture.',
    href: '/resources/projects/python-django-fullstack',
    badge: 'Project Guide',
    badgeColor: 'text-indigo-600 bg-indigo-50 border border-indigo-200',
    stats: '8 Steps • 3.2k saves',
    image: '/assets/icons/image15.png'
  },
  {
    title: 'Top 100 React & Next.js Interview Q&A',
    description: 'Most asked React and Next.js questions in top tech interviews with answers, code snippets, and explanations.',
    href: '/resources/interview-questions/react',
    badge: 'Interview Guide',
    badgeColor: 'text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20',
    stats: '100 Qs • 4.8k saves',
    image: '/assets/icons/image17.png'
  },
];

const CATEGORY_CARDS = [
  {
    icon: <FileCode2 className="w-6 h-6 text-[#6366F1]" />,
    iconBg: 'bg-[#6366F1]/10',
    title: 'Tutorials & Guides',
    description: 'Step-by-step learning guides for Python, AWS, DevOps, React, and Data Science.',
    href: '/resources/tutorials',
    count: '120+ Resources',
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-emerald-600" />,
    iconBg: 'bg-emerald-500/10',
    title: 'Project Ideas',
    description: 'Handpicked project ideas to build your portfolio and boost your resume.',
    href: '/resources/projects',
    count: '65+ Resources',
  },
  {
    icon: <Map className="w-6 h-6 text-amber-600" />,
    iconBg: 'bg-amber-500/10',
    title: 'Career Roadmaps',
    description: 'Structured, step-by-step learning pathways to guide your developer journey in 2026.',
    href: '/resources/roadmaps',
    count: '20+ Roadmaps',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#8B5CF6]" />,
    iconBg: 'bg-[#8B5CF6]/10',
    title: 'Interview Questions',
    description: 'Role-based interview preparation guides, scenario questions, and system design tips.',
    href: '/resources/interview-questions',
    count: '800+ Questions',
  },
];

const STATS = [
  { label: 'Free Resources', value: '100+' },
  { label: 'Community Saved', value: '1,200+' },
  { label: 'Tools & Guides', value: '300+' },
  { label: 'Learners Helped', value: '50,000+' },
];

export default function ResourcesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ title: 'Developer Resources Hub 2026', description: 'Free roadmaps, projects, interview questions, and tutorials for developers.', url: 'https://academy.arivuon.in/resources' })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div className="min-h-screen bg-[#F4F5FA] text-slate-800 font-sans selection:bg-purple-100 overflow-hidden relative pb-20">
        
        {/* Soft Ambient Glows */}
        <div className="absolute top-0 left-[-10%] w-[40rem] h-[40rem] bg-[#6366F1]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 right-[-5%] w-[40rem] h-[40rem] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">

          {/* 1. HERO SECTION */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] border border-white/60 text-xs sm:text-sm font-semibold text-[#8B5CF6]">
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" /> 
                All-in-One Free Developer Resources
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Everything You Need to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#c562f3]">
                  Land Your Dream Tech Job
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Curated guides, cheat sheets, code snippets, hands-on project ideas, and career roadmaps — designed to accelerate your growth.
              </p>

              {/* Neomorphic Search Bar */}
              <div className="flex items-center gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="flex-1 flex items-center bg-[#F4F5FA] rounded-2xl p-2 shadow-[inset_4px_4px_10px_#dcdde3,inset_-4px_-4px_10px_#ffffff] border border-white/40">
                  <Search className="w-5 h-5 text-slate-400 ml-3" />
                  <input 
                    type="text" 
                    placeholder="Search roadmaps, projects, interview Qs..." 
                    className="w-full bg-transparent border-none outline-none px-4 py-2.5 text-slate-700 placeholder:text-slate-400 font-medium text-sm"
                  />
                </div>
                <button className="p-3.5 bg-[#F4F5FA] rounded-2xl shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] border border-white/40 text-slate-600 hover:text-[#8B5CF6] active:shadow-inner transition-all">
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col p-3 bg-[#F4F5FA] rounded-2xl shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] border border-white/50 text-center lg:text-left">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#8B5CF6]">{stat.value}</span>
                    <span className="text-xs font-semibold text-slate-500 mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Hero 3D Asset */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full flex justify-center items-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image 
                  src="/assets/icons/image23.png"
                  alt="Developer Resources Illustration"
                  fill
                  className="object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
              </div>
            </div>
          </section>

          {/* 2. ABOUT RESOURCES CARD */}
          <section className="mb-20">
            <div className="bg-[#F4F5FA] rounded-[36px] shadow-[12px_12px_28px_#dcdde3,-12px_-12px_28px_#ffffff] border border-white/60 p-6 sm:p-10 relative overflow-hidden">
              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-8 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Are Crack Leap Resources?</h2>
                  <p className="text-slate-600 leading-relaxed font-medium max-w-3xl text-sm sm:text-base">
                    Crack Leap Resources is your dedicated hub for high-quality, free learning materials created by senior software engineers. Whether you are preparing for coding interviews, building portfolio projects, or following structured career roadmaps, everything here is designed to turn theory into practice.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
                    {[
                      { text: '100% Free & Open' },
                      { text: 'Beginner to Advanced' },
                      { text: 'Interview-Tested' },
                      { text: 'Updated for 2026' },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-white/80 px-3 py-1.5 rounded-xl shadow-sm border border-white">
                        <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-4 flex justify-center">
                   <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
                      <Image
                        src="/assets/icons/image24.png"
                        alt="3D Folder Icon"
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. BROWSE BY CATEGORY */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Browse by Category</h2>
              <p className="text-slate-500 font-medium text-sm sm:text-base">Select a learning track to find dedicated resources.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CATEGORY_CARDS.map((cat, idx) => (
                <Link 
                  key={idx} 
                  href={cat.href} 
                  className="bg-[#F4F5FA] rounded-[28px] p-6 sm:p-8 shadow-[8px_8px_20px_#dcdde3,-8px_-8px_20px_#ffffff] border border-white/60 group flex items-start justify-between hover:shadow-[12px_12px_28px_#d0d2dc,-12px_-12px_28px_#ffffff] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-[inset_2px_2px_4px_#d1d3dc,inset_-2px_-2px_4px_#ffffff] border border-white/40 ${cat.iconBg}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-[#8B5CF6] transition-colors">{cat.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mb-3 leading-relaxed max-w-[260px]">{cat.description}</p>
                      <span className="inline-flex items-center text-xs font-bold text-[#8B5CF6] bg-white px-3 py-1 rounded-xl shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff]">
                        {cat.count}
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F4F5FA] flex items-center justify-center text-slate-400 shadow-[3px_3px_8px_#dcdde3,-3px_-3px_8px_#ffffff] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 4. FEATURED RESOURCES */}
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Featured Resources</h2>
                <p className="text-slate-500 font-medium text-sm sm:text-base">Editor's top picks for fast career progress.</p>
              </div>
              <Link href="/resources/roadmaps" className="text-[#8B5CF6] font-bold text-sm hover:underline flex items-center gap-1">
                View All Roadmaps <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURED_RESOURCES.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#F4F5FA] rounded-[28px] p-6 sm:p-7 shadow-[8px_8px_20px_#dcdde3,-8px_-8px_20px_#ffffff] border border-white/60 flex flex-col h-full relative group hover:shadow-[12px_12px_28px_#d0d2dc,-12px_-12px_28px_#ffffff] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs font-extrabold rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <button className="text-slate-400 hover:text-[#8B5CF6] transition-colors" aria-label="Save resource">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#8B5CF6] transition-colors">
                    <Link href={item.href} className="before:absolute before:inset-0">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-8 relative z-10">
                    {item.description}
                  </p>

                  <div className="mt-auto flex justify-between items-end">
                    <div className="text-xs font-bold text-slate-400">
                      {item.stats}
                    </div>
                    <div className="w-16 h-16 relative transform group-hover:scale-110 transition-transform duration-300">
                       <Image 
                         src={item.image}
                         alt={`${item.title} icon`}
                         fill
                         className="object-contain drop-shadow-md"
                       />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. TRUST / FEATURES ROW */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">Why Developers Choose Crack Leap</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: <ShieldCheck className="w-6 h-6" />, title: 'Curated by Experts', desc: 'Quality-checked by senior software engineers' },
                { icon: <Star className="w-6 h-6" />, title: 'Up-to-Date 2026', desc: 'Regularly updated with latest industry tools' },
                { icon: <ThumbsUp className="w-6 h-6" />, title: 'Community Approved', desc: 'Used by thousands of active learners' },
                { icon: <Users className="w-6 h-6" />, title: 'Beginner Friendly', desc: 'Structured approach with practical examples' },
              ].map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-[#F4F5FA] rounded-2xl shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] border border-white/50">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#8B5CF6] flex items-center justify-center mb-3 shadow-[2px_2px_6px_#dcdde3,-2px_-2px_6px_#ffffff]">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{feat.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. GRADIENT CTA SECTION */}
          <section className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] shadow-[12px_14px_32px_rgba(139,92,246,0.3)] border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16 relative z-10">
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Ready to Accelerate <br/> Your Career?
                </h2>
                <p className="text-white/90 font-medium max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
                  Browse our structured roadmaps or explore full-stack programs with live mentorship and placement assistance.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                  <Link href="/resources/roadmaps" className="px-7 py-3.5 bg-white text-[#8B5CF6] font-extrabold rounded-2xl transition-all shadow-md hover:bg-slate-50 active:scale-98 text-sm">
                    Explore Roadmaps
                  </Link>
                  <Link href="/courses" className="px-7 py-3.5 bg-[#8B5CF6]/30 text-white border border-white/40 font-extrabold rounded-2xl transition-all hover:bg-[#8B5CF6]/50 active:scale-98 text-sm">
                    View All Courses
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center relative min-h-[220px] sm:min-h-[280px]">
                 <div className="relative w-[260px] sm:w-[320px] h-[260px] sm:h-[320px]">
                   <Image 
                     src="/assets/icons/image25.png" 
                     alt="3D Rocket Launch Illustration"
                     fill
                     className="object-contain drop-shadow-2xl animate-[float_5s_ease-in-out_infinite]"
                   />
                 </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
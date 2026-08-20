import Link from 'next/link';
import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  badge: string;
  badgeColor: string;
  tags: string[];
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | string;
  icon: React.ReactNode;
  featured?: boolean;
}

export default function ResourceCard({
  title,
  description,
  href,
  badge,
  badgeColor,
  tags,
  readTime,
  difficulty,
  icon,
  featured = false,
}: ResourceCardProps) {
  const difficultyColor: Record<string, string> = {
    Beginner: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    Intermediate: 'bg-amber-50 text-amber-700 border border-amber-200',
    Advanced: 'bg-rose-50 text-rose-700 border border-rose-200',
    'All Levels': 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  };

  return (
    <Link
      href={href}
      className={`group relative flex flex-col bg-[#F4F5FA] border border-white/60 rounded-[28px] p-6 sm:p-7 shadow-[8px_8px_20px_#dcdde3,-8px_-8px_20px_#ffffff] hover:shadow-[12px_12px_28px_#d0d2dc,-12px_-12px_28px_#ffffff] hover:-translate-y-1 transition-all duration-300 ${
        featured ? 'ring-2 ring-[#8B5CF6]/30' : ''
      }`}
    >
      {featured && (
        <span className="absolute top-5 right-5 text-xs font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-3 py-1 rounded-full shadow-sm">
          ⭐ Featured
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#8B5CF6] shadow-[2px_2px_6px_#dcdde3,-2px_-2px_6px_#ffffff] shrink-0">
          {icon}
        </span>
        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed flex-grow mb-5 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-slate-600 bg-white font-semibold px-2.5 py-1 rounded-xl border border-white shadow-[1px_1px_3px_#dcdde3]">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-500">
        <span>⏱ {readTime}</span>
        <span className={`px-2.5 py-0.5 rounded-full font-bold ${difficultyColor[difficulty] || 'bg-slate-100 text-slate-700'}`}>
          {difficulty}
        </span>
      </div>
    </Link>
  );
}
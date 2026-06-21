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
  icon: React.ReactNode; // <--- Changed from string to React.ReactNode
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
    Beginner: 'bg-green-50 text-green-700',
    Intermediate: 'bg-yellow-50 text-yellow-700',
    Advanced: 'bg-red-50 text-red-700',
    'All Levels': 'bg-blue-50 text-blue-700',
  };

  return (
    <Link
      href={href}
      className={`group relative flex flex-col bg-white border rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-200 ${
        featured ? 'border-blue-400 shadow-md ring-1 ring-blue-200' : 'border-gray-200'
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
          ⭐ Featured
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        {/* Changed wrapper slightly to cleanly support SVG icons */}
        <span className="flex-shrink-0 text-blue-600 bg-blue-50/50 p-2 rounded-lg">
          {icon}
        </span>
        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
        <span>⏱ {readTime}</span>
        <span className={`px-2 py-0.5 rounded-full font-medium ${difficultyColor[difficulty] || 'bg-gray-100 text-gray-600'}`}>
          {difficulty}
        </span>
      </div>
    </Link>
  );
}
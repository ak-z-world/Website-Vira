'use client';
// resources/_components/FAQAccordion.tsx

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
      {items.map((item, idx) => ( 
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors group"
            aria-expanded={open === idx}
          >
            <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{item.question}</span>
            <span className={`flex-shrink-0 w-5 h-5 text-blue-600 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {open === idx && (
            <div className="px-6 pb-5 bg-gray-50">
              <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
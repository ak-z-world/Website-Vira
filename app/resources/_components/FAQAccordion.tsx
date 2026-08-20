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
    <div className="divide-y divide-slate-200/60 border border-white/80 rounded-2xl bg-[#F4F5FA] shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] overflow-hidden">
      {items.map((item, idx) => ( 
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-transparent hover:bg-white/40 transition-colors group"
            aria-expanded={open === idx}
          >
            <span className="font-bold text-slate-800 text-sm sm:text-base pr-4 group-hover:text-[#8B5CF6] transition-colors">{item.question}</span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-lg bg-[#F4F5FA] shadow-[inset_1px_1px_3px_#d1d3dc,inset_-1px_-1px_3px_#ffffff] flex items-center justify-center text-[#8B5CF6] transition-transform duration-200 ${open === idx ? 'rotate-180 bg-violet-100 text-[#8B5CF6]' : ''}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {open === idx && (
            <div className="px-6 pb-5 bg-white/50 border-t border-slate-200/40">
              <p className="text-slate-600 text-sm font-medium leading-relaxed pt-3">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
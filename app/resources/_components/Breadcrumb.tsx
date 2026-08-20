import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6 py-2 px-4 rounded-xl bg-white/70 shadow-sm border border-white/60">
      {items.map((item, idx) => (
        <span key={item.href + idx} className="flex items-center gap-2">
          {idx < items.length - 1 ? (
            <>
              <Link
                href={item.href}
                className="hover:text-[#8B5CF6] font-medium transition-colors"
              >
                {item.label}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </>
          ) : (
            <span className="text-slate-900 font-bold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
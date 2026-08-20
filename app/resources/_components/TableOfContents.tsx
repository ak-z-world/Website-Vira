'use client';

interface TOCItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  return (
    <aside className="bg-[#F4F5FA] border border-white/60 rounded-2xl p-5 mb-8 shadow-[inset_3px_3px_6px_#dcdde3,inset_-3px_-3px_6px_#ffffff]">
      <p className="text-xs font-extrabold text-[#8B5CF6] uppercase tracking-wider mb-3 flex items-center gap-2">
        <span>📋</span> Table of Contents
      </p>
      <ol className="space-y-2">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#8B5CF6] transition-colors"
            >
              <span className="text-[#8B5CF6] font-mono text-xs font-bold w-5">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
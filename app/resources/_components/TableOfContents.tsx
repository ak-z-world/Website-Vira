'use client';
// resources/_components/TableOfContents.tsx

interface TOCItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  return (
    <aside className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
      <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">📋 Table of Contents</p>
      <ol className="space-y-1.5">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2.5 text-sm text-blue-700 hover:text-blue-900 hover:underline transition-colors"
            >
              <span className="text-blue-400 font-mono text-xs w-5">{String(idx + 1).padStart(2, '0')}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
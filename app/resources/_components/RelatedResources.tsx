// resources/_components/RelatedResources.tsx
import Link from 'next/link';

interface RelatedResource {
  title: string;
  href: string;
  description: string;
  category: string;
  icon: string;
}

export default function RelatedResources({ items }: { items: RelatedResource[] }) {
  return (
    <section className="mt-12 border-t border-slate-200/80 pt-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="group block bg-[#F4F5FA] border border-white/80 rounded-2xl p-5 shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff] hover:shadow-[6px_6px_14px_#d0d2dc,-6px_-6px_14px_#ffffff] hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{resource.icon}</span>
              <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider bg-[#8B5CF6]/10 px-2.5 py-0.5 rounded-full">
                {resource.category}
              </span>
            </div>
            <h3 className="font-bold text-slate-800 text-sm group-hover:text-[#8B5CF6] transition-colors mb-1.5 leading-snug">
              {resource.title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{resource.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
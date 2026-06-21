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
    <section className="mt-12 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{resource.icon}</span>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full">
                {resource.category}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
              {resource.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{resource.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
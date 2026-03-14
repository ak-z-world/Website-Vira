// app/blog/[slug]/not-found.tsx
import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-5xl font-extrabold text-orange-400 mb-3">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Article Not Found</h1>
        <p className="text-slate-500 text-sm mb-8">
          This article may have moved or the URL is incorrect. Browse all
          our articles below.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/blog"
            className="bg-orange-500 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
          >
            Back to Blog
          </Link>
          <Link
            href="/"
            className="border border-slate-200 text-slate-600 font-medium text-sm px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
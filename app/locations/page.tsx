import { Metadata } from "next";
import Link from "next/link";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { courses } from "@/lib/location-data/courses";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { MapPin, Globe, Sparkles, ArrowRight, BookOpen, Users, Award, ShieldCheck } from "lucide-react";

export const revalidate = 86400; // 1 day

export const metadata: Metadata = {
  title: "Training Locations & Global Learning Hubs | Crack Leap Academy",
  description:
    "Explore Crack Leap Academy learning hubs across Chennai, Tamil Nadu, India, and global online cohorts. Live instructor-led courses in Python, Full Stack, Data Science, AI & DevOps.",
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
  openGraph: {
    title: "Training Locations & Global Learning Hubs | Crack Leap Academy",
    description:
      "Explore Crack Leap Academy learning hubs across Chennai, Tamil Nadu, India, and global online cohorts. Live instructor-led courses in Python, Full Stack, Data Science, AI & DevOps.",
    url: `${SITE_URL}/locations`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Crack Leap Academy Locations" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Locations & Global Learning Hubs | Crack Leap Academy",
    description:
      "Explore Crack Leap Academy learning hubs across Chennai, Tamil Nadu, India, and global online cohorts.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function LocationsIndexPage() {
  const publishedCountries = countries.filter((c) => c.status === "published");
  const tnCities = cities.filter((c) => c.stateSlug === "tamil-nadu" && c.status === "published");
  const otherCities = cities.filter((c) => c.stateSlug !== "tamil-nadu" && c.status === "published");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE_URL}/locations`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Crack Leap Academy Training Locations",
    description: "Regional and global learning hubs for software engineering and technology education.",
    itemListElement: tnCities.map((city, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${city.name}, Tamil Nadu`,
      url: `${SITE_URL}/locations/india/tamil-nadu/${city.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-[#F8F9FE] text-slate-800 font-sans pb-24">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4F5FA] border border-white/80 rounded-full shadow-[3px_3px_8px_#dcdde3,-3px_-3px_8px_#ffffff] mb-6">
            <Globe className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-xs sm:text-sm font-bold text-[#8B5CF6]">
              Global Reach • Local Mentorship
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Training Locations &{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
              Learning Hubs
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-10">
            Crack Leap Academy connects aspiring developers, career switchers, and engineers with industry-grade software education. Join our high-impact live interactive cohorts from your city or online worldwide.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8B5CF6]">8+</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Tamil Nadu Cities</div>
            </div>
            <div className="p-4 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8B5CF6]">100%</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Live Mentorship</div>
            </div>
            <div className="p-4 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8B5CF6]">1:1</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Code Reviews</div>
            </div>
            <div className="p-4 bg-[#F4F5FA] rounded-2xl border border-white/80 shadow-[4px_4px_10px_#dcdde3,-4px_-4px_10px_#ffffff]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#8B5CF6]">Global</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Online Cohorts</div>
            </div>
          </div>
        </section>

        {/* Tamil Nadu State & Cities Hub */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/60">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-1">
                <MapPin className="w-3.5 h-3.5" /> Regional Hub
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Tamil Nadu Learning Hubs
              </h2>
            </div>
            <Link
              href="/locations/india/tamil-nadu"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-[#8B5CF6] hover:underline inline-flex items-center gap-1"
            >
              Explore Tamil Nadu Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tnCities.map((city) => (
              <div
                key={city.slug}
                className="bg-[#F4F5FA] rounded-3xl p-6 border border-white/80 shadow-[6px_6px_14px_#dcdde3,-6px_-6px_14px_#ffffff] flex flex-col justify-between hover:shadow-[8px_8px_18px_#d0d2dc,-8px_-8px_18px_#ffffff] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 bg-violet-100/70 text-violet-700 rounded-full">
                      {city.districtName || "Tamil Nadu"}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {city.activeCoursesSlugs.length} Programs
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {city.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {city.cityContext || `${city.name} learning center offering industry-aligned software engineering batches with placement support.`}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  <Link
                    href={`/locations/india/tamil-nadu/${city.slug}`}
                    className="block w-full py-2.5 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white text-center text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    View {city.name} Hub
                  </Link>
                  <Link
                    href={`/locations/india/tamil-nadu/${city.slug}/python-course`}
                    className="block w-full py-2 px-3 bg-[#F4F5FA] border border-white/80 text-center text-xs font-semibold text-slate-700 rounded-xl shadow-[2px_2px_5px_#dcdde3,-2px_-2px_5px_#ffffff] hover:text-[#8B5CF6] transition-colors"
                  >
                    Python in {city.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global & All Locations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-[#F4F5FA] rounded-3xl p-8 sm:p-12 border border-white/80 shadow-[8px_8px_20px_#dcdde3,-8px_-8px_20px_#ffffff]">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Online & International Learning Cohorts
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                No matter where you are located — India, the GCC, Southeast Asia, Europe, or North America — our live online interactive programs offer the same hands-on production code reviews, dedicated mentor support, and real-time guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/70 rounded-2xl border border-white/80 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#8B5CF6] mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Live Interactive Classes</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time code along sessions, interactive debugging, and immediate doubt resolution.
                </p>
              </div>

              <div className="p-6 bg-white/70 rounded-2xl border border-white/80 shadow-sm">
                <Users className="w-8 h-8 text-[#8B5CF6] mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">1:1 Mentor Access</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Weekly personalized mentor checkpoints to review your architecture and portfolio projects.
                </p>
              </div>

              <div className="p-6 bg-white/70 rounded-2xl border border-white/80 shadow-sm">
                <Award className="w-8 h-8 text-[#8B5CF6] mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Career & Placement Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Resume shaping, GitHub portfolio polish, mock technical interviews, and hiring referrals.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-500">
                Looking for a specific course curriculum?
              </span>
              <Link
                href="/courses"
                className="px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Browse All Programs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function itemListElementSchema(citiesList: typeof cities) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Crack Leap Academy Training Locations",
    description: "Regional and global learning hubs for software engineering and technology education.",
    itemListElement: citiesList.map((city, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${city.name}, Tamil Nadu`,
      url: `${SITE_URL}/locations/india/tamil-nadu/${city.slug}`,
    })),
  };
}

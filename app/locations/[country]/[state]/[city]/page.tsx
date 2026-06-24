import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { courses } from "@/lib/location-data/courses";
import { StatePage } from "@/app/components/location/StatePage";

export const revalidate = 604800;

interface Params {
  country: string;
  state: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const publishedCountries = countries.filter(
    (c) => c.rolloutPhase === "phase-1" && c.activeStateSlugs.length > 0,
  );

  return publishedCountries.flatMap((country) =>
    states
      .filter((s) => country.activeStateSlugs.includes(s.slug))
      .map((s) => ({ country: country.slug, state: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { country: countrySlug, state: stateSlug } = await params;

  const country = countries.find((c) => c.slug === countrySlug);
  const state = states.find(
    (s) => s.slug === stateSlug && s.countrySlug === countrySlug,
  );

  if (!country || !state) {
    return {};
  }

  return {
    title: state.seo.metaTitle,
    description: state.seo.metaDescription,
    alternates: {
      canonical: state.seo.canonicalUrl,
      languages: state.seo.hreflang
        ? Object.fromEntries(Object.entries(state.seo.hreflang))
        : undefined,
    },
    openGraph: {
      title: state.seo.metaTitle,
      description: state.seo.metaDescription,
      url: state.seo.canonicalUrl,
      siteName: "ArivuOn Academy",
      images: state.seo.ogImage
        ? [{ url: state.seo.ogImage, width: 1200, height: 630 }]
        : [],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: state.seo.metaTitle,
      description: state.seo.metaDescription,
      images: state.seo.ogImage ? [state.seo.ogImage] : [],
    },
  };
}

export default async function StateRoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country: countrySlug, state: stateSlug } = await params;

  const country = countries.find((c) => c.slug === countrySlug);
  const state = states.find(
    (s) => s.slug === stateSlug && s.countrySlug === countrySlug,
  );

  if (!country || !state || state.activeCitySlugs.length === 0) {
    notFound();
  }

  const activeCities = cities.filter((c) =>
    state.activeCitySlugs.includes(c.slug),
  );

  const citiesWithCourses = activeCities.map((city) => {
    const availableCourses = courses.filter((course) =>
      city.activeCoursesSlugs.includes(course.slug),
    );
    return { city, courses: availableCourses };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.arivuon.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.arivuon.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `https://www.arivuon.com/locations/${country.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: state.name,
        item: state.seo.canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StatePage
        country={country}
        state={state}
        citiesWithCourses={citiesWithCourses}
      />
    </>
  );
}
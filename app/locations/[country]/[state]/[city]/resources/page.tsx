import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { CountryPage } from "@/app/components/location/CountryPage";

export const revalidate = 604800;

interface Params {
  country: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return countries
    .filter((c) => c.rolloutPhase === "phase-1" && c.activeStateSlugs.length > 0)
    .map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = countries.find((c) => c.slug === countrySlug);

  if (!country) {
    return {};
  }

  return {
    title: country.seo.metaTitle,
    description: country.seo.metaDescription,
    alternates: {
      canonical: country.seo.canonicalUrl,
      languages: country.seo.hreflang
        ? Object.fromEntries(
            Object.entries(country.seo.hreflang).map(([locale, url]) => [
              locale,
              url,
            ]),
          )
        : undefined,
    },
    openGraph: {
      title: country.seo.metaTitle,
      description: country.seo.metaDescription,
      url: country.seo.canonicalUrl,
      siteName: "Crack Leap Academy",
      images: country.seo.ogImage
        ? [{ url: country.seo.ogImage, width: 1200, height: 630 }]
        : [],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: country.seo.metaTitle,
      description: country.seo.metaDescription,
      images: country.seo.ogImage ? [country.seo.ogImage] : [],
    },
  };
}

export default async function CountryRoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country: countrySlug } = await params;
  const country = countries.find((c) => c.slug === countrySlug);

  if (!country || country.activeStateSlugs.length === 0) {
    notFound();
  }

  const activeStates = states.filter((s) =>
    country.activeStateSlugs.includes(s.slug),
  );

  const statesWithCities = activeStates.map((state) => {
    const activeCities = cities.filter((c) =>
      state.activeCitySlugs.includes(c.slug),
    );
    return { state, cities: activeCities };
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
        item: country.seo.canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CountryPage country={country} statesWithCities={statesWithCities} />
    </>
  );
}
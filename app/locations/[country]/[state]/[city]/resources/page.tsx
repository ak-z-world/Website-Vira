import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { isPublishableCity } from "@/lib/location-data/types";
import { CityResourcesPage } from "@/app/components/location/CityResourcesPage";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 604800; // 1 week

interface Params {
  country: string;
  state: string;
  city: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return cities
    .filter(isPublishableCity)
    .map((city) => ({
      country: city.countrySlug,
      state: city.stateSlug,
      city: city.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const {
    country: countrySlug,
    state: stateSlug,
    city: citySlug,
  } = await params;

  const country = countries.find((c) => c.slug === countrySlug);
  const city = cities.find(
    (c) =>
      c.slug === citySlug &&
      c.stateSlug === stateSlug &&
      c.countrySlug === countrySlug,
  );

  if (!country || !city) {
    return {};
  }

  const title = `Free IT Training Resources in ${city.name} | Crack Leap Academy`;
  const description = `Download free study materials, cheat sheets and practice sets for Python, Full-Stack, Data Science and AI courses in ${city.name}.`;
  const canonicalUrl = `${SITE_URL}/locations/${countrySlug}/${stateSlug}/${citySlug}/resources`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Crack Leap Academy",
      images: city.seo.ogImage
        ? [{ url: city.seo.ogImage, width: 1200, height: 630, alt: title }]
        : [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: city.seo.ogImage ? [city.seo.ogImage] : [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function CityResourcesRoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const {
    country: countrySlug,
    state: stateSlug,
    city: citySlug,
  } = await params;

  const country = countries.find((c) => c.slug === countrySlug);
  const state = states.find(
    (s) => s.slug === stateSlug && s.countrySlug === countrySlug,
  );
  const city = cities.find(
    (c) =>
      c.slug === citySlug &&
      c.stateSlug === stateSlug &&
      c.countrySlug === countrySlug,
  );

  if (!country || !state || !city) {
    notFound();
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `${SITE_URL}/locations/${country.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: state.name,
        item: `${SITE_URL}/locations/${country.slug}/${state.slug}`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: city.name,
        item: `${SITE_URL}/locations/${country.slug}/${state.slug}/${city.slug}`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: `Resources in ${city.name}`,
        item: `${SITE_URL}/locations/${country.slug}/${state.slug}/${city.slug}/resources`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CityResourcesPage city={city} country={country} state={state} />
    </>
  );
}
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { isPublishableCity } from "@/lib/location-data/types";
import { CityResourcesPage } from "@/app/components/location/CityResourcesPage";

export const revalidate = 604800;

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

  const title = `Free IT Training Resources in ${city.name} | ArivuOn Academy`;
  const description = `Download free study materials, cheat sheets and practice sets for Python, Full-Stack, Data Science and AI courses in ${city.name}.`;
  const canonicalUrl = `${city.seo.canonicalUrl}/resources`;

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
      siteName: "ArivuOn Academy",
      images: city.seo.ogImage
        ? [{ url: city.seo.ogImage, width: 1200, height: 630 }]
        : [],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: city.seo.ogImage ? [city.seo.ogImage] : [],
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

  if (!country || !state || !city || !isPublishableCity(city)) {
    notFound();
  }

  const canonicalUrl = `${city.seo.canonicalUrl}/resources`;

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
        item: `https://www.arivuon.com/locations/${country.slug}/${state.slug}`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: city.name,
        item: city.seo.canonicalUrl,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Resources",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CityResourcesPage country={country} state={state} city={city} />
    </>
  );
}
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { courses } from "@/lib/location-data/courses";
import { locationPages } from "@/lib/location-data/location-pages";
import { isPublishableCity } from "@/lib/location-data/types";
import { CityHubPage } from "@/app/components/location/CityHubPage";

export const revalidate = 604800;

interface Params {
  country: string;
  state: string;
  city: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return cities.filter(isPublishableCity).map((city) => ({
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

  return {
    title: city.seo.metaTitle,
    description: city.seo.metaDescription,
    alternates: {
      canonical: city.seo.canonicalUrl,
      languages: city.seo.hreflang
        ? Object.fromEntries(Object.entries(city.seo.hreflang))
        : undefined,
    },
    openGraph: {
      title: city.seo.metaTitle,
      description: city.seo.metaDescription,
      url: city.seo.canonicalUrl,
      siteName: "Crack Leap Academy",
      images: city.seo.ogImage
        ? [{ url: city.seo.ogImage, width: 1200, height: 630 }]
        : [],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: city.seo.metaTitle,
      description: city.seo.metaDescription,
      images: city.seo.ogImage ? [city.seo.ogImage] : [],
    },
  };
}

export default async function CityHubRoutePage({
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

  const cityLocationPages = locationPages.filter(
    (lp) => lp.citySlug === citySlug && lp.status === "published",
  );

  const availableCourses = courses.filter((course) =>
    city.activeCoursesSlugs.includes(course.slug),
  );

  const coursesWithPages = availableCourses.map((course) => {
    const locationPage = cityLocationPages.find(
      (lp) => lp.courseSlug === course.slug,
    );
    return { course, locationPage: locationPage ?? null };
  });

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `Crack Leap Academy ${city.name}`,
    description: city.seo.metaDescription,
    url: city.seo.canonicalUrl,
    telephone: city.phone ?? undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: city.address.streetAddress,
      addressLocality: city.address.addressLocality,
      addressRegion: city.address.addressRegion,
      postalCode: city.address.postalCode,
      addressCountry: city.address.addressCountry,
    },
    ...(city.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.coordinates.latitude,
        longitude: city.coordinates.longitude,
      },
    }),
    sameAs: city.schema?.sameAs ?? [],
  };

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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CityHubPage
        country={country}
        state={state}
        city={city}
        coursesWithPages={coursesWithPages}
      />
    </>
  );
}

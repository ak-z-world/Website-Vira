import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { courses } from "@/lib/location-data/courses";
import { locationPages } from "@/lib/location-data/location-pages";
import { isPublishableLocationPage } from "@/lib/location-data/types";
import { LocationCoursePage } from "@/app/components/location/LocationCoursePage";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 604800; // 1 week

interface Params {
  country: string;
  state: string;
  city: string;
  "course-slug": string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return locationPages
    .filter(isPublishableLocationPage)
    .map((lp) => ({
      country: lp.countrySlug,
      state: lp.stateSlug,
      city: lp.citySlug,
      "course-slug": lp.courseSlug,
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
    "course-slug": courseSlug,
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
  const course = courses.find((c) => c.slug === courseSlug);
  const locationPage = locationPages.find(
    (lp) =>
      lp.citySlug === citySlug &&
      lp.courseSlug === courseSlug &&
      lp.stateSlug === stateSlug &&
      lp.countrySlug === countrySlug,
  );

  if (!country || !state || !city || !course || !locationPage) {
    return {};
  }

  const title = `${course.name} in ${city.name} | Crack Leap Academy`;
  const description = `Learn ${course.name} in ${city.name}, ${state.name}. Crack Leap Academy offers live mentorship, industry projects, placement assistance, and practical training.`;
  const canonicalUrl = `${SITE_URL}/locations/${countrySlug}/${stateSlug}/${citySlug}/${courseSlug}`;

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
      images: course.seo?.ogImage
        ? [{ url: course.seo.ogImage, width: 1200, height: 630, alt: title }]
        : [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: course.seo?.ogImage ? [course.seo.ogImage] : [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function LocationCourseRoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const {
    country: countrySlug,
    state: stateSlug,
    city: citySlug,
    "course-slug": courseSlug,
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
  const course = courses.find((c) => c.slug === courseSlug);
  const locationPage = locationPages.find(
    (lp) =>
      lp.citySlug === citySlug &&
      lp.courseSlug === courseSlug &&
      lp.stateSlug === stateSlug &&
      lp.countrySlug === countrySlug,
  );

  if (!country || !state || !city || !course || !locationPage) {
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
        name: `${course.name} in ${city.name}`,
        item: `${SITE_URL}/locations/${country.slug}/${state.slug}/${city.slug}/${course.slug}`,
      },
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.name} in ${city.name}`,
    description: course.shortDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Crack Leap Academy",
      url: SITE_URL,
    },
    educationalCredentialAwarded: "Certificate of Completion",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      location: {
        "@type": "Place",
        name: `Crack Leap Academy — ${city.name}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: state.name,
          addressCountry: country.code,
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <LocationCoursePage
        locationPage={locationPage}
        city={city}
        country={country}
        state={state}
        course={course}
        localPrice={locationPage.localPrice || course.basePrice}
      />
    </>
  );
}
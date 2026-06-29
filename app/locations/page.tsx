import { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/lib/location-data/countries";
import { states } from "@/lib/location-data/states";
import { cities } from "@/lib/location-data/cities";
import { courses } from "@/lib/location-data/courses";
import { locationPages } from "@/lib/location-data/location-pages";
import { isPublishableLocationPage } from "@/lib/location-data/types";
import { LocationCoursePage } from "@/app/components/location/LocationCoursePage";

export const revalidate = 86400;

interface Params {
  country: string;
  state: string;
  city: string;
  "course-slug": string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return locationPages.filter(isPublishableLocationPage).map((lp) => ({
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
      lp.stateSlug === stateSlug &&
      lp.countrySlug === countrySlug &&
      lp.courseSlug === courseSlug,
  );

  if (!country || !city || !course || !locationPage) {
    return {};
  }

  return {
    title: locationPage.seo.metaTitle,
    description: locationPage.seo.metaDescription,
    alternates: {
      canonical: locationPage.seo.canonicalUrl,
      languages: locationPage.seo.hreflang
        ? Object.fromEntries(Object.entries(locationPage.seo.hreflang))
        : undefined,
    },
    openGraph: {
      title: locationPage.seo.metaTitle,
      description: locationPage.seo.metaDescription,
      url: locationPage.seo.canonicalUrl,
      siteName: "Crack Leap Academy",
      images: locationPage.seo.ogImage
        ? [{ url: locationPage.seo.ogImage, width: 1200, height: 630 }]
        : [],
      locale: country.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: locationPage.seo.metaTitle,
      description: locationPage.seo.metaDescription,
      images: locationPage.seo.ogImage ? [locationPage.seo.ogImage] : [],
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
      lp.stateSlug === stateSlug &&
      lp.countrySlug === countrySlug &&
      lp.courseSlug === courseSlug,
  );

  if (
    !country ||
    !state ||
    !city ||
    !course ||
    !locationPage ||
    !isPublishableLocationPage(locationPage)
  ) {
    notFound();
  }

  const localPrice = locationPage.localPrice ?? course.basePrice;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.name} Training in ${city.name}`,
    description: locationPage.seo.metaDescription,
    url: locationPage.seo.canonicalUrl,
    provider: {
      "@type": "EducationalOrganization",
      name: "Crack Leap Academy",
      url: "https://www.arivuon.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: city.address.streetAddress,
        addressLocality: city.address.addressLocality,
        addressRegion: city.address.addressRegion,
        postalCode: city.address.postalCode,
        addressCountry: city.address.addressCountry,
      },
    },
    offers: {
      "@type": "Offer",
      price: localPrice.amount,
      priceCurrency: localPrice.currency,
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
      url: locationPage.seo.canonicalUrl,
    },
    courseMode: ["onsite", "online"],
    educationalLevel: course.level,
    timeRequired: `P${course.durationWeeks}W`,
    teaches: course.learningOutcomes,
    hasCourseInstance: locationPage.batchSchedules
      .filter((b) => b.isOpen)
      .map((batch) => ({
        "@type": "CourseInstance",
        courseMode: batch.mode === "online" ? "online" : "onsite",
        startDate: batch.startDate,
        courseSchedule: {
          "@type": "Schedule",
          scheduleTimezone: "Asia/Kolkata",
          repeatFrequency: batch.schedule,
          byDay: batch.timing,
        },
        offers: {
          "@type": "Offer",
          price: localPrice.amount,
          priceCurrency: localPrice.currency,
          availability:
            (batch.seatsAvailable ?? 0) > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/SoldOut",
        },
      })),
  };

  const faqSchema =
    locationPage.aeo.locationCourseSpecificFAQ &&
    locationPage.aeo.locationCourseSpecificFAQ.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: locationPage.aeo.locationCourseSpecificFAQ.map(
            (item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            }),
          ),
        }
      : null;

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
        item: `https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: course.name,
        item: locationPage.seo.canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationCoursePage
        country={country}
        state={state}
        city={city}
        course={course}
        locationPage={locationPage}
        localPrice={localPrice}
      />
    </>
  );
}

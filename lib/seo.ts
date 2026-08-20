import type { Metadata } from "next";

export const SITE_URL = "https://academy.arivuon.in" as const;
export const SITE_NAME = "Crack Leap Academy" as const;
export const ORGANIZATION_ID = `${SITE_URL}/#organization` as const;
export const WEBSITE_ID = `${SITE_URL}/#website` as const;

export const OFFICIAL_PHONE = "+91 94457 70190";
export const OFFICIAL_EMAIL = "contact@arivuon.in";

// ─── ENTITY KNOWLEDGE GRAPH SCHEMAS ──────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "Organization"],
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        alternateName: ["Crack Leap", "Crack Leap Software Academy", "Crack Leap Tech Academy"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/logo.png`,
          caption: "Crack Leap Academy Logo",
          width: 512,
          height: 512,
        },
        image: {
          "@id": `${SITE_URL}/#logo`,
        },
        description:
          "Crack Leap Academy is a global technology and software engineering academy providing live, mentor-led programs in Python & Django, AWS DevOps, React Development, Data Science, and AI Engineering.",
        telephone: OFFICIAL_PHONE,
        email: OFFICIAL_EMAIL,
        sameAs: [
          "https://www.linkedin.com/company/crack-leap-academy",
          "https://github.com/crack-leap-academy",
          "https://twitter.com/crackleap",
          "https://www.youtube.com/@crackleap",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "AdministrativeArea", name: "Tamil Nadu" },
          { "@type": "City", name: "Chennai" },
          { "@type": "City", name: "Coimbatore" },
          { "@type": "City", name: "Salem" },
          { "@type": "City", name: "Madurai" },
          { "@type": "City", name: "Tiruchirappalli" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Crack Leap Academy Programs",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Python & Django Development",
                url: `${SITE_URL}/courses/python`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "AWS DevOps Engineering",
                url: `${SITE_URL}/courses/devops`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "React Frontend Development",
                url: `${SITE_URL}/courses/react`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Data Science & Machine Learning",
                url: `${SITE_URL}/courses/data-science`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Python AI AWS DevOps Master Combo",
                url: `${SITE_URL}/courses/python-ai-aws-devops-combo`,
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: {
          "@id": ORGANIZATION_ID,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/resources?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  };
}

export function generateCourseSchema({
  name,
  description,
  url,
  price = "9999",
  currency = "INR",
  duration = "P12W",
  syllabusSections = [],
}: {
  name: string;
  description: string;
  url: string;
  price?: string;
  currency?: string;
  duration?: string;
  syllabusSections?: { name: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    educationalCredentialAwarded: "Crack Leap Academy Professional Certificate of Completion",
    timeRequired: duration,
    offers: {
      "@type": "Offer",
      category: "Paid",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`,
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT10H/W",
      },
      {
        "@type": "CourseInstance",
        courseMode: "blended",
        location: {
          "@type": "Place",
          name: "Crack Leap Academy — Chennai Hub",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        },
      },
    ],
    ...(syllabusSections.length > 0
      ? {
          syllabusSections: syllabusSections.map((sec) => ({
            "@type": "Syllabus",
            name: sec.name,
            description: sec.description,
          })),
        }
      : {}),
  };
}

export function generateAeoFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateTechArticleSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  authorName = "Crack Leap Technical Content Team",
}: {
  title: string;
  description: string;
  url: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    datePublished: publishedTime || "2026-01-01T00:00:00Z",
    dateModified: modifiedTime || new Date().toISOString(),
    inLanguage: "en-US",
  };
}

// ─── METADATA HELPERS ─────────────────────────────────────────────────────────

export function generateLocationMetadata({
  country,
  state,
  city,
  course,
  cityDisplay,
  stateDisplay,
  courseDisplay,
}: {
  country: string;
  state: string;
  city: string;
  course: string;
  cityDisplay: string;
  stateDisplay: string;
  courseDisplay: string;
}): Metadata {
  const pageUrl = `${SITE_URL}/locations/${country}/${state}/${city}/${course}`;
  const title = `${courseDisplay} in ${cityDisplay} | Crack Leap Academy`;
  const desc = `Best ${courseDisplay} in ${cityDisplay}, ${stateDisplay}. Crack Leap Academy offers live instructor-led ${courseDisplay} with 1:1 mentorship, real projects, and placement support. Enroll now.`;

  return {
    title,
    description: desc,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: SITE_NAME,
      title,
      description: desc,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export function generateCourseMetadata({
  slug,
  title,
  description,
  price = "9999",
  duration,
  imageUrl,
}: {
  slug: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  imageUrl?: string;
}): Metadata {
  const pageUrl = `${SITE_URL}/courses/${slug}`;
  const image = imageUrl ?? `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

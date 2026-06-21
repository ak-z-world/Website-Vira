// resources/_lib/schema.ts

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  dateModified,
  organization = 'ArivuOn Academy',
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  organization?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    dateModified,
    author: {
      '@type': 'Organization',
      name: organization,
      url: 'https://arivuon.com',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: organization,
      url: 'https://arivuon.com',
    },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `https://arivuon.com${item.href}`,
    })),
  };
}

export function courseSchema({
  name,
  description,
  url,
  provider = 'ArivuOn Academy',
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url,
    provider: {
      '@type': 'EducationalOrganization',
      name: provider,
      url: 'https://arivuon.com',
    },
  };
}

export function webPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ArivuOn Academy',
      url: 'https://arivuon.com',
    },
  };
}
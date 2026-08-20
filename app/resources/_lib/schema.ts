// resources/_lib/schema.ts
import { SITE_URL, SITE_NAME, ORGANIZATION_ID } from '@/lib/seo';

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
  organization = SITE_NAME,
}: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  organization?: string;
}) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: fullUrl,
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: organization,
      url: SITE_URL,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
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
      item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href.startsWith('/') ? '' : '/'}${item.href}`,
    })),
  };
}

export function courseSchema({
  name,
  description,
  url,
  provider = SITE_NAME,
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: fullUrl,
    provider: {
      '@id': ORGANIZATION_ID,
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
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: fullUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
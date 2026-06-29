// resources/_lib/metadata.ts
import type { Metadata } from 'next';

const BASE_URL = 'https://arivuon.com';
const SITE_NAME = 'Crack Leap Academy';

export function generateResourceMetadata({
  title,
  description,
  path,
  keywords = [],
  type = 'article',
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'article' | 'website';
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_IN',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: `${BASE_URL}/og-resources.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${BASE_URL}/og-resources.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}
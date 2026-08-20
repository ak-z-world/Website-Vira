// resources/_lib/metadata.ts
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

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
  const url = path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
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
          url: `${SITE_URL}/og-resources.png`,
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
      images: [`${SITE_URL}/og-resources.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}
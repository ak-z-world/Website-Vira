import type { Metadata } from 'next';
import AboutClient from './_components/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Crack Leap Academy — Redefining Software Training',
  description:
    'Discover Crack Leap Academy mission, values, and industry-first approach to tech education. Empowering developers with Python, AI, DevOps, React, and Data Science skills.',
  keywords: [
    'About Crack Leap Academy',
    'tech education India',
    'software training institute mission',
    'Python DevOps academy team',
  ],
  alternates: { canonical: 'https://academy.arivuon.in/about' },
  openGraph: {
    title: 'About Us | Crack Leap Academy',
    description: 'Redefining tech education through immersive, industry-aligned software engineering programs.',
    url: 'https://academy.arivuon.in/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
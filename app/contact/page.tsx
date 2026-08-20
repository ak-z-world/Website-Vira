import type { Metadata } from 'next';
import ContactClient from './_components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Crack Leap Academy — Free Career Session & Mentorship',
  description:
    'Get in touch with Crack Leap Academy counselors. Book a free career session for Python, AI, AWS DevOps, React, and Data Science training.',
  keywords: [
    'Contact Crack Leap Academy',
    'software training counseling',
    'tech career consultation India',
    'Python DevOps course inquiry',
  ],
  alternates: { canonical: 'https://academy.arivuon.in/contact' },
  openGraph: {
    title: 'Contact Us | Crack Leap Academy',
    description: 'Speak with tech education advisors and start your software engineering career.',
    url: 'https://academy.arivuon.in/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
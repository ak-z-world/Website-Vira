import type { Metadata } from 'next';
import CoursesClient from './_components/CoursesClient';

export const metadata: Metadata = {
  title: 'All Programs & Software Training Courses | Crack Leap Academy',
  description:
    'Explore Crack Leap Academy software engineering courses: Python, Django, AWS DevOps, React, AI, and Data Science. Live mentorship, real-world projects, placement support.',
  keywords: [
    'Python course',
    'AWS DevOps course',
    'React development course',
    'Data Science course',
    'software engineering programs India',
  ],
  alternates: { canonical: 'https://academy.arivuon.in/courses' },
  openGraph: {
    title: 'Software Training Programs | Crack Leap Academy',
    description: 'Industry-aligned Python, AI, DevOps, React, and Data Science programs with real-world projects.',
    url: 'https://academy.arivuon.in/courses',
    type: 'website',
  },
};

export default function CoursesPage() {
  return <CoursesClient />;
}
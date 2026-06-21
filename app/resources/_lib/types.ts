// resources/_lib/types.ts

export interface ResourceMeta {
  title: string;
  description: string;
  slug: string;
  category: 'roadmap' | 'project' | 'interview' | 'tutorial';
  tags: string[];
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  lastUpdated: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RoadmapPhase {
  month: string;
  title: string;
  topics: string[];
  project: string;
  milestone: string;
}

export interface ProjectIdea {
  name: string;
  description: string;
  techStack: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  resumeImpact: string;
  estimatedTime: string;
}

export interface InterviewQuestion {
  id: number;
  question: string;
  answer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Scenario';
  category: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface RelatedResource {
  title: string;
  href: string;
  description: string;
  category: string;
}
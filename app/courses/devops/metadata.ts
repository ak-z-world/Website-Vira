import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arivuonacademy.vercel.app"),

  title:
    "AWS DevOps Course Online | CI/CD, Jenkins, Terraform & Cloud Engineering | ArivuOn Academy",

  description:
    "Join ArivuOn Academy's AWS DevOps course. Learn CI/CD pipelines, Git, Jenkins, Terraform, AWS Cloud infrastructure, and Infrastructure as Code with real-world projects. Become a job-ready DevOps Engineer.",

  applicationName: "ArivuOn Academy",

  authors: [
    {
      name: "ArivuOn Academy",
      url: "https://arivuonacademy.vercel.app",
    },
  ],

  generator: "Next.js",

  creator: "ArivuOn Academy",

  publisher: "ArivuOn Academy",

  category: "Education",

  classification:
    "DevOps Training, AWS Cloud Training, CI/CD Course, Infrastructure as Code Training",

  keywords: [
    // Core DevOps
    "AWS DevOps course",
    "DevOps course online",
    "DevOps certification training",
    "DevOps engineer course",
    "Cloud DevOps training",

    // CI/CD & Tools
    "CI/CD course",
    "Jenkins training",
    "Git and GitHub course",
    "Terraform training",
    "Infrastructure as Code course",

    // AWS specific
    "AWS cloud course",
    "AWS DevOps training",
    "EC2 deployment training",
    "CloudWatch monitoring course",

    // Career keywords
    "DevOps job ready course",
    "DevOps engineer training",
    "cloud engineer course",
    "DevOps beginner to advanced",

    // Global reach
    "DevOps course worldwide",
    "AWS DevOps course international",
    "learn DevOps online globally",
    "remote DevOps training",

    // Geo keywords
    "DevOps course India",
    "DevOps course USA",
    "DevOps course UK",
    "DevOps course Canada",
    "DevOps course Australia",
    "DevOps course Middle East",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://arivuonacademy.vercel.app/courses/devops",
  },

  openGraph: {
    type: "website",

    url: "https://arivuonacademy.vercel.app/courses/devops",

    title:
      "AWS DevOps Course Online | CI/CD, Jenkins & Terraform | ArivuOn Academy",

    description:
      "Master AWS DevOps with real-world CI/CD pipelines, Terraform automation, Jenkins, Git, and Cloud infrastructure deployment.",

    siteName: "ArivuOn Academy",

    locale: "en_US",

    images: [
      {
        url: "https://arivuonacademy.vercel.app/og-image-devops.png",
        width: 1200,
        height: 630,
        alt: "AWS DevOps Course - ArivuOn Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AWS DevOps Course | CI/CD & Cloud Engineering Training",

    description:
      "Become a professional DevOps Engineer with AWS, Jenkins, Git, Terraform and real production deployment training.",

    images: [
      "https://arivuonacademy.vercel.app/og-image-devops.png",
    ],

    creator: "@arivuonacademy",
  },

  other: {
    // Global targeting
    "geo.region": "IN",
    "geo.placename": "Global",
    "geo.position": "20.5937;78.9629",
    ICBM: "20.5937,78.9629",

    distribution: "global",
    coverage: "worldwide",
    target: "developers, cloud engineers, DevOps professionals",
    audience: "students, IT professionals, engineers",
    rating: "general",
    language: "English",

    revisitAfter: "1 days",

    owner: "ArivuOn Academy",

    url: "https://arivuonacademy.vercel.app",

    identifierURL:
      "https://arivuonacademy.vercel.app/courses/devops",
  },
};
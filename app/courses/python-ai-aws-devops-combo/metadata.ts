// D:\Website-Vira\app\courses\datasci\metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.arivuon.in"),

  title:
    "Python + AWS DevOps Course Online | Full Stack Development, CI/CD, Cloud & Terraform | ArivuOn Academy",

  description:
    "Join ArivuOn Academy's Python + AWS DevOps combo course. Learn Python, Django, REST APIs, AWS Cloud, CI/CD with Jenkins, Git, and Terraform. Become a Full Stack + DevOps Engineer with real-world deployment projects.",

  applicationName: "ArivuOn Academy",

  authors: [
    {
      name: "ArivuOn Academy",
      url: "https://academy.arivuon.in",
    },
  ],

  generator: "Next.js",

  creator: "ArivuOn Academy",

  publisher: "ArivuOn Academy",

  category: "Education",

  classification:
    "Programming Course, DevOps Training, AWS Cloud Training, Full Stack Development Course",

  keywords: [
    // Core combo keywords
    "Python AWS DevOps course",
    "Full Stack DevOps course",
    "Python DevOps training online",
    "AWS DevOps certification course",
    "Python full stack with AWS",

    // Cloud + DevOps
    "CI/CD training",
    "Jenkins course",
    "Terraform course",
    "Infrastructure as Code training",
    "AWS cloud deployment course",

    // Development
    "Django full stack course",
    "REST API development course",
    "backend development with AWS",

    // Career keywords
    "DevOps engineer training",
    "Full stack engineer course",
    "cloud engineer course",
    "Python DevOps job ready course",

    // Global reach
    "Python DevOps course worldwide",
    "AWS DevOps course international",
    "learn DevOps online globally",
    "remote DevOps training",

    // Geo keywords
    "Python DevOps course India",
    "Python DevOps course USA",
    "Python DevOps course UK",
    "Python DevOps course Canada",
    "Python DevOps course Australia",
    "Python DevOps course Middle East",
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
    canonical:
      "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
  },

  openGraph: {
    type: "website",

    url: "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",

    title:
      "Python + AWS DevOps Engineering | Full Stack + Cloud Deployment | ArivuOn Academy",

    description:
      "Build applications with Python & Django. Deploy to AWS. Automate with CI/CD and Terraform. Become a Full Stack + DevOps Engineer.",

    siteName: "ArivuOn Academy",

    locale: "en_US",

    images: [
      {
        url: "https://academy.arivuon.in/og-image-combo.png",
        width: 1200,
        height: 630,
        alt: "Python + AWS DevOps Course - ArivuOn Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Python + AWS DevOps Course | Full Stack + Cloud Engineering",

    description:
      "Master Python, Django, AWS, CI/CD, and Terraform in one industry-ready combo program.",

    images: [
      "https://academy.arivuon.in/og-image-combo.png",
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
    target: "developers, students, professionals",
    audience: "programmers, cloud engineers, DevOps engineers",
    rating: "general",
    language: "English",

    revisitAfter: "1 days",

    owner: "ArivuOn Academy",

    url: "https://academy.arivuon.in",

    identifierURL:
      "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
  },
};
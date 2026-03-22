// app/courses/devops/metadata.ts
// ─────────────────────────────────────────────────────────────────────────────
// SEO STRATEGY: DevOps is the highest-salary keyword in tech training.
// Title leads with "AWS DevOps" — the exact phrase hiring managers search.
// Description includes salary range — proven CTR booster in ed-tech SERPs.
// Geo targets Gulf heavily — DevOps engineers in UAE earn $80K–120K/yr.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.arivuon.in"),

  title: "AWS DevOps Course Online | CI/CD, Jenkins & Terraform | ArivuOn Academy",

  description:
    "Master AWS DevOps, CI/CD, Jenkins, Terraform & Docker. Earn ₹12–30 LPA. Live sessions, real deployments, 1:1 mentorship. Enroll at ArivuOn Academy now.",

  applicationName: "ArivuOn Academy",
  authors: [{ name: "ArivuOn Academy", url: "https://academy.arivuon.in" }],
  creator: "ArivuOn Academy",
  publisher: "ArivuOn Academy",
  generator: "Next.js",
  category: "Education",

  classification:
    "DevOps Training, AWS Cloud Course, CI/CD Pipeline Training, Jenkins Course, Terraform Training, Infrastructure as Code, Cloud Engineering",

  keywords: [

    // ── TIER 1: Core DevOps ────────────────────────────────────────────────
    "AWS DevOps course",
    "DevOps course online",
    "DevOps training online",
    "DevOps certification training",
    "AWS DevOps training",
    "CI/CD course online",
    "Jenkins training online",
    "Terraform course online",
    "Docker course online",
    "Kubernetes course online",
    "DevOps engineer course",
    "cloud DevOps training",
    "ArivuOn Academy DevOps",

    // ── TIER 2: Long-tail specific tools ──────────────────────────────────
    "AWS DevOps course with real projects",
    "Jenkins CI/CD pipeline course",
    "Terraform Infrastructure as Code course",
    "Docker containerization training",
    "GitHub Actions course online",
    "AWS EC2 deployment training",
    "AWS ECS Kubernetes training",
    "DevOps bootcamp with live sessions",
    "DevOps course with placement support",
    "DevOps course beginner to advanced",
    "DevOps engineer job ready training",
    "AWS CloudWatch monitoring course",
    "AWS CodePipeline training",
    "GitLab CI/CD course online",
    "Ansible automation course",

    // ── TIER 3: Question-based (featured snippet capture) ─────────────────
    "how to become a DevOps engineer in 2026",
    "best DevOps course for beginners 2026",
    "which AWS DevOps course is best",
    "DevOps course with AWS certification preparation",
    "how long to learn DevOps for a job",
    "DevOps course for software developers",
    "DevOps course for freshers with placement",
    "is DevOps a good career in 2026",
    "DevOps vs cloud engineer which is better",

    // ── TIER 4: Geo-targeted ——————————————————————————————————————————————
    // India
    "DevOps course India",
    "AWS DevOps training India",
    "DevOps course Chennai",
    "DevOps course Bangalore",
    "DevOps course Hyderabad",
    "DevOps course Mumbai",
    "DevOps course Delhi",
    "DevOps course Pune",
    "DevOps course Coimbatore",
    "best DevOps course in India 2026",
    "DevOps training institute India online",
    "AWS DevOps certification India",

    // Gulf & Middle East — DevOps salaries are 3–5x India here
    "DevOps course UAE",
    "DevOps training Dubai",
    "DevOps course Abu Dhabi",
    "AWS DevOps training UAE",
    "DevOps engineer course Gulf",
    "DevOps course Bahrain",
    "DevOps training Manama",
    "DevOps course Kuwait",
    "DevOps course Saudi Arabia",
    "DevOps training Riyadh",
    "DevOps course Qatar",
    "DevOps course Doha",
    "DevOps course Oman",
    "DevOps course Jordan",
    "DevOps training Middle East online",
    "AWS course UAE",
    "cloud engineering course Dubai",

    // Southeast Asia
    "DevOps course Singapore",
    "AWS DevOps training Singapore",
    "DevOps course Malaysia",
    "DevOps course Kuala Lumpur",
    "DevOps training Indonesia",
    "DevOps course Philippines",

    // Africa
    "DevOps course Nigeria",
    "DevOps training Lagos",
    "DevOps course Kenya",
    "DevOps course Nairobi",
    "DevOps course Ghana",
    "DevOps course South Africa",
    "DevOps training Africa",

    // Other global
    "DevOps course UK",
    "DevOps course Canada",
    "DevOps course Australia",
    "DevOps course Germany",
    "DevOps course USA",
    "online DevOps bootcamp worldwide",
    "remote DevOps training international",
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
    canonical: "https://academy.arivuon.in/courses/devops",
    languages: {
      "en":        "https://academy.arivuon.in/courses/devops",
      "en-IN":     "https://academy.arivuon.in/courses/devops",
      "en-AE":     "https://academy.arivuon.in/courses/devops",
      "en-SA":     "https://academy.arivuon.in/courses/devops",
      "en-BH":     "https://academy.arivuon.in/courses/devops",
      "en-KW":     "https://academy.arivuon.in/courses/devops",
      "en-QA":     "https://academy.arivuon.in/courses/devops",
      "en-OM":     "https://academy.arivuon.in/courses/devops",
      "en-SG":     "https://academy.arivuon.in/courses/devops",
      "en-MY":     "https://academy.arivuon.in/courses/devops",
      "en-NG":     "https://academy.arivuon.in/courses/devops",
      "en-KE":     "https://academy.arivuon.in/courses/devops",
      "en-AU":     "https://academy.arivuon.in/courses/devops",
      "en-GB":     "https://academy.arivuon.in/courses/devops",
      "en-CA":     "https://academy.arivuon.in/courses/devops",
      "x-default": "https://academy.arivuon.in/courses/devops",
    },
  },

  openGraph: {
    type: "website",
    url: "https://academy.arivuon.in/courses/devops",
    title: "AWS DevOps Course Online | CI/CD, Jenkins & Terraform | ArivuOn Academy",
    description:
      "Master AWS DevOps with real CI/CD pipelines, Jenkins, Terraform, Docker. Live sessions, 1:1 mentorship. Job-ready in 16 weeks. Enroll now.",
    siteName: "ArivuOn Academy",
    locale: "en_US",
    images: [
      {
        url: "https://academy.arivuon.in/og-image-devops.png",
        width: 1200,
        height: 630,
        alt: "AWS DevOps Course — ArivuOn Academy | CI/CD Jenkins Terraform Training",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AWS DevOps Course Online | CI/CD & Cloud Engineering | ArivuOn Academy",
    description:
      "Master AWS DevOps, Jenkins, Terraform, Docker with live mentorship. Real deployments, placement support. Enroll at ArivuOn Academy.",
    images: ["https://academy.arivuon.in/og-image-devops.png"],
    creator: "@arivuonacademy",
    site: "@arivuonacademy",
  },

  other: {
    "geo.region":    "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu, India",
    "geo.position":  "13.0827;80.2707",
    "ICBM":          "13.0827, 80.2707",

    "distribution": "global",
    "coverage":     "worldwide",
    "rating":       "general",
    "language":     "English",

    "target":   "DevOps engineers, cloud engineers, software developers, freshers, IT professionals",
    "audience": "Students, backend developers, system administrators, cloud aspirants",

    "subject":  "DevOps Engineering, AWS Cloud, CI/CD, Jenkins, Terraform, Docker, Kubernetes",
    "topic":    "DevOps course, AWS training, cloud engineering, CI/CD pipelines, automation",
    "abstract": "ArivuOn Academy DevOps course teaches AWS Cloud, CI/CD with Jenkins and GitHub Actions, container orchestration with Docker, Infrastructure as Code with Terraform, and production deployment. Globally accessible with live mentorship.",

    "revisit-after": "3 days",
    "robots":        "index, follow, max-snippet:-1, max-image-preview:large",

    "owner":          "ArivuOn Academy",
    "url":            "https://academy.arivuon.in/courses/devops",
    "identifier-URL": "https://academy.arivuon.in/courses/devops",
    "category":       "Education, DevOps, Cloud Computing, Technology Training",

    "price":         "10000",
    "priceCurrency": "INR",
  },
};
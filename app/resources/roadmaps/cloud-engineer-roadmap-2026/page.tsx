// app/resources/roadmaps/cloud-engineer-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Cloud Engineer Roadmap 2026 — AWS, GCP, Azure, Terraform, Networking | ArivuOn Academy',
  description:
    'Complete Cloud Engineer roadmap 2026: AWS core services, networking, IAM, Terraform IaC, multi-cloud strategy, cost optimization, cloud security, and architecture certifications. Salary ₹10–50 LPA.',
  keywords:
    'cloud engineer roadmap 2026, aws cloud engineer roadmap india, gcp azure multi cloud roadmap, terraform cloud architecture, cloud solutions architect roadmap 2026',
  openGraph: {
    title: 'Cloud Engineer Roadmap 2026 | ArivuOn Academy',
    url: 'https://arivuon.com/resources/roadmaps/cloud-engineer-roadmap-2026',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/cloud-engineer-roadmap-2026' },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
  { label: 'Cloud Engineer Roadmap 2026', href: '/resources/roadmaps/cloud-engineer-roadmap-2026' },
];

const TOC_ITEMS = [
  { id: 'what-is', label: 'What Is a Cloud Engineer?' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'tools', label: 'Cloud Services & Tools' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'faq', label: 'FAQ' },
];

const MONTHS = [
  {
    month: 'Month 1',
    title: 'Cloud Fundamentals, Linux & Networking',
    topics: [
      'Cloud computing models: IaaS, PaaS, SaaS — when each applies',
      'Linux administration: file system, processes, users, systemd, cron, firewall',
      'Networking deep dive: OSI model, TCP/IP, DNS resolution, BGP concepts',
      'HTTP/HTTPS, TLS handshake, certificate chains, HSTS',
      'Load balancer types: L4 vs L7, round-robin, least connections, sticky sessions',
      'CDN concepts: edge locations, cache headers, origin shield, invalidation',
      'Python/Bash scripting for cloud automation',
    ],
    project: 'Set up a Linux server, configure Nginx as reverse proxy with Let\'s Encrypt TLS, implement UFW firewall rules, and write a Bash health-check monitoring script that alerts via curl webhook.',
    milestone: 'Diagnose any HTTP networking issue from DNS → TLS → load balancer → application without guessing.',
  },
  {
    month: 'Month 2–3',
    title: 'AWS Core Services Deep Dive',
    topics: [
      'AWS global infrastructure: regions, AZs, edge locations, local zones',
      'Compute: EC2 (instance types, EBS volumes, AMIs, placement groups), Auto Scaling Groups',
      'Networking: VPC design, public/private subnets, route tables, Internet Gateway, NAT Gateway',
      'Security groups vs NACLs — stateful vs stateless, rule evaluation order',
      'S3: storage classes, lifecycle policies, replication, presigned URLs, S3 event notifications',
      'IAM: identity federation, SAML SSO, service control policies (SCPs), permission boundaries',
      'RDS: Multi-AZ, read replicas, parameter groups, automated backups, Performance Insights',
      'CloudFront: distribution config, origin access control, Lambda@Edge, signed URLs',
      'Route53: routing policies (latency, geolocation, weighted, failover), health checks',
      'Elastic Load Balancing: ALB rules, target groups, sticky sessions, WAF integration',
    ],
    project: 'Design and deploy a highly available 3-tier web app on AWS: ALB → Auto Scaling EC2 → RDS Multi-AZ → ElastiCache Redis → S3 static assets via CloudFront. Everything via AWS CLI, no console clicks.',
    milestone: 'Architect and justify a 99.99% availability design using AWS primitives.',
  },
  {
    month: 'Month 4',
    title: 'Infrastructure as Code: Terraform & AWS CDK',
    topics: [
      'Terraform HCL: providers, resources, data sources, variables, outputs, locals, modules',
      'State management: remote backend on S3 + DynamoDB, state locking, state manipulation',
      'Terraform modules: structure, inputs/outputs, versioning, public registry',
      'Workspaces for dev/staging/prod environment isolation',
      'Terragrunt: DRY configuration, dependency management across modules',
      'AWS CDK (TypeScript): constructs L1/L2/L3, stacks, environments, assets',
      'Drift detection and import: bringing existing resources under IaC',
      'Policy as code: tfsec, Checkov, Sentinel for compliance enforcement',
    ],
    project: 'Terraform module library: VPC, EKS, RDS, ElastiCache, ALB as composable modules. Deploy the 3-tier app with zero manual AWS console operations. Add Checkov CI scan in GitHub Actions.',
    milestone: 'Provision a complete multi-tier AWS environment from zero to live in under 15 minutes using Terraform.',
  },
  {
    month: 'Month 5',
    title: 'Containers, Kubernetes & AWS EKS',
    topics: [
      'Docker advanced: multi-stage builds, BuildKit cache mounts, distroless images',
      'EKS architecture: managed node groups, Fargate profiles, EKS add-ons',
      'Karpenter: node provisioning, NodePool, EC2NodeClass, spot interruption handling',
      'EKS networking: VPC CNI, security groups for pods, AWS Load Balancer Controller',
      'EKS storage: EBS CSI driver, EFS CSI driver for shared storage',
      'EKS IAM: IRSA (IAM Roles for Service Accounts) — fine-grained pod-level permissions',
      'Cluster upgrade strategy: managed node group rolling update, blue-green node rotation',
      'AWS ECR: image scanning, lifecycle policies, cross-account pull permissions',
    ],
    project: 'Production EKS cluster via Terraform: Karpenter autoscaling, AWS Load Balancer Controller, IRSA for pod S3 access, EBS persistent volumes, cluster autoupgrade workflow documented.',
    milestone: 'EKS cluster scales from 2 to 50 nodes automatically under load, with zero over-provisioned idle capacity.',
  },
  {
    month: 'Month 6',
    title: 'AWS Serverless, Event-Driven & Managed Services',
    topics: [
      'AWS Lambda: runtime, layers, extensions, cold start mitigation, provisioned concurrency',
      'API Gateway: REST vs HTTP API, authorizers, throttling, usage plans',
      'EventBridge: event buses, rules, event patterns, cross-account events',
      'SQS: standard vs FIFO, visibility timeout, dead-letter queues, long polling',
      'SNS: fan-out patterns, message filtering, SNS-to-SQS-to-Lambda',
      'Step Functions: Express vs Standard workflows, error handling, Map state parallelism',
      'AWS MSK (Managed Kafka): cluster config, topic management, consumer group monitoring',
      'AWS OpenSearch: indexing, query DSL, UltraWarm for cost reduction',
    ],
    project: 'Event-driven order processing: SQS → Lambda (validation) → EventBridge → Step Functions workflow → SNS notifications → DynamoDB storage → OpenSearch indexing. End-to-end with DLQ and retry.',
    milestone: 'Design an event-driven system with zero idle compute cost that scales to 10K events/second.',
  },
  {
    month: 'Month 7',
    title: 'Cloud Security & Compliance',
    topics: [
      'AWS Security Hub: aggregating findings from GuardDuty, Inspector, Macie, Config',
      'GuardDuty: threat detection patterns, suppression rules, findings remediation',
      'AWS Config: compliance rules, conformance packs, auto-remediation with SSM',
      'VPC Flow Logs, CloudTrail, and CloudWatch Logs: forensic analysis patterns',
      'Secrets Manager vs Parameter Store: use cases, automatic rotation, cross-account access',
      'KMS: key policies, grants, envelope encryption, key rotation, CMK vs AWS-managed',
      'AWS WAF: managed rule groups, rate limiting, geo-blocking, bot control',
      'AWS Shield and DDoS mitigation strategies',
      'Zero-trust network architecture: private endpoints, PrivateLink, VPC peering vs Transit Gateway',
    ],
    project: 'Security hardening audit: enable Security Hub across all AWS accounts, fix all CRITICAL/HIGH findings, implement GuardDuty auto-remediation via Lambda, document compliance posture against CIS AWS Foundations Benchmark.',
    milestone: 'Pass a CIS AWS Foundations Benchmark Level 1 audit with zero critical findings.',
  },
  {
    month: 'Month 8',
    title: 'Multi-Cloud: GCP & Azure Fundamentals',
    topics: [
      'GCP core: Compute Engine, GKE, Cloud Run, Cloud Storage, Cloud SQL, BigQuery',
      'GCP networking: VPC, Cloud NAT, Cloud Load Balancing, Cloud CDN',
      'GCP IAM: service accounts, Workload Identity Federation',
      'Azure fundamentals: Virtual Machines, AKS, Azure Container Apps, Blob Storage, Azure SQL',
      'Azure networking: VNets, NSGs, Azure Front Door, Application Gateway',
      'Azure Active Directory and Entra ID for enterprise identity',
      'Multi-cloud patterns: cloud-agnostic IaC, data replication, latency trade-offs',
      'Terraform multi-provider: managing AWS + GCP + Azure resources in one codebase',
    ],
    project: 'Multi-cloud deployment: application running on both EKS (AWS) and GKE (GCP) with global routing via Cloudflare. Terraform manages all resources across both providers.',
    milestone: 'Deploy and manage resources across two cloud providers from a single Terraform codebase.',
  },
  {
    month: 'Month 9–10',
    title: 'Cost Optimization, FinOps & Cloud Architecture',
    topics: [
      'FinOps: cost allocation tags, AWS Cost Explorer, Budgets, anomaly detection',
      'Reserved Instances vs Savings Plans vs Spot: decision framework and break-even analysis',
      'Right-sizing EC2 and RDS: Compute Optimizer recommendations, graviton migration',
      'S3 intelligent tiering, Glacier for archival, lifecycle automation',
      'Cloud architecture patterns: cell-based architecture, bulkhead, strangler fig',
      'Disaster recovery: RPO/RTO, backup strategies, cross-region replication, chaos engineering',
      'AWS Well-Architected Framework: all 6 pillars review and remediation',
      'System design for cloud: design a global e-commerce platform, video streaming service',
    ],
    project: 'FinOps project: audit an existing AWS account, identify waste (unused EIPs, over-provisioned RDS, unattached EBS), implement rightsizing recommendations, reduce monthly bill by 30%+ with documented proof.',
    milestone: 'Architect a globally distributed system that meets 99.99% SLA with documented DR plan. Pass AWS Solutions Architect Professional level questions.',
  },
];

const FAQS = [
  {
    question: 'What is the difference between a Cloud Engineer and a DevOps Engineer?',
    answer:
      'Cloud Engineers specialize in cloud platform architecture, managed services selection, cost optimization, multi-cloud strategy, and cloud security. DevOps Engineers focus on CI/CD pipelines, deployment automation, and the developer workflow. In practice, these roles overlap significantly at smaller companies. At larger organizations, Cloud/Platform Engineers own the cloud foundation that DevOps teams build on top of.',
  },
  {
    question: 'Which cloud should I focus on — AWS, GCP, or Azure?',
    answer:
      'AWS for most Indian developers. AWS has 32% market share globally, the deepest service catalog, and is used by the majority of Indian product startups and enterprises (Flipkart, Swiggy, Razorpay, Freshworks all use AWS). Learn AWS thoroughly first (Months 2–7 of this roadmap), then add GCP basics (BigQuery is dominant for analytics) and Azure fundamentals (required for enterprise clients). Multi-cloud awareness matters for senior roles.',
  },
  {
    question: 'What AWS certifications are most valuable in 2026?',
    answer:
      'The most hired-on certifications in India: 1) AWS Certified Solutions Architect – Associate (widest recognition, most requested). 2) AWS Certified Solutions Architect – Professional (senior roles). 3) AWS Certified DevOps Engineer – Professional (operations-heavy roles). 4) AWS Certified Security – Specialty (high pay premium). The CKA (Kubernetes) is equally valued for cloud-native roles. Get the SAA-C03 first — it unlocks most doors.',
  },
  {
    question: 'What is the salary for a Cloud Engineer in India in 2026?',
    answer:
      'Entry-level Cloud Engineer (0–2 years): ₹7–14 LPA. Mid-level (2–4 years): ₹15–30 LPA. Senior Cloud Architect (5+ years): ₹30–60 LPA. Principal/Staff Cloud Architect: ₹55–100 LPA. Cloud Engineers with security specialization or FinOps expertise earn a 20–30% premium. AWS-certified engineers at consulting firms like Deloitte, Accenture, and AWS Partner firms earn strong salaries with rapid career progression.',
  },
  {
    question: 'Do Cloud Engineers need to code?',
    answer:
      'Yes, more than ever. Terraform (HCL), Python (boto3 automation), Bash scripting, and YAML (Kubernetes manifests, CloudFormation) are daily tools. You also write Lambda functions, CDK stacks, and custom automation scripts. Cloud Engineers who cannot code are limited to console-clicking, which is not scalable or hireable. Strong Python + Terraform skills are the minimum bar for mid-level cloud roles.',
  },
  {
    question: 'Is Terraform or AWS CloudFormation better to learn?',
    answer:
      'Terraform. It is cloud-agnostic, has a cleaner syntax, better community modules, and is the default choice at most Indian companies and global organizations. CloudFormation is AWS-only and more verbose. Learn Terraform deeply. Know CloudFormation exists and understand it conceptually (some enterprises are locked into it), but invest your practice time in Terraform. AWS CDK (TypeScript) is also worth knowing for CDK-native shops.',
  },
];

const RELATED = [
  { title: '100+ Cloud Engineer Interview Questions', href: '/resources/interview-questions/cloud-engineer', description: 'AWS architecture, networking, security, Terraform, and cost optimization questions.', category: 'Interview Prep', icon: '💬' },
  { title: 'AWS Project Ideas', href: '/resources/projects/aws-projects', description: '30+ AWS cloud project ideas from beginner to solutions architect level.', category: 'Projects', icon: '🛠️' },
  { title: 'AWS DevOps Roadmap 2026', href: '/resources/roadmaps/aws-devops-roadmap-2026', description: 'CI/CD, Kubernetes, and DevOps skills that complement cloud architecture.', category: 'Roadmap', icon: '☁️' },
  { title: 'Docker Tutorial', href: '/resources/tutorials/docker', description: 'Master Docker containers — foundational for all cloud workloads.', category: 'Tutorial', icon: '📚' },
  { title: 'DevOps Engineer Interview Questions', href: '/resources/interview-questions/devops-engineer', description: 'Overlapping skills — Terraform, Kubernetes, and monitoring questions.', category: 'Interview Prep', icon: '💬' },
  { title: 'AWS DevOps Course', href: '/courses/devops', description: 'Hands-on AWS training with Terraform, EKS, and CI/CD labs.', category: 'Course', icon: '🎓' },
];

export default function CloudEngineerRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Cloud Engineer Roadmap 2026', description: 'AWS, Terraform, EKS, security, multi-cloud, and FinOps roadmap for cloud engineers.', url: 'https://arivuon.com/resources/roadmaps/cloud-engineer-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🌤️</span>
            <div>
              <span className="text-sky-200 text-sm font-semibold uppercase tracking-wider">Cloud Engineer Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Cloud Engineer Roadmap 2026
              </h1>
            </div>
          </div>
          <p className="text-sky-100 text-lg max-w-2xl mb-6">
            AWS core → Terraform → EKS → Serverless → Cloud Security → Multi-cloud → FinOps.
            A 10-month plan to become a Cloud Solutions Architect in India.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '☁️ AWS-First', '🌍 Multi-Cloud', '💰 ₹10–60 LPA Roles'].map(tag => (
              <span key={tag} className="bg-sky-500/30 border border-sky-400/40 px-3 py-1.5 rounded-full text-sky-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Cloud Engineer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Cloud Engineer designs, builds, and maintains cloud infrastructure. They select the right managed services
            for each workload, design network architectures that are secure and scalable, implement cost controls, and
            ensure compliance with security standards. In 2026, nearly every software company runs on cloud infrastructure,
            making Cloud Engineers foundational to product delivery.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cloud Engineers in India work primarily with AWS (dominant at product startups), Azure (dominant in
            enterprise/banking), and increasingly GCP (dominant for BigQuery analytics). Senior Cloud Architects design
            systems for millions of users, evaluate build-vs-buy decisions for managed services, and optimize cloud
            spend — often saving companies millions of rupees annually.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { role: 'Cloud Engineer', focus: 'Deploys and maintains cloud infrastructure', icon: '🔧' },
              { role: 'Cloud Architect', focus: 'Designs scalable, secure cloud systems', icon: '🏗️' },
              { role: 'FinOps Engineer', focus: 'Optimizes cloud cost and efficiency', icon: '💰' },
            ].map(r => (
              <div key={r.role} className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{r.icon}</div>
                <div className="font-bold text-gray-900 text-sm mb-1">{r.role}</div>
                <div className="text-gray-500 text-xs">{r.focus}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Cloud Engineer Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-4">
                  <span className="text-sky-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-sky-500 mt-0.5 flex-shrink-0">✓</span>{t}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700 font-semibold text-sm mb-1">🛠️ Project</p>
                      <p className="text-blue-600 text-sm">{m.project}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-700 font-semibold text-sm mb-1">🎯 Milestone</p>
                      <p className="text-amber-600 text-sm">{m.milestone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Services & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'AWS EC2 / EKS', cat: 'Compute', icon: '💻' },
              { name: 'AWS VPC', cat: 'Networking', icon: '🌐' },
              { name: 'AWS RDS / Aurora', cat: 'Database', icon: '🐘' },
              { name: 'AWS S3 / CloudFront', cat: 'Storage / CDN', icon: '📦' },
              { name: 'AWS Lambda', cat: 'Serverless', icon: 'λ' },
              { name: 'AWS IAM / KMS', cat: 'Security', icon: '🔐' },
              { name: 'Terraform', cat: 'IaC', icon: '🏗️' },
              { name: 'AWS CDK', cat: 'IaC', icon: '⚡' },
              { name: 'Karpenter', cat: 'Autoscaling', icon: '📐' },
              { name: 'AWS GuardDuty', cat: 'Security', icon: '🛡️' },
              { name: 'AWS Config', cat: 'Compliance', icon: '✅' },
              { name: 'GCP BigQuery', cat: 'Analytics', icon: '📊' },
              { name: 'Azure AKS', cat: 'Kubernetes', icon: '⚙️' },
              { name: 'Checkov / tfsec', cat: 'IaC Security', icon: '🔍' },
              { name: 'AWS Cost Explorer', cat: 'FinOps', icon: '💰' },
              { name: 'Prometheus/Grafana', cat: 'Observability', icon: '📈' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-sky-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.cat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Certifications — Priority Order</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sky-600 text-white">
                  <th className="px-4 py-3 text-left">Certification</th>
                  <th className="px-4 py-3 text-left">Level</th>
                  <th className="px-4 py-3 text-left">When</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                  <th className="px-4 py-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AWS Certified Solutions Architect – Associate', 'Associate', 'Month 3', '₹15,000', '⭐⭐⭐⭐⭐'],
                  ['HashiCorp Certified: Terraform Associate', 'Associate', 'Month 4', '₹12,000', '⭐⭐⭐⭐⭐'],
                  ['CKA – Certified Kubernetes Administrator', 'Professional', 'Month 5', '₹30,000', '⭐⭐⭐⭐⭐'],
                  ['AWS Certified Security – Specialty', 'Specialty', 'Month 7', '₹15,000', '⭐⭐⭐⭐⭐'],
                  ['AWS Certified Solutions Architect – Professional', 'Professional', 'Month 10', '₹15,000', '⭐⭐⭐⭐⭐'],
                  ['Google Cloud Professional Cloud Architect', 'Professional', 'Month 8', '₹18,000', '⭐⭐⭐⭐'],
                ].map(([cert, level, when, cost, val], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{cert}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{level}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{when}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cost}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Engineer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sky-600 text-white">
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-left">IT Services / Consulting</th>
                  <th className="px-4 py-3 text-left">Product Startup</th>
                  <th className="px-4 py-3 text-left">Enterprise / MNC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0–2 yr (fresher + certs)', '₹5–10 LPA', '₹8–14 LPA', '₹14–22 LPA'],
                  ['2–4 yr (cloud engineer)', '₹10–18 LPA', '₹15–28 LPA', '₹25–40 LPA'],
                  ['5–8 yr (cloud architect)', '₹18–32 LPA', '₹28–50 LPA', '₹45–75 LPA'],
                  ['8+ yr (principal architect)', '₹32–55 LPA', '₹50–80 LPA', '₹75–120 LPA'],
                ].map(([exp, ...vals], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{exp}</td>
                    {vals.map((v, vi) => (
                      <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">AWS Security Specialty + SAP certifications add 15–25% salary premium. Consulting firms (Deloitte Cloud, Accenture AWS Practice) pay competitively with fast promotion tracks.</p>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Architect on AWS</h2>
          <p className="text-sky-100 mb-6 max-w-lg mx-auto">
            Hands-on AWS training with Terraform, EKS, and solutions architecture labs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/devops" className="bg-white text-sky-700 font-bold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors">
              Enrol in Cloud & DevOps Course →
            </Link>
            <Link href="/resources/interview-questions/cloud-engineer" className="bg-sky-500/30 border border-sky-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-500/50 transition-colors">
              Cloud Interview Prep
            </Link>
          </div>
        </div>

        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
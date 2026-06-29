// app/resources/roadmaps/aws-devops-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'AWS DevOps Engineer Roadmap 2026 — CI/CD, Kubernetes, Terraform | Crack Leap Academy',
  description:
    'Complete AWS DevOps Engineer roadmap 2026: Linux, AWS core services, Terraform, Docker, Kubernetes, CI/CD pipelines, monitoring, and SRE practices. Salary ₹10–50 LPA.',
  keywords:
    'aws devops roadmap 2026, devops engineer roadmap india, kubernetes roadmap, terraform aws guide, cicd pipeline 2026, site reliability engineer roadmap',
  openGraph: {
    title: 'AWS DevOps Engineer Roadmap 2026 | Crack Leap Academy',
    url: 'https://arivuon.com/resources/roadmaps/aws-devops-roadmap-2026',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/aws-devops-roadmap-2026' },
};

const FAQS = [
  {
    question: 'What is DevOps and what does a DevOps Engineer do?',
    answer:
      'DevOps is a set of practices combining software development and IT operations. A DevOps Engineer automates software delivery pipelines, manages cloud infrastructure, monitors production systems, and ensures applications are reliable, scalable, and secure. They bridge development teams and production infrastructure, enabling faster and safer software releases.',
  },
  {
    question: 'Do I need programming knowledge to become a DevOps Engineer?',
    answer:
      'Yes. You need Bash for shell scripting, Python for automation and AWS SDK (boto3), and YAML for Kubernetes manifests and CI/CD pipeline definitions. You also write infrastructure code in Terraform (HCL). The key difference is you\'re writing automation and orchestration code, not business application logic.',
  },
  {
    question: 'Which AWS certifications are most valuable for DevOps in 2026?',
    answer:
      'In priority order: 1) AWS Certified Developer – Associate (validates core AWS knowledge), 2) AWS Certified SysOps Administrator (operations focus), 3) AWS Certified DevOps Engineer – Professional (the gold standard). The CKA (Certified Kubernetes Administrator) is equally valued and often required at product companies.',
  },
  {
    question: 'What is the salary for a DevOps Engineer in India in 2026?',
    answer:
      'Entry-level (0–1 year): ₹5–10 LPA. Mid-level (2–4 years): ₹12–25 LPA. Senior DevOps / SRE (5+ years): ₹25–55 LPA. Platform Engineers at top product companies earn ₹40–80 LPA. DevOps is consistently one of the highest-paying non-management tech tracks in India.',
  },
  {
    question: 'Should I learn Docker before Kubernetes?',
    answer:
      'Absolutely yes. Learn Docker completely first — containers, networking, volumes, multi-stage builds, Docker Compose. Kubernetes builds on those concepts for orchestration at scale. Jumping to Kubernetes without Docker mastery causes deep confusion. Spend 4–6 weeks on Docker before touching Kubernetes.',
  },
  {
    question: 'What is the difference between DevOps, SRE, and Platform Engineering?',
    answer:
      'DevOps is the philosophy and practice of combining dev and ops. SRE (Site Reliability Engineering, from Google) applies software engineering to operations with explicit error budgets and SLOs. Platform Engineering builds internal developer platforms to improve productivity. In 2026 Indian job postings, these three terms are used interchangeably — the skills needed overlap significantly.',
  },
  {
    question: 'Is Kubernetes still important in 2026?',
    answer:
      'Yes, Kubernetes is more important than ever in 2026. Every major Indian product company (Flipkart, Swiggy, Zepto, Razorpay, PhonePe) runs Kubernetes in production. Even companies using AWS ECS or managed container services require engineers who understand Kubernetes concepts. CKA certification has become nearly mandatory for senior DevOps roles.',
  },
];

const MONTHS = [
  {
    month: 'Month 1',
    title: 'Linux & Networking Fundamentals',
    topics: [
      'Linux command line mastery: file system, permissions, user/group management',
      'Process management: ps, top, htop, kill, systemctl, journalctl',
      'Shell scripting with Bash: variables, conditionals, loops, functions, cron',
      'Networking fundamentals: TCP/IP, DNS resolution, HTTP/HTTPS, ports',
      'SSH key-based authentication, SCP, rsync for remote operations',
      'Package management: apt, yum/dnf, snap',
      'File systems: mount, df, du, lsblk, fstab',
      'Firewalls: ufw, iptables basics, security groups concept',
    ],
    project: 'Automate Linux server provisioning: Bash script that installs Nginx, creates a deploy user with sudo permissions, configures UFW, sets up cron jobs, and outputs a health check report.',
    milestone: 'Administer a Linux server confidently from the command line without using a GUI.',
  },
  {
    month: 'Month 2',
    title: 'Git Advanced, Python Scripting & AWS Foundation',
    topics: [
      'Git advanced: branching strategies (GitFlow, trunk-based development), rebasing, cherry-pick',
      'Git hooks, signed commits, submodules',
      'Python scripting for DevOps: boto3 AWS SDK, subprocess, argparse, pathlib',
      'AWS core services: IAM, EC2, VPC, S3, RDS, CloudWatch, Route53',
      'AWS networking: VPCs, subnets (public/private), route tables, NAT gateways, security groups, NACLs',
      'IAM: roles, policies, cross-account access, permission boundaries, least privilege',
      'AWS CLI configuration, named profiles, assume-role scripts',
    ],
    project: 'Python script using boto3: automates EC2 instance launch with custom AMI, attaches security groups, writes outputs to S3, and sends CloudWatch metric on completion.',
    milestone: 'Navigate and configure AWS services confidently from CLI and SDK without using the console.',
  },
  {
    month: 'Month 3–4',
    title: 'Docker & Containerization',
    topics: [
      'Docker architecture: daemon, CLI, images, containers, layers, union FS',
      'Dockerfile best practices: multi-stage builds, layer caching, minimal base images',
      'Docker networking modes: bridge, host, overlay, macvlan',
      'Docker Compose: multi-service local environments with dependencies and health checks',
      'Container security: non-root users, read-only file systems, image scanning with Trivy',
      'Container registries: Docker Hub, AWS ECR, Harbor',
      'Resource limits: CPU, memory constraints, OOM killer behavior',
      'Docker health checks and restart policies',
    ],
    project: 'Containerize a full-stack application (Django API + PostgreSQL + Redis + Nginx reverse proxy) with Docker Compose. Include health checks, named volumes, .env config, and Trivy image scanning.',
    milestone: 'Build production-grade Docker images and run multi-service apps locally with Compose.',
  },
  {
    month: 'Month 5–6',
    title: 'Kubernetes',
    topics: [
      'Kubernetes architecture: API server, etcd, scheduler, controller manager, kubelet, kube-proxy',
      'Core workloads: pods, replicasets, deployments, daemonsets, statefulsets, jobs, cronjobs',
      'Configuration: configmaps, secrets, environment variables, volume mounts',
      'Services: ClusterIP, NodePort, LoadBalancer, ExternalName',
      'Ingress: Nginx Ingress Controller, host/path routing, TLS termination',
      'Resource management: requests, limits, LimitRanges, ResourceQuotas, HPA, VPA, KEDA',
      'Helm 3: charts, values, templates, releases, repositories',
      'Kubernetes RBAC, service accounts, pod security standards',
      'Persistent storage: PV, PVC, StorageClasses, EBS CSI driver',
      'Cluster add-ons: metrics-server, cluster-autoscaler, external-dns',
    ],
    project: 'Deploy the containerized app to Kubernetes (minikube or k3s locally, then EKS): Helm chart, HPA with CPU triggers, Nginx Ingress with TLS, and PVC-backed PostgreSQL StatefulSet.',
    milestone: 'Deploy, scale, and troubleshoot production workloads on Kubernetes without looking at documentation.',
  },
  {
    month: 'Month 7',
    title: 'Infrastructure as Code with Terraform',
    topics: [
      'Terraform fundamentals: providers, resources, data sources, variables, outputs, locals',
      'State management: local vs remote state, S3 backend + DynamoDB locking',
      'Terraform modules: creating, consuming, versioning reusable infrastructure',
      'Workspaces and directory structure for multi-environment (dev/staging/prod)',
      'AWS infrastructure with Terraform: VPC, EC2, RDS, ElastiCache, EKS, ALB, Route53',
      'Terraform import: bringing existing resources under management',
      'Terragrunt for DRY Terraform configurations across environments',
      'Policy as code: tfsec, Checkov, Sentinel for compliance scanning',
    ],
    project: 'Terraform module that provisions a complete production AWS environment: custom VPC with public/private subnets, EKS cluster with managed node groups, RDS PostgreSQL Multi-AZ, ElastiCache Redis cluster, and ALB with HTTPS listener.',
    milestone: 'Provision and destroy complete AWS environments from code in under 20 minutes.',
  },
  {
    month: 'Month 8–9',
    title: 'CI/CD Pipelines & GitOps',
    topics: [
      'GitHub Actions: workflows, jobs, steps, matrix builds, reusable workflows, environments',
      'Jenkins: pipeline as code with Jenkinsfile, shared libraries, distributed builds',
      'GitLab CI/CD: stages, runners, artifacts, environments, protected branches',
      'Pipeline patterns: lint → test → SAST → build image → scan → push ECR → deploy',
      'Blue-green deployments: zero-downtime releases with ALB target group switching',
      'Canary releases: gradual traffic shifting with Argo Rollouts or Flagger',
      'ArgoCD: GitOps continuous delivery for Kubernetes, app-of-apps pattern',
      'Secrets in pipelines: GitHub Actions secrets, AWS Secrets Manager integration',
      'HashiCorp Vault: dynamic secrets, Kubernetes auth, secret rotation',
    ],
    project: 'Complete GitHub Actions pipeline: PR lint/test → merge triggers → Docker build → Trivy scan → push to ECR → ArgoCD syncs to EKS → smoke test → Slack notification. Include rollback on failure.',
    milestone: 'Build a zero-downtime deployment pipeline from a PR merge to running in production in under 10 minutes.',
  },
  {
    month: 'Month 10–11',
    title: 'Observability, Monitoring & SRE',
    topics: [
      'Prometheus: metrics collection, exporters (node, kube-state, blackbox), PromQL',
      'Alertmanager: routing, silences, inhibition, PagerDuty / Slack integration',
      'Grafana: dashboard templates (USE, RED, golden signals), alerting rules',
      'Loki for log aggregation in Kubernetes environments',
      'ELK Stack: Elasticsearch, Logstash/Filebeat, Kibana for structured log search',
      'Distributed tracing: OpenTelemetry instrumentation, Jaeger / Tempo',
      'SRE practices: defining SLIs/SLOs/SLAs, error budget policy, toil reduction',
      'Incident management: runbooks, post-mortem culture, on-call rotations with PagerDuty',
      'AWS CloudWatch: Container Insights, Logs Insights, cost explorer, budgets',
    ],
    project: 'Full observability stack on EKS: kube-prometheus-stack, Grafana dashboards for all services, Loki for pod logs, Jaeger tracing, SLO dashboard for the e-commerce app with alerts for SLO burn rate.',
    milestone: 'Debug production incidents using metrics, logs, and traces in under 15 minutes.',
  },
  {
    month: 'Month 12',
    title: 'Advanced AWS, Security & Platform Engineering',
    topics: [
      'AWS EKS advanced: Fargate profiles, Karpenter node autoscaler, managed add-ons',
      'Service mesh: Istio traffic management, mTLS, circuit breaking, observability',
      'AWS Lambda, API Gateway, and serverless patterns for DevOps tooling',
      'Multi-region and disaster recovery: RTO/RPO, cross-region replication, Route53 failover',
      'FinOps: Reserved Instances, Savings Plans, rightsizing, Spot instance strategies',
      'DevSecOps: SAST (Semgrep), DAST, dependency scanning (Snyk), container image hardening',
      'Platform engineering: Internal Developer Platform (IDP) design with Backstage',
      'System design for DevOps: design CI/CD platform for 500 engineers',
    ],
    project: 'Design and document an IDP (Internal Developer Platform) for a 100-engineer org: golden path templates, self-service infrastructure, automated compliance, and developer portal with Backstage.',
    milestone: 'Architect and justify infrastructure decisions at staff engineer level. Ready for senior DevOps and SRE interviews.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
  { label: 'AWS DevOps Roadmap 2026', href: '/resources/roadmaps/aws-devops-roadmap-2026' },
];

const TOC_ITEMS = [
  { id: 'what-is', label: 'What Is a DevOps Engineer?' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'faq', label: 'FAQ' },
];

const RELATED = [
  { title: '100+ DevOps Interview Questions 2026', href: '/resources/interview-questions/devops-engineer', description: 'Docker, Kubernetes, Terraform, CI/CD, and SRE questions with detailed answers.', category: 'Interview Prep', icon: '💬' },
  { title: '30+ DevOps Project Ideas', href: '/resources/projects/devops-projects', description: 'Hands-on DevOps projects from beginner pipelines to full platform engineering.', category: 'Projects', icon: '🛠️' },
  { title: 'Cloud Engineer Roadmap 2026', href: '/resources/roadmaps/cloud-engineer-roadmap-2026', description: 'Specialize in cloud architecture across AWS, GCP, and Azure.', category: 'Roadmap', icon: '🌤️' },
  { title: 'Docker Tutorial — Complete Guide', href: '/resources/tutorials/docker', description: 'From Docker basics to production container strategies.', category: 'Tutorial', icon: '📚' },
  { title: 'AWS DevOps Course', href: '/courses/devops', description: 'Structured training with hands-on AWS labs and capstone project.', category: 'Course', icon: '🎓' },
  { title: 'Backend Developer Roadmap 2026', href: '/resources/roadmaps/backend-roadmap-2026', description: 'Understand application development to complement your DevOps skills.', category: 'Roadmap', icon: '⚙️' },
];

export default function AWSDevOpsRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'AWS DevOps Engineer Roadmap 2026', description: 'Complete DevOps roadmap: Docker, Kubernetes, Terraform, AWS, CI/CD, and SRE.', url: 'https://arivuon.com/resources/roadmaps/aws-devops-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">☁️</span>
            <div>
              <span className="text-orange-200 text-sm font-semibold uppercase tracking-wider">DevOps Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                AWS DevOps Engineer Roadmap 2026
              </h1>
            </div>
          </div>
          <p className="text-orange-100 text-lg max-w-2xl mb-6">
            From Linux beginner to senior DevOps Engineer. Master Docker, Kubernetes, Terraform, 
            CI/CD pipelines, and AWS to build and run production systems at scale.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 12-Month Plan', '🎯 All Levels', '☁️ AWS-First', '💰 ₹10–50 LPA Roles'].map(tag => (
              <span key={tag} className="bg-orange-500/30 border border-orange-400/40 px-3 py-1.5 rounded-full text-orange-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a DevOps Engineer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A DevOps Engineer is responsible for the infrastructure, tooling, and processes that allow development teams 
            to ship software reliably and rapidly. In 2026, DevOps Engineers at Indian companies manage containerized 
            microservices on Kubernetes, provision cloud infrastructure with Terraform, and build GitHub Actions pipelines 
            that deploy dozens of times per day with zero downtime.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The demand for DevOps Engineers in India has grown 60% year-on-year as companies migrate from 
            on-premise data centers to cloud-native architectures. Companies like Swiggy, Razorpay, PhonePe, 
            and Zepto run their entire infrastructure on Kubernetes and require multiple DevOps engineers per team.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="font-semibold text-orange-800 mb-2">🎯 What You Can Do After This Roadmap</p>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>✅ Build and maintain production Kubernetes clusters on AWS EKS</li>
              <li>✅ Write Terraform modules that provision complete AWS environments</li>
              <li>✅ Create GitHub Actions CI/CD pipelines with zero-downtime deployments</li>
              <li>✅ Set up Prometheus + Grafana observability stacks from scratch</li>
              <li>✅ Implement GitOps workflows with ArgoCD</li>
              <li>✅ Design disaster recovery and multi-region strategies</li>
              <li>✅ Pass senior DevOps / SRE interviews at product companies</li>
            </ul>
          </div>
        </section>

        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
          <div className="space-y-3">
            {[
              { item: 'Basic computer literacy', required: true, note: 'Comfortable using a computer and reading English technical content.' },
              { item: 'Any programming exposure', required: false, note: 'Basic Bash or Python is very helpful — you will learn it in Month 1.' },
              { item: 'Understanding of how the web works', required: false, note: 'Knowing what HTTP, DNS, and servers do will accelerate your learning.' },
              { item: 'Linux installed (VM, WSL2, or native)', required: true, note: 'You need a Linux environment to practice. Ubuntu 22.04 LTS on WSL2 works perfectly on Windows.' },
            ].map(p => (
              <div key={p.item} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${p.required ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {p.required ? '!' : '✓'}
                </span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{p.item}</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${p.required ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                    {p.required ? 'Required' : 'Nice to have'}
                  </span>
                  <p className="text-gray-500 text-sm mt-1">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month AWS DevOps Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-red-700 px-6 py-4">
                  <span className="text-orange-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((topic, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>{topic}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">DevOps Tool Stack 2026</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'Linux (Ubuntu)', cat: 'OS', icon: '🐧' },
              { name: 'Bash / Python', cat: 'Scripting', icon: '💻' },
              { name: 'Docker', cat: 'Containers', icon: '🐳' },
              { name: 'Kubernetes', cat: 'Orchestration', icon: '⚙️' },
              { name: 'Terraform', cat: 'IaC', icon: '🏗️' },
              { name: 'Helm 3', cat: 'K8s Packages', icon: '⛵' },
              { name: 'GitHub Actions', cat: 'CI/CD', icon: '🔄' },
              { name: 'ArgoCD', cat: 'GitOps', icon: '🔵' },
              { name: 'AWS EC2 / EKS', cat: 'Cloud', icon: '☁️' },
              { name: 'Prometheus', cat: 'Monitoring', icon: '📊' },
              { name: 'Grafana', cat: 'Dashboards', icon: '📈' },
              { name: 'ELK Stack', cat: 'Logging', icon: '🔍' },
              { name: 'Trivy', cat: 'Security Scan', icon: '🔒' },
              { name: 'HashiCorp Vault', cat: 'Secrets', icon: '🗝️' },
              { name: 'Nginx', cat: 'Ingress', icon: '⚡' },
              { name: 'Karpenter', cat: 'Autoscaling', icon: '📐' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-orange-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.cat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Certifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="px-4 py-3 text-left">Certification</th>
                  <th className="px-4 py-3 text-left">When to Take</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                  <th className="px-4 py-3 text-left">Hiring Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AWS Certified Developer – Associate', 'Month 2', '₹15,000', '⭐⭐⭐⭐⭐'],
                  ['CKA – Certified Kubernetes Administrator', 'Month 6', '₹30,000', '⭐⭐⭐⭐⭐'],
                  ['AWS Certified DevOps Engineer – Professional', 'Month 10', '₹15,000', '⭐⭐⭐⭐⭐'],
                  ['HashiCorp Certified: Terraform Associate', 'Month 7', '₹12,000', '⭐⭐⭐⭐'],
                  ['AWS Certified Solutions Architect – Associate', 'Month 12', '₹15,000', '⭐⭐⭐⭐⭐'],
                ].map(([cert, when, cost, val], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{cert}</td>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Engineer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-left">IT Services</th>
                  <th className="px-4 py-3 text-left">Product Startup</th>
                  <th className="px-4 py-3 text-left">Unicorn / MNC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0–1 year (Fresher)', '₹4–8 LPA', '₹7–12 LPA', '₹15–25 LPA'],
                  ['2–4 years (Mid-level)', '₹8–14 LPA', '₹12–22 LPA', '₹22–40 LPA'],
                  ['5–8 years (Senior DevOps)', '₹14–22 LPA', '₹22–40 LPA', '₹40–65 LPA'],
                  ['8+ years (Staff SRE)', '₹22–35 LPA', '₹35–60 LPA', '₹60–100 LPA'],
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
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Launch Your DevOps Career Today</h2>
          <p className="text-orange-100 mb-6 max-w-lg mx-auto">
            Hands-on AWS and Kubernetes training with real CI/CD pipeline labs from day one.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/devops" className="bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
              Enrol in DevOps Course →
            </Link>
            <Link href="/resources/interview-questions/devops-engineer" className="bg-orange-500/30 border border-orange-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-500/50 transition-colors">
              DevOps Interview Prep
            </Link>
          </div>
        </div>

        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
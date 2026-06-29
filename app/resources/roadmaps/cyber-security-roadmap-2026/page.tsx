// app/resources/roadmaps/cyber-security-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Cybersecurity Engineer Roadmap 2026 — Ethical Hacking, Cloud Security, SOC | Crack Leap Academy',
  description:
    'Complete Cybersecurity Engineer roadmap 2026: networking fundamentals, Linux security, ethical hacking, web app security, SOC operations, cloud security (AWS), and certifications CEH/OSCP/AWS Security. Salary ₹8–45 LPA in India.',
  keywords:
    'cybersecurity roadmap 2026, ethical hacking roadmap india, oscp roadmap, cloud security engineer roadmap, soc analyst roadmap, how to become cybersecurity engineer india',
  openGraph: {
    title: 'Cybersecurity Engineer Roadmap 2026 | Crack Leap Academy',
    url: 'https://arivuon.com/resources/roadmaps/cyber-security-roadmap-2026',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/cyber-security-roadmap-2026' },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
  { label: 'Cybersecurity Roadmap 2026', href: '/resources/roadmaps/cyber-security-roadmap-2026' },
];

const TOC_ITEMS = [
  { id: 'what-is', label: 'What Is a Cybersecurity Engineer?' },
  { id: 'specializations', label: 'Specialization Tracks' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'tools', label: 'Security Tools' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'faq', label: 'FAQ' },
];

const MONTHS = [
  {
    month: 'Month 1',
    title: 'Networking & Operating System Fundamentals',
    topics: [
      'OSI and TCP/IP models: layer-by-layer protocol analysis',
      'IP addressing: subnetting, CIDR, NAT, IPv4 vs IPv6',
      'Core protocols: DNS, DHCP, ARP, ICMP, HTTP/S, FTP, SSH, TLS handshake',
      'Packet analysis with Wireshark: capturing, filtering, protocol dissection',
      'Linux security fundamentals: users, permissions, PAM, sudoers, file capabilities',
      'Windows fundamentals: Active Directory, NTLM/Kerberos, registry, event logs',
      'Virtualization: VMware/VirtualBox lab setup, network interfaces, NAT vs bridged',
    ],
    project: 'Home lab: VirtualBox network with Kali Linux, Metasploitable 2, and Windows Server 2019 VM. Capture and analyze login traffic with Wireshark. Document every protocol observed.',
    milestone: 'Analyze any network packet capture and identify protocols, anomalies, and potential security issues.',
  },
  {
    month: 'Month 2',
    title: 'Linux Security & Python for Security',
    topics: [
      'Linux hardening: CIS benchmarks, disabling unnecessary services, SSH key hardening',
      'File system security: ACLs, sticky bit, SUID/SGID auditing',
      'Log analysis: auth.log, syslog, journalctl — identifying suspicious patterns',
      'Python for security: socket programming, scapy for packet crafting, requests for HTTP automation',
      'Writing security scripts: port scanner, banner grabber, subdomain enumerator',
      'Regular expressions for log parsing and IoC extraction',
      'Bash scripting for security automation: cron-based log monitoring, alerting',
    ],
    project: 'Python security toolkit: port scanner with service fingerprinting, banner grabber, brute-force SSH detector from auth.log, subdomain enumerator. All with proper error handling and CLI arguments.',
    milestone: 'Write a Python tool that detects brute-force attempts in auth.log and blocks offending IPs via iptables.',
  },
  {
    month: 'Month 3–4',
    title: 'Ethical Hacking & Penetration Testing Fundamentals',
    topics: [
      'Penetration testing methodology: PTES, OWASP Testing Guide phases',
      'Reconnaissance: passive (OSINT — Maltego, theHarvester, Shodan) and active (nmap, masscan)',
      'Vulnerability scanning: Nessus, OpenVAS — interpreting results and CVSS scoring',
      'Exploitation: Metasploit Framework — modules, payloads, sessions, post-exploitation',
      'Password attacks: hashcat, John the Ripper, rainbow tables, credential stuffing',
      'Network attacks: ARP spoofing, MITM with bettercap, DNS poisoning',
      'Privilege escalation: Linux (SUID, sudo misconfig, cron jobs, writable PATH) and Windows (token impersonation, unquoted service paths)',
      'Practice platforms: TryHackMe (beginner), HackTheBox (intermediate)',
    ],
    project: 'Complete 10 TryHackMe rooms covering recon, exploitation, and privilege escalation. Document each as a professional pentest report with executive summary, findings, and remediation.',
    milestone: 'Solve a medium-difficulty HackTheBox machine from recon to root without hints.',
  },
  {
    month: 'Month 5',
    title: 'Web Application Security',
    topics: [
      'OWASP Top 10 2024: injection, broken auth, IDOR, security misconfiguration, SSRF, XXE',
      'SQL injection: manual exploitation, sqlmap, blind SQLi, time-based extraction',
      'Cross-site scripting (XSS): reflected, stored, DOM-based — bypassing filters',
      'CSRF, clickjacking, open redirects — impact and exploit chains',
      'Authentication flaws: JWT attacks (alg:none, weak secret, kid injection), OAuth misconfigs',
      'IDOR and access control testing: horizontal and vertical privilege escalation',
      'Burp Suite Pro: intercepting proxy, repeater, intruder, scanner, active crawl',
      'API security testing: GraphQL introspection, REST mass assignment, broken object-level auth',
    ],
    project: 'Web app pentest lab: deploy DVWA and Juice Shop, exploit all OWASP Top 10 categories with Burp Suite, write a professional pentest report with CVSS scores and proof-of-concept screenshots.',
    milestone: 'Find and document 5 real vulnerabilities in bug bounty programs (HackerOne or Bugcrowd) — earn first bounty.',
  },
  {
    month: 'Month 6',
    title: 'SOC Operations & Threat Intelligence',
    topics: [
      'SOC analyst workflow: triage, investigation, escalation, and containment',
      'SIEM platforms: Splunk fundamentals — search, alerts, dashboards, correlation rules',
      'ELK SIEM: Elasticsearch ingestion, Kibana dashboards, detection rules',
      'IoC types: file hashes, IP addresses, domains, URLs, YARA rules, Sigma rules',
      'MITRE ATT&CK framework: tactics, techniques, sub-techniques, detection mappings',
      'Threat intelligence: OSINT feeds, VirusTotal, AbuseIPDB, MISP integration',
      'Incident response lifecycle: preparation, detection, containment, eradication, recovery',
      'Digital forensics basics: memory dumps (Volatility), disk imaging (dd, FTK Imager), timeline analysis',
    ],
    project: 'Deploy Elastic SIEM: ingest logs from 3 sources (Linux syslog, Windows Event, Nginx), create detection rules for brute force and lateral movement mapped to MITRE ATT&CK, build a SOC dashboard.',
    milestone: 'Detect, investigate, and document a simulated attack scenario in the SIEM from initial alert to full incident report.',
  },
  {
    month: 'Month 7',
    title: 'Cloud Security (AWS)',
    topics: [
      'AWS shared responsibility model — what AWS secures vs what you secure',
      'IAM security: least privilege analysis, IAM Access Analyzer, unused permissions',
      'AWS Security Hub: CIS AWS Foundations Benchmark, NIST CSF, PCI DSS controls',
      'GuardDuty: threat detection, findings remediation, automated response with Lambda',
      'AWS Config + Security Hub: continuous compliance, auto-remediation patterns',
      'AWS CloudTrail: log analysis, detecting API anomalies, CloudTrail Insights',
      'VPC security: private subnets, VPC Flow Logs analysis, PrivateLink',
      'AWS WAF: OWASP managed rules, rate limiting, custom rules, logging',
      'Container security: ECR image scanning, EKS pod security standards, Falco runtime security',
      'Cloud penetration testing: Pacu framework, S3 bucket misconfiguration hunting, IAM escalation paths',
    ],
    project: 'AWS security audit: enable Security Hub across all services, simulate 5 attack scenarios (S3 public exposure, IAM key leak, GuardDuty findings), build automated remediation Lambdas, document full report.',
    milestone: 'Achieve CIS AWS Foundations Level 1 compliance with zero critical findings. Detect a simulated key compromise in under 5 minutes via GuardDuty alert.',
  },
  {
    month: 'Month 8',
    title: 'Cryptography, PKI & Secure Architecture',
    topics: [
      'Cryptography fundamentals: symmetric (AES), asymmetric (RSA, ECDSA), hashing (SHA-256, bcrypt)',
      'TLS deep dive: certificate validation, HSTS, HPKP, certificate transparency',
      'PKI: root CAs, intermediate CAs, certificate issuance, OCSP, CRL, Let\'s Encrypt internals',
      'Secrets management: HashiCorp Vault — dynamic secrets, PKI backend, K/V secrets engine',
      'Secure coding practices: OWASP ASVS, input validation, parameterized queries, output encoding',
      'Threat modeling: STRIDE methodology, attack trees, data flow diagrams for security',
      'Zero-trust architecture: BeyondCorp model, micro-segmentation, device trust',
      'Secure SDLC: SAST (Semgrep, SonarQube), DAST (OWASP ZAP), SCA (Snyk, Dependabot)',
    ],
    project: 'Implement a secure SDLC pipeline: GitHub Actions with Semgrep SAST, Snyk SCA, OWASP ZAP DAST, secret scanning, and Vault for runtime secrets. Zero hardcoded credentials anywhere.',
    milestone: 'Security pipeline catches 100% of intentionally injected OWASP vulnerabilities in test PR before merge.',
  },
  {
    month: 'Month 9–10',
    title: 'Advanced Exploitation, Red Teaming & Career Prep',
    topics: [
      'Active Directory attacks: Kerberoasting, AS-REP roasting, Pass-the-Hash, DCSync, Golden/Silver tickets',
      'Red team tools: BloodHound for AD enumeration, Cobalt Strike concepts, C2 frameworks',
      'Advanced web attacks: SSRF to cloud metadata, XXE, deserialization vulnerabilities, prototype pollution',
      'Buffer overflow basics: x86 stack overflow, return address overwrite, NX bypass concepts',
      'Malware analysis: static analysis with IDA/Ghidra, dynamic analysis in sandbox (Any.run)',
      'Purple teaming: mapping attack TTPs to detection rules, validating SIEM coverage',
      'Bug bounty strategy: scope analysis, asset enumeration, vulnerability chaining for impact',
      'OSCP-style practice: 30 HackTheBox machines (easy/medium/hard), Buffer Overflow practice',
    ],
    project: 'Complete 30 HackTheBox machines documenting each as a pentest report. Submit 5 quality bug bounty reports to public programs. Prepare OSCP exam lab environment.',
    milestone: 'Pass the OSCP exam or achieve HackTheBox Pro Hacker rank. Land first security role or CTF team win.',
  },
];

const FAQS = [
  {
    question: 'What is the best way to start a cybersecurity career in India?',
    answer:
      'Start with networking and Linux fundamentals (Month 1–2 of this roadmap). Then move to ethical hacking platforms like TryHackMe and HackTheBox. Get your CEH certification for IT services hiring, then work toward OSCP for red team/penetration testing roles. For SOC analyst roles, learn Splunk or Elastic SIEM. Bug bounty programs let you earn money while building a portfolio. Many Indian companies also hire for cloud security roles — AWS Security Specialty + cloud experience is a very strong combination in 2026.',
  },
  {
    question: 'Is ethical hacking legal in India?',
    answer:
      'Ethical hacking performed with explicit written authorization from the target organization is legal under Indian law. Unauthorized hacking is a criminal offense under the IT Act 2000, Section 66. Bug bounty programs provide explicit authorization to test their systems within defined scope. Always get written permission before testing any system you do not own. Practice on legal platforms: HackTheBox, TryHackMe, DVWA, VulnHub, and Hack The Box Pro Labs.',
  },
  {
    question: 'What certifications are most valued for cybersecurity in India?',
    answer:
      'For penetration testing: OSCP (most respected globally, premium salary) and CEH (widely recognized in Indian IT services). For cloud security: AWS Certified Security – Specialty (highest value in India given AWS dominance). For SOC/blue team: CompTIA Security+ (entry-level), CompTIA CySA+ (SOC analyst). For GRC/compliance: CISM and CISSP (required for senior management and consulting roles). Pick based on your specialization track.',
  },
  {
    question: 'What is the salary for cybersecurity engineers in India in 2026?',
    answer:
      'Entry-level Security Analyst (0–2 years, CEH): ₹5–10 LPA. Mid-level penetration tester/cloud security (2–4 years): ₹12–28 LPA. Senior security engineer/red team (5+ years, OSCP): ₹28–50 LPA. Principal Security Architect or CISO track: ₹50–100+ LPA. Bug bounty hunters in India earn $5,000–$50,000+ per year from programs like HackerOne. The cybersecurity talent shortage makes this one of the fastest-salary-growing tech tracks in India.',
  },
  {
    question: 'Should I focus on red team (offensive) or blue team (defensive)?',
    answer:
      'Both tracks are in demand. Red team (offensive): penetration testing, ethical hacking, bug bounties — requires deep technical exploitation skills, better for independent workers and specialized firms. Blue team (defensive): SOC analyst, incident response, threat intelligence, cloud security — more jobs available, better suited for corporate roles. The most valuable and highest-paid profile in 2026 is the purple teamer who understands both. Start with blue team basics, learn offensive techniques to better understand what you\'re defending against.',
  },
  {
    question: 'How do I build a cybersecurity portfolio without work experience?',
    answer:
      'Five proven approaches: 1) HackTheBox/TryHackMe machine write-ups published on Medium or your blog. 2) Bug bounty reports submitted to HackerOne or Bugcrowd public programs — even informational findings count. 3) CTF (Capture The Flag) competition participation — document your solutions. 4) Open-source security tool contributions on GitHub. 5) Home lab documentation: build a vulnerable network, attack it, harden it, document everything. Recruiters at Indian security firms specifically look for HackTheBox rank and bug bounty history.',
  },
  {
    question: 'Is OSCP worth pursuing for a cybersecurity career in India?',
    answer:
      'Yes, OSCP is the most respected penetration testing certification globally and in India. It is a practical 24-hour exam where you must compromise 5 machines — no multiple-choice. Holding an OSCP signals that you can actually hack, not just answer questions about hacking. Indian IT services firms (TCS Security, Wipro CyberDefense, Infosys Cybersecurity) and specialized firms (Deloitte, KPMG, PwC) actively recruit OSCP holders. It opens doors to ₹20–40 LPA roles at 3–5 years experience.',
  },
];

const RELATED = [
  { title: 'Cloud Engineer Roadmap 2026', href: '/resources/roadmaps/cloud-engineer-roadmap-2026', description: 'AWS security is a major part of cloud engineering — complement your skills.', category: 'Roadmap', icon: '🌤️' },
  { title: 'AWS DevOps Roadmap 2026', href: '/resources/roadmaps/aws-devops-roadmap-2026', description: 'Infrastructure and deployment skills that underpin secure system design.', category: 'Roadmap', icon: '☁️' },
  { title: 'DevOps Engineer Interview Questions', href: '/resources/interview-questions/devops-engineer', description: 'Security questions appear heavily in DevSecOps interviews.', category: 'Interview Prep', icon: '💬' },
  { title: 'AWS Projects', href: '/resources/projects/aws-projects', description: 'AWS security hardening projects to build your cloud security portfolio.', category: 'Projects', icon: '🛠️' },
  { title: 'Cloud Engineer Interview Questions', href: '/resources/interview-questions/cloud-engineer', description: 'Cloud security architecture questions for senior engineer interviews.', category: 'Interview Prep', icon: '💬' },
  { title: 'AWS DevOps Course', href: '/courses/devops', description: 'AWS and infrastructure training with security-focused labs.', category: 'Course', icon: '🎓' },
];

export default function CyberSecurityRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Cybersecurity Engineer Roadmap 2026', description: 'Ethical hacking, cloud security, SOC operations, OSCP prep, and certifications.', url: 'https://arivuon.com/resources/roadmaps/cyber-security-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-red-700 via-red-600 to-rose-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🔒</span>
            <div>
              <span className="text-red-200 text-sm font-semibold uppercase tracking-wider">Cybersecurity Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Cybersecurity Engineer Roadmap 2026
              </h1>
            </div>
          </div>
          <p className="text-red-100 text-lg max-w-2xl mb-6">
            Networking → Linux → Ethical Hacking → Web App Security → SOC → Cloud Security → OSCP.
            A 10-month plan to become a cybersecurity engineer in India.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '🎯 All Levels', '🔴 Red + Blue Team', '💰 ₹8–50 LPA Roles'].map(tag => (
              <span key={tag} className="bg-red-500/30 border border-red-400/40 px-3 py-1.5 rounded-full text-red-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Cybersecurity Engineer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Cybersecurity Engineer protects digital systems, networks, and data from unauthorized access, attacks,
            and damage. The field spans offensive security (finding vulnerabilities before attackers do), defensive
            security (detecting and responding to attacks), and security engineering (building secure systems from the start).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            India faces a severe cybersecurity talent shortage: NASSCOM estimates India needs 1 million cybersecurity
            professionals by 2025, with current supply meeting only 10% of demand. This makes cybersecurity one of the
            fastest-growing and most recession-proof tech careers in 2026.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="font-semibold text-red-800 mb-3">🎯 Specialization Tracks — Choose Your Focus</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { track: '🔴 Red Team / Pentesting', desc: 'Offensive security, ethical hacking, OSCP, bug bounties. Highest technical depth.' },
                { track: '🔵 Blue Team / SOC', desc: 'Detection, incident response, SIEM, threat intelligence. Most jobs available.' },
                { track: '☁️ Cloud Security', desc: 'AWS/Azure/GCP security, IAM, GuardDuty, compliance. Highest pay growth.' },
                { track: '🏗️ AppSec / DevSecOps', desc: 'Secure SDLC, code review, SAST/DAST, security architecture. Engineering-heavy.' },
              ].map(t => (
                <div key={t.track} className="bg-white border border-red-100 rounded-lg p-3">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{t.track}</div>
                  <div className="text-gray-500 text-xs">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Cybersecurity Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-rose-700 px-6 py-4">
                  <span className="text-red-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">✓</span>{t}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Tools Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'Kali Linux', cat: 'Pentesting OS', icon: '🐉' },
              { name: 'Burp Suite', cat: 'Web Testing', icon: '🔮' },
              { name: 'Nmap / Masscan', cat: 'Recon', icon: '🗺️' },
              { name: 'Metasploit', cat: 'Exploitation', icon: '💥' },
              { name: 'Wireshark', cat: 'Packet Analysis', icon: '🦈' },
              { name: 'Hashcat / John', cat: 'Password Cracking', icon: '🔑' },
              { name: 'BloodHound', cat: 'AD Enumeration', icon: '🩸' },
              { name: 'Splunk / ELK', cat: 'SIEM', icon: '📊' },
              { name: 'AWS GuardDuty', cat: 'Cloud Security', icon: '🛡️' },
              { name: 'Semgrep', cat: 'SAST', icon: '🔍' },
              { name: 'OWASP ZAP', cat: 'DAST', icon: '⚡' },
              { name: 'Snyk', cat: 'SCA', icon: '🦉' },
              { name: 'Nessus / OpenVAS', cat: 'Vuln Scanning', icon: '🔬' },
              { name: 'Volatility', cat: 'Memory Forensics', icon: '💾' },
              { name: 'YARA', cat: 'Malware Rules', icon: '🎯' },
              { name: 'HashiCorp Vault', cat: 'Secrets Mgmt', icon: '🗝️' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-red-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.cat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cybersecurity Certifications — India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-4 py-3 text-left">Certification</th>
                  <th className="px-4 py-3 text-left">Track</th>
                  <th className="px-4 py-3 text-left">Difficulty</th>
                  <th className="px-4 py-3 text-left">Cost</th>
                  <th className="px-4 py-3 text-left">India Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CompTIA Security+', 'Blue Team / General', 'Entry', '₹22,000', '⭐⭐⭐'],
                  ['CEH – Certified Ethical Hacker', 'Red Team', 'Intermediate', '₹35,000', '⭐⭐⭐⭐'],
                  ['eJPT (INE Security)', 'Red Team', 'Entry', '₹5,000', '⭐⭐⭐'],
                  ['AWS Certified Security – Specialty', 'Cloud Security', 'Advanced', '₹15,000', '⭐⭐⭐⭐⭐'],
                  ['OSCP (Offensive Security)', 'Red Team', 'Advanced', '₹75,000', '⭐⭐⭐⭐⭐'],
                  ['CompTIA CySA+', 'SOC / Blue Team', 'Intermediate', '₹22,000', '⭐⭐⭐⭐'],
                  ['CISM (ISACA)', 'GRC / Management', 'Expert', '₹45,000', '⭐⭐⭐⭐'],
                  ['CISSP (ISC2)', 'Security Architect', 'Expert', '₹60,000', '⭐⭐⭐⭐⭐'],
                ].map(([cert, track, diff, cost, val], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100">{cert}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{track}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{diff}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{cost}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">OSCP + AWS Security Specialty is the highest-value dual certification for Indian cybersecurity professionals in 2026.</p>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cybersecurity Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-4 py-3 text-left">Role / Experience</th>
                  <th className="px-4 py-3 text-left">IT Services</th>
                  <th className="px-4 py-3 text-left">Product / Fintech</th>
                  <th className="px-4 py-3 text-left">Security Firm / MNC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SOC Analyst (0–2 yr)', '₹4–7 LPA', '₹6–10 LPA', '₹8–14 LPA'],
                  ['Pentester / AppSec (2–4 yr)', '₹8–16 LPA', '₹14–25 LPA', '₹20–38 LPA'],
                  ['Cloud Security Eng (3–6 yr)', '₹12–22 LPA', '₹20–38 LPA', '₹35–58 LPA'],
                  ['Senior Security Architect (6+ yr)', '₹22–40 LPA', '₹38–65 LPA', '₹55–100 LPA'],
                  ['CISO / Principal (10+ yr)', '₹40–80 LPA', '₹65–120 LPA', '₹90–200 LPA'],
                ].map(([role, ...vals], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{role}</td>
                    {vals.map((v, vi) => (
                      <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">OSCP holders earn 25–40% above market rate. Bug bounty income can exceed ₹30–50 LPA for top Indian researchers on HackerOne.</p>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Start Your Security Career</h2>
          <p className="text-red-100 mb-6 max-w-lg mx-auto">
            Cloud and infrastructure training with security-focused labs and AWS hardening projects.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/devops" className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">
              Enrol in Cloud Security Course →
            </Link>
            <Link href="/resources/interview-questions/cloud-engineer" className="bg-red-500/30 border border-red-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-500/50 transition-colors">
              Security Interview Prep
            </Link>
          </div>
        </div>

        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}
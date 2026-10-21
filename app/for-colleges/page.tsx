import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Cta } from "@/components/SectionsB";
import { COURSES } from "@/data/courses";
import { SITE } from "@/data/content";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "For Colleges | College Partnerships & MOU Training Programs",
  description:
    "Partner with CrackLeap Academy (Vertex Loop, Chennai) for live, mentor-led software training and workshops for your students. College pricing is custom per college and package — founding MOU partnerships now open.",
  alternates: { canonical: "https://crackleap.vertexloop.in/for-colleges" },
  openGraph: {
    title: "For Colleges | CrackLeap Academy College Partnerships",
    description:
      "Live, engineer-led training programs and workshops for your students — custom-quoted college partnerships, verifiable certificates and skill reports, no placement promises.",
    url: "https://crackleap.vertexloop.in/for-colleges",
  },
};

const COLLEGE_FAQS = [
  {
    q: "What does a CrackLeap college partnership include?",
    a: "Live, mentor-led training programs and workshops for your students, taught by active Vertex Loop engineers: project-based learning, 1:1 mentorship and code reviews, career-preparation guidance, and a verifiable certificate plus skill report for every participating student.",
  },
  {
    q: "How is college pricing decided?",
    a: "College pricing is custom — it depends on your college, the programs you choose and the size of the cohort. We share a written proposal with the full quote before anything is signed; there is no public price list for institutional partnerships.",
  },
  {
    q: "How is the training delivered?",
    a: "Training is delivered live by Vertex Loop engineers, with the delivery format and cohort schedules coordinated with your institution in advance.",
  },
  {
    q: "Do you guarantee placements for our students?",
    a: "No — and we will not promise that to you or to students. CrackLeap provides career-preparation guidance, portfolio building and interview preparation. Students earn a verifiable certificate and skill report based on the project work they actually complete.",
  },
  {
    q: "Which programs can our students take?",
    a: "The full CrackLeap catalog: Python + Agentic AI + AWS (our flagship), Python Django Development, Python Full Stack Development, React JS Development and AWS & DevOps Engineering, plus Generative AI. Programs can be sequenced for different years and departments.",
  },
  {
    q: "How do we start a partnership?",
    a: `Write to ${SITE.email} or use the contact form and select "College / institutional partnership". Founding college MOU partnerships are now open — we will schedule a call, understand your cohort and goals, and send a custom proposal.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COLLEGE_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "For Colleges", item: `${SITE.url}/for-colleges` },
  ],
};

const STEPS = [
  {
    n: "01",
    title: "Talk to us",
    text: "A short call or email exchange about your institution, departments, cohort size and the outcomes you want for your students.",
  },
  {
    n: "02",
    title: "Custom proposal",
    text: "A written proposal with the programs, schedule and a custom quote for your college and package — no public price list, no surprises later.",
  },
  {
    n: "03",
    title: "Live delivery",
    text: "Vertex Loop engineers teach your students live — projects, mentorship and code reviews throughout the program.",
  },
  {
    n: "04",
    title: "Certificates & reports",
    text: "Every participating student receives a verifiable certificate and a skill report based on the work they completed.",
  },
];

export default function ForCollegesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="For colleges"
        title={<>Live software training for <span className="grad-text">your students</span></>}
        lead="CrackLeap partners with colleges to deliver live, mentor-led, project-based training — taught by Vertex Loop engineers. Founding MOU partnerships are now open, priced custom for your college and package."
        crumb="For Colleges"
      />

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "1.5rem", marginBottom: 14 }}>Why colleges work with CrackLeap</h2>
            <p style={{ marginBottom: 14, color: "var(--body)", maxWidth: "72ch" }}>
              Your students learn from active software engineers — not full-time trainers — in live
              cohorts run from Chennai, India. Every program is project-based: students
              finish with work they can demo, a verifiable certificate and a skill report, plus
              career-preparation guidance for placements and internships. We are explicit about
              what we do not do: CrackLeap does not guarantee placements.
            </p>
          </Reveal>

          <div className="steps" style={{ marginTop: 36 }}>
            {STEPS.map((s) => (
              <Reveal key={s.n}>
                <div className="step">
                  <div className="step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 style={{ fontSize: "1.5rem", margin: "56px 0 6px" }}>Programs available to your students</h2>
            <div className="grid-2" style={{ marginTop: 20 }}>
              {COURSES.map((c) => (
                <p key={c.slug} style={{ padding: "8px 0", fontWeight: 600, color: "var(--ink)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--violet-600)", marginTop: 2 }}><CheckIcon size={16} /></span>
                  <span>
                    <Link href={`/courses/${c.slug}`}>{c.name}</Link>
                    <span style={{ display: "block", fontWeight: 500, color: "var(--muted)", fontSize: "0.92rem" }}>{c.tagline}</span>
                  </span>
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontSize: "1.5rem", margin: "56px 0 18px" }} className="center">College partnership questions</h2>
            <div className="faq-wrap">
              {COLLEGE_FAQS.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary className="faq-q" style={{ cursor: "pointer", listStyle: "none" }}>{f.q}</summary>
                  <div className="faq-a" style={{ maxHeight: "none" }}>
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="center" style={{ marginTop: 32 }}>
              <Link href="/contact" className="btn btn-primary">
                Discuss a partnership <ArrowRightIcon size={17} />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}

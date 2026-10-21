import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon, BuildingIcon, CheckIcon, UsersIcon } from "./icons";

const POINTS = [
  {
    t: "Live programs for your students",
    d: "Mentor-led, project-based training in Python + Agentic AI + AWS, Django, Full Stack, React and AWS & DevOps — delivered live by Vertex Loop engineers, with 1:1 mentorship and code reviews.",
  },
  {
    t: "Workshops & cohort programs",
    d: "Structured workshops and cohort-based programs coordinated with your institution for students, graduates and final-year batches preparing for placements and internships.",
  },
  {
    t: "Honest, custom partnership terms",
    d: "College pricing is custom — it depends on your college and the package you choose — quoted in a written proposal. Career-preparation guidance for students, verifiable certificates and skill reports. No placement promises, ever.",
  },
];

export default function ForColleges() {
  return (
    <section className="section" id="for-colleges" aria-label="For colleges">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">For Colleges</span>
          <h2 className="section-title">Partner with CrackLeap for <span className="grad-text">your students</span></h2>
          <p className="section-sub">
            Founding college MOU partnerships are now open. Bring live, engineer-led software
            training to your campus — priced custom for your college and package.
          </p>
        </Reveal>
        <div className="grid-3">
          {POINTS.map((p) => (
            <Reveal key={p.t}>
              <div className="card">
                <div className="card-icon" style={{ color: "var(--violet-700)" }}><BuildingIcon size={26} /></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="card" style={{ marginTop: 24 }}>
            <div className="grid-2" style={{ marginTop: 0 }}>
              {[
                "Live, engineer-led delivery, scheduled with your college",
                "Verifiable certificate + skill report for every participating student",
                "Career-preparation guidance — we prepare students; we do not promise placements",
                "One point of contact at Vertex Loop for scheduling, delivery and reporting",
              ].map((x) => (
                <p key={x} style={{ padding: "8px 0", fontWeight: 600, color: "var(--ink)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--violet-600)", marginTop: 2 }}><CheckIcon size={16} /></span>{x}
                </p>
              ))}
            </div>
            <p className="center" style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/for-colleges" className="btn btn-primary">
                <UsersIcon size={17} /> College partnerships <ArrowRightIcon size={16} />
              </Link>
              <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import { COURSES } from "@/data/courses";
import { DIFFERENCE, TOOLS, WHAT_YOU_GET, WHY_CARDS } from "@/data/content";
import {
  ArrowRightIcon, AwardIcon, BookOpenIcon, CheckIcon, LayersIcon,
  RocketIcon, TargetIcon, UsersIcon, ChatIcon, CpuIcon,
} from "./icons";

const TOOL_SHORT: Record<string, string> = {
  Python: "Py", Django: "Dj", AWS: "AWS", Docker: "Dk", Kubernetes: "K8s",
  React: "Re", "Next.js": "Nx", TypeScript: "TS", Git: "Gt",
};

const COURSE_ICONS: Record<string, React.ReactNode> = {
  cpu: <CpuIcon size={26} />,
  terminal: <BookOpenIcon size={26} />,
  code: <LayersIcon size={26} />,
  cloud: <RocketIcon size={26} />,
  layers: <LayersIcon size={26} />,
  brain: <TargetIcon size={26} />,
};

export function Marquee() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <div className="marquee-band" aria-label="Technologies you will learn">
      <h3>Modern Stack — Production-Grade Tools You Will Learn</h3>
      <div className="marquee">
        {items.map((t, i) => (
          <span className="tool-chip" key={i}>
            <span className="ticon" style={{ fontSize: "0.72rem" }}>{TOOL_SHORT[t] ?? t.slice(0, 2)}</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const PART_OF = [
  { icon: <UsersIcon size={26} />, t: "Live Online", d: "Mentor-led sessions, worldwide" },
  { icon: <ChatIcon size={26} />, t: "1:1 Mentorship", d: "By industry engineers" },
  { icon: <RocketIcon size={26} />, t: "Real Production Projects", d: "Not toy assignments" },
  { icon: <TargetIcon size={26} />, t: "Career Preparation", d: "Guidance, not promises" },
];

export function PartOf() {
  return (
    <section className="section" style={{ paddingBottom: 0 }} aria-label="Part of Vertex Loop">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Part of Vertex Loop</span>
          <h2 className="section-title">Mentor-led &middot; Project-based &middot; <span className="grad-text">No outdated theory</span></h2>
        </Reveal>
        <div className="grid-4">
          {PART_OF.map((it) => (
            <Reveal key={it.t}>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ margin: "0 auto 14px", color: "var(--violet-700)" }}>{it.icon}</div>
                <h3 style={{ fontSize: "1.05rem" }}>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_ICONS = [
  <BookOpenIcon key="b" size={26} />,
  <RocketIcon key="r" size={26} />,
  <UsersIcon key="u" size={26} />,
  <LayersIcon key="l" size={26} />,
];

export function WhyUs({ preview = false, bare = false }: { preview?: boolean; bare?: boolean }) {
  return (
    <section className="section" id="why">
      <div className="container">
        {!bare && (
        <Reveal>
          <span className="eyebrow">Why learners choose us</span>
          <h2 className="section-title">Learn by building. <span className="grad-text">Mentored by engineers who ship.</span></h2>
          <p className="section-sub">
            We bridge theory and production. You learn modern workflows, build real projects, and
            get guidance to prepare for interviews — taught by active engineers from Vertex Loop.
          </p>
        </Reveal>
        )}
        <div className="grid-4">
          {WHY_CARDS.map((c, i) => (
            <Reveal key={c.title}>
              <div className="card">
                <div className="card-icon" style={{ color: "var(--violet-700)" }}>{WHY_ICONS[i]}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {preview && (
          <Reveal>
            <p className="center" style={{ marginTop: 28 }}>
              <Link href="/why-crackleap" className="btn btn-ghost">Why CrackLeap <ArrowRightIcon size={17} /></Link>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Difference() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">What makes us different</span>
          <h2 className="section-title">Built different, <span className="grad-text">on purpose</span></h2>
        </Reveal>
        <div className="grid-4">
          {DIFFERENCE.map((d) => (
            <Reveal key={d.title}>
              <div className="card">
                <div style={{ color: "var(--violet-500)", fontWeight: 800, fontSize: "1.3rem", marginBottom: 10 }} aria-hidden="true">↗</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="card" style={{ marginTop: 24, background: "linear-gradient(180deg,#fff, var(--violet-50))" }}>
            <h3 style={{ marginBottom: 12 }}>What you get</h3>
            <div className="grid-2" style={{ marginTop: 0 }}>
              {WHAT_YOU_GET.map((w) => (
                <p key={w} style={{ padding: "8px 0", borderBottom: "1px dashed var(--border-soft)", fontWeight: 600, color: "var(--ink)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--violet-600)", marginTop: 2 }}><CheckIcon size={16} /></span>{w}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CoursesPreview() {
  const featured = COURSES.filter((c) => c.featured).concat(COURSES.filter((c) => !c.featured)).slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Courses</span>
          <h2 className="section-title">Structured programs, <span className="grad-text">taught live worldwide</span></h2>
          <p className="section-sub">
            Mentor-led, project-based courses you can join from anywhere. Explore the full
            catalog for curriculum details.
          </p>
        </Reveal>
        <div className="course-grid">
          {featured.map((c) => (
            <Reveal key={c.slug}>
              <Link href={`/courses/${c.slug}`} className="card course-card">
                <div className="course-icon">{COURSE_ICONS[c.icon]}</div>
                <h3>{c.name}</h3>
                <p className="course-tagline">{c.tagline}</p>
                <div className="tag-row">
                  {c.tags.slice(0, 3).map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <span className="course-link">View course <ArrowRightIcon size={16} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="center" style={{ marginTop: 32 }}>
            <Link href="/courses" className="btn btn-primary">View All Courses <ArrowRightIcon size={17} /></Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function AwardStrip() {
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }} aria-label="Academy promise">
      <div className="container">
        <Reveal>
          <div className="card center" style={{ background: "linear-gradient(180deg,#fff,var(--violet-50))" }}>
            <div className="card-icon" style={{ margin: "0 auto 14px", color: "var(--violet-700)" }}><AwardIcon size={26} /></div>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>The CrackLeap promise</h3>
            <p style={{ maxWidth: "62ch", margin: "0 auto" }}>
              Honest expectations: no placement provision — we help you prepare for placements
              and internships with guidance, mentorship and a portfolio of real work. Not promises.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Cta } from "@/components/SectionsB";
import { COURSES, FORMAT_POINTS } from "@/data/courses";
import { ArrowRightIcon, CheckIcon, CpuIcon, LayersIcon, TargetIcon } from "@/components/icons";

const COURSE_ICONS: Record<string, React.ReactNode> = {
  cpu: <CpuIcon size={26} />,
  terminal: <TargetIcon size={26} />,
  code: <LayersIcon size={26} />,
  cloud: <LayersIcon size={26} />,
  layers: <LayersIcon size={26} />,
  brain: <TargetIcon size={26} />,
};

export const metadata: Metadata = {
  title: "Courses | Live Online Agentic AI, Python, React & AWS DevOps Training",
  description:
    "Explore CrackLeap's mentor-led courses: Python + Agentic AI + AWS, Python Django, React JS, AWS DevOps, Python Full Stack and Generative AI. Live online, worldwide.",
  alternates: { canonical: "https://crackleap.vertexloop.in/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Course catalog"
        title={<>Courses built for <span className="grad-text">the AI era</span></>}
        lead="Six mentor-led, project-based courses — from Python foundations to Agentic AI to cloud deployment. Join live online from anywhere in the world."
        crumb="Courses"
      />
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container">
          <div className="course-grid" style={{ marginTop: 0 }}>
            {COURSES.map((c) => (
              <Reveal key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="card course-card">
                  {c.featured && <span className="ribbon">Flagship</span>}
                  <div className="course-icon">{COURSE_ICONS[c.icon]}</div>
                  <h3>{c.name}</h3>
                  <p className="course-tagline">{c.tagline}</p>
                  <div className="tag-row">
                    {c.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="course-link">View course <ArrowRightIcon size={16} /></span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card" style={{ marginTop: 40, background: "linear-gradient(180deg,#fff, var(--violet-50))" }}>
              <h3 style={{ marginBottom: 14, fontSize: "1.25rem" }}>Every course includes</h3>
              <div className="grid-2" style={{ marginTop: 0 }}>
                {FORMAT_POINTS.map((f) => (
                  <p key={f} style={{ padding: "8px 0", fontWeight: 600, color: "var(--ink)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--violet-600)", marginTop: 2 }}><CheckIcon size={16} /></span>{f}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}

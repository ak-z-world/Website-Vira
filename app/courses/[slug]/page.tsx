import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Cta } from "@/components/SectionsB";
import { COURSES, COURSE_SLUGS, FORMAT_POINTS, getCourse } from "@/data/courses";
import { SITE } from "@/data/content";
import {
  ArrowRightIcon, AwardIcon, CheckIcon, ClockIcon, CpuIcon,
  GraduationCapIcon, LayersIcon, TargetIcon, UsersIcon,
} from "@/components/icons";

export function generateStaticParams() {
  return COURSE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.name} | CrackLeap Academy`,
    description: `${course.tagline} Live, mentor-led and project-based — join from anywhere in the world.`,
    alternates: { canonical: `${SITE.url}/courses/${course.slug}` },
    openGraph: {
      title: `${course.name} | CrackLeap Academy`,
      description: course.tagline,
      url: `${SITE.url}/courses/${course.slug}`,
    },
  };
}

const COURSE_ICONS: Record<string, React.ReactNode> = {
  cpu: <CpuIcon size={30} />,
  terminal: <TargetIcon size={30} />,
  code: <LayersIcon size={30} />,
  cloud: <LayersIcon size={30} />,
  layers: <LayersIcon size={30} />,
  brain: <TargetIcon size={30} />,
};

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const related = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.overview.join(" "),
    provider: {
      "@type": "EducationalOrganization",
      name: "CrackLeap",
      url: SITE.url,
      parentOrganization: { "@type": "Organization", name: "Vertex Loop Pvt Ltd", url: SITE.parentUrl },
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "Mentor-led live sessions",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <PageHero
        eyebrow={course.featured ? "Flagship course" : "Course"}
        title={course.name}
        lead={course.tagline}
        crumb={course.name}
      />

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="detail-grid">
            <div>
              <Reveal>
                <h2 style={{ fontSize: "1.5rem", marginBottom: 14 }}>Course overview</h2>
                {course.overview.map((p, i) => (
                  <p key={i} style={{ marginBottom: 14, color: "var(--body)" }}>{p}</p>
                ))}
                <div className="tag-row" style={{ marginTop: 18 }}>
                  {course.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 style={{ fontSize: "1.5rem", margin: "36px 0 6px" }}>What you will learn</h2>
                <div className="learn-grid">
                  {course.learn.map((l) => (
                    <div className="learn-item" key={l}>
                      <CheckIcon size={18} /> {l}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="project-banner">
                  <span className="kicker-light">Capstone project</span>
                  <h3>{course.project.title}</h3>
                  <p>{course.project.desc}</p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <aside className="info-card">
                <h3>At a glance</h3>
                <div className="info-row">
                  <GraduationCapIcon size={19} />
                  <span><strong>Who it&apos;s for:</strong><br />{course.audience}</span>
                </div>
                <div className="info-row">
                  <ClockIcon size={19} />
                  <span><strong>Format:</strong><br />Live online, mentor-led sessions</span>
                </div>
                <div className="info-row">
                  <UsersIcon size={19} />
                  <span><strong>Learning style:</strong><br />Project-based, with 1:1 mentorship &amp; code reviews</span>
                </div>
                <div className="info-row">
                  <AwardIcon size={19} />
                  <span><strong>Outcome:</strong><br />Verifiable certificate + skill report + portfolio</span>
                </div>
                <Link href="/contact" className="btn btn-primary" style={{ width: "100%", marginTop: 20 }}>
                  Enroll Now <ArrowRightIcon size={17} />
                </Link>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: 12, textAlign: "center" }}>
                  Cohorts run worldwide — write to us for the next start date.
                </p>
              </aside>
            </Reveal>
          </div>

          <Reveal>
            <h2 style={{ fontSize: "1.5rem", margin: "64px 0 6px" }} className="center">Every CrackLeap course includes</h2>
            <div className="grid-3" style={{ marginTop: 28 }}>
              {FORMAT_POINTS.map((f) => (
                <div className="learn-item" key={f}>
                  <CheckIcon size={18} /> {f}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 style={{ fontSize: "1.5rem", margin: "64px 0 6px" }} className="center">Related courses</h2>
            <div className="course-grid" style={{ marginTop: 28 }}>
              {related.map((c) => (
                <Link key={c.slug} href={`/courses/${c.slug}`} className="card course-card">
                  <div className="course-icon">{COURSE_ICONS[c.icon]}</div>
                  <h3>{c.name}</h3>
                  <p className="course-tagline">{c.tagline}</p>
                  <span className="course-link">View course <ArrowRightIcon size={16} /></span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}

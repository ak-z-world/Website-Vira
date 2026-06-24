"use client";

import type {
  Country,
  State,
  City,
  Course,
  LocationPage,
  CoursePrice,
  BatchSchedule,
  FAQItem,
} from "@/lib/location-data/types";

interface LocationCoursePageProps {
  country: Country;
  state: State;
  city: City;
  course: Course;
  locationPage: LocationPage;
  localPrice: CoursePrice;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BatchCard({ batch }: { batch: BatchSchedule }) {
  return (
    <div className="batch-card">
      <div className="batch-mode">{batch.mode}</div>
      <div className="batch-date">{formatDate(batch.startDate)}</div>
      <div className="batch-schedule">{batch.schedule}</div>
      <div className="batch-timing">{batch.timing}</div>
      {batch.seatsAvailable !== undefined && (
        <div className="batch-seats">
          {batch.seatsAvailable > 0
            ? `${batch.seatsAvailable} seats available`
            : "Sold out"}
        </div>
      )}
      <div className={`batch-status ${batch.isOpen ? "open" : "closed"}`}>
        {batch.isOpen ? "Enrollment open" : "Enrollment closed"}
      </div>
    </div>
  );
}

function FAQSection({ items }: { items: FAQItem[] }) {
  const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently Asked Questions</h2>
      <dl className="faq-list">
        {sorted.map((item, i) => (
          <div key={i} className="faq-item">
            <dt className="faq-question">{item.question}</dt>
            <dd className="faq-answer">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function LocationCoursePage({
  country,
  state,
  city,
  course,
  locationPage,
  localPrice,
}: LocationCoursePageProps) {
  const openBatches = locationPage.batchSchedules.filter((b) => b.isOpen);
  const faqItems = locationPage.aeo.locationCourseSpecificFAQ ?? [];
  const allFAQ = [...faqItems, ...(locationPage.aeo.faqItems ?? [])];

  return (
    <main className="lcp-root">
      <style>{`
        .lcp-root {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #1a1a2e;
          background: #f8f9ff;
          min-height: 100vh;
        }
        .lcp-hero {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          color: #fff;
          padding: 4rem 1.5rem 3rem;
          position: relative;
          overflow: hidden;
        }
        .lcp-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(229,57,53,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .lcp-breadcrumb {
          font-size: 0.8rem;
          opacity: 0.65;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .lcp-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }
        .lcp-breadcrumb a:hover { text-decoration: underline; }
        .lcp-breadcrumb span { margin: 0 0.35rem; }
        .lcp-hero-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .lcp-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e57373;
          margin-bottom: 0.75rem;
        }
        .lcp-hero h1 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
        }
        .lcp-hero-sub {
          font-size: 1.05rem;
          opacity: 0.8;
          max-width: 620px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .lcp-price-block {
          display: inline-flex;
          align-items: baseline;
          gap: 1rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 1rem 1.5rem;
          margin-bottom: 1.5rem;
        }
        .lcp-price-main {
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
        }
        .lcp-price-emi {
          font-size: 0.9rem;
          opacity: 0.7;
        }
        .lcp-cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .lcp-btn-primary {
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.85rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s;
        }
        .lcp-btn-primary:hover { background: #c62828; }
        .lcp-btn-secondary {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          padding: 0.85rem 1.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s;
        }
        .lcp-btn-secondary:hover { border-color: rgba(255,255,255,0.8); }
        .lcp-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 860px) {
          .lcp-body { grid-template-columns: 1fr; }
          .lcp-sidebar { order: -1; }
        }
        .lcp-main-col > section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 1.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .lcp-main-col section h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .lcp-sidebar {
          position: sticky;
          top: 1.5rem;
        }
        .lcp-sidebar-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.75rem;
          box-shadow: 0 4px 20px rgba(15,52,96,0.1);
          border: 1px solid #e8eaf6;
        }
        .lcp-sidebar-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1rem;
        }
        .lcp-sidebar-price {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f3460;
          margin-bottom: 0.25rem;
        }
        .lcp-sidebar-emi {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 1.25rem;
        }
        .lcp-sidebar-btn {
          display: block;
          width: 100%;
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.9rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          margin-bottom: 0.75rem;
          transition: background 0.2s;
        }
        .lcp-sidebar-btn:hover { background: #c62828; }
        .lcp-sidebar-wa {
          display: block;
          width: 100%;
          background: #25d366;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.9rem;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: background 0.2s;
        }
        .lcp-sidebar-wa:hover { background: #1da851; }
        .lcp-meta-list {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .lcp-meta-list li {
          font-size: 0.88rem;
          color: #444;
          display: flex;
          gap: 0.5rem;
        }
        .lcp-meta-label {
          font-weight: 600;
          color: #0f3460;
          min-width: 90px;
        }
        .job-market-para {
          font-size: 0.97rem;
          line-height: 1.75;
          color: #333;
        }
        .outcomes-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .outcomes-list li {
          font-size: 0.93rem;
          color: #333;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.5;
        }
        .outcomes-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #43a047;
          font-weight: 700;
        }
        .batch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .batch-card {
          border: 1.5px solid #e8eaf6;
          border-radius: 10px;
          padding: 1.1rem;
          font-size: 0.88rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .batch-mode {
          text-transform: capitalize;
          font-weight: 600;
          color: #0f3460;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .batch-date { font-size: 1rem; font-weight: 700; color: #1a1a2e; }
        .batch-schedule { color: #444; }
        .batch-timing { color: #666; font-size: 0.82rem; }
        .batch-seats { color: #e53935; font-weight: 600; }
        .batch-status { margin-top: 0.5rem; font-weight: 600; font-size: 0.8rem; }
        .batch-status.open { color: #43a047; }
        .batch-status.closed { color: #e53935; }
        .instructor-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .instructor-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .instructor-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f3460, #e53935);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .instructor-name {
          font-weight: 700;
          color: #0f3460;
          font-size: 1rem;
          margin-bottom: 0.15rem;
        }
        .instructor-exp {
          font-size: 0.82rem;
          color: #e53935;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        .instructor-bio {
          font-size: 0.88rem;
          color: #444;
          line-height: 1.6;
        }
        .instructor-bg {
          margin-top: 0.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .instructor-bg span {
          font-size: 0.8rem;
          color: #666;
        }
        .testimonial-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .testimonial-card {
          border-left: 4px solid #0f3460;
          padding: 1rem 1.25rem;
          background: #f4f6ff;
          border-radius: 0 8px 8px 0;
        }
        .testimonial-quote {
          font-size: 0.93rem;
          line-height: 1.7;
          color: #333;
          font-style: italic;
          margin-bottom: 0.75rem;
        }
        .testimonial-meta {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f3460;
        }
        .testimonial-outcome {
          font-size: 0.8rem;
          color: #43a047;
          font-weight: 600;
          margin-top: 0.2rem;
        }
        .placement-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .placement-stat {
          text-align: center;
          padding: 1rem;
          background: #f4f6ff;
          border-radius: 10px;
        }
        .placement-stat-value {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f3460;
          display: block;
        }
        .placement-stat-label {
          font-size: 0.78rem;
          color: #666;
          margin-top: 0.25rem;
        }
        .hiring-companies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .company-pill {
          background: #e8eaf6;
          color: #0f3460;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }
        .syllabus-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .syllabus-module {
          border: 1px solid #e8eaf6;
          border-radius: 8px;
          overflow: hidden;
        }
        .syllabus-module-header {
          padding: 0.75rem 1rem;
          background: #f4f6ff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          font-size: 0.93rem;
          color: #0f3460;
        }
        .syllabus-module-hours {
          font-size: 0.78rem;
          font-weight: 400;
          color: #666;
        }
        .syllabus-module-topics {
          padding: 0.75rem 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .topic-tag {
          background: #fff;
          border: 1px solid #dde;
          color: #444;
          font-size: 0.78rem;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .faq-section { }
        .faq-section h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          border: 1px solid #e8eaf6;
          border-radius: 8px;
          overflow: hidden;
        }
        .faq-question {
          padding: 0.9rem 1.1rem;
          background: #f4f6ff;
          font-weight: 700;
          font-size: 0.93rem;
          color: #0f3460;
        }
        .faq-answer {
          padding: 0.9rem 1.1rem;
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
          margin: 0;
        }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tool-tag {
          background: #0f3460;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.8rem;
          border-radius: 6px;
        }
        .value-prop-box {
          background: linear-gradient(135deg, #e8eaf6, #f4f6ff);
          border-left: 4px solid #e53935;
          border-radius: 0 8px 8px 0;
          padding: 1rem 1.25rem;
          font-size: 0.95rem;
          color: #0f3460;
          font-weight: 600;
          line-height: 1.6;
        }
      `}</style>

      <div className="lcp-hero">
        <div className="lcp-hero-inner">
          <nav className="lcp-breadcrumb" aria-label="Breadcrumb">
            <a href="https://www.arivuon.com">Home</a>
            <span>›</span>
            <a href="https://www.arivuon.com/locations">Locations</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}`}>{country.name}</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}`}>{state.name}</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`}>{city.name}</a>
            <span>›</span>
            {course.name}
          </nav>
          <div className="lcp-eyebrow">ArivuOn Academy · {city.name}</div>
          <h1>{course.name} Training in {city.name}</h1>
          <p className="lcp-hero-sub">{locationPage.seo.metaDescription}</p>
          <div className="lcp-price-block">
            <span className="lcp-price-main">{localPrice.formatted}</span>
            {localPrice.emiAvailable && localPrice.emiFormatted && (
              <span className="lcp-price-emi">or {localPrice.emiFormatted} for {localPrice.emiMonths} months</span>
            )}
          </div>
          <div className="lcp-cta-row">
            <a href={locationPage.ctaUrl ?? "#enroll"} className="lcp-btn-primary">
              {locationPage.ctaText ?? `Enroll in ${city.name}`}
            </a>
            {city.whatsapp && (
              <a
                href={`https://wa.me/${city.whatsapp.replace(/[^0-9]/g, "")}`}
                className="lcp-btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locationPage.whatsappCTAText ?? "WhatsApp Us"}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="lcp-body">
        <div className="lcp-main-col">
          {locationPage.aeo.uniqueValueProp && (
            <section>
              <h2>Why Learn Here</h2>
              <div className="value-prop-box">{locationPage.aeo.uniqueValueProp}</div>
            </section>
          )}

          <section>
            <h2>Local Job Market</h2>
            <p className="job-market-para">{locationPage.localJobMarketParagraph}</p>
          </section>

          <section>
            <h2>What You Will Learn</h2>
            <ul className="outcomes-list">
              {course.learningOutcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </section>

          {openBatches.length > 0 && (
            <section id="enroll">
              <h2>Upcoming Batches</h2>
              <div className="batch-grid">
                {openBatches.map((b) => (
                  <BatchCard key={b.id} batch={b} />
                ))}
              </div>
            </section>
          )}

          {locationPage.localInstructors.length > 0 && (
            <section>
              <h2>Your Instructors</h2>
              <div className="instructor-list">
                {locationPage.localInstructors.map((inst) => (
                  <div key={inst.id} className="instructor-card">
                    <div className="instructor-avatar">
                      {inst.name.charAt(0)}
                    </div>
                    <div>
                      <div className="instructor-name">{inst.name}</div>
                      <div className="instructor-exp">{inst.experienceYears}+ years industry experience</div>
                      <div className="instructor-bio">{inst.bio}</div>
                      {inst.background.length > 0 && (
                        <div className="instructor-bg">
                          {inst.background.map((b, i) => (
                            <span key={i}>· {b}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {locationPage.localPlacementData && (
            <section>
              <h2>Placement Outcomes</h2>
              <div className="placement-grid">
                <div className="placement-stat">
                  <span className="placement-stat-value">
                    {locationPage.localPlacementData.placedStudents}
                  </span>
                  <div className="placement-stat-label">Students placed</div>
                </div>
                <div className="placement-stat">
                  <span className="placement-stat-value">
                    {Math.round(
                      (locationPage.localPlacementData.placedStudents /
                        locationPage.localPlacementData.totalStudents) *
                        100
                    )}%
                  </span>
                  <div className="placement-stat-label">Placement rate</div>
                </div>
                {locationPage.localPlacementData.averagePackage && (
                  <div className="placement-stat">
                    <span className="placement-stat-value">
                      {locationPage.localPlacementData.averagePackage}
                    </span>
                    <div className="placement-stat-label">Average package</div>
                  </div>
                )}
                {locationPage.localPlacementData.highestPackage && (
                  <div className="placement-stat">
                    <span className="placement-stat-value">
                      {locationPage.localPlacementData.highestPackage}
                    </span>
                    <div className="placement-stat-label">Highest package</div>
                  </div>
                )}
              </div>
              {locationPage.localPlacementData.topHiringCompanies.length > 0 && (
                <>
                  <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "#0f3460", marginBottom: "0.5rem" }}>
                    Top hiring companies
                  </div>
                  <div className="hiring-companies">
                    {locationPage.localPlacementData.topHiringCompanies.map((c) => (
                      <span key={c} className="company-pill">{c}</span>
                    ))}
                  </div>
                </>
              )}
              {locationPage.localPlacementData.dataCoverage && (
                <p style={{ fontSize: "0.78rem", color: "#999", marginTop: "0.75rem" }}>
                  Data covers {locationPage.localPlacementData.dataCoverage}
                </p>
              )}
            </section>
          )}

          {locationPage.localTestimonials.length > 0 && (
            <section>
              <h2>Student Stories</h2>
              <div className="testimonial-list">
                {locationPage.localTestimonials.map((t) => (
                  <div key={t.id} className="testimonial-card">
                    <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                    <div className="testimonial-meta">
                      {t.studentName}
                      {t.companyName && ` · ${t.companyName}`}
                      {t.placementMonth && ` · ${t.placementMonth}`}
                    </div>
                    {t.outcome && (
                      <div className="testimonial-outcome">{t.outcome}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2>Course Syllabus</h2>
            <ul className="syllabus-list">
              {course.syllabus.map((mod) => (
                <li key={mod.order} className="syllabus-module">
                  <div className="syllabus-module-header">
                    <span>Module {mod.order}: {mod.title}</span>
                    {mod.durationHours && (
                      <span className="syllabus-module-hours">{mod.durationHours}h</span>
                    )}
                  </div>
                  <div className="syllabus-module-topics">
                    {mod.topics.map((t) => (
                      <span key={t} className="topic-tag">{t}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            {locationPage.syllabusLocalAdditions && locationPage.syllabusLocalAdditions.length > 0 && (
              <>
                <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "0.93rem", color: "#0f3460" }}>
                  Local additions for {city.name}
                </div>
                <ul className="syllabus-list" style={{ marginTop: "0.75rem" }}>
                  {locationPage.syllabusLocalAdditions.map((mod, i) => (
                    <li key={i} className="syllabus-module">
                      <div className="syllabus-module-header">{mod.moduleTitle}</div>
                      <div style={{ padding: "0.5rem 1rem", fontSize: "0.82rem", color: "#666", fontStyle: "italic" }}>
                        {mod.reason}
                      </div>
                      <div className="syllabus-module-topics">
                        {mod.topics.map((t) => (
                          <span key={t} className="topic-tag">{t}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section>
            <h2>Tools &amp; Technologies</h2>
            <div className="tools-grid">
              {course.toolsUsed.map((t) => (
                <span key={t} className="tool-tag">{t}</span>
              ))}
            </div>
          </section>

          {allFAQ.length > 0 && (
            <section>
              <FAQSection items={allFAQ} />
            </section>
          )}
        </div>

        <aside className="lcp-sidebar">
          <div className="lcp-sidebar-card">
            <h3>Enroll Now</h3>
            <div className="lcp-sidebar-price">{localPrice.formatted}</div>
            {localPrice.emiAvailable && localPrice.emiFormatted && (
              <div className="lcp-sidebar-emi">
                or {localPrice.emiFormatted} × {localPrice.emiMonths} months
              </div>
            )}
            <a href={locationPage.ctaUrl ?? "#enroll"} className="lcp-sidebar-btn">
              {locationPage.ctaText ?? `Enroll in ${city.name}`}
            </a>
            {city.whatsapp && (
              <a
                href={`https://wa.me/${city.whatsapp.replace(/[^0-9]/g, "")}`}
                className="lcp-sidebar-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locationPage.whatsappCTAText ?? "WhatsApp Us"}
              </a>
            )}
            <ul className="lcp-meta-list">
              <li>
                <span className="lcp-meta-label">Duration</span>
                <span>{course.durationWeeks} weeks</span>
              </li>
              {course.totalHours && (
                <li>
                  <span className="lcp-meta-label">Hours</span>
                  <span>{course.totalHours}h total</span>
                </li>
              )}
              <li>
                <span className="lcp-meta-label">Level</span>
                <span style={{ textTransform: "capitalize" }}>{course.level}</span>
              </li>
              <li>
                <span className="lcp-meta-label">City</span>
                <span>{city.name}, {state.name}</span>
              </li>
              {city.address.displayAddress && (
                <li>
                  <span className="lcp-meta-label">Address</span>
                  <span>{city.address.displayAddress}</span>
                </li>
              )}
              {city.phone && (
                <li>
                  <span className="lcp-meta-label">Phone</span>
                  <a href={`tel:${city.phone}`} style={{ color: "#0f3460" }}>{city.phone}</a>
                </li>
              )}
              {city.email && (
                <li>
                  <span className="lcp-meta-label">Email</span>
                  <a href={`mailto:${city.email}`} style={{ color: "#0f3460" }}>{city.email}</a>
                </li>
              )}
              {course.certificationOffered && course.certificationName && (
                <li>
                  <span className="lcp-meta-label">Certificate</span>
                  <span>{course.certificationName}</span>
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
"use client";

import type { Country, State, City, Course, LocationPage } from "@/lib/location-data/types";

interface CourseWithPage {
  course: Course;
  locationPage: LocationPage | null;
}

interface CityHubPageProps {
  country: Country;
  state: State;
  city: City;
  coursesWithPages: CourseWithPage[];
}

export function CityHubPage({ country, state, city, coursesWithPages }: CityHubPageProps) {
  return (
    <main className="chp-root">
      <style>{`
        .chp-root {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #1a1a2e;
          background: #f8f9ff;
          min-height: 100vh;
        }
        .chp-hero {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          color: #fff;
          padding: 4rem 1.5rem 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .chp-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 75% 40%, rgba(229,57,53,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .chp-hero-inner {
          max-width: 920px;
          margin: 0 auto;
          position: relative;
        }
        .chp-breadcrumb {
          font-size: 0.8rem;
          opacity: 0.65;
          margin-bottom: 1.5rem;
        }
        .chp-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }
        .chp-breadcrumb a:hover { text-decoration: underline; }
        .chp-breadcrumb span { margin: 0 0.35rem; }
        .chp-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e57373;
          margin-bottom: 0.75rem;
        }
        .chp-hero h1 {
          font-size: clamp(1.9rem, 4.5vw, 3rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.025em;
        }
        .chp-hero-sub {
          font-size: 1.02rem;
          opacity: 0.8;
          max-width: 620px;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .chp-hero-stats {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .chp-stat {
          text-align: center;
        }
        .chp-stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
        }
        .chp-stat-label {
          font-size: 0.78rem;
          opacity: 0.65;
          margin-top: 0.15rem;
        }
        .chp-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        .chp-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 720px) {
          .chp-info-grid { grid-template-columns: 1fr; }
        }
        .chp-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .chp-card h2 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 0.9rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .chp-context-text {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #333;
        }
        .chp-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #444;
        }
        .chp-contact-list li {
          display: flex;
          gap: 0.5rem;
        }
        .chp-contact-label {
          font-weight: 600;
          color: #0f3460;
          min-width: 80px;
          flex-shrink: 0;
        }
        .chp-contact-list a {
          color: #0f3460;
          text-decoration: none;
        }
        .chp-contact-list a:hover { text-decoration: underline; }
        .chp-hiring {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .chp-hiring-pill {
          background: #e8eaf6;
          color: #0f3460;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: 20px;
        }
        .chp-courses-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f3460;
          margin-bottom: 1.25rem;
        }
        .chp-courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .chp-course-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          border: 1px solid #e8eaf6;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .chp-course-card:hover {
          box-shadow: 0 6px 20px rgba(15,52,96,0.12);
          border-color: #0f3460;
        }
        .chp-course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.6rem;
        }
        .chp-course-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f3460;
        }
        .chp-course-level {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: capitalize;
          padding: 0.2rem 0.55rem;
          border-radius: 20px;
          background: #f4f6ff;
          color: #666;
          white-space: nowrap;
        }
        .chp-course-desc {
          font-size: 0.85rem;
          color: #555;
          line-height: 1.55;
          margin-bottom: 1rem;
        }
        .chp-course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .chp-course-price {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f3460;
        }
        .chp-course-duration {
          font-size: 0.8rem;
          color: #888;
        }
        .chp-course-cta {
          font-size: 0.82rem;
          font-weight: 700;
          color: #e53935;
        }
        .chp-no-page {
          font-size: 0.82rem;
          color: #bbb;
          font-style: italic;
        }
        .chp-instructors-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-bottom: 2rem;
        }
        .chp-instructors-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .chp-instructor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .chp-instructor-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .chp-instructor-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f3460, #e53935);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .chp-instructor-name {
          font-weight: 700;
          color: #0f3460;
          margin-bottom: 0.1rem;
        }
        .chp-instructor-exp {
          font-size: 0.8rem;
          color: #e53935;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .chp-instructor-bio {
          font-size: 0.83rem;
          color: #555;
          line-height: 1.55;
        }
        .chp-testimonials-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-bottom: 2rem;
        }
        .chp-testimonials-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .chp-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        .chp-testimonial-card {
          border-left: 4px solid #0f3460;
          padding: 1rem 1.25rem;
          background: #f4f6ff;
          border-radius: 0 8px 8px 0;
        }
        .chp-testimonial-quote {
          font-size: 0.88rem;
          line-height: 1.65;
          color: #333;
          font-style: italic;
          margin-bottom: 0.6rem;
        }
        .chp-testimonial-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f3460;
        }
        .chp-testimonial-outcome {
          font-size: 0.8rem;
          color: #43a047;
          font-weight: 600;
          margin-top: 0.15rem;
        }
        .chp-faq-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .chp-faq-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .chp-faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chp-faq-item {
          border: 1px solid #e8eaf6;
          border-radius: 8px;
          overflow: hidden;
        }
        .chp-faq-q {
          padding: 0.9rem 1.1rem;
          background: #f4f6ff;
          font-weight: 700;
          font-size: 0.93rem;
          color: #0f3460;
        }
        .chp-faq-a {
          padding: 0.9rem 1.1rem;
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <div className="chp-hero">
        <div className="chp-hero-inner">
          <nav className="chp-breadcrumb" aria-label="Breadcrumb">
            <a href="https://www.arivuon.com">Home</a>
            <span>›</span>
            <a href="https://www.arivuon.com/locations">Locations</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}`}>{country.name}</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}`}>{state.name}</a>
            <span>›</span>
            {city.name}
          </nav>
          <div className="chp-eyebrow">ArivuOn Academy · {city.name}</div>
          <h1>{city.seo.metaTitle}</h1>
          <p className="chp-hero-sub">{city.seo.metaDescription}</p>
          <div className="chp-hero-stats">
            {city.totalStudentsTrained !== undefined && (
              <div className="chp-stat">
                <span className="chp-stat-value">{city.totalStudentsTrained}+</span>
                <div className="chp-stat-label">Students trained</div>
              </div>
            )}
            {city.placementRate !== undefined && (
              <div className="chp-stat">
                <span className="chp-stat-value">{city.placementRate}%</span>
                <div className="chp-stat-label">Placement rate</div>
              </div>
            )}
            <div className="chp-stat">
              <span className="chp-stat-value">{coursesWithPages.length}</span>
              <div className="chp-stat-label">Courses</div>
            </div>
          </div>
        </div>
      </div>

      <div className="chp-body">
        <div className="chp-info-grid">
          <div className="chp-card">
            <h2>About {city.name} Campus</h2>
            <p className="chp-context-text">{city.cityContext}</p>
          </div>
          <div className="chp-card">
            <h2>Campus Details</h2>
            <ul className="chp-contact-list">
              {city.address.displayAddress && (
                <li>
                  <span className="chp-contact-label">Address</span>
                  <span>{city.address.displayAddress}</span>
                </li>
              )}
              {city.phone && (
                <li>
                  <span className="chp-contact-label">Phone</span>
                  <a href={`tel:${city.phone}`}>{city.phone}</a>
                </li>
              )}
              {city.email && (
                <li>
                  <span className="chp-contact-label">Email</span>
                  <a href={`mailto:${city.email}`}>{city.email}</a>
                </li>
              )}
              {city.whatsapp && (
                <li>
                  <span className="chp-contact-label">WhatsApp</span>
                  <a
                    href={`https://wa.me/${city.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {city.whatsapp}
                  </a>
                </li>
              )}
              {city.openingHours && city.openingHours.length > 0 && (
                <li>
                  <span className="chp-contact-label">Hours</span>
                  <span>{city.openingHours.join(", ")}</span>
                </li>
              )}
              {city.nearestRailway && (
                <li>
                  <span className="chp-contact-label">Railway</span>
                  <span>{city.nearestRailway}</span>
                </li>
              )}
              {city.nearestBusStand && (
                <li>
                  <span className="chp-contact-label">Bus Stand</span>
                  <span>{city.nearestBusStand}</span>
                </li>
              )}
            </ul>
            {city.localHiringCompanies.length > 0 && (
              <>
                <div style={{ fontWeight: 600, fontSize: "0.82rem", color: "#0f3460", marginTop: "1rem", marginBottom: "0.5rem" }}>
                  Local hiring companies
                </div>
                <div className="chp-hiring">
                  {city.localHiringCompanies.map((c) => (
                    <span key={c} className="chp-hiring-pill">{c}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="chp-courses-heading">Courses in {city.name}</div>
        <div className="chp-courses-grid">
          {coursesWithPages.map(({ course, locationPage }) => {
            const price = locationPage?.localPrice ?? course.basePrice;
            const href = `https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}/${course.slug}`;
            return (
              <a key={course.slug} href={href} className="chp-course-card">
                <div className="chp-course-header">
                  <div className="chp-course-name">{course.name}</div>
                  <span className="chp-course-level">{course.level}</span>
                </div>
                <div className="chp-course-desc">{course.shortDescription}</div>
                <div className="chp-course-footer">
                  <div>
                    <div className="chp-course-price">{price.formatted}</div>
                    <div className="chp-course-duration">{course.durationWeeks} weeks</div>
                  </div>
                  <span className="chp-course-cta">View details →</span>
                </div>
              </a>
            );
          })}
        </div>

        {city.instructors.length > 0 && (
          <div className="chp-instructors-section">
            <h2>Instructors</h2>
            <div className="chp-instructor-grid">
              {city.instructors.map((inst) => (
                <div key={inst.id} className="chp-instructor-card">
                  <div className="chp-instructor-avatar">{inst.name.charAt(0)}</div>
                  <div>
                    <div className="chp-instructor-name">{inst.name}</div>
                    <div className="chp-instructor-exp">{inst.experienceYears}+ yrs experience</div>
                    <div className="chp-instructor-bio">{inst.bio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {city.testimonials.length > 0 && (
          <div className="chp-testimonials-section">
            <h2>Student Outcomes</h2>
            <div className="chp-testimonial-grid">
              {city.testimonials.map((t) => (
                <div key={t.id} className="chp-testimonial-card">
                  <blockquote className="chp-testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="chp-testimonial-name">
                    {t.studentName}
                    {t.companyName && ` · ${t.companyName}`}
                  </div>
                  {t.outcome && <div className="chp-testimonial-outcome">{t.outcome}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {city.aeo.faqItems.length > 0 && (
          <div className="chp-faq-section">
            <h2>Frequently Asked Questions</h2>
            <dl className="chp-faq-list">
              {[...city.aeo.faqItems, ...(city.aeo.citySpecificFAQ ?? [])]
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((item, i) => (
                  <div key={i} className="chp-faq-item">
                    <dt className="chp-faq-q">{item.question}</dt>
                    <dd className="chp-faq-a">{item.answer}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}
      </div>
    </main>
  );
}
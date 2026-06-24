"use client";

import type { Country, State, City, Course } from "@/lib/location-data/types";

interface CityWithCourses {
  city: City;
  courses: Course[];
}

interface StatePageProps {
  country: Country;
  state: State;
  citiesWithCourses: CityWithCourses[];
}

export function StatePage({ country, state, citiesWithCourses }: StatePageProps) {
  return (
    <main className="sp-root">
      <style>{`
        .sp-root {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #1a1a2e;
          background: #f8f9ff;
          min-height: 100vh;
        }
        .sp-hero {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          color: #fff;
          padding: 4rem 1.5rem 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .sp-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(229,57,53,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .sp-hero-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .sp-breadcrumb {
          font-size: 0.8rem;
          opacity: 0.65;
          margin-bottom: 1.5rem;
        }
        .sp-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }
        .sp-breadcrumb a:hover { text-decoration: underline; }
        .sp-breadcrumb span { margin: 0 0.35rem; }
        .sp-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e57373;
          margin-bottom: 0.75rem;
        }
        .sp-hero h1 {
          font-size: clamp(1.9rem, 4.5vw, 3rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.025em;
        }
        .sp-hero-sub {
          font-size: 1.02rem;
          opacity: 0.8;
          max-width: 600px;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .sp-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .sp-stat {
          text-align: center;
        }
        .sp-stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
        }
        .sp-stat-label {
          font-size: 0.78rem;
          opacity: 0.65;
          margin-top: 0.15rem;
        }
        .sp-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        .sp-context-card {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-bottom: 2.5rem;
        }
        .sp-context-card h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1rem;
        }
        .sp-context-text {
          font-size: 0.95rem;
          line-height: 1.75;
          color: #333;
          white-space: pre-line;
        }
        .sp-job-summary {
          margin-top: 1.25rem;
          padding: 1rem 1.25rem;
          background: #f4f6ff;
          border-left: 4px solid #0f3460;
          border-radius: 0 8px 8px 0;
          font-size: 0.93rem;
          color: #333;
          line-height: 1.6;
        }
        .sp-employers-row {
          margin-top: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .sp-employer-pill {
          background: #e8eaf6;
          color: #0f3460;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }
        .sp-cities-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f3460;
          margin-bottom: 1.5rem;
        }
        .sp-city-block {
          background: #fff;
          border-radius: 12px;
          padding: 1.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-bottom: 1.5rem;
          border: 1px solid #e8eaf6;
          transition: box-shadow 0.2s;
        }
        .sp-city-block:hover {
          box-shadow: 0 4px 16px rgba(15,52,96,0.1);
        }
        .sp-city-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .sp-city-name-link {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f3460;
          text-decoration: none;
          display: block;
        }
        .sp-city-name-link:hover { text-decoration: underline; }
        .sp-city-address {
          font-size: 0.82rem;
          color: #888;
          margin-top: 0.25rem;
        }
        .sp-city-placement {
          text-align: right;
          white-space: nowrap;
        }
        .sp-city-placement-rate {
          font-size: 1.5rem;
          font-weight: 800;
          color: #43a047;
          display: block;
        }
        .sp-city-placement-label {
          font-size: 0.72rem;
          color: #888;
        }
        .sp-courses-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .sp-course-chip {
          background: #f4f6ff;
          border: 1px solid #dde0f7;
          color: #333;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .sp-course-chip:hover {
          background: #e8eaf6;
          color: #0f3460;
        }
        .sp-city-cta {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: #e53935;
          text-decoration: none;
        }
        .sp-city-cta:hover { text-decoration: underline; }
        .sp-faq-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-top: 2rem;
        }
        .sp-faq-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .sp-faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sp-faq-item {
          border: 1px solid #e8eaf6;
          border-radius: 8px;
          overflow: hidden;
        }
        .sp-faq-q {
          padding: 0.9rem 1.1rem;
          background: #f4f6ff;
          font-weight: 700;
          font-size: 0.93rem;
          color: #0f3460;
        }
        .sp-faq-a {
          padding: 0.9rem 1.1rem;
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
          margin: 0;
        }
        .sp-institutions {
          margin-top: 1.25rem;
        }
        .sp-institutions-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f3460;
          margin-bottom: 0.5rem;
        }
        .sp-institutions-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .sp-institution-tag {
          background: #fff;
          border: 1px solid #dde0f7;
          color: #444;
          font-size: 0.78rem;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
      `}</style>

      <div className="sp-hero">
        <div className="sp-hero-inner">
          <nav className="sp-breadcrumb" aria-label="Breadcrumb">
            <a href="https://www.arivuon.com">Home</a>
            <span>›</span>
            <a href="https://www.arivuon.com/locations">Locations</a>
            <span>›</span>
            <a href={`https://www.arivuon.com/locations/${country.slug}`}>{country.name}</a>
            <span>›</span>
            {state.name}
          </nav>
          <div className="sp-eyebrow">ArivuOn Academy · {state.name}</div>
          <h1>{state.seo.metaTitle}</h1>
          <p className="sp-hero-sub">{state.seo.metaDescription}</p>
          <div className="sp-stats">
            <div className="sp-stat">
              <span className="sp-stat-value">{citiesWithCourses.length}</span>
              <div className="sp-stat-label">Cities</div>
            </div>
            <div className="sp-stat">
              <span className="sp-stat-value">{state.capital}</span>
              <div className="sp-stat-label">Capital</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-body">
        <div className="sp-context-card">
          <h2>Tech &amp; Education Ecosystem</h2>
          <p className="sp-context-text">{state.stateContext}</p>
          <div className="sp-job-summary">{state.jobMarketSummary}</div>
          {state.majorEmployers.length > 0 && (
            <div className="sp-employers-row">
              {state.majorEmployers.map((e) => (
                <span key={e} className="sp-employer-pill">{e}</span>
              ))}
            </div>
          )}
          {state.notableInstitutions && state.notableInstitutions.length > 0 && (
            <div className="sp-institutions">
              <div className="sp-institutions-label">Notable Institutions</div>
              <div className="sp-institutions-list">
                {state.notableInstitutions.map((inst) => (
                  <span key={inst} className="sp-institution-tag">{inst}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sp-cities-heading">Training Centers in {state.name}</div>

        {citiesWithCourses.map(({ city, courses }) => (
          <div key={city.slug} className="sp-city-block">
            <div className="sp-city-header">
              <div>
                <a
                  href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`}
                  className="sp-city-name-link"
                >
                  {city.name}
                </a>
                {city.address.displayAddress && (
                  <div className="sp-city-address">{city.address.displayAddress}</div>
                )}
              </div>
              {city.placementRate !== undefined && (
                <div className="sp-city-placement">
                  <span className="sp-city-placement-rate">{city.placementRate}%</span>
                  <div className="sp-city-placement-label">placement rate</div>
                </div>
              )}
            </div>
            {courses.length > 0 && (
              <div className="sp-courses-grid">
                {courses.map((course) => (
                  <a
                    key={course.slug}
                    href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}/${course.slug}`}
                    className="sp-course-chip"
                  >
                    {course.shortName}
                  </a>
                ))}
              </div>
            )}
            <a
              href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`}
              className="sp-city-cta"
            >
              Explore {city.name} campus →
            </a>
          </div>
        ))}

        {state.aeo.faqItems.length > 0 && (
          <div className="sp-faq-section">
            <h2>Frequently Asked Questions</h2>
            <dl className="sp-faq-list">
              {[...state.aeo.faqItems]
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((item, i) => (
                  <div key={i} className="sp-faq-item">
                    <dt className="sp-faq-q">{item.question}</dt>
                    <dd className="sp-faq-a">{item.answer}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}
      </div>
    </main>
  );
}
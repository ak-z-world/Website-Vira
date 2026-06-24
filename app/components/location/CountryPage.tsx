"use client";

import type { Country, State, City } from "@/lib/location-data/types";

interface StateWithCities {
  state: State;
  cities: City[];
}

interface CountryPageProps {
  country: Country;
  statesWithCities: StateWithCities[];
}

export function CountryPage({ country, statesWithCities }: CountryPageProps) {
  return (
    <main className="cp-root">
      <style>{`
        .cp-root {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #1a1a2e;
          background: #f8f9ff;
          min-height: 100vh;
        }
        .cp-hero {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          color: #fff;
          padding: 4rem 1.5rem 3.5rem;
        }
        .cp-hero-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .cp-breadcrumb {
          font-size: 0.8rem;
          opacity: 0.65;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }
        .cp-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }
        .cp-breadcrumb a:hover { text-decoration: underline; }
        .cp-breadcrumb span { margin: 0 0.35rem; }
        .cp-flag {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          display: block;
        }
        .cp-eyebrow {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e57373;
          margin-bottom: 0.75rem;
        }
        .cp-hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.025em;
        }
        .cp-hero-sub {
          font-size: 1.05rem;
          opacity: 0.8;
          max-width: 640px;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .cp-stats-row {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .cp-stat {
          text-align: center;
          min-width: 80px;
        }
        .cp-stat-value {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
        }
        .cp-stat-label {
          font-size: 0.78rem;
          opacity: 0.65;
          margin-top: 0.2rem;
        }
        .cp-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        .cp-context-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-bottom: 2.5rem;
        }
        .cp-context-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1rem;
        }
        .cp-context-text {
          font-size: 0.95rem;
          line-height: 1.75;
          color: #333;
          white-space: pre-line;
        }
        .cp-hubs {
          margin-top: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .cp-hub-pill {
          background: #e8eaf6;
          color: #0f3460;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }
        .cp-states-heading {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f3460;
          margin-bottom: 1.5rem;
        }
        .cp-state-block {
          margin-bottom: 2.5rem;
        }
        .cp-state-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .cp-state-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          text-decoration: none;
        }
        .cp-state-name:hover { text-decoration: underline; }
        .cp-state-code {
          background: #0f3460;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }
        .cp-cities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
        .cp-city-card {
          background: #fff;
          border-radius: 10px;
          padding: 1.25rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          border: 1px solid #e8eaf6;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .cp-city-card:hover {
          box-shadow: 0 4px 16px rgba(15,52,96,0.12);
          border-color: #0f3460;
        }
        .cp-city-card-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f3460;
          margin-bottom: 0.3rem;
        }
        .cp-city-card-district {
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 0.6rem;
        }
        .cp-city-courses-count {
          font-size: 0.8rem;
          color: #e53935;
          font-weight: 600;
        }
        .cp-employers-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-top: 2.5rem;
        }
        .cp-employers-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1rem;
        }
        .cp-employers-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .cp-employer-pill {
          background: #f4f6ff;
          border: 1px solid #e8eaf6;
          color: #333;
          font-size: 0.83rem;
          font-weight: 500;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
        }
        .cp-faq-section {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          margin-top: 2rem;
        }
        .cp-faq-section h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
        }
        .cp-faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cp-faq-item {
          border: 1px solid #e8eaf6;
          border-radius: 8px;
          overflow: hidden;
        }
        .cp-faq-q {
          padding: 0.9rem 1.1rem;
          background: #f4f6ff;
          font-weight: 700;
          font-size: 0.93rem;
          color: #0f3460;
        }
        .cp-faq-a {
          padding: 0.9rem 1.1rem;
          font-size: 0.9rem;
          color: #333;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <div className="cp-hero">
        <div className="cp-hero-inner">
          <nav className="cp-breadcrumb" aria-label="Breadcrumb">
            <a href="https://www.arivuon.com">Home</a>
            <span>›</span>
            <a href="https://www.arivuon.com/locations">Locations</a>
            <span>›</span>
            {country.name}
          </nav>
          {country.flagEmoji && <span className="cp-flag">{country.flagEmoji}</span>}
          <div className="cp-eyebrow">ArivuOn Academy · {country.name}</div>
          <h1>{country.seo.metaTitle}</h1>
          <p className="cp-hero-sub">{country.seo.metaDescription}</p>
          <div className="cp-stats-row">
            <div className="cp-stat">
              <span className="cp-stat-value">{statesWithCities.length}</span>
              <div className="cp-stat-label">States</div>
            </div>
            <div className="cp-stat">
              <span className="cp-stat-value">
                {statesWithCities.reduce((s, sw) => s + sw.cities.length, 0)}
              </span>
              <div className="cp-stat-label">Cities</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cp-body">
        <div className="cp-context-section">
          <h2>Technology &amp; Education Landscape</h2>
          <p className="cp-context-text">{country.countryContext}</p>
          {country.techHubs.length > 0 && (
            <div className="cp-hubs">
              {country.techHubs.map((hub) => (
                <span key={hub} className="cp-hub-pill">{hub}</span>
              ))}
            </div>
          )}
        </div>

        <div className="cp-states-heading">Training Centers by State</div>

        {statesWithCities.map(({ state, cities }) => (
          <div key={state.slug} className="cp-state-block">
            <div className="cp-state-header">
              <a
                href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}`}
                className="cp-state-name"
              >
                {state.name}
              </a>
              {state.stateCode && (
                <span className="cp-state-code">{state.stateCode}</span>
              )}
            </div>
            <div className="cp-cities-grid">
              {cities.map((city) => (
                <a
                  key={city.slug}
                  href={`https://www.arivuon.com/locations/${country.slug}/${state.slug}/${city.slug}`}
                  className="cp-city-card"
                >
                  <div className="cp-city-card-name">{city.name}</div>
                  {city.districtName && (
                    <div className="cp-city-card-district">{city.districtName}</div>
                  )}
                  <div className="cp-city-courses-count">
                    {city.activeCoursesSlugs.length} courses available
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {country.topEmployers.length > 0 && (
          <div className="cp-employers-section">
            <h2>Top Hiring Companies</h2>
            <div className="cp-employers-grid">
              {country.topEmployers.map((e) => (
                <span key={e} className="cp-employer-pill">{e}</span>
              ))}
            </div>
          </div>
        )}

        {country.aeo.faqItems.length > 0 && (
          <div className="cp-faq-section">
            <h2>Frequently Asked Questions</h2>
            <dl className="cp-faq-list">
              {[...country.aeo.faqItems]
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((item, i) => (
                  <div key={i} className="cp-faq-item">
                    <dt className="cp-faq-q">{item.question}</dt>
                    <dd className="cp-faq-a">{item.answer}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { ECOSYSTEM, FAQS, JOURNEY, LEVELS, PATHS, SITE, STEPS, TESTIMONIALS } from "@/data/content";
import {
  ArrowRightIcon, AwardIcon, CheckIcon, ClockIcon,
  GlobeIcon, GraduationCapIcon, LayersIcon, MailIcon, RocketIcon,
  TargetIcon, UsersIcon,
} from "./icons";

const LEVEL_ICONS = [
  <TargetIcon key="t" size={26} />,
  <LayersIcon key="l" size={26} />,
  <RocketIcon key="r" size={26} />,
  <AwardIcon key="a" size={26} />,
];

const ECO_ICONS = [
  <LayersIcon key="l" size={26} />,
  <GlobeIcon key="g" size={26} />,
  <GraduationCapIcon key="c" size={26} />,
  <UsersIcon key="u" size={26} />,
];

export function Levels() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Flexible learning tracks</span>
          <h2 className="section-title">Structured, customizable learning <span className="grad-text">that adapts to you</span></h2>
          <p className="section-sub">
            Whether you&apos;re a beginner exploring code or a professional leveling up, we offer
            customizable learning tracks — mentor-led intensive programs with the same quality and
            project focus across levels.
          </p>
        </Reveal>
        <div className="grid-4">
          {LEVELS.map((l, i) => (
            <Reveal key={l.name}>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ margin: "0 auto 14px", color: "var(--violet-700)" }}>{LEVEL_ICONS[i]}</div>
                <span className="tag">{l.level}</span>
                <h3 style={{ marginTop: 10 }}>{l.name}</h3>
                <p>{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="center" style={{ marginTop: 56, fontSize: "1.4rem" }}>Paths for every learner</h3>
        </Reveal>
        <div className="grid-3">
          {PATHS.map((p) => (
            <Reveal key={p.who}>
              <div className="card">
                <span className="program-track">{p.who}</span>
                <h3 style={{ margin: "8px 0 4px" }}>{p.goal}</h3>
                <span className="tag">{p.level}</span>
                <p style={{ marginTop: 12 }}>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="center" style={{ marginTop: 26, color: "var(--muted)" }}>
            Mix and match tracks — we help you choose the right path.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function HowItWorks({ preview = false, bare = false }: { preview?: boolean; bare?: boolean }) {
  return (
    <section className="section" id="how">
      <div className="container">
        {!bare && (
        <Reveal>
          <span className="eyebrow">How CrackLeap works</span>
          <h2 className="section-title">Structured path from <span className="grad-text">learning to career preparation</span></h2>
        </Reveal>
        )}
        <div className="steps">
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
        {preview && (
          <Reveal>
            <p className="center" style={{ marginTop: 28 }}>
              <Link href="/how-it-works" className="btn btn-ghost">How It Works <ArrowRightIcon size={17} /></Link>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Journey({ preview = false, bare = false }: { preview?: boolean; bare?: boolean }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        {!bare && (
        <Reveal className="center">
          <span className="eyebrow">Your transformation journey</span>
          <h2 className="section-title">From curiosity <span className="grad-text">to career-ready</span></h2>
          <p className="section-sub">
            A clear, honest path. No shortcuts, no inflated promises. You learn, you build, you
            prepare — with mentors who ship production code every day.
          </p>
        </Reveal>
        )}
        <Reveal>
          <div className="journey-band">
            <h3>What you become</h3>
            <p>A builder who can demo real work.</p>
            <div className="journey-track">
              {JOURNEY.map((j, i) => (
                <div key={j} style={{ display: "contents" }}>
                  <div className="journey-node">
                    <div className="journey-dot" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>{i + 1}</div>
                    <span>{j}</span>
                  </div>
                  {i < JOURNEY.length - 1 && <div className="journey-line" aria-hidden="true" />}
                </div>
              ))}
            </div>
            <div className="journey-finale">
              <strong>Not just certificates</strong>
              <p style={{ margin: 0 }}>
                A portfolio, clean GitHub, and confidence to prepare for what&apos;s next. Career
                preparation guidance, not false guarantees.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="expect">
          {[
            { icon: <CheckIcon size={24} />, t: "Honest expectations", d: "No placement provision — we help you prepare for placements and internships." },
            { icon: <ClockIcon size={24} />, t: "Live only", d: "Mentor-led live sessions with doubt support and reviews." },
            { icon: <RocketIcon size={24} />, t: "Build to learn", d: "Production projects, not toy assignments." },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="expect-item">
                <span className="e" style={{ color: "var(--violet-600)", display: "inline-flex" }}>{x.icon}</span>
                <div><strong>{x.t}</strong><p>{x.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        {preview && (
          <Reveal>
            <p className="center" style={{ marginTop: 28 }}>
              <Link href="/journey" className="btn btn-ghost">See the Journey <ArrowRightIcon size={17} /></Link>
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Ecosystem() {
  return (
    <section className="section section-alt" id="ecosystem">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Vertex Loop ecosystem</span>
          <h2 className="section-title">CrackLeap is a learning initiative by <span className="grad-text">Vertex Loop</span></h2>
          <p className="section-sub">
            A product &amp; tech services company. You don&apos;t learn best from career trainers.
            You learn from engineers who ship production systems daily — for real clients, under
            real deadlines. That&apos;s the Vertex Loop edge that powers CrackLeap.
          </p>
        </Reveal>
        <div className="grid-4">
          {ECOSYSTEM.map((e, i) => (
            <Reveal key={e.title}>
              <div className="card">
                <div className="card-icon" style={{ color: "var(--violet-700)" }}>{ECO_ICONS[i]}</div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Outcomes() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Outcomes</span>
          <h2 className="section-title">Built for <span className="grad-text">real skills</span>, not just certificates</h2>
          <p className="section-sub">
            Each certificate links to a live portfolio + skill report you can share when you prepare
            for opportunities — projects, not just attendance.
          </p>
        </Reveal>
        <div className="cert-strip" aria-label="Program highlights">
          {["100% Practical", "Project Based", "Mentor Led", "Verifiable Certificates"].map((c) => (
            <span key={c}><CheckIcon size={16} /> {c}</span>
          ))}
        </div>
        <div className="grid-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.role}>
              <figure className="card testimonial" style={{ margin: 0 }}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="who">
                  <strong>{t.role}</strong>
                  <span>{t.track}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Frequently asked <span className="grad-text">questions</span></h2>
          <p className="section-sub">Everything you need to know before starting.</p>
        </Reveal>
        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <Reveal key={f.q}>
              <div className={`faq-item ${open === i ? "open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {f.q}
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0 }}>
                  <p>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div>
              <h2>Start Your Tech Journey</h2>
              <p style={{ fontSize: "1.08rem", fontWeight: 600, marginBottom: 10 }}>
                Master modern tech skills with mentors who ship.
              </p>
              <p>
                For students, graduates, professionals and career switchers — explore courses,
                join live sessions, build production projects and get career preparation guidance.
              </p>
              <div className="cta-meta">
                <span><ClockIcon size={16} /> Mentor-led live sessions</span>
                <span><UsersIcon size={16} /> Active engineers, not just trainers</span>
                <span><TargetIcon size={16} /> Career preparation focus</span>
              </div>
            </div>
            <div className="cta-cards">
              <div className="cta-card">
                <h3>Explore Courses</h3>
                <p>Structured courses with live sessions, capstone projects, and guidance to prepare for opportunities.</p>
                <Link href="/courses" className="btn btn-primary">View Courses</Link>
              </div>
              <div className="cta-card">
                <h3>Talk to us</h3>
                <p>Live online &middot; Mentor-led programs &middot; {SITE.email}</p>
                <Link href="/contact" className="btn btn-ghost"><MailIcon size={17} /> Contact Us</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

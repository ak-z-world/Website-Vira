import Link from "next/link";
import Reveal from "./Reveal";
import { SITE } from "@/data/content";
import { BrainIcon, CheckIcon, RocketIcon, TargetIcon } from "./icons";

const POINTS = ["Mentor-led live sessions", "1:1 mentorship", "Project-based learning"];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <Reveal>
          <span className="hero-badge">
            <span className="dot" aria-hidden="true" />A Vertex Loop Initiative
          </span>
          <h1>
            CrackLeap <span className="grad-text">Academy</span>
          </h1>
          <p className="hero-tagline">Leap Beyond Limits</p>
          <p className="hero-lead">
            <strong>CrackLeap</strong> is a learning initiative by Vertex Loop — live, mentor-led
            programs in <strong>Python, Agentic AI, React, AWS &amp; DevOps</strong>. Learn with
            engineers who ship production code daily, and build a portfolio that prepares you for
            placements and internships — <strong>from anywhere in the world</strong>.
          </p>
          <div className="hero-points">
            {POINTS.map((p) => (
              <span key={p}>
                <span className="tick"><CheckIcon size={13} /></span> {p}
              </span>
            ))}
          </div>
          <div className="hero-cta">
            <Link href="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link href="/how-it-works" className="btn btn-ghost">How It Works</Link>
          </div>
          <p className="hero-note">Live Online &nbsp;·&nbsp; Cohorts Worldwide &nbsp;·&nbsp; {SITE.email}</p>
        </Reveal>

        <Reveal className="hero-visual-wrap">
          <div className="float-chip chip-1"><span className="e" aria-hidden="true"><BrainIcon size={17} /></span> AI Agent deployed</div>
          <div className="float-chip chip-2"><span className="e" aria-hidden="true"><RocketIcon size={17} /></span> Live on AWS</div>
          <div className="agent-card">
            <div className="agent-head">
              <div className="agent-avatar">CL</div>
              <div>
                <h3>Agentic AI — the CrackLeap way</h3>
                <p>What our learners build: agents that perceive, plan &amp; act</p>
              </div>
            </div>
            <div className="agent-loop" aria-hidden="true">
              <div className="agent-node"><TargetIcon size={18} /> Perceive<small>read APIs, docs, data</small></div>
              <span className="agent-arrow">→</span>
              <div className="agent-node"><BrainIcon size={18} /> Plan<small>reason + choose tools</small></div>
              <span className="agent-arrow">→</span>
              <div className="agent-node"><RocketIcon size={18} /> Act<small>execute &amp; deploy</small></div>
            </div>
            <div className="agent-code" aria-label="Example agent code">
              <span className="c"># your first agent — week 3 of the AI track</span><br />
              <span className="k">agent</span> = CrackLeapAgent(tools=[<span className="s">"web"</span>, <span className="s">"code"</span>, <span className="s">"deploy"</span>])<br />
              agent.<span className="k">perceive</span>(goal)<br />
              agent.<span className="k">plan</span>()  <span className="c"># ReAct loop</span><br />
              agent.<span className="k">act</span>()   → <span className="s">"deployed"</span>
            </div>
            <div className="agent-status">
              <span className="status-live"><i />Cohort live</span>
              Learners building production projects
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

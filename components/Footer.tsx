import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { SITE, SOCIALS } from "@/data/content";
import SocialIcon from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo.png" alt="CrackLeap Academy logo" width={58} height={58} />
            <h3>CrackLeap Academy</h3>
            <p>
              A learning initiative by {SITE.parent} — mentor-led, project-based technology
              training, live online worldwide. Leap Beyond Limits.
            </p>
            <div className="social-row">
              {SOCIALS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="me noopener"
                  className="social-btn"
                  aria-label={`CrackLeap on ${s.label}`}
                >
                  <SocialIcon icon={s.key} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Courses</h4>
            <ul>
              {COURSES.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/courses">View all courses</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Academy</h4>
            <ul>
              <li><Link href="/why-crackleap">Why CrackLeap</Link></li>
              <li><Link href="/journey">Learner Journey</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></li>
              <li>Chennai, Tamil Nadu, India</li>
              <li><a href={SITE.parentUrl} target="_blank" rel="noopener">{SITE.parent}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.parent}. CrackLeap Academy — Leap Beyond Limits.</span>
          <span>
            <a href={SITE.parentUrl} target="_blank" rel="noopener">vertexloop.in</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

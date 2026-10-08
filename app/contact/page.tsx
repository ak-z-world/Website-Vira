import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/data/content";
import { BuildingIcon, GraduationCapIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us | Enroll or Partner with CrackLeap Academy",
  description:
    "Contact CrackLeap Academy — enroll in a course from anywhere in the world, or discuss a college MOU partnership. Email hello@vertexloop.in.",
  alternates: { canonical: "https://crackleap.vertexloop.in/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Let&apos;s start the <span className="grad-text">conversation</span></>}
        lead="Learners: enroll from anywhere in the world. Colleges: talk to us about founding MOU partnerships. We reply to every message."
        crumb="Contact"
      />
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-info-card">
                <h3>Talk to a human</h3>
                <p>
                  Whether you&apos;re a student choosing a course or a college administrator
                  exploring a partnership — reach out, and a member of our team will respond.
                </p>
                <div className="contact-methods">
                  <a className="contact-method" href={`mailto:${SITE.email}`}>
                    <MailIcon size={22} />
                    <span><small>Email</small><strong>{SITE.email}</strong></span>
                  </a>
                  <a className="contact-method" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                    <PhoneIcon size={22} />
                    <span><small>Phone / WhatsApp</small><strong>{SITE.phone}</strong></span>
                  </a>
                  <div className="contact-method">
                    <MapPinIcon size={22} />
                    <span><small>Based in</small><strong>Chennai, Tamil Nadu, India</strong></span>
                  </div>
                </div>
                <div style={{ marginTop: 26, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                  <p style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}>
                    <BuildingIcon size={20} />
                    <span><strong style={{ color: "#fff" }}>For colleges:</strong> founding MOU partnerships are now open — select &quot;College / institutional partnership&quot; in the form.</span>
                  </p>
                  <p style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem", marginTop: 12 }}>
                    <GraduationCapIcon size={20} />
                    <span><strong style={{ color: "#fff" }}>For learners:</strong> all courses run live online — enroll from anywhere in the world.</span>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

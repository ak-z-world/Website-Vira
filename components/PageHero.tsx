import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  lead,
  crumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  crumb: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true">
        <Image src="/images/page-hero.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="container">
        <Reveal className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{crumb}</span>
          </nav>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}

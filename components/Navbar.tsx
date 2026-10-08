"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ANNOUNCEMENT, NAV_LINKS } from "@/data/content";
import { ArrowRightIcon, BuildingIcon, GlobeIcon, MenuIcon, XIcon } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce" role="note" aria-label="Announcement">
        <div className="container announce-inner">
          <Link href="/contact" className="announce-item">
            <BuildingIcon size={15} />
            <span>{ANNOUNCEMENT.colleges}</span>
            <ArrowRightIcon size={14} />
          </Link>
          <span className="announce-sep" aria-hidden="true" />
          <Link href="/courses" className="announce-item">
            <GlobeIcon size={15} />
            <span>{ANNOUNCEMENT.learners}</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
      <header className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="CrackLeap Academy home">
            <Image src="/logo.png" alt="CrackLeap Academy logo" width={46} height={46} priority />
            <span>
              <span className="brand-name">CrackLeap</span>
              <span className="brand-tag">Academy</span>
            </span>
          </Link>
          <nav className={`nav-links ${open ? "mobile-open" : ""}`} aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
              Enroll Now
            </Link>
          </nav>
          <Link href="/contact" className="btn btn-primary nav-cta desktop-only">
            Enroll Now
          </Link>
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <XIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}

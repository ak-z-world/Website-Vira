"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "span";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Safety net: never leave content hidden if observer never fires
    const fallback = window.setTimeout(() => el.classList.add("visible"), 2500);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  // Dynamic tag is safe: Tag is constrained to div | section | span
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

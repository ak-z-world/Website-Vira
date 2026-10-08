import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { HowItWorks, Levels } from "@/components/SectionsB";
import { Cta } from "@/components/SectionsB";

export const metadata: Metadata = {
  title: "How It Works | Explore, Join Live, Build, Get Certified",
  description:
    "How CrackLeap works: explore programs, join mentor-led live sessions, build production-grade projects, and get certified with career preparation guidance.",
  alternates: { canonical: "https://crackleap.vertexloop.in/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How CrackLeap works"
        title={<>A structured path from <span className="grad-text">learning to career preparation</span></>}
        lead="Four clear steps take you from exploring a program to holding a verifiable certificate, a portfolio of real projects, and interview-ready confidence."
        crumb="How It Works"
      />
      <HowItWorks bare />
      <Levels />
      <Cta />
    </>
  );
}

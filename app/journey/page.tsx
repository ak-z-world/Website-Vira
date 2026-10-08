import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Journey } from "@/components/SectionsB";
import { Cta } from "@/components/SectionsB";

export const metadata: Metadata = {
  title: "Learner Journey | From Curiosity to Career-Ready",
  description:
    "The CrackLeap learner journey: Student to Learner to Builder to Developer to Career-Ready — a clear, honest path with mentors who ship production code.",
  alternates: { canonical: "https://crackleap.vertexloop.in/journey" },
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Your transformation journey"
        title={<>From curiosity <span className="grad-text">to career-ready</span></>}
        lead="A clear, honest path. No shortcuts, no inflated promises. You learn, you build, you prepare — with mentors who ship production code every day."
        crumb="Journey"
      />
      <div style={{ paddingTop: 72 }}>
        <Journey bare />
      </div>
      <Cta />
    </>
  );
}

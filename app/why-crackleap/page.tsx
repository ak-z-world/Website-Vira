import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { WhyUs, Difference } from "@/components/SectionsA";
import { Ecosystem, Outcomes, Cta } from "@/components/SectionsB";

export const metadata: Metadata = {
  title: "Why CrackLeap | Learn by Building, Mentored by Engineers Who Ship",
  description:
    "Why learners choose CrackLeap: industry-aligned curriculum, hands-on production projects, 1:1 mentorship by working engineers, and honest career preparation guidance.",
  alternates: { canonical: "https://crackleap.vertexloop.in/why-crackleap" },
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why CrackLeap"
        title={<>Learn by building. <span className="grad-text">Mentored by engineers who ship.</span></>}
        lead="We bridge theory and production. You learn modern workflows, build real projects, and get guidance to prepare for interviews — taught by active engineers from Vertex Loop."
        crumb="Why CrackLeap"
      />
      <WhyUs bare />
      <Difference />
      <Ecosystem />
      <Outcomes />
      <Cta />
    </>
  );
}

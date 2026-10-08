import Hero from "@/components/Hero";
import { Marquee, PartOf, WhyUs, CoursesPreview, AwardStrip } from "@/components/SectionsA";
import { Journey, Outcomes, Faq, Cta, Ecosystem } from "@/components/SectionsB";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <PartOf />
      <CoursesPreview />
      <WhyUs preview />
      <Journey preview />
      <Ecosystem />
      <Outcomes />
      <AwardStrip />
      <Faq />
      <Cta />
    </>
  );
}

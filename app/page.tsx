import Hero from "@/components/Hero";
import ForColleges from "@/components/ForColleges";
import { Marquee, PartOf, WhyUs, CoursesPreview, AwardStrip } from "@/components/SectionsA";
import { Journey, Outcomes, Faq, Cta, Ecosystem } from "@/components/SectionsB";
import { FAQS } from "@/data/content";

// FAQPage schema is emitted here, on the one page where the FAQ section is
// visible, and is generated from the same FAQS data the section renders.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Marquee />
      <PartOf />
      <CoursesPreview />
      <WhyUs preview />
      <Journey preview />
      <Ecosystem />
      <ForColleges />
      <Outcomes />
      <AwardStrip />
      <Faq />
      <Cta />
    </>
  );
}

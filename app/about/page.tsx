import PageHero from "@/components/PageHero";
import StoryCollage from "@/components/StoryCollage";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import MissionVision from "@/components/MissionVision";
import Stats from "@/components/Stats";
import Values from "@/components/Values";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your journey made simple"
        subtitle="Hajj, Umrah, and world tours with clear prices and real support — from a Stoke-on-Trent team that has been doing this for more than a decade."
        breadcrumb={[{ label: "About Us" }]}
      />
      <StoryCollage />
      <WhyChooseUs />
      <Services />
      <MissionVision />
      <Stats />
      <Values />
      <CTABanner />
    </>
  );
}

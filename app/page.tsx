import HomeHero from "@/components/HomeHero";
import StoryCollage from "@/components/StoryCollage";
import HomePackages from "@/components/HomePackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import PackageGuide from "@/components/PackageGuide";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StoryCollage />
      <HomePackages />
      <WhyChooseUs />
      <Services />
      <PackageGuide />
      <Stats />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
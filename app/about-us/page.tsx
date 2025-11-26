import AboutMehdiTechnologies from "@/Components/About/AboutMehdiTechnologies";
import OurTeam from "@/Components/About/OurTeam";
import OurVision from "@/Components/About/OurVision";
import HeroSection from "@/Components/Common/HeroSection";
import AiSolution from "@/Components/LandingPage/AiSolution";
import Services from "@/Components/LandingPage/Services";

export default function aboutus() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/AboutUsBG.webp"
        title="About Us"
        description="We build purposeful digital products that empower brands to work smarter, connect better, and scale faster. With a focus on creativity, quality, and innovation, we turn ideas into powerful solutions."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About Us" }]}
      />
      <AboutMehdiTechnologies />
      <OurVision />
      <OurTeam />
      <AiSolution />
      <Services />
    </section>
  );
}

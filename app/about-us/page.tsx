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
        title="Who We Are"
        description="Mehdi Technologies is a full-stack software and AI company building modern solutions for businesses worldwide. From product strategy to full-cycle engineering, we turn complex ideas into scalable, high-impact digital systems."
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

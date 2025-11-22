import AllCaseStudy from "@/Components/CaseStudy/AllCaseStudy";
import HeroSection from "@/Components/Common/HeroSection";

export default function CaseStudy() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/CaseStudyBG.webp"
        title="Case Study"
        description="See How We Deliver Client's Idea IntoExcellent Result!"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Case Study" }]}
      />
      <AllCaseStudy />
    </div>
  );
}

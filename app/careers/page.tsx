import HeroSection from "@/Components/Common/HeroSection";
import JobSection from "@/Components/Job/jobSection";
import OurCoreValue from "@/Components/Job/OurCoreValue";
import WhyChoose from "@/Components/Job/WhyChoose";

export default function Career() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/JobsBG.webp"
        title="Careers at Mehdi Technologies"
        description="Join a team that builds smart, meaningful technology. We work fast, think big, and push boundaries every day."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Careers at Mehdi Technologies" },
        ]}
      />
      <JobSection />
      <WhyChoose />
      <OurCoreValue />
    </div>
  );
}

import HeroSection from "@/Components/Common/HeroSection";
import JobSection from "@/Components/Job/jobSection";
import OurCoreValue from "@/Components/Job/OurCoreValue";
import WhyChoose from "@/Components/Job/WhyChoose";

export default function Career() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/JobsBG.webp"
        title="Work With Us"
        description="Join our team and be part of a dynamic, innovative environment where your skills are valued, your growth is supported, and together we create meaningful impact."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Work With Us" },
        ]}
      />
      <JobSection />
      <WhyChoose />
      <OurCoreValue />
    </div>
  );
}

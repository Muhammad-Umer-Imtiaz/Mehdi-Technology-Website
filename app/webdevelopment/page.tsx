import ServicesSection from "@/Components/WebDevelopment/AllService";
import HeroSection from "@/Components/WebDevelopment/HeroSection";
import HowWeServe from "@/Components/WebDevelopment/HowWeServe";
import Tech from "@/Components/WebDevelopment/Tech";

export default function WebDevelopment() {
  return (
    <section>
      <HeroSection />
      <Tech />
      <ServicesSection />
      <HowWeServe />
    </section>
  );
}

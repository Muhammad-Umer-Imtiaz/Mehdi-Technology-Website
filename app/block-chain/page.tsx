import ServicesSection from "@/Components/BlockChain/AllService";
import HeroSection from "@/Components/BlockChain/HeroSection";
import HowWeServe from "@/Components/BlockChain/HowWeServe";
import Tech from "@/Components/BlockChain/Tech";

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

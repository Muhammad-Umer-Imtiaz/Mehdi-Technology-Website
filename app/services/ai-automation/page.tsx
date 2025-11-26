import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import { AIServices, AITech, HowWeServeAI } from "@/data/AIDevelopmentData";

export default function AiDevelopment() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/AIBG.webp"
        title="AI Development"
        description="We build & integrate Artificial Intelligence driven solutions to make your business smarter, faster, and more efficient."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "AI Development" },
        ]}
      />
      <TechSection
        title="AI Development"
        highlight="Technologies"
        technologies={AITech}
      />
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={AIServices}
      />
      <HowWeServeSection
        title="How We Serve You (AI Development)"
        description="We harness the power of Artificial Intelligence to help businesses automate processes, make smarter decisions, and deliver personalized experiences."
        services={HowWeServeAI.map((service) => ({
          ...service,
          icon:
            typeof service.icon === "function" ? (
              <service.icon />
            ) : (
              service.icon
            ),
        }))}
      />
    </section>
  );
}

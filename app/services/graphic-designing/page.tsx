import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import { UIDesignTech, UIDesignServices, HowWeServeUI } from "@/data/Ui-UxData";

export default function UIUX() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/UIUXBG.webp"
        title="UI / UX Designing"
        description="We build & integrate Artificial Intelligence driven solutions to make your business smarter, faster, and more efficient."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "UI / UX Designing" },
        ]}
      />
      <TechSection
        title="UI / UX "
        highlight="Designing"
        technologies={UIDesignTech}
      />
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={UIDesignServices}
      />
      <HowWeServeSection
        title="How We Serve You (UI/UX Design)"
        description="We craft digital experiences that are not only beautiful but also intuitive, engaging, and conversion-focused. Our UI/UX design services bridge the gap between functionality and emotion ensuring your users stay connected, satisfied, and loyal."
        services={HowWeServeUI.map((service) => ({
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

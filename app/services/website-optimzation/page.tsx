import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import {
  SEOAndMarketingTech,
  DigitalMarketingServices,
  HowWeServeDM,
} from "@/data/SEOandDigitalMarketingData";

export default function UIUX() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/SEOBG.webp"
        title="SEO & Digital Marketing"
        description="We build & integrate Artificial Intelligence driven solutions to make your business smarter, faster, and more efficient."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "SEO & Digital Marketing" },
        ]}
      />
      <TechSection
        title="SEO & Digital "
        highlight="Marketing"
        technologies={SEOAndMarketingTech}
      />
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={DigitalMarketingServices}
      />
      <HowWeServeSection
        title="How We Serve You (Digital Marketing)"
        description="We help your brand grow online with data-driven marketing strategies, creative content, and measurable results. From SEO to social media campaigns, our goal is to increase your visibility, attract the right audience, and convert visitors into loyal customers."
        services={HowWeServeDM.map((service) => ({
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

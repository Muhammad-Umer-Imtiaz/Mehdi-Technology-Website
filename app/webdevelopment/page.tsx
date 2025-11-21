import HeroSection from "@/Components/Common/HeroSection";
import HowWeServe from "@/Components/Common/HowWeServe";
import ServicesSection from "@/Components/Common/ServicesSection";
import TechSection from "@/Components/Common/TechSection";
import { webTech, WebServices, HowWEServe } from "@/data/webDevelopmentData";

export default function WebDevelopment() {
  return (
    <section>
      <HeroSection
        bgImage="/WebDevelopment/WebsiteDevelopmentBG.png"
        title="Modern Web Development"
        description="We craft high-performing, visually stunning websites using modern frameworks and 
secure architectures. From corporate websites to complex web apps, our development process ensures speed, scalability, and flawless user experience."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Web Development" },
        ]}
      />
      <TechSection
        title="Website"
        highlight="Development"
        technologies={webTech}
      />
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Web Development"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={WebServices}
      />
      <HowWeServe
        title="How We Serve You (Website Development)"
        description="At Mehdi Technologies, we design and develop high-performance websites that perfectly balance creativity, functionality, and technology. From sleek business sites to powerful enterprise applications, our web solutions are built for speed, security, and scalability ensuring a flawless digital experience across every device."
        services={HowWEServe.map((service) => ({
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

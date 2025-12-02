import HeroSection from "@/Components/Common/HeroSection";
import HowWeServe from "@/Components/Common/HowWeServe";
import ServicesSection from "@/Components/Common/ServicesSection";
import TechSection from "@/Components/Common/TechSection";
import { webTech, WebServices, HowWEServe } from "@/data/webDevelopmentData";

export default function WebDevelopment() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/WebsiteDevelopmentBG.webp"
        title="Web Development Services That Build Fast, Secure & Scalable Digital Experiences"
        description="Your website is your business’s first impression — and we make it unforgettable. Mehdi Technologies builds high-performance websites that load fast, look modern, and convert visitors into customers."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Web Development" },
        ]}
      />
     
      <ServicesSection
        title=" Our Web Development Services"
        description="End-to-end Website development tailored to your business."
        services={WebServices}
      />


       <TechSection
        title="Website"
        highlight="Development"
        technologies={webTech}
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

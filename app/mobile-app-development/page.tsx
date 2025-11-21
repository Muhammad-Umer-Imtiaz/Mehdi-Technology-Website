import HeroSection from "@/Components/Common/HeroSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import TechSection from "@/Components/Common/TechSection";
import HowWeServe from "@/Components/Common/HowWeServe";

import { AppServices, AppTech, HowWeServeApp } from "@/data/AppDevelopmentData";

export default function MobileAppDevelopment() {
  return (
    <section>
      {/* 🌐 Hero */}
      <HeroSection
        bgImage="/BackgroundPictures/AppDevelopmentBG.png"
        title="Mobile App Development"
        description="We build powerful, scalable, and intuitive mobile apps that combine stunning design with robust functionality. From startups to enterprises, our mobile solutions help brands engage users and grow faster in the digital space."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Mobile App Development" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="Mobile App"
        highlight="Technologies"
        technologies={AppTech}
      />

      {/* 🛠 Services */}
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={AppServices}
      />

      {/* 🤝 How We Serve */}
      <HowWeServe
        title="How We Serve You (App Development)"
        description="We design and develop innovative, high-performance mobile applications that deliver seamless user experiences and measurable business results. Whether Android, iOS, or cross-platform, our apps are built to engage, scale, and perform flawlessly."
        services={HowWeServeApp.map((service) => ({
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

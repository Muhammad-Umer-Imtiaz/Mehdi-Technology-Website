'use client'
import HeroSection from "@/Components/Common/HeroSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import TechSection from "@/Components/Common/TechSection";
import HowWeServe from "@/Components/Common/HowWeServe";

import { AppDevelopmentFAQ, appDevelopmentHighlights, appDevProcess, AppIndustries, AppServices, AppTech, HowWeServeApp } from "@/data/AppDevelopmentData";
import OurProcess from "@/Components/Common/OurProcess";
import IndustriesWeServe from "@/Components/Common/IndustriesWeServe";
import WhyChooseMehdiTechnologies from "@/Components/Common/WhyChooseMehdiTechnologies";
import FAQS from "@/Components/Common/FAQS";

export default function MobileAppDevelopment() {
  return (
    <section>
      {/* 🌐 Hero */}
      <HeroSection
        bgImage="/BackgroundPictures/AppDevelopmentBG.webp"
        title="Mobile App Development That Scales With Your Business"
        description="We design and build high-performance mobile apps that deliver real results—fast, secure, and built to grow."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Mobile App Development" },
        ]}
      />

     

      {/* 🛠 Services */}
      <ServicesSection
        title="Complete Mobile App Development Solutions"
        description="End-to-end mobile app development tailored to your business."
        services={AppServices}
      />

<OurProcess
              title=" Our Mobile App Development Process "
              // description="A proven, systematic approach to achieving sustainable organic growth and measurable ROI through strategic SEO implementation."
              process={appDevProcess} />
              

              

 <IndustriesWeServe
        title="Industries We Serve"
        Industry={AppIndustries}
      />
 <FAQS
      title="Mobile App Development FAQs"
        data={AppDevelopmentFAQ} />
      <WhyChooseMehdiTechnologies data={appDevelopmentHighlights} />
      
 {/* 🧠 Technologies */}
      <TechSection
        title="Mobile App"
        highlight="Technologies"
        technologies={AppTech}
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

'use client'
import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import { UIDesignTech, UIDesignServices, HowWeServeUI, UiUxindustries, UIFaqData, whyChooseMehdiTechnologies, uxUiProcess } from "@/data/Ui-UxData";
import ServicesSection from "@/Components/Common/ServicesSection";
import OurProcess from "@/Components/Common/OurProcess";
import IndustriesWeServe from "@/Components/Common/IndustriesWeServe";
import FAQS from "@/Components/Common/FAQS";
import WhyChooseMehdiTechnologies from "@/Components/Common/WhyChooseMehdiTechnologies";
import dynamic from "next/dynamic";

// Client-only components
const WebProcess = dynamic(() => import("@/Components/WebProcess"), { ssr: false });
export default function UIUX() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/UIUXBG.webp"
        title="UI/UX Design Services That Turn Ideas Into Intuitive, High-Converting Digital Experiences"
        description="We design beautiful, user-centric digital experiences that feel effortless, look premium, and perform flawlessly. Whether you need a website, mobile app, SaaS dashboard, Web3 platform, or AI-powered product — our UI/UX team delivers interfaces that combine strategy, creativity, and conversion-driven design."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "UI / UX Designing" },
        ]}
      />

      <ServicesSection
        title="Our UI/UX Design Services"
                description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."

        services={UIDesignServices}
      />

 <OurProcess
        title="Our UI/UX Design Process"
        // description="A proven, systematic approach to achieving sustainable organic growth and measurable ROI through strategic SEO implementation."
        process={uxUiProcess} />

          <IndustriesWeServe
                title="Industries We Serve"
                Industry={UiUxindustries}
              />
      
      <TechSection
        title="Tools & "
        highlight="Technologies"
        technologies={UIDesignTech}
      />
<WhyChooseMehdiTechnologies data={whyChooseMehdiTechnologies} />
        <FAQS
         title="UI/UX Design FAQs"
              data={UIFaqData} />
      
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

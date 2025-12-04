'use client'
import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import {
  SEOAndMarketingTech,
  DigitalMarketingServices,
  HowWeServeDM,
  SEOindustries,
  seoProcess,
  SEOFaqData,
  whyChooseMehdiTechnologies
} from "@/data/SEOandDigitalMarketingData";
import IndustriesWeServe from "@/Components/Common/IndustriesWeServe";
import FAQS from "@/Components/Common/FAQS";
import WhyChooseMehdiTechnologies from "@/Components/Common/WhyChooseMehdiTechnologies";
import FaqsTest from "@/Components/Test/FaqsTest";
import Faq from "@/Components/Test/Faqs";
import dynamic from "next/dynamic";

// Client-only components
const OurProcess = dynamic(() => import("@/Components/Common/OurProcess"), { ssr: false });
export default function UIUX() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/SEOBG.webp"
        title="SEO & Digital Marketing Services That Help You Rank Faster, Grow Smarter, and Win Online"
        description="We help brands get seen, trusted, and chosen. From SEO and content strategy to performance marketing and social media growth — Mehdi Technologies builds digital systems that bring real traffic, real leads, and real revenue."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "SEO & Digital Marketing" },
        ]}
      />

      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={DigitalMarketingServices}
      />

       <OurProcess title=" Our SEO & Marketing Process"
              process={seoProcess}/>

      <IndustriesWeServe
        title="Industries We Serve"
        Industry={SEOindustries}
      />

      <TechSection
        title="Tools & Platforms "
        highlight="We Use "
        technologies={SEOAndMarketingTech}
      />
      {/* <Faq/>
<FaqsTest/> */}
      <FAQS
      title="SEO FAQs"
        data={SEOFaqData} />

      <WhyChooseMehdiTechnologies data={whyChooseMehdiTechnologies} />

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

'use client'
import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import { AIFaqData, AIIndustries, aiProcess, AIServices, AITech, HowWeServeAI, WhyChooseMehdiTechAI } from "@/data/AIDevelopmentData";
import OurProcess from "@/Components/Common/OurProcess";
import IndustriesWeServe from "@/Components/Common/IndustriesWeServe";
import FAQS from "@/Components/Common/FAQS";
import WhyChooseMehdiTechnologies from "@/Components/Common/WhyChooseMehdiTechnologies";
import TechStack from "@/Components/LandingPage/TechStack";

export default function AiDevelopment() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/AIBG.webp"
        title="AI, Machine Learning & Generative AI Solutions That Drive Real Business Impact"
        description="We build enterprise-grade AI systems, intelligent automation, and next-gen Generative AI applications that help companies scale faster, operate smarter, and stay ahead in the AI-driven future. From custom LLMs to AI agents, chatbots, and automation pipelines—we design, develop, and deploy full-stack AI solutions tailored to your business."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "AI Development" },
        ]}
      />

      <ServicesSection
              title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
              description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
              services={AIServices}
            />

        {/* <OurProcess
                title="Our SEO & Marketing Process"
                // description="A proven, systematic approach to achieving sustainable organic growth and measurable ROI through strategic SEO implementation."
                process={aiProcess} /> */}

                <IndustriesWeServe
                        title="Industries We Serve"
                        Industry={AIIndustries}
                      />
                      <TechStack/>
      {/* <TechSection
        title="AI Development"
        highlight="Technologies"
        technologies={AITech}
      /> */}
              <WhyChooseMehdiTechnologies data={WhyChooseMehdiTechAI } />

       <FAQS
               title="AI FAQS"

              data={AIFaqData} />


      {/* <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={AIServices}
      /> */}
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

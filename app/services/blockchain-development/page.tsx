'use client'
import HeroSection from "@/Components/Common/HeroSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import TechSection from "@/Components/Common/TechSection";
import HowWeServe from "@/Components/Common/HowWeServe";
import {
  BlockchainTech,
  BlockchainServices,
  HowWeServeBlockChain,
  BlockchainProcess,
  BlockchainIndustriesData,
  BlockchainFaqData,
  WhyChooseMehdiTechBlockchain,
  BlockchainTechStack,
} from "@/data/BlockChainData";
import IndustriesWeServe from "@/Components/Common/IndustriesWeServe";
import FAQS from "@/Components/Common/FAQS";
import WhyChooseMehdiTechnologies from "@/Components/Common/WhyChooseMehdiTechnologies";
import TechStack from "@/Components/Common/TechStack";
import dynamic from "next/dynamic";

// Client-only components
const  OurProcess= dynamic(() => import("@/Components/Common/OurProcess"), { ssr: false });

export default function WebDevelopment() {
  return (
    <section>
      {/* 🌐 Hero */}
      <HeroSection
        bgImage="/BackgroundPictures/BlackChainBG.webp"
        title="Blockchain & Web3.0 Solutions That Build Trust, Security, and Real Value"
        description="We design and develop secure, scalable, and future-ready blockchain solutions that help businesses move from traditional systems to decentralized, transparent, and automated digital ecosystems. Whether you're launching a token, building a dApp, or integrating smart contracts—our Web3 experts deliver end-to-end development with enterprise-grade reliability."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Blockchain" },
        ]}
      />
      {/* 🛠 Services */}
      <ServicesSection
        title="Our Blockchain & Web3 Development Services"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={BlockchainServices}
      />


      <OurProcess
              title="Our SEO & Marketing Process"
              // description="A proven, systematic approach to achieving sustainable organic growth and measurable ROI through strategic SEO implementation."
              process={BlockchainProcess} />
<IndustriesWeServe
        title="Industries We Serve"
        Industry={BlockchainIndustriesData}
      />
  
       <TechStack
        title="Tech Stack We Work With"
        highlight="Tech Stack"
        technologies={BlockchainTechStack}
        initialCategory="blockchains"
      />


      {/* 🧠 Technologies */}
      {/* <TechSection
        title="Blockchain"
        highlight="Tech Stack"
        technologies={BlockchainTech}
      /> */}
                    <WhyChooseMehdiTechnologies data={WhyChooseMehdiTechBlockchain} />

 <FAQS
 title="Frequently Asked Questions"
        data={BlockchainFaqData} />

        

      {/* 🤝 How We Serve */}
      <HowWeServe
        title="How We Serve You (Blockchain Development)"
        description="We build secure, transparent, and decentralized blockchain solutions that revolutionize the way you manage data, transactions, and trust."
        services={HowWeServeBlockChain.map((service) => ({
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

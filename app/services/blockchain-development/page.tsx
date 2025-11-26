import HeroSection from "@/Components/Common/HeroSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import TechSection from "@/Components/Common/TechSection";
import HowWeServe from "@/Components/Common/HowWeServe";
import {
  BlockchainTech,
  BlockchainServices,
  HowWeServeBlockChain,
} from "@/data/BlockChainData";

export default function WebDevelopment() {
  return (
    <section>
      {/* 🌐 Hero */}
      <HeroSection
        bgImage="/BackgroundPictures/BlackChainBG.webp"
        title="Blockchain, Web3.0 & NFT Development"
        description="We help businesses step into the decentralized future with end-to-end blockchain development from smart contracts to NFT marketplaces."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Blockchain" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="Blockchain"
        highlight="Tech Stack"
        technologies={BlockchainTech}
      />

      {/* 🛠 Services */}
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Web Development"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={BlockchainServices}
      />

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

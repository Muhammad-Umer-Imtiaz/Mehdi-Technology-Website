import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import { BiAnalyticsData } from "@/data/AiSolutionData";
import { BlockchainTech } from "@/data/BlockChainData";

export default function AiAutomation() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/BuisnessIntelligenceBG.webp"
        title="Business Intelligence & Analytics"
        description="We provide advanced BI and analytics solutions that turn your data into actionable insights. From dashboards and reports to predictive analytics, our services help businesses make informed decisions, identify trends, and optimize performance for measurable growth."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Business Intelligence & Analytics" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="Business Intelligence & Analytics"
        highlight="Tech Stack"
        technologies={BlockchainTech}
        data={BiAnalyticsData}
      />
    </div>
  );
}

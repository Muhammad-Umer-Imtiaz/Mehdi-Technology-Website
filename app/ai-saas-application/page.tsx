import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import { AiSaasData } from "@/data/AiSolutionData";
import { BlockchainTech } from "@/data/BlockChainData";

export default function AiAutomation() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/PredictiveAIModelBG.webp"
        title="AI SaaS Applications"
        description="We create intelligent SaaS solutions powered by AI that enhance user experience, automate tasks, and deliver actionable insights. Our applications help businesses scale efficiently, improve decision-making, and leverage data-driven intelligence seamlessly in the cloud."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#service" },
          { name: "AI SaaS Applications" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="AI SaaS Applications"
        highlight="Tech Stack"
        technologies={BlockchainTech}
        data={AiSaasData}
      />
    </div>
  );
}

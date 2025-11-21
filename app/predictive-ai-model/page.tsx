import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import { AutomationData, PredictiveAiData } from "@/data/AiSolutionData";
import { BlockchainTech } from "@/data/BlockChainData";

export default function AiAutomation() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/PredictiveAIModelBG.webp"
        title="Predictive AI Models"
        description="We build intelligent predictive models that analyze patterns, forecast future outcomes, and help you make smarter, data-driven decisions. From customer behavior and sales trends to risk analysis and automation, our AI delivers accurate insights that keep your business ahead."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#service" },
          { name: "Predictive AI Models" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="Predictive AI Models"
        highlight="Tech Stack"
        technologies={BlockchainTech}
        data={PredictiveAiData}
      />
    </div>
  );
}

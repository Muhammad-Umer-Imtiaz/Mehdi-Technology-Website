import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import { AutomationData } from "@/data/AiSolutionData";
import { BlockchainTech } from "@/data/BlockChainData";

export default function AiAutomation() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/aiChatbotBG.webp"
        title="AI Automation Systems"
        description="We develop smart automation systems that streamline workflows, reduce manual effort, and improve operational efficiency. Our AI solutions handle repetitive tasks, optimize processes, and help your business scale faster with reliable, real-time automation."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "AI Automation Systems" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="AI Automation Systems"
        highlight="Tech Stack"
        technologies={BlockchainTech}
        data={AutomationData}
      />
    </div>
  );
}

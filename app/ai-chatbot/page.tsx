import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import { ChatbotData } from "@/data/AiSolutionData";
import { BlockchainTech } from "@/data/BlockChainData";

export default function AIChatbot() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/aiChatbotBG.webp"
        title="AI Chatbot Development"
        description="We build intelligent chatbots that automate customer support, streamline workflows, and deliver instant, human-like conversations across your website, apps, and social platforms.."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "AI Chatbot Development" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="Ai Chatbot Development"
        highlight="Tech Stack"
        technologies={BlockchainTech}
        data={ChatbotData}
      />
    </div>
  );
}

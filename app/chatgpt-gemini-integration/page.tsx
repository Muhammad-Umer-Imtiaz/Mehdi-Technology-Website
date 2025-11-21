import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import {  LlmIntegrationData } from "@/data/AiSolutionData";
import { BlockchainTech } from "@/data/BlockChainData";

export default function AiAutomation() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/ChatgptBG.jpg"
        title="ChatGPT / Gemini Integrations"
        description="We integrate advanced AI conversational models like ChatGPT and Gemini into your platforms, enabling smart, human-like interactions. These integrations enhance customer support, automate responses, and provide personalized experiences across websites, apps, and digital services."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/#service" },
          { name: "ChatGPT / Gemini Integrations" },
        ]}
      />

      {/* 🧠 Technologies */}
      <TechSection
        title="ChatGPT / Gemini Integrations"
        highlight="Tech Stack"
        technologies={BlockchainTech}
        data={LlmIntegrationData}
      />
    </div>
  );
}

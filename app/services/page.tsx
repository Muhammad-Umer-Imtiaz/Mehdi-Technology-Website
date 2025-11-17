import HeroSection from "@/Components/Common/HeroSection";
import AiSolution from "@/Components/LandingPage/AiSolution";
import Clients from "@/Components/LandingPage/Clients";
import Services from "@/Components/LandingPage/Services";

export default function services() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/ServicesBG.jpg"
        title="Services"
        description="Mehdi Technologies provides end-to-end digital solutions from dynamic web and mobile app development to advanced AI, blockchain, and digital marketing services. We blend innovation, design, and technology to create scalable, high-performing products that help businesses grow, automate, and lead in the digital era."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />
      <Services />
      <AiSolution />
      <Clients />
    </section>
  );
}

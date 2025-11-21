import HeroSection from "@/Components/LandingPage/HeroSection";
import WhoWeAre from "@/Components/LandingPage/WhoWeAre";
import Achivement from "@/Components/LandingPage/Achivement";
import Services from "@/Components/LandingPage/Services";
import Testimonial from "@/Components/LandingPage/Testimonial";
import FAQS from "@/Components/LandingPage/FAQS";
import AiSolution from "@/Components/LandingPage/AiSolution";
import TechStack from "@/Components/LandingPage/TechStack";
import Blogs from "@/Components/LandingPage/Blogs";
import Clients from "@/Components/LandingPage/Clients";
// import BreakpointDebugger from "@/Components/BreakpointDebugger";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <BreakpointDebugger /> */}

      <HeroSection />
      <WhoWeAre />
      <Achivement />
      <Services />
      <Testimonial />
      <FAQS />
      <AiSolution />
      <TechStack />
      <Blogs />
      <Clients />
    </div>
  );
}

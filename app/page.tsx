import HeroSection from "@/Components/LandingPage/HeroSection";
import WhoWeAre from "@/Components/LandingPage/WhoWeAre";
import Navbar from "@/Components/Navbar";
import Achivement from "@/Components/LandingPage/Achivement";
import Services from "@/Components/LandingPage/Services";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <Achivement />
      <Services />
    </div>
  );
}

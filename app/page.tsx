import HeroSection from "@/Components/LandingPage/HeroSection";
import WhoWeAre from "@/Components/LandingPage/WhoWeAre";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <WhoWeAre/>
    </div>
  );
}

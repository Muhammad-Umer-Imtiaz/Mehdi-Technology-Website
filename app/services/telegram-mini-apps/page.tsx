import HeroSection from "@/Components/Common/HeroSection";
import TechSection from "@/Components/Common/TechSection";
import ServicesSection from "@/Components/Common/ServicesSection";
import HowWeServeSection from "@/Components/Common/HowWeServe";
import {
  TelegramTech,
  TelegramServices,
  HowWeServeTelegram,
} from "@/data/TelegramMiniAppData";

export default function WebDevelopment() {
  return (
    <section>
      <HeroSection
        bgImage="/BackgroundPictures/TelegramBG.webp"
        title="Telegram Mini Apps Development"
        description="We specialize in custom Telegram mini-apps that enhance engagement and automate workflows."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Telegram Mini Apps Technologies" },
        ]}
      />
      <TechSection
        title="Telegram Mini Apps "
        highlight="Technologies"
        technologies={TelegramTech}
      />
      <ServicesSection
        title="Building the Future, One App at a Time — Your Partner in Mobile Innovation"
        description="From startups to global enterprises, we build mobile apps that combine sleek design, powerful performance, and seamless user experience. Our focus on innovation, scalability, and reliability makes us a trusted partner for businesses worldwide."
        services={TelegramServices}
      />
      <HowWeServeSection
        title="How We Serve You (Telegram Mini Apps Development)"
        description="We build next-generation Telegram Mini Apps that combine the power of web applications with the simplicity and accessibility of Telegram. From engaging games to business automation tools, our solutions help brands, startups, and communities reach users directly inside Telegram without requiring separate installations or app stores."
        services={HowWeServeTelegram.map((service) => ({
          ...service,
          icon:
            typeof service.icon === "function" ? (
              <service.icon />
            ) : (
              service.icon
            ),
        }))}
      />
    </section>
  );
}

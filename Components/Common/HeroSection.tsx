"use client";
import Link from "next/link";

export default function HeroSection({
  bgImage = "/Blockchain/BlackChainBG.png",
  title = "Blockchain, Web3.0 & NFT Development",
  description = "We help businesses step into the decentralized future with end-to-end blockchain development from smart contracts to NFT marketplaces.",
  breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#service" },
    { name: "Blockchain, Web3.0 & NFT Development" },
  ],
}) {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay (optional for dim effect) */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-12 md:mt-36 ">
        {/* Breadcrumb */}
        <div className="bg-white/10 backdrop-blur-md text-[#ffffff]/70 md:px-6 px-3 py-2 md:text-base inline-flex items-center gap-2 font-light rounded-full mb-4 tracking-wide shadow-sm border-2 border-white/50">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="md:text-lg font-extralight transition-all duration-300 ease-in-out hover:text-[#58C9EC] hover:font-bold"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-white md:text-lg font-semibold">
                  {item.name}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-white">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-semibold mb-4 drop-shadow-lg text-white">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center md:text-2xl text-base text-white leading-relaxed font-light">
          {description}
        </p>
      </div>
    </section>
  );
}

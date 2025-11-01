"use client";

import {
  FaCode,
  FaWallet,
  FaRocket,
  FaLock,
  FaBriefcase,
} from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

export default function HowWeServeBlockchain() {
  const services = [
    {
      icon: <FaCode className="text-3xl text-[#ffffff]" />,
      title: "Smart Contract Development",
      description:
        "We develop and audit smart contracts for Ethereum, Binance Smart Chain, and other blockchain platforms ensuring reliability, transparency, and security.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <SiEthereum className="text-3xl text-[#ffffff]" />,
      title: "DApp Development",
      description:
        "Our decentralized applications (DApps) deliver transparency, scalability, and user empowerment — bringing Web3 capabilities to your business operations.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaRocket className="text-3xl text-[#ffffff]" />,
      title: "NFT & Token Development",
      description:
        "We create NFT marketplaces, ERC20, ERC721, and ERC1155 tokens with minting, trading, and smart contract integration for next-gen digital economies.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaBriefcase className="text-3xl text-[#ffffff]" />,
      title: "Private & Public Blockchain Solutions",
      description:
        "From enterprise-grade private chains to public blockchain integrations, we deliver custom solutions tailored to your industry and business needs.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaWallet className="text-3xl text-[#ffffff]" />,
      title: "Wallet & Exchange Development",
      description:
        "We build secure wallets and trading platforms with advanced encryption, multi-currency support, and user-friendly interfaces for seamless crypto transactions.",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6 md:px-28">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We Serve You (Blockchain Development)
        </h2>
        <p className="text-gray-700 text-base md:text-xl leading-6 text-center">
          We build secure, transparent, and decentralized blockchain solutions
          that revolutionize the way you manage data, transactions, and trust.
          Our expert team brings real-world blockchain innovation to businesses
          through smart contracts, NFTs, DApps, and more.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* First Row - 2 cards spanning more width */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)]
 px-10 py-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-black text-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 cards */}
        {services.slice(2, 5).map((service, index) => (
          <div
            key={index + 2}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#007BFF] px-10 py-6 text-center hover:shadow-xl transition-shadow duration-300 shadow-[0_0_10px_0_rgba(0,123,255,0.8)]"
          >
            <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-black text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

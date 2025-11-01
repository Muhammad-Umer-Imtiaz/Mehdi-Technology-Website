"use client";

import { useState } from "react";

export default function ServicesSection() {
  const [active, setActive] = useState("Blockchain Development");

  const services = [
    {
      title: "Blockchain Development",
      desc: "We help businesses step into the decentralized future with end-to-end blockchain development from smart contracts to NFT marketplaces.",
      points: [
        "DApps & Smart Contracts",
        "Ethereum, BSC, Polygon Development",
        "Solidity Smart Contracts",
        "Tokenomics Design",
      ],
    },
    {
      title: "Web3.0 Integrations",
      desc: "We connect your existing platforms to blockchain ecosystems through smooth integrations.",
      points: [
        "Wallet Connect Integration",
        "On-chain Data Access",
        "Decentralized Identity Systems",
      ],
    },
    {
      title: "NFT Marketplace & Token Development",
      desc: "Launch NFT platforms with minting, trading, and token functionality built for scalability.",
      points: [
        "NFT Minting & Metadata Systems",
        "ERC20, ERC721, ERC1155 Token Development",
        "Marketplace Smart Contracts",
      ],
    },
    {
      title: "Wallet & Exchange Integrations",
      desc: "We build and integrate secure wallets and exchange systems for seamless crypto transactions.",
      points: [
        "Custodial & Non-Custodial Wallets",
        "API Integration with Major Exchanges",
        "Secure Key Management",
      ],
    },
    {
      title: "DAO & Blockchain Consulting",
      desc: "Strategic consulting to help you design and launch DAO structures and blockchain products.",
      points: [
        "DAO Framework Design",
        "Smart Contract Audits",
        "Blockchain Strategy & Advisory",
      ],
    },
  ];

  const activeData = services.find((s) => s.title === active);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-28">
      <style>{`
        @keyframes borderMove {
          0% {
            border-image-source: linear-gradient(0deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          25% {
            border-image-source: linear-gradient(90deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          50% {
            border-image-source: linear-gradient(180deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          75% {
            border-image-source: linear-gradient(270deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          100% {
            border-image-source: linear-gradient(360deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
        }

        .animate-borderMove {
          border-width: 4px;
          border-style: solid;
          border-image-slice: 1;
          animation: borderMove 3s linear infinite;
        }

        @keyframes borderMove2 {
          0% {
            border-image-source: linear-gradient(180deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          25% {
            border-image-source: linear-gradient(270deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          50% {
            border-image-source: linear-gradient(0deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          75% {
            border-image-source: linear-gradient(90deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          100% {
            border-image-source: linear-gradient(180deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
        }

        .animate-borderMove2 {
          border-width: 4px;
          border-style: solid;
          border-image-slice: 1;
          animation: borderMove2 3s linear infinite;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="2xl:text-3xl xl:text-2xl xl:tracking-[0.1em] text-white font-bold mb-3  ">
          Building the Future, One App at a Time — Your Partner in Mobile
          Innovation
        </h2>
        <p className="text-white text-center text-lg">
          We help businesses step into the decentralized future with end-to-end
          blockchain development from smart contracts to NFT marketplaces.
        </p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-8 items-start 2xl:px-20 px-8">
        {/* Left Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setActive(service.title)}
              className={`2xl:px-6 px-1 py-6 text-center rounded-xl border text-lg border-gray-600 font-semibold transition-all duration-300 ${
                active === service.title
                  ? "bg-[#007BFF] text-white"
                  : "hover:bg-[#58C9EC] hover:text-black"
              } ${index === services.length - 1 ? "sm:col-span-2" : ""}`} // ✅ make last button full width
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="relative p-10 rounded-lg bg-black border border-gray-800 overflow-hidden group">
          <div className="absolute inset-0 rounded-lg animate-borderMove"></div>
          <div className="absolute inset-0 rounded-lg animate-borderMove2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">{activeData?.title}</h3>
            <p className="mb-8 text-xl">{activeData?.desc}</p>
            <ul className="list-disc text-lg list-inside space-y-3">
              {activeData?.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

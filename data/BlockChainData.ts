import { FaSearch, FaBolt, FaCloud, FaCogs, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import {
  FaReact,
  FaEthereum,
  FaRust,
  FaNodeJs,
  FaTools,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSolidity,
  SiGo,
  SiPolygon,
  SiSolana,
  SiBinance,
  // SiAvalanche,
  // SiArbitrum,
  // SiHardhat,
  // SiTruffle,
  // SiThegraph,
  SiWeb3Dotjs,
  SiEthers,
  SiIpfs,
 
} from "react-icons/si";
import {
  FaPiggyBank,
  FaBuilding,
  FaTruck,
  FaHeartbeat,
  FaGamepad,
  FaShoppingCart,
  FaBook,
} from "react-icons/fa";
import {
  FaGithub,
  
  FaCode,
  FaBriefcase,
  FaRocket,
  FaWallet,
} from "react-icons/fa";
import {
 
  SiEthereum,
  SiExpress,
  SiJavascript,
  SiMongodb,

  SiTypescript,
 
} from "react-icons/si";

import type { IconType } from "react-icons";

export interface Tech {
  icon: string; // changed from IconType → string
  name: string;
  color: string;
}

export interface Service {
  title: string;
  desc: string;
  points: string[];
}

export interface HowWeServeItem {
  icon: IconType;
  title: string;
  description: string;
  colSpan?: string;
}
export interface SEOindustries {
  icon: IconType;
  name: string;
  color: string;
}



export const HowWeServeBlockChain: HowWeServeItem[] = [
  {
    icon: FaCode,
    title: "Smart Contract Development",
    description:
      "We develop and audit smart contracts for Ethereum, Binance Smart Chain, and other blockchain platforms ensuring reliability, transparency, and security.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaBriefcase,
    title: "Private & Public Blockchain Solutions",
    description:
      "From enterprise-grade private chains to public blockchain integrations, we deliver custom solutions tailored to your industry and business needs.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaRocket,
    title: "NFT & Token Development",
    description:
      "We create NFT marketplaces, ERC20, ERC721, and ERC1155 tokens with minting, trading, and smart contract integration for next-gen digital economies.",
    colSpan: "md:col-span-1",
  },
  {
    icon: SiEthereum,
    title: "DApp Development",
    description:
      "Our decentralized applications (DApps) deliver transparency, scalability, and user empowerment — bringing Web3 capabilities to your business operations.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaWallet,
    title: "Wallet & Exchange Development",
    description:
      "We build secure wallets and trading platforms with advanced encryption, multi-currency support, and user-friendly interfaces for seamless crypto transactions.",
    colSpan: "md:col-span-1",
  },
];

export const BlockchainTech = [
  { icon: SiSolidity, name: "Solidity", color: "#363636" },
  { icon: SiEthereum, name: "Ethereum", color: "#3C3C3D" },
  { icon: SiWeb3Dotjs, name: "Web3.js", color: "#F16822" },
  { icon: SiIpfs, name: "IPFS", color: "#65C2CB" },
  { icon: SiBinance, name: "BNB Chain", color: "#F3BA2F" },
];


export const BlockchainServices: Service[] = [
  {
    title: "Blockchain Smart Contract Development",
    desc: "Secure, gas-efficient, and fully audited smart contracts across all major blockchains.",
    points: [
      "ERC-20 / ERC-721 / ERC-1155 tokens",
      "Staking contracts",
      "Solidity Smart Contracts",
    ],
  },

  {
    title: "Decentralized App (dApp) Development",
    desc: "Full-stack decentralized applications with seamless UI/UX and scalable backend architecture.",
    points: [
      "Web3-enabled app development",
      "Wallet integrations (MetaMask, Trust Wallet, Coinbase)",
      "Real-time on-chain / off-chain data sync",
    ],
  },

  {
    title: "NFT Marketplace Development",
    desc: "Feature-rich NFT marketplaces ready for minting, listing, royalties, and secure trading.",
    points: [
      "Multi-chain support",
      "Auction systems",
      "Wallet integrations",
      "Admin & analytics dashboards",
    ],
  },

  {
    title: "Web3 Wallet Development & Integration",
    desc: "Secure wallet solutions and integrations for seamless blockchain transactions.",
    points: [
      "Custom wallets",
      "Multi-chain support",
      "Payment modules",
      "Seed phrase security",
      "API integrations",
    ],
  },

  {
    title: "DAO & Blockchain Consulting",
    desc: "Strategic consulting to design and launch DAO-based products and governance models.",
    points: [
      "DAO Framework Design",
      "Smart Contract Audits",
      "Blockchain Strategy & Advisory",
      "Voting mechanisms",
      "DAO dashboards",
    ],
  },

{
    title: "DeFi Solutions",
    desc: "",
    points: [
   
    ],
  },

  {
    title: "Blockchain Consulting & Architecture",
    desc: "Guidance for businesses exploring blockchain or optimizing existing Web3 infrastructure.",
    points: [
      "Feasibility analysis",
      "Project scoping",
      "Tokenomics",
      "Technical architecture planning",
    ],
  },
];


export const BlockchainProcess = [
  {
    id: 1,
    title: "Discovery & Planning",
    subtitle: "Define features, user flows, and architecture.",
    image: "/OurProcess/App1.webp",
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Wireframes → Prototype → Final UI.",
    image: "/OurProcess/App2.webp",
  },
  {
    id: 3,
    title: "App Development (Frontend + Backend)",
    subtitle: "Building the app using modern frameworks. Frontend + backend + integrations.",
    image: "/OurProcess/App3.webp",
  },
  {
    id: 4,
    title: "Quality Assurance & Testing",
    subtitle: "Functional, performance, UI, security, and device-level testing.",
    image: "/OurProcess/App4.webp",
  },
  {
    id: 5,
    title: "Deployment",
    subtitle: "App Store + Play Store publishing, compliance, and launch support.",
    image: "/OurProcess/App5.webp",
  },
  {
    id: 6,
    title: "Ongoing Support",
    subtitle: "Continuous improvements, monitoring, and new features.",
    image: "/OurProcess/App6.webp",
  },
];



export const BlockchainIndustriesData = [
  {
    name: "Finance & FinTech",
    desc: "Secure digital payments, smart contracts, and transparent financial systems.",
    icon: FaPiggyBank,
  },
  {
    name: "Real Estate & Property",
    desc: "Tokenized assets, ownership records, and transparent property transactions.",
    icon: FaBuilding,
  },
  {
    name: "Supply Chain & Logistics",
    desc: "Immutable tracking, shipment transparency, and automated workflows.",
    icon: FaTruck,
  },
  {
    name: "Healthcare",
    desc: "Secure medical records, privacy-first patient systems, and data integrity.",
    icon: FaHeartbeat,
  },
  {
    name: "Gaming & Metaverse",
    desc: "NFT assets, player-owned economies, and immersive Web3 gaming.",
    icon: FaGamepad,
  },
  {
    name: "E-commerce & Retail",
    desc: "Decentralized payments, trustless marketplaces, and loyalty tokens.",
    icon: FaShoppingCart,
  },
  {
    name: "Education & EdTech",
    desc: "Verified credentials, student identity, and blockchain certification systems.",
    icon: FaBook,
  },
];

export const BlockchainTechStack = {
 

  Blockchains: [
    { name: "Ethereum", icon: FaEthereum, color: "#3C3C3D" },
    { name: "Polygon", icon: SiPolygon, color: "#8247E5" },
    { name: "Solana", icon: SiSolana, color: "#00FFA3" },
    { name: "Binance Smart Chain", icon: SiBinance, color: "#F3BA2F" },
    // { name: "Avalanche", icon: SiAvalanche, color: "#E84142" },
    // { name: "Arbitrum", icon: SiArbitrum, color: "#28A0F0" },
    { name: "Optimism", icon: FaEthereum, color: "#FF0420" }, // using Ethereum icon
  ],
   Frontend: [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
  ],

  Languages: [
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Rust", icon: FaRust, color: "#DEA584" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
  ],

  Tools: [
    // { name: "Hardhat", icon: SiHardhat, color: "#6667AB" },
    // { name: "Truffle", icon: SiTruffle, color: "#EC5D2F" },
    { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
    { name: "Ethers.js", icon: SiEthers, color: "#3C3C3D" },
    { name: "IPFS", icon: SiIpfs, color: "#65C2CB" },
    // { name: "The Graph", icon: SiThegraph, color: "#E535AB" },
  ],
};


export const WhyChooseMehdiTechBlockchain = [
  "Dedicated blockchain engineering team",
  "Clean, audited smart contracts",
  "End-to-end product delivery",
  "Experience with global clients (USA, UAE, Pakistan)",
  "Fast delivery, clear documentation, secure deployments",
]


export const BlockchainFaqData = [
  {
    question: "How long does it take to build a blockchain project?",
    answer:
      "Depends on complexity — smart contracts (1–2 weeks), dApps (4–8 weeks), full products (8–16 weeks).",
  },
  {
    question: "Can you audit our existing smart contracts?",
    answer:
      "Yes — including manual review and automated vulnerability scanning.",
  },
  {
    question: "Do you offer tokenomics consulting?",
    answer:
      "Yes — including project economics, planning, and compliance guidance.",
  },
  {
    question: "Do you support multi-chain development?",
    answer:
      "Yes — Ethereum, Polygon, BSC, Solana, Avalanche, Arbitrum, and more.",
  },
];

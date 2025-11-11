import {
  FaGithub,
  FaNodeJs,
  FaReact,
  FaCode,
  FaBriefcase,
  FaRocket,
  FaWallet,
} from "react-icons/fa";
import {
  SiBinance,
  SiEthereum,
  SiExpress,
  SiIpfs,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiSolidity,
  SiTypescript,
  SiWeb3Dotjs,
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

export const BlockchainServices: Service[] = [
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

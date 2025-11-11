import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaRobot,
  FaWallet,
  FaGamepad,
  FaCloud,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Tech {
  icon: IconType;
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

/* 🧩 Telegram Mini Apps Services */
export const TelegramServices: Service[] = [
  {
    title: "Telegram Tapping Games",
    desc: "Fun, viral tapping games designed to attract and retain large Telegram communities.",
    points: ["Game Logic & Leaderboards", "Reward Systems & User Analytics"],
  },
  {
    title: "Telegram Wallet Integrations",
    desc: "Integrate secure wallet features directly into Telegram for Web3-powered experiences.",
    points: ["Telegram Wallet Connect", "In-App Crypto Transactions"],
  },
  {
    title: "Custom Telegram Bots & Mini-Apps",
    desc: "We develop custom Telegram solutions for business automation and engagement.",
    points: ["Chatbots, Forms & Mini-Apps", "Admin & CRM Integrations"],
  },
];

/* 🧠 How We Serve You (Telegram Mini Apps) */
export const HowWeServeTelegram: HowWeServeItem[] = [
  {
    icon: FaRobot,
    title: "Custom Telegram Mini Apps",
    description:
      "We design and develop fully customized mini apps tailored to your business goals from service platforms to community tools built using the Telegram WebApp SDK.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaGamepad,
    title: "Telegram Tapping Games",
    description:
      "We create interactive, addictive, and viral-ready tapping and reward-based games that boost user engagement and community activity.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaWallet,
    title: "Telegram Wallet & Payment Integrations",
    description:
      "Our team integrates Telegram Wallet, TON blockchain, and payment gateways to enable in-app purchases, token rewards, and seamless financial transactions.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaRobot,
    title: "Chatbot + Mini-App Ecosystem",
    description:
      "We build smart Telegram bots that work hand-in-hand with mini apps to automate workflows, enhance support, and deliver personalized user experiences.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCloud,
    title: "Scalable Backend Infrastructure",
    description:
      "Every Telegram Mini App we build is powered by secure, scalable cloud architecture ensuring smooth performance even during high user traffic.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaReact,
    title: "UI/UX Design for Telegram Interfaces",
    description:
      "We craft intuitive and lightweight designs optimized specifically for Telegram’s environment, ensuring seamless usability on both mobile and desktop.",
    colSpan: "md:col-span-1",
  },
];

/* 💡 Technologies Used */
export const TelegramTech: Tech[] = [
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
];

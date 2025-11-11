import { FaRobot, FaComments } from "react-icons/fa";
import { SiPython, SiTensorflow, SiPytorch } from "react-icons/si";
import type { IconType } from "react-icons";
import { FaBrain, FaCogs, FaLaptopCode, FaCloud } from "react-icons/fa";
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

/* 🧩 AI Development Services */
export const AIServices: Service[] = [
  {
    title: "AI Chatbot Development",
    desc: "Intelligent chatbots for customer support, e-commerce, and services that feel truly human.",
    points: [
      "Context-Aware Conversations",
      "Multi-Language Support",
      "Integration with Websites & Apps",
    ],
  },
  {
    title: "ChatGPT / Gemini Integrations",
    desc: "We connect your platforms with GPT-based systems for smarter communication and automation.",
    points: [
      "ChatGPT API Setup",
      "Gemini AI Integration",
      "Custom Prompt Engineering",
    ],
  },
  {
    title: "WhatsApp Bot Integrations",
    desc: "Smart conversational bots for real-time interaction on leading messaging platforms.",
    points: ["WhatsApp Cloud API", "Multi-User Support & Analytics"],
  },
  {
    title: "AI Automations & Predictive Systems",
    desc: "Predictive AI tools for smarter decisions and process automation.",
    points: [
      "Data Analysis & Prediction Models",
      "Workflow Automation",
      "AI-Powered Dashboards",
    ],
  },
];

/* 🧠 How We Serve You (AI Development) */
export const HowWeServeAI: HowWeServeItem[] = [
  {
    icon: FaRobot,
    title: "AI-Powered Solutions",
    description:
      "From chatbots to predictive analytics, we build AI tools that solve real-world challenges and enhance efficiency.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaBrain,
    title: "Machine Learning Models",
    description:
      "We develop and train machine learning algorithms tailored to your specific data and business goals.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaLaptopCode,
    title: "Natural Language Processing (NLP)",
    description:
      "Our NLP solutions enable machines to understand, interpret, and respond to human language ideal for chatbots, sentiment analysis, and automation.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCogs,
    title: "Computer Vision Systems",
    description:
      "We create vision-based AI models that recognize objects, detect patterns, and process images or video with precision.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCloud,
    title: "AI Integration",
    description:
      "We integrate AI modules into your existing systems to improve automation, customer support, and decision-making capabilities.",
    colSpan: "md:col-span-1",
  },
];

export const AITech: { icon: IconType; name: string; color: string }[] = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { icon: FaRobot, name: "AI Agents", color: "#6C63FF" },
  { icon: FaComments, name: "Chatbots", color: "#00CFFF" },
];

import {
  FaPaintBrush,
  FaMobileAlt,
  FaDesktop,
  FaTelegram,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiFigma,
  SiAdobexd,
  SiInvision,
  SiSketch,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaUsers } from "react-icons/fa";
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

/* 🖌 UI/UX Services */
export const UIDesignServices: Service[] = [
  {
    title: "Product-Based Designing",
    desc: "Designs that reflect your product’s value through user-centric visuals and smooth interactions.",
    points: ["Brand Guidelines & Layouts", "Product Wireframing"],
  },
  {
    title: "Mobile App UI/UX",
    desc: "Intuitive mobile designs that deliver elegant and functional experiences.",
    points: [
      "User Research & Wireframing",
      "Usability Testing",
      "iOS & Android UI Design",
      "Interactive Prototyping",
    ],
  },
  {
    title: "Website UI/UX",
    desc: "Creative and responsive web designs that engage users and boost conversions.",
    points: ["Landing Pages & Corporate Sites", "Design System Development"],
  },
  {
    title: "Telegram Mini App Interfaces",
    desc: "Custom mini-app interfaces built for optimal engagement within Telegram.",
    points: ["Compact UI/UX", "Brand-Aligned Visuals"],
  },
  {
    title: "Storyboarding",
    desc: "We visualize user journeys and design flow through detailed, creative storyboards.",
    points: ["Flow Mapping & Screen Sequences", "Interaction Scenarios"],
  },
];

/* 🧠 How We Serve You (UI/UX Design) */
export const HowWeServeUI: HowWeServeItem[] = [
  {
    icon: FaPaintBrush,
    title: "User Research & Analysis",
    description:
      "We start by understanding your audience, goals, and behavior patterns to design experiences that truly resonate.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaProjectDiagram,
    title: "Wireframing & Prototyping",
    description:
      "From initial sketches to interactive prototypes, we visualize your product’s structure, flow, and functionality before development begins.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaDesktop,
    title: "Modern Interface Design",
    description:
      "Our designers create sleek, user-centered interfaces that enhance usability and reflect your brand identity perfectly.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaMobileAlt,
    title: "Usability Testing",
    description:
      "We conduct real-world testing to ensure seamless navigation, optimal performance, and delightful user interactions.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaTelegram,
    title: "Cross-Platform Consistency",
    description:
      "Every element we design is optimized for mobile, web, and desktop delivering a consistent and responsive experience everywhere.",
    colSpan: "md:col-span-1",
  },
];

/* 💡 UI/UX Tech & Tools */
export const UIDesignTech: Tech[] = [
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiAdobexd, name: "Adobe XD", color: "#FF61F6" },
  { icon: SiInvision, name: "InVision", color: "#FF3366" },
  { icon: FaUsers, name: "UserTesting", color: "#00B0FF" },
  { icon: SiAdobeillustrator, name: "Adobe Illustrator", color: "#FF9A00" },
  { icon: SiSketch, name: "Sketch", color: "#F7B500" },
];

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
   SiMiro, SiNotion, SiWebflow
} from "react-icons/si";

import type { IconType } from "react-icons";
import { FaLightbulb, FaUsers, FaDraftingCompass, FaPalette, FaCogs, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { 
  FaShoppingCart, 
  FaHeartbeat, 
  FaBuilding, 
  FaDollarSign, 
  FaBook, 
  FaPlane, 
  FaBitcoin 
} from "react-icons/fa";

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
    title: "Product UI/UX Design (Web & Mobile)",
    desc: "Full-stack design for websites, mobile apps, SaaS platforms, dashboards, and enterprise systems.",
    points: [
      "User personas & journeys",
      "Wireframes (low & high fidelity)",
      "Interactive prototypes",
      "Visual design systems",
      "Mobile-first responsive layouts",
    ],
  },
  {
    title: "Mobile App Design (iOS, Android, Flutter)",
    desc: "Pixel-perfect mobile interfaces that blend usability, clarity, and speed.",
    points: [
      "App user flows",
      "App design prototypes",
      "Design-to-development handoff",
      "Iconography & custom UI components",
      "Intuitive mobile designs that deliver elegant and functional experiences",
      "User Research & Wireframing",
      "Usability Testing",
      "iOS & Android UI Design",
      "Interactive Prototyping",
    ],
  },
  {
    title: "Website UI Design & Landing Page Design",
    desc: "High-converting, modern, SEO-friendly website design for fast-growing brands.",
    points: [
      "Homepage & landing page layouts",
      "Conversion-focused funnels",
      "Branding alignment",
      "Section-based modular design",
    ],
  },
  {
    title: "SaaS & Dashboard Interface Design",
    desc: "Clean, organized dashboards that simplify complexity and improve workflow efficiency.",
    points: [
      "Data visualization",
      "User roles & permission-based UI",
      "Dashboard wireframing",
      "Scalable component libraries",
    ],
  },
  {
    title: "Prototyping & User Testing",
    desc: "Validate your product before development using interactive prototypes.",
    points: [
      "High-fidelity prototypes",
      "Usability testing",
      "A/B testing",
      "Feedback-driven revisions",
    ],
  },
  {
    title: "AI App & Chatbot UI/UX Design",
    desc: "Design interfaces for AI-driven products where clarity and user flow matter most.",
    points: [
      "AI agent UI",
      "Chatbot chat interfaces",
      "AI dashboards",
      "Multi-step conversational flow maps",
    ],
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
  { icon: SiAdobeillustrator, name: "Adobe Illustrator", color: "#FF9A00" },
  { icon: SiMiro, name: "Miro", color: "#FF9A0A" },
  { icon: SiNotion, name: "Notion", color: "#000000" },
  { icon: SiWebflow, name: "Webflow", color: "#1C7ED6" },
  // { icon: SiZeplin, name: "Zeplin & Figma Dev Mode", color: "#FF5A00" },
];


export const uiuxProcess = [
  {
    phase: "Discovery & Requirements Gathering",
    duration: "Week 1",
    title: "Understanding your business, audience, and goals",
    description: "We begin by comprehensively understanding your brand, target audience, and business objectives to align design strategies.",
    icon: FaLightbulb,
    deliverables: [
      "Business goals analysis",
      "Audience profiling",
      "Project requirement documentation"
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    phase: "UX Research & Flow Mapping",
    duration: "Week 2",
    title: "User journeys, sitemaps, competitor study",
    description: "Conducting research to map user flows, analyze competitors, and ensure a seamless user experience.",
    icon: FaUsers,
    deliverables: [
      "User journey mapping",
      "Sitemap creation",
      "Competitor analysis report"
    ],
    color: "from-cyan-500 to-teal-500",
  },
  {
    phase: "Wireframing",
    duration: "Week 2-3",
    title: "Structure-focused layouts for fast approvals",
    description: "Creating low and high-fidelity wireframes to visualize layouts and ensure alignment before visual design.",
    icon: FaDraftingCompass,
    deliverables: [
      "Low-fidelity wireframes",
      "High-fidelity wireframes",
      "Layout approval documentation"
    ],
    color: "from-teal-500 to-green-500",
  },
  {
    phase: "UI Design & Branding",
    duration: "Week 3-5",
    title: "High-end visual design and component styling",
    description: "Designing visually appealing interfaces aligned with branding and UX principles.",
    icon: FaPalette,
    deliverables: [
      "Visual design concepts",
      "UI component libraries",
      "Brand style guide integration"
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    phase: "Prototyping",
    duration: "Week 5-6",
    title: "Interactive user testing-ready demo",
    description: "Creating interactive prototypes for user testing and stakeholder feedback before development.",
    icon: FaCogs,
    deliverables: [
      "Clickable prototypes",
      "Interactive flows",
      "User testing readiness"
    ],
    color: "from-emerald-500 to-lime-500",
  },
  {
    phase: "Developer Handoff",
    duration: "Week 6",
    title: "Figma specs, design systems, assets, and support",
    description: "Providing developers with detailed specs, assets, and design systems to ensure smooth implementation.",
    icon: FaLaptopCode,
    deliverables: [
      "Figma design handoff",
      "Component libraries",
      "Asset package & documentation"
    ],
    color: "from-lime-500 to-yellow-500",
  },
  {
    phase: "Iteration & Optimization",
    duration: "Ongoing",
    title: "Performance-driven improvements after launch",
    description: "Continuously improving the UI/UX based on user feedback and performance metrics.",
    icon: FaChartLine,
    deliverables: [
      "Post-launch analysis",
      "User feedback integration",
      "Design refinements and updates"
    ],
    color: "from-yellow-500 to-orange-500",
  },
];




export const UiUxindustries = [
  {
    name: "E-commerce",
    desc: "Boost online sales and customer engagement.",
    icon: FaShoppingCart,
  },
  {
    name: "Healthcare",
    desc: "Enhance patient experience and digital presence.",
    icon: FaHeartbeat,
  },
  {
    name: "Real Estate",
    desc: "Showcase properties and generate leads online.",
    icon: FaBuilding,
  },
  {
    name: "SaaS",
    desc: "Promote innovative solutions and user growth.",
    icon: FaLaptopCode,
  },
  {
    name: "FinTech",
    desc: "Build trust and attract clients digitally.",
    icon: FaDollarSign,
  },
  {
    name: "Education",
    desc: "Engage students and enhance learning experience.",
    icon: FaBook,
  },
  {
    name: "Travel & Hospitality",
    desc: "Attract travelers and boost bookings online.",
    icon: FaPlane,
  },
  {
    name: "Web3 & Crypto",
    desc: "Promote blockchain projects and crypto platforms.",
    icon: FaBitcoin,
  },
];


export const whyChooseMehdiTechnologies: string[] = [
  "Modern, conversion-focused design",
  "Rapid delivery with accurate timelines",
  "Seamless developer handoff",
  "Global delivery experience",
  "Strong track record designing AI apps, mobile apps, SaaS platforms, and blockchain products",
];

export const UIFaqData = [
  {
    question: "What’s the cost of UI/UX design?",
    answer: "Pricing depends on complexity; simple interfaces start from $500+.",
  },
  {
    question: "Do you provide development after design?",
    answer: "Yes — full-stack web, mobile, AI, and blockchain development.",
  },
  {
    question: "Can you redesign our existing product?",
    answer: "Absolutely — we offer UI/UX audits and modernization.",
  },
  {
    question: "How long does UI/UX design take?",
    answer: "Typically 1–4 weeks depending on the project scope.",
  },
];

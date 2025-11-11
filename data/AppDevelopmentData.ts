import {
  FaAndroid,
  FaApple,
  FaReact,
  FaCode,
  FaCogs,
  FaCloud,
  FaMobileAlt,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiIos } from "react-icons/si";
import { FaJava } from "react-icons/fa";

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

/* 🧩 Mobile App Development Services */
export const AppServices: Service[] = [
  {
    title: "iOS App Development",
    desc: "We design and develop high-performance iOS applications tailored for Apple’s ecosystem with seamless user experience.",
    points: [
      "Swift & SwiftUI Development",
      "Native iPhone & iPad Apps",
      "App Store Deployment & Optimization",
      "API & Cloud Integrations",
      "Performance Tuning & Maintenance",
    ],
  },
  {
    title: "Android App Development",
    desc: "Custom Android apps built for performance, compatibility, and usability across all Android devices.",
    points: [
      "Kotlin & Java Development",
      "Native Android Applications",
      "Google Play Store Deployment",
      "API Integrations & Firebase Setup",
      "Testing & Device Optimization",
    ],
  },
  {
    title: "Cross-Platform App Development",
    desc: "We deliver cost-effective apps that work flawlessly across Android and iOS using modern frameworks.",
    points: [
      "Flutter, React Native & Ionic Frameworks",
      "Single Codebase for Multi-Platform",
      "Consistent UI/UX Across Devices",
      "Third-Party API Integrations",
      "Fast Development & Maintenance",
    ],
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "Hybrid web apps that combine the best of mobile and web experiences — fast, installable, and offline-ready.",
    points: [
      "Web App Manifest & Service Workers",
      "App-Like User Interface",
      "Offline Access & Push Notifications",
      "SEO-Optimized PWA Setup",
    ],
  },
  {
    title: "App Maintenance & Support",
    desc: "We provide ongoing app maintenance, updates, and support to ensure flawless performance post-launch.",
    points: [
      "Regular Updates & Bug Fixes",
      "Version Compatibility Management",
      "Feature Enhancements",
      "Analytics & Crash Monitoring",
    ],
  },
  {
    title: "Enterprise App Solutions",
    desc: "Tailored business applications designed to streamline workflows and boost productivity.",
    points: [
      "Employee Portals & CRM Apps",
      "Workflow Automation Systems",
      "Secure Authentication & Role Management",
      "Integration with Existing Tools",
    ],
  },
  {
    title: "App API & Backend Development",
    desc: "We build secure, scalable, and efficient backends that power your mobile applications.",
    points: [
      "RESTful & GraphQL APIs",
      "Cloud Infrastructure (AWS, GCP, Azure)",
      "Database Design & Management",
      "Real-Time Data & Notifications",
    ],
  },
];

/* 🧠 How We Serve You (App Development) */
export const HowWeServeApp: HowWeServeItem[] = [
  {
    icon: FaMobileAlt,
    title: "Native & Cross-Platform Apps",
    description:
      "We develop apps using the latest frameworks like React Native, Flutter, and Swift to ensure maximum speed, stability, and compatibility across all devices.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaLaptopCode,
    title: "UI/UX Design Excellence",
    description:
      "Our design team crafts intuitive and visually appealing interfaces focused on user engagement, retention, and conversion.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCode,
    title: "Custom App Development",
    description:
      "From idea to launch, we build fully customized mobile apps that align with your goals, brand, and audience expectations.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaTools,
    title: "App Maintenance & Support",
    description:
      "We provide continuous updates, optimization, and technical support to keep your app performing smoothly over time.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCloud,
    title: "API & Backend Integration",
    description:
      "Our apps are powered by robust, secure, and scalable backends integrating essential APIs and third-party services seamlessly.",
    colSpan: "md:col-span-1",
  },
];

/* 💡 Technologies Used */
export const AppTech: Tech[] = [
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
  { icon: FaJava, name: "Java", color: "#E76F00" },
  { icon: SiSwift, name: "Swift", color: "#F05138" },
  { icon: SiIos, name: "iOS", color: "#000000" },
];

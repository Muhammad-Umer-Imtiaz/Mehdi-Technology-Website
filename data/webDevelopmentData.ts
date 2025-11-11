import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiShopify,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiDjango,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

// ----------------- Types -----------------
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
  icon: IconType; // ← just the component
  title: string;
  description: string;
  colSpan?: string;
}

// ----------------- Data -----------------
export const webTech: Tech[] = [
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS 3", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: FaReact, name: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: FaNodeJs, name: "Node.js", color: "#8CC84B" },
  { icon: SiExpress, name: "Express.js", color: "#000000" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: FaGithub, name: "GitHub", color: "#181717" },
  { icon: FaWordpress, name: "WordPress", color: "#21759B" },
  { icon: FaPhp, name: "PHP", color: "#777BB4" },
  { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: SiDjango, name: "Django", color: "#092E20" },
];

export const WebServices: Service[] = [
  {
    title: "Front-End Development",
    desc: "We create responsive, engaging, and modern user interfaces that bring designs to life with pixel-perfect precision.",
    points: [
      "HTML, CSS, JavaScript Development",
      "React, Vue.js & Angular Applications",
      "Responsive & Interactive Design",
      "Cross-Browser Compatibility",
      "Performance Optimization",
    ],
  },
  {
    title: "Back-End Development",
    desc: "We develop robust, secure, and scalable server-side systems that power modern web applications.",
    points: [
      "Node.js, Python (Django/Flask), PHP (Laravel)",
      "REST & GraphQL API Development",
      "Database Design & Optimization",
      "Authentication & Authorization Systems",
      "Cloud Hosting & Deployment",
    ],
  },
  {
    title: "Full-Stack Development",
    desc: "Our team delivers complete end-to-end web applications from architecture to deployment.",
    points: [
      "Complete Web Application Development",
      "REST & GraphQL API Integration",
      "UI/UX Design Integration",
      "Database & Server Management",
      "Ongoing Maintenance & Support",
    ],
  },
  {
    title: "E-Commerce Development",
    desc: "We build conversion-focused online stores designed for performance, scalability, and seamless user experience.",
    points: [
      "Shopify, WooCommerce, Custom Stores",
      "Secure Payment Gateway Integration",
      "Product Management & Inventory Systems",
      "SEO & Analytics Integration",
      "Maintenance & Support",
    ],
  },
  {
    title: "Shopify Stores Development",
    desc: "We specialize in custom Shopify design and development for brands looking to scale online.",
    points: [
      "Theme Customization",
      "Store Setup & Launch",
      "Shopify App Integration",
      "Speed Optimization",
    ],
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "We build lightning-fast PWAs that blend the best of web and mobile experiences.",
    points: [
      "Offline Access & Push Notifications",
      "App-Like User Interface",
      "Cross-Platform Compatibility",
    ],
  },
  {
    title: "API & Integration",
    desc: "Seamless integration of third-party APIs, services, and automation systems to expand your app's functionality.",
    points: [
      "REST & GraphQL APIs",
      "Payment Gateway & CRM Integration",
      "Custom API Development",
    ],
  },
  {
    title: "Website Maintenance & Support",
    desc: "We ensure your website remains fast, secure, and updated 24/7 with ongoing support and maintenance.",
    points: [
      "Regular Backups & Updates",
      "Security Patches & Uptime Monitoring",
      "Bug Fixes & Performance Tuning",
    ],
  },
];

export const HowWEServe: HowWeServeItem[] = [
   {
    icon: FaCode,
    title: "Custom Website Development",
    description:
      "We build fully tailored websites that align with your business identity...",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive & Mobile-Optimized Design",
    description:
      "Our websites adapt beautifully to every screen size, delivering consistent performance and exceptional user experiences across mobile, tablet, and desktop.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Development",
    description:
      "We develop conversion-driven e-commerce stores with secure payment systems, dynamic product management, and intuitive shopping experiences that help businesses grow online.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaWordpress,
    title: "CMS Development",
    description:
      "Our team creates user-friendly Content Management Systems (CMS) like WordPress, Shopify, and custom admin panels enabling effortless content updates and long-term flexibility.",
    colSpan: "md:col-span-1",
  },
  {
    icon: AiOutlineApi,
    title: "API & Third-Party Integration",
    description:
      "We connect your website to the tools and services you rely on including CRMs, analytics, and payment systems ensuring smooth data flow and enhanced productivity.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization & SEO",
    description:
      "Our websites are optimized for fast loading, efficient code, and SEO best practices ensuring top-tier visibility and a competitive edge in search rankings.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaBriefcase,
    title: "Web Application Solutions",
    description:
      "From customer dashboards to internal management portals, we deliver interactive and secure web apps that automate workflows and enhance efficiency.",
    colSpan: "md:col-span-1",
  },
];

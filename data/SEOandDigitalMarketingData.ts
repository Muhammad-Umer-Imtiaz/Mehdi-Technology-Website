import {
  FaSearch,
  FaChartLine,
  FaBullhorn,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { SiGoogleanalytics, SiSemrush } from "react-icons/si";
// import {Google} from "lucide-react"
import { 
  FaCogs, 
  FaFileAlt, 
  FaChartPie, 
  FaRocket,
  FaCheckCircle 
} from "react-icons/fa";
import { SiGoogleads, SiMeta, SiHubspot ,} from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { 
  FaShoppingCart, 
  FaHeartbeat, 
  FaBuilding, 
  FaLaptopCode, 
  FaDollarSign, 
  FaBook, 
  FaPlane, 
  FaBitcoin 
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { 

  FaMoneyCheckAlt, 
  FaStore, 
  
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

export interface SEOindustries {
  icon: IconType;
  name: string;
  color: string;
}
/* 📈 Digital Marketing Services */
export const DigitalMarketingServices: Service[] = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher, attract qualified traffic, and build long-term visibility.",
    points: [
      "On-Page SEO",
      "Off-Page SEO",
      "Backlink Strategy",
      "Keywords Research & Competitor Analysis",
      "SEO Audits",
    ],
  },
  {
    title: "Local SEO (Google Maps & Local Ranking)",
    desc: "Be found by customers near you.",
    points: [
      "Google Business Profile Optimization",
      "Local Citations",
      "Geo-specific Keywords",
      "Local Backlinks",
      "Map Pack Ranking Strategy",
    ],
  },
  {
    title: "Content Marketing & Blog Strategy",
    desc: "High-quality content that ranks and converts.",
    points: [
      "Content Strategy",
      "Topic Clusters & Pillar Pages",
      "3-Month Blog Calendar",
      "SEO Articles Written for Ranking",
      "AI-Assisted Content Optimization",
    ],
  },
  {
    title: "Social Media Management & Growth",
    desc: "Build a brand that people follow and engage with.",
    points: [
      "Instagram, Facebook, LinkedIn Content",
      "Social Media Captions, Reels, Creatives",
      "Brand Voice & Theme Building",
      "Engagement & Page Optimization",
    ],
  },
  {
    title: "Paid Ads & Performance Marketing (Google Ads + Meta Ads)",
    desc: "Fast results through targeted advertising.",
    points: [
      "Campaign Setup & Optimization",
      "Performance Tracking",
      "Google Search Ads",
      "Google Display & YouTube Ads",
      "Facebook & Instagram Ads",
      "Retargeting Campaigns",
      "ROI-Focused Ad Optimization",
    ],
  },
  {
    title: "Branding & Creative Strategy",
    desc: "Consistent and impactful branding powered by content that converts.",
    points: [
      "Brand Messaging",
      "Visual Identity Guidance",
      "Brand Voice Development",
      "SEO Copywriting",
      "Creative Direction for Ads & Social",
    ],
  },
];


/* 🧠 How We Serve You (Digital Marketing) */
export const HowWeServeDM: HowWeServeItem[] = [
  {
    icon: FaSearch,
    title: "Search Engine Optimization (SEO)",
    description:
      "We optimize your website for search engines using on-page, off-page, and technical SEO strategies to improve rankings and drive organic traffic.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaUsers,
    title: "Social Media Marketing",
    description:
      "Our social media experts create engaging content, run effective campaigns, and build a strong online community around your brand.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaBullhorn,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "We design high-converting ad campaigns on Google, Meta, and other platforms that maximize ROI and target the right audience at the right time.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaChartLine,
    title: "Content & Email Marketing",
    description:
      "We craft compelling blogs, visuals, videos, and personalized emails to nurture leads, improve retention, and boost conversions through smart automation.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaEnvelope,
    title: "Analytics & Reporting",
    description:
      "Our team continuously tracks performance, analyzes data, and refines strategies to ensure consistent growth and maximum impact.",
    colSpan: "md:col-span-1",
  },
];

/* 💡 SEO & Digital Marketing Tech / Tools */
export const SEOAndMarketingTech: Tech[] = [
  { icon: SiGoogleanalytics, name: "Google Analytics 4", color: "#4285F4" },
  { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
  { icon: SiSemrush, name: "SEMrush", color: "#EB5424" },
  { icon: FaSearch, name: "Ahrefs", color: "#0F4B8F" },
  { icon: FaBullhorn, name: "Screaming Frog", color: "#7FFF00" }, // placeholder
  { icon: FaMeta, name: "Meta Ads Manager", color: "#1877F2" }, // placeholder
  { icon: FaChartLine, name: "Google Search Console", color: "#0F9D58" }, // placeholder
];


export const SEOindustries = [
  {
    name: "E-commerce",
    desc: "Boost online sales and customer engagement.",
    icon: FaShoppingCart ,
  },
  {
    name: "Healthcare",
    desc: "Enhance patient experience and digital presence.",
    icon: FaHeartbeat ,
  },
  {
    name: "Real Estate",
    desc: "Showcase properties and generate leads online.",
    icon: FaBuilding ,
  },
  {
    name: "SaaS & Tech",
    desc: "Promote innovative solutions and user growth.",
    icon: FaLaptopCode ,
  },
  {
    name: "Finance & Insurance",
    desc: "Build trust and attract clients digitally.",
    icon: FaMoneyCheckAlt ,
  },
  {
    name: "Retail",
    desc: "Drive footfall and online sales effectively.",
    icon: FaStore,
  },
  {
    name: "Education & EdTech",
    desc: "Engage students and enhance learning experience.",
    icon: FaBook,
  },
  {
    name: "Travel & Hospitality",
    desc: "Attract travelers and boost bookings online.",
    icon: FaPlane,
  },
];



export const seoProcess = [
  {
    id: 1,
    title: "Discovery & Audit",
    subtitle:
      "Understand your business, target market, and current performance.",
    image: "/OurProcess/SEO1.webp",
  },
  {
    id: 2,
    title: "Keyword & Competitor Research",
    subtitle:
      "Identify ranking opportunities and industry gaps.",
    image: "/OurProcess/SEO2.webp",
  },
  {
    id: 3,
    title: "SEO Setup & Optimization",
    subtitle:
      "On-page, off-page, technical, and local SEO improvements.",
    image: "/OurProcess/SEO3.webp",
  },
  {
    id: 4,
    title: "Content Planning & Execution",
    subtitle:
      "Blogs, landing pages, and keyword-based content.",
    image: "/OurProcess/SEO4.webp",
  },
  {
    id: 5,
    title: "Paid Ads & Social Campaigns",
    subtitle:
      "Fast traffic + long-term organic growth.",
    image: "/OurProcess/SEO5.webp",
  },
  {
    id: 6,
    title: "Tracking, Analytics & Reporting",
    subtitle:
      "Monthly reports with performance insights.",
    image: "/OurProcess/SEO6.webp",
  },
  {
    id: 7,
    title: "Continuous Improvement",
    subtitle:
      "Scaling your visibility, leads, and conversions.",
    image: "/OurProcess/SEO7.webp",
  },
];




export const SEOFaqData = [
  {
    question: "How long until SEO results?",
    answer: "2–3 months for improvements, 4–6 months for strong rankings.",
  },
  {
    question: "Do you offer monthly SEO plans?",
    answer: "Yes, we provide flexible monthly and project-based packages.",
  },
  {
    question: "Can you manage SEO + social media + ads together?",
    answer: "Yes, we provide full 360° digital marketing.",
  },
  {
    question: "Do you work with global brands?",
    answer: "Yes, we provide services in Pakistan, UAE, USA, UK, and beyond.",
  },
];



export const whyChooseMehdiTechnologies = [
  "Expertise across Pakistan, UAE, USA markets",
  "SEO + content + ads + social all under one roof",
  "AI-driven optimization strategies",
  "Transparent reporting",
  "Fast communication & professional execution",
  "Proven track record scaling brands online",
];

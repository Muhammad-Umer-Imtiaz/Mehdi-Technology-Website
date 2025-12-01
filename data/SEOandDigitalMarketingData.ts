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

import { FaChartBar } from "react-icons/fa";
import type { IconType } from "react-icons";
import { 
  FaShoppingCart, 
  FaHeartbeat, 
  FaBuilding, 
  FaLaptopCode, 
  FaMoneyCheckAlt, 
  FaStore, 
  FaBook, 
  FaPlane 
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
    phase: "Discovery & Analysis",
    duration: "Week 1-2",
    title: "Comprehensive SEO Audit & Research",
    description: "We begin with an in-depth analysis of your current digital presence, competitive landscape, and market opportunities.",
    icon: FaSearch ,
    deliverables: [
      "Technical SEO audit",
      "Competitor analysis report",
      "Current rankings assessment",
      "Website performance evaluation"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    phase: "Strategy Development",
    duration: "Week 2-3",
    title: "Data-Driven Strategy & Planning",
    description: "Leveraging audit insights, we craft a customized SEO roadmap with clear objectives, KPIs, and actionable tactics.",
    icon: FaChartLine ,
    deliverables: [
      "Keyword strategy & opportunity map",
      "Content gap analysis",
      "Link building strategy",
      "Quarterly milestone planning"
    ],
    color: "from-cyan-500 to-teal-500"
  },
  {
    phase: "Technical Optimization",
    duration: "Week 3-5",
    title: "On-Page & Technical SEO Implementation",
    description: "Our team executes critical technical improvements to ensure your site meets search engine best practices and user experience standards.",
    icon: FaCogs,
    deliverables: [
      "Site structure optimization",
      "Page speed enhancements",
      "Schema markup implementation",
      "Mobile optimization"
    ],
    color: "from-teal-500 to-green-500"
  },
  {
    phase: "Content Excellence",
    duration: "Ongoing",
    title: "Strategic Content Creation & Optimization",
    description: "We develop and optimize high-value content assets designed to rank, engage, and convert your target audience.",
    icon: FaFileAlt,
    deliverables: [
      "SEO-optimized blog content",
      "Landing page development",
      "Existing content refresh",
      "Content calendar management"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    phase: "Authority Building",
    duration: "Ongoing",
    title: "Off-Page SEO & Link Acquisition",
    description: "Strategic link building and digital PR campaigns to establish your domain authority and brand presence across the web.",
    icon: FaBullhorn ,
    deliverables: [
      "High-quality backlink acquisition",
      "Digital PR outreach",
      "Local SEO & citations",
      "Brand mention monitoring"
    ],
    color: "from-emerald-500 to-lime-500"
  },
  {
    phase: "Performance Tracking",
    duration: "Monthly",
    title: "Analytics, Reporting & Insights",
    description: "Transparent, data-driven reporting that demonstrates ROI and informs strategic decisions for continuous improvement.",
    icon: FaChartPie ,
    deliverables: [
      "Monthly performance reports",
      "Ranking & traffic analysis",
      "Conversion tracking",
      "Competitive positioning updates"
    ],
    color: "from-lime-500 to-yellow-500"
  },
  {
    phase: "Continuous Growth",
    duration: "Ongoing",
    title: "Optimization & Scaling",
    description: "We continuously refine strategies based on performance data, algorithm updates, and emerging opportunities to maximize your growth.",
    icon: FaRocket ,
    deliverables: [
      "A/B testing & experimentation",
      "Algorithm adaptation",
      "Strategy refinement",
      "Quarterly strategy reviews"
    ],
    color: "from-yellow-500 to-orange-500"
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

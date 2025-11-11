import {
  FaSearch,
  FaChartLine,
  FaBullhorn,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { SiGoogleads, SiMeta, SiHubspot } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
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

/* 📈 Digital Marketing Services */
export const DigitalMarketingServices: Service[] = [
  {
    title: "Social Media Campaigns",
    desc: "Creative, data-driven campaigns to boost reach, engagement, and conversions.",
    points: ["Cross-Platform Strategy", "Trend-Based Content"],
  },
  {
    title: "Content Strategy & Branding",
    desc: "Consistent and impactful branding powered by content that converts.",
    points: ["SEO Copywriting", "Brand Voice Development"],
  },
  {
    title: "Paid Marketing (Google & Meta Ads)",
    desc: "ROI-focused paid ad campaigns across all major platforms.",
    points: ["Campaign Setup & Optimization", "Performance Tracking"],
  },
  {
    title: "Performance Analytics",
    desc: "We analyze your performance metrics to improve visibility and audience retention.",
    points: ["SEO Reports & KPIs", "Marketing Dashboards"],
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
  { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
  { icon: SiMeta, name: "Meta Ads", color: "#1877F2" },
  { icon: SiHubspot, name: "HubSpot", color: "#FF7A59" },
  { icon: FaSearch, name: "Ahrefs", color: "#0F4B8F" },
  { icon: FaChartBar, name: "Moz", color: "#FF9900" },
  { icon: FaSearch, name: "SEO Tools", color: "#00B0FF" },
  { icon: FaChartLine, name: "Analytics", color: "#6C63FF" },
  { icon: FaBullhorn, name: "Marketing Automation", color: "#FF3366" },
];

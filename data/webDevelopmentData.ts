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
  FaLaptopCode,
  FaHeartbeat,
  FaBuilding,
  FaBook,
  FaPlane,
   FaSearch,
  FaPenNib,
  FaTools,
  FaCloudUploadAlt,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";
import {
  
  FaShopify,
  FaAws,
} from "react-icons/fa";

import {

  SiVuedotjs,
  SiLaravel,
  SiPython,
  
  SiWoocommerce,
  SiStrapi,
  SiWebflow,
  SiDigitalocean,
  SiCloudflare,
  SiCpanel,
} from "react-icons/si";

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
    title: "Custom Website Development",
    desc: "Bespoke websites tailored to your brand, functionality needs, and business goals.",
    points: [
      "Custom frontend development",
      "Tailored backend architecture",
      "Responsive layouts",
      "Modern animations & UI interactions",
      "High-performance code",
    ],
  },

  {
    title: "WordPress Development",
    desc: "Fast, SEO-ready websites built with the world’s most flexible CMS.",
    points: [
      "WordPress custom themes",
      "Elementor, Divi & Gutenberg builds",
      "Plugin development",
      "Blog & content websites",
      "Ecommerce & business sites",
    ],
  },

  {
    title: "E-Commerce Website Development",
    desc: "Scalable online stores designed for conversions, easy management, and secure transactions.",
    points: [
      "WooCommerce development",
      "Shopify store setup",
      "Custom e-commerce solutions",
      "Payment gateway integration",
      "Inventory & order management",
      "Speed & UX optimization",
    ],
  },

  {
    title: "Web App Development (Full-Stack)",
    desc: "High-performance applications built using modern frameworks with scalable backend engineering.",
    points: [
      "React.js & Next.js web apps",
      "Node.js, Laravel & Python backend",
      "API integrations",
      "Role-based systems & dashboards",
      "Enterprise-grade architecture",
    ],
  },

  {
    title: "Landing Page Design & Development",
    desc: "Fast, conversion-focused landing pages for marketing campaigns, SaaS, events, and product launches.",
    points: [
      "High-converting layouts",
      "SEO-friendly content",
      "A/B testing setup",
      "Speed optimization",
      "Mobile-friendly design",
    ],
  },

  {
    title: "Corporate & Business Website Development",
    desc: "Professional websites that strengthen brand credibility and improve business presence.",
    points: [
      "Service-based websites",
      "Company profile sites",
      "Portfolio websites",
      "Branding-focused layouts",
      "Professional content structure",
    ],
  },

  {
    title: "CMS Development (Custom Content Systems)",
    desc: "Flexible and easy-to-manage content systems tailored to your workflows.",
    points: [
      "Custom CMS dashboards",
      "Multi-user content roles",
      "Media management",
      "Workflow automation",
    ],
  },

  {
    title: "API Development & System Integrations",
    desc: "Connect your website to apps, CRMs, ERPs, payment systems, and third-party tools.",
    points: [
      "REST & GraphQL APIs",
      "Payment gateways",
      "CRM/ERP integrations",
      "AI & automation integrations",
    ],
  },
];

export const WebIndustries = [
  {
    name: "E-commerce",
    desc: "High-converting online stores, product catalogs, checkout systems, and scalable e-commerce platforms.",
    icon: FaShoppingCart,
  },
  {
    name: "SaaS & Tech",
    desc: "Dashboard-driven web apps, authentication systems, admin portals, and modern SaaS platform development.",
    icon: FaLaptopCode,
  },
  {
    name: "Healthcare",
    desc: "Hospital websites, patient portals, appointment systems, and HIPAA-friendly digital experiences.",
    icon: FaHeartbeat,
  },
  {
    name: "Real Estate",
    desc: "Property listing platforms, agent dashboards, booking systems, and location-based search experiences.",
    icon: FaBuilding,
  },
  {
    name: "Education & E-Learning",
    desc: "Learning portals, LMS systems, course dashboards, quizzes, and student/teacher management tools.",
    icon: FaBook,
  },
  {
    name: "Travel & Hospitality",
    desc: "Booking websites, hotel portals, travel listing platforms, and customer experience focused UI/UX.",
    icon: FaPlane,
  },
  {
    name: "Finance & Insurance",
    desc: "Secure portals, policy management systems, financial dashboards, and customer onboarding flows.",
    icon: FaDatabase,
  },
  {
    name: "Startups & Enterprises",
    desc: "Modern corporate websites, pitch landing pages, dashboards, and scalable full-stack platforms.",
    icon: FaRocket,
  },
];
export const webDevProcess = [
  {
    phase: "Discovery & Requirements",
    duration: "Week 1",
    title: "Understanding Your Goals & Technical Needs",
    description:
      "We analyze your business goals, audience, content needs, and required features to define the full project scope.",
    icon: FaSearch,
    deliverables: [
      "Project requirements",
      "Feature list",
      "Technical plan",
      "Timeline & milestones",
    ],
    color: "from-sky-500 to-indigo-500",
  },

  {
    phase: "UI/UX Wireframes & Design",
    duration: "Week 1-2",
    title: "Modern, Clean, User-Centered Designs",
    description:
      "We create intuitive wireframes, layout structures, and visually polished UI screens for all pages.",
    icon: FaPenNib,
    deliverables: [
      "Wireframes",
      "Clickable prototype",
      "Full UI design kit",
      "Brand styling",
    ],
    color: "from-indigo-500 to-rose-500",
  },

  {
    phase: "Frontend + Backend Development",
    duration: "Week 2-6",
    title: "High-Performance Frontend & Scalable Backend",
    description:
      "We develop clean, optimized code with secure backend logic, API integrations, and responsive frontend.",
    icon: FaCode,
    deliverables: [
      "Frontend development",
      "Backend development",
      "API integrations",
      "Database setup",
    ],
    color: "from-emerald-500 to-lime-500",
  },

  {
    phase: "Testing & QA",
    duration: "Week 3-7",
    title: "Quality Assurance, Speed & Responsiveness",
    description:
      "We test across browsers and devices to ensure flawless performance, fast loading, and smooth functionality.",
    icon: FaTools,
    deliverables: [
      "Browser testing",
      "Mobile responsiveness",
      "Bug fixing",
      "Performance optimization",
    ],
    color: "from-yellow-500 to-orange-500",
  },

  {
    phase: "Deployment & Launch",
    duration: "Week 4-8",
    title: "Server Setup, Optimization & Go-Live",
    description:
      "We deploy your website on a secure hosting environment with full SEO & performance optimization.",
    icon: FaCloudUploadAlt,
    deliverables: [
      "Hosting setup",
      "Domain & SSL",
      "Live deployment",
      "SEO optimization",
    ],
    color: "from-purple-500 to-fuchsia-500",
  },

  {
    phase: "Ongoing Maintenance & Optimization",
    duration: "Ongoing",
    title: "Updates, Monitoring & Feature Enhancements",
    description:
      "We provide continuous support, SEO updates, performance tuning, and new feature rollouts.",
    icon: FaChartLine,
    deliverables: [
      "Monthly updates",
      "New features",
      "SEO improvements",
      "Security patches",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];


export const WebTechStack = {
  Frontend: [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  ],

  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Python", icon: SiPython, color: "#306998" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],

  CMS_Ecommerce: [
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { name: "Shopify", icon: FaShopify, color: "#96BF48" },
    { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
    { name: "Strapi", icon: SiStrapi, color: "#2F2E8B" },
    { name: "Webflow", icon: SiWebflow, color: "#146EF5" },
  ],

  Hosting_Infrastructure: [
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" },
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    { name: "cPanel & VPS", icon: SiCpanel, color: "#FF6C2C" },
  ],
};

export const WhyChooseMehdiTechWeb = [
  "Expert full-stack developers",
  "Custom, high-quality web development",
  "Fast-loading and SEO-optimized websites",
  "Clean, scalable code with secure backend systems",
  "UI/UX + frontend + backend — everything in one place",
  "Pixel-perfect and fully responsive design",
  "Transparent communication & timely delivery",
  "Affordable solutions for startups and enterprises",
];



export const WebDevFaqData = [
  {
    question: "How long does a website take to build?",
    answer:
      "Simple websites with API integration take 1–2 weeks. Full websites or web apps take 3–8 weeks depending on complexity.",
  },
  {
    question: "How much does a website or web app cost?",
    answer:
      "Pricing depends on features and complexity. We provide flexible packages for startups and enterprises.",
  },
  {
    question: "Do you provide content writing?",
    answer: "Yes — we offer SEO-optimized website content writing.",
  },
  {
    question: "Do you provide SEO?",
    answer: "Yes — every website is SEO-ready and we also offer full SEO services.",
  },
  {
    question: "Will the website be mobile-responsive?",
    answer:
      "Yes — all websites developed at Mehdi Technologies are fully responsive across all devices.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes — monthly support and maintenance packages are available.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes — we modernize, rebuild, and upgrade old websites.",
  },
  {
    question: "Can you build custom portals and dashboards?",
    answer:
      "Yes — we specialize in advanced custom portals, dashboards, and full web applications.",
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

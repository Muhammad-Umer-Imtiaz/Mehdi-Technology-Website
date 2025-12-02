import {
  FaAndroid,
  FaApple,
  FaReact,
  FaCode,
  FaCogs,
  FaCloud,
  FaMobileAlt,
  FaTools,
   FaLightbulb, 
  FaPencilRuler, 
 FaShoppingCart, 
  FaHeartbeat, 
  FaBuilding, 
  FaLaptopCode, 
  FaMoneyCheckAlt, 
  FaBook, 
  FaPlane, 
  FaTruck, 
  FaMotorcycle, 
  FaWallet ,
  FaCheckCircle, 
  FaCloudUploadAlt, 

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
    title: "Android App Development",
    desc: "High-performing Android apps built using Kotlin and Java with modern UI and optimized performance.",
    points: [
      "Custom Android apps",
      "E-commerce and on-demand apps",
      "Enterprise mobility solutions",
      "API + third-party integrations",
      "Multi-device optimization",
      "Play Store publishing",
    ],
  },
  {
    title: "iOS App Development (iPhone + iPad)",
    desc: "Premium iOS applications built using Swift, optimized for speed, security, and smooth user experience.",
    points: [
      "iPhone and iPad app development",
      "Apple Watch integration",
      "App Store submission & guidelines",
      "Secure architecture",
      "Performance tuning",
    ],
  },
  {
    title: "Cross-Platform App Development (Flutter & React Native)",
    desc: "One codebase — two apps. Faster development, reduced cost, native-like performance.",
    points: [
      "Flutter mobile apps",
      "React Native apps",
      "Hybrid app development",
      "Shared backend integration",
      "Consistent UI across devices",
    ],
  },
  {
    title: "UI/UX Design for Mobile Apps",
    desc: "Modern, minimal, and user-friendly mobile app designs that convert users into loyal customers.",
    points: [
      "Wireframes & screen maps",
      "Prototypes & user flows",
      "UI kits & design systems",
      "Interaction design",
      "Usability testing",
    ],
  },
  {
    title: "Backend Development & API Engineering",
    desc: "A powerful app requires a strong backend. We build secure, scalable, high-performance backends.",
    points: [
      "Node.js, Laravel, Python, Firebase",
      "REST & GraphQL API development",
      "Authentication systems",
      "Cloud servers (AWS, GCP, Azure)",
      "Real-time features & notifications",
    ],
  },
  {
    title: "Mobile App Integrations",
    desc: "We integrate APIs and third-party tools to supercharge your app.",
    points: [
      "Payment gateways",
      "Chat systems",
      "Maps & geolocation",
      "Push notifications",
      "Authentication (OAuth, OTP)",
      "AI/ML features",
      "Chatbots",
    ],
  },
  {
    title: "Mobile App MVP Development for Startups",
    desc: "Build and launch fast with a lean MVP optimized for product validation and investor pitching.",
    points: [
      "Wireframing → MVP → Full App",
      "Cost-optimized development",
      "Market-focused features",
      "Scalable architecture",
      "Quick turnaround",
    ],
  },
  {
    title: "App Maintenance, Support & Scaling",
    desc: "We keep your app running smoothly with continuous optimization.",
    points: [
      "Bug fixing and improvements",
      "Security updates",
      "OS upgrades (Android/iOS)",
      "Server maintenance",
      "Feature enhancements",
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

export const appProcess = [
  {
    phase: "Discovery & Planning",
    duration: "Week 1-2",
    title: "Define features, user flows, and architecture",
    description: "We kick off by understanding your app idea, defining core features, user journeys, and overall architecture for scalable development.",
    icon: FaLightbulb,
    deliverables: [
      "Feature list & prioritization",
      "User flow diagrams",
      "Technical architecture outline",
      "Project roadmap"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    phase: "UI/UX Design",
    duration: "Week 2-4",
    title: "Wireframes → Prototype → Final UI",
    description: "Designing intuitive and visually appealing interfaces with a focus on usability and brand consistency.",
    icon: FaPencilRuler,
    deliverables: [
      "Wireframes & mockups",
      "Interactive prototypes",
      "Design system & UI kit",
      "Final visual design"
    ],
    color: "from-cyan-500 to-teal-500"
  },
  {
    phase: "Mobile Development (Frontend + Backend)",
    duration: "Week 4-12",
    title: "Building the app using modern frameworks",
    description: "We implement the app using the latest frontend and backend technologies, integrating APIs and third-party services for full functionality.",
    icon: FaMobileAlt,
    deliverables: [
      "Frontend development (iOS & Android)",
      "Backend & API integrations",
      "Third-party service integration",
      "Shared codebase for cross-platform apps"
    ],
    color: "from-teal-500 to-green-500"
  },
  {
    phase: "Quality Assurance & Testing",
    duration: "Week 10-14",
    title: "Functional, performance, UI, security, and device-level testing",
    description: "Comprehensive testing to ensure a bug-free, secure, and smooth experience across devices.",
    icon: FaCheckCircle,
    deliverables: [
      "Functional testing",
      "Performance & stress testing",
      "UI & UX validation",
      "Security & compliance testing",
      "Device-level testing"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    phase: "Deployment",
    duration: "Week 14-15",
    title: "App Store + Play Store publishing",
    description: "Publishing your app on relevant platforms, ensuring compliance with guidelines and smooth launch support.",
    icon: FaCloudUploadAlt,
    deliverables: [
      "App Store & Play Store submission",
      "Compliance & guideline checks",
      "Beta testing & feedback",
      "Launch support"
    ],
    color: "from-emerald-500 to-lime-500"
  },
  {
    phase: "Ongoing Support",
    duration: "Ongoing",
    title: "Continuous improvements, monitoring, and new features",
    description: "Post-launch support, monitoring, and iterative updates to enhance app performance and user satisfaction.",
    icon: FaTools,
    deliverables: [
      "Bug fixes & updates",
      "Performance monitoring",
      "New feature implementation",
      "Regular maintenance & improvements"
    ],
    color: "from-lime-500 to-yellow-500"
  },
];


export const AppIndustries = [
  {
    name: "E-commerce & Retail",
    desc: "Boost online sales, attract customers, and increase conversions effectively.",
    icon: FaShoppingCart,
  },
  {
    name: "Healthcare",
    desc: "Enhance patient experience, improve engagement, and expand digital presence.",
    icon: FaHeartbeat,
  },
  {
    name: "Real Estate",
    desc: "Showcase properties, generate leads, and attract potential buyers online.",
    icon: FaBuilding,
  },
  {
    name: "Travel & Tourism",
    desc: "Attract travelers, increase bookings, and promote destinations digitally.",
    icon: FaPlane,
  },
  {
    name: "Education & E-Learning",
    desc: "Engage students, enhance learning experiences, and promote educational services.",
    icon: FaBook,
  },
  {
    name: "On-Demand & Delivery",
    desc: "Improve service reach, manage orders efficiently, and delight users.",
    icon: FaMotorcycle,
  },
  {
    name: "Transport & Logistics",
    desc: "Streamline operations, increase visibility, and boost service efficiency.",
    icon: FaTruck,
  },
  {
    name: "Fintech & Digital Wallets",
    desc: "Build trust, attract users, and enhance digital financial services.",
    icon: FaWallet,
  },
];


export const appDevelopmentHighlights = [
  "Skilled development team",
  "Fast delivery using agile methodology",
  "Scalable architecture for long-term growth",
  "Clean UI/UX design with strong user experience focus",
  "Transparent communication and reporting",
  "App development + backend + UI/UX all in one place",
  "Cost-effective with premium-quality execution",
];
export const AppDevelopmentFAQ = [
  {
    question: "How long does it take to develop a mobile app?",
    answer: "MVPs: 4–6 weeks. Full apps: 8–14 weeks depending on complexity.",
  },
  {
    question: "Do you build both Android and iOS apps?",
    answer: "Yes, we develop for both platforms using native and cross-platform technologies.",
  },
  {
    question: "Can you build an app from my idea?",
    answer: "Yes, from concept to prototype to full app launch.",
  },
  {
    question: "Do you help with app marketing and ASO?",
    answer: "Yes, we provide ASO and initial growth optimization.",
  },
  {
    question: "Do you offer confidential development?",
    answer: "Yes, NDA + source code ownership included.",
  },
  {
    question: "Can you help publish on the App Store & Play Store?",
    answer: "Yes, we can handle full deployment to the App Store and Play Store.",
  },
  // {
  //   question: "Do you offer ongoing support?",
  //   answer: "Yes, maintenance plans are available.",
  // },
];

/* 💡 Technologies Used */
export const AppTech: Tech[] = [
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
  { icon: FaJava, name: "Java", color: "#E76F00" },
  { icon: SiSwift, name: "Swift", color: "#F05138" },
  { icon: SiIos, name: "iOS", color: "#000000" },
];

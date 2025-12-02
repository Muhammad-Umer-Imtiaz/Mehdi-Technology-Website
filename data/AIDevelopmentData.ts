import { FaRobot, FaComments } from "react-icons/fa";
import {
 FaPlane,
 FaTruck,
 FaBook,
 FaSearch,
 FaShoppingCart,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaChartLine,
  FaWhatsapp,
  FaBolt,
  FaVideo,
} from "react-icons/fa";

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
    title: "Custom AI App Development",
    desc: "AI-powered apps designed for your business model, customer needs, and internal workflows.",
    points: [
      "AI-powered mobile and web apps",
      "AI analytics dashboards",
      "Predictive systems & real-time decision engines",
      "Custom model integration & inference pipelines",
    ],
  },
  {
    title: "AI Chatbot Development",
    desc: "Intelligent chatbots for customer support, e-commerce, and services that feel truly human.",
    points: [
      "WhatsApp AI bots",
      "Website chatbots with context-awareness",
      "Multi-language conversational agents",
      "CRM/ERP and ticketing integrations (Zendesk, HubSpot, etc.)",
    ],
  },
  {
    title: "NLP & Generative AI Development",
    desc: "Turn text, audio, and video into structured, actionable insights using large language models and multimodal pipelines.",
    points: [
      "Text summarization & content generation",
      "Report automation & document understanding",
      "Speech-to-text / text-to-speech systems",
      "Multi-language model pipelines",
    ],
  },
  {
    title: "AI Automations & Predictive Systems",
    desc: "Predictive AI tools and automations to optimize processes and decision-making.",
    points: [
      "Data analysis & time-series forecasting",
      "Workflow automation and RPA integration",
      "AI-powered dashboards & alerting",
      "Model monitoring and retraining pipelines",
    ],
  },
  {
    title: "AI Integration Services",
    desc: "Seamlessly integrate AI into your existing software, workflows, and cloud infrastructure.",
    points: [
      "AI + CRM / ERP integration",
      "API-first AI microservices",
      "Mobile & web app AI integration",
      "Cloud deployment (AWS / Azure / GCP)",
    ],
  },
  {
    title: "WhatsApp & Messaging Bot Integrations",
    desc: "Smart conversational bots for real-time interaction on leading messaging platforms.",
    points: [
      "WhatsApp Cloud API deployment",
      "Multi-user support & analytics",
      "Conversation routing & escalation",
      "Message templates, analytics & compliance",
    ],
  },
];

/* 🧠 How We Serve You (AI Development) */
export const HowWeServeAI: HowWeServeItem[] = [
    {
    icon: FaBrain,
    title: "Strategy & Data Readiness",
    description:
      "We assess your data, define AI use-cases, and build a prioritized roadmap aligned to business KPIs.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaRobot,
    title: "Model Design & Development",
    description:
      "From proof-of-concept to production, we design, train, fine-tune and validate models tailored to your needs.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCogs,
    title: "RAG, Retrieval & Pipelines",
    description:
      "Robust retrieval-augmented generation pipelines for secure, accurate, and context-aware responses.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaCloud,
    title: "Cloud Deployment & Scaling",
    description:
      "Deploy on AWS, Azure, or GCP with autoscaling, monitoring, and cost-optimized inference strategies.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaShieldAlt,
    title: "Security & Compliance",
    description:
      "Private model deployments, data encryption, access control, and compliance-first processes.",
    colSpan: "md:col-span-1",
  },
  {
    icon: FaMobileAlt,
    title: "Product Integration",
    description:
      "Embed AI into mobile and web apps, CRM systems, call centers, and IoT devices for real impact.",
    colSpan: "md:col-span-1",
  },
];

/* 🏭 AI Development Industries */
export const AIIndustries = [
  { name: "Healthcare", desc: "Clinical insights, patient triage, and automation.", icon: FaBolt },
  { name: "Real Estate & Construction", desc: "Property analytics, vision models, and lead automation.", icon: FaChartLine },
  { name: "E-commerce & Retail", desc: "Personalization, recommendation engines, and search.", icon: FaShoppingCart },
  { name: "Finance & Insurance", desc: "Fraud detection, underwriting models, and forecasting.", icon: FaDatabase },
  { name: "Travel & Hospitality", desc: "Booking assistants, personalization, and operations automation.", icon: FaPlane },
  { name: "Logistics & Supply Chain", desc: "Demand forecasting and route optimization.", icon: FaTruck || FaChartLine },
  { name: "Education & eLearning", desc: "Adaptive learning, content generation, and assessment automation.", icon: FaBook || FaVideo },
];

/* 🧪 AI Development Technologies */
export const AITech: { icon: IconType; name: string; color: string }[]  = [
  { icon: FaBrain, name: "GPT-4 / GPT-4o", color: "#10B981" },
  { icon: FaBrain, name: "Llama 3", color: "#6366F1" },
  { icon: FaBrain, name: "Gemini", color: "#06B6D4" },
  { icon: FaBrain, name: "Claude", color: "#F97316" },
  { icon: FaRobot, name: "Mistral", color: "#EF4444" },
  { icon: FaCogs, name: "PyTorch", color: "#FF6F61" },
  { icon: FaCogs, name: "TensorFlow", color: "#FF6F00" },
  { icon: FaLaptopCode, name: "LangChain / AutoGen", color: "#7C3AED" },
  { icon: FaDatabase, name: "Vector DBs (Pinecone, Weaviate, FAISS)", color: "#0EA5E9" },
  { icon: FaCloud, name: "AWS / Azure / GCP", color: "#0EA5E9" },
  { icon: FaWhatsapp, name: "WhatsApp Cloud API", color: "#25D366" },
  { icon: FaShieldAlt, name: "Secure Private Deployments", color: "#64748B" },
];


/* 🚀 AI Development Process */
export const aiProcess = [
  {
    phase: "Discovery & Data Audit",
    duration: "Week 1",
    title: "Use-Case Prioritization & Data Assessment",
    description: "Identify high-impact use-cases and evaluate data availability, quality, and privacy needs.",
    icon: FaSearch || FaBrain,
    deliverables: ["Use-case list", "Data readiness report", "Success metrics"],
    color: "from-sky-500 to-indigo-500",
  },
  {
    phase: "Prototype & PoC",
    duration: "Week 2-5",
    title: "Rapid Prototyping & Validation",
    description: "Build a working prototype to validate value and iterate quickly with stakeholders.",
    icon: FaBolt,
    deliverables: ["Working prototype", "Performance benchmarks", "Stakeholder demo"],
    color: "from-indigo-500 to-rose-500",
  },
  {
    phase: "Productionization",
    duration: "Week 4-10",
    title: "Production-Grade Deployment",
    description: "Optimize models for latency, cost, and reliability. Add monitoring and CI/CD for models.",
    icon: FaCloud,
    deliverables: ["Deployed model APIs", "Monitoring & alerts", "SLOs/SLAs"],
    color: "from-emerald-500 to-lime-500",
  },
  {
    phase: "Scale & Iterate",
    duration: "Ongoing",
    title: "Scaling, Monitoring & Continuous Learning",
    description: "Continuous model improvements, retraining pipelines, and feature rollouts driven by metrics.",
    icon: FaChartLine,
    deliverables: ["Retraining pipelines", "A/B model experiments", "Quarterly roadmap"],
    color: "from-yellow-500 to-orange-500",
  },
];

/* ❓ AI Development FAQ */
export const AIFaqData = [
  {
    question: "Can you build custom AI apps from scratch?",
    answer: "Yes — including UI/UX, backend, ML models, and cloud deployment.",
  },
  {
    question: "Can you integrate AI into our existing system?",
    answer: "Absolutely — we integrate with CRMs, ERPs, mobile apps, WhatsApp, and websites.",
  },
  {
    question: "What is the cost of an AI project?",
    answer: "Starts from $2,000 for simple chatbots; full AI platforms vary based on scope and data needs.",
  },
  {
    question: "Can you train the AI on our internal data?",
    answer: "Yes — we provide secure private LLMs with RAG and fine-tuning on internal datasets.",
  },
  {
    question: "Do you build Voice AI or call center AI?",
    answer: "Yes — including outbound agents, IVR automation, and conversational voice bots.",
  },
];


export const WhyChooseMehdiTechAI = [
  "Domain-trained AI models",
  "Fast development cycles",
  "Secure, private, compliant deployments",
  "End-to-end design, development, testing, and scaling",
];

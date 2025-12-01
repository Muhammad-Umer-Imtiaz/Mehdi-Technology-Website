export type Typeprojects = {
  _id?: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  slug?: string;
  client?: string;
  date?: string;
  category?: string;
  url?: string;
};

export const projects = [
  {
    id: 1,
    title: "Munsit AI",
    subtitle: "Smart Order Receiving App",
    description:
      "Munsit AI streamlines your order management by using intelligent AI to receive, track, and organize orders automatically. It reduces manual effort, minimizes errors, and ensures your business stays efficient and responsive in real time.",
    image: "/CaseStudy/MunsitAI.webp",
    slug: "munsit-ai",
    client: "Saim David",
    date: "Feb 16, 2025",
    category: "AI Order Receiving App",
  },
  {
    id: 2,
    title: "Fitness AI",
    subtitle: "AI-Powered Fitness App",
    description:
      "Munsit AI streamlines your order management by using intelligent AI to receive, track, and organize orders automatically. It reduces manual effort, minimizes errors, and ensures your business stays efficient and responsive in real time.",
    image: "/CaseStudy/MaxfitAI.webp",
    slug: "fitness-ai",
    client: "Sarah Wilson",
    date: "Jan 10, 2025",
    category: "AI Fitness App",
  },
  {
    id: 3,
    title: "99x-Automation",
    subtitle: "For Ai Chatbots",
    description:
      "Munsit AI streamlines your order management by using intelligent AI to receive, track, and organize orders automatically. It reduces manual effort, minimizes errors, and ensures your business stays efficient and responsive in real time.",
    image: "/CaseStudy/99xAutomation.webp",
    slug: "99x-automation",
    client: "John Carter",
    date: "Dec 20, 2024",
    category: "AI Chatbot",
  },
  {
    id: 4,
    title: "Pets Corner AI",
    subtitle: "Pet Adoption + AI Matching",
    description:
      "Munsit AI streamlines your order management by using intelligent AI to receive, track, and organize orders automatically. It reduces manual effort, minimizes errors, and ensures your business stays efficient and responsive in real time.",
    image: "/CaseStudy/PetsCorner.webp",
    slug: "pets-corner-ai",
    client: "Emily Smith",
    date: "Nov 15, 2024",
    category: "AI Pet App",
  },
];

export const jobs = [
  {
    _id: 1,
    job: "Frontend Developer",
    date: "23 Sep 2025",
    status: "Full-time",
    city: "Islamabad",
    mode: ["Onsite", "Hybrid", "Remote"],
    description: `We are looking for a skilled React Developer to join our dynamic team. 
    Responsibilities include building responsive web applications, collaborating with designers and backend developers, 
    and ensuring high performance and scalability. Strong knowledge of React, JavaScript, HTML, CSS, and REST APIs is required.`,
  },
  {
    _id: 2,
    job: "Full Stack Developer",
    date: "23 Sep 2025",
    status: "Full-time",
    city: "Islamabad",
    mode: ["Onsite", "Remote"],
    description: `Join us as a Full Stack Developer (MERN) to work on exciting web projects. 
    You will handle both frontend (React) and backend (Node.js, Express, MongoDB) development. 
    Experience with deployment, Git, and agile methodologies is preferred.`,
  },
  {
    _id: 3,
    job: "AI Engineer",
    date: "23 Sep 2025",
    status: "Internship",
    city: "Islamabad",
    mode: ["Hybrid", "Remote"],
    description: `We are offering an internship for an AI Engineer with strong foundations in machine learning and neural networks. 
    The intern will work on model training, data processing, and AI-powered web applications. 
    This is a great opportunity to gain hands-on experience in AI development.`,
  },
  {
    _id: 4,
    job: "Project Manager",
    date: "24 Sep 2025",
    status: "Part-time",
    city: "Islamabad",
    mode: ["Remote"],
    description: `We are seeking a talented Project Manager to oversee project timelines, 
    coordinate with cross-functional teams, and ensure delivery of high-quality software solutions. 
    Strong communication, leadership, and planning skills are required.`,
  },
  {
    _id: 5,
    job: "UI/UX Designer",
    date: "25 Sep 2025",
    status: "Full-time",
    city: "Islamabad",
    mode: ["Onsite"],
    description: `Looking for a creative UI/UX Designer to craft intuitive user interfaces, 
    perform user research, create wireframes/prototypes, and collaborate closely with product teams. 
    Experience with Figma, Adobe XD, or similar tools is required.`,
  },
];

"use client";

import { useState } from "react";

export default function ServicesSection() {
  const [active, setActive] = useState("Front-End Development");

  const services = [
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

  const activeData = services.find((s) => s.title === active);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-28">
      <style>{`
        @keyframes borderMove {
          0% {
            border-image-source: linear-gradient(0deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          25% {
            border-image-source: linear-gradient(90deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          50% {
            border-image-source: linear-gradient(180deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          75% {
            border-image-source: linear-gradient(270deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
          100% {
            border-image-source: linear-gradient(360deg, #007BFF 0%, transparent 50%, transparent 100%);
          }
        }

        .animate-borderMove {
          border-width: 4px;
          border-style: solid;
          border-image-slice: 1;
          animation: borderMove 3s linear infinite;
        }

        @keyframes borderMove2 {
          0% {
            border-image-source: linear-gradient(180deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          25% {
            border-image-source: linear-gradient(270deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          50% {
            border-image-source: linear-gradient(0deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          75% {
            border-image-source: linear-gradient(90deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
          100% {
            border-image-source: linear-gradient(180deg, #40f1aa 0%, transparent 50%, transparent 100%);
          }
        }

        .animate-borderMove2 {
          border-width: 4px;
          border-style: solid;
          border-image-slice: 1;
          animation: borderMove2 3s linear infinite;
        }
      `}</style>

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="2xl:text-3xl xl:text-2xl xl:tracking-[0.1em] text-white font-bold mb-3  ">
          Building the Future, One App at a Time — Your Partner in Mobile
          Innovation
        </h2>
        <p className="text-white text-center text-lg">
          From startups to global enterprises, we build mobile apps that combine
          sleek design, powerful performance, and seamless user experience. Our
          focus on innovation, scalability, and reliability makes us a trusted
          partner for businesses worldwide.
        </p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-8 items-start 2xl:px-20 px-8">
        {/* Left Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => setActive(service.title)}
              className={`2xl:px-6 px-1 py-6 text-center rounded-xl border text-lg border-gray-600 font-semibold transition-all duration-300 ${
                active === service.title
                  ? "bg-[#007BFF] text-white"
                  : "hover:bg-[#58C9EC] hover:text-black"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="relative p-10 rounded-lg bg-black border border-gray-800 overflow-hidden group">
          <div className="absolute inset-0 rounded-lg animate-borderMove"></div>
          <div className="absolute inset-0 rounded-lg animate-borderMove2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">{activeData?.title}</h3>
            <p className=" mb-8 text-xl">{activeData?.desc}</p>
            <ul className="list-disc text-lg list-inside space-y-3 ">
              {activeData?.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

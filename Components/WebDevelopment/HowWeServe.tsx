import {
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaWordpress,
  FaPlug,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
export default function HowWeServe() {
  const services = [
    {
      icon: <FaCode className="text-3xl text-[#ffffff]" />,
      title: "Custom Website Development",
      description:
        "We build fully tailored websites that align with your business identity and objectives ensuring unique designs, optimized performance, and seamless functionality from day one.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-[#ffffff]" />,
      title: "Responsive & Mobile-Optimized Design",
      description:
        "Our websites adapt beautifully to every screen size, delivering consistent performance and exceptional user experiences across mobile, tablet, and desktop.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaShoppingCart className="text-3xl text-[#ffffff]" />,
      title: "E-commerce Development",
      description:
        "We develop conversion-driven e-commerce stores with secure payment systems, dynamic product management, and intuitive shopping experiences that help businesses grow online.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaWordpress className="text-3xl text-[#ffffff]" />,
      title: "CMS Development",
      description:
        "Our team creates user-friendly Content Management Systems (CMS) like WordPress, Shopify, and custom admin panels enabling effortless content updates and long-term flexibility.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <AiOutlineApi className="text-3xl text-[#ffffff]" />,
      title: "API & Third-Party Integration",
      description:
        "We connect your website to the tools and services you rely on including CRMs, analytics, and payment systems ensuring smooth data flow and enhanced productivity.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaRocket className="text-3xl text-[#ffffff]" />,
      title: "Performance Optimization & SEO",
      description:
        "Our websites are optimized for fast loading, efficient code, and SEO best practices ensuring top-tier visibility and a competitive edge in search rankings.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FaBriefcase className="text-3xl text-[#ffffff]" />,
      title: "Web Application Solutions",
      description:
        "From customer dashboards to internal management portals, we deliver interactive and secure web apps that automate workflows and enhance efficiency.",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6 md:px-28">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We Serve You (Website Development)
        </h2>
        <p className="text-gray-700 text-base md:text-xl   leading-6">
          At Mehdi Technologies, we design and develop high-performance websites
          that perfectly balance creativity, functionality, and technology. From
          sleek business sites to powerful enterprise applications, our web
          solutions are built for speed, security, and scalability ensuring a
          flawless digital experience across every device.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* First Row - 2 cards spanning more width */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)]
 px-10 py-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-black text-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 cards */}
        {services.slice(2, 5).map((service, index) => (
          <div
            key={index + 2}
            className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#007BFF] px-10 py-6 text-center hover:shadow-xl transition-shadow duration-300 shadow-[0_0_10px_0_rgba(0,123,255,0.8)]"
          >
            <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-black text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}

        {/* Third Row - 2 cards */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(5, 7).map((service, index) => (
            <div
              key={index + 5}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-[#007BFF] px-10 py-6 text-center hover:shadow-xl transition-shadow duration-300 shadow-[0_0_10px_0_rgba(0,123,255,0.8)]"
            >
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 ">{service.title}</h3>
              <p className="text-black text-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  FaGlobe,
  FaCube,
  FaMobileAlt,
  FaRobot,
  FaPaintBrush,
  FaBullhorn,
  FaTelegramPlane,
  FaPhoneAlt,
} from "react-icons/fa";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoMail } from "react-icons/io5";
import { Mail, MapPin, Phone } from "lucide-react";

export default function FeatureService() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      image: "/LandingPage/Services/WebsiteDevelopment.webp",
      heading: "Website Development",
      icon: <FaGlobe />,
      slug: "webdevelopment",
    },
    {
      id: 2,
      image: "/LandingPage/Services/BlockChain.webp",
      heading: "Blockchain, Web 3.0 & NFT",
      icon: <FaCube />,
      slug: "block-chain",
    },
    {
      id: 3,
      image: "/LandingPage/Services/MobileAppDeveloment.webp",
      heading: "Mobile App Development",
      icon: <FaMobileAlt />,
      slug: "mobile-app-development",
    },
    {
      id: 4,
      image: "/LandingPage/Services/TelegramMiniApps.webp",
      heading: "Telegram Mini Apps Development",
      icon: <FaTelegramPlane />,
      slug: "telegram-mini-apps",
    },
    {
      id: 5,
      image: "/LandingPage/Services/AIDevelopment.webp",
      heading: "Artificial Intelligence",
      icon: <FaRobot />,
      slug: "artificial-intelligence",
    },
    {
      id: 6,
      image: "/LandingPage/Services/UI&UX.webp",
      heading: "UI/UX Designing",
      icon: <FaPaintBrush />,
      slug: "ui-ux-design",
    },
  ];

  const lastCard = {
    id: 7,
    image: "/LandingPage/Services/SEO&Digitalmarketing.webp",
    heading: "SEO & Digital Marketing",
    icon: <FaBullhorn />,
    slug: "seo-digital-marketing",
  };

  // Animations
  const imageVariants = {
    rest: { scale: 1, filter: "blur(0px)" },
    hover: { scale: 1.5, filter: "blur(10px)" },
  };

  const overlayVariants = {
    rest: { opacity: 0, y: 60 },
    hover: { opacity: 1, y: 0 },
  };

  const textVariants = {
    rest: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -40 },
  };

  return (
    <section className="mx-auto py-12 px-5 2xl:max-w-7xl">
      {/* Header */}
      <div className="md:text-center text-start mb-8">
        <h4 className="text-[#007BFF] inline-block border border-[#00000030] px-6 py-1 text-sm font-light rounded-full tracking-[0.5em]">
          OUR BEST
        </h4>
        <h2 className="md:text-6xl text-3xl my-2 font-semibold mt-4">
          Features SERVICES
        </h2>
        <p className="mt-3 text-gray-600 md:max-w-3xl mx-auto">
          Mehdi Technologies provides end-to-end digital solutions from dynamic
          web and mobile app development to advanced AI, blockchain, and digital
          marketing services.
        </p>
      </div>

      {/* FIRST 6 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((item) => (
          <motion.div
            key={item.id}
            className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
            onClick={() => router.push(`/${item.slug}`)}
          >
            {/* Image */}
            <motion.div
              className="absolute inset-0"
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

            {/* Title (OUT) */}
            <motion.div
              className="absolute bottom-6 left-0 right-0 text-center"
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-2xl font-semibold">
                {item.heading}
              </p>
            </motion.div>

            {/* Hover Overlay (IN) */}
            <motion.div
              variants={overlayVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white"
            >
              <div className="flex flex-col items-center justify-center px-10 py-4 rounded-xl  w-full h-full">
                <div className="text-5xl mb-2 text-[#007BFF]">{item.icon}</div>
                <p className="text-5xl font-semibold text-center">
                  {item.heading}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* LAST ROW: Card + Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Last Card */}
        <motion.div
          className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-2xl cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
          onClick={() => router.push(`/${lastCard.slug}`)}
        >
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={lastCard.image}
              alt={lastCard.heading}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

          <motion.div
            className="absolute bottom-6 left-0 right-0 text-center"
            variants={textVariants}
          >
            <p className="text-white text-2xl font-semibold">
              {lastCard.heading}
            </p>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
            variants={overlayVariants}
          >
            <div className="flex flex-col items-center justify-center px-10 py-4 rounded-xl  w-full h-full">
              <div className="text-5xl mb-2 text-[#007BFF]">
                {lastCard.icon}
              </div>
              <p className="text-5xl font-semibold text-center">
                {lastCard.heading}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner */}
        <div className="md:col-span-2 bg-linear-to-l from-[#58C9EC] to-[#003C7D] p-8 rounded-3xl h-72 sm:h-80 md:h-96">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Let’s Start Your Project
          </h2>
          <div className=" flex flex-col md:flex-row justify-between items-center">
            <div className="space-y-4 pt-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <a
                  href="tel:+923123109218"
                  className="text-white text-base sm:text-lg hover:text-cyan-300 hover:underline transition-colors"
                >
                  (+92) 312 310 92 18
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a
                  href="mailto:contact@mehditechnologies.com"
                  className="text-white text-base sm:text-lg hover:text-cyan-300 hover:underline transition-colors"
                >
                  contact@mehditechnologies.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <a
                  href="https://www.google.com/maps/place/Mehdi+Technologies+(PVT.)+LTD./@33.6684678,72.9968936,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-base sm:text-lg hover:text-cyan-300 hover:underline transition-colors"
                >
                  Office #09, 2nd Floor, Silver City Plaza, G-11 Markaz,
                  Islamabad
                </a>
              </div>
            </div>

            <div className="relative w-52 h-52 md:w-64 md:h-64 mt-5 md:mt-0">
              <Image
                src="/bannerRightSide.png"
                alt="Banner Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-evenly">
            <button className="px-10 py-2 rounded-full text-2xl text-[#007BFF] bg-white shadow-lg">
              <FaPhoneAlt className="inline w-5 h-5 mb-0.5 mr-3" />
              Book a Call
            </button>

            <button className="px-10 py-2 rounded-full border text-2xl text-[#007BFF] bg-white">
              <IoMail className="inline w-6 h-6 mb-0.5 mr-3" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

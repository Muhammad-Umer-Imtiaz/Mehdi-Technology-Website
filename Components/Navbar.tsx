"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/services" },
  { name: "Testimonial", href: "/#testimonial" },
  { name: "Blogs", href: "/#blogs" },
  { name: "FAQs", href: "/#faqs" },
  { name: "About Us", href: "/about-us" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="h-16 sm:h-20 flex items-center justify-between bg-[#000000] rounded-full text-white shadow-md px-4 sm:px-6 lg:px-5 my-4 sm:my-4 fixed z-50 w-[95%] sm:w-[90%] lg:w-[97%] left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-opacity-95 border-2 border-[#FFFFFF]/50">
      {/* Logo */}
      <div
        className="cursor-pointer flex items-center"
        onClick={() => router.push("/")}
      >
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={45}
          className="w-16 h-auto sm:w-20 lg:w-[120px]"
          priority
        />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex gap-20 text-lg font-medium">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              href={link.href}
              className="cursor-pointer transition-colors duration-300"
            >
              {link.name}
            </Link>
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full rounded-full"></span>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <Link
        href="/contact-us"
        className="hidden lg:block bg-white text-[#000000] font-semibold px-6 py-2 rounded-full shadow-lg shadow-black/50 hover:shadow-black/90 hover:bg-gray-100 transition-all text-xl"
      >
        Contact us
        <BsFillTelephoneFill className="inline w-4 h-4 ml-2 mb-0.5" />
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white  z-50"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 100,
              y: -50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: 100,
              y: -50,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
            className="lg:hidden fixed top-16 sm:top-24 right-2 w-[95%] sm:w-[400px] bg-[#00D1FF] backdrop-blur-md bg-opacity-95 rounded-3xl shadow-2xl z-40 py-8 px-6 border border-white/20"
          >
            <ul className="flex flex-col gap-3 text-white">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-5 rounded-xl hover:bg-white/20 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Contact Button */}
            <Link href="/contact-us">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 w-full bg-white text-[#000000] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 inline-flex"
              >
                Contact us
                <BsFillTelephoneFill className="w-5 h-5" />
              </motion.a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

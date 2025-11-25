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
  { name: "Blogs", href: "/blogs" },
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

      {/* Mobile Menu styled like the image */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key={mobileMenuOpen ? "open" : "closed"}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-16 left-1/2 transform -translate-x-1/2 w-full sm:w-[420px] bg-[#000000] text-white rounded-2xl shadow-2xl z-40 py-4 px-4"
            style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}
          >
            {/* Menu Items */}
            <ul className="mt-3 flex flex-col">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="border-b rounded-2xl"
                  style={{ borderColor: "#58C9EC" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-center py-4 px-4 text-lg font-medium rounded-2xl"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BsFillTelephoneFill } from "react-icons/bs";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#service" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Blogs", href: "#faqs" },
  { name: "FAQs", href: "#about" },
  { name: "About Us", href: "#about" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="h-16 sm:h-20 flex items-center justify-between bg-[#000000] rounded-full text-white shadow-md px-4 sm:px-6 lg:px-5 my-4 sm:my-4 fixed z-50 w-[95%] sm:w-[90%] lg:w-[97%] left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-opacity-95">
      {/* Logo */}
      <div
        className="cursor-pointer flex items-center"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={45}
          className=" w-16 h-auto sm:w-20 lg:w-[120px]"
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

            {/* UNDERLINE EFFECT */}
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-200 group-hover:w-full rounded-full"></span>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <button
        //   onClick={() => router.push("/login")}
        className="hidden lg:block bg-white text-[#000000] font-semibold px-6 py-2 rounded-full shadow-lg shadow-black/50 hover:shadow-black/90 hover:bg-gray-100 transition-all text-xl"
      >
        Contact us
        <BsFillTelephoneFill className="inline w-4 h-4 ml-2 mb-0.5" />
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 sm:top-28 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] bg-[#8D27FF] backdrop-blur-md bg-opacity-95 rounded-3xl shadow-xl z-10 py-6 px-6">
          <ul className="flex flex-col gap-4 text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-4 rounded-xl hover:bg-white/10 transition-colors duration-300 text-lg font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              //   router.push("/login");
              setMobileMenuOpen(false);
            }}
            className="w-full mt-6 bg-white text-[#00000] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

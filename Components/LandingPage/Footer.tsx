"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white  pt-16 pb-4 px-6 lg:px-28 w-full">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="border-y-2 border-[#58C9EC] rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 mx-10">
            <img src="/Footer/Clutch.png" alt="Clutch" className="h-12" />
            <img src="/Footer/GoodFirms.png" alt="GoodFirms" className="h-12" />
            <img src="/Footer/google.png" alt="Google" className="h-12" />
            <img src="/Footer/UpWork.png" alt="Upwork" className="h-12" />
          </div>
          <p className="text-center  text-[#ffffff]/70 text-sm md:text-lg mt-6 tracking-[0.1em]">
            4.7 star rating by 200+ Mehdi Technologies Clients on over 350+
            Projects
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid-cols-2 grid">
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:gap-12 xl:gap-0  py-2">
          {/* Company Info */}
          <div>
            <div className="flex items-baseline gap-2 mb-6">
              {" "}
              <img src="/Logo.png" alt="Upwork" className="h-8" />{" "}
              <span className="text-xl font-semibold">Technologies</span>{" "}
            </div>

            <h3 className="text-2xl font-semibold mb-3">For Jobs</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&to=hr@mehditechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  text-[#ffffff] hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2 " />
              <span className="inline text-sm">hr@mehditechnologies.com</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 mt-6  text-[#ffffff]/70">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-[#ffffff]/70">
              {/* Phone */}
              <li className="flex gap-3 items-start hover:text-cyan-400 transition-colors">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+923123109218" className="hover:underline">
                  (+92) 312 310 92 18
                </a>
              </li>
              <li className="flex gap-3 items-start hover:text-cyan-400 transition-colors">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=contact@mehditechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  contact@mehditechnologies.com
                </a>
              </li>

              {/* Address */}
              <li className="flex gap-3 items-start hover:text-cyan-400 transition-colors">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Mehdi+Technologies+(PVT.)+LTD./@33.6684678,72.9968936,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Office #09, 2nd Floor, Silver City Plaza, G-11 Markaz,
                  Islamabad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-8 gap-0 py-2 2xl:ml-10 ml-7">
          {/* Our Services */}
          <div className="text-right ">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3  text-[#ffffff]/70">
              <li>
                <a
                  href="/webdevelopment"
                  className="hover:text-cyan-400  transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/block-chain"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Blockchain Web3.0 & NFT Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  AI Chatbot Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  UI/UX Designing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  SEO & Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="text-right">
            <h3 className="text-2xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-3  text-[#ffffff]/70">
              <li>
                <a
                  href="#testimonial"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="hover:text-cyan-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="text-right">
            <h3 className="text-2xl font-semibold mb-4">Industries</h3>
            <ul className="space-y-3  text-[#ffffff]/70">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Health Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Travel & Hospitality
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Transportation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Public Sector
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Banking & Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  AI Automation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="max-w-7xl mx-auto flex items-center gap-6 mb-8">
        <a
          href="#"
          className=" text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="#"
          className=" text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="#"
          className=" text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7.535V16.5c0 1.378-1.122 2.5-2.5 2.5h-15C3.122 19 2 17.878 2 16.5V7.535l9.223 5.229a1.25 1.25 0 001.554 0L22 7.535zM4.5 5h15c1.378 0 2.5 1.122 2.5 2.5v.03l-10 5.666L2 7.53V7.5C2 6.122 3.122 5 4.5 5z" />
          </svg>
        </a>
        <a
          href="#"
          className=" text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* Bottom Copyright */}
      <div className="pt-4 border-t-2 border-[#58C9EC] rounded-2xl">
        <p className="text-center  text-[#ffffff]/70 text-sm">
          © 2025, Made with passion by Mehdi Technologies Pvt Ldt..
        </p>
      </div>
    </footer>
  );
}

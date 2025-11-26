"use client";
import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { BiBriefcase } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaBehance, FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white  pt-16 pb-4 px-5 lg:px-28 w-full">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="border-y-2 border-[#58C9EC] rounded-2xl md:p-6 p-2 py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 mx-10">
            <Image
              src="/Footer/Clutch.png"
              alt="Clutch"
              width={220}
              height={30}
              loading="lazy"
            />
            <Image
              src="/Footer/GoodFirms.png"
              alt="GoodFirms"
              width={300}
              height={30}
              loading="lazy"
            />
            <Image
              src="/Footer/google.png"
              alt="Google"
              width={220}
              height={30}
              loading="lazy"
            />
            <Image
              src="/Footer/UpWork.png"
              alt="Upwork"
              width={220}
              height={30}
              loading="lazy"
            />
          </div>
          <p className="text-center  text-[#ffffff]/70 text-xs md:text-lg mt-6 md:tracking-[0.1em]">
            4.7 star rating by 200+ Mehdi Technologies Clients on over 350+
            Projects
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto md:grid-cols-2 grid-cols-1 grid">
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

            <h3 className="text-2xl font-semibold mb-3 mt-2">For Queries</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&to=info@mehditechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  text-[#ffffff] hover:text-cyan-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2 " />
              <span className="inline text-sm">info@mehditechnologies.com</span>
            </a>

            <h3 className="text-2xl font-semibold mb-3 mt-2">For Buisness </h3>

            <a
              href="https://mail.google.com/mail/?view=cm&to=buisness@mehditechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  text-[#ffffff] hover:text-cyan-400 transition-colors"
            >
              <BiBriefcase className="w-5 h-5 mr-2 " />
              <span className="inline text-sm">
                buisness@mehditechnologies.com
              </span>
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
                  href="https://www.google.com/maps/place/Mehdi+Technologies+(PVT.)+LTD./@33.6684486,72.9942926,17z/data=!4m6!3m5!1s0x38df950053c1b88b:0xc45aaba0ad6bb35a!8m2!3d33.6684442!4d72.9968675!16s%2Fg%2F11wc5qtj5v?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Office #09, 2nd Floor, Silver City Plaza, G-11 Markaz,
                  Islamabad
                </a>
              </li>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3320.5643415356963!2d72.9942926!3d33.6684486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df950053c1b88b%3A0xc45aaba0ad6bb35a!2sMehdi%20Technologies%20(PVT.)%20LTD.!5e0!3m2!1sen!2s!4v1763796256661!5m2!1sen!2s"
                width="400"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen=""
              ></iframe> */}
            </ul>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-3 text-[#ffffff]/70">
                <li>
                  <Link
                    href="/career"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <a
                    href="/case-study"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Case Study
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:gap-8 gap-0 py-2 2xl:ml-10 md:ml-7">
          {/* Our Services */}
          <div className="md:text-right ">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 grid md:inline grid-cols-2  text-[#ffffff]/70">
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
                  href="/mobile-app-development"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="/telegram-mini-apps"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Telegram Mini Apps Development
                </a>
              </li>
              <li>
                <a
                  href="/artificial-intelligence"
                  className="hover:text-cyan-400 transition-colors"
                >
                  AI Chatbot Development
                </a>
              </li>
              <li>
                <a
                  href="/ui-ux-design"
                  className="hover:text-cyan-400 transition-colors"
                >
                  UI/UX Designing
                </a>
              </li>

              <li>
                <a
                  href="/seo-digital-marketing"
                  className="hover:text-cyan-400 transition-colors"
                >
                  SEO & Digital Marketing
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
            </ul>
          </div>

          {/* Explore */}
          {/* <div className="md:text-right">
            <h3 className="text-2xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-3  grid md:inline grid-cols-2 text-[#ffffff]/70">
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
          </div> */}

          {/* Industries */}
          <div className="md:text-right">
            <h3 className="text-2xl font-semibold mb-4">Industries</h3>
            <ul className="space-y-3 grid md:inline grid-cols-2  text-[#ffffff]/70">
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
          href="https://www.instagram.com/mehdi_technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/mehdi-technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://www.behance.net/mehdi_technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <FaBehance className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/MehdiTechnologies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffffff]/70 hover:text-cyan-400 transition-colors"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-4 border-t-2 border-[#58C9EC] rounded-2xl">
        <p className="text-center  text-[#ffffff]/70 md:text-sm text-xs">
          © 2025, Made with passion by Mehdi Technologies Pvt Ldt
        </p>
      </div>
    </footer>
  );
}

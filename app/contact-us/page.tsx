"use client";
import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import NewsLetter from "@/Components/LandingPage/NewsLetter";

const countries = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+92", country: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+880", country: "BD", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", country: "LK", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+977", country: "NP", flag: "🇳🇵", name: "Nepal" },
  { code: "+93", country: "AF", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+98", country: "IR", flag: "🇮🇷", name: "Iran" },
  { code: "+964", country: "IQ", flag: "🇮🇶", name: "Iraq" },
  { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
  { code: "+962", country: "JO", flag: "🇯🇴", name: "Jordan" },
  { code: "+965", country: "KW", flag: "🇰🇼", name: "Kuwait" },
  { code: "+961", country: "LB", flag: "🇱🇧", name: "Lebanon" },
  { code: "+968", country: "OM", flag: "🇴🇲", name: "Oman" },
  { code: "+974", country: "QA", flag: "🇶🇦", name: "Qatar" },
  { code: "+963", country: "SY", flag: "🇸🇾", name: "Syria" },
  { code: "+967", country: "YE", flag: "🇾🇪", name: "Yemen" },
  { code: "+213", country: "DZ", flag: "🇩🇿", name: "Algeria" },
  { code: "+212", country: "MA", flag: "🇲🇦", name: "Morocco" },
  { code: "+216", country: "TN", flag: "🇹🇳", name: "Tunisia" },
  { code: "+218", country: "LY", flag: "🇱🇾", name: "Libya" },
  { code: "+249", country: "SD", flag: "🇸🇩", name: "Sudan" },
  { code: "+254", country: "KE", flag: "🇰🇪", name: "Kenya" },
  { code: "+255", country: "TZ", flag: "🇹🇿", name: "Tanzania" },
  { code: "+256", country: "UG", flag: "🇺🇬", name: "Uganda" },
  { code: "+233", country: "GH", flag: "🇬🇭", name: "Ghana" },
  { code: "+251", country: "ET", flag: "🇪🇹", name: "Ethiopia" },
];
export default function ContactUS() {
  const [selectedCountry, setSelectedCountry] = useState(countries[3]); // default Pakistan
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  // Close dropdown on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDropdown(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile dropdown open
  useEffect(() => {
    if (showDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showDropdown]);
  return (
    <div>
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/BackgroundPictures/ContactPageBG.jpg')",
        }}
      >
        <h1 className="absolute md:top-38 top-30 text-3xl md:text-6xl font-semibold mb-4 drop-shadow-lg text-white   ">
          Contact <span className="text-blue-400">Us</span>
        </h1>
        {/* Contact US Section */}
        <section
          className="absolute md:top-76 top-52 py-12 z-10 lg:py-16 w-full bg-cover bg-center bg-no-repeat max-w-6xl rounded-4xl border-2 border-white  mx-auto"
          style={{ backgroundImage: "url('/ContactBG.png')" }}
        >
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/30 z-0" /> */}

          <div className="relative z-10  px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Side - Contact Info (moves above on mobile) */}
              <div className="text-white space-y-6 order-1 lg:order-0">
                <h2 className="md:block hidden text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
                  Get In <span className="text-blue-400">Touch</span> with Us,
                  <br />
                  We <span className="text-blue-400">Answer</span> You
                </h2>

                <p className=" md:block hidden text-white/90 text-base sm:text-lg max-w-lg drop-shadow-md">
                  Let's bring your vision to life. Connect with our experts
                  today to discuss your next project.
                </p>

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
                      href="https://mail.google.com/mail/?view=cm&to=contact@mehditechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer"
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
              </div>

              {/* Right Side - Contact Form */}
              <div className="relative backdrop-blur-md rounded-2xl md:py-6 sm:p-8 lg:p-10 shadow-xl order-0 lg:order-1">
                <h2 className="md:hidden block text-4xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Get In <span className="text-blue-400">Touch</span> with Us,
                  <br />
                  We <span className="text-blue-400">Answer</span> You
                </h2>

                <p className=" md:hidden block text-white/90 text-base sm:text-lg max-w-lg drop-shadow-md mb-4">
                  Let's bring your vision to life. Connect with our experts
                  today to discuss your next project.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Name & Address */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Phone with Country Code */}
                  <div className="flex gap-3 flex-col sm:flex-row">
                    <div
                      className="relative w-full sm:w-[170px]"
                      ref={dropdownRef}
                    >
                      <button
                        type="button"
                        onClick={() => setShowDropdown((s) => !s)}
                        aria-haspopup="listbox"
                        aria-expanded={showDropdown}
                        className="w-full h-full px-3 py-3 rounded-xl bg-white text-gray-800 flex items-center gap-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="font-medium">
                          {selectedCountry.code}
                        </span>
                        <ChevronDown className="w-4 h-4 ml-auto text-gray-600" />
                      </button>

                      {/* Dropdown */}
                      {showDropdown && (
                        <>
                          {/* For larger screens: small popup. For small screens: full-screen panel */}
                          <div
                            className="hidden sm:block absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden"
                            role="dialog"
                            aria-modal="true"
                          >
                            <div className="p-3 border-b sticky top-0 bg-white z-10">
                              <input
                                type="text"
                                placeholder="Search country..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              />
                            </div>
                            <div className="overflow-y-auto max-h-[360px]">
                              {filteredCountries.map((country) => (
                                <button
                                  key={country.country}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setShowDropdown(false);
                                    setSearchQuery("");
                                  }}
                                  className="w-full px-4 py-3 hover:bg-blue-50 flex items-center gap-3 text-left transition-colors"
                                >
                                  <span className="text-2xl">
                                    {country.flag}
                                  </span>
                                  <span className="font-medium text-gray-700 min-w-[60px]">
                                    {country.code}
                                  </span>
                                  <span className="text-gray-600">
                                    {country.name}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Mobile full-screen picker */}
                          <div
                            className="sm:hidden fixed inset-0 z-50 bg-black/60 flex items-end"
                            role="dialog"
                            aria-modal="true"
                          >
                            <div className="w-full max-h-[85vh] bg-white rounded-t-2xl p-4 overflow-hidden">
                              <div className="flex items-center gap-3 mb-3">
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={searchQuery}
                                  onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                  }
                                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setShowDropdown(false);
                                    setSearchQuery("");
                                  }}
                                  className="px-3 py-2 text-sm bg-gray-100 rounded-lg"
                                >
                                  Close
                                </button>
                              </div>

                              <div
                                className="overflow-y-auto"
                                style={{ maxHeight: "70vh" }}
                              >
                                {filteredCountries.map((country) => (
                                  <button
                                    key={country.country}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setShowDropdown(false);
                                      setSearchQuery("");
                                    }}
                                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-left transition-colors"
                                  >
                                    <span className="text-2xl">
                                      {country.flag}
                                    </span>
                                    <span className="font-medium text-gray-700 min-w-[60px]">
                                      {country.code}
                                    </span>
                                    <span className="text-gray-600">
                                      {country.name}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <input
                      type="tel"
                      placeholder="Your Contact Number"
                      className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  {/* Business Name/Website */}
                  <input
                    type="text"
                    placeholder="Business Name / Website"
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Service Selector */}
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none cursor-pointer">
                      <option value="">Select Service you want</option>
                      <option value="web-dev">Web Development</option>
                      <option value="mobile-dev">Mobile Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="consulting">Consulting</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Type Your Message Here..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  ></textarea>

                  {/* Terms & Submit */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                      />
                      <span className="text-white md:text-sm text-xs">
                        I agree with{" "}
                        <a
                          href="#"
                          className="text-blue-400 hover:underline font-medium"
                        >
                          Terms of Use
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-blue-400 hover:underline font-medium"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-400 text-white rounded-xl font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all text-base"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Click outside to close dropdown (keeps existing behavior) */}
          {showDropdown && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                setShowDropdown(false);
                setSearchQuery("");
              }}
            />
          )}
        </section>
      </section>
      <div className="md:h-96 h-[700px] w-full bg-white"></div>
      {/* <NewsLetter /> */}
    </div>
  );
}

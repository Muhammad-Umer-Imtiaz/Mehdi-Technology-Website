"use client";
import React, { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";

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

export default function ContactUs() {
  const [selectedCountry, setSelectedCountry] = useState(countries[3]); // Default to Pakistan
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  return (
    <section
      className="relative min-h-screen py-16 px-6 lg:px-28 w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/ContactBG.png')" }}
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-white space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Get In <span className="text-blue-500">Touch</span>
            <br />
            with Us,
            <br />
            We <span className="text-blue-500">Answer</span>
            <br />
            You
          </h2>

          <p className="text-white text-lg max-w-md">
            Let's bring your vision to life. Connect with our experts today to
            discuss your next project.
          </p>

          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-4">
              <div className="bg-white backdrop-blur-sm p-2 rounded-lg">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-gray-200 text-lg">(+92) 312 310 92 18</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white backdrop-blur-sm p-2 rounded-lg">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-gray-200 text-lg">
                contact@mehditechnologies.com
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white backdrop-blur-sm p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-gray-200 text-lg">
                <div>Office no 9, 2nd Floor, Silver City Plaza,</div>
                <div>G-11 Markaz. Islamabad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full">
          <form className="space-y-4">
            {/* Name and Address Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Your Address"
                className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Phone Number with Country Code Selector */}
            <div className="flex gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="h-full px-4 rounded-xl bg-white text-gray-800 flex items-center gap-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[120px]"
                >
                  <span className="text-2xl">{selectedCountry.flag}</span>
                  <span className="font-medium">{selectedCountry.code}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden flex flex-col">
                    <div className="p-3 border-b sticky top-0 bg-white">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="overflow-y-auto">
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
                          <span className="text-2xl">{country.flag}</span>
                          <span className="font-medium text-gray-700 min-w-[60px]">
                            {country.code}
                          </span>
                          <span className="text-gray-600">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <input
                type="tel"
                placeholder="Your Contact Number"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Business Name/Website */}
            <input
              type="text"
              placeholder="Business Name / Website"
              className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Service Selector */}
            <div className="relative">
              <select className="w-full px-6 py-4 rounded-xl bg-white text-gray-600 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                <option value="">Select Service you want</option>
                <option value="web-dev">Web Development</option>
                <option value="mobile-dev">Mobile Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="consulting">Consulting</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>

            {/* Message */}
            <textarea
              placeholder="Type Your Message Here..."
              rows={5}
              className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            {/* Terms and Submit */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-white text-sm">
                  I agree with{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-all text-base"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </section>
  );
}

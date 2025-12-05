"use client";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Achievement() {
  const data = [
    { id: 1, number: 200, heading: "Unique Clients" },
    { id: 2, number: 350, heading: "Completed Projects" },
    { id: 3, number: 10, heading: "Years" },
    { id: 4, number: 14, heading: "Countries" },
  ];

  return (
    <section
      className="relative min-h-screen py-16 w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/BackgroundPictures/LandingPageBG/AchievementBG.webp')",
      }}
    >
      {/* Content wrapper for max-width and spacing */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="max-w-2xl space-y-6">
          <h2 className="text-[#007BFF] bg-white border border-[#00000030] py-1 px-3 text-base inline-block font-light rounded-full tracking-[0.5em]">
            PROVEN SUCCESS
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold">Our Achievements</h2>

          <div className="grid grid-cols-2 gap-8 py-6">
            {data.map((item) => (
              <div key={item.id}>
                <h3 className="md:text-5xl text-3xl font-extrabold text-[#00D1FF]">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>
                <p className="text-lg font-medium mt-1">{item.heading}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-200 2xl:text-lg leading-relaxed">
            At <span className="text-[#00D1FF]">Mehdi Technologies,</span> our achievements reflect innovation, reliability, and excellence. We take pride in empowering businesses worldwide with cutting-edge digital solutions that inspire growth and lasting impact.
          </p>
        </div>

        {/* Right Image + Buttons */}
        <div className="mt-10 lg:mt-0 flex flex-col items-center">
          <Image
            src="/LandingPage/AchivementRightSection.webp"
            alt="Achievement Right Section"
            width={550}
            height={500}
            className="hidden lg:block"
          />
          <div className="flex flex-row items-center justify-center md:mt-6">

            <Link
  href="https://calendly.com/arslan-mumtaz04/new-meeting?month=2025-12"
  target="_blank"
  className="block w-fit mx-auto"
>
  <button
    className="
      bg-linear-to-r from-[#007BFF] to-[#58C9EC]
      rounded-lg md:text-xl text-white font-semibold md:px-6 px-3 py-3
      transition-all duration-500 ease-in-out
      shadow-[0_0_7px_0_rgba(255,255,255,0.8)]
      
      hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.9)]
      hover:from-white hover:to-white hover:text-[#007BFF]
      
      active:scale-95 active:shadow-[0_0_5px_0_rgba(0,0,0,0.6)]
    "
  >
    <FaPhoneAlt
      className="inline w-5 h-5 mr-3 transition-colors duration-500 ease-in-out"
    />
    Book a Call
  </button>
</Link>

           
           <Link href="/contact-us" className="block w-fit">
  <button
    className="
      bg-white md:px-6 px-3 py-3 md:text-xl ml-6
      text-[#007BFF] font-semibold rounded-lg
      shadow-[0_0_8px_0_rgba(255,255,255,0.8)]
      transition-all duration-500 ease-in-out

      hover:bg-linear-to-r hover:from-[#007BFF] hover:to-[#58C9EC]
      hover:text-white hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.9)]

      active:scale-95 active:shadow-[0_0_5px_0_rgba(0,0,0,0.6)]
    "
  >
    <IoMail className="inline w-6 h-6 mb-0.5 mr-3 transition-colors duration-500 ease-in-out" />
    Contact Us
  </button>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
}

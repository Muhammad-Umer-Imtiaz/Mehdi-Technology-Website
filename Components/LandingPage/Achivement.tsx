"use client";
import Image from "next/image";
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
      className="relative min-h-screen py-16 px-10 lg:px-28 w-full bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-between text-white"
      style={{ backgroundImage: "url('/Achievement.png')" }}
    >
      {/* Left Text Section */}
      <div className="max-w-2xl space-y-6">
        <h4 className="text-[#007BFF] bg-white border border-[#00000030] px-6 py-1 text-sm inline-block font-light rounded-full tracking-[0.5em]">
          PROVEN SUCCESS
        </h4>
        <h2 className="text-5xl font-bold">Achievement</h2>

        <div className="grid grid-cols-2 gap-8 py-6">
          {data.map((item) => (
            <div key={item.id} className="">
              <h3 className="text-5xl font-extrabold text-[#00D1FF]">
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

        <p className="text-gray-200 leading-relaxed">
          At <span className="text-[#00D1FF]">Mehdi Technologies,</span> our
          achievements reflect innovation, reliability, and excellence. We take
          pride in empowering businesses worldwide with cutting-edge digital
          solutions that inspire growth and lasting impact.
        </p>
      </div>

      {/* Right Image */}
      <div>
        <Image
          src="/AchivementRightSection.png"
          alt="Achievement Right Section"
          width={550}
          height={500}
          className="hidden lg:block"
        />
        <div className="flex flex-row items-center justify-center">
          <button className="bg-gradient-to-r from-[#007BFF] to-[#58C9EC] rounded-lg text-xl text-white font-semibold px-6 py-3  hover:opacity-90 transition-all duration-300 shadow-[0_0_7px_0_rgba(255,255,255,0.8)]">
            <FaPhoneAlt className="text-white inline w-5 h-5 mb-0.5 mr-3" />
            Book a Call
          </button>
          <button className="bg-white px-6 py-3 text-xl ml-6 text-[#007BFF] rounded-lg shadow-[0_0_8px_0_rgba(255,255,255,0.8)]">
            <IoMail className="text-black inline  w-6 h-6 mb-0.5 mr-3 font-semibold  transition-all duration-300" />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

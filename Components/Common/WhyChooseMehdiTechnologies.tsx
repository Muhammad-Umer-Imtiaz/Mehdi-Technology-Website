import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
type WhyChooseProps = {
  data: string[];
};
export default function WhyChooseMehdiTechnologies({data}:WhyChooseProps) {
  return (
    <section
      className="relative py-12 lg:py-16 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/BackgroundPictures/BGWhyChoose.webp')",
      }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold leading-tight mx-auto text-white text-center">
            Why <span className="text-[#007BFF] ">Choose</span>
            <br className="hidden md:block" /> Mehdi Technologies?
          </h2>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT IMAGE */}
         <div className="w-full lg:w-1/2 text-white">
          

        <div className="mt-4 text-md leading-relaxed  p-4 rounded-md md:space-y-3 space-y-6">
      {data.map((text, index) => (
        <p key={index} className="text-gray-300 border-r border-l  border-b border-white rounded-tr-3xl md:px-6 px-3 py-1.5 text-sm md:text-lg">
          {text}
        </p>
      ))}
    </div>
        </div>
        <div className="w-full lg:w-1/2 md:flex hidden justify-center">
          <Image
            src="/WhyChooseRight.webp"
            alt="Why Choose Illustration"
            width={500}
            height={400}
            className=" h-auto object-contain"
          />
        </div>

   
       
      </div>
      <div className="flex justify-center items-center gap-6 mt-6">

  <Link
    href="https://calendly.com/arslan-mumtaz04/new-meeting?month=2025-12"
    target="_blank"
    className="inline-flex"
  >
    <button
      className="
        bg-linear-to-r from-[#007BFF] to-[#58C9EC]
        rounded-lg md:text-xl text-white font-semibold
        md:px-6 px-3 py-3
        transition-all duration-500 ease-in-out
        shadow-[0_0_7px_0_rgba(255,255,255,0.8)]

        hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.9)]
        hover:from-white hover:to-white hover:text-[#007BFF]

        active:scale-95 active:shadow-[0_0_5px_0_rgba(0,0,0,0.6)]
      "
    >
      <FaPhoneAlt className="inline w-5 h-5 mr-3 transition-colors duration-500 ease-in-out" />
      Book a Call
    </button>
  </Link>

  <Link href="/contact-us" className="inline-flex">
    <button
      className="
        bg-white md:px-6 px-3 py-3 md:text-xl
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

    </section>
  );
}

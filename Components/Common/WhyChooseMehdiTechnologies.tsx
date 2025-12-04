import Image from "next/image";
type WhyChooseProps = {
  data: string[];
};
export default function WhyChooseMehdiTechnologies({data}:WhyChooseProps) {
  return (
    <section
      className="relative py-12 lg:py-16 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/BackgroundPictures/LandingPageBG/ContactBG.webp')",
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

        {/* RIGHT CONTENT */}
       
      </div>
    </section>
  );
}

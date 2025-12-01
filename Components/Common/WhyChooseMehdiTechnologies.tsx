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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/WhyChoose.webp"
            alt="Why Choose Illustration"
            width={500}
            height={400}
            className=" h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Why <span className="text-[#007BFF] ">Choose</span>
            <br className="hidden md:block" /> Mehdi Technologies?
          </h2>

        <div className="mt-4 text-md leading-relaxed  p-4 rounded-md space-y-3">
      {data.map((text, index) => (
        <p key={index} className="text-gray-300">
          {text}
        </p>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
}

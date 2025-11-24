import Image from "next/image";

export default function WhyChoose() {
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

          <p className="mt-4 text-md leading-relaxed bg-black/40 p-4 rounded-md">
            At Mehdi Technologies, we believe in fostering a culture of
            innovation, collaboration, and continuous growth. Our team is driven
            by passion and dedication, working together to create impactful
            solutions for our clients. By joining us, you become part of a
            dynamic environment where your skills are valued, your ideas are
            heard, and your professional development is supported. We offer
            opportunities to work on exciting projects, learn from industry
            experts, and contribute to a company that values creativity,
            integrity, and excellence in every endeavor. Come be a part of Mehdi
            Technologies and help us shape the future of technology.
          </p>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/WebDevelopment/WebsiteDevelopmentBG.png')",
      }}
    >
      {/* Overlay for darkening background */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 mt-36 ">
        <div className="bg-white/10 backdrop-blur-md text-[#ffffff]/70 px-6 py-2 md:text-base inline-flex items-center gap-2 font-light rounded-full mb-4 tracking-wide shadow-sm border-2 border-white/50">
          <Link
            href="/"
            className="text-lg font-extralight transition-all duration-300 ease-in-out hover:text-[#58C9EC] hover:font-bold"
          >
            Home
          </Link>
          <span className="text-white">•</span>
          <Link
            href="/#service"
            className="text-lg font-extralight transition-all duration-300 ease-in-out hover:hover:text-white hover:font-bold"
          >
            Services
          </Link>
          <span className="text-white">•</span>
          <span className="text-white text-lg font-semibold">
            Website Development
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl font-semibold mb-4 drop-shadow-lg text-white ">
          Website Development
        </h1>

        <p className="text-center text-2xl text-white leading-relaxed font-light">
          We craft high-performing, visually stunning websites using modern
          frameworks and <br /> secure architectures. From corporate workflows
          to e-commerce web apps, our development process ensures <br /> speed,
          scalability, and flawless user experience.
        </p>
      </div>
    </section>
  );
}

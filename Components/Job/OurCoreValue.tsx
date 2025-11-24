import { MdWork } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";

const coreValues = [
  {
    title: "Trust over process",
    desc: "Trust is our most fundamental core value. We trust our people to do their best for the organization without strict monitoring processes. Similarly, we expect that you will trust the organization to help you become successful.",
    icon: <MdWork size={28} color="white" />,
  },
  {
    title: "Trust over process",
    desc: "Trust is our most fundamental core value. We trust our people to do their best for the organization without strict monitoring processes. Similarly, we expect that you will trust the organization to help you become successful.",
    icon: <FaRegHandshake size={28} color="white" />,
  },
  {
    title: "Trust over process",
    desc: "Trust is our most fundamental core value. We trust our people to do their best for the organization without strict monitoring processes. Similarly, we expect that you will trust the organization to help you become successful.",
    icon: <RiShieldCheckFill size={28} color="white" />,
  },
  {
    title: "Trust over process",
    desc: "Trust is our most fundamental core value. We trust our people to do their best for the organization without strict monitoring processes. Similarly, we expect that you will trust the organization to help you become successful.",
    icon: <MdWork size={28} color="white" />,
  },
  {
    title: "Trust over process",
    desc: "Trust is our most fundamental core value. We trust our people to do their best for the organization without strict monitoring processes. Similarly, we expect that you will trust the organization to help you become successful.",
    icon: <FaRegHandshake size={28} color="white" />,
  },
  {
    title: "Trust over process",
    desc: "Trust is our most fundamental core value. We trust our people to do their best for the organization without strict monitoring processes. Similarly, we expect that you will trust the organization to help you become successful.",
    icon: <RiShieldCheckFill size={28} color="white" />,
  },
];

export default function OurCoreValue() {
  return (
    <section className="2xl:max-w-7xl xl:max-w-5xl w-full mx-auto py-20 px-5">
      {/* Top Heading Section */}
      <div className="md:text-center mb-16">
        <h4 className="text-[#007BFF] bg-white inline-block border-2 border-gray-500 px-6 py-1.5 text-xl font-medium rounded-full tracking-[0.3em] mb-4">
          OUR CORE VALUES
        </h4>

        <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
          The Principles That Drive Us
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          Our core values guide everything we do at Mehdi Technologies.
          Integrity, innovation, collaboration, and excellence are the
          principles that shape our work, inspire our team, and help us deliver
          impactful solutions to our clients.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {coreValues.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 w-full max-w-sm text-center  border-[#007BFF] border-2 shadow-[0_0_10px_0_rgba(0,123,255,0.8)] hover:shadow-blue-300/40 transition-all"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

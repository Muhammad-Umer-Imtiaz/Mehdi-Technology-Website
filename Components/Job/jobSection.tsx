import { jobs } from "@/data/CommonData";
import { div } from "framer-motion/client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function JobSection() {
  return (
    <section className="2xl:max-w-7xl xl:max-w-5xl w-full mx-auto py-20 px-5">
      <div className="md:text-center mb-16">
        <h4 className="text-[#007BFF] bg-white inline-block border-2 border-gray-500 px-6 py-1.5 text-xl font-medium rounded-full tracking-[0.3em] mb-4">
          CURRENT OPENINGS
        </h4>
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Available Positions
        </h2>
        <p className="text-gray-600 text-base md:text-lg mx-auto">
          Check out our current job openings and find the role that fits your
          skills and passion. Apply today and become a part of our innovative
          and growing team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {jobs.map((items) => (
          <Link
            href={`/career/${items._id}`}
            key={items._id}
            className="border-[#007BFF] border-2 shadow-[0_0_20px_0_rgba(0,123,255,0.8)] p-7 rounded-2xl"
          >
            <h3 className="text-3xl font-bold text-[#007BFF]">{items.job}</h3>
            <p className="text-xs pt-2 pb-4 border-b-2">{items.date}</p>
            <div className="flex justify-between px-1 my-1">
              <span>{items.city}</span>
              <span>{items.status}</span>
            </div>
            <p className="line-clamp-2 text-sm">{items.description}</p>
            <span className=" font-bold hover:text-[#007BFF] active:text-[#007BFF] cursor-pointer  py-96">
              See Details
              <FaArrowRight className="inline ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

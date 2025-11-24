import { jobs } from "@/data/CommonData";
import { div } from "framer-motion/client";

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

      <div>
        {jobs.map((items) => (
          <div
            key={items.id}
            className="border-[#007BFF] border-2 shadow-[0_0_20px_0_rgba(0,123,255,0.8)]"
          >
            <h3>{items.job}</h3>
            <p className=" border-b pb-4">{items.date}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

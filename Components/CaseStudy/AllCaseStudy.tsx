import { projects } from "@/data/CommonData";
import CaseStudyCard from "./CaseStudyCard";

export default function AllCaseStudy() {
  return (
    <section className="2xl:max-w-7xl xl:max-w-5xl w-full mx-auto py-20 px-5">
      <div className="md:text-center mb-16">
        <h4 className="text-[#007BFF] bg-white inline-block border-2 border-gray-500 px-6 py-1.5 text-xl font-medium rounded-full tracking-[0.3em] mb-4">
          Solutions That Work
        </h4>
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Innovation That Drives Success
        </h2>
        <p className="text-gray-600 text-base md:text-lg mx-auto">
          Explore how Mehdi Technologies empowers global clients through smart,
          scalable digital solutions.
        </p>
      </div>

      {/* Inserted code */}
      <div className="grid grid-cols-1 gap-10">
        {projects.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative min-h-screen py-16 px-10 lg:px-28 w-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/Achievement.png')" }}
    >
      <div className="text-center mb-8">
        <h4 className="text-[#007BFF] bg-white inline-block border border-[#00000030] px-6 py-1 text-sm font-light rounded-full tracking-widest">
          OUR CLIENTS
        </h4>
        <h2 className="text-6xl my-2 font-semibold mt-4 text-white">
          Testimonial
        </h2>
        <p className="max-w-2xl mx-auto mt-3 font-extralight text-white">
          From innovative startups to established enterprises, hear how our
          clients describe their <br /> experiences and the value we’ve
          delivered together.
        </p>
      </div>
    </section>
  );
}

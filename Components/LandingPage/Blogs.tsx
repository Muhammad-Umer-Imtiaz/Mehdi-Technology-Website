export default function Blogs() {
  const blogData = [
    {
      id: 1,
      category: "AI Chatbots",
      title: "How Web3.0 Is Transforming the Internet",
      description:
        "Discover how decentralization, blockchain, and AI are shaping the next digital era.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      date: "September 10, 2025",
    },
    {
      id: 2,
      category: "AI Automation",
      title: "Why Your Business Needs a Custom App in 2025",
      description:
        "Explore how mobile apps increase engagement and brand value in today's competitive landscape.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      date: "September 10, 2025",
    },
    {
      id: 3,
      category: "Web Scraping & Data",
      title: "How Web Scraping Helps AI Systems Learn Faster",
      description:
        "Explain how businesses save time and improve response rates with chatbots.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      date: "September 10, 2025",
    },
  ];

  return (
    <section
      id="blogs"
      className="relative min-h-screen py-16 px-10 lg:px-28 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Achievement.png')" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h4 className="text-[#00A6FF] bg-white inline-block border border-gray-200 px-6 py-2 text-xs font-medium rounded-full tracking-[0.4em] uppercase shadow-sm mb-6">
          INSIGHTS & UPDATES
        </h4>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          From Our <span className="text-[#00A6FF]">Blog</span>
        </h2>

        <p className="text-white text-base md:text-lg font-light max-w-4xl mx-auto leading-relaxed">
          Stay informed with the latest trends, tips, and innovations in
          technology, AI, and
          <br className="hidden md:block" />
          automation — all from the experts at Mehdi Technologies
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-64 2xl:p-6 xl:p-4 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full  rounded-3xl   object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="2xl:p-6 xl:p-4">
              {/* Category and Date */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#00A6FF] text-sm font-semibold border border-[#00A6FF] px-4 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-gray-500 text-sm">{blog.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 2xl:mb-3 mb-2 leading-tight">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm 2xl:mb-6 xl:mb-3 leading-relaxed">
                {blog.description}
              </p>

              {/* Learn More Button */}
              <button className="bg-gradient-to-r from-[#58C9EC] to-[#007BFF] text-white px-10 py-3 border-2 border-white shadow-black shadow-md  rounded-full font-semibold text-sm hover:bg-[#0088cc] transition-all duration-300 flex items-center gap-2 group">
                Learn more
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All Blogs Button */}
      <div className="text-center">
        <button className="text-white text-lg font-semibold border-b-2 border-white pb-1 hover:text-[#00A6FF] hover:border-[#00A6FF] transition-all duration-300 inline-flex items-center gap-2 group">
          SEE ALL BLOGS
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

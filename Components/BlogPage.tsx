// app/blogs/page.tsx  (or wherever your blog listing is)
"use client";

import { useState } from "react";
import Link from "next/link";
import { blogData } from "@/data/BlogsData";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="py-20 px-4">
      <div className="relative z-10 2xl:max-w-7xl xl:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentBlogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.id} className="block">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="md:p-6 p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00A6FF] md:text-sm text-xs font-semibold border border-[#00A6FF] md:px-4 px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 md:text-sm text-xs">
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>

                <button className="bg-linear-to-r from-[#58C9EC] to-[#007BFF] text-white px-10 py-3 rounded-full font-semibold text-sm hover:bg-[#0088cc] transition-all duration-300 flex items-center gap-2 group">
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
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => paginate(num)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              num === currentPage
                ? "bg-[#007BFF] text-white border-[#007BFF]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#58C9EC] hover:text-white"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </main>
  );
}

// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { blogData } from "@/data/BlogsData";
import HeroSection from "@/Components/Common/HeroSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) notFound();

  // Get 6 related blogs (same category or random fallback)
  const relatedBlogs = blogData
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 6);

  if (relatedBlogs.length < 6) {
    const more = blogData
      .filter((b) => b.id !== blog.id && !relatedBlogs.includes(b))
      .slice(0, 6 - relatedBlogs.length);
    relatedBlogs.push(...more);
  }

  return (
    <>
      <HeroSection
        bgImage={blog.image}
        title={blog.title}
        description={blog.description}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blogs", href: "/blogs" },
          { name: blog.title },
        ]}
      />

      <section className="py-16 px-4">
        <div className="2xl:max-w-7xl xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Article Content */}
          <article className="lg:col-span-8 ">
            {/* Author Card (mobile only) */}
            <div className="block md:hidden bg-white rounded-3xl p-8 border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)] border mb-8">
              <div className="flex items-center gap-5 mb-6">
                <Image
                  src={blog.authorPic}
                  alt={blog.authorName}
                  width={90}
                  height={90}
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {blog.authorName}
                  </h3>
                  <p className="text-sm text-[#007BFF] font-medium">Author</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {blog.authorOverview}
              </p>
            </div>

            {/* Tags and Read Time */}
            <div className="mb-12 pt-8 border-b pb-4 md:flex justify-between items-center">
              <div className="md:mt-0 mb-4">
                <span className="text-sm font-semibold text-gray-500">
                  Tags:
                </span>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                    {blog.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                    Artificial Intelligence
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                    Technology
                  </span>
                </div>
              </div>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                8 min read
              </span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              {blog.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-justify">
                  {paragraph.trim() || <br />}
                </p>
              ))}
            </div>
          </article>

          {/* Right: Sidebar */}
          <aside className="lg:col-span-4">
            <div className="  space-y-10">
              {/* Author Card */}
              <div className="hidden md:block bg-white rounded-3xl p-8 border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)] border">
                <div className="flex items-center gap-5 mb-6">
                  <Image
                    src={blog.authorPic}
                    alt={blog.authorName}
                    width={90}
                    height={90}
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {blog.authorName}
                    </h3>
                    <p className="text-sm text-[#007BFF] font-medium">Author</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {blog.authorOverview}
                </p>
              </div>

              {/* Related Blogs */}
              <div className="bg-white rounded-3xl p-8 border border-[#007BFF] shadow-[0_0_10px_0_rgba(0,123,255,0.8)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedBlogs.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blogs/${related.slug}`}
                      className="group block hover:bg-gray-50 -mx-4 px-4 py-4 rounded-2xl transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#007BFF] line-clamp-2 text-sm leading-tight">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{related.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({ slug: blog.slug }));
}

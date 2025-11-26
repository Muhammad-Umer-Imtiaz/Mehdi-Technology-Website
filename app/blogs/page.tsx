import BlogPage from "@/Components/BlogPage";
import HeroSection from "@/Components/Common/HeroSection";

export default function blogs() {
  return (
    <div>
      <HeroSection
        bgImage="/BackgroundPictures/BlogPageBG.webp"
        title="AI & Automation Insights"
        description="Stay informed with the latest insights, trends, and updates in AI, automation, and digital innovation."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blogs", href: "" },
        ]}
      />
      <BlogPage />
    </div>
  );
}

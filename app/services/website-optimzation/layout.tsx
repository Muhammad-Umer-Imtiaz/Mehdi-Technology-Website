import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEO & Digital Marketing by Mehdi Technologies",
  description:
    "We provide SEO and digital marketing services that help your brand rank faster, grow smarter, and win online. Drive real traffic, leads, and revenue.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services/website-optimzation",
  },
  openGraph: {
    title: "SEO & Digital Marketing by Mehdi Technologies",
    description:
      "We provide SEO and digital marketing services that help your brand rank faster, grow smarter, and win online. Drive real traffic, leads, and revenue.",
    type: "website",
    url: "https://www.mehditechnologies.com/services/website-optimzation",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "SEO & Digital Marketing Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Digital Marketing by Mehdi Technologies",
    description:
      "We provide SEO and digital marketing services that help your brand rank faster, grow smarter, and win online. Drive real traffic, leads, and revenue.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data for SEO & Digital Marketing Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "SEO & Digital Marketing Services",
              provider: {
                "@type": "Organization",
                name: "Mehdi Technologies",
                url: "https://www.mehditechnologies.com",
                logo: "https://www.mehditechnologies.com/Logo.png",
                sameAs: [
                  "https://www.instagram.com/mehdi_technologies",
                  "https://www.linkedin.com/company/mehdi-technologies",
                  "https://www.behance.net/mehdi_technologies",
                  "https://www.facebook.com/MehdiTechnologies",
                ],
              },
              description:
                "Data-driven SEO and digital marketing services: search engine optimization, content strategy, performance marketing, social media growth, and conversion optimization.",
              serviceType: "SEO & Digital Marketing",
              areaServed: "Worldwide",
              audience: {
                "@type": "Audience",
                audienceType: "Businesses and startups seeking SEO and digital marketing solutions",
              },
              sameAs: "https://www.mehditechnologies.com/services/website-optimzation",
            }),
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}

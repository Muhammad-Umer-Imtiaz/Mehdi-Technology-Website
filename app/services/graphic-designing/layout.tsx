import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ui/UX for Web and Mobile Apps | Mehdi Technologies",
  description:
    "We design beautiful, user-centric digital experiences that feel effortless, look premium, and perform flawlessly. Whether you need a website, mobile app, SaaS dashboard, Web3 platform, or AI-powered product",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services/graphic-designing",
  },
  openGraph: {
    title: "Ui/UX for Web and Mobile Apps | Mehdi Technologies",
    description:
      "We design beautiful, user-centric digital experiences that feel effortless, look premium, and perform flawlessly. Whether you need a website, mobile app, SaaS dashboard, Web3 platform, or AI-powered product",
    type: "website",
    url: "https://www.mehditechnologies.com/services/graphic-designing",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "UI/UX Design Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ui/UX for Web and Mobile Apps | Mehdi Technologies",
    description:
      "We design beautiful, user-centric digital experiences that feel effortless, look premium, and perform flawlessly. Whether you need a website, mobile app, SaaS dashboard, Web3 platform, or AI-powered product",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function UIUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data for UI/UX Design Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "UI/UX Design Services",
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
                "UWe design beautiful, user-centric digital experiences that feel effortless, look premium, and perform flawlessly. Whether you need a website, mobile app, SaaS dashboard, Web3 platform, or AI-powered product",
              serviceType: "UI/UX Design",
              areaServed: "Worldwide",
              audience: {
                "@type": "Audience",
                audienceType: "Businesses and startups seeking professional UI/UX design solutions",
              },
              sameAs: "https://www.mehditechnologies.com/services/graphic-designing",
            }),
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}

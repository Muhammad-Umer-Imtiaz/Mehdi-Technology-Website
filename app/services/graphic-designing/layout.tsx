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
    "We provide beautiful, user-centric UI/UX design services for websites, mobile apps, SaaS dashboards, Web3 platforms, and AI-powered products.",
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
      "We provide beautiful, user-centric UI/UX design services for websites, mobile apps, SaaS dashboards, Web3 platforms, and AI-powered products.",
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
      "We provide beautiful, user-centric UI/UX design services for websites, mobile apps, SaaS dashboards, Web3 platforms, and AI-powered products.",
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
                "User-centric UI/UX design services: website design, mobile app design, SaaS dashboards, Web3 interfaces, AI-powered product design, and high-converting digital experiences.",
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

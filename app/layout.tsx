// app/layout.tsx
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import NewsLetter from "@/Components/LandingPage/NewsLetter";
import Footer from "@/Components/LandingPage/Footer";
import LayoutWrapper from "@/Components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehdi Technologies - Custom Software Development & AI Solutions",
  description:
    "Build your custom web apps, mobile app, AI SaaS, or blockchain product with Mehdi Technologies. Fast delivery, modern design, and expert development your business can rely on. Get a free consultation today.",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mehdi Technologies",
  url: "https://mehdi-technologies.com",
  logo: "Logo.png",
  sameAs: [
    "https://www.instagram.com/mehdi_technologies",
    "https://www.linkedin.com/company/mehdi-technologies",
    "https://www.behance.net/mehdi_technologies",
    "https://www.facebook.com/MehdiTechnologies",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92 312 310 92 18",
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Urdu"],
      contactOption: "TollFree",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office #09, Silver City Plaza, G-11 Markaz",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph for Facebook, WhatsApp, LinkedIn */}
        <meta
          property="og:title"
          content="Mehdi Technologies - Custom Software Development & AI Solutions"
        />
        <meta
          property="og:description"
          content="Build your custom web apps, mobile app, AI SaaS, or blockchain product with Mehdi Technologies. Fast delivery, modern design, and expert development your business can rely on."
        />
        <meta property="og:image" content="Logo.png" />
        <meta property="og:url" content="https://mehdi-technologies.com" />
        <meta property="og:type" content="website" />

        {/* WhatsApp uses Open Graph (same as Facebook) */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mehdi Technologies - Custom Software Development & AI Solutions"
        />
        <meta
          name="twitter:description"
          content="Build your custom web apps, mobile app, AI SaaS, or blockchain product with Mehdi Technologies."
        />
        <meta name="twitter:image" content="Logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <Navbar />
        {children}
        <LayoutWrapper />
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}

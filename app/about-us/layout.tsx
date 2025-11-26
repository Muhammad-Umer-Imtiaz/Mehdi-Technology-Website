// app/about/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mehdi Technologies – Software & AI Innovation Team",
  description:
    "Learn who we are at Mehdi Technologies | AI-driven software company building scalable apps, specializing in IT services, and digital solutions for global businesses.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/about-us",
  },
  openGraph: {
    title: "About Us | Mehdi Technologies – Software & AI Innovation Team",
    description:
      "Learn who we are at Mehdi Technologies | AI-driven software company building scalable apps, specializing in IT services, and digital solutions for global businesses.",
    type: "website",
    url: "https://www.mehditechnologies.com/about-us",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "About Mehdi Technologies",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mehdi Technologies",
    description:
      "Learn who we are at Mehdi Technologies | AI-driven software company building scalable apps, specializing in IT services, and digital solutions for global businesses. ",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for About / Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
          }),
        }}
      />
      {children}
    </>
  );
}

// app/services/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Software Engineering, Web & Mobile App Development Services",
  description:
    "Looking for the best Web and Mobile software development services? We offer services including Web, Mobile App Development, AI Solutions, and more.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services",
  },
  openGraph: {
    title: "Best Software Engineering, Web & Mobile App Development Services",
    description:
      "Looking for the best Web and Mobile software development services? We offer services including Web, Mobile App Development, AI Solutions, and more.",
    type: "website",
    url: "https://www.mehditechnologies.com/services",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Mehdi Technologies Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Software Engineering, Web & Mobile App Development Services",
    description:
      "Looking for the best Web and Mobile software development services? We offer services including Web, Mobile App Development, AI Solutions, and more.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Services */}
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

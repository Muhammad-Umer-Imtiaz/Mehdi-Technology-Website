// app/careers/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Mehdi Technologies | Join Our Tech Team",
  description:
    "Explore job openings at Mehdi Technologies. Apply for roles in software engineering, AI development, mobile apps, web development, design, and project management.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/careers",
  },
  openGraph: {
    title: "Careers at Mehdi Technologies | Join Our Tech Team",
    description:
      "Explore job openings at Mehdi Technologies. Apply for roles in software engineering, AI development, mobile apps, web development, design, and project management.",
    type: "website",
    url: "https://www.mehditechnologies.com/careers",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Mehdi Technologies Careers",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Mehdi Technologies | Join Our Tech Team",
    description:
      "Explore job openings at Mehdi Technologies. Apply for roles in software engineering, AI development, mobile apps, web development, design, and project management.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Organization and Careers */}
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
            career: {
              "@type": "JobPosting",
              title: "Open Positions at Mehdi Technologies",
              description:
                "Explore job openings at Mehdi Technologies. Apply for roles in software engineering, AI development, mobile apps, web development, design, and project management.",
              hiringOrganization: {
                "@type": "Organization",
                name: "Mehdi Technologies",
                sameAs: "https://www.mehditechnologies.com",
                logo: "https://www.mehditechnologies.com/Logo.png",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office #09, Silver City Plaza, G-11 Markaz",
                  addressLocality: "Islamabad",
                  addressCountry: "PK",
                },
              },
              employmentType: "FULL_TIME",
              validThrough: "2025-12-31", // optional, update accordingly
            },
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

// app/services/mobile-app-development/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development | iOS & Android Apps by Mehdi Technologies",
  description:
    "We develop high-performance Android, iOS, and cross-platform mobile apps with clean UI/UX and scalable backend architecture.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical:
      "https://www.mehditechnologies.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development | iOS & Android Apps by Mehdi Technologies",
    description:
      "We develop high-performance Android, iOS, and cross-platform mobile apps with clean UI/UX and scalable backend architecture.",
    type: "website",
    url: "https://www.mehditechnologies.com/services/mobile-app-development",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Mobile App Development Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | iOS & Android Apps by Mehdi Technologies",
    description:
      "We develop high-performance Android, iOS, and cross-platform mobile apps with clean UI/UX and scalable backend architecture.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function MobileAppServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Mobile App Development",
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
              "We develop high-performance Android, iOS, and cross-platform mobile apps with clean UI/UX and scalable backend architecture.",
            areaServed: "Worldwide",
            audience: {
              "@type": "Audience",
              audienceType: "Businesses seeking mobile app solutions",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

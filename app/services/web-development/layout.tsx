// app/services/web-development/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Development | Mehdi Technologies",
  description:
    "Mehdi Technologies builds modern, fast, scalable web applications using React, Next.js, Node.js, Laravel, and cloud-ready architecture.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services/web-development",
  },
  openGraph: {
    title: "Custom Website Development | Mehdi Technologies",
    description:
      "Mehdi Technologies builds modern, fast, scalable web applications using React, Next.js, Node.js, Laravel, and cloud-ready architecture.",
    type: "website",
    url: "https://www.mehditechnologies.com/services/web-development",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Web Development Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development | Mehdi Technologies",
    description:
      "Mehdi Technologies builds modern, fast, scalable web applications using React, Next.js, Node.js, Laravel, and cloud-ready architecture.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function WebDevelopmentLayout({
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
            name: "Web Development",
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
              "Mehdi Technologies builds modern, fast, scalable web applications using React, Next.js, Node.js, Laravel, and cloud-ready architecture.",
            areaServed: "Worldwide",
            audience: {
              "@type": "Audience",
              audienceType: "Businesses seeking custom web applications",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

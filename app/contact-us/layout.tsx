// app/contact-us/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mehdi Technologies for Software & AI Experts",
  description:
    "Get in touch with Mehdi Technologies for software development, AI solutions, and web developmnet services. Book a meeting with our team!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/contact-us",
  },
  openGraph: {
    title: "Contact | Mehdi Technologies for Software & AI Experts",
    description:
      "Get in touch with Mehdi Technologies for software development, AI solutions, and web developmnet services. Book a meeting with our team!",
    type: "website",
    url: "https://www.mehditechnologies.com/contact-us",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Contact Mehdi Technologies",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mehdi Technologies for Software & AI Experts",
    description:
      "Get in touch with Mehdi Technologies for software development, AI solutions, and web developmnet services. Book a meeting with our team!",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Organization Contact */}
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
              {
                "@type": "ContactPoint",
                telephone: "+92 300 123 45 67",
                contactType: "Sales Inquiries",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
                contactOption: "TollFree",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office #5, Blue Tower, Karachi",
                  addressLocality: "Karachi",
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

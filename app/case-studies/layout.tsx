// app/case-studies/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Portfolio | Software & AI Projects by Mehdi Technologies",
  description:
    "View our portfolio of SaaS platforms, AI systems, mobile apps, and enterprise solutions delivered to clients across Pakistan, UAE, UK, and USA.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/case-studies",
  },
  openGraph: {
    title: "Portfolio | Software & AI Projects by Mehdi Technologies",
    description:
      "View our portfolio of SaaS platforms, AI systems, mobile apps, and enterprise solutions delivered to clients across Pakistan, UAE, UK, and USA.",
    type: "website",
    url: "https://www.mehditechnologies.com/case-studies",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Mehdi Technologies Portfolio",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Software & AI Projects by Mehdi Technologies",
    description:
      "View our portfolio of SaaS platforms, AI systems, mobile apps, and enterprise solutions delivered to clients across Pakistan, UAE, UK, and USA.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSON-LD Structured Data for Organization and Portfolio */}
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
            portfolio: {
              "@type": "CreativeWork",
              name: "Software & AI Projects Portfolio",
              description:
                "View our portfolio of SaaS platforms, AI systems, mobile apps, and enterprise solutions delivered to clients across Pakistan, UAE, UK, and USA.",
              url: "https://www.mehditechnologies.com/case-studies",
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
  )
}

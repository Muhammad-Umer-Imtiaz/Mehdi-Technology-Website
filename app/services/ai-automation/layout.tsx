// app/services/ai-automation/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development & Automation | Mehdi Technologies",
  description:
    "Leverage AI with custom chatbots, automation systems, machine learning, NLP, and end-to-end AI integrations built for real business impact.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Development & Automation | Mehdi Technologies",
    description:
      "Leverage AI with custom chatbots, automation systems, machine learning, NLP, and end-to-end AI integrations built for real business impact.",
    type: "website",
    url: "https://www.mehditechnologies.com/services/ai-automation",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "AI Automation Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development & Automation | Mehdi Technologies",
    description:
      "Leverage AI with custom chatbots, automation systems, machine learning, NLP, and end-to-end AI integrations built for real business impact.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function AiAutomationLayout({
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
            name: "AI Development & Automation",
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
              "Leverage AI with custom chatbots, automation systems, machine learning, NLP, and end-to-end AI integrations built for real business impact.",
            areaServed: "Worldwide",
            audience: {
              "@type": "Audience",
              audienceType: "Businesses seeking AI and automation solutions",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

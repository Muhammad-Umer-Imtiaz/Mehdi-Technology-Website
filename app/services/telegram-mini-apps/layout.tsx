import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telegram Mini App Development | Bot & Mini App Experts",
  description:
    "We develop powerful Telegram Mini Apps, bots, automation tools, Web3 integrations, and gamified experiences for startups and enterprise projects.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services/telegram-mini-apps",
  },
  openGraph: {
    title: "Telegram Mini App Development | Bot & Mini App Experts",
    description:
      "We develop powerful Telegram Mini Apps, bots, automation tools, Web3 integrations, and gamified experiences for startups and enterprise projects.",
    type: "website",
    url: "https://www.mehditechnologies.com/services/telegram-mini-apps",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Telegram Mini Apps Development",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Mini App Development | Bot & Mini App Experts",
    description:
      "We develop powerful Telegram Mini Apps, bots, automation tools, Web3 integrations, and gamified experiences for startups and enterprise projects.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function TelegramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data for Telegram Mini Apps Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Telegram Mini Apps Development",
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
                "We develop powerful Telegram Mini Apps, bots, automation tools, Web3 integrations, and gamified experiences for startups and enterprise projects.",
              serviceType: "Telegram Mini Apps Development",
              areaServed: "Worldwide",
              audience: {
                "@type": "Audience",
                audienceType: "Businesses and startups seeking Telegram bot and mini-app solutions",
              },
              sameAs: "https://www.mehditechnologies.com/services/telegram-mini-apps",
            }),
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}

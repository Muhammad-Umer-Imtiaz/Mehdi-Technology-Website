import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dApps & Web3.0 Development by Mehdi Technologies",
  description:
    "We provide secure, transparent, and scalable blockchain solutions including smart contracts, DApps, NFT marketplaces, and wallet integrations.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mehditechnologies.com/services/blockchain-development",
  },
  openGraph: {
    title: "dApps & Web3.0 Development by Mehdi Technologies",
    description:
      "We provide secure, transparent, and scalable blockchain solutions including smart contracts, DApps, NFT marketplaces, and wallet integrations.",
    type: "website",
    url: "https://www.mehditechnologies.com/services/blockchain-development",
    images: [
      {
        url: "https://www.mehditechnologies.com/Logo.png",
        width: 800,
        height: 600,
        alt: "Blockchain Development Services",
      },
    ],
    siteName: "Mehdi Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "dApps & Web3.0 Development by Mehdi Technologies",
    description:
      "We provide secure, transparent, and scalable blockchain solutions including smart contracts, DApps, NFT marketplaces, and wallet integrations.",
    images: ["https://www.mehditechnologies.com/Logo.png"],
    creator: "@MehdiTechnologies",
  },
};

export default function BlockchainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data for Blockchain Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "dApps & Web3.0 Development",
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
                "Secure, transparent, and scalable blockchain solutions: smart contracts, decentralized applications (DApps), NFT marketplaces, token development, and wallet integrations.",
              serviceType: "Blockchain Development",
              areaServed: "Worldwide",
              audience: {
                "@type": "Audience",
                audienceType: "Businesses and startups seeking blockchain and Web3 solutions",
              },
              sameAs: "https://www.mehditechnologies.com/services/blockchain-development",
            }),
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}

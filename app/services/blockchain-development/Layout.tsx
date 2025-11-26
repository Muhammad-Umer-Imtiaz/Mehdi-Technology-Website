// app/blockchain/layout.tsx
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blockchain Development - Mehdi Technologies",
  description:
    "We provide secure, transparent, and scalable blockchain solutions including smart contracts, DApps, NFT marketplaces, and wallet integrations.",
};

export default function BlockchainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}

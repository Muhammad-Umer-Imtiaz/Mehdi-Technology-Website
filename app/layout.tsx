// app/layout.tsx (Root Layout)
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ContactUs from "@/Components/LandingPage/ContactUs";
import NewsLetter from "@/Components/LandingPage/NewsLetter";
import Footer from "@/Components/LandingPage/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Default site metadata
export const metadata: Metadata = {
  title: "Mehdi Technologies",
  description:
    "We provide cutting-edge technology solutions for web, blockchain, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <ContactUs />
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}

// app/web-development/layout.tsx
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Development - Mehdi Technologies",
  description:
    "We create responsive, modern, and high-performance web applications with pixel-perfect design, scalable architecture, and robust functionality.",
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ⚠️ Do NOT include <html> or <body> here!
  // Only return the content wrapper
  return <div className={`${inter.variable} font-sans antialiased`}>{children}</div>;
}

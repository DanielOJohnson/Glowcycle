import type { Metadata } from "next";
import { Geist, Marcellus } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glow Cycle | Premium Medical Aesthetics",
  description: "A better skin starts with a routine that works. Premium medical aesthetics in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${marcellus.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CHILPTECH - Customer Support Solutions",
  description: "Multilingual, tech-driven customer support that boosts satisfaction, loyalty, and growth across Africa. Based in Kigali, Rwanda.",
  icons: {
    icon: '/images/lo.png',
    shortcut: '/images/lo.png',
    apple: '/images/lo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/lo.png" />
        <link rel="shortcut icon" href="/images/lo.png" />
        <link rel="apple-touch-icon" href="/images/lo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

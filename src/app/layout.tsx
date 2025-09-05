import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/features/Footer";
import AvailabilityToast from "@/components/features/AvailibilityToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programmatic | AI Solutions for Business Growth & Efficiency",
  description: "Unlock exponential growth with Programmatic. Our AI-powered automation solutions are tailored to boost your efficiency, drive data-backed decisions, and give you a competitive edge. Get your free consultation.",
  metadataBase: new URL('https://www.programmatic.it.com'), // <-- REPLACE WITH YOUR DOMAIN
  openGraph: {
    title: "Programmatic | AI Solutions for Business, Growth, & Efficiency",
    description: "Unlock exponential growth with Programmatic's AI-powered automation solutions.",
    url: 'https://www.programmatic.it.com', // <-- REPLACE WITH YOUR DOMAIN
    siteName: 'Programmatic',
    images: [
      {
        url: '/programmatic-socail-card.png',
        width: 1200,
        height: 630,
        alt: 'Programmatic AI & Automation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Ensure NO WHITESPACE between <head> and its content/closing tag */}
      <head><link rel="preload" href="/HeroVid.mp4" as="video" type="video/mp4" /></head>
      {/* If you add more to the head, keep it tightly packed: */}
      {/* <head><link rel="preload" href="/HeroVid.mp4" as="video" type="video/mp4" /><link rel="stylesheet" href="styles.css" /></head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
            <AvailabilityToast />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
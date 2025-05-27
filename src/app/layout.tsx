import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arabites Digital Agency | Custom Websites & Software Solutions in Dubai",
  description: "Leading digital agency in Dubai specializing in custom websites, landing pages, and software solutions for real estate, e-commerce, wellness, tourism, and fintech businesses.",
  keywords: "Dubai digital agency, custom websites Dubai, landing pages Dubai, software development Dubai, real estate websites, e-commerce solutions",
  authors: [{ name: "Arabites Digital Agency" }],
  creator: "Arabites Digital Agency",
  publisher: "Arabites Digital Agency",
  metadataBase: new URL("https://arabites.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arabites.com",
    title: "Arabites Digital Agency | Custom Websites & Software Solutions in Dubai",
    description: "Leading digital agency in Dubai specializing in custom websites, landing pages, and software solutions for real estate, e-commerce, wellness, tourism, and fintech businesses.",
    siteName: "Arabites Digital Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arabites Digital Agency - Dubai's Premier Web Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabites Digital Agency | Custom Websites & Software Solutions in Dubai",
    description: "Leading digital agency in Dubai specializing in custom websites, landing pages, and software solutions for real estate, e-commerce, wellness, tourism, and fintech businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

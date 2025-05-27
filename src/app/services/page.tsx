import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceList from "@/components/sections/services/ServiceList";
import WhyUs from "@/components/sections/services/WhyUs";
import Process from "@/components/sections/services/Process";
import CTA from "@/components/sections/services/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services | Arabites Digital Agency - Expert Web & Software Development Dubai",
  description: "Discover our comprehensive digital services including custom websites, mobile apps, e-commerce solutions, and software development. Transform your business with Dubai's trusted digital partner.",
  keywords: "web development Dubai, software development services, mobile app development, e-commerce solutions, custom websites Dubai, digital agency services",
  openGraph: {
    title: "Services | Arabites Digital Agency - Expert Web & Software Development Dubai",
    description: "Discover our comprehensive digital services including custom websites, mobile apps, e-commerce solutions, and software development. Transform your business with Dubai's trusted digital partner.",
    url: "https://arabites.com/services",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Arabites Digital Agency Services - Web Development Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Arabites Digital Agency - Expert Web & Software Development Dubai",
    description: "Discover our comprehensive digital services including custom websites, mobile apps, e-commerce solutions, and software development. Transform your business with Dubai's trusted digital partner.",
    images: ["/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServiceList />
      <WhyUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}

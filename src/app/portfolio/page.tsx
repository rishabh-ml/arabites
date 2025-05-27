import type { Metadata } from "next";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import Footer from "@/components/sections/Footer";
import { getPortfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Arabites Digital Agency - Our Best Work Showcase",
  description: "Explore Arabites' portfolio of successful digital projects across real estate, e-commerce, wellness, and fintech industries in Dubai. See our expertise in action.",
  keywords: "Arabites portfolio, Dubai web development projects, digital agency case studies, real estate websites Dubai, e-commerce platforms, mobile app development",
  openGraph: {
    title: "Portfolio | Arabites Digital Agency - Our Best Work Showcase",
    description: "Explore Arabites' portfolio of successful digital projects across real estate, e-commerce, wellness, and fintech industries in Dubai. See our expertise in action.",
    url: "https://arabites.com/portfolio",
    type: "website",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Arabites Digital Agency Portfolio - Dubai's Premier Web Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Arabites Digital Agency - Our Best Work Showcase", 
    description: "Explore Arabites' portfolio of successful digital projects across real estate, e-commerce, wellness, and fintech industries in Dubai. See our expertise in action.",
    images: ["/og-portfolio.jpg"],
  },
};

export default function PortfolioPage() {
  const projects = getPortfolioProjects();

  return (
    <main className="min-h-screen">
      <PortfolioGrid projects={projects} />
      <Footer />
    </main>
  );
}

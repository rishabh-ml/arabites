import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import Values from "@/components/sections/about/Values";
import Stats from "@/components/sections/about/Stats";
import Team from "@/components/sections/about/Team";
import WhyWorkWithUs from "@/components/sections/about/WhyWorkWithUs";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Us | Arabites Digital Agency - Dubai's Premier Web Development Team",
  description: "Meet the passionate team behind Arabites Digital Agency. Learn about our mission, values, and commitment to transforming Dubai businesses through innovative digital solutions.",
  keywords: "about Arabites, Dubai web development team, digital agency story, web development company Dubai, software development team",
  openGraph: {
    title: "About Us | Arabites Digital Agency - Dubai's Premier Web Development Team",
    description: "Meet the passionate team behind Arabites Digital Agency. Learn about our mission, values, and commitment to transforming Dubai businesses through innovative digital solutions.",
    url: "https://arabites.com/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Arabites Digital Agency - Meet Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Arabites Digital Agency - Dubai's Premier Web Development Team",
    description: "Meet the passionate team behind Arabites Digital Agency. Learn about our mission, values, and commitment to transforming Dubai businesses through innovative digital solutions.",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Values />
      <Stats />
      <Team />
      <WhyWorkWithUs />
      <Footer />
    </main>
  );
}

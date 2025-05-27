import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Industries />
      <Services />
      <Portfolio />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}

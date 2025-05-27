import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import MapEmbed from "@/components/sections/contact/MapEmbed";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Arabites Digital Agency - Get Your Free Consultation",
  description: "Ready to transform your business with digital solutions? Contact Arabites, Dubai's premier digital agency. Get a free consultation and start your project today.",
  keywords: "contact Arabites, Dubai digital agency contact, web development consultation, free quote Dubai, digital agency services",
  openGraph: {
    title: "Contact Us | Arabites Digital Agency - Get Your Free Consultation",
    description: "Ready to transform your business with digital solutions? Contact Arabites, Dubai's premier digital agency. Get a free consultation and start your project today.",
    url: "https://arabites.com/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Arabites Digital Agency - Start Your Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Arabites Digital Agency - Get Your Free Consultation",
    description: "Ready to transform your business with digital solutions? Contact Arabites, Dubai's premier digital agency. Get a free consultation and start your project today.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <div className="bg-[var(--neutral-50)]">
          <ContactInfo />
          <MapEmbed />
        </div>
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
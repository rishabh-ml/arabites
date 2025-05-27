"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Custom Websites", href: "#services" },
    { name: "Landing Pages", href: "#services" },
    { name: "Software Solutions", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
  ],
  industries: [
    { name: "Real Estate", href: "#industries" },
    { name: "E-commerce", href: "#industries" },
    { name: "Health & Wellness", href: "#industries" },
    { name: "Tourism", href: "#industries" },
    { name: "Fintech", href: "#industries" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Support Center", href: "/support" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/arabites" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/arabites" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/arabites" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/arabites" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Office",
    details: ["Dubai Internet City", "Dubai, UAE"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+971 50 123 4567"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@arabites.com"]
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--neutral-900)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, var(--primary) 25%, transparent 25%),
                           linear-gradient(-45deg, var(--primary) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, var(--secondary) 75%),
                           linear-gradient(-45deg, transparent 75%, var(--secondary) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent mb-4">
                  Arabites
                </h3>
                <p className="text-[var(--neutral-400)] leading-relaxed mb-6">
                  Dubai's premier digital agency, transforming businesses through innovative 
                  web solutions and custom software development.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-[var(--neutral-800)] rounded-lg flex items-center justify-center hover:bg-[var(--primary)] transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h4 className="text-white font-semibold mb-4 capitalize">
                      {category}
                    </h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-[var(--neutral-400)] hover:text-white transition-colors duration-200 text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.title} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[var(--neutral-800)] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon className="w-4 h-4 text-[var(--primary)]" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm mb-1">
                            {info.title}
                          </div>
                          {info.details.map((detail, index) => (
                            <div key={index} className="text-[var(--neutral-400)] text-sm">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-8 border-t border-[var(--neutral-800)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[var(--neutral-400)] text-sm">
              © 2024 Arabites Digital Agency. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="/privacy"
                className="text-[var(--neutral-400)] hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[var(--neutral-400)] hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
              
              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

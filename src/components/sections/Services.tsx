"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Code, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Bespoke websites that reflect your brand and convert visitors into customers",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
    color: "var(--primary)"
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "High-converting landing pages designed to maximize your marketing ROI",
    features: ["A/B Testing", "Analytics Setup", "Lead Capture", "Mobile Optimized"],
    color: "var(--secondary)"
  },
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software and web applications tailored to your business needs",
    features: ["API Development", "Database Design", "Cloud Hosting", "Maintenance"],
    color: "var(--accent)"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["Native Performance", "App Store Optimization", "Push Notifications", "Analytics"],
    color: "var(--primary)"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-[var(--neutral-50)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
            Our
            <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto">
            From concept to launch, we deliver digital solutions that drive real business results
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full">
                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon 
                      className="w-10 h-10 transition-colors duration-300"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-4 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[var(--neutral-600)] leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[var(--neutral-700)]">
                        <div 
                          className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-[var(--neutral-200)]"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#contact"
                      className="inline-flex items-center font-semibold transition-colors duration-200 group-hover:text-[var(--primary)]"
                      style={{ color: service.color }}
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </motion.div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business grow and succeed in Dubai's competitive market.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-[var(--primary)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--neutral-100)] transition-colors duration-200"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

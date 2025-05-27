"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, Heart, Plane, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Showcase properties with stunning visuals and lead-generating websites",
    color: "var(--primary)"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Convert visitors into customers with optimized online stores",
    color: "var(--secondary)"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Build trust and attract clients with professional healthcare websites",
    color: "var(--accent)"
  },
  {
    icon: Plane,
    title: "Tourism",
    description: "Inspire travelers with immersive booking experiences",
    color: "var(--primary)"
  },
  {
    icon: TrendingUp,
    title: "Fintech",
    description: "Secure, compliant platforms that build financial confidence",
    color: "var(--secondary)"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-white">
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
            Industries We
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Specialize In
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto">
            We understand the unique challenges and opportunities in Dubai's most dynamic sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${industry.color}15` }}
                  >
                    <Icon 
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: industry.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-[var(--neutral-600)] leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--neutral-600)] mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors duration-200"
          >
            Let's discuss your project
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

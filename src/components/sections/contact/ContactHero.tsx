"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Shield, ArrowDown } from "lucide-react";

export default function ContactHero() {
  const benefits = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Shield, text: "Free consultation" },
    { icon: MessageCircle, text: "No commitment required" }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--neutral-50)] via-white to-[var(--neutral-100)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, var(--primary) 2px, transparent 2px),
                           radial-gradient(circle at 70% 30%, var(--secondary) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] rounded-full opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] mb-6"
          >
            Let's Work
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Together
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-[var(--neutral-600)] mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your business with digital solutions? Fill out the form below 
            or reach us directly. We'll respond within 24 hours with a personalized strategy.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[var(--neutral-200)]"
                >
                  <Icon className="w-5 h-5 text-[var(--primary)]" />
                  <span className="text-[var(--neutral-700)] font-medium text-sm">
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[var(--neutral-500)] text-sm font-medium">
            Get Started
          </span>
          <ArrowDown className="w-5 h-5 text-[var(--neutral-400)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
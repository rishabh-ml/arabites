"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code, Smartphone, ShoppingCart, Monitor, Settings, BarChart } from "lucide-react";

export default function ServicesHero() {
  const serviceIcons = [
    { icon: Code, color: "var(--primary)", delay: 0.2 },
    { icon: Smartphone, color: "var(--secondary)", delay: 0.4 },
    { icon: ShoppingCart, color: "var(--accent)", delay: 0.6 },
    { icon: Monitor, color: "var(--primary)", delay: 0.8 },
    { icon: Settings, color: "var(--secondary)", delay: 1.0 },
    { icon: BarChart, color: "var(--accent)", delay: 1.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--neutral-50)] via-white to-[var(--neutral-100)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, var(--primary) 2px, transparent 2px),
                           radial-gradient(circle at 80% 20%, var(--secondary) 2px, transparent 2px),
                           radial-gradient(circle at 40% 40%, var(--accent) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Service Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {serviceIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${10 + (index * 15)}%`,
                top: `${20 + (index % 2) * 40}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.1, 
                scale: 1,
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                delay: item.delay,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <Icon 
                className="w-12 h-12 lg:w-16 lg:h-16" 
                style={{ color: item.color }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--neutral-900)] mb-6"
          >
            Digital Solutions That
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Drive Results
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-[var(--neutral-600)] mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            From custom websites to enterprise software solutions, we transform your business vision into 
            powerful digital experiences that engage customers and accelerate growth.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              "Custom Development",
              "Modern Technologies", 
              "Scalable Solutions",
              "Ongoing Support"
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[var(--neutral-200)]"
              >
                <span className="text-[var(--neutral-700)] font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              variant="primary"
              href="#services"
              className="group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              href="/#contact"
              className="group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--neutral-400)] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[var(--neutral-400)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

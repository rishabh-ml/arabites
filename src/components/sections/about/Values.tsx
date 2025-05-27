"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve with cutting-edge technologies and creative solutions that push boundaries and deliver exceptional results.",
    color: "var(--primary)",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency, honesty, and ethical practices form the foundation of every client relationship and project we undertake.",
    color: "var(--secondary)",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to delivering nothing less than exceptional quality in every line of code, every design element, and every client interaction.",
    color: "var(--accent)",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Success comes from working closely with our clients as true partners, understanding their vision and bringing it to life together.",
    color: "var(--primary)",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We understand that behind every project is a dream, a goal, or a challenge. We approach each with genuine care and understanding.",
    color: "var(--secondary)",
    gradient: "from-rose-500 to-pink-600"
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Values() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[var(--neutral-50)] to-white">
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
            Our Core
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do, from the first client conversation 
            to the final project delivery and beyond.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full relative overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon 
                        className="w-10 h-10 transition-all duration-500 group-hover:scale-110"
                        style={{ color: value.color }}
                      />
                      
                      {/* Icon Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ 
                          background: `radial-gradient(circle, ${value.color} 0%, transparent 70%)`,
                          filter: 'blur(10px)'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-4 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-[var(--neutral-600)] leading-relaxed group-hover:text-[var(--neutral-700)] transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ backgroundColor: value.color }} />
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ backgroundColor: value.color }} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-[var(--neutral-200)] max-w-4xl mx-auto">
            <div className="text-4xl mb-6">💡</div>
            <blockquote className="text-xl lg:text-2xl font-medium text-[var(--neutral-800)] mb-6 leading-relaxed">
              "Our values aren't just words on a wall—they're the compass that guides every decision, 
              every line of code, and every client interaction."
            </blockquote>
            <div className="text-[var(--neutral-600)]">
              <p className="font-semibold">The Arabites Team</p>
              <p className="text-sm">Dubai, UAE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

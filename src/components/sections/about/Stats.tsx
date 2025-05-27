"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Trophy, Users, Clock, Target, Star, Zap } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    number: 25,
    suffix: "+",
    label: "Projects Shipped",
    description: "Successfully delivered across various industries",
    color: "var(--primary)",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Star,
    number: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Maintaining perfect satisfaction scores",
    color: "var(--secondary)",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Clock,
    number: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Round-the-clock assistance when you need it",
    color: "var(--accent)",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Target,
    number: 5,
    suffix: "+",
    label: "Industries Served",
    description: "Specialized expertise across key sectors",
    color: "var(--primary)",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    number: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Building lasting partnerships",
    color: "var(--secondary)",
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: Zap,
    number: 99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Consistently meeting project deadlines",
    color: "var(--accent)",
    gradient: "from-green-500 to-green-600"
  }
];

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, var(--primary) 2px, transparent 2px),
                           radial-gradient(circle at 80% 80%, var(--secondary) 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
            Our Impact
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              In Numbers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            These milestones represent more than just numbers—they're a testament to the trust 
            our clients place in us and the results we deliver together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full relative overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-500 relative"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <Icon 
                        className="w-10 h-10 transition-all duration-500 group-hover:scale-110"
                        style={{ color: stat.color }}
                      />
                      
                      {/* Icon Glow Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ 
                          background: `radial-gradient(circle, ${stat.color} 0%, transparent 70%)`,
                          filter: 'blur(15px)'
                        }}
                      />
                    </div>

                    {/* Number */}
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.number} />
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--neutral-600)] leading-relaxed group-hover:text-[var(--neutral-700)] transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ backgroundColor: stat.color }} />
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ backgroundColor: stat.color }} />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-20"
                    style={{ borderColor: stat.color }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
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
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-3xl p-8 lg:p-12 border border-[var(--neutral-200)]">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--neutral-900)] mb-4">
              Ready to Add Your Success Story?
            </h3>
            <p className="text-lg text-[var(--neutral-600)] mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let's create something amazing together.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

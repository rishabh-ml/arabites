"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Zap, 
  HeartHandshake,
  Target,
  TrendingUp
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "Years of experience delivering successful digital solutions across diverse industries in Dubai and beyond.",
    color: "var(--primary)"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timeline and consistently deliver projects when promised, without compromising on quality.",
    color: "var(--secondary)"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work directly with our experienced developers and designers who are committed to your project's success.",
    color: "var(--accent)"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure your solution works flawlessly from day one.",
    color: "var(--primary)"
  },
  {
    icon: Zap,
    title: "Latest Technologies",
    description: "We use cutting-edge technologies and frameworks to build future-ready solutions that scale with your business.",
    color: "var(--secondary)"
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description: "We don't just build software – we become your long-term technology partner, supporting your growth.",
    color: "var(--accent)"
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every decision we make is driven by measurable outcomes and your business objectives.",
    color: "var(--primary)"
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our solutions are built to grow with your business, handling increased traffic and expanding features.",
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

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[var(--neutral-50)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              {" "}Arabites
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto">
            We combine technical excellence with deep understanding of Dubai's business landscape 
            to deliver solutions that truly make a difference.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="group relative bg-white rounded-xl p-6 border border-[var(--neutral-200)] hover:border-[var(--primary)] transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--neutral-100)] to-[var(--neutral-200)] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: benefit.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--neutral-900)] mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--neutral-600)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-[var(--neutral-200)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Projects Delivered", color: "var(--primary)" },
              { number: "100%", label: "Client Satisfaction", color: "var(--secondary)" },
              { number: "3+", label: "Years Experience", color: "var(--accent)" },
              { number: "24/7", label: "Support Available", color: "var(--primary)" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--neutral-600)] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

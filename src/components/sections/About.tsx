"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Award, Clock, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Projects Delivered",
    color: "var(--primary)"
  },
  {
    icon: Award,
    number: "100%",
    label: "Client Satisfaction",
    color: "var(--secondary)"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    color: "var(--accent)"
  },
  {
    icon: Target,
    number: "5+",
    label: "Industries Served",
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

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-[var(--neutral-50)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
              About
              <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                Arabites Agency
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-[var(--neutral-600)] leading-relaxed">
              <p>
                We're a passionate team of digital innovators based in Dubai, dedicated to helping 
                businesses thrive in the digital landscape. Our expertise spans across web development, 
                mobile applications, and custom software solutions.
              </p>
              
              <p>
                What sets us apart is our deep understanding of Dubai's unique business environment 
                and our commitment to delivering solutions that not only look stunning but drive 
                real business results.
              </p>
              
              <p>
                From startups to established enterprises, we've helped businesses across real estate, 
                e-commerce, wellness, tourism, and fintech sectors transform their digital presence 
                and achieve their growth objectives.
              </p>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                variant="primary"
                href="/about"
                className="group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 text-center">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-colors duration-300"
                        style={{ color: stat.color }}
                      />
                    </div>

                    {/* Number */}
                    <div 
                      className="text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className="text-[var(--neutral-600)] font-medium">
                      {stat.label}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--neutral-900)] mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-[var(--neutral-600)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
                emoji: "🚀"
              },
              {
                title: "Quality",
                description: "Every project receives our full attention to detail and commitment to excellence.",
                emoji: "⭐"
              },
              {
                title: "Partnership",
                description: "We work closely with our clients as trusted partners in their success journey.",
                emoji: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h4 className="text-xl font-bold text-[var(--neutral-900)] mb-3">
                  {value.title}
                </h4>
                <p className="text-[var(--neutral-600)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

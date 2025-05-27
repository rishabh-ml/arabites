"use client";

import { motion } from "framer-motion";
import { MapPin, Lightbulb, Target, Rocket } from "lucide-react";

const storyMilestones = [
  {
    icon: Lightbulb,
    title: "The Vision",
    description: "Born from the recognition that Dubai's rapidly growing business landscape needed a digital partner that truly understood the local market dynamics and global standards.",
    color: "var(--primary)"
  },
  {
    icon: MapPin,
    title: "Dubai Roots",
    description: "Established in the heart of Dubai, we've witnessed firsthand the city's transformation into a global business hub and positioned ourselves to serve this evolution.",
    color: "var(--secondary)"
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "To bridge the gap between ambitious business goals and digital reality, helping Dubai-based companies thrive in an increasingly connected world.",
    color: "var(--accent)"
  },
  {
    icon: Rocket,
    title: "The Future",
    description: "Continuously evolving our expertise to stay ahead of technological trends while maintaining our commitment to personalized, results-driven solutions.",
    color: "var(--primary)"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

export default function OurStory() {
  return (
    <section id="story" className="py-20 lg:py-32 bg-white">
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
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            Every great digital transformation begins with understanding. Here's how we became 
            Dubai's trusted partner for innovative web solutions.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-lg text-[var(--neutral-600)] leading-relaxed">
              <p>
                <span className="font-semibold text-[var(--primary)]">Arabites Digital Agency</span> was 
                founded with a simple yet powerful belief: that every business deserves a digital presence 
                that not only looks exceptional but drives real, measurable results.
              </p>
              
              <p>
                In Dubai's fast-paced business environment, we recognized that companies needed more than 
                just websites—they needed digital partners who understood their unique challenges, from 
                navigating diverse cultural markets to meeting the high expectations of international clients.
              </p>
              
              <p>
                Our journey began with a commitment to excellence and a deep appreciation for Dubai's 
                entrepreneurial spirit. We've grown alongside the city's digital transformation, helping 
                businesses across real estate, e-commerce, wellness, tourism, and fintech sectors 
                establish powerful online presences.
              </p>

              <p>
                Today, we're proud to be part of Dubai's thriving tech ecosystem, combining global 
                best practices with local market insights to deliver solutions that truly make a difference.
              </p>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-3xl p-8 lg:p-12">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-[var(--accent)]/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-[var(--secondary)]/20 rounded-full" />
              
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6">🏙️</div>
                <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-4">
                  Dubai's Digital Evolution
                </h3>
                <p className="text-[var(--neutral-600)] leading-relaxed">
                  From a vision to reality, we've been part of Dubai's incredible 
                  journey toward becoming a global digital hub.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story Milestones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {storyMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${milestone.color}15` }}
                  >
                    <Icon 
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: milestone.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-[var(--neutral-600)] leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

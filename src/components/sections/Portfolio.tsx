"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Dubai Real Estate Platform",
    category: "Real Estate",
    description: "A comprehensive property listing platform with advanced search, virtual tours, and lead management system.",
    image: "/portfolio/real-estate-mockup.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    color: "var(--primary)"
  },
  {
    id: 2,
    title: "E-commerce Fashion Store",
    category: "E-commerce",
    description: "Modern online fashion store with seamless checkout, inventory management, and customer analytics.",
    image: "/portfolio/ecommerce-mockup.jpg",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    color: "var(--secondary)"
  },
  {
    id: 3,
    title: "Wellness Center App",
    category: "Health & Wellness",
    description: "Mobile-first booking platform for wellness services with appointment scheduling and payment integration.",
    image: "/portfolio/wellness-mockup.jpg",
    tags: ["React Native", "Firebase", "Payment Gateway", "Push Notifications"],
    color: "var(--accent)"
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
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
              Featured Work
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20">
                {/* Project Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--neutral-200)] to-[var(--neutral-300)] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--neutral-400)] rounded-lg mx-auto mb-4"></div>
                      <p className="text-[var(--neutral-600)] font-medium">{project.title}</p>
                      <p className="text-sm text-[var(--neutral-500)]">Preview Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  {/* Category Badge */}
                  <div 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      color: project.color
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--neutral-600)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[var(--neutral-100)] text-[var(--neutral-700)] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#contact"
                      className="inline-flex items-center font-semibold transition-colors duration-200 group-hover:text-[var(--primary)]"
                      style={{ color: project.color }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--neutral-600)] mb-6 text-lg">
            Ready to see your project come to life?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

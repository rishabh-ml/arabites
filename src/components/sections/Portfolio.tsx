"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/portfolio";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
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

export default function Portfolio() {
  const featuredProjects = getFeaturedProjects();
  
  // Color mapping for different categories
  const getCategoryColors = (category: string) => {
    const colorMap: Record<string, { primary: string; accent: string }> = {
      'Real Estate Platform': { primary: '#1e40af', accent: '#3b82f6' },
      'Healthcare Platform': { primary: '#059669', accent: '#10b981' },
      'E-Commerce Platform': { primary: '#dc2626', accent: '#ef4444' },
      'Web Application': { primary: '#7c3aed', accent: '#8b5cf6' },
      'Mobile App': { primary: '#ea580c', accent: '#f97316' },
      'Dashboard': { primary: '#0891b2', accent: '#06b6d4' }
    };
    
    return colorMap[category] || { primary: '#1e40af', accent: '#3b82f6' };
  };
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
          {featuredProjects.map((project, index) => {
            const colors = getCategoryColors(project.category);
            
            return (
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
                    <div 
                      className="absolute inset-0 bg-gradient-to-br flex items-center justify-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`
                      }}
                    >
                      <div className="text-center">
                        <div 
                          className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center"
                          style={{ backgroundColor: colors.primary }}
                        >
                          <span className="text-white text-2xl font-bold">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-[var(--neutral-700)] font-medium">{project.title}</p>
                        <p className="text-sm text-[var(--neutral-500)]">{project.category}</p>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Link href={`/portfolio/${project.slug}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/30 transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Case Study
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 lg:p-8">
                    {/* Category Badge */}
                    <div 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
                      style={{ 
                        backgroundColor: `${colors.primary}15`,
                        color: colors.primary
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

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[var(--neutral-100)] text-[var(--neutral-700)] text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-[var(--neutral-100)] text-[var(--neutral-500)] text-sm rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center font-semibold transition-colors duration-200 group-hover:text-[var(--primary)]"
                        style={{ color: colors.primary }}
                      >
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>

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
          <p className="text-[var(--neutral-600)] mb-8 text-lg">
            Want to see more of our work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
            <span className="text-[var(--neutral-400)] hidden sm:block">or</span>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

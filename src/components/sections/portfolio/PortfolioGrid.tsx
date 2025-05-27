"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Filter } from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import { type PortfolioProject } from "@/data/portfolio";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-32 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--neutral-900)] mb-6">
            Our
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across Dubai transform their digital presence 
            with innovative solutions and exceptional results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-[var(--neutral-600)] mb-4 sm:mb-0">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "bg-white text-[var(--neutral-700)] hover:bg-[var(--neutral-100)] border border-[var(--neutral-200)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 bg-[var(--neutral-200)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-[var(--neutral-400)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--neutral-700)] mb-2">
              No projects found
            </h3>
            <p className="text-[var(--neutral-500)]">
              Try selecting a different category or view all projects.
            </p>
          </motion.div>
        )}

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-[var(--neutral-200)]"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "15+", label: "Industries Served" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-[var(--neutral-600)] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

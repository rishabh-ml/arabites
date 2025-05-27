"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { type PortfolioProject } from "@/data/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--neutral-200)] hover:border-[var(--primary)] transition-all duration-300 hover:shadow-xl"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[var(--neutral-100)] to-[var(--neutral-200)]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center"
        >
          {/* Placeholder for project image */}
          <div className="text-[var(--neutral-400)] text-center">
            <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl font-bold text-[var(--primary)]">
                {project.title.charAt(0)}
              </span>
            </div>
            <p className="text-sm">Project Preview</p>
          </div>
        </motion.div>

        {/* Overlay with quick actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.projectUrl && (
            <motion.a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          {project.duration && (
            <span className="text-xs text-[var(--neutral-500)]">
              {project.duration}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary)] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--neutral-600)] mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-[var(--neutral-100)] text-[var(--neutral-700)] px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-[var(--neutral-500)]">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Case Study Link */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center text-[var(--primary)] font-semibold group-hover:gap-2 transition-all"
        >
          View Case Study
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

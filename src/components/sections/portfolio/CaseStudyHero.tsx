"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { type PortfolioProject } from "@/data/portfolio";

interface CaseStudyHeroProps {
  project: PortfolioProject;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--neutral-900)] via-[var(--neutral-800)] to-[var(--primary)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, var(--secondary) 2px, transparent 2px),
                           radial-gradient(circle at 75% 25%, var(--accent) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div>
            {/* Category & Featured Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                {project.category}
              </span>
              {project.featured && (
                <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Project Meta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="flex items-center gap-3 text-white/80">
                <User className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-80">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-80">Duration</p>
                  <p className="font-semibold">{project.duration}</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              {project.projectUrl && (
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="group"
                >
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    View Live Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group border-white/30 text-white hover:bg-white hover:text-[var(--neutral-900)]"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    View Code
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Placeholder for main project image */}
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white/80">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-lg font-semibold">{project.title}</p>
                  <p className="text-sm opacity-80">{project.category}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
              </div>

              {/* Technology Stack Preview */}
              <div className="mt-6">
                <p className="text-white/60 text-sm mb-3">Built with:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-white/60 text-xs px-3 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-center"
          >
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-1 h-8 bg-white/30 rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

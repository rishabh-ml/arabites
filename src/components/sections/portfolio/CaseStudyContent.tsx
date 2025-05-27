"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Code, TrendingUp, CheckCircle } from "lucide-react";
import { type PortfolioProject } from "@/data/portfolio";

interface CaseStudyContentProps {
  project: PortfolioProject;
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const sections = [
    {
      id: "overview",
      title: "Project Overview",
      icon: Target,
      content: project.overview,
      color: "var(--primary)"
    },
    {
      id: "goals",
      title: "Goals & Objectives", 
      icon: Target,
      content: project.goals,
      color: "var(--secondary)"
    },
    {
      id: "solution",
      title: "Our Solution",
      icon: Lightbulb,
      content: project.solution,
      color: "var(--accent)"
    },
    {
      id: "results",
      title: "Results & Impact",
      icon: TrendingUp,
      content: project.results,
      color: "var(--primary)"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Images Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-gradient-to-br from-[var(--neutral-100)] to-[var(--neutral-200)] rounded-2xl overflow-hidden ${
                  index === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'
                }`}
              >
                {/* Placeholder for project screenshots */}
                <div className="w-full h-full flex items-center justify-center text-[var(--neutral-400)]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-[var(--primary)]">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm font-medium">
                      {index === 0 ? 'Main Interface' : `Screenshot ${index + 1}`}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Sections */}
        <div className="space-y-20">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isArray = Array.isArray(section.content);
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: section.color, opacity: 0.1 }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: section.color }}
                        />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)]">
                        {section.title}
                      </h2>
                    </div>

                    {isArray ? (
                      <ul className="space-y-4">
                        {(section.content as string[]).map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle 
                              className="w-5 h-5 mt-1 flex-shrink-0" 
                              style={{ color: section.color }}
                            />
                            <span className="text-lg text-[var(--neutral-700)] leading-relaxed">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-[var(--neutral-700)] leading-relaxed">
                        {section.content as string}
                      </p>
                    )}
                  </div>

                  {/* Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  >
                    <div className="relative bg-gradient-to-br from-[var(--neutral-50)] to-[var(--neutral-100)] rounded-2xl p-8 border border-[var(--neutral-200)]">
                      {/* Decorative background */}
                      <div 
                        className="absolute inset-0 opacity-5 rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at 30% 70%, ${section.color} 2px, transparent 2px)`,
                          backgroundSize: '40px 40px'
                        }}
                      />
                      
                      {/* Content visualization */}
                      <div className="relative z-10">
                        <div className="aspect-square max-w-sm mx-auto flex items-center justify-center">
                          <div 
                            className="w-24 h-24 rounded-3xl flex items-center justify-center mb-4"
                            style={{ backgroundColor: section.color, opacity: 0.1 }}
                          >
                            <Icon 
                              className="w-12 h-12"
                              style={{ color: section.color }}
                            />
                          </div>
                        </div>
                        
                        {/* Additional decorative elements */}
                        <div className="flex justify-center space-x-2 mt-8">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: section.color, opacity: 0.3 }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-[var(--neutral-200)]"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center">
                <Code className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)]">
                Technologies Used
              </h2>
            </div>
            <p className="text-lg text-[var(--neutral-600)] max-w-2xl mx-auto">
              We selected the best tools and technologies to deliver a robust, scalable solution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border border-[var(--neutral-200)] rounded-xl p-6 text-center hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-[var(--primary)]">
                    {tech.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--neutral-900)] text-sm">
                  {tech}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

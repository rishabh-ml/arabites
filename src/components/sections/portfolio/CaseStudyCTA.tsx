"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar, Star, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import PortfolioCard from "./PortfolioCard";
import { type PortfolioProject } from "@/data/portfolio";

interface CaseStudyCTAProps {
  relatedProjects: PortfolioProject[];
}

export default function CaseStudyCTA({ relatedProjects }: CaseStudyCTAProps) {
  const ctaFeatures = [
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Discuss your project vision with our experts"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Track record of successful project deliveries"
    },
    {
      icon: Shield,
      title: "Risk-Free Process",
      description: "Transparent timeline and budget planning"
    }
  ];

  return (
    <>
      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-[var(--neutral-50)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)] mb-4">
                Related Projects
              </h2>
              <p className="text-lg text-[var(--neutral-600)] max-w-2xl mx-auto">
                Explore more projects in this category to see our expertise in action.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 25%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
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
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Ready to Start
              <span className="block">Your Project?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Let's transform your vision into reality. Get a free consultation and discover 
              how we can help your business succeed in the digital landscape.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="group text-lg px-8 py-4"
              >
                <Link href="/contact">
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Start Your Project
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-[var(--primary)]"
              >
                <Link href="/portfolio">
                  <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  View More Projects
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {ctaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center pt-16 border-t border-white/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6" />
                <span className="font-semibold">5+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

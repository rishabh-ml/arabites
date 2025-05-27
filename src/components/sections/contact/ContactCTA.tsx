"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Zap
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get a response within 24 hours"
  },
  {
    icon: Shield,
    title: "No Risk Consultation",
    description: "Free initial consultation with no commitment"
  },
  {
    icon: Star,
    title: "Proven Results", 
    description: "5+ years delivering successful projects"
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most projects completed within agreed timeline"
  }
];

const alternativeActions = [
  {
    icon: Phone,
    title: "Call Us Directly",
    description: "Speak with our team right now",
    action: "+971 4 123 4567",
    href: "tel:+97141234567",
    color: "var(--primary)"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    description: "Quick questions via WhatsApp",
    action: "Start Chat",
    href: "https://wa.me/971501234567",
    color: "var(--secondary)"
  },
  {
    icon: Calendar,
    title: "Book a Meeting",
    description: "Schedule a detailed discussion",
    action: "Book Now",
    href: "/#contact",
    color: "var(--accent)"
  }
];

export default function ContactCTA() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px'
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
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your
            <span className="block text-transparent bg-gradient-to-r from-white via-[var(--accent)] to-white bg-clip-text">
              Digital Journey?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Don't let your competition get ahead. Contact us today for a free consultation 
            and discover how we can transform your digital presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-[var(--primary)] hover:bg-white/90 font-semibold px-8 py-4 rounded-full group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full"
            >
              View Our Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Prefer a Different Way to Connect?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alternativeActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.title}
                  href={action.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 block"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: action.color, opacity: 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {action.title}
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    {action.description}
                  </p>
                  <span className="inline-flex items-center text-white font-medium group-hover:gap-2 transition-all">
                    {action.action}
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              );            })}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Trusted by 100+ Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">5+ Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

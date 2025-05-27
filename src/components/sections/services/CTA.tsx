"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { 
  ArrowRight, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Mail,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const ctaFeatures = [
  {
    icon: Clock,
    title: "Free Consultation",
    description: "30-minute discovery call to discuss your project"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work directly with our senior developers"
  },
  {
    icon: CheckCircle,
    title: "No Commitment",
    description: "Explore your options with no strings attached"
  }
];

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a convenient time for a detailed discussion",
    action: "Schedule Now",
    href: "/#contact",
    color: "var(--primary)"
  },
  {
    icon: MessageCircle,
    title: "Start a Conversation", 
    description: "Send us a message with your project details",
    action: "Send Message",
    href: "/#contact",
    color: "var(--secondary)"
  },
  {
    icon: Phone,
    title: "Call Directly",
    description: "Speak with our team immediately",
    action: "Call Now",
    href: "tel:+971-50-123-4567",
    color: "var(--accent)"
  }
];

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[var(--neutral-900)] via-[var(--neutral-800)] to-[var(--neutral-900)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--secondary) 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] opacity-20"
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the growing number of Dubai businesses that trust Arabites to deliver 
            exceptional digital solutions that drive real results.
          </p>

          {/* CTA Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {ctaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <Icon className="w-5 h-5 text-[var(--secondary)]" />
                  <div className="text-left">
                    <div className="text-white font-medium text-sm">
                      {feature.title}
                    </div>
                    <div className="text-gray-300 text-xs">
                      {feature.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: method.color }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {method.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-6">
                  {method.description}
                </p>
                
                <Button
                  variant="outline"
                  href={method.href}
                  external={method.href.startsWith('tel:')}
                  className="w-full border-white/30 text-white hover:bg-white hover:text-[var(--neutral-900)] group"
                >
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="primary"
            href="/#contact"
            className="bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] hover:from-[var(--secondary-dark)] hover:to-[var(--accent)] text-white border-0 group text-lg px-12 py-6"
          >
            Start Your Project Today
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <p className="text-gray-400 text-sm mt-4">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@arabites.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+971 50 123 4567</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

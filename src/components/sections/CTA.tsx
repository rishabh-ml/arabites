"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Calendar, ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, white 2px, transparent 2px),
                           radial-gradient(circle at 80% 20%, white 2px, transparent 2px),
                           radial-gradient(circle at 40% 40%, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px, 40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full"
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
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your
              <span className="block">Digital Presence?</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create something amazing together. 
              Get a free consultation and see how we can help your business grow.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              href="https://wa.me/971501234567?text=Hi%20Arabites!%20I'm%20interested%20in%20discussing%20a%20project."
              external
              className="group bg-white text-[var(--primary)] hover:bg-[var(--neutral-100)] shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              href="#consultation"
              className="group border-white text-white hover:bg-white hover:text-[var(--primary)] shadow-xl hover:shadow-2xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <motion.a
              href="tel:+971501234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <Phone className="w-6 h-6 text-white mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <div className="text-white/80 text-sm">Call us</div>
                <div className="text-white font-semibold">+971 50 123 4567</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:hello@arabites.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-white mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <div className="text-white/80 text-sm">Email us</div>
                <div className="text-white font-semibold">hello@arabites.com</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">Free</div>
                <div className="text-white/80">Initial Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80">Satisfaction Guarantee</div>
              </div>
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium">We typically respond within 2 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

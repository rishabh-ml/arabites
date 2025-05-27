"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@arabites.agency",
    description: "Send us an email anytime",
    href: "mailto:hello@arabites.agency",
    color: "var(--primary)"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+971 50 123 4567",
    description: "Available Monday to Friday",
    href: "tel:+971501234567",
    color: "var(--secondary)"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    description: "Quick responses guaranteed",
    href: "https://wa.me/971501234567?text=Hi! I'm interested in your digital services.",
    color: "var(--accent)"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Dubai, UAE",
    description: "Business Bay District",
    href: "https://maps.google.com/?q=Dubai+Business+Bay",
    color: "var(--primary)"
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

const quickFacts = [
  { icon: Clock, text: "24-hour response time" },
  { icon: Users, text: "Dedicated project manager" },
  { icon: MessageCircle, text: "Free initial consultation" }
];

export default function ContactInfo() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--neutral-600)]">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-6 border border-[var(--neutral-200)] hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: method.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--neutral-900)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-[var(--neutral-700)] font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-[var(--neutral-500)]">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 border border-[var(--neutral-200)] mb-8"
        >
          <h3 className="font-bold text-[var(--neutral-900)] mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[var(--primary)]" />
            Business Hours
          </h3>
          <div className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-[var(--neutral-600)]">{schedule.day}</span>
                <span className="font-medium text-[var(--neutral-900)]">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--primary)]/10">
                  <Icon className="w-4 h-4 text-[var(--primary)]" />
                </div>
                <span className="text-[var(--neutral-600)]">{fact.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-xl text-white"
        >
          <h3 className="font-bold mb-2">Need Urgent Support?</h3>
          <p className="text-white/90 mb-4 text-sm">
            For existing clients with critical issues, reach out via WhatsApp for immediate assistance.
          </p>
          <Button
            variant="outline"
            href="https://wa.me/971501234567?text=URGENT: I need immediate support with my project."
            external
            className="border-white text-white hover:bg-white hover:text-[var(--primary)] text-sm"
          >
            Emergency WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

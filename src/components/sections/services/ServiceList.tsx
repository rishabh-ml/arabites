"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { 
  Globe, 
  Zap, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  BarChart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Responsive, high-performance websites tailored to your brand and business goals.",
    benefits: [
      "Mobile-first responsive design",
      "SEO optimization included",
      "Content management system",
      "Performance optimization"
    ],
    color: "var(--primary)",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Conversion-optimized landing pages designed to turn visitors into customers.",
    benefits: [
      "High-conversion design",
      "A/B testing ready",
      "Analytics integration",
      "Lead capture forms"
    ],
    color: "var(--secondary)",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software applications built to streamline your business operations.",
    benefits: [
      "Scalable architecture",
      "API integrations",
      "Database design",
      "Security best practices"
    ],
    color: "var(--accent)",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    benefits: [
      "Cross-platform compatibility",
      "Native performance",
      "App store optimization",
      "Push notifications"
    ],
    color: "var(--primary)",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Integration",
    description: "Complete e-commerce solutions with payment processing and inventory management.",
    benefits: [
      "Payment gateway integration",
      "Inventory management",
      "Order tracking system",
      "Customer accounts"
    ],
    color: "var(--secondary)",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: BarChart,
    title: "Admin Dashboards",
    description: "Powerful dashboards to monitor, analyze, and manage your business data.",
    benefits: [
      "Real-time analytics",
      "Custom reporting",
      "User management",
      "Data visualization"
    ],
    color: "var(--accent)",
    gradient: "from-cyan-500 to-teal-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function ServiceList() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
            Our
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              {" "}Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and deliver measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl border border-[var(--neutral-200)] hover:border-[var(--primary)] transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--neutral-100)] to-[var(--neutral-200)] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--neutral-600)] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--neutral-600)]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between text-left p-0 h-auto font-medium hover:bg-transparent"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--neutral-600)] mb-8">
            Don't see exactly what you need? We specialize in custom solutions.
          </p>
          <Button
            size="lg"
            variant="primary"
            href="/#contact"
            className="group"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

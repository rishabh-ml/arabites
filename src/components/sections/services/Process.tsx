"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  ClipboardList, 
  Palette, 
  Code, 
  Rocket, 
  HeartHandshake,
  ArrowRight
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into understanding your business goals, target audience, and technical requirements.",
    details: [
      "Business analysis & consultation",
      "Market research & competitor analysis", 
      "Technical feasibility assessment",
      "Project scope definition"
    ],
    color: "var(--primary)",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Strategic planning and architecture design to ensure your project is built on solid foundations.",
    details: [
      "Project timeline & milestones",
      "Technical architecture planning",
      "Resource allocation & team setup",
      "Risk assessment & mitigation"
    ],
    color: "var(--secondary)",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive user experiences and stunning visual designs that represent your brand.",
    details: [
      "User experience (UX) design",
      "User interface (UI) design",
      "Prototyping & wireframing",
      "Design system creation"
    ],
    color: "var(--accent)",
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Code,
    title: "Development", 
    description: "Building your solution using modern technologies and best practices for optimal performance.",
    details: [
      "Frontend & backend development",
      "Database design & implementation",
      "API development & integration",
      "Quality assurance & testing"
    ],
    color: "var(--primary)",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploying your solution to production with comprehensive testing and performance optimization.",
    details: [
      "Production deployment",
      "Performance optimization",
      "Security implementation",
      "Go-live support & monitoring"
    ],
    color: "var(--secondary)",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Ongoing maintenance, updates, and support to ensure your solution continues to perform excellently.",
    details: [
      "24/7 technical support",
      "Regular updates & maintenance",
      "Performance monitoring",
      "Feature enhancements"
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

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-white">
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
            Our Proven
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              {" "}Process
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto">
            A streamlined approach that ensures your project is delivered on time, within budget, 
            and exceeding expectations at every step.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] rounded-full opacity-20" />

          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className={`relative flex items-center mb-16 lg:mb-24 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-[var(--neutral-200)] hover:shadow-xl transition-shadow duration-300">
                    {/* Step Number */}
                    <div className="flex items-center mb-4">
                      <div 
                        className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold mr-3"
                        style={{ backgroundColor: step.color }}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[var(--neutral-900)]">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--neutral-600)] mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <ArrowRight 
                            className="w-4 h-4 mt-0.5 flex-shrink-0" 
                            style={{ color: step.color }}
                          />
                          <span className="text-sm text-[var(--neutral-600)]">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon - Center */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-white border-4 shadow-lg z-10"
                     style={{ borderColor: step.color }}>
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: step.color }}
                  />
                </div>

                {/* Mobile Icon */}
                <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full mb-4"
                     style={{ backgroundColor: step.color }}>
                  <Icon className="w-6 h-6 text-white" />
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
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss your requirements and create a custom timeline for your success.
            </p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-3 bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--neutral-100)] transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

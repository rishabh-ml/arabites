"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Star, MessageCircle, ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "100% project success rate with clients across Dubai's most competitive industries"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timeline and consistently deliver projects when promised"
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Clear communication, regular updates, and no hidden surprises"
  },
  {
    icon: Zap,
    title: "Future-Ready Solutions",
    description: "Built with scalability and emerging technologies in mind"
  }
];

const testimonials = [
  {
    quote: "Arabites transformed our real estate platform beyond our expectations. Their attention to detail and understanding of the Dubai market is exceptional.",
    author: "Khalid Al-Mansouri",
    role: "CEO, Dubai Properties Group",
    rating: 5,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    quote: "The team's expertise in e-commerce solutions helped us increase our online sales by 300% within the first quarter. Outstanding work!",
    author: "Fatima Al-Zahra",
    role: "Founder, Luxury Boutique Dubai",
    rating: 5,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    quote: "Professional, reliable, and innovative. They delivered our fintech platform on time and exceeded all our technical requirements.",
    author: "James Richardson",
    role: "CTO, Dubai Financial Solutions",
    rating: 5,
    gradient: "from-green-500 to-teal-600"
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, var(--primary) 2px, transparent 2px),
                           radial-gradient(circle at 70% 30%, var(--secondary) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Arabites?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            Beyond technical expertise, we bring a deep understanding of Dubai's business landscape 
            and a commitment to your success that goes far beyond project delivery.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[var(--neutral-900)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--neutral-600)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--neutral-900)] mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-[var(--neutral-600)] max-w-2xl mx-auto">
              Don't just take our word for it—hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full relative overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[var(--secondary)] fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-[var(--neutral-700)] leading-relaxed mb-6 text-center italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="font-semibold text-[var(--neutral-900)]">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-[var(--neutral-600)]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, white 2px, transparent 2px),
                                 radial-gradient(circle at 80% 20%, white 2px, transparent 2px)`,
                backgroundSize: '60px 60px'
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Join the growing list of successful Dubai businesses that trust Arabites 
                to bring their digital visions to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  href="https://wa.me/971501234567?text=Hi%20Arabites!%20I'm%20interested%20in%20discussing%20a%20project."
                  external
                  className="group bg-white text-[var(--primary)] hover:bg-[var(--neutral-100)] shadow-xl hover:shadow-2xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  size="lg"
                  href="/#contact"
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

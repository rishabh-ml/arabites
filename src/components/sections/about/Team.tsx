"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications. Passionate about creating digital solutions that drive business growth.",
    image: "/team/ahmed.jpg", // Placeholder - will be replaced
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    social: {
      linkedin: "https://linkedin.com/in/ahmed-alrashid",
      github: "https://github.com/ahmed-alrashid",
      email: "ahmed@arabites.com"
    },
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Sarah Mitchell",
    role: "UI/UX Design Lead",
    bio: "Creative designer with a keen eye for user experience and modern aesthetics. Specializes in creating intuitive interfaces that users love.",
    image: "/team/sarah.jpg", // Placeholder - will be replaced
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/sarah-mitchell",
      twitter: "https://twitter.com/sarahdesigns",
      email: "sarah@arabites.com"
    },
    gradient: "from-pink-500 to-rose-600"
  },
  {
    name: "Omar Hassan",
    role: "Backend Architect",
    bio: "Systems architect focused on building robust, scalable backend solutions. Expert in cloud infrastructure and database optimization.",
    image: "/team/omar.jpg", // Placeholder - will be replaced
    skills: ["Python", "Docker", "PostgreSQL", "Microservices"],
    social: {
      linkedin: "https://linkedin.com/in/omar-hassan",
      github: "https://github.com/omar-hassan",
      email: "omar@arabites.com"
    },
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

export default function Team() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[var(--neutral-50)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--neutral-900)] mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            The passionate professionals behind every successful project. Each bringing unique expertise 
            and a shared commitment to excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--neutral-200)] hover:border-[var(--primary)]/20 h-full relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg">
                      <div className="w-full h-full bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-[var(--neutral-900)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[var(--primary)] font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-[var(--neutral-600)] leading-relaxed mb-6 group-hover:text-[var(--neutral-700)] transition-colors duration-300">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[var(--neutral-100)] text-[var(--neutral-700)] rounded-full text-sm font-medium group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center hover:bg-[var(--neutral-800)] hover:text-white transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.email && (
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-[var(--neutral-100)] rounded-lg flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[var(--primary)]" />
                <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[var(--secondary)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-3xl p-8 lg:p-12 border border-[var(--neutral-200)]">
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--neutral-900)] mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-[var(--neutral-600)] mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating 
              exceptional digital experiences. Let's build the future together.
            </p>
            <motion.a
              href="mailto:careers@arabites.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

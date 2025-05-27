"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-[var(--neutral-600)] mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours with a personalized response.
          </p>
          <Button
            variant="primary"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--neutral-900)] mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-[var(--neutral-600)]">
            Tell us about your vision and we'll help bring it to life.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <FormInput
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange("fullName")}
            error={errors.fullName}
            required
            placeholder="Enter your full name"
          />

          <FormInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            error={errors.email}
            required
            placeholder="Enter your email address"
          />

          <FormInput
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            placeholder="Enter your phone number (optional)"
          />

          <FormInput
            label="Message"
            type="textarea"
            value={formData.message}
            onChange={handleInputChange("message")}
            error={errors.message}
            required
            placeholder="Tell us about your project, goals, and any specific requirements..."
            rows={6}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-[var(--neutral-500)] text-center"
          >
            By submitting this form, you agree to our privacy policy and terms of service.
          </motion.p>
        </motion.form>
      </div>
    </section>
  );
}

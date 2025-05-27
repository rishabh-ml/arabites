"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormInputProps {
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ 
    label, 
    type = "text", 
    value, 
    onChange, 
    error, 
    placeholder, 
    required, 
    rows = 4,
    className,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value.length > 0;
    const shouldLabelFloat = isFocused || hasValue;

    const baseInputClasses = cn(
      "w-full px-4 pt-6 pb-2 text-base bg-white border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]",
      error 
        ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
        : "border-[var(--neutral-300)] hover:border-[var(--neutral-400)]",
      className
    );

    const labelClasses = cn(
      "absolute left-4 text-[var(--neutral-500)] transition-all duration-200 pointer-events-none",
      shouldLabelFloat 
        ? "top-2 text-xs text-[var(--primary)]" 
        : "top-4 text-base"
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange(e.target.value);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative">
          {type === "textarea" ? (
            <textarea
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              value={value}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={rows}
              className={cn(baseInputClasses, "resize-none min-h-[120px]")}
              placeholder={shouldLabelFloat ? placeholder : ""}
              required={required}
              {...props}
            />
          ) : (
            <input
              ref={ref as React.RefObject<HTMLInputElement>}
              type={type}
              value={value}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={baseInputClasses}
              placeholder={shouldLabelFloat ? placeholder : ""}
              required={required}
              {...props}
            />
          )}
          
          <label className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 mt-2 text-red-500 text-sm"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </motion.div>
        )}
      </motion.div>
    );
  }
);

FormInput.displayName = "FormInput";
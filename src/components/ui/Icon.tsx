"use client";

import { LucideIcon, LucideProps } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, 'ref'> {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5", 
  lg: "w-6 h-6",
  xl: "w-8 h-8",
  "2xl": "w-10 h-10"
};

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, className, size = "md", ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        className={cn(sizeMap[size], className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
export type { IconProps };

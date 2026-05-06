"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  className,
  href,
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-luxury relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gold text-cream hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20",
    secondary: "bg-charcoal text-cream hover:bg-charcoal-light",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-cream",
    ghost: "text-gold hover:text-gold-dark hover:bg-gold/5",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    default: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {};

  return (
    <Component
      type={href ? undefined : type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...linkProps}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </Component>
  );
}

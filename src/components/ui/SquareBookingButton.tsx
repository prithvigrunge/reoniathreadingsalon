"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SquareBookingButtonProps {
  className?: string;
  variant?: "gold" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function SquareBookingButton({
  className,
  variant = "gold",
  size = "md",
  children,
}: SquareBookingButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-luxury cursor-pointer";
  
  const variants = {
    gold: "bg-gold text-cream hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 border-none",
    dark: "bg-charcoal text-cream hover:bg-charcoal-light border-none",
    outline: "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-cream",
  };

  const sizes = {
    sm: "h-9 px-5 text-xs tracking-wider",
    md: "h-10 px-7 text-sm",
    lg: "h-12 px-9 text-base",
  };

  return (
    <a
      href={siteConfig.booking.squareBookingUrl}
      target="_top"
      rel="nofollow"
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "rounded-lg uppercase font-medium",
        className
      )}
      style={{
        fontFamily: "'Square Market', sans-serif",
        letterSpacing: "1px",
        lineHeight: "1",
      }}
    >
      {children || siteConfig.booking.buttonText}
    </a>
  );
}

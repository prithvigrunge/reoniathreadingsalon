"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "mb-16 md:mb-20",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "block mb-4 text-xs font-medium tracking-[0.3em] uppercase",
            light ? "text-gold-light/80" : "text-gold"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-display-2 font-medium",
          light ? "text-cream" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-6 h-px w-24 bg-gradient-to-r from-gold to-gold-light",
          alignment === "center" && "mx-auto",
          alignment === "right" && "ml-auto"
        )}
      />
    </motion.div>
  );
}

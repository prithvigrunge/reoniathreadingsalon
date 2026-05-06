"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-gold font-light tracking-wide">
                {siteConfig.brand.name}
              </h1>
              <p className="mt-2 text-cream/60 text-sm tracking-[0.4em] uppercase font-light">
                {siteConfig.brand.tagline}
              </p>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            />
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-8 text-cream/40 text-xs tracking-widest uppercase"
            >
              Loading Experience
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

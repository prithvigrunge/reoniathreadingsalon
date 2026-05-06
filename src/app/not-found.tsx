"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(201, 169, 110) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/50 to-transparent" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Error Code */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="block font-serif text-[8rem] md:text-[12rem] text-gold/20 font-light leading-none mb-4"
          >
            404
          </motion.span>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-display-2 text-cream font-light mb-6"
          >
            This experience could not be found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="text-cream/50 text-lg font-light mb-12 max-w-md mx-auto"
          >
            The page you seek appears to have vanished like morning mist. 
            Allow us to guide you back to elegance.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <Button href="/" variant="primary" size="lg">
              Return to Concierge
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}

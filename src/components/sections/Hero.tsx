"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={siteConfig.brand.video} type="video/mp4" />
        </video>
        {/* Gradient Overlays for Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-gold font-medium">
            Welcome to
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="font-serif text-display-1 text-cream font-light mb-6"
        >
          {siteConfig.brand.name}{" "}
          <span className="block text-gold font-normal italic">
            {siteConfig.brand.tagline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto text-cream/80 text-lg md:text-xl font-light leading-relaxed mb-10"
        >
          Experience the art of precision beauty in the heart of Palo Alto. 
          Where ancient techniques meet modern luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#booking" variant="primary" size="lg">
            {siteConfig.booking.buttonText}
          </Button>
          <Button href="#services" variant="outline" size="lg">
            Explore Services
          </Button>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-cream/50 hover:text-gold transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Discover</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}

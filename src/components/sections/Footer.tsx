"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/10 py-16 relative">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-serif text-4xl text-gold font-light">
              {siteConfig.brand.name}
            </h3>
            <p className="text-cream/40 text-xs tracking-[0.4em] uppercase mt-1">
              {siteConfig.brand.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            {siteConfig.navigation.filter(n => !n.isCta).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-cream/50 hover:text-gold transition-colors text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* Contact Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream/40 text-sm mb-10"
          >
            <span>{siteConfig.contact.address}</span>
            <span className="mx-3 text-gold/30">|</span>
            <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gold transition-colors">
              {siteConfig.contact.phone}
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-10" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-cream/30 text-xs tracking-wider"
          >
            © {new Date().getFullYear()} {siteConfig.brand.fullName}. All rights reserved.
          </motion.p>
        </div>
      </Container>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

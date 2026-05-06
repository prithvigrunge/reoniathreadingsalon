"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-charcoal/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col items-start group">
              <span className="font-serif text-3xl md:text-4xl text-gold font-medium tracking-wide group-hover:text-gold-light transition-colors">
                {siteConfig.brand.name}
              </span>
              <span className="text-[0.65rem] text-cream/70 tracking-[0.3em] uppercase font-light -mt-1">
                {siteConfig.brand.tagline}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative text-sm tracking-wide transition-colors duration-300 group",
                    item.isCta
                      ? "hidden"
                      : "text-cream/80 hover:text-gold"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="tracking-wide">{siteConfig.contact.phone}</span>
              </a>
              <Button href="#booking" variant="primary" size="sm">
                {siteConfig.booking.buttonText}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-cream hover:text-gold transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-serif text-3xl tracking-wide transition-colors",
                    item.isCta ? "text-gold text-4xl" : "text-cream hover:text-gold"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

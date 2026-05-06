"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const COOKIE_CONSENT_KEY = "ronia-cookie-consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to avoid synchronous setState in effect
    const frameId = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Check if user has already consented
    const hasConsented = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsented) {
      // Show banner after 2-second delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handlePreferences = () => {
    // For now, just accept. In a full implementation, this would open a modal
    localStorage.setItem(COOKIE_CONSENT_KEY, "custom");
    setIsVisible(false);
  };

  // Don't render anything during SSR or before mount
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl"
        >
          <div className="bg-charcoal/90 backdrop-blur-xl rounded-full px-6 py-4 border border-gold/20 shadow-2xl shadow-charcoal/50">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Message */}
              <p className="text-cream/80 text-sm text-center sm:text-left flex-1">
                We use strictly necessary cookies to curate your experience and optimize our scheduling system.
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  onClick={handlePreferences}
                  variant="ghost"
                  size="sm"
                  className="text-cream/60 hover:text-gold whitespace-nowrap"
                >
                  Preferences
                </Button>
                <Button
                  onClick={handleAccept}
                  variant="primary"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

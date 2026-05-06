"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function SquareWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!widgetRef.current) return;

    // Check if script already exists
    const existingScript = document.getElementById("sq-appointments-script");
    if (existingScript) {
      // Use requestAnimationFrame to avoid sync setState
      requestAnimationFrame(() => {
        setIsLoaded(true);
      });
      return;
    }

    // Create and inject the Square script
    const script = document.createElement("script");
    script.id = "sq-appointments-script";
    script.src = siteConfig.booking.squareWidgetUrl;
    script.async = true;
    
    script.onload = () => {
      // Give Square time to render
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };
    
    script.onerror = () => {
      setHasError(true);
    };

    // Insert script into the widget container
    widgetRef.current.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const scriptToRemove = document.getElementById("sq-appointments-script");
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  if (hasError) {
    return (
      <div className="p-8 bg-cream-dark rounded-lg border border-gold/20 text-center">
        <p className="text-charcoal-light mb-4">Unable to load booking widget.</p>
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="text-gold hover:text-gold-dark underline"
        >
          Please call us to book: {siteConfig.contact.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="relative bg-cream rounded-xl border border-gold/20 p-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
      
      {/* Loading State */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-cream z-10"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            <span className="text-sm text-charcoal-light font-medium">Loading booking system...</span>
          </div>
        </motion.div>
      )}

      {/* Square Widget Container */}
      <div 
        ref={widgetRef}
        className="relative min-h-[700px] bg-cream rounded-lg overflow-hidden"
      />
    </div>
  );
}

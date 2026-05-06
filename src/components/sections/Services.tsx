"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { onImageError } from "@/lib/imageUtils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Our Expertise"
          title="Signature Treatments"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {siteConfig.services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-cream-dark rounded-xl overflow-hidden luxury-shadow"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => onImageError(e, service.fallbackUrl)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm text-cream px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                    {service.priceRange}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-charcoal-light text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-xl transition-colors duration-500 pointer-events-none" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

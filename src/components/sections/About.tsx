"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import { onImageError } from "@/lib/imageUtils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Fallback URL for about image
const ABOUT_FALLBACK_URL = "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&q=80";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-blush/30 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <AnimatedSection direction="right" className="relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-xl" />
              <div className="absolute -inset-8 border border-gold/10 rounded-xl" />
              
              {/* Main Image */}
              <motion.div style={{ y: imageY }} className="relative aspect-[3/4] rounded-lg overflow-hidden luxury-shadow">
                <Image
                  src="/images/about-salon.jpg"
                  alt="Ronia Threading Salon Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={(e) => onImageError(e, ABOUT_FALLBACK_URL)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-cream p-6 rounded-lg luxury-shadow border border-gold/20"
              >
                <div className="text-center">
                  <span className="block font-serif text-4xl text-gold font-medium">15+</span>
                  <span className="text-xs text-charcoal-light tracking-wider uppercase">Years Experience</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content Column */}
          <AnimatedSection direction="left">
            <SectionHeading
              subtitle="Our Story"
              title={siteConfig.about.headline}
              alignment="left"
            />

            <div className="space-y-6 mb-10">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-charcoal-light leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-6 border-t border-gold/20"
            >
              <p className="font-script text-3xl text-gold">{siteConfig.about.signature}</p>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-10">
              {["Licensed by CA State", "Certified Beauticians", "Family Owned"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm text-charcoal font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

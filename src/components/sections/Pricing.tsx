"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(201, 169, 110) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Investment"
          title="Our Menu"
          alignment="center"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {siteConfig.pricing.map((category, catIndex) => (
            <AnimatedSection
              key={category.category}
              delay={catIndex * 0.2}
              direction={catIndex % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-charcoal-light/50 backdrop-blur-sm rounded-xl p-8 border border-gold/10 hover:border-gold/30 transition-colors duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-gold to-transparent" />
                  <h3 className="font-serif text-2xl text-gold font-medium tracking-wide">
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-gold to-transparent" />
                </div>

                {/* Service List */}
                <div className="space-y-5">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 + 0.3 }}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-cream/90 font-light flex-shrink-0 group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className="flex-1 border-b border-dotted border-cream/20 group-hover:border-gold/40 transition-colors duration-300" />
                      <span className="font-serif text-gold text-lg font-medium flex-shrink-0">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-cream/40 text-sm mt-12 tracking-wide"
        >
          * Prices are subject to change based on hair length, density, and treatment complexity.
        </motion.p>
      </Container>
    </section>
  );
}

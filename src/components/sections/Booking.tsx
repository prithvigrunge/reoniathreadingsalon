"use client";

import { motion } from "framer-motion";
import { Calendar, Shield, Award, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SquareWidget from "@/components/ui/SquareWidget";
import AnimatedSection from "@/components/ui/AnimatedSection";

const trustBadges = [
  { icon: Shield, label: "Licensed Professionals" },
  { icon: Award, label: "State Certified" },
  { icon: Clock, label: "Flexible Hours" },
  { icon: Calendar, label: "Instant Confirmation" },
];

export default function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-cream relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Content */}
          <AnimatedSection direction="right">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                subtitle="Appointments"
                title={siteConfig.booking.sectionTitle}
                alignment="left"
              />
              
              <p className="text-charcoal-light text-lg leading-relaxed mb-10 max-w-md">
                {siteConfig.booking.sectionSubtitle}
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <badge.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-sm text-charcoal font-medium">{badge.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="p-6 bg-cream-dark rounded-xl border border-gold/10">
                <p className="text-sm text-charcoal-light mb-2">Prefer to call?</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-serif text-2xl text-gold hover:text-gold-dark transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
                <p className="text-xs text-charcoal-light mt-2">
                  {siteConfig.contact.hours[0]?.day}: {siteConfig.contact.hours[0]?.time}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Square Widget */}
          <AnimatedSection direction="left" delay={0.2}>
            <SquareWidget />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

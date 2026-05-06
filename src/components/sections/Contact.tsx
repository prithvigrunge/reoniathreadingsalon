"use client";

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgb(201, 169, 110) 25%, transparent 25%), linear-gradient(-45deg, rgb(201, 169, 110) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgb(201, 169, 110) 75%), linear-gradient(-45deg, transparent 75%, rgb(201, 169, 110) 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          subtitle="Visit Us"
          title="Experience Ronia"
          alignment="center"
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <AnimatedSection direction="right">
            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-2">Location</h4>
                  <p className="text-cream/60 leading-relaxed">{siteConfig.contact.address}</p>
                  <Button
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                    variant="ghost"
                    size="sm"
                    external
                    className="mt-2"
                  >
                    Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-2">Phone</h4>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-cream/60 hover:text-gold transition-colors text-lg"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-2">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-cream font-medium mb-3">Business Hours</h4>
                  <div className="space-y-2">
                    {siteConfig.contact.hours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-cream/60 max-w-xs">
                        <span>{schedule.day}</span>
                        <span className="text-gold">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-cream/10">
                <h4 className="text-cream font-medium mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {siteConfig.contact.social.instagram && (
                    <a
                      href={siteConfig.contact.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                  )}
                  {siteConfig.contact.social.facebook && (
                    <a
                      href={siteConfig.contact.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-gold/20 luxury-shadow">
              <iframe
                src={siteConfig.contact.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ronia Threading Salon Location"
                className="absolute inset-0"
              />
              {/* Overlay for styling */}
              <div className="absolute inset-0 pointer-events-none border-4 border-charcoal/50 rounded-xl" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

import { SiteConfig } from "@/types";
import { pricingData } from "@/data/pricing";
import { servicesData } from "@/data/services";

// Transform pricing data from Record format to array format for components
const transformedPricing = Object.entries(pricingData).map(([, value]) => ({
  category: value.label,
  items: value.items,
}));

export const siteConfig: SiteConfig = {
  brand: {
    name: "Ronia",
    tagline: "Threading Salon",
    fullName: "Ronia Threading Salon",
    logo: "/images/logo.png",
    video: "/images/hero-cinematic.mp4",
  },
  contact: {
    phone: "(408) 666-4106",
    email: "roniathreadingsalon@gmail.com",
    address: "5645 Cottle Rd, San Jose, CA 95123-3625",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1234567890123!2d-121.7833!3d37.2333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e2e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2s5645%20Cottle%20Rd%2C%20San%20Jose%2C%20CA%2095123!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    hours: [
      { day: "Monday - Sunday", time: "11:00 AM - 7:00 PM" },
    ],
    social: {
      instagram: "https://instagram.com/roniasalon",
      facebook: "https://facebook.com/roniasalon",
      yelp: "https://yelp.com/biz/ronia-threading-salon-san-jose",
    },
  },
  navigation: [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Visit Us", href: "#contact" },
    { label: "Book Now", href: "#booking", isCta: true },
  ],
  booking: {
    squareWidgetUrl: "https://square.site/appointments/buyer/widget/ny0evqb77i36hz/LK5899A598Y70.js",
    squareBookingUrl: "https://app.squareup.com/appointments/book/ny0evqb77i36hz/LK5899A598Y70/start",
    buttonText: "Book Appointment",
    sectionTitle: "Reserve Your Experience",
    sectionSubtitle: "Secure your preferred time with our certified beauticians through our integrated booking system.",
  },
  services: servicesData,
  pricing: transformedPricing,
  about: {
    headline: "A Legacy of Precision & Care",
    paragraphs: [
      "Nestled in the heart of San Jose, Ronia Threading Salon represents the pinnacle of beauty craftsmanship. As a family-owned establishment managed by state-certified beauticians, we have cultivated an environment where luxury meets expertise.",
      "It is our profound honor to welcome you as our guest. Our unwavering commitment is to deliver the highest caliber of service within an atmosphere of serene elegance. We do not merely perform services—we curate experiences that leave you transformed.",
      "Licensed by the State of California, we specialize in the ancient art of eyebrow threading, precision body waxing, therapeutic facials, and bespoke hair design. Every treatment is executed with meticulous attention to detail, ensuring results that exceed expectation.",
    ],
    signature: "— The Ronia Family",
  },
  seo: {
    title: "Ronia Threading Salon | Luxury Beauty & Precision Care in San Jose",
    description: "Experience San Jose's premier threading, waxing, and facial salon. Family-owned, state-certified, and dedicated to perfection. Book your appointment today.",
    keywords: [
      "threading salon San Jose",
      "eyebrow threading",
      "luxury waxing",
      "facials San Jose",
      "beauty salon California",
    ],
    ogImage: "/images/og-image.jpg",
  },
  analytics: {
    gtmId: "GTM-XXXXXXX",
  },
} as const;

export type SiteConfigType = typeof siteConfig;

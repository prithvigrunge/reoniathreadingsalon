export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackUrl: string;
  priceRange?: string;
}

/**
 * Ronia Threading Salon - Services
 * 
 * This file contains all service categories displayed on the website.
 * Order matters: Threading and Waxing (more services) are side by side,
 * Facial (fewer services) is at the end.
 */

export const servicesData: Service[] = [
  {
    id: "threading",
    title: "Threading",
    description: "Precision eyebrow shaping and facial hair removal using traditional threading technique. Gentle on skin, perfect for sensitive areas.",
    image: "/images/threading.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    priceRange: "From $7",
  },
  {
    id: "waxing",
    title: "Waxing",
    description: "Full body waxing with premium, gentle products for smooth lasting results. From bikini to full leg, we've got you covered.",
    image: "/images/waxing.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
    priceRange: "From $15",
  },
  {
    id: "facial",
    title: "Facial",
    description: "Rejuvenating herbal facial treatment for radiant, glowing skin. Customized to your skin type using natural ingredients.",
    image: "/images/facials.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    priceRange: "$60",
  },
];

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fallbackUrl: string;
  priceRange?: string;
}

export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingCategory {
  category: string;
  items: PricingItem[];
}

export interface BusinessHours {
  day: string;
  time: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  yelp?: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    fullName: string;
    logo: string;
    video: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    mapUrl: string;
    hours: BusinessHours[];
    social: SocialLinks;
  };
  navigation: NavItem[];
  booking: {
    squareWidgetUrl: string;
    squareBookingUrl: string;
    buttonText: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  services: ServiceItem[];
  pricing: PricingCategory[];
  about: {
    headline: string;
    paragraphs: string[];
    signature: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  analytics: {
    gtmId: string;
  };
}

export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingCategory {
  label: string;
  items: PricingItem[];
}

/**
 * Ronia Threading Salon - Service Pricing
 * 
 * This file contains all service offerings and prices.
 * Order: Threading and Waxing (more services) side by side, Facial at end.
 * Edit this file to update prices or add/remove services.
 */

export const pricingData = {
  threading: {
    label: "Threading",
    items: [
      { name: "Eye Brow Threading", price: "$14" },
      { name: "Upper Lip", price: "$7" },
      { name: "Full Face", price: "$40" },
      { name: "Eyebrow and Upper Lip", price: "$23" },
      { name: "Eyebrow, Upper Lip & Chin", price: "$30" },
      { name: "Side Burn", price: "$10" },
      { name: "Eyebrow, Upper Lip, Chin and Lower Lip", price: "$30" },
    ],
  },
  waxing: {
    label: "Waxing",
    items: [
      { name: "Bikini Wax", price: "$40" },
      { name: "Full Leg Waxing", price: "$35" },
      { name: "Half Leg", price: "$25" },
      { name: "Full Arms", price: "$35" },
      { name: "Full Leg + Full Arm + Under Arm", price: "$70" },
      { name: "Full Arm + Half Leg + Under Arm", price: "$60" },
      { name: "Under Arm", price: "$15" },
      { name: "Half Arm", price: "$25" },
      { name: "Full Arm + 3/4 Leg + Under Arm", price: "$60" },
      { name: "Full Face", price: "$40" },
    ],
  },
  facial: {
    label: "Facial",
    items: [
      { name: "Herbal Facial", price: "$60" },
    ],
  },
} satisfies Record<string, PricingCategory>;

export type PricingDataType = typeof pricingData;

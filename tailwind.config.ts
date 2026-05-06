import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E5D4A1",
          dark: "#A0834B",
          muted: "#D4C4A0",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EBE3",
          deeper: "#E8E0D5",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2D2D2D",
          lighter: "#3D3D3D",
        },
        blush: "#F5E6E0",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        script: ["var(--font-allura)", "Allura", "cursive"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-3": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

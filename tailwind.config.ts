import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF7F4",
        foreground: "#231B21",
        muted: "#5E4E59",
        card: {
          DEFAULT: "#FFFFFF",
          border: "#EADFE5",
        },
        onion: {
          50: "#FAF3F7",
          100: "#F4E5EF",
          200: "#E9CDDF",
          300: "#D6A6C5",
          400: "#BA77A3",
          500: "#984C81",
          600: "#7A3766",
          700: "#5B2A4E", // Brand primary
          800: "#49223E",
          900: "#381B30",
          950: "#220D1D",
        },
        status: {
          paid: {
            text: "#1F6B45",
            bg: "#E6F3EA",
          },
          pending: {
            text: "#8A5A00",
            bg: "#FFF1D6",
          },
          overdue: {
            text: "#A12A2A",
            bg: "#FBE5E5",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

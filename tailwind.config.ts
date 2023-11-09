import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-400px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(-400px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(400px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          from: {
            opacity: "0",
            transform: "translateX(400px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.1s ease-in-out ",
        "fade-in-down": "fade-in-down 1s ease-out",
        "fade-in-right": "fade-in-right 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-in-left": "fade-in-left 1s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem", // px-6
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1280px", // max-w-7xl
      },
    },

    extend: {
      // COLORS
      colors: {
        primary: {
          DEFAULT: "#0F4FAF",
          dark: "#0C3D8B",
        },

        secondary: "#245DDB",
        accent: "#D9653B",

        background: "#F7F9FC",
        surface: "#FFFFFF",

        text: {
          DEFAULT: "#10243E",
          muted: "#6B7A90",
        },

        border: "#E2E8F0",
      },

      // TYPOGRAPHY
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      // SHADOWS
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.05)", // shadow-sm
        elevated:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // shadow-xl
      },

      // SPACING TOKENS
      spacing: {
        section: "5rem", // 80px = py-20
      },

      // BORDER RADIUS
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      // TRANSITIONS
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // ANIMATIONS
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
    },
  },

  plugins: [],
};
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },

      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      /*
      |--------------------------------------------------------------------------
      | COLORS
      |--------------------------------------------------------------------------
      */

      colors: {
        brand: {
          primary: "hsl(var(--color-brand-primary))",
          dark: "hsl(var(--color-brand-primary-dark))",
          light: "hsl(var(--color-brand-primary-light))",
        },

        surface: {
          DEFAULT: "hsl(var(--color-surface))",
          elevated: "hsl(var(--color-surface-elevated))",
          glass: "hsl(var(--color-surface-glass))",
          "glass-strong": "hsl(var(--color-surface-glass-strong))",
        },

        text: {
          primary: "hsl(var(--color-text-primary))",
          secondary: "hsl(var(--color-text-secondary))",
          muted: "hsl(var(--color-text-muted))",
        },

        border: {
          DEFAULT: "hsl(var(--color-border))",
          strong: "hsl(var(--color-border-strong))",
        },
      },

      /*
      |--------------------------------------------------------------------------
      | TYPOGRAPHY
      |--------------------------------------------------------------------------
      */

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
      },

      /*
      |--------------------------------------------------------------------------
      | SPACING
      |--------------------------------------------------------------------------
      */

      spacing: {
        section: "5rem",
        content: "72rem",
      },

      /*
      |--------------------------------------------------------------------------
      | RADIUS
      |--------------------------------------------------------------------------
      */

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      /*
      |--------------------------------------------------------------------------
      | SHADOWS
      |--------------------------------------------------------------------------
      */

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        card: "var(--shadow-card)",
      },

      /*
      |--------------------------------------------------------------------------
      | MOTION
      |--------------------------------------------------------------------------
      */

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(8px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.96)",
          },

          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        scaleIn: "scaleIn 0.25s ease-out",
      },
    },
  },

  plugins: [],
};

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  ["inline-flex", "items-center", "justify-center", "gap-2", "rounded-full", "font-semibold", "transition-all", "duration-300", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2"],
  {
    variants: {
      variant: {
        primary: ["bg-orange-500", "text-white", "hover:bg-orange-600", "hover:scale-[1.02]", "transition-transform duration-200"],

        secondary: ["bg-[var(--color-secondary-bg)]", "text-white", "hover:bg-[var(--color-secondary-bg-hover)]", "hover:scale-[1.01]", "transition-transform duration-200"],

        outline: ["border", "border-white/20", "bg-white/5", "text-white", "hover:bg-white/10", "transition-transform duration-200"],
      },

      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

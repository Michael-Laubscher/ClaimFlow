import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  ["inline-flex", "items-center", "justify-center", "gap-2", "font-medium", "transition-all", "duration-200", "focus:outline-none", "disabled:pointer-events-none", "disabled:opacity-50"].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-orange-500 text-white hover:bg-orange-600",

        secondary: "bg-white/10 text-white hover:bg-white/20",

        outline: "border border-white/20 text-white hover:bg-white/10",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

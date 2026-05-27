import { cva } from "class-variance-authority";

export const buttonVariants = cva("inline-flex items-center justify-center gap-2 transition-all", {
  variants: {
    variant: {
      primary: "bg-orange-500 text-white",
      secondary: "bg-white/10 text-white",
      outline: "border border-white/20 text-white",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

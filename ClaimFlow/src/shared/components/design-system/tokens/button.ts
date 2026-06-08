import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  ["inline-flex", "items-center", "justify-center", "gap-2", "font-medium", "transition-all", "duration-200", "focus:outline-none", "disabled:pointer-events-none", "disabled:opacity-50"].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary)] text-white hover:opacity-90",

        secondary: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",

        outline: "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-white/5",

        ghost: "text-[var(--color-text-primary)] hover:bg-white/5",

        danger: "bg-[var(--color-danger)] text-white hover:opacity-90",

        link: "text-[var(--color-primary)] underline-offset-4 hover:underline p-0 h-auto",
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

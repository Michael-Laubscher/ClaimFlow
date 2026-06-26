import { clsx } from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;

  variant?: "default" | "glass" | "solid";
  interactive?: boolean;
  floating?: boolean;
  padding?: "none" | "sm" | "md" | "lg";

  onClick?: () => void;
}

const variants = {
  default: `
    rounded-3xl
    border
    border-slate-200
    shadow-sm
  `,

  glass: `
    rounded-3xl
    border
    border-slate-200/80
    bg-white/90
    backdrop-blur-xl
    shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]
  `,

  solid: `
    rounded-2xl
    bg-slate-100
  `,
};

const paddings = {
  none: "",

  sm: `
    p-4
  `,

  md: `
    p-6
  `,

  lg: `
    p-8
  `,
};

export function Card({ children, className, variant = "default", interactive = false, floating = false, padding = "none", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        variants[variant],

        paddings[padding],

        floating &&
          `
          absolute
          z-20
          `,

        interactive &&
          `
          cursor-pointer
          transition-all
          duration-300

          hover:-translate-y-1

          hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)]

          active:translate-y-0
          `,

        className
      )}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;

  variant?: "default" | "glass" | "solid";
  interactive?: boolean;
  floating?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variants = {
  default: `
    rounded-2xl
    border
    border-white/10
    bg-white/5
  `,

  glass: `
    rounded-2xl
    border
    border-[--color-slate-100]
    bg-white/90
    backdrop-blur-xl
    shadow-[--shadow-float]
  `, 

  solid: `
    rounded-2xl
    bg-slate-100
  `,
};

export function Card({
  children,
  className,
  variant = "default",
  floating = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        variants[variant],
        floating && "absolute z-20",
        className
      )}
    >
      {children}
    </div>
  );
}
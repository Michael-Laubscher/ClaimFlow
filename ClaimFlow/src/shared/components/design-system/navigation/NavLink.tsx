import type { ReactNode } from "react";
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
} from "react-router-dom";

import { cn } from "@/shared/utilis/cn";

type Variant = "default" | "pill" | "ghost" | "underline";

type Size = "sm" | "md" | "lg";

interface NavLinkProps extends Omit<RouterNavLinkProps, "className"> {
  children: ReactNode;
  className?: string;

  variant?: Variant;
  size?: Size;
}

const baseStyles =
  "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

const variantStyles: Record<
  Variant,
  {
    base: string;
    active: string;
    inactive: string;
  }
> = {
  default: {
    base: "rounded-lg",
    active: "text-white",
    inactive: "text-black hover:text-black/80",
  },

  pill: {
    base: "rounded-xl px-4 py-2 font-medium",
    active: "bg-white text-slate-900 shadow-sm",
    inactive: "text-black hover:bg-white/10 hover:text-black/80",
  },

  ghost: {
    base: "rounded-lg px-3 py-2",
    active: "bg-white/10 text-white",
    inactive: "text-black hover:bg-white/5 hover:text-black/80",
  },

  underline: {
    base: "border-b-2 border-transparent pb-1",
    active: "border-white text-white",
    inactive: "text-black hover:text-black/80",
  },
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

export function NavLink({
  children,
  className,

  variant = "default",
  size = "md",

  ...props
}: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        cn(
          baseStyles,

          variantStyles[variant].base,

          isActive
            ? variantStyles[variant].active
            : variantStyles[variant].inactive,

          sizeStyles[size],

          className,
        )
      }
    >
      {children}
    </RouterNavLink>
  );
}

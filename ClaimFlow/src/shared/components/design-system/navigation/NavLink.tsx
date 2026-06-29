import { NavLink as RouterNavLink, type NavLinkProps as RouterNavLinkProps } from "react-router-dom";

import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

type Variant = "default" | "pill" | "ghost" | "underline";

type Size = "sm" | "md" | "lg";

interface Props extends Omit<RouterNavLinkProps, "className"> {
  children: ReactNode;

  className?: string;

  variant?: Variant;

  size?: Size;
}

const base = `
inline-flex
items-center
justify-center

transition-all
duration-200

focus:outline-none

focus-visible:ring-2
focus-visible:ring-blue-500/40
`;

const variants = {
  default: {
    base: "rounded-lg",

    active: "text-slate-900",

    inactive: "text-slate-600 hover:text-slate-900",
  },

  pill: {
    base: `
rounded-xl
px-4
py-2

font-medium
`,

    active: `
bg-slate-900
text-white
shadow-md
shadow-slate-900/20
`,

    inactive: `
text-slate-600

hover:bg-slate-100
hover:text-slate-900

`,
  },

  ghost: {
    base: `
rounded-xl
px-3
py-2
`,

    active: `
bg-slate-100
text-slate-900
`,

    inactive: `
text-slate-600
hover:bg-slate-50
`,
  },

  underline: {
    base: `
border-b-2
border-transparent
pb-1
`,

    active: `
border-slate-900
text-slate-900
`,

    inactive: `
text-slate-600
hover:text-slate-900
`,
  },
};

const sizes = {
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
}: Props) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        cn(
          base,

          variants[variant].base,

          isActive ? variants[variant].active : variants[variant].inactive,

          sizes[size],

          className
        )
      }
    >
      {children}
    </RouterNavLink>
  );
}

import { Link, type To } from "react-router-dom";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import { buttonVariants } from "../../tokens/button";

interface ButtonLinkProps {
  to: To;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ButtonLink({ to, children, variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  return (
    <Link to={to} {...props} className={cn(buttonVariants({ variant, size }), className)}>
      <span className="inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

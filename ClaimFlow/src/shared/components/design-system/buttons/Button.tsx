import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/shared/lib/cn";

import { buttonVariants } from "./button.variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  iconRight?: ReactNode;
  asChild?: boolean;
}

export function Button({ children, className, variant, size, iconRight, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      <span
        className="
          inline-flex
          items-center
          gap-2
        "
      >
        {children}

        {iconRight}
      </span>
    </Comp>
  );
}

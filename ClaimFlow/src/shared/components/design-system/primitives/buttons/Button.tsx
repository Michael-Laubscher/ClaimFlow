import { cn } from "@/shared/lib/cn";
import { buttonVariants } from "../../tokens/button";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { radius } from "../../tokens/radius";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Button({ children, variant, size, iconLeft, iconRight, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), radius.md, className)} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

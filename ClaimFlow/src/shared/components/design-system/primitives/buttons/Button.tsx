import { forwardRef } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/shared/lib/cn";
import { buttonVariants } from "../../tokens/button";

import { isLinkButton } from "./Button.helpers";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { variant = "primary", size = "md", iconLeft, iconRight, className } = props;

  const styles = cn(buttonVariants({ variant, size }), "rounded-xl", className);

  if (isLinkButton(props)) {
    const { children, to } = props;

    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={styles}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  const { children, ...rest } = props;

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={styles} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
});

Button.displayName = "Button";

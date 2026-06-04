import { forwardRef } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/shared/lib/cn";
import { buttonVariants } from "../../tokens/button";

import { isLinkButton } from "./Button.helpers";
import type { ButtonProps, LinkButtonProps, NativeButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { variant = "primary", size = "md", iconLeft, iconRight, className, children, ...rest } = props;

  const styles = cn(buttonVariants({ variant, size }), "rounded-xl", className);

  if (isLinkButton(props)) {
    const { to, ...linkRest } = rest as LinkButtonProps;

    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={styles} {...linkRest}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  const buttonRest = rest as NativeButtonProps;

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={styles} {...buttonRest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
});

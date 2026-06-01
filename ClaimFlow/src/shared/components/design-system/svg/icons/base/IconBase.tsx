import clsx from "clsx";
import type { ReactNode } from "react";

export interface BaseIconProps {
  className?: string;
  size?: number;
  ariaLabel?: string;
  children: ReactNode;
}

export function IconBase({ className, size = 20, children, ariaLabel }: BaseIconProps) {
  return (
    <span role="img" aria-label={ariaLabel} className={clsx("inline-flex", className)} style={{ width: size, height: size }}>
      {children}
    </span>
  );
}

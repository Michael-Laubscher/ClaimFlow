import clsx from "clsx";

import type { IconProps } from "./icon.types";

export function ShieldCheckIcon({ className, size = 24, strokeWidth = 2.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width={size} height={size} className={clsx(className)} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5 13l4 4L19 7" />
    </svg>
  );
}

import clsx from "clsx";

import type { IconProps } from "./icon.types";

export function ArrowRightIcon({
  className,
  size = 24,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width={size}
      height={size}
      className={clsx(className)}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}
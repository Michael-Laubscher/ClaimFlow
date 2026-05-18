import clsx from "clsx";

import type { IconProps } from "./icon.types";

export function CheckIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      className={clsx(className)}
      aria-hidden="true"
    >
      <path d="M9 12.5l-3.5-3.5 1.41-1.42L9 9.67l5.09-5.08 1.41 1.41z" />
    </svg>
  );
}
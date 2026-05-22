import clsx from "clsx";
import { CircleCheckBig } from "lucide-react";
import type { IconProps } from "./icon.types";

export function CheckIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <CircleCheckBig
      size={size}
      className={clsx(className)}
      aria-hidden="true"
    />
  );
}
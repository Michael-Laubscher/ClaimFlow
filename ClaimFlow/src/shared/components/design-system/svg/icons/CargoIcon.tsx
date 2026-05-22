import clsx from "clsx";
import { Package } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function CargoIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <Package
        size={size}
        className={clsx(className)}
        aria-hidden="true"
    />
  );
}
import clsx from "clsx";
import { Building2 } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function BuildingIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <Building2
        size={size}
        className={clsx(className)}
        aria-hidden="true"
    />
  );
}
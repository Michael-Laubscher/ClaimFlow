import clsx from "clsx";
import { Eye } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function EyeIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <Eye
        size={size}
        className={clsx(className)}
        aria-hidden="true"
    />
  );
}

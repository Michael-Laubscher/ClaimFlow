import clsx from "clsx";
import { Award } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function IntegrityIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <Award
        size={size}
        className={clsx(className)}
        aria-hidden="true"
    />
  );
}

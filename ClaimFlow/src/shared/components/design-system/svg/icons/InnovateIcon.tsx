import clsx from "clsx";
import { TrendingUp } from 'lucide-react';
import type { IconProps } from "./icon.types";


export function InnovateIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <TrendingUp
        size={size}
        className={clsx(className)}
        aria-hidden="true"
    />
  );
}
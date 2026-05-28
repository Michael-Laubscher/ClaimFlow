import clsx from "clsx";
import { Clock } from "lucide-react";
import type { IconProps } from "./icon.types";

export function BusinessHoursIcon({ className, size = 20 }: IconProps) {
  return <Clock size={size} className={clsx(className)} aria-hidden="true" />;
}

import clsx from "clsx";
import { Target } from "lucide-react";
import type { IconProps } from "./icon.types";

export function TargetIcon({ className, size = 20 }: IconProps) {
  return <Target size={size} className={clsx(className)} aria-hidden="true" />;
}

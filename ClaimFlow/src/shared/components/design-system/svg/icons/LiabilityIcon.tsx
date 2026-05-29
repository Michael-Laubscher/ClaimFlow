import clsx from "clsx";
import { FileCheck } from "lucide-react";
import type { IconProps } from "./icon.types";

export function LiabilityIcon({ className, size = 20 }: IconProps) {
  return <FileCheck size={size} className={clsx(className)} aria-hidden="true" />;
}

import clsx from "clsx";
import { Lock } from "lucide-react";

import type { IconProps } from "./icon.types";

export function LockIcon({ className, size = 20 }: IconProps) {
  return <Lock size={size} className={clsx(className)} aria-hidden="true" />;
}

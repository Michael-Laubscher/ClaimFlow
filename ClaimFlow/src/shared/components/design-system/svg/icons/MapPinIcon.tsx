import type { IconProps } from "@/shared/components/design-system/svg";
import clsx from "clsx";
import { MapPin } from "lucide-react";

export function MapPinIcon({ className, size = 20 }: IconProps) {
  return <MapPin size={size} className={clsx(className)} aria-hidden="true" />;
}

import clsx from "clsx";
import { MapPin } from 'lucide-react';
import type { IconProps } from "./icon.types";


export function MapPinIcon({ className, size = 20 }: IconProps) {
  return <MapPin size={size} className={clsx(className)} aria-hidden="true" />;
}
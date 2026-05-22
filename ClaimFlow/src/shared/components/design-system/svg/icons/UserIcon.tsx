import clsx from "clsx";
import { Users } from 'lucide-react';
import type { IconProps } from "./icon.types";

export function UserIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <Users
        size={size}
        className={clsx(className)}
        aria-hidden="true"
    />
  );
}

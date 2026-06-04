import type { LucideIcon } from "lucide-react";
import { IconBase } from "../base/IconBase";

type Props = {
  className?: string;
  size?: number;
  ariaLabel?: string;
};

export function wrapLucide(Icon: LucideIcon, defaultSize = 20) {
  return function WrappedLucide({ className, size = defaultSize, ariaLabel }: Props) {
    return (
      <IconBase className={className} size={size} ariaLabel={ariaLabel}>
        <Icon size={size} />
      </IconBase>
    );
  };
}

import clsx from "clsx";
import { Upload } from "lucide-react";
import type { IconProps } from "./icon.types";

export function UploadIcon({ className, size = 20 }: IconProps) {
  return <Upload size={size} className={clsx(className)} aria-hidden="true" />;
}

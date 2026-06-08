import { cn } from "@/shared/lib/cn";

import { STATUS_BADGE_PRESETS } from "./statusBadge.presets";

import { mapStatusToVariant } from "./statusBadge.utils";

interface Props {
  status?: string;

  variant?: keyof typeof STATUS_BADGE_PRESETS;

  label?: string;

  className?: string;
}

export function StatusBadge({ status, variant, label, className }: Props) {
  const resolvedVariant = variant || (status ? mapStatusToVariant(status) : "neutral");

  const preset = STATUS_BADGE_PRESETS[resolvedVariant];

  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        tracking-wide
        backdrop-blur
        transition
      `,
        preset.className,
        className
      )}
    >
      {label || status || preset.label}
    </span>
  );
}

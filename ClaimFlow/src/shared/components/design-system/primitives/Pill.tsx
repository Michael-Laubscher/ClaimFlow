import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

export function Pill({ children }: PillProps) {
  return (
    <span
      className="
        rounded-full
        bg-[--color-orange]
        px-2
        py-0.5
        text-[10px]
        font-semibold
        text-white
      "
    >
      {children}
    </span>
  );
}

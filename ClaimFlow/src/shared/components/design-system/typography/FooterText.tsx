import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

interface FooterTextProps {
  children: ReactNode;
  className?: string;
}

export function FooterText({ children, className }: FooterTextProps) {
  return (
    <p
      className={cn(
        `
          text-sm
          leading-relaxed
          text-slate-300
        `,
        className
      )}
    >
      {children}
    </p>
  );
}

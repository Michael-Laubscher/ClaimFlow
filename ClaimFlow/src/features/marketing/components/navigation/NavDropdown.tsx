import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";
import { GlassCard } from "@/shared/components/design-system/composite/card/GlassCard";
import { navStyles } from "@/shared/components/design-system/tokens/nav";

interface Props {
  children: ReactNode;

  layout?: "mobile" | "desktop";
}

export function NavDropdown({ children, layout = "desktop" }: Props) {
  return (
    <GlassCard
      className={cn(
        navStyles.dropdown.base,

        layout === "mobile" ? navStyles.dropdown.mobile : navStyles.dropdown.desktop
      )}
    >
      {children}
    </GlassCard>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { navStyles } from "@/shared/components/design-system/tokens/nav";
import { Card } from "@/shared/components/design-system/composite/card/Card";

interface Props {
  children: ReactNode;

  layout?: "mobile" | "desktop";
}

export function NavDropdown({ children, layout = "desktop" }: Props) {
  return (
    <Card variant="glass"
      className={cn(
        navStyles.dropdown.base,

        layout === "mobile" ? navStyles.dropdown.mobile : navStyles.dropdown.desktop
      )}
    >
      {children}
    </Card>
  );
}

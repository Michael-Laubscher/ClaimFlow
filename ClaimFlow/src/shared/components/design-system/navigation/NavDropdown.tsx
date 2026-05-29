import { Card } from "../composite/card/Card";
import { navStyles } from "../tokens/nav";

import { cn } from "@/shared/lib/cn";

export function NavDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card
      variant="glass"
      className={cn(
        navStyles.dropdown.base,
        navStyles.dropdown.desktop
      )}
    >
      {children}
    </Card>
  );
}
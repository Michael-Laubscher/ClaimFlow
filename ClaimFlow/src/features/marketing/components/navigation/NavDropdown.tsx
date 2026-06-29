import type { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

import { Card } from "@/shared/components/design-system/composite/card/Card";

interface Props {
  children: ReactNode;

  layout?: "desktop" | "mobile";
}

export function NavDropdown({
  children,

  layout = "desktop",
}: Props) {
  return (
    <Card
      variant="glass"
      className={cn(
        "animate-in fade-in slide-in-from-top-2 duration-200",

        "border border-white/60 shadow-2xl",

        layout === "desktop"
          ? `
absolute
left-0
top-full
mt-4
w-72
rounded-3xl
p-3
`
          : `
mt-3
rounded-2xl
p-2
`
      )}
    >
      {children}
    </Card>
  );
}

import { Card } from "../composite/card/Card";

import { cn } from "@/shared/lib/cn";

export function NavDropdown({ children }: { children: React.ReactNode }) {
  return (
    <Card
      variant="glass"
      className={cn(
        `
absolute
left-0
top-full
mt-4

min-w-[280px]

rounded-3xl

border
border-slate-200/60

bg-white/90

p-3

shadow-[0_20px_60px_rgba(15,23,42,.15)]

backdrop-blur-xl

animate-in
fade-in
slide-in-from-top-2

duration-200
`
      )}
    >
      {children}
    </Card>
  );
}

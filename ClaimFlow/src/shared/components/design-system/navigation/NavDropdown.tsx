import { GlassCard } from "../composite/card/GlassCard";
import { navStyles } from "../tokens/nav";

export function NavDropdown({ children }: { children: React.ReactNode }) {
  return <GlassCard className={navStyles.dropdown}>{children}</GlassCard>;
}

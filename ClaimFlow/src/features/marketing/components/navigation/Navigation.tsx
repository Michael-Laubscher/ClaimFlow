import type { NavItem } from "@/shared/types/nav.types";

import { useNavController } from "./NavProvider";
import { NavItem as NavigationItem } from "./NavItem";

interface Props {
  items: NavItem[];
  layout: "mobile" | "desktop";
}

export function Navigation({ items, layout }: Props) {
  const nav = useNavController();

  return (
    <nav className={layout === "mobile" ? "flex flex-col gap-1" : "flex items-center gap-2"}>
      {items.map((item) => (
        <NavigationItem key={item.label} item={item} layout={layout} isOpen={nav.isOpen(item.label)} onToggle={() => nav.toggle(item.label)} onClose={nav.close} />
      ))}
    </nav>
  );
}

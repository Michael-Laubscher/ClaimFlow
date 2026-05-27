import type { NavItem as NavItemType } from "@/shared/types/nav.types";

import { NavDropdown } from "./NavDropdown";
import { NavDropdownItem } from "./NavDropdownItem";
import { NavTrigger } from "@/shared/components/design-system/navigation/NavItemTrigger";

interface Props {
  item: NavItemType;

  layout?: "mobile" | "desktop";

  isOpen: boolean;

  onToggle: () => void;
  onClose: () => void;
}

export function NavItem({
  item,

  layout = "desktop",

  isOpen,

  onToggle,
  onClose,
}: Props) {
  return (
    <div className="relative">
      <NavTrigger label={item.label} to={item.to!} layout={layout} hasChildren={!!item.children} isOpen={isOpen} onToggle={onToggle} />

      {item.children && isOpen && (
        <NavDropdown layout={layout}>
          {item.children.map((child) => (
            <NavDropdownItem key={child.to} to={child.to} label={child.label} desc={child.desc} onClick={onClose} />
          ))}
        </NavDropdown>
      )}
    </div>
  );
}

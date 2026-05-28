import { NavLink } from "./NavLink";
import { ChevronDownIcon } from "../svg/icons";

import { cn } from "@/shared/lib/cn";
import { navStyles } from "../tokens/nav";

interface Props {
  label: string;
  to: string;

  layout?: "mobile" | "desktop";

  hasChildren?: boolean;
  isOpen?: boolean;

  onToggle?: () => void;
}

export function NavTrigger({
  label,
  to,

  layout = "desktop",

  hasChildren = false,
  isOpen = false,

  onToggle,
}: Props) {
  // SIMPLE LINK
  if (!hasChildren) {
    return (
      <NavLink to={to} variant="pill">
        {label}
      </NavLink>
    );
  }

  return (
    <div className={cn(navStyles.trigger.base, layout === "mobile" ? navStyles.trigger.mobile : navStyles.trigger.desktop)}>
      <NavLink to={to} variant="pill" className="rounded-r-none">
        {label}
      </NavLink>

      <button type="button" onClick={onToggle} className={navStyles.trigger.toggle}>
        <ChevronDownIcon className={cn(navStyles.trigger.icon, isOpen && navStyles.trigger.iconOpen)} />
      </button>
    </div>
  );
}

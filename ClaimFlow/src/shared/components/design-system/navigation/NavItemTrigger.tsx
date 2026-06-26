import { NavLink } from "./NavLink";

import { ChevronDownIcon } from "../svg/icons";

import { cn } from "@/shared/lib/cn";

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
  if (!hasChildren) {
    return (
      <NavLink to={to} variant="pill">
        {label}
      </NavLink>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center rounded-2xl",

        layout === "mobile" && "w-full justify-between"
      )}
    >
      <NavLink
        to={to}
        variant="pill"
        className="
rounded-r-none
"
      >
        {label}
      </NavLink>

      <button
        type="button"
        aria-label={`Toggle ${label} menu`}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="
flex
h-10
items-center
rounded-r-2xl
px-3
text-slate-500
transition

hover:bg-slate-100
"
      >
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 transition-transform duration-300",

            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  );
}

import { Link } from "react-router-dom";
import { clsx } from "clsx";

import type { NavItem } from "./nav.types";

import { isActiveRoute } from "./nav.utils";

import { ChevronDownIcon } from "@/shared/components/design-system/svg/icons";

interface Props {
  item: NavItem;
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}

export function MobileNavItem({
  item,
  pathname,
  openDropdown,
  setOpenDropdown,
}: Props) {
  const active = isActiveRoute(pathname, item.to);

  const isOpen = openDropdown === item.label;

  if (!item.children) {
    return (
      <Link
        to={item.to!}
        className={clsx(
          "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
          active
            ? "bg-[--color-slate-50] text-[--color-navy]"
            : "text-[--color-slate-700] hover:bg-[--color-slate-50] hover:text-[--color-navy]",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <button
        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[--color-slate-700] transition-colors hover:bg-[--color-slate-50]"
      >
        {item.label}

        <ChevronDownIcon
          className={clsx(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="ml-3 flex flex-col border-l border-[--color-slate-100] pl-3">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="rounded-lg px-3 py-2 text-sm text-[--color-slate-600] transition-colors hover:bg-[--color-slate-50]"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

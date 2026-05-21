import { Link } from "react-router-dom";
import { clsx } from "clsx";

import type { NavItem } from "../../../../shared/types/nav.types";

import { isActiveRoute } from "../../../../shared/utilis/nav.utils";

import { useOutsideClick } from "./useOutsideClick";

import { ChevronDownIcon } from "@/shared/components/design-system/svg/icons";

interface Props {
  item: NavItem;
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}

export function DesktopNavItem({
  item,
  pathname,
  openDropdown,
  setOpenDropdown,
}: Props) {
  const ref = useOutsideClick<HTMLDivElement>(() => setOpenDropdown(null));

  const active = isActiveRoute(pathname, item.to);

  const isOpen = openDropdown === item.label;

  if (!item.children) {
    return (
      <Link
        to={item.to!}
        className={clsx(
          "rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
          active
            ? "bg-[--color-slate-50] text-[--color-navy]"
            : "text-[--color-slate-600] hover:bg-[--color-slate-50] hover:text-[--color-navy]",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={clsx(
          "flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
          isOpen
            ? "bg-[--color-slate-50] text-[--color-navy]"
            : "text-[--color-slate-600] hover:bg-[--color-slate-50] hover:text-[--color-navy]",
        )}
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
        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-[--color-slate-100] bg-white py-2 shadow-[--shadow-float]">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="mx-2 flex flex-col rounded-xl px-5 py-3 transition-colors hover:bg-[--color-slate-50]"
            >
              <span className="text-sm font-semibold text-[--color-navy]">
                {child.label}
              </span>

              {child.desc && (
                <span className="mt-0.5 text-xs text-[--color-slate-400]">
                  {child.desc}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

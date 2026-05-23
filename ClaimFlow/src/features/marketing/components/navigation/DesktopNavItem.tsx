import { clsx } from "clsx";
import type { NavItem } from "@/shared/types/nav.types";
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";
import { NavLink } from "@/shared/components/design-system/navigation/NavLink";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { ChevronDownIcon } from "@/shared/components/design-system/svg/icons";
import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";

interface Props {
  item: NavItem;
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}

export function DesktopNavItem({
  item,
  pathname: _pathname,
  openDropdown,
  setOpenDropdown,
}: Props) {
  const isOpen = openDropdown === item.label;

  const ref = useOutsideClick<HTMLDivElement>(() => setOpenDropdown(null));

  if (!item.children) {
    return (
      <NavLink to={item.to!} variant="pill" size="md">
        {item.label}
      </NavLink>
    );
  }

  return (
    <div ref={ref} className="relative">
      <div
        className="
    flex
    items-center
    rounded-xl
    overflow-hidden
  "
      >
        <NavLink
          to={item.to!}
          variant="pill"
          size="md"
          className="rounded-r-none"
        >
          {item.label}
        </NavLink>

        <button
          type="button"
          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
          className={clsx(
            `
        flex
        items-center
        justify-center
        px-3
        transition-colors
      `,
            isOpen ? "bg-[--color-slate-50]" : "hover:bg-[--color-slate-50]",
          )}
        >
          <ChevronDownIcon
            className={clsx(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </div>

      {isOpen && (
        <GlassCard className="absolute left-0 top-full z-50 mt-2 w-72 px-4 py-2">
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={() => setOpenDropdown(null)}
              className="flex flex-col items-start px-4 py-3 gap-1 rounded-none border-b-2 border-black/40 last:border-b-0 hover:bg-[--color-slate-50] transition"
            >
              <Typography
                variant="label-md"
                color="primary"
                className="text-left"
              >
                {child.label}
              </Typography>

              {child.desc && (
                <Typography
                  variant="body-sm"
                  color="muted"
                  className="text-left"
                >
                  {child.desc}
                </Typography>
              )}
            </NavLink>
          ))}
        </GlassCard>
      )}
    </div>
  );
}

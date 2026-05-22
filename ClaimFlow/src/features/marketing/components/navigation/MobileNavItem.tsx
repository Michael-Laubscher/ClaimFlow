import { useState } from "react";
import { clsx } from "clsx";
import type { NavItem } from "@/shared/types/nav.types";
import { NavLink } from "@/shared/components/design-system/navigation/NavLink";
import { ChevronDownIcon } from "@/shared/components/design-system/svg/icons";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";

interface Props {
  item: NavItem;
  pathname: string;
}

export function MobileNavItem({ item, pathname: _pathname }: Props) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <NavLink to={item.to!} variant="pill" size="md">
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="space-y-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between rounded-xl mx-auto px-8 py-3 text-sm font-semibold text-[--color-black]"
      >
        {item.label} &nbsp;
        <ChevronDownIcon
          className={clsx("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <GlassCard className="ml-3 flex flex-col gap-2 px-4 py-2">
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              className="flex flex-col w-full px-3 py-2 rounded-none border-b-2 border-black/40 last:border-b-0 hover:bg-[--color-slate-50] transition"
            >
              <Typography
                variant="label-md"
                color="primary"
                className="text-left block w-full"
              >
                {child.label}
              </Typography>

              {child.desc && (
                <Typography
                  variant="body-sm"
                  color="muted"
                  className="text-left block w-full mt-1"
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

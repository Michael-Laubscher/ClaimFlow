import { NAV_LINKS } from "@/features/shared-ui/configs/nav.config";
import { DesktopNavItem } from "./DesktopNavItem";

interface Props {
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}

export function DesktopNavigation({
  pathname,
  openDropdown,
  setOpenDropdown,
}: Props) {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {NAV_LINKS.map((item) => (
        <DesktopNavItem
          key={item.label}
          item={item}
          pathname={pathname}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      ))}
    </nav>
  );
}
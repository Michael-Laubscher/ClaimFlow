import { NAV_LINKS } from "@/features/shared-ui/configs/nav.config";
import { MobileNavItem } from "./MobileNavItem";
import { ButtonLink } from "@/shared/components/design-system/buttons/ButtonLink";

interface Props {
  open: boolean;
  pathname: string;
}

export function MobileNavigation({ open, pathname }: Props) {
  if (!open) return null;

  return (
    <div className="border-t border-[--color-slate-100] bg-white px-6 pb-6 pt-4 lg:hidden">
      <nav className="flex flex-col gap-1">
        {NAV_LINKS.map((item) => (
          <MobileNavItem key={item.label} item={item} pathname={pathname} />
        ))}
      </nav>

      <div className="mt-5 inline-flex items-center justify-center w-full">
        <ButtonLink to="/get-quote" variant="primary">
          Get Quote
        </ButtonLink>
      </div>
    </div>
  );
}

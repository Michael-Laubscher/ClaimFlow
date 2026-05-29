import type { FooterColumnSection } from "@/shared/types/footer.types";

import { Pill } from "@/shared/components/design-system/primitives/Pill";
import { NavLink } from "@/shared/components/design-system/navigation/NavLink";
import { FooterHeading } from "@/shared/components/design-system/typography/FooterHeading";

interface Props {
  section: FooterColumnSection;
}

export function FooterColumn({ section }: Props) {
  return (
    <div>
      <FooterHeading>
        {section.heading}
      </FooterHeading>

      <ul className="flex flex-col gap-3">
        {section.items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className="
                group
                flex
                items-center
                justify-between
                gap-2
                text-sm
                text-white
                transition-colors
                hover:text-white/70
              "
            >
              <span className="truncate">
                {item.label}
              </span>

              {item.badge && (
                <Pill>
                  {item.badge}
                </Pill>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
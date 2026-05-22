import type { FooterSection } from "@/shared/types/footer.types";
import { Pill } from "@/shared/components/design-system/feedback/Pill";
import { NavLink } from "@/shared/components/design-system/navigation/NavLink";
import { FooterHeading } from "@/shared/components/design-system/typography/FooterHeading";

interface Props {
  section: FooterSection;
}

export function FooterColumn({ section }: Props) {
  return (
    <div>
      <FooterHeading>
        <h3 className="mb-4">{section.heading}</h3>
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
                hover:text-white/70
                transition-colors
              "
            >
              <span className="truncate">{item.label}</span>
              {item.badge && (
                <Pill>
                  <span className="ml-auto">{item.badge}</span>
                </Pill>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

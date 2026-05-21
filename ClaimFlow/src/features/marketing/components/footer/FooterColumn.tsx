import type {
  FooterSection,
} from './footer.types';

import { Pill } from '@/shared/components/design-system/feedback/Pill';

import { NavLink } from '@/shared/components/design-system/navigation/NavLink';

import { FooterHeading } from '@/shared/components/design-system/typography/FooterHeading';

interface Props {
  section: FooterSection;
}

export function FooterColumn({
  section,
}: Props) {
  return (
    <div>
      <FooterHeading>
        {section.heading}
      </FooterHeading>

      <ul className="space-y-3">
        {section.items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
              "
            >
              <span>{item.label}</span>

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
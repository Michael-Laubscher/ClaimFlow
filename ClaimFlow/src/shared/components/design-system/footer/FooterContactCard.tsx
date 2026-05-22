import type { FooterConfig } from "@/shared/types/footer.types";

import {
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/shared/components/design-system/svg/icons";

import { Card } from "@/shared/components/design-system/surface/Card";

import { IconSurface } from "@/shared/components/design-system/surface/IconSurface";

import { FooterHeading } from "@/shared/components/design-system/typography/FooterHeading";

const CONTACT_ICONS = {
  phone: PhoneIcon,
  email: MailIcon,
  address: PinIcon,
};

interface Props {
  contact: FooterConfig["contact"];
}

export function FooterContactCard({ contact }: Props) {
  return (
    <div className="mt-14">
      <FooterHeading>Contact</FooterHeading>

      <Card className="p-5">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {contact.map((item) => {
            const Icon = CONTACT_ICONS[item.type];

            const content = (
              <>
                <IconSurface>
                  <Icon
                    className="
                      h-4
                      w-4
                      text-white
                    "
                  />
                </IconSurface>

                <div className="min-w-0">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-1
                      break-words
                      text-sm
                      leading-relaxed
                      text-slate-200
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="
                  flex
                  min-w-0
                  items-start
                  gap-3
                  text-white
                  transition-colors
                  hover:text-white/80
                "
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="
                  flex
                  min-w-0
                  items-start
                  gap-3
                  text-white
                "
              >
                {content}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

import type { SocialLink } from './footer.types';

import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/shared/components/design-system/svg/icons';

interface Props {
  socials: SocialLink[];
}

const ICONS = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
};

export function FooterSocials({
  socials,
}: Props) {
  return (
    <div className="mt-6 flex gap-3">
      {socials.map((social) => {
        const Icon =
          ICONS[social.icon];

        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white/50 transition-colors hover:border-[--color-orange] hover:text-[--color-orange]"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
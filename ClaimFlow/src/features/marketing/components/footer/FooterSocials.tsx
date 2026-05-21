import type {
  SocialLink,
} from './footer.types';

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
    <div className="mt-7 flex gap-3">
      {socials.map((social) => {
        const Icon =
          ICONS[social.icon];

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/5
              text-slate-300
              transition-all
              duration-200
              hover:bg-[--color-orange]
              hover:text-white
            "
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
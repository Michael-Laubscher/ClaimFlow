import type {
  SocialLink,
} from '@/shared/types/footer.types';

import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/shared/components/design-system/svg/icons';

import { SocialButton } from '@/shared/components/design-system/navigation/SocialButton';

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
    <div className="flex gap-3">
      {socials.map((social) => {
        const Icon =
          ICONS[social.icon];

        return (
          <SocialButton
            key={social.label}
            href={social.href}
            label={social.label}
          >
            <Icon className="h-4 w-4" />
          </SocialButton>
        );
      })}
    </div>
  );
}
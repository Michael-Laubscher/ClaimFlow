import { SocialButton } from "@/shared/components/design-system/navigation/SocialButton";
import { SOCIAL_ICONS } from "@/shared/constants/footer.constants";
import type { FooterSocialLink } from "@/shared/types/footer.types";

interface Props {
  socials: FooterSocialLink[];
}

export function FooterSocials({
  socials,
}: Props) {
  return (
    <div className="flex gap-3">
      {socials.map((social) => {
        const Icon = SOCIAL_ICONS[social.icon];

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
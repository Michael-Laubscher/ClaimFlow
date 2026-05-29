import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/shared/components/design-system/svg/icons";
import type { FooterLink } from "../types/footer.types";



export const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
};

export const CONTACT_ICONS = {
  phone: PhoneIcon,
  email: MailIcon,
  address: PinIcon,
};

export const FOOTER_LINKS: Record<
  string,
  FooterLink[]
> = {
  legal: [
    {
      label: "Privacy Policy",
      to: "/privacy",
    },
    {
      label: "Terms of Service",
      to: "/terms",
    },
    {
      label: "Cookie Policy",
      to: "/cookies",
    },
  ],
};
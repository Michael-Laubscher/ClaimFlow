export interface FooterLinkItem {
  label: string;
  to: string;
  badge?: string;
}

export interface FooterSection {
  heading: string;
  items: FooterLinkItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "twitter" | "facebook";
}

export interface ContactItem {
  type: "phone" | "email" | "address";
  label: string;
  value: string;
  href?: string;
}

export interface FooterCTA {
  heading: string;
  description: string;

  primary: {
    label: string;
    to: string;
  };

  secondary: {
    label: string;
    to: string;
  };
}

export interface FooterBrand {
  name: string;

  tagline: string;

  description: string;
}

export interface FooterLegal {
  copyright: string;
  compliance: string;

  links: {
    label: string;
    to: string;
  }[];
}

export interface FooterConfig {
  brand: FooterBrand;

  cta: FooterCTA;

  sections: FooterSection[];

  socials: SocialLink[];

  trustBadges: string[];

  contact: ContactItem[];

  legal: FooterLegal;
}

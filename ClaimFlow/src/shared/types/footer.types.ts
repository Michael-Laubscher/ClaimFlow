export interface FooterLink {
  label: string;
  to: string;
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "twitter" | "facebook";
}

export interface FooterContactItem {
  label: string;
  value: string;
  type: "phone" | "email" | "address";
  href?: string;
}

export interface FooterColumnItem {
  label: string;
  to: string;
  badge?: string;
}

export interface FooterColumnSection {
  heading: string;
  items: FooterColumnItem[];
}

export interface FooterCTAConfig {
  heading: string;
  description: string;
  primary: FooterLink;
  secondary: FooterLink;
}

export interface FooterConfig {
  brand: {
    tagline: string;
    description: string;
  };

  cta: FooterCTAConfig;

  sections: FooterColumnSection[];

  socials: FooterSocialLink[];

  contact: FooterContactItem[];

  trustBadges: string[];

  legal: {
    copyright: string;
    compliance?: string;
    links: FooterLink[];
  };
}

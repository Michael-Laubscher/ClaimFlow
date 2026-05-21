export interface FooterLink {
  label: string;
  to: string;
  external?: boolean;
  badge?: string;
}

export interface FooterSection {
  heading: string;
  items: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon:
    | 'linkedin'
    | 'twitter'
    | 'facebook';
}

export interface FooterContactItem {
  label: string;
  value: string;
  href?: string;
  type: 'phone' | 'email' | 'address';
}

export interface FooterConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };

  cta: {
    heading: string;
    description: string;
    primary: FooterLink;
    secondary: FooterLink;
  };

  sections: FooterSection[];

  socials: SocialLink[];

  trustBadges: string[];

  contact: FooterContactItem[];

  legal: {
    copyright: string;
    links: FooterLink[];
    compliance: string;
  };
}
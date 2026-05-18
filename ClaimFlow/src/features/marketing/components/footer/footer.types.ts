export interface FooterLink {
  label: string;
  to: string;
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
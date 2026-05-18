import type {
  FooterSection,
  SocialLink,
} from './footer.types';

export const FOOTER_LINKS: FooterSection[] =
  [
    {
      heading: 'Products',
      items: [
        {
          label: 'Marine Cargo',
          to: '/products/marine',
        },
        {
          label: 'Fleet Insurance',
          to: '/products/fleet',
        },
        {
          label: 'Transit Cover',
          to: '/products/transit',
        },
        {
          label: 'Cross-Border Cover',
          to: '/products/crossborder',
        },
      ],
    },

    {
      heading: 'Company',
      items: [
        {
          label: 'About Us',
          to: '/about',
        },
        {
          label: 'Partnerships',
          to: '/partnerships',
        },
        {
          label: 'News',
          to: '/news',
        },
        {
          label: 'Contact',
          to: '/contact',
        },
      ],
    },

    {
      heading: 'Support',
      items: [
        {
          label: 'File a Claim',
          to: '/claims/new',
        },
        {
          label: 'Track a Claim',
          to: '/claims/track',
        },
        {
          label: 'Customer Portal',
          to: '/portal',
        },
        {
          label: 'FAQ',
          to: '/faq',
        },
      ],
    },
  ];

export const SOCIAL_LINKS: SocialLink[] =
  [
    {
      label: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
    },

    {
      label: 'Twitter',
      href: '#',
      icon: 'twitter',
    },

    {
      label: 'Facebook',
      href: '#',
      icon: 'facebook',
    },
  ];
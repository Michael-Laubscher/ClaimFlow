import type { FooterConfig } from "@/shared/types/footer.types";

export const footerConfig: FooterConfig = {
  brand: {
    tagline: "Protecting African Trade",
    description: "Comprehensive insurance solutions for transporters, fleet operators, and cross-border businesses across Africa.",
  },

  cta: {
    heading: "Ready to Protect Your Business?",
    description: "Get a personalized insurance quote in minutes. Our experts are standing by to help you choose the right coverage.",
    primary: {
      label: "Get Your Quote Now",
      to: "claims/get-quote",
    },
    secondary: {
      label: "Talk to an Expert",
      to: "contact",
    },
  },

  sections: [
    {
      heading: "Products",
      items: [
        { label: "Marine Cargo", to: "/products/cargo" },
        { label: "Fleet Insurance", to: "/products/liability" },
        { label: "Transit Cover", to: "/products/commercial-vehicle" },
        { label: "Cross-Border Cover", to: "/products/yellow-card" },
      ],
    },
    {
      heading: "Support",
      items: [
        { label: "File a Claim", to: "/claims/" },
        { label: "Our Branches", to: "/branches" },
        { label: "FAQ", to: "/faq" },
      ],
    },
    {
      heading: "Company",
      items: [
        { label: "About Us", to: "/about" },
        { label: "Partnerships", to: "/partnerships" },
        { label: "News", to: "/news" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/faic-europe-bv/", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/AskariInsurance", icon: "twitter" },
    { label: "Facebook", href: "https://www.facebook.com/AskariInsurance", icon: "facebook" },
  ],

  trustBadges: ["24/7 Claims Support", "Pan-African Coverage", "Licensed Insurance Provider"],

  contact: [
    {
      label: "Phone",
      value: "+254 700 000 000",
      href: "tel:+254700000000",
      type: "phone",
    },
    {
      label: "Email",
      value: "info@askariinsure.com",
      href: "mailto:info@askariinsure.com",
      type: "email",
    },
    {
      label: "Address",
      value: "Nairobi, Kenya · Pan-African Operations",
      type: "address",
    },
  ],

  legal: {
    copyright: `© ${new Date().getFullYear()} Askari Insure. All rights reserved.`,
    compliance: "Licensed and regulated insurance provider operating across Africa.",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Cookie Policy", to: "/cookies" },
    ],
  },
};

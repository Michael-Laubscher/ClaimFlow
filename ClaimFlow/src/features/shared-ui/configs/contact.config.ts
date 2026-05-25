import type { ContactInfoItem } from "@/shared/types/contact.types";


export const NAV_LINKS = [
  "Home",
  "About",
  "Products",
  "Partnerships",
  "News",
  "Contact",
] as const;

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: "📍",
    title: "Head Office",
    lines: ["Nairobi Business District", "P.O. Box 12345-00100", "Nairobi, Kenya"],
  },
  {
    icon: "📞",
    title: "Phone",
    lines: [
      "Main: +254 700 000 000",
      "Claims Hotline: +254 700 000 001",
      "WhatsApp: +254 700 000 002",
    ],
  },
  {
    icon: "✉",
    title: "Email",
    lines: [
      "General: info@askariinsure.com",
      "Claims: claims@askariinsure.com",
      "Support: support@askariinsure.com",
    ],
  },
  {
    icon: "🕐",
    title: "Business Hours",
    lines: ["Mon–Fri: 8:00–18:00", "Sat: 9:00–14:00", "Sun: Closed"],
    highlight: "Claims Support: 24/7",
  },
] as const;
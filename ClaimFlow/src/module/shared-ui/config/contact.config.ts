import type { PageConfig } from "@/shared/types/page.types";

export const contactConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Contact Us",
      subtitle:
        "Get in touch with our team for support, queries, or assistance.",
    },
    {
      type: "text",
      title: "Reach Us",
      content:
        "Email: info@askariinsure.com\nPhone: +27 XXX XXX XXX\nLocation: Pretoria, South Africa",
    },
    {
      type: "cta",
      title: "Need Immediate Assistance?",
      buttonText: "Submit a Claim",
      buttonLink: "/claims/new",
    },
  ],
};
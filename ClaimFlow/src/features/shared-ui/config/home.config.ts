import type { PageConfig } from "@/shared/types/page.types";

export const homeConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Insurance Made Simple",
      subtitle: "Fast, reliable cover with seamless claims",
      buttonText: "Get Insurance",
      buttonLink: "/get-insurance",
    },
    {
      type: "cards",
      title: "Our Products",
      items: [
        { title: "Motor Insurance", description: "Comprehensive cover" },
        { title: "Travel Insurance", description: "Global protection" },
        { title: "Commercial Insurance", description: "Business security" },
      ],
    },
    {
      type: "cta",
      title: "Need to Submit a Claim?",
      buttonText: "Submit Claim",
      buttonLink: "/claims/new",
    },
  ],
};

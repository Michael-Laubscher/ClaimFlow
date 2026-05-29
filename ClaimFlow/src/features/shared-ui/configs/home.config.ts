import type { PageConfig } from "@/shared/types/page.types";

const homeConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      eyebrow: "Askari Insure",
      title: "Protect what matters. Manage claims online.",
      subtitle: "Insurance solutions with streamlined claims submission, secure document handling, and customer-first support.",
      buttonText: "Get Insurance",
      buttonLink: "/get-insurance",
      secondaryButtonText: "Submit Claim",
      secondaryButtonLink: "/claims/new",
      stats: [
        { label: "Partners", value: "Hollard + COMESA" },
        { label: "Claims", value: "Digital FNOL" },
        { label: "Support", value: "Fast turnaround" },
      ],
    },
    {
      type: "cards",
      title: "Insurance Solutions",
      items: [
        {
          title: "Motor Insurance",
          description: "Comprehensive and third-party vehicle cover.",
        },
        {
          title: "Travel Insurance",
          description: "Regional and international protection.",
        },
        {
          title: "Business Cover",
          description: "Commercial asset and operations protection.",
        },
      ],
    },
    {
      type: "feature",
      title: "Why Askari Insure",
      items: ["Fast digital first-notice-of-loss submission", "Integrated partner workflows", "Secure document uploads", "Future-ready Azure integration"],
      description: "Designed for customers to request cover, manage policies, and submit claims in one platform.",
    },
    {
      type: "cta",
      title: "Need to submit a claim?",
      subtitle: "Complete your first notification of loss online and upload supporting documents securely.",
      buttonText: "Start Claim",
      buttonLink: "/claims/new",
    },
  ],
};

export default homeConfig;

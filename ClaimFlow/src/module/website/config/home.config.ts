import type { PageConfig } from "../../../shared/types/page.types";

export const homeConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Insurance You Can Rely On",
      subtitle:
        "Protecting what matters most with fast claims, trusted partners, and seamless service.",
      buttonText: "Get Insurance",
      buttonLink: "/get-insurance",
      secondaryButtonText: "Submit Claim",
      secondaryButtonLink: "/claims/new",
      image: "/images/hero-insurance.jpg",
    },

    {
      type: "stats",
      items: [
        { label: "Trusted Partners", value: "Hollard + COMESA" },
        { label: "Claims Process", value: "Digital FNOL" },
        { label: "Support", value: "Fast Assistance" },
      ],
    },

    {
      type: "cards",
      title: "Our Insurance Solutions",
      items: [
        {
          title: "Motor Insurance",
          description: "Comprehensive and third-party cover.",
          icon: "car",
        },
        {
          title: "Travel Insurance",
          description: "Regional and international travel cover.",
          icon: "plane",
        },
        {
          title: "Commercial Insurance",
          description: "Business and enterprise protection.",
          icon: "briefcase",
        },
      ],
    },

    {
      type: "feature",
      title: "Why Choose Askari Insure",
      content:
        "We combine trusted insurance expertise with digital-first service delivery.",
      bullets: [
        "Fast claims submission",
        "Secure document handling",
        "Partner-backed cover",
        "Responsive customer support",
      ],
    },

    {
      type: "cta",
      title: "Need to Submit a Claim?",
      subtitle: "Complete your first notification of loss online.",
      buttonText: "Start Claim",
      buttonLink: "/claims/new",
    },
  ],
};

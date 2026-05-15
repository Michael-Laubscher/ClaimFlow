import type { PageConfig } from "@/shared/types/page.types";

export const productsConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Our Insurance Products",
      subtitle:
        "Flexible and reliable insurance solutions tailored to your needs.",
    },
    {
      type: "cards",
      title: "Available Covers",
      items: [
        {
          title: "Motor Insurance",
          description:
            "Comprehensive and third-party motor insurance solutions.",
        },
        {
          title: "Travel Insurance",
          description:
            "Coverage for medical emergencies, cancellations, and travel disruptions.",
        },
        {
          title: "Goods in Transit",
          description:
            "Protection for goods transported locally and internationally.",
        },
        {
          title: "Commercial Insurance",
          description:
            "Business protection including assets, liability, and operations.",
        },
      ],
    },
    {
      type: "cta",
      title: "Get Covered Today",
      buttonText: "Request a Quote",
      buttonLink: "/get-insurance",
    },
  ],
};

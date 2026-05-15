import type { PageConfig } from "@/shared/types/page.types";

export const getInsuranceConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Get Insurance",
      subtitle:
        "Request a quote and get the right cover tailored to your needs.",
    },
    {
      type: "text",
      title: "How It Works",
      content:
        "Provide your details, select the type of insurance you need, and our team will get back to you with a tailored quote.",
    },
    {
      type: "cta",
      title: "Start Your Quote",
      buttonText: "Request a Quote",
      buttonLink: "/contact",
    },
  ],
};

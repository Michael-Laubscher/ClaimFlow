import type { PageConfig } from "@/shared/types/page.types";

const partnershipsConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Our Partners",
      subtitle:
        "We work with leading insurers to provide reliable and trusted cover.",
    },
    {
      type: "cards",
      title: "Insurance Partners",
      items: [
        {
          title: "Hollard Insurance",
          description:
            "A leading insurer providing innovative and reliable insurance solutions.",
        },
        {
          title: "COMESA Yellow Card",
          description:
            "Cross-border motor insurance coverage across COMESA regions.",
        },
      ],
    },
    {
      type: "text",
      title: "Why Partnerships Matter",
      content:
        "Our partnerships allow us to deliver trusted insurance products backed by established insurers, ensuring reliability and fast claims processing.",
    },
  ],
};

export default partnershipsConfig;

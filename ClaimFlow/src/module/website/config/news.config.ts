import type { PageConfig } from "../../../shared/types/page.types";

export const newsConfig: PageConfig = {
  sections: [
    {
      type: "hero",
      title: "Latest News & Updates",
      subtitle:
        "Stay informed with the latest developments and announcements.",
    },
    {
      type: "cards",
      title: "Recent Updates",
      items: [
        {
          title: "New Claims System Launched",
          description:
            "We’ve introduced a faster and more efficient claims submission system.",
        },
        {
          title: "Expanded Travel Cover",
          description:
            "Our travel insurance now includes additional international benefits.",
        },
      ],
    },
  ],
};
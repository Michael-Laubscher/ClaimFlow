import { Shield, Globe, Users, Clock3 } from "lucide-react";

import type { CoreValue, ImpactStat, MissionVisionItem, OurStory } from "@/shared/types/about.types";

export const ourStory: OurStory = {
  paragraphs: [
    "Founded in 2010, Askari Insure was born from a simple observation: African transporters and logistics operators needed an insurance partner who truly understood the challenges of cross-border trade.",

    "Today, we protect over 10,000 vehicles and cargo shipments across 15 African nations.",

    "We have built our reputation on fast claims processing, transparent coverage, and genuine partnership with our clients.",
  ],
};

export const missionVision: MissionVisionItem[] = [
  {
    id: "mission",
    icon: Shield,
    title: "Our Mission",
    desc: "To protect and empower African trade through reliable insurance solutions.",
  },
  {
    id: "vision",
    icon: Globe,
    title: "Our Vision",
    desc: "To become Africa’s most trusted transport insurance partner.",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "customer",
    icon: Users,
    iconColor: "blue",
    title: "Customer First",
    desc: "Every decision is guided by what is best for our clients.",
  },
  {
    id: "integrity",
    icon: Shield,
    iconColor: "green",
    title: "Integrity",
    desc: "We operate with honesty, transparency, and accountability.",
  },
  {
    id: "innovation",
    icon: Clock3,
    iconColor: "purple",
    title: "Innovation",
    desc: "We continuously improve to meet the needs of African trade.",
  },
];

export const impactStats: ImpactStat[] = [
  { value: "10K+", label: "Active Policies" },
  { value: "15", label: "Countries" },
  { value: "R500M+", label: "Claims Paid" },
  { value: "98%", label: "Client Satisfaction" },
];

import {
  Users,
} from "lucide-react";

import { IntegrityIcon } from "@/shared/components/design-system/svg/icons/IntegrityIcon";
import { InnovateIcon } from "@/shared/components/design-system/svg/icons/InnovateIcon";
import { TargetIcon } from "@/shared/components/design-system/svg/icons/TargetIcon";
import { EyeIcon } from "@/shared/components/design-system/svg/icons/EyeIcon";

import type {
  CoreValue,
  ImpactStat,
  MissionVisionItem,
  OurStory,
} from "@/shared/types/about.types";

export const ourStory: OurStory = {
  paragraphs: [
    "Founded in 2010, Askari Insure was born from a simple observation: African transporters and logistics operators needed an insurance partner who truly understood the unique challenges of cross-border trade on the continent.",

    "Today, we protect over 10,000 vehicles and cargo shipments across 15 African nations, from the busy ports of Mombasa to the trade corridors of West Africa. Our team of insurance experts combines deep local knowledge with international best practices.",

    "We have built our reputation on fast claims processing, transparent coverage, and genuine partnership with our clients. When your business depends on keeping goods moving, we're the insurance provider you can trust.",
  ],
};

export const missionVision: MissionVisionItem[] = [
  {
    id: "mission",
    icon: TargetIcon,
    title: "Our Mission",
    desc: "To protect and empower African trade by providing accessible, reliable, and comprehensive insurance solutions that give transporters and businesses the confidence to grow.",
  },
  {
    id: "vision",
    icon: EyeIcon,
    title: "Our Vision",
    desc: "To be Africa's most trusted insurance partner for transport and logistics, known for innovation, reliability, and unwavering commitment to our clients' success.",
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
    icon: IntegrityIcon,
    iconColor: "green",
    title: "Integrity",
    desc: "We operate with honesty, transparency, and accountability.",
  },
  {
    id: "innovation",
    icon: InnovateIcon,
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
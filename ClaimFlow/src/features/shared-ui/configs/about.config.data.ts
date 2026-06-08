import { Users } from "lucide-react";

import { EyeIcon, InnovateIcon, IntegrityIcon } from "@/shared/components/design-system/svg/icons/lucide";

import { TargetIcon } from "@/shared/components/design-system/svg/icons/lucide";
import type { CoreValue, ImpactStat, MissionVisionItem, OurStory } from "@/shared/types/about.types";

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
    desc: "Every decision we make is guided by what's best for our clients and their businesses.",
  },
  {
    id: "integrity",
    icon: IntegrityIcon,
    iconColor: "green",
    title: "Integrity",
    desc: "We operate with transparency, honesty, and accountability in everything we do.",
  },
  {
    id: "innovation",
    icon: InnovateIcon,
    iconColor: "purple",
    title: "Innovation",
    desc: "We continuously improve our services to meet the evolving needs of African trade.",
  },
];

export const impactStats: ImpactStat[] = [
  { value: "10K+", label: "Active Policies" },
  { value: "15", label: "Countries" },
  { value: "R500M+", label: "Claims Paid" },
  { value: "98%", label: "Client Satisfaction" },
];

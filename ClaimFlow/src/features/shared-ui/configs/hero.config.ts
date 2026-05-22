import type { HeroStat, Partner } from "../../../shared/types/hero.types";

export const HERO_STATS: HeroStat[] = [
  {
    value: "10K+",
    label: "Active Policies",
    delay: "delay-5",
  },
  {
    value: "15",
    label: "Countries",
    delay: "delay-6",
  },
  {
    value: "24/7",
    label: "Support",
    delay: "delay-7",
  },
];

export const PARTNERS: Partner[] = [
  { name: "Partner A" },
  { name: "Partner B" },
  { name: "Partner C" },
  { name: "Partner D" },
  { name: "Partner E" },
];

export const HERO_CONTENT = {
  badge: "Trusted by 10,000+ transporters across Africa",

  title: {
    line1: "Protecting",
    line2: "African Trade,",
    highlight: "One Journey",
    line3: "at a",
    line4: "Time",
  },

  description:
    "Comprehensive insurance solutions for transporters, fleet operators, and cross-border businesses throughout Africa.",

  claimsPaid: "R500M+",
  satisfactionRate: "98%",
};
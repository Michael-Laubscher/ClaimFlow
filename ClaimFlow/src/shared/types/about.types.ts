import type { LucideIcon } from "lucide-react";

export type CoreValueColor =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "teal";

export interface OurStory {
  paragraphs: string[];
}

export interface MissionVisionItem {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface CoreValue {
  id: string;
  icon: LucideIcon;
  iconColor: CoreValueColor;
  title: string;
  desc: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}
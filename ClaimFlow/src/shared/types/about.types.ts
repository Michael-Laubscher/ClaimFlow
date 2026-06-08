// import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export type CoreValueColor = "blue" | "green" | "purple" | "orange" | "teal";

export interface OurStory {
  paragraphs: string[];
}

export interface MissionVisionItem {
  id: string;
  icon: ComponentType<{
    className?: string;
    size?: number;
  }>;
  title: string;
  desc: string;
}

export interface CoreValue {
  id: string;
  icon: ComponentType<{
    className?: string;
    size?: number;
  }>;
  iconColor: CoreValueColor;
  title: string;
  desc: string;
}

export interface ImpactStat {
  // title?: string;
  value: string;
  label: string;
}

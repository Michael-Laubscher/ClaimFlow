import type { WaveVariant } from "./wave.types";

export const wavePaths: Record<WaveVariant, string> = {
  soft: "M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z",

  curve: "M0,60 C240,20 480,20 720,60 C960,100 1200,100 1440,60 L1440,80 L0,80 Z",

  sharp: "M0,0 L1440,80 L1440,80 L0,80 Z",

  layered: "M0,50 C300,100 1140,0 1440,50 L1440,80 L0,80 Z",

  minimal: "M0,40 Q720,0 1440,40 L1440,80 L0,80 Z",
};

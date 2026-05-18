export type WaveVariant =
  | "soft"
  | "curve"
  | "layered"
  | "sharp"
  | "minimal";

export interface WaveDividerProps {
  variant?: WaveVariant;

  fill?: string;

  flip?: boolean;

  className?: string;

  animated?: boolean;

  customPath?: string;
}
export type WaveVariant =
  | "soft"
  | "curve"
  | "sharp"
  | "layered"
  | "minimal";

export interface WaveDividerProps {
  variant?: WaveVariant;
  flip?: boolean;
  className?: string;
  animated?: boolean;
  customPath?: string;
  color?: "blue" | "white";
}
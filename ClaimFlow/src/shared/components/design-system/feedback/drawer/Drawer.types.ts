import type { ReactNode } from "react";

export type DrawerSide = "left" | "right";

export interface DrawerProps {
  opened: boolean;
  onClosed: () => void;

  title?: string;
  description?: string;

  side?: DrawerSide;

  size?: "sm" | "md" | "lg" | "xl";

  children: ReactNode;

  disableCloseOnOverlayClick?: boolean;
}

import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;

  title?: string;
  description?: string;

  size?: "sm" | "md" | "lg" | "xl";

  children: ReactNode;

  disableCloseOnOverlayClick?: boolean;
}

import type { ReactNode } from "react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastItem {
  id: string;

  title: string;

  description?: string;

  variant?: ToastVariant;

  duration?: number;

  action?: ToastAction;

  icon?: ReactNode;
}

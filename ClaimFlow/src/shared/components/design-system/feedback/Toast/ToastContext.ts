import { createContext } from "react";
import type { ToastItem } from "./Toast.types";

export interface ToastContextValue {
  show: (toast: Omit<ToastItem, "id">) => void;

  success: (toast: Omit<ToastItem, "id" | "variant">) => void;

  error: (toast: Omit<ToastItem, "id" | "variant">) => void;

  warning: (toast: Omit<ToastItem, "id" | "variant">) => void;

  info: (toast: Omit<ToastItem, "id" | "variant">) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

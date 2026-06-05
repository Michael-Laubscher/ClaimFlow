import { createContext, useCallback, useMemo, useState } from "react";

import type { ToastItem, ToastVariant } from "./Toast.types";

import { ToastViewport } from "./ToastViewport";

export interface ToastContextValue {
  show: (toast: Omit<ToastItem, "id">) => void;

  success: (toast: Omit<ToastItem, "id" | "variant">) => void;

  error: (toast: Omit<ToastItem, "id" | "variant">) => void;

  warning: (toast: Omit<ToastItem, "id" | "variant">) => void;

  info: (toast: Omit<ToastItem, "id" | "variant">) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

function createToast(toast: Omit<ToastItem, "id">, variant?: ToastVariant): ToastItem {
  return {
    ...toast,
    variant: variant ?? toast.variant ?? "info",

    id: crypto.randomUUID(),
  };
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const item = createToast(toast);

      setToasts((prev) => [item, ...prev]);

      const duration = toast.duration ?? 5000;

      setTimeout(() => {
        removeToast(item.id);
      }, duration);
    },
    [removeToast]
  );

  const createVariant = (variant: ToastVariant) => (toast: Omit<ToastItem, "id" | "variant">) =>
    show({
      ...toast,
      variant,
    });

  const value = useMemo(
    () => ({
      show,

      success: createVariant("success"),

      error: createVariant("error"),

      warning: createVariant("warning"),

      info: createVariant("info"),
    }),
    [show]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastViewport toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

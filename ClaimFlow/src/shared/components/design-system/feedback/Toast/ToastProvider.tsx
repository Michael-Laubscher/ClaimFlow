import { useCallback, useMemo, useState } from "react";

import { ToastContext } from "./ToastContext";
import { ToastViewport } from "./ToastViewport";

import type { ToastItem, ToastVariant } from "./Toast.types";

function createToast(toast: Omit<ToastItem, "id">, variant?: ToastVariant): ToastItem {
  return {
    ...toast,
    variant: variant ?? toast.variant ?? "info",
    id: crypto.randomUUID(),
  };
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const item = createToast(toast);

      setToasts((prev) => [item, ...prev]);

      const duration = toast.duration ?? 5000;

      window.setTimeout(() => {
        removeToast(item.id);
      }, duration);
    },
    [removeToast]
  );

  const success = useCallback(
    (toast: Omit<ToastItem, "id" | "variant">) =>
      show({
        ...toast,
        variant: "success",
      }),
    [show]
  );

  const error = useCallback(
    (toast: Omit<ToastItem, "id" | "variant">) =>
      show({
        ...toast,
        variant: "error",
      }),
    [show]
  );

  const warning = useCallback(
    (toast: Omit<ToastItem, "id" | "variant">) =>
      show({
        ...toast,
        variant: "warning",
      }),
    [show]
  );

  const info = useCallback(
    (toast: Omit<ToastItem, "id" | "variant">) =>
      show({
        ...toast,
        variant: "info",
      }),
    [show]
  );

  const value = useMemo(
    () => ({
      show,
      success,
      error,
      warning,
      info,
    }),
    [show, success, error, warning, info]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastViewport toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

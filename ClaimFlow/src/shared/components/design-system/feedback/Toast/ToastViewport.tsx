import { AnimatePresence } from "framer-motion";

import { Toast } from "./Toast";
import type { ToastItem } from "./Toast.types";

interface Props {
  toasts: ToastItem[];

  removeToast: (id: string) => void;
}

export function ToastViewport({ toasts, removeToast }: Props) {
  return (
    <div
      className="
        fixed
        right-5
        top-5
        z-[999]
        flex
        w-full
        max-w-md
        flex-col
        gap-3
      "
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

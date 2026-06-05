import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/shared/lib/cn";
import { Card } from "../../composite/card/Card";

import type { ModalProps } from "./Modal.types";
import { ModalContext } from "./ModalContext";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import { ModalOverlay } from "./ModalOverlay";
import { ModalPortal } from "./ModalPortal";

const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export function Modal({ open, onClose, title, description, size = "md", children, disableCloseOnOverlayClick }: ModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <ModalPortal>
          <ModalContext.Provider value={{ close: onClose }}>
            <ModalOverlay
              onClick={() => {
                if (!disableCloseOnOverlayClick) {
                  onClose();
                }
              }}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
                className={cn("w-full", sizeStyles[size])}
              >
                <Card
                  variant="glass"
                  className="
    relative
    overflow-hidden
    border border-[var(--color-border)]
    bg-[var(--color-surface-elevated)]
    shadow-[var(--shadow-lg)]
    rounded-[var(--radius-xl)]
    backdrop-blur-xl
  "
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500 opacity-10 blur-[100px]" />
                  </div>
                  {(title || description) && <ModalHeader title={title} description={description} onClose={onClose} />}

                  <div className="relative px-6 py-5 text-[var(--color-text-primary)]">{children}</div>

                  <ModalFooter>{/* footer injected via children or separate API */}</ModalFooter>
                </Card>
              </motion.div>
            </div>
          </ModalContext.Provider>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
}

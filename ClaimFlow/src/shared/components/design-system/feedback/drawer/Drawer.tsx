import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { cn } from "@/shared/lib/cn";

import { DrawerFooter } from "./DrawerFooter";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerOverlay } from "./DrawerOverlay";

import type { DrawerProps } from "./Drawer.types";

const sizeStyles = {
  sm: "w-[320px]",
  md: "w-[420px]",
  lg: "w-[560px]",
  xl: "w-[720px]",
};

export function Drawer({ opened, onClosed, title, description, side = "right", size = "md", children, disableCloseOnOverlayClick }: DrawerProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClosed();
    }

    if (opened) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [opened, onClosed]);

  const isRight = side === "right";

  return (
    <AnimatePresence>
      {opened && (
        <>
          <DrawerOverlay
            onClick={() => {
              if (!disableCloseOnOverlayClick) {
                onClosed();
              }
            }}
          />

          <div className="fixed inset-0 z-50 flex">
            <motion.div
              initial={{
                x: isRight ? "100%" : "-100%",
              }}
              animate={{ x: 0 }}
              exit={{
                x: isRight ? "100%" : "-100%",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className={cn(
                `
                h-full
                bg-[#071852]/95
                backdrop-blur-xl
                border-white/10
                shadow-2xl
                flex
                flex-col
              `,
                sizeStyles[size],
                isRight ? "ml-auto border-l" : "mr-auto border-r"
              )}
            >
              {(title || description) && <DrawerHeader title={title} description={description} onClose={onClosed} />}

              <div className="flex-1 overflow-y-auto p-5 text-white">{children}</div>

              <DrawerFooter>{/* optional footer injection */}</DrawerFooter>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

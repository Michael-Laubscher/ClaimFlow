import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/shared/lib/cn";

import type { TooltipPosition, TooltipProps } from "./tooltip.types";

const positionStyles: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({ content, children, position = "top", delay = 150, className }: TooltipProps) {
  const [open, setOpen] = useState(false);

  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
  });

  const timeoutRef = useRef<number | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;

    const updatePosition = () => {
      const rect = triggerRef.current?.getBoundingClientRect();

      if (!rect) return;

      setCoords({
        top: rect.top,
        left: rect.left,
      });
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  function show() {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(true);
    }, delay);
  }

  function hide() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(false);
  }

  return (
    <div ref={triggerRef} className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide}>
      {children}

      {open &&
        createPortal(
          <div
            className={cn("fixed z-50 pointer-events-none", className)}
            style={{
              top: coords.top,
              left: coords.left,
            }}
          >
            <div
              className={cn(
                `
                  absolute
                  whitespace-nowrap
                  rounded-lg
                  bg-black/80
                  px-3
                  py-1.5
                  text-xs
                  text-white
                  backdrop-blur-md
                  shadow-lg
                `,
                positionStyles[position]
              )}
            >
              {content}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

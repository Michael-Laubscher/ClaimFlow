import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useRef } from "react";

import { X } from "lucide-react";

import { cn } from "@/shared/lib/cn";

import type { ModalProps } from "./Modal.types";

import { ModalPortal } from "./ModalPortal";

const sizeStyles = {
  sm: "max-w-md",

  md: "max-w-lg",

  lg: "max-w-2xl",

  xl: "max-w-4xl",
};

export function Modal({
  open,

  onClose,

  title,

  description,

  size = "md",

  children,

  image,

  footer,

  disableCloseOnOverlayClick = false,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  /*
   * Keyboard + focus handling
   */

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement;

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      modalRef.current?.focus();
    }, 50);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);

      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <ModalPortal>
          {/* BACKDROP */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-slate-950/60
              backdrop-blur-sm
            "
            onClick={() => {
              if (!disableCloseOnOverlayClick) {
                onClose();
              }
            }}
          />

          {/* CONTAINER */}

          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              p-4
            "
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              className={cn("w-full", sizeStyles[size])}
            >
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_30px_80px_-25px_rgba(15,23,42,.35)]
                "
              >
                {/* HEADER */}

                <header
                  className="
                    relative
                    flex
                    items-start
                    justify-between
                    gap-4
                    border-b
                    border-slate-200
                    px-6
                    py-5
                  "
                >
                  <div>
                    {title && (
                      <h2
                        id="modal-title"
                        className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-slate-900
                        "
                      >
                        {title}
                      </h2>
                    )}

                    {description && (
                      <p
                        className="
                          mt-1
                          text-sm
                          text-slate-500
                        "
                      >
                        {description}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close dialog"
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      text-slate-500
                      transition
                      hover:bg-slate-100
                      hover:text-slate-900
                      focus:outline-none
                      focus:ring-2
                      focus:ring-green-500
                    "
                  >
                    <X size={20} />
                  </button>
                </header>

                {/* OPTIONAL IMAGE */}

                {image && (
                  <div
                    className="
                      px-6
                      pt-6
                    "
                  >
                    <img
                      src={image}
                      alt=""
                      className="
                        h-64
                        w-full
                        rounded-2xl
                        object-cover
                      "
                    />
                  </div>
                )}

                {/* CONTENT */}

                <section
                  className="
                    max-h-[60vh]
                    overflow-y-auto
                    px-6
                    py-6
                    text-slate-700
                  "
                >
                  {children}
                </section>

                {/* FOOTER */}

                {footer && (
                  <footer
                    className="
                      flex
                      flex-col
                      gap-3
                      border-t
                      border-slate-200
                      bg-slate-50
                      px-6
                      py-5
                      sm:flex-row
                      sm:justify-end
                    "
                  >
                    {footer}
                  </footer>
                )}
              </div>
            </motion.div>
          </div>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
}

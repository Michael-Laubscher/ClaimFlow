import { cn } from "@/shared/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function AccordionItem({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300",
        open
          ? "border-blue-500/20 bg-gradient-to-br from-[#071852] to-[#0c2369] text-white shadow-[0_12px_40px_rgba(7,24,82,0.35)]"
          : "border-white/15 bg-white/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
      )}
    >
      {/* Subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />

      {/* Active glow */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileTap={{ scale: 0.99 }} onClick={() => setOpen((v) => !v)} className="relative z-10 flex w-full items-center justify-between px-5 py-4 text-left">
        <div className="font-medium">{title}</div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
          }}
        >
          <ChevronDown size={18} className={cn("transition-colors duration-300", open ? "text-white/90" : "text-white/60")} />
        </motion.div>
      </motion.button>

      {/* Divider */}
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-5 h-px bg-white/10" />}</AnimatePresence>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
            className="overflow-hidden"
          >
            <motion.div initial={{ y: -6 }} animate={{ y: 0 }} exit={{ y: -6 }} transition={{ duration: 0.25 }} className="px-5 pb-5 pt-4 text-white/75">
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import { useState, type ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("rounded-xl border border-white/10 bg-white/5 transition-all", open && "bg-white/10")}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-5 py-4 text-left">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className={cn("transition-transform", open && "rotate-180")}>▼</div>
      </button>

      {open && <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed">{children}</div>}
    </div>
  );
}

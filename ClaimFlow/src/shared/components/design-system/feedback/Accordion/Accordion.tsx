import { cn } from "@/shared/lib/cn";
import { useState } from "react";

export function AccordionItem({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("rounded-xl bg-white/5 border border-white/10")}>
      <button className="w-full flex justify-between px-4 py-3" onClick={() => setOpen(!open)}>
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

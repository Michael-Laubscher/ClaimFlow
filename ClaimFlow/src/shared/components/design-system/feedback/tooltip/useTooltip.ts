import { useState } from "react";

export function useTooltip() {
  const [open, setOpen] = useState(false);

  return {
    open,
    show: () => setOpen(true),
    hide: () => setOpen(false),
    toggle: () => setOpen((v) => !v),
  };
}

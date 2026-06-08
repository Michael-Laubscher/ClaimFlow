import { useState } from "react";

export function useDrawer(initial = false) {
  const [open, setOpen] = useState(initial);

  return {
    open,
    setOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
  };
}

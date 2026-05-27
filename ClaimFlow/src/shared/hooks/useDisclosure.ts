import { useState } from "react";

export function useDisclosure(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,

    toggle: () => setOpen((prev) => !prev),

    close: () => setOpen(false),

    openMenu: () => setOpen(true),
  };
}

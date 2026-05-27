import { useState } from "react";

export function useNavController() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const close = () => setOpenKey(null);

  const isOpen = (key: string) => openKey === key;

  return {
    openKey,
    toggle,
    close,
    isOpen,
  };
}

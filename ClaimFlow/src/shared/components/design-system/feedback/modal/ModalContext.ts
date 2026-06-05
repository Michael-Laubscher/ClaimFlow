import { createContext, useContext } from "react";

interface ModalContextValue {
  close: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export function useModalContext() {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error("useModalContext must be used inside Modal");
  }

  return ctx;
}

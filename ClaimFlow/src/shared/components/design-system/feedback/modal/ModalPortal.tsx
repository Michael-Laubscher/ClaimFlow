import { createPortal } from "react-dom";

export function ModalPortal({ children }: { children: React.ReactNode }) {
  const root = document.getElementById("modal-root") || document.body;

  return createPortal(children, root);
}

import { motion } from "framer-motion";

export function ModalOverlay({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed inset-0 z-40
        bg-black/60
        backdrop-blur-md
      "
      onClick={onClick}
    />
  );
}

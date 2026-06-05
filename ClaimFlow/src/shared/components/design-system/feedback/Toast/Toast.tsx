import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

import { Button } from "../../primitives/buttons/Button";
import type { ToastItem, ToastVariant } from "./Toast.types";

interface Props {
  toast: ToastItem;
  onClose: (id: string) => void;
}

const variantStyles: Record<
  ToastVariant,
  {
    icon: any;
    iconColor: string;
    iconBg: string;
    glow: string;
    border: string;
  }
> = {
  success: {
    icon: CheckCircle2,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    glow: "bg-emerald-500/20",
    border: "border-emerald-500/20",
  },

  error: {
    icon: XCircle,
    iconColor: "text-red-400",
    iconBg: "bg-red-500/15",
    glow: "bg-red-500/20",
    border: "border-red-500/20",
  },

  warning: {
    icon: AlertTriangle,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
    glow: "bg-amber-500/20",
    border: "border-amber-500/20",
  },

  info: {
    icon: Info,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
    glow: "bg-blue-500/20",
    border: "border-blue-500/20",
  },
};

export function Toast({ toast, onClose }: Props) {
  const variant = variantStyles[toast.variant ?? "info"];

  const Icon = variant.icon;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 24,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: 30,
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 28,
      }}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-[#071852]/95
        backdrop-blur-xl
        shadow-[0_12px_50px_rgba(0,0,0,0.4)]
        ${variant.border}
      `}
    >
      <div
        className={`
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          blur-3xl
          ${variant.glow}
        `}
      />

      <div className="relative p-5">
        <div className="flex gap-4">
          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${variant.iconBg}
            `}
          >
            <Icon size={20} className={variant.iconColor} />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-white">{toast.title}</h4>

            {toast.description && <p className="mt-1 text-sm text-white/65">{toast.description}</p>}

            {toast.action && (
              <div className="mt-4">
                <Button size="sm" variant="outline" onClick={toast.action.onClick}>
                  {toast.action.label}
                </Button>
              </div>
            )}
          </div>

          <button
            onClick={() => onClose(toast.id)}
            className="
              text-white/40
              transition-colors
              hover:text-white
            "
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

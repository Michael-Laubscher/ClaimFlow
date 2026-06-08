import { cn } from "@/shared/lib/cn";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { ComponentType } from "react";

type NotificationVariant = "info" | "success" | "warning" | "error";

type NotificationProps = {
  title: string;
  description?: string;
  variant?: NotificationVariant;
  onClose: () => void;
};

type VariantStyles = {
  icon: ComponentType<{ size?: number; className?: string }>;
  ring: string;
  glow: string;
  iconBg: string;
  iconColor: string;
};

const variants: Record<NotificationVariant, VariantStyles> = {
  info: {
    icon: X, // replace with your actual info icon
    ring: "border-blue-500/20",
    glow: "bg-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-300",
  },
  success: {
    icon: X, // replace with CheckCircle
    ring: "border-green-500/20",
    glow: "bg-green-500/30",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-300",
  },
  warning: {
    icon: X, // replace with AlertTriangle
    ring: "border-yellow-500/20",
    glow: "bg-yellow-500/30",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-300",
  },
  error: {
    icon: X, // replace with AlertCircle
    ring: "border-red-500/20",
    glow: "bg-red-500/30",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-300",
  },
};

export function Notification({ title, description, variant = "info", onClose }: NotificationProps) {
  const styles = variants[variant] ?? variants.info;
  const Icon = styles.icon ?? X;

  return (
    <motion.div
      role="alert"
      aria-live="polite"
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8 }}
      className={cn(
        `
        relative overflow-hidden
        rounded-2xl
        border
        backdrop-blur-xl
        bg-[#0f172a]/90
        p-5
        shadow-2xl
        `,
        styles.ring
      )}
    >
      <div
        className={cn(
          `
          absolute
          -top-20
          right-0
          h-40
          w-40
          rounded-full
          blur-3xl
        `,
          styles.glow
        )}
      />

      <div className="relative flex gap-4 items-start">
        <div
          className={cn(
            `
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
          `,
            styles.iconBg
          )}
        >
          <Icon className={styles.iconColor} size={20} />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-white">{title}</h4>

          {description ? <p className="mt-1 text-sm text-white/65">{description}</p> : null}
        </div>

        <button type="button" onClick={onClose} aria-label="Close notification" className="p-1 rounded hover:bg-white/10 transition">
          <X size={16} className="text-white/50 hover:text-white" />
        </button>
      </div>
    </motion.div>
  );
}

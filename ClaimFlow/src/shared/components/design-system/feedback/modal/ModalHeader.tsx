import { X } from "lucide-react";

export function ModalHeader({ title, description, onClose }: { title?: string; description?: string; onClose: () => void }) {
  return (
    <div className="flex items-start justify-between border-b border-white/10 p-6">
      <div>
        {title && <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h2>}

        {description && <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>}
      </div>

      <button
        onClick={onClose}
        className="
          rounded-lg
          p-2
          text-white/50
          transition
          hover:bg-white/10
          hover:text-white
        "
      >
        <X size={18} />
      </button>
    </div>
  );
}

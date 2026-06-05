import { X } from "lucide-react";

export function DrawerHeader({ title, description, onClose }: { title?: string; description?: string; onClose: () => void }) {
  return (
    <div className="flex items-start justify-between border-b border-white/10 p-5">
      <div>
        {title && <h3 className="text-base font-semibold text-white">{title}</h3>}

        {description && <p className="mt-1 text-sm text-white/60">{description}</p>}
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

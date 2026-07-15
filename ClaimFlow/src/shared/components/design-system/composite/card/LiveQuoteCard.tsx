import { CheckCircle2 } from "lucide-react";

export function LiveQuoteCard() {
  return (
    <div
      className="
        absolute
        right-0 top-28
        sm:right-6 sm:top-28
        md:-right-4 md:top-36
        lg:-right-10 lg:top-40

        z-30
        animate-float

        rounded-2xl lg:rounded-3xl
        border border-white/10
        bg-white/10

        px-3 py-3
        sm:px-4 sm:py-4
        lg:px-5 lg:py-4

        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(0,0,0,.35)]
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 size={18} className="text-emerald-400" />
        </div>

        <div>
          <p className="text-xs sm:text-sm font-semibold text-white">
            Quote Approved
          </p>

          <p className="text-[10px] sm:text-xs text-white/50">
            2 seconds ago
          </p>
        </div>
      </div>
    </div>
  );
}
import { ShieldCheck } from "lucide-react";

export function AIRiskCard() {
  return (
    <div
      className="
        absolute
        bottom-24 right-16
        sm:bottom-10 sm:right-6
        md:bottom-20 md:right-16
        lg:bottom-36 lg:right-28

        z-30
        animate-float-delayed

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
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-2xl bg-blue-500/20">
          <ShieldCheck size={20} className="text-blue-300" />
        </div>

        <div>
          <p className="text-xs sm:text-sm font-semibold text-white">
            AI Risk Analysis
          </p>

          <div className="mt-1 flex items-center gap-2">
            <div className="h-2 w-16 sm:w-20 lg:w-24 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
            </div>

            <span className="text-[10px] sm:text-xs text-white/70">
              97%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
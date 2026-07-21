import { TrendingUp } from "lucide-react";

export function ClaimsCard() {
  return (
    <div
      className="
        absolute
        left-0 top-16
        sm:left-0 sm:top-10
        md:-left-4 md:top-20
        lg:-left-10 lg:top-28

        z-30
        animate-float-slow

        rounded-2xl lg:rounded-3xl
        border border-white/10
        bg-white/10
        p-3 sm:p-4 lg:p-5

        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(0,0,0,.35)]
      "
    >
      <div className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-medium text-orange-200">
        <TrendingUp size={14} />
        Claims performance
      </div>

      <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">15M+</div>

      <p className="mt-1 text-xs sm:text-sm text-white/50">Claims paid successfully</p>
    </div>
  );
}

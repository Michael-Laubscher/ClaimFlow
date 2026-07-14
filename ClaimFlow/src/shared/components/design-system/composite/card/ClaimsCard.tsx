import { TrendingUp } from "lucide-react";

export function ClaimsCard() {
  return (
    <div
      className="
      absolute

      -left-10

      top-28

      z-30

      animate-float-slow

      rounded-3xl

      border

      border-white/10

      bg-white/10

      p-5

      backdrop-blur-xl

      shadow-[0_25px_80px_rgba(0,0,0,.35)]

      "
    >
      <div
        className="
        mb-3

        flex

        items-center

        gap-2

        text-xs

        font-medium

        text-orange-200
        "
      >
        <TrendingUp size={14} />

        Claims performance
      </div>


      <div
        className="
        text-3xl

        font-black

        tracking-tight

        text-white
        "
      >
        15M+
      </div>


      <p
        className="
        mt-1

        text-sm

        text-white/50
        "
      >
        Claims paid successfully
      </p>
    </div>
  );
}
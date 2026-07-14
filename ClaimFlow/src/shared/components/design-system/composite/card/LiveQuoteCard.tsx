import { CheckCircle2 } from "lucide-react";

export function LiveQuoteCard() {
  return (
    <div
      className="
      absolute

      -right-10

      top-40

      z-30

      animate-float

      rounded-3xl

      border

      border-white/10

      bg-white/10

      px-5

      py-4

      backdrop-blur-xl

      shadow-[0_25px_80px_rgba(0,0,0,.35)]
      "
    >
      <div
        className="
        flex

        items-center

        gap-3
        "
      >
        <div
          className="
          flex

          h-10

          w-10

          items-center

          justify-center

          rounded-full

          bg-emerald-500/20
          "
        >
          <CheckCircle2
            size={20}
            className="text-emerald-400"
          />
        </div>


        <div>
          <p
            className="
            text-sm

            font-semibold

            text-white
            "
          >
            Quote Approved
          </p>

          <p
            className="
            text-xs

            text-white/50
            "
          >
            2 seconds ago
          </p>
        </div>
      </div>
    </div>
  );
}
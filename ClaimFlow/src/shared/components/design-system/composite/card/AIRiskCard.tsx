import { ShieldCheck } from "lucide-react";

export function AIRiskCard() {
  return (
    <div
      className="
      absolute

      bottom-36

      right-28

      z-30

      animate-float-delayed

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

          h-11

          w-11

          items-center

          justify-center

          rounded-2xl

          bg-blue-500/20
          "
        >
          <ShieldCheck size={22} className="text-blue-300" />
        </div>

        <div>
          <p
            className="
            text-sm

            font-semibold

            text-white
            "
          >
            AI Risk Analysis
          </p>

          <div
            className="
            mt-1

            flex

            items-center

            gap-2
            "
          >
            <div
              className="
              h-2

              w-24

              overflow-hidden

              rounded-full

              bg-white/10
              "
            >
              <div
                className="
                h-full

                w-[97%]

                rounded-full

                bg-gradient-to-r

                from-blue-400

                to-cyan-300
                "
              />
            </div>

            <span
              className="
              text-xs

              text-white/70
              "
            >
              97%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

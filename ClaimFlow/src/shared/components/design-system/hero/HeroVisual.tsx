import { HERO_CONTENT } from "@/features/shared-ui/configs";

import { FloatingCard } from "@/shared/components/design-system/surface/FloatingCard";
import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";
import { ShieldCheckIcon } from "@/shared/components/design-system/svg";

interface HeroVisualProps {
  loaded: boolean;
}

export function HeroVisual({ loaded }: HeroVisualProps) {
  return (
    <div
      className={`
        pre-animate
        ${loaded ? "animate-right delay-3" : ""}
        relative flex flex-1 justify-center
      `}
    >
      <div className="relative w-full max-w-md sm:max-w-lg">
        <FloatingCard className="-right-1 -top-4 sm:right-4 sm:-top-6">
          <div className="claims-badge px-4 py-3 text-center text-white shadow-2xl sm:px-5">
            <div className="text-xl font-extrabold sm:text-2xl">{HERO_CONTENT.claimsPaid}</div>

            <div className="mt-0.5 text-xs text-orange-100">Claims Paid</div>
          </div>
        </FloatingCard>

        <div className="truck-card relative aspect-[4/3] w-full">
          <div className="truck-img-placeholder h-full min-h-[260px] w-full sm:min-h-[320px] lg:min-h-[380px]">{/* Truck Image */}</div>
        </div>

        <FloatingCard className="-bottom-4 left-0 sm:-bottom-6 sm:-left-6">
          <GlassCard className="flex min-w-[220px] items-center gap-3 px-4 py-3 sm:px-5 sm:py-4">
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
              }}
            >
              <ShieldCheckIcon size={20} className="text-white" />
            </div>

            <div>
              <div className="text-xl font-extrabold text-gray-900 sm:text-2xl">{HERO_CONTENT.satisfactionRate}</div>

              <div className="text-xs text-gray-400">Satisfaction Rate</div>
            </div>
          </GlassCard>
        </FloatingCard>

        <div className="pointer-events-none absolute -bottom-10 -right-10 hidden h-40 w-40 rounded-full border border-white/10 lg:block" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 hidden h-72 w-72 rounded-full border border-white/5 lg:block" />
      </div>
    </div>
  );
}

import { ArrowRight, ShieldCheck, Clock3 } from "lucide-react";

import { Button } from "../primitives/buttons/Button";

export function HeroActions() {
  return (
    <div className="space-y-6">
      {/* CTA Row */}
      <div
        className="
        flex
        flex-col
        items-start
        gap-4

        sm:flex-row
        sm:items-center
        "
      >
        {/* Primary CTA */}
        <Button
          to="/claims/get-quote"
          size="lg"
          className="
          inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[var(--color-primary)] text-white hover:opacity-90 h-12 text-base rounded-full px-7 shadow-lg shadow-blue-900/20
          "
          iconRight={
            <ArrowRight
              className="
              transition-transform
              duration-300
              
              "
            />
          }
        >
          Get Your Instant Quote
          
          <span
            className="
            pointer-events-none

            absolute

            inset-y-0

            -left-20

            w-16

            rotate-12

            bg-white/30

            blur-md

            transition-all

            duration-1000

            group-hover:left-[120%]
            "
          />
        </Button>

        {/* Secondary CTA */}
        <Button
          to="/products"
          variant="ghost"
          size="lg"
          className="
          group

          px-2

          text-base

          font-medium

          text-white/80

          hover:bg-transparent

          hover:text-white
          "
        >
          Explore Products
          <ArrowRight
            size={18}
            className="
            ml-2

            transition-transform

            duration-300

            group-hover:translate-x-1
            "
          />
        </Button>
      </div>

      {/* Trust Row */}
      <div
        className="
        flex

        flex-wrap

        items-center

        gap-x-6

        gap-y-1

        text-sm

        text-slate-400
        "
      >
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />

          <span>No paperwork required</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={16} className="text-sky-400" />

          <span>Quotes in under 60 seconds</span>
        </div>
        
      </div>
    </div>
  );
}

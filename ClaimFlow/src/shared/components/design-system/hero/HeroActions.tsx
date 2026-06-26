import { ArrowRight } from "lucide-react";

import { Button } from "../primitives/buttons/Button";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Button
        to="/claims/get-quote"
        variant="primary"
        size="lg"
        className="
          group
          w-full
          sm:w-auto
          rounded-full
          px-8
          shadow-lg
          shadow-orange-500/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
        iconRight={
          <ArrowRight
            className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        }
      >
        Get Instant Quote
      </Button>

      <Button
        to="/products"
        variant="outline"
        size="lg"
        className="
          group
          w-full
          sm:w-auto
          rounded-full
          border-slate-300
          bg-white
          px-8
          text-black
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[--color-orange]
          hover:bg-white/30
          hover:text-[--color-orange]
        "
      >
        View Products
        <ArrowRight
          className="
            ml-2
            h-5
            w-5
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Button>
    </div>
  );
}

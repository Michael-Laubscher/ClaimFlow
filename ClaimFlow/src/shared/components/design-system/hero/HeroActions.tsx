import { ArrowRight } from "lucide-react";

import { Button } from "../primitives/buttons/Button";

export function HeroActions() {
  return (
    <div
      className="
mt-10

flex

flex-col

gap-4

sm:flex-row

"
    >
      <Button
        to="/claims/get-quote"
        size="lg"
        className="
rounded-full

px-8

shadow-xl

shadow-orange-500/20

hover:-translate-y-1

"
        iconRight={<ArrowRight />}
      >
        Get Instant Quote
      </Button>

      <Button
        to="/products"
        variant="outline"
        size="lg"
        className="
rounded-full

border-white/30

bg-white/10

text-white

backdrop-blur-md

hover:bg-white/20

"
      >
        View Products
      </Button>
    </div>
  );
}

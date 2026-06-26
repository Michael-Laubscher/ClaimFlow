import type { BannerCTA } from "@/shared/types/banner.types";

import { Button } from "../../primitives/buttons/Button";

export function BannerActions({
  primary,

  secondary,
}: {
  primary?: BannerCTA;

  secondary?: BannerCTA;
}) {
  if (!primary && !secondary) return null;

  return (
    <div
      className="
mt-10

flex

flex-wrap

gap-4

"
    >
      {primary && (
        <Button
          {...primary}
          size="lg"
          className="
rounded-full

px-8

shadow-xl

shadow-blue-900/30

"
        >
          {primary.label}
        </Button>
      )}

      {secondary && (
        <Button
          variant="outline"
          {...secondary}
          size="lg"
          className="
rounded-full

border-white/20

bg-white/10

text-white

backdrop-blur-md

hover:bg-white/20

"
        >
          {secondary.label}
        </Button>
      )}
    </div>
  );
}

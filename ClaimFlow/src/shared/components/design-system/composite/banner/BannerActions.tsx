import type { BannerCTA } from "@/shared/types/banner.types";
import { Button } from "../../primitives/buttons/Button";



interface Props {
  primary?: BannerCTA;
  secondary?: BannerCTA;
}

export function BannerActions({
  primary,
  secondary,
}: Props) {
  if (!primary && !secondary) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {primary && (
        <Button {...primary}>
          {primary.label}
        </Button>
      )}

      {secondary && (
        <Button variant="outline" {...secondary}>
          {secondary.label}
        </Button>
      )}
    </div>
  );
}
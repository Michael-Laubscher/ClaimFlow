import { HERO_CONTENT } from "@/features/shared-ui/configs";

import { Reveal } from "@/shared/components/design-system/feedback/Reveal";

import { HeroActions } from "./HeroActions";
import { HeroHeadline } from "./HeroHeadline";
import { HeroStats } from "./HeroStats";
import { HeroBadge } from "./Herobadge";

interface HeroContentProps {
  loaded: boolean;
}

export function HeroContent({ loaded }: HeroContentProps) {
  return (
    <div className="flex-1 text-center text-white lg:text-left">
      <Reveal loaded={loaded} animation="animate-up" delay="delay-1">
        <HeroBadge />
      </Reveal>

      <Reveal loaded={loaded} animation="animate-left" delay="delay-2">
        <HeroHeadline />
      </Reveal>

      <Reveal loaded={loaded} animation="animate-up" delay="delay-3">
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg lg:mx-0">{HERO_CONTENT.description}</p>
      </Reveal>

      <Reveal loaded={loaded} animation="animate-up" delay="delay-4">
        <HeroActions />
      </Reveal>

      <HeroStats loaded={loaded} />
    </div>
  );
}

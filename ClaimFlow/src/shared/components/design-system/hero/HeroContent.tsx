import { HERO_CONTENT } from "@/features/shared-ui/configs";

import { Reveal } from "@/shared/components/design-system/feedback/Reveal";

import { HeroActions } from "./HeroActions";
import { HeroHeadline } from "./HeroHeadline";
import { HeroStats } from "./HeroStats";
import { HeroBadge } from "./Herobadge";

interface Props {
  loaded: boolean;
}

export function HeroContent({ loaded }: Props) {
  return (
    <div
      className="
max-w-2xl

text-center

lg:text-left

"
    >
      <Reveal loaded={loaded} animation="animate-up">
        <HeroBadge />
      </Reveal>

      <Reveal loaded={loaded} animation="animate-left">
        <HeroHeadline />
      </Reveal>

      <Reveal loaded={loaded} animation="animate-up">
        <p
          className="
mt-6

max-w-xl

text-lg

leading-8

text-blue-100/80

"
        >
          {HERO_CONTENT.description}
        </p>
      </Reveal>

      <Reveal loaded={loaded} animation="animate-up">
        <HeroActions />
      </Reveal>

      <HeroStats />
    </div>
  );
}

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
      relative

      max-w-[720px]

      lg:pr-10
      "
    >
      {/* Announcement Badge */}
      <Reveal loaded={loaded} animation="animate-up">
        <HeroBadge />
      </Reveal>

      {/* Headline */}
      <Reveal loaded={loaded} animation="animate-up">
        <HeroHeadline />
      </Reveal>

      {/* Description */}
      <Reveal loaded={loaded} animation="animate-up">
        <p
          className="
          mt-10

          max-w-2xl

          text-[20px]

          leading-[1.9]

          tracking-[-0.01em]

          text-slate-300
          "
        >
          {HERO_CONTENT.description}
        </p>
      </Reveal>

      {/* CTA */}
      <Reveal loaded={loaded} animation="animate-up">
        <div className="mt-12">
          <HeroActions />
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal loaded={loaded} animation="animate-up">
        <div className="mt-14">
          <HeroStats />
        </div>
      </Reveal>
    </div>
  );
}

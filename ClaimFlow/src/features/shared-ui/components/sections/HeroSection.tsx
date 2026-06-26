import "@/shared/css/globals.css";

import { HeroContent } from "@/shared/components/design-system/hero/HeroContent";
import { HeroVisual } from "@/shared/components/design-system/hero/HeroVisual";

import { Container } from "@/shared/components/design-system/layout/Container";
import { WaveDivider } from "@/shared/components/design-system/svg/wave";

export function HeroSection() {
  const loaded = true;

  return (
    <section
      className="
relative
overflow-hidden

hero-bg

min-h-[760px]

"
    >
      <Container
        className="
relative
z-10

flex
items-center

py-20

lg:py-28

"
      >
        <div
          className="
grid
w-full

gap-14

lg:grid-cols-[1.05fr_.95fr]

lg:items-center

"
        >
          <HeroContent loaded={loaded} />

          <HeroVisual loaded={loaded} />
        </div>
      </Container>

      <WaveDivider color="white" />
    </section>
  );
}

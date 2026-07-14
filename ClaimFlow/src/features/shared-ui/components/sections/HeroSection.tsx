import "@/shared/css/globals.css";

import { HeroContent } from "@/shared/components/design-system/hero/HeroContent";
import { HeroVisual } from "@/shared/components/design-system/hero/HeroVisual";

import { Container } from "@/shared/components/design-system/layout/Container";

import { WaveDivider } from "@/shared/components/design-system/svg/wave";
import { HeroBackground } from "@/shared/components/design-system/hero/HeroBackground";

export function HeroSection() {
  const loaded = true;

  return (
    <section
      className="
  relative
  isolate
  overflow-hidden

  min-h-screen

  bg-gradient-to-r

  from-blue-950

  via-blue-900

  to-slate-900

  text-white
  "
    >
      <HeroBackground />

      <Container
        className="
        relative
        z-20

        flex
        min-h-screen
        items-center

        pt-36
        pb-24
        "
      >
        <div
          className="
          grid
          w-full
          items-center
          gap-24

          lg:grid-cols-[1.1fr_.9fr]
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

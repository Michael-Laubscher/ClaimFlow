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
          items-center

          min-h-screen

          pt-28
          pb-16

          sm:pt-32
          sm:pb-20

          lg:pt-36
          lg:pb-24
        "
      >
        <div
          className="
            w-full

            flex
            flex-col

            items-center

            gap-2

            md:gap-20

            lg:grid
            lg:grid-cols-[1.1fr_.9fr]
            lg:items-center
            lg:gap-24
          "
        >
          {/* Text */}
          <div className="w-full">
            <HeroContent loaded={loaded} />
          </div>

          {/* Visual */}
          <div
            className="
              flex
              w-full
              justify-center

              lg:justify-end
            "
          >
            <HeroVisual loaded={loaded} />
          </div>
        </div>
      </Container>

      <WaveDivider color="white" />
    </section>
  );
}
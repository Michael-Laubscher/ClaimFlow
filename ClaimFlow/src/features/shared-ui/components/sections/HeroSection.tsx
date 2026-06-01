import "@/shared/css/globals.css";

import { HeroContent } from "@/shared/components/design-system/hero/HeroContent";
import { HeroVisual } from "@/shared/components/design-system/hero/HeroVisual";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { WaveDivider } from "@/shared/components/design-system/svg/wave";

export function HeroSection() {
  const loaded = true;

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased">
      <Section className="hero-bg relative flex min-h-screen flex-col">
        <Container className="relative z-10 flex flex-1 items-center py-14 md:py-16 lg:py-24">
          <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
            <HeroContent loaded={loaded} />
            <HeroVisual loaded={loaded} />
          </div>
        </Container>

        <WaveDivider color="white" />
      </Section>
    </div>
  );
}

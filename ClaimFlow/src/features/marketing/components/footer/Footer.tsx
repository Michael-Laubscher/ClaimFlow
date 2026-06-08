import { FooterBottom } from "@/shared/components/design-system/footer/FooterBottom";
import { FooterBrand } from "@/shared/components/design-system/footer/FooterBrand";
import { FooterContactCard } from "@/shared/components/design-system/footer/FooterContactCard";
import { FooterCTA } from "@/shared/components/design-system/footer/FooterCTA";
import { FooterSections } from "@/shared/components/design-system/footer/FooterSections";
import { FooterSocials } from "@/shared/components/design-system/footer/FooterSocials";
import { Container } from "@/shared/components/design-system/layout/Container";
import type { FooterConfig } from "@/shared/types/footer.types";
import { useMatches } from "react-router-dom";

interface Props {
  config: FooterConfig;
}

export function Footer({ config }: Props) {
  const matches = useMatches();

  const hideFooterCTA = matches.some((match) => (match.handle as { hideFooterCTA?: boolean })?.hideFooterCTA);
  return (
    <footer className="bg-[#071852] text-white">
      {!hideFooterCTA && ( <FooterCTA cta={config.cta} /> )}

      <Container className="py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <FooterBrand brand={config.brand} trustBadges={config.trustBadges} />
          <FooterSections sections={config.sections} />
        </div>
        <FooterSocials socials={config.socials} />
        <FooterContactCard contact={config.contact} />

        <FooterBottom legal={config.legal} />
      </Container>
    </footer>
  );
}

import { FooterCTA } from "@/shared/components/design-system/footer/FooterCTA";
import { footerConfig } from "../../../shared-ui/configs/footer.config";
import { FooterBottom } from "@/shared/components/design-system/footer/FooterBottom";
import { FooterBrand } from "@/shared/components/design-system/footer/FooterBrand";
import { FooterContactCard } from "@/shared/components/design-system/footer/FooterContactCard";
import { FooterSocials } from "@/shared/components/design-system/footer/FooterSocials";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
  const { brand, cta, sections, socials, trustBadges, contact, legal } =
    footerConfig;

  return (
    <footer
      className="
        overflow-x-hidden
        bg-[--color-brand-primary-dark]
        font-[--font-body]
      "
      aria-label="Site footer"
    >
      <FooterCTA cta={cta} />

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-14
            sm:grid-cols-2
            xl:grid-cols-[1.8fr_1fr_1fr_1.2fr]
          "
        >
          <FooterBrand brand={brand} trustBadges={trustBadges} />

          {sections.map((section) => (
            <FooterColumn key={section.heading} section={section} />
          ))}
        </div>

        <FooterContactCard contact={contact} />

        <div
          className="
            mt-10
            flex
            justify-center
            sm:justify-end
          "
        >
          <FooterSocials socials={socials} />
        </div>

        <FooterBottom legal={legal} />
      </div>
    </footer>
  );
}

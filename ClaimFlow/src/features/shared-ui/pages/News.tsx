import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";

import { NewsGrid } from "../components/sections/NewsGrid";

export default function NewsPage() {
  return (
    <>
      <PageBanner
        title="News & Updates"
        subtitle="
          Stay informed about the latest developments in African transport
          insurance and industry insights.
        "
      />

      <Section
        className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          via-white
          to-slate-100
          py-16
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-green-500/5
            blur-3xl
          "
        />

        <Container>
          <NewsGrid />
        </Container>
      </Section>
    </>
  );
}

import { Section } from "@/shared/components/design-system/layout/Section";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { PageBanner } from "@/shared/components/design-system/banner/banner";
import { NewsGrid } from "../components/sections/NewsGrid";

export default function NewsPage() {
  return (
    <>
      <PageBanner title="News & Updates" subtitle="Stay informed about the latest developments in African transport insurance and industry insights." />

      <Section className="bg-[--color-slate-50] py-16">
        <Container>
          <Stack gap="xl">
            <NewsGrid />
          </Stack>
        </Container>
      </Section>
    </>
  );
}

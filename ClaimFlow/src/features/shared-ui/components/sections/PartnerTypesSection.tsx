import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Reveal } from "@/shared/components/design-system/motion/Reveal";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";

import { partnerTypes } from "../../configs/partners.data";
import { PartnerCard } from "./PartnerCard";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Container } from "@/shared/components/design-system/layout/Container";

export function PartnerTypesSection() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <Stack gap="xl">
          <SectionHeader
            badge="Partnership Network"
            title="Who We Partner With"
            description="Strategic partnerships designed to strengthen transport, logistics, and trade operations across Africa."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partnerTypes.map((partner, index) => (
              <Reveal key={partner.title} loaded delay={`delay-${index * 100}`}>
                <PartnerCard {...partner} />
              </Reveal>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

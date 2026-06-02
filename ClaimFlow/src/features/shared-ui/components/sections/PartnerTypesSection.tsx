import { Reveal } from "@/shared/components/design-system/feedback/Reveal";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";
import { partnerTypes } from "../../configs/partners.data";
import { FeatureCard } from "../cards/FeatureCard";

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
                <FeatureCard title={partner.title} description={partner.description} icon={partner.icon} iconClassName="text-white" ctaLabel="Learn More" />
              </Reveal>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

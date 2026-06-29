import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";

import { partnerTypes } from "../../configs/partners.data";

import { FeatureCard } from "../cards/FeatureCard";

export function PartnerTypesSection() {
  return (
    <Section className="bg-white py-28">
      <Container>
        <Stack gap="xl">
          <SectionHeader
            centered
            badge="Partnership Ecosystem"
            title="Who We Partner With"
            description="
Strategic partnerships designed to strengthen transport,
logistics and trade operations across Africa.
"
          />

          <div
            className="
grid
gap-8
md:grid-cols-2
xl:grid-cols-4
"
          >
            {partnerTypes.map((partner, index) => (
              <div
                key={partner.title}
                className="
animate-in
fade-in
slide-in-from-bottom-4
"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <FeatureCard title={partner.title} description={partner.description} icon={partner.icon} ctaLabel="Explore partnership" />
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

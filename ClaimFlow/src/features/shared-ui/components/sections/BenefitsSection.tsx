import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Badge } from "@/shared/components/design-system/primitives/Badge";
import logistics from "@/shared/components/design-system/svg/images/logistics.svg";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import { benefits } from "../../configs/partners.data";
import { InfoList } from "../lists/InfoList";

export function BenefitsSection() {
  return (
    <Section className="overflow-hidden bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Stack gap="lg">
            <Badge className="w-fit bg-[--color-orange]/10 text-[--color-orange]">Partnership Benefits</Badge>

            <Heading className="max-w-lg text-[--color-navy]">Everything You Need To Scale Your Insurance Offering</Heading>

            <Text variant="lead" color="muted" className="max-w-xl leading-relaxed">
              Gain access to tailored insurance products, dedicated support, digital onboarding tools, and a partnership ecosystem designed for modern African trade.
            </Text>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <InfoList
                    key={benefit}
                    items={[
                      {
                        id: benefit,
                        label: benefit,
                        type: "check",
                      },
                    ]}
                  />
                ))}
              </div>
            </div>
          </Stack>

          <div className="relative">
            <img src={logistics} alt="Logistics" className=" w-full rounded-2xl object-fit overflow-hidden" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

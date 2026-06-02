import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";
import { Text } from "@/shared/components/design-system/typography/Text";
import { process } from "../../configs/partners.data";

export function ProcessSection() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <Stack gap="xl">
          <SectionHeader badge="Partnership Process" title="How Partnership Works" description="A simple and scalable onboarding process." />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <Card variant="glass" key={item.step} className="rounded-3xl border border-slate-200 bg-white p-8">
                <Stack gap="lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[--color-navy] text-lg font-bold text-white">{item.step}</div>

                  <Stack gap="sm">
                    <Heading size="lg" className="text-slate-900">
                      {item.title}
                    </Heading>

                    <Text className="leading-relaxed text-slate-500">{item.description}</Text>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

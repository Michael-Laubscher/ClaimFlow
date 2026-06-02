import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { iconMap } from "@/shared/components/design-system/svg/iconMap";
import { Text } from "@/shared/components/design-system/typography/Text";
import trustPillars from "../../configs/trust.config";

export function TrustSection() {
  return (
    <section className="py-16">
      <Container>
        <Stack direction="row" justify="between" gap="lg">
          <div className="grid md:grid-cols-4 gap-8">
            {trustPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap] || iconMap.placeholder;

              return (
                <Card key={pillar.id} className="flex flex-col items-center text-center p-6 rounded-2xl border border-black/10 bg-white/5 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-green-600">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <Text variant="body" className="font-semibold">
                    {pillar.label}
                  </Text>

                  <Text variant="sm" className="mt-1 text-muted-foreground">
                    {pillar.subtext}
                  </Text>
                </Card>
              );
            })}
          </div>
        </Stack>
      </Container>
    </section>
  );
}

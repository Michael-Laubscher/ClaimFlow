import { Container } from "@/shared/components/design-system/layout/Container";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { iconMap } from "@/shared/components/design-system/svg/iconMap";
import { Text } from "@/shared/components/design-system/typography/Text";
import trustPillars from "../../configs/trust.config";

export function TrustSection() {
  return (
    <section className="py-16">
      <Container>
          <div className="grid md:grid-cols-4 gap-8">
            {trustPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap] || iconMap.placeholder;

              return (
                <Card key={pillar.id} variant="solid" className="self-start flex flex-col items-center text-center p-6 bg-white shadow-sm group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br bg-gradient-to-br from-[#233C7B] to-[#0EA572] transition-transform duration-200 group-hover:scale-110">
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
      </Container>
    </section>
  );
}

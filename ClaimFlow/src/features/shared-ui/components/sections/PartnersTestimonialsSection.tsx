import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";
import { Text } from "@/shared/components/design-system/typography/Text";
import { Building2 } from "lucide-react";

export interface Testimonial {
  company: string;
  quote: string;
  role?: string;
}

interface PartnersTestimonialsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: Testimonial[];
}

export function PartnersTestimonialsSection({ badge = "Partner Success", title, description, items }: PartnersTestimonialsSectionProps) {
  return (
    <Section className="bg-[--color-navy] py-24">
      <Container>
        <Stack gap="xl">
          <SectionHeader badge={badge} title={title} description={description ?? "Trusted partnerships built on operational excellence and long-term growth."} />

          <div className="grid gap-6 lg:grid-cols-2">
            {items.map((item) => (
              <Card variant="glass" key={item.company + item.quote} className="border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
                <Stack gap="lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Building2 className="h-6 w-6 text-white/80" />
                  </div>

                  <Text className="leading-relaxed text-blue-100/80">“{item.quote}”</Text>

                  <div>
                    <Text className="font-semibold text-white">{item.company}</Text>

                    {item.role && <Text className="text-sm text-blue-200/60">{item.role}</Text>}
                  </div>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

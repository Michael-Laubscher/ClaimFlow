import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Badge, Check, Container, Heading, Section } from "lucide-react";
import { benefits } from "../../configs/partners.data";
import { Card } from "@/shared/components/design-system/composite/card/Card";

export function BenefitsSection() {
  return (
    <Section className="overflow-hidden bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Stack gap="lg">
            <Badge className="w-fit bg-[--color-orange]/10 text-[--color-orange]">Partnership Benefits</Badge>

            <Heading className="max-w-lg text-[--color-navy]">Everything You Need To Scale Your Insurance Offering</Heading>

            <Typography className="max-w-xl leading-relaxed text-slate-500">
              Gain access to tailored insurance products, dedicated support, digital onboarding tools, and a partnership ecosystem designed for modern African trade.
            </Typography>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <Card variant="glass" key={benefit} className="border border-slate-200 bg-white p-4">
                  <Stack direction="row" align="start" gap="sm">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>

                    <Typography className="text-sm leading-relaxed text-slate-600">{benefit}</Typography>
                  </Stack>
                </Card>
              ))}
            </div>
          </Stack>

          <div className="relative">
            <Card variant="glass" className="overflow-hidden p-3 shadow-2xl">
              <img src="/images/partners/logistics.jpg" alt="Logistics" className="h-[560px] w-full rounded-2xl object-cover" />
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

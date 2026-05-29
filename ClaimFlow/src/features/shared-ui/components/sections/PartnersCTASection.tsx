import { Badge } from "@/shared/components/design-system/primitives/Badge";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "@/shared/components/design-system/typography/Text";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Card } from "@/shared/components/design-system/composite/card/Card";

interface PartnersCTASectionProps {
  badge?: string;
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function PartnersCTASection({ badge, title, description, primaryAction, secondaryAction }: PartnersCTASectionProps) {
  return (
    <Section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-navy] to-[--color-teal]" />

      <Container className="relative z-10">
        <Card variant="glass" className="border border-white/10 bg-white/10 p-10 backdrop-blur-xl md:p-16">
          <Stack align="center" gap="lg">
            {badge && <Badge variant="default">{badge}</Badge>}

            <Heading size="xl" className="max-w-3xl text-white">
              {title}
            </Heading>

            {description && <GenericText className="max-w-2xl">{description}</GenericText>}

            <Stack direction="row" gap="md">
              <Button size="lg">
                <a href={primaryAction.href}>
                  {primaryAction.label}

                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              {secondaryAction && (
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </Stack>
          </Stack>
        </Card>
      </Container>
    </Section>
  );
}

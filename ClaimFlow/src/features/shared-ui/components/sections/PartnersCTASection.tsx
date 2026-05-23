import { Button } from "@/shared/components/design-system/buttons/Button";
import { Badge } from "@/shared/components/design-system/feedback/Badge";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "@/shared/components/design-system/typography/Text";
import { ArrowRight} from "lucide-react";

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

export function PartnersCTASection({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
}: PartnersCTASectionProps) {
  return (
    <Section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-navy] to-[--color-teal]" />

      <Container className="relative z-10">
        <GlassCard className="border border-white/10 bg-white/10 p-10 backdrop-blur-xl md:p-16">
          <Stack align="center" gap="lg" className="text-center">
            {badge && <Badge className="bg-white/10 text-white">{badge}</Badge>}

            <Heading size="xl" className="max-w-3xl text-white">
              {title}
            </Heading>

            {description && (
              <GenericText className="max-w-2xl">{description}</GenericText>
            )}

            <Stack
              direction="row"
              gap="md"
              wrap
              justify="center"
              className="pt-4"
            >
              <Button asChild size="lg">
                <a href={primaryAction.href}>
                  {primaryAction.label}

                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              {secondaryAction && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </Stack>
          </Stack>
        </GlassCard>
      </Container>
    </Section>
  );
}

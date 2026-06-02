import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

interface CTAAction {
  label: string;
  to: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  actions: CTAAction[];
  badge?: React.ReactNode;

  backgroundClass?: string;
  backgroundGradient?: string;

  cardVariant?: "glass" | "solid" | "none";
}

export function CTASection({ title, subtitle, actions, badge, backgroundClass, backgroundGradient, cardVariant = "glass" }: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden py-24">
      {backgroundGradient && <div className={`absolute inset-0 ${backgroundGradient}`} />}

      {backgroundClass && !backgroundGradient && <div className={`absolute inset-0 ${backgroundClass}`} />}

      <Container className="relative z-10">
        {cardVariant !== "none" ? (
          <Card variant={cardVariant} className="border border-white/10 bg-white/10 p-10 backdrop-blur-xl md:p-16">
            <Content />
          </Card>
        ) : (
          <Content />
        )}
      </Container>
    </Section>
  );

  function Content() {
    return (
      <Stack align="center" gap="lg">
        {badge && <div>{badge}</div>}

        <Heading size="xl" className="max-w-3xl text-white text-center">
          {title}
        </Heading>

        {subtitle && <Text className="max-w-2xl text-center text-white/70">{subtitle}</Text>}

        <Stack direction="row" gap="sm" className="flex-wrap justify-center">
          {actions.map((action, i) => (
            <Button key={i} to={action.to} variant={action.variant ?? "primary"} size={action.size ?? "lg"}>
              {action.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    );
  }
}

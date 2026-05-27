import { Button } from "@/shared/components/design-system/buttons/Button";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Typography } from "@/shared/components/design-system/typography/Typography";

export function ProductsCTA() {
  return (
    <Section>
      <div
        className="
          rounded-[32px]
        footer-bg
        "
      >
        <Container className="py-12">
          <Stack gap="lg">
            <Heading as="h2" size="xl" className="text-white">
              Need help choosing a product?
            </Heading>

            <Typography className="max-w-xl text-white/70">Our specialists will help you find the right coverage for your operations.</Typography>

            <Stack direction="row" gap="sm" wrap>
              <Button variant="primary">Talk to an Expert</Button>

              <Button
                variant="outline"
                className="
                  border-white/20
                  text-white
                "
              >
                Get a Quote
              </Button>
            </Stack>
          </Stack>
        </Container>
      </div>
    </Section>
  );
}

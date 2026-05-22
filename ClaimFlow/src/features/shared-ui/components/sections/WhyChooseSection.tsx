import { whyFeatures } from "@/shared/types/features";
import { CheckIcon } from "@/shared/components/design-system/svg";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Card } from "@/shared/components/design-system/surface/Card";
import { Button } from "@/shared/components/design-system/buttons/Button";
import { Typography } from "@/shared/components/design-system/typography/Typography";

export function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        {/* Header */}
        <Stack direction="col" gap="md" className="mb-12 text-center">
          <Typography
            variant="label-md"
            className="inline-block max-w-fit px-6 py-2 bg-green-100 text-green-700 font-bold rounded-full"
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="body-3xl"
            className="mt-4 ml-0 text-start max-w-sm text-3xl md:text-4xl font-bold"
          >
            Why Transporters Choose Askari
          </Typography>
        </Stack>

        {/* Features + Image */}
        <Stack
          direction="row"
          gap="lg"
          className="grid md:grid-cols-2 items-center gap-10"
        >
          {/* Features List */}
          <Stack direction="col" gap="md">
            {whyFeatures.map((feature) => (
              <Card
                key={feature.id}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-md flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>

                <Typography variant="body-sm" className="font-medium">
                  {feature.label}
                </Typography>
              </Card>
            ))}

            <Button className="mt-6 w-max px-6 py-3">
              Learn More About Us
            </Button>
          </Stack>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
              className="rounded-xl max-w-full h-auto shadow-lg"
            />
          </div>
        </Stack>
      </Container>
    </section>
  );
}

import { whyFeatures } from "@/shared/types/features";
import { CheckIcon } from "@/shared/components/design-system/svg";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Link } from "react-router-dom";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

export function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <Stack direction="col" gap="md">
            <Typography variant="label-md" className="inline-block max-w-fit px-6 py-2 bg-green-100 text-green-700 font-bold rounded-full">
              Why Choose Us
            </Typography>

            <Typography variant="body-3xl" className="mt-4 ml-0 text-start max-w-sm text-3xl md:text-4xl font-bold">
              Why Transporters Choose Askari
            </Typography>
          </Stack>
        </div>
        {/* Features + Image */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <Stack direction="row" gap="lg">
            {/* Features List */}
            <Stack direction="col" gap="md">
              {whyFeatures.map((feature) => (
                <Card key={feature.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-md flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>

                  <Typography variant="body-sm" className="font-medium">
                    {feature.label}
                  </Typography>
                </Card>
              ))}

              <Button className="mt-6 w-max px-6 py-3">
                <Link to="about">Learn More About Us</Link>
              </Button>
            </Stack>

            {/* Image */}
            <div className="flex justify-center">
              <img src="/why-choose-us.jpg" alt="Why Choose Us" className="rounded-xl max-w-full h-auto shadow-lg" />
            </div>
          </Stack>
        </div>
      </Container>
    </section>
  );
}

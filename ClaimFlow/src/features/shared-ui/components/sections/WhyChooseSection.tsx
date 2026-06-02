import { whyFeatures } from "@/shared/types/features";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Text } from "@/shared/components/design-system/typography/Text";
import { Link } from "react-router-dom";
import { InfoList } from "../lists/InfoList";

export function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <Stack direction="col" gap="md">
            <Text variant="body" className="inline-block max-w-fit px-6 py-2 bg-green-100 text-green-700 font-bold rounded-full">
              Why Choose Us
            </Text>

            <Text variant="title" className="mt-4 ml-0 text-start max-w-sm text-3xl md:text-4xl font-bold">
              Why Transporters Choose Askari
            </Text>
          </Stack>
        </div>
        {/* Features + Image */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <Stack direction="row" gap="lg">
            {/* Features List */}
            <Stack direction="col" gap="md">
              <InfoList
                items={whyFeatures.map((feature) => ({
                  id: feature.id,
                  label: feature.label,
                  type: "check",
                }))}
              />

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

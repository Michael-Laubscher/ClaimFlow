import { whyFeatures } from "@/shared/types/features";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { ArrowRightIcon } from "@/shared/components/design-system/svg/icons";
import Trucks from "@/shared/components/design-system/svg/images/Trucks.svg";
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
          {/* Left Column */}
          {/* Features List */}
          <Stack direction="col" gap="md">
            <InfoList
              items={whyFeatures.map((feature) => ({
                id: feature.id,
                label: feature.label,
                type: "check",
              }))}
            />

            <Button className="mt-6 w-max px-6 py-3 bg-[#071a54] rounded-full transition-transform duration-200 hover:scale-105" iconRight={<ArrowRightIcon size={20} />}>
              <Link to="about">Learn More About Us</Link>
            </Button>
          </Stack>

          {/* Right Column */}
          <div className="relative flex justify-center">
            {/* Background shadow */}
            <div
              className="
                absolute
                -top-0
                -left-0
                -right-0
                bottom-12
                rotate-[2deg]
                rounded-3xl
                bg-gradient-to-br
                from-[#233C7B]/10
                to-[#0EA572]/10
              "
            />
            {/* Image */}
            <img
              src={Trucks}
              alt="Why Choose Us"
              className="
              w-full
              max-w-[608px]
              h-auto
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

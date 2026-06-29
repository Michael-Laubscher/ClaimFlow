import { ArrowRight } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";
import { Text } from "@/shared/components/design-system/typography/Text";

import { process } from "../../configs/partners.data";

export function ProcessSection() {
  return (
    <Section className="relative overflow-hidden bg-slate-50 py-28">
      <Container>
        <Stack gap="xl">
          <SectionHeader
            centered
            badge="Partnership Process"
            title="A Simple Path To Partnership"
            description="
            From initial discussion to full integration,
            we make becoming an Askari partner effortless.
            "
          />

          <div
            className="
            relative
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
            "
          >
            {/* connection line */}
            <div
              className="
              absolute
              left-0
              right-0
              top-16
              hidden
              h-px
              bg-slate-200
              xl:block
              "
            />

            {process.map((item) => (
              <Card
                key={item.step}
                className="
                  group
                  relative
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  "
              >
                <Stack gap="lg">
                  {/* step badge */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#071A3D]
                      to-[#123C8C]
                      text-xl
                      font-black
                      text-white
                      shadow-lg
                      "
                  >
                    {String(item.step).padStart(2, "0")}
                  </div>

                  <Stack gap="sm">
                    <Heading
                      size="lg"
                      className="
                        tracking-tight
                        text-slate-900
                        "
                    >
                      {item.title}
                    </Heading>

                    <Text
                      className="
                        leading-relaxed
                        text-slate-500
                        "
                    >
                      {item.description}
                    </Text>
                  </Stack>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-orange-500
                      opacity-1
                      transition
                      group-hover:opacity-100
                      "
                  >
                    Continue
                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                        "
                    />
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

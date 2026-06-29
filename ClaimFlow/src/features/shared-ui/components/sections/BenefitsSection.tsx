import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import { benefits } from "../../configs/partners.data";

import logistics from "@/shared/components/design-system/svg/images/logistics.svg";

export function BenefitsSection() {
  return (
    <Section className="bg-slate-50 py-28">
      <Container>
        <div
          className="
grid
items-center
gap-16
lg:grid-cols-2
"
        >
          <div>
            <span
              className="
rounded-full
bg-orange-100
px-4
py-2
text-xs
font-semibold
uppercase
tracking-wider
text-orange-600
"
            >
              Partnership Benefits
            </span>

            <Heading
              className="
mt-6
text-5xl
font-black
tracking-tight
"
            >
              Everything you need to scale African trade insurance
            </Heading>

            <Text variant="lead" color="muted" className="mt-6">
              Access insurance products, digital tools and dedicated support built for modern logistics networks.
            </Text>

            <div
              className="
mt-10
grid
gap-4
sm:grid-cols-2
"
            >
              {benefits.map((item) => (
                <div
                  key={item}
                  className="
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-sm
transition
hover:shadow-md
"
                >
                  <div
                    className="
mb-3
flex
h-8
w-8
items-center
justify-center
rounded-full
bg-orange-100
text-orange-600
"
                  >
                    ✓
                  </div>

                  <Text>{item}</Text>
                </div>
              ))}
            </div>
          </div>

          <img
            src={logistics}
            alt="African logistics"
            className="
"
          />
        </div>
      </Container>
    </Section>
  );
}

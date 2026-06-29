import { Star, Quote } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";
import { Text } from "@/shared/components/design-system/typography/Text";

const stats = [
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "10+",
    label: "Years of Experience",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "Operations Director",
    company: "CargoLink Africa",
    quote: "Askari transformed how we manage insurance across multiple logistics operations. The process is seamless and the support team is exceptional.",
  },
  {
    name: "Sarah Williams",
    role: "Managing Director",
    company: "TransGlobal Freight",
    quote: "Working with Askari has given our business confidence to expand across borders knowing our operations are protected.",
  },
  {
    name: "David Nkosi",
    role: "Regional Manager",
    company: "FleetAxis",
    quote: "Professional, responsive and knowledgeable. Their solutions fit perfectly into our logistics business.",
  },
];

export function CustomerStoriesSection() {
  return (
    <Section className="bg-slate-50 pb-28">
      <Container>
        <Stack gap="lg">
          <SectionHeader centered badge="Customer Stories" title="Trusted by Businesses Across Africa" description="Our partnerships are built on trust, reliability and long-term success." />

          {/* Statistics */}

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="rounded-3xl border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-black text-[--color-navy]">{stat.value}</p>

                <Text
                  className="
                    mt-2
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                    text-xs
                  "
                >
                  {stat.label}
                </Text>
              </Card>
            ))}
          </div>

          {/* Testimonials */}

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <Quote
                  className="
                    absolute
                    right-6
                    top-6
                    h-20
                    w-20
                    text-orange-500/10
                  "
                />

                <Stack gap="lg">
                  <div className="flex gap-1 text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <Text className="leading-relaxed text-slate-600">&ldquo;{item.quote}&rdquo;</Text>

                  <div className="border-t border-slate-100 pt-5">
                    <p className="font-semibold text-slate-900">{item.name}</p>

                    <Text className="text-sm">{item.role}</Text>

                    <Text className="text-sm text-[--color-orange]">{item.company}</Text>
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

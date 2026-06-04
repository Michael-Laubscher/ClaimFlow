import { Link } from "react-router-dom";

import { homeProducts } from "@/shared/types/products";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { ArrowRight } from "lucide-react";

import { iconMap } from "@/shared/components/design-system/svg/iconMap";
import { Text } from "@/shared/components/design-system/typography/Text";

const themeClassMap: Record<string, string> = {
  primary: "bg-gradient-to-br from-[#2B7FFF] to-[#155DFC] text-white",
  success: "bg-gradient-to-br from-[#00BC7D] to-[#096] text-white",
  warning: "bg-gradient-to-br from-[#FF6900] to-[#F54900] text-white",
  purple: "bg-gradient-to-br from-[#615FFF] to-[#4F39F6] text-white",
};

export function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12 text-center ">
          <div className="d-inline-block w-full">
            <Text variant="title" className="font-bold">
              Insurance Solutions Built for Africa
            </Text>
          </div>
          <Text variant="sm" className="mt-2 text-muted">
            Tailored coverage for every stage of your transport and logistics journey
          </Text>
        </div>

        <Stack direction="row" gap="lg">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {homeProducts.map((product) => {
              const iconKey = (product.icon || "").toLowerCase() as keyof typeof iconMap;
              const Icon = iconMap[iconKey] || iconMap.placeholder;

              return (
                <Link key={product.id} to={product.to}>
                  <Card variant="glass" className="group flex flex-col p-6 rounded-2xl border border-black/10 transition hover:bg-[#F8FAFC] hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 shadow-md ${themeClassMap[product.theme] || themeClassMap.primary}`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <Text variant="body" className="font-semibold text-lg group-hover:text-[#E65731]">
                      {product.name}
                    </Text>

                    <Text variant="sm" className="mt-2 text-muted flex-grow">
                      {product.shortDesc}
                    </Text>

                    <Text variant="sm" className="mt-4 font-medium text-[#E65731]">
                      <div
                      className="flex items-center gap-2 text-sm text-[--color-orange]">
                        Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2"/>
                      </div>
                    </Text>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Stack>
      </Container>
    </section>
  );
}

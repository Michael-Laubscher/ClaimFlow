import { Link } from "react-router-dom";

import { homeProducts } from "@/shared/types/products";

import { PlaceholderIcon } from "@/shared/components/design-system/svg/icons/PlaceholderIcon";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { lucideIconMap } from "@/shared/components/design-system/svg";
import { Text } from "@/shared/components/design-system/typography/Text";

const themeClassMap: Record<string, string> = {
  primary: "bg-blue-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-orange-600 text-white",
  purple: "bg-purple-600 text-white",
};

export function ProductsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center ">
          <div className="d-inline-block w-full">
            <Text variant="title" className="font-bold">
              Insurance Products
            </Text>
          </div>
          <Text variant="sm" className="mt-2 text-muted-foreground">
            Flexible coverage solutions for businesses and individuals.
          </Text>
        </div>

        <Stack direction="row" gap="lg">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {homeProducts.map((product) => {
              const iconKey = (product.icon || "").toLowerCase() as keyof typeof lucideIconMap;
              const Icon = lucideIconMap[iconKey] || PlaceholderIcon;

              return (
                <Link key={product.id} to={product.to}>
                  <Card className="group flex flex-col p-6 rounded-2xl border border-black/10 transition hover:shadow-lg">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl shadow-md ${themeClassMap[product.theme] || themeClassMap.primary}`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <Text variant="body" className="font-semibold text-lg group-hover:text-primary">
                      {product.name}
                    </Text>

                    <Text variant="sm" className="mt-2 text-muted-foreground flex-grow">
                      {product.shortDesc}
                    </Text>

                    <Text variant="sm" className="mt-4 font-medium text-orange-600 group-hover:underline">
                      Learn More &rarr;
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

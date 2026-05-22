import { Link } from "react-router-dom";

import { homeProducts } from "@/shared/types/products";
import { iconMap } from "@/shared/components/design-system/svg/icons";
import { PlaceholderIcon } from "@/shared/components/design-system/svg/icons/PlaceholderIcon";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Card } from "@/shared/components/design-system/surface/Card";
import { Typography } from "@/shared/components/design-system/typography/Typography";

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
            <Typography variant="body-3xl" className="font-bold">
              Insurance Products
            </Typography>
          </div>
          <Typography variant="body-sm" className="mt-2 text-muted-foreground">
            Flexible coverage solutions for businesses and individuals.
          </Typography>
        </div>

        <Stack
          direction="row"
          gap="lg"
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {homeProducts.map((product) => {
            const iconKey = (
              product.icon || ""
            ).toLowerCase() as keyof typeof iconMap;
            const Icon = iconMap[iconKey] || PlaceholderIcon;

            return (
              <Link key={product.id} to={product.to}>
                <Card className="group flex flex-col p-6 rounded-2xl border border-black/10 transition hover:shadow-lg">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl shadow-md ${
                      themeClassMap[product.theme] || themeClassMap.primary
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <Typography
                    variant="body-md"
                    className="font-semibold text-lg group-hover:text-primary"
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body-sm"
                    className="mt-2 text-muted-foreground flex-grow"
                  >
                    {product.shortDesc}
                  </Typography>

                  <Typography
                    variant="body-sm"
                    className="mt-4 font-medium text-orange-600 group-hover:underline"
                  >
                    Learn More &rarr;
                  </Typography>
                </Card>
              </Link>
            );
          })}
        </Stack>
      </Container>
    </section>
  );
}

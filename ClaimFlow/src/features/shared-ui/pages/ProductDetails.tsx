import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import { useProduct } from "@/shared/hooks/useProduct";
import { ArrowLeft, Shield } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Link, useParams } from "react-router-dom";
import { InfoCard } from "../components/cards/InfoCard";
import { ProductFeatures } from "../components/sections/ProductFeatures";
import { ProductsCTA } from "../components/sections/ProductsCTA";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const product = useProduct(productId);

  if (!product) return null;

  const Icon = product.icon;

  return (
    <Section className="bg-[--color-slate-50] py-16">
      <Container>
        <Stack gap="xl">
          <Link
            to="/products"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-[--color-slate-500]
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-2
            "
          >
            <Card variant="glass" className="p-8">
              <Stack gap="lg">
                <IconSurface>
                  <Icon className="h-6 w-6 text-[--color-orange]" />
                </IconSurface>

                <Stack gap="xs">
                  <Heading as="h1" size="xl" className="text-[--color-slate-900]">
                    {product.name}
                  </Heading>

                  <Text color="muted">{product.tagline}</Text>
                </Stack>

                <InfoCard
                  className="
    border-[--color-slate-200]
    bg-[--color-slate-50]
    p-5
  "
                  icon={<Shield className="mt-1 h-5 w-5 text-[--color-orange]" />}
                  label={product.coverageLabel}
                  description={product.coverageDesc}
                />

                <Button variant="primary" size="lg">
                  Get a Quote
                </Button>
              </Stack>
            </Card>

            <ProductFeatures features={product.features} />
          </div>

          <ProductsCTA />
        </Stack>
      </Container>
    </Section>
  );
}

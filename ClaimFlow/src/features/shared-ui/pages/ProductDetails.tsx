import { ArrowLeft, Shield, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useProduct } from "@/shared/hooks/useProduct";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";

import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { InfoCard } from "../components/cards/InfoCard";
import { ProductFeatures } from "../components/sections/ProductFeatures";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const product = useProduct(productId);

  if (!product) return null;

  const Icon = product.icon;

  return (
    <Section
      className="
      relative
      overflow-hidden
      bg-slate-50
      py-20
      "
    >
      {/* background glow */}
      <div
        className="
        absolute
        right-0
        top-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-3xl
        "
      />

      <Container>
        <Stack gap="xl">
          <Link
            to="/products"
            className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
            transition
            hover:text-slate-900
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <div
            className="
            grid
            gap-10
            lg:grid-cols-[1.1fr_.9fr]
            "
          >
            {/* Product hero */}

            <Card
              className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border-slate-200
              bg-white
              p-10
              shadow-xl
              "
            >
              <div
                className="
                absolute
                right-0
                top-0
                h-40
                w-40
                rounded-full
                bg-orange-500/10
                blur-3xl
                "
              />

              <Stack gap="xl">
                <IconSurface>
                  <Icon
                    className="
                    h-7
                    w-7
                    text-orange-500
                    "
                  />
                </IconSurface>

                <Stack gap="sm">
                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    text-orange-600
                    "
                  >
                    <Sparkles className="h-4 w-4" />
                    Insurance Solution
                  </div>

                  <Heading
                    as="h1"
                    size="xl"
                    className="
                    text-slate-900
                    "
                  >
                    {product.name}
                  </Heading>

                  <Text variant="lead" color="muted">
                    {product.tagline}
                  </Text>
                </Stack>

                <InfoCard
                  className="
                  rounded-2xl
                  border
                  border-orange-100
                  bg-orange-50
                  p-6
                  "
                  icon={
                    <Shield
                      className="
                      mt-1
                      h-6
                      w-6
                      text-orange-600
                      "
                    />
                  }
                  label={product.coverageLabel}
                  description={product.coverageDesc}
                />

                <Button  to="/claims/get-quote"
                  variant="primary"
                  size="lg"
                  className="
                  w-full
                  sm:w-fit
                  "
                >
                  Get a Quote
                </Button>
              </Stack>
            </Card>

            <ProductFeatures features={product.features} />
          </div>
        </Stack>
      </Container>
    </Section>
  );
}


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Heading } from "@/shared/components/design-system/typography/Heading";

import { Pill } from "@/shared/components/design-system/primitives/Pill";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import type { Product } from "@/shared/types/product.types";
import { Card } from "@/shared/components/design-system/composite/card/Card";
import { IconSurface } from "@/shared/components/design-system/composite/card/IconSurface";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const Icon = product.icon;

  return (
    <Link to={`/products/${product.id}`}>
      <Card
        className="
          group
          h-full
          border-[--color-slate-200]
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        <div className="p-6">
          <Stack gap="lg">
            <Stack direction="row" align="center" justify="between">
              <IconSurface>
                <Icon className="h-5 w-5 text-[--color-orange]" />
              </IconSurface>

              <Pill>Insurance</Pill>
            </Stack>

            <Stack gap="xs">
              <Heading as="h3" size="lg" className="text-[--color-slate-900]">
                {product.name}
              </Heading>

              <Typography color="muted">{product.tagline}</Typography>
            </Stack>

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[--color-orange]
              "
            >
              Learn more
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
        </div>
      </Card>
    </Link>
  );
}

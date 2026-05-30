import { Section } from "@/shared/components/design-system/layout/Section";
import { Container } from "@/shared/components/design-system/layout/Container";
import { ProductsCTA } from "../components/sections/ProductsCTA";
import { ProductCard } from "../components/sections/ProductCard";
import { products } from "../configs/products.config";
import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Insurance Products"
        subtitle="
          Comprehensive insurance solutions for
          transport and logistics businesses.
        "
      />

      <Section className="bg-[--color-slate-50] py-16">
        <Container>
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
            "
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pb-20">
        <Container>
          <ProductsCTA />
        </Container>
      </Section>
    </>
  );
}

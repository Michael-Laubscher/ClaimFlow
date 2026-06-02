import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { FeatureCard } from "../components/cards/FeatureCard";
import { ProductsCTA } from "../components/sections/ProductsCTA";
import { products } from "../configs/products.config";

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
              <FeatureCard key={product.id} title={product.name} description={product.tagline} icon={product.icon} badge="Insurance" to={`/products/${product.id}`} />
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

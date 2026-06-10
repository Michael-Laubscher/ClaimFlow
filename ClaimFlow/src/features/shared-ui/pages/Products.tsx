import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { FeatureCard } from "../components/cards/FeatureCard";
import { CTASection } from "../components/sections/CTASection";
import { products } from "../configs/products.config";

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Insurance Products"
        subtitle="
          Comprehensive coverage solutions designed specifically for African transport and logistics operations.
        "
      />

      <Section className="bg-white py-16">
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

      <Section className="pb-20 bg-gradient-to-br from-[#233C7B] to-[#0EA572]">
        <Container>
          <CTASection
            title="Not sure which product is right for you?"
            subtitle="Our insurance experts can help you choose the perfect coverage for your business needs."
            actions={[
              { label: "Talk to an Expert", to: "/contact", variant: "primary", size: "lg" },
              { label: "Get a Quote", to: "/quote", variant: "outline", size: "lg" },
            ]}
            backgroundClass="footer-bg"
            cardVariant="none"
          />
        </Container>
      </Section>
    </>
  );
}

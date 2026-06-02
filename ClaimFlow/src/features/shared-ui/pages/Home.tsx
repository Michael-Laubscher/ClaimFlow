import { HeroSection } from "@/features/shared-ui/components/sections/HeroSection";
import { ProductsSection } from "@/features/shared-ui/components/sections/ProductsSection";
import { TrustSection } from "@/features/shared-ui/components/sections/TrustSection";
import { WhyChooseSection } from "@/features/shared-ui/components/sections/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <TrustSection />

      <ProductsSection />

      <WhyChooseSection />
    </>
  );
}

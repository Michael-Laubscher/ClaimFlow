import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";

import { BenefitsSection } from "../components/sections/BenefitsSection";
import { PartnersTestimonialsSection } from "../components/sections/PartnersTestimonialsSection";
import { PartnerTypesSection } from "../components/sections/PartnerTypesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { TrustedNetworkSection } from "../components/sections/TrustedNetworkSection";

import { banners } from "../configs/banners.config";

export default function PartnersPage() {
  return (
    <main className="overflow-hidden">
      <PageBanner {...banners.partner} />

      <TrustedNetworkSection />

      <PartnerTypesSection />

      <BenefitsSection />

      <ProcessSection />

      <PartnersTestimonialsSection
        title="Trusted By Industry Leaders"
        items={[
          {
            company: "East Africa Logistics Group",
            quote: "Askari transformed how we manage insurance across multiple borders. Their technology and support have improved our operations significantly.",
            role: "Operations Director",
          },
          {
            company: "Continental Freight Solutions",
            quote: "The onboarding process was seamless. Askari understands logistics challenges and provides practical solutions.",
            role: "Regional Manager",
          },
        ]}
      />
    </main>
  );
}

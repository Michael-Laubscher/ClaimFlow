import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Clock3, MapPin, Phone } from "lucide-react";
import { InfoCard } from "../components/cards/InfoCard";
import { branches } from "../configs/branches.config";

export default function BranchesPage() {
  return (
    <>
      <PageBanner
        badge="Regional Presence"
        title="Our Branches"
        subtitle="
          Find an Askari Insure office near you.
          We are strategically positioned across
          major transport and logistics hubs
          in Africa.
        "
      />

      <Section className="bg-[--color-slate-50] py-20">
        <Container size="xl">
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {branches.map((branch) => (
              <InfoCard
                title={branch.name}
                badge={branch.flagship ? "Flagship" : undefined}
                className="h-full p-6"
                items={[
                  {
                    icon: <MapPin size={18} className="text-[--color-orange]" />,
                    label: branch.address,
                    description: branch.city,
                  },
                  {
                    icon: <Phone size={18} className="text-[--color-orange]" />,
                    label: branch.phone,
                  },
                  {
                    icon: <Clock3 size={18} className="text-[--color-orange]" />,
                    label: branch.hours,
                  },
                ]}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

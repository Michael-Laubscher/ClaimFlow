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
        title="Our Branch Network"
        subtitle="
Find an Askari Insure office near you.
Our teams are positioned across key African
trade and logistics corridors.
"
      />

      <Section className="bg-slate-50 py-24">
        <Container size="xl">
          {/* Intro */}

          <div
            className="
mb-14

max-w-3xl

"
          >
            <h2
              className="
text-3xl

font-bold

tracking-tight

text-slate-900

"
            >
              Local expertise. Regional protection.
            </h2>

            <p
              className="
mt-4

text-slate-600

leading-relaxed

"
            >
              Visit one of our branches for personalised support, claims assistance, and insurance solutions designed for African businesses.
            </p>
          </div>

          {/* Branch cards */}

          <div
            className="
grid

gap-8

md:grid-cols-2

xl:grid-cols-3

"
          >
            {branches.map((branch) => (
              <InfoCard
                key={branch.id}
                title={branch.name}
                badge={branch.flagship ? "Flagship" : undefined}
                className="
h-full

p-7

transition-all

duration-300

hover:-translate-y-2

"
                items={[
                  {
                    icon: <MapPin size={20} className="text-orange-500" />,

                    label: branch.address,

                    description: branch.city,
                  },

                  {
                    icon: <Phone size={20} className="text-orange-500" />,

                    label: branch.phone,
                  },

                  {
                    icon: <Clock3 size={20} className="text-orange-500" />,

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

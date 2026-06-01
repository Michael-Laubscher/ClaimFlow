import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Pill } from "@/shared/components/design-system/primitives/Pill";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { Branch } from "@/shared/types/branch.types";
import { Clock3, MapPin, Phone } from "lucide-react";

interface BranchCardProps {
  branch: Branch;
}

export function BranchCard({ branch }: BranchCardProps) {
  return (
    <Card
      variant="glass"
      className="
        h-full
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <Stack gap="lg">
        <Stack direction="row" justify="between" align="center">
          <Heading as="h3" size="lg" className="text-[--color-slate-900]">
            {branch.name}
          </Heading>

          {branch.flagship && <Pill>Flagship</Pill>}
        </Stack>

        <Stack gap="md">
          <InfoRow icon={<MapPin size={18} />}>
            <div>
              <Text variant="sm">{branch.address}</Text>

              <Text variant="sm" color="muted">
                {branch.city}
              </Text>
            </div>
          </InfoRow>

          <InfoRow icon={<Phone size={18} />}>
            <Text variant="sm">{branch.phone}</Text>
          </InfoRow>

          <InfoRow icon={<Clock3 size={18} />}>
            <Text variant="sm" color="muted">
              {branch.hours}
            </Text>
          </InfoRow>
        </Stack>
      </Stack>
    </Card>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function InfoRow({ icon, children }: InfoRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="
          mt-0.5
          text-[--color-orange]
        "
      >
        {icon}
      </div>

      {children}
    </div>
  );
}

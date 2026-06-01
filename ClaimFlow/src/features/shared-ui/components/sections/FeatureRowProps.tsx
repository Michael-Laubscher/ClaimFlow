import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Text } from "@/shared/components/design-system/typography/Text";

type FeatureRowProps = {
  label: string;
  icon: React.ReactNode;
};

export function FeatureRow({ label, icon }: FeatureRowProps) {
  return (
    <Card className="flex items-center gap-4 ps-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-success text-white">{icon}</div>

      <Text variant="sm" className="font-medium">
        {label}
      </Text>
    </Card>
  );
}

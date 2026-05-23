
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "./Text";
import { Badge } from "lucide-react";

interface Props {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered,
}: Props) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center flex flex-col items-center"
          : "max-w-3xl"
      }
    >
      {badge && (
        <Badge className="mb-4 bg-blue-50 text-[#0c2578]">
          {badge}
        </Badge>
      )}

      <Heading size="xl">
        {title}
      </Heading>

      {description && (
        <GenericText className="mt-4 text-slate-600">
          {description}
        </GenericText>
      )}
    </div>
  );
}
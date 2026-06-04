import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";

interface Props {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered }: Props) {
  return (
    <div className={centered ? "mx-auto flex max-w-3xl flex-col items-center text-center" : "max-w-3xl"}>
      {badge && (
        <span
          className="
            mb-4
            inline-flex
            items-center
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-xs
            font-medium
            text-[#0c2578]
          "
        >
          {badge}
        </span>
      )}

      <Heading size="xl">{title}</Heading>

      {description && (
        <Text color="muted" className="mt-4">
          {description}
        </Text>
      )}
    </div>
  );
}

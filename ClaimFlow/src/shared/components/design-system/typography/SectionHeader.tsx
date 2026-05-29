import { Heading } from "@/shared/components/design-system/typography/Heading";
import { GenericText } from "./Text";

interface Props {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered }: Props) {
  return (
<<<<<<< HEAD
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center flex flex-col items-center"
          : "max-w-3xl"
      }
    >
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
=======
    <div className={centered ? "mx-auto max-w-3xl text-center flex flex-col items-center" : "max-w-3xl"}>
      {badge && <Badge className="mb-4 bg-blue-50 text-[#0c2578]">{badge}</Badge>}
>>>>>>> 5653cbf8b2c938833d50d118702d7255347d7970

      <Heading size="xl">{title}</Heading>

      {description && <GenericText className="mt-4 text-slate-600">{description}</GenericText>}
    </div>
  );
}

import { Input } from "@/shared/components/design-system/Input/Input";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function FAQSearch({ value, onChange }: Props) {
  return (
    <div className="max-w-xl mx-auto">
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search FAQs…" />
    </div>
  );
}

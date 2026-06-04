import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

interface Props {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}

export function FAQCategoryPills({ categories, active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {categories.map((cat) => (
        <Button key={cat} size="sm" variant={active === cat ? "primary" : "secondary"} onClick={() => onChange(cat)}>
          {cat}
        </Button>
      ))}
    </div>
  );
}

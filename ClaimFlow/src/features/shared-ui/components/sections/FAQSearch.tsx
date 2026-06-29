import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function FAQSearch({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search
        className="
absolute
left-4
top-1/2
h-5
w-5
-translate-y-1/2
text-slate-400
"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search questions..."
        className="
w-full
rounded-2xl
border
border-slate-200
bg-white
py-4
pl-12
pr-5
text-sm
shadow-sm
transition
focus:border-green-500
focus:outline-none
focus:ring-4
focus:ring-green-500/10
"
      />
    </div>
  );
}

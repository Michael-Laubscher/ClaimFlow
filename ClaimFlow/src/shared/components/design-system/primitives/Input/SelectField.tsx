import { cn } from "@/shared/lib/cn";

interface SelectFieldProps<T extends string> {
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
  error?: string;
  label: string;
}

export function SelectField<T extends string>({ label, value, options, onChange, error }: SelectFieldProps<T>) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-slate-600">{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className={cn(
          "w-full px-4 py-3 text-sm",
          "text-slate-900 bg-white/80 backdrop-blur-sm",
          "border shadow-sm transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-orange-400/40",
          "hover:border-slate-300 hover:shadow-md",
          "border-slate-200",
          "rounded-xl",
          error && "border-red-300 focus:ring-red-400/20"
        )}
      >
        <option value="">Select {label}</option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-500 animate-in fade-in slide-in-from-top-1">{error}</p>}
    </div>
  );
}

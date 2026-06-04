interface SelectFieldProps {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

export function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium tracking-wide text-slate-600">{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-sm transition duration-200 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400/40"
      >
        <option value="">Select {label}</option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

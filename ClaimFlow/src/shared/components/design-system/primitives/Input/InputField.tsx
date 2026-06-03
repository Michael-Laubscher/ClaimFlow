import type { ChangeEvent } from "react";
import { Input } from "./Input";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputField({ label, value, onChange }: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium tracking-wide text-slate-600">{label}</label>

      <Input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
    </div>
  );
}

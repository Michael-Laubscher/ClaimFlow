import { FormError } from "@/shared/components/forms/components/FormError";
import { Input } from "./Input";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  name?: string;
  placeholder?: string;
}

export function InputField({ label, error, ...props }: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-slate-600">{label}</label>

      <Input {...props} onChange={(e) => props.onChange(e.target.value)} error={!!error} />

      <FormError message={error} />
    </div>
  );
}

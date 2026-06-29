import type { ReactNode } from "react";

import { FormError } from "@/shared/components/forms/components/FormError";

interface Props {
  label?: string;
  error?: string;
  helperText?: string;
  children: ReactNode;
}

export function FormField({ label, error, helperText, children }: Props) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          className="
            block
            text-sm
            font-medium
            text-slate-700
          "
        >
          {label}
        </label>
      )}

      {children}

      {error ? <FormError message={error} /> : helperText ? <p className="text-xs text-slate-400">{helperText}</p> : null}
    </div>
  );
}

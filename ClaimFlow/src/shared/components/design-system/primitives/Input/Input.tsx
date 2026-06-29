import { forwardRef, type InputHTMLAttributes } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

import { cn } from "@/shared/lib/cn";
import { radius } from "../../tokens/radius";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, success, helperText, icon, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <div className="relative">
        {icon && (
          <div
            className="
 absolute
 left-4
 top-1/2
 -translate-y-1/2
 text-slate-400
 "
          >
            {icon}
          </div>
        )}
        <input
          ref={ref}
          {...props}
          className={cn(
            `
          w-full
          px-10
          py-3.5
          pr-11
          text-sm
          text-slate-900
          placeholder:text-slate-400

          bg-white
          border
          shadow-sm

          transition-all
          duration-200

          focus:outline-none
          focus:ring-4
          `,

            radius.lg,

            error &&
              `
          border-red-300
          focus:border-red-400
          focus:ring-red-400/10
          `,

            success &&
              `
          border-emerald-400
          focus:border-emerald-500
          focus:ring-emerald-400/10
          `,

            !error &&
              !success &&
              `
          border-slate-200
          hover:border-slate-300
          focus:border-orange-400
          focus:ring-orange-400/10
          `,

            className
          )}
        />

        {success && (
          <CheckCircle2
            className="
          absolute
          right-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-emerald-500
          "
          />
        )}

        {error && (
          <AlertCircle
            className="
          absolute
          right-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-red-500
          "
          />
        )}
      </div>

      {helperText && !error && <p className="text-xs text-slate-400">{helperText}</p>}
    </div>
  );
});

Input.displayName = "Input";

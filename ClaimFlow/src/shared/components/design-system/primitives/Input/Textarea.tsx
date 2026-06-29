import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";
import { radius } from "../../tokens/radius";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  success?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, success, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={cn(
        `
          w-full
          min-h-[140px]
          resize-none

          px-4
          py-3

          text-sm
          leading-relaxed
          text-slate-900

          placeholder:text-slate-400

          bg-white/80
          backdrop-blur-sm

          border
          shadow-sm

          transition-all
          duration-200

          outline-none
          `,
        radius.lg,

        
        !error &&
          !success &&
          `
            border-slate-200

            hover:border-slate-300
            hover:shadow-md

            focus:border-orange-400
            focus:ring-4
            focus:ring-orange-400/10
            `,

      
        error &&
          `
            border-red-300
            bg-red-50/40

            focus:border-red-400
            focus:ring-4
            focus:ring-red-400/10
            `,

      
        success &&
          `
            border-emerald-300
            bg-emerald-50/30

            focus:border-emerald-400
            focus:ring-4
            focus:ring-emerald-400/10
            `,

        className
      )}
    />
  );
});

Textarea.displayName = "Textarea";

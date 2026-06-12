import { cn } from "@/shared/lib/cn";
import { forwardRef, type TextareaHTMLAttributes } from "react";
import { radius } from "../../tokens/radius";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={cn(
        "w-full px-4 py-3 text-sm",
        "text-slate-900 placeholder:text-slate-400",
        "bg-white/80 backdrop-blur-sm",
        "border shadow-sm resize-none",
        "transition-all duration-200",
        radius.lg,

        "focus:outline-none focus:ring-2 focus:ring-orange-400/40",

        error ? "border-red-300 focus:border-red-400 focus:ring-red-400/20" : "border-slate-200 hover:border-slate-300 hover:shadow-md",

        className
      )}
    />
  );
});

Textarea.displayName = "Textarea";

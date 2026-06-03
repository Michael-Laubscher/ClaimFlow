import { cn } from "@/shared/lib/cn";
import type { InputHTMLAttributes } from "react";
import { radius } from "../../tokens/radius";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-4 py-3 text-sm",
        "text-slate-900 placeholder:text-slate-400",
        "bg-white/80 backdrop-blur-sm",
        "border border-slate-200",
        "shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400",
        "transition-all duration-200",
        "hover:border-slate-300 hover:shadow-md",
        radius.lg,
        props.className
      )}
    />
  );
}

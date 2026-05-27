import { cn } from "@/shared/lib/cn";
import type { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={cn("w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900", "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400", className)} />
  );
}

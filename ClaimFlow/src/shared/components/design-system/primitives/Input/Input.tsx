import { cn } from "@/shared/lib/cn";
import type { InputHTMLAttributes } from "react";
import { radius } from "../../tokens/radius";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("w-full px-4 py-3 text-sm bg-white text-slate-900", "placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400", radius.lg, props.className)} />;
}

import { cn } from "@/shared/lib/cn";
import { radius } from "../tokens/radius";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "info"
  | "product"
  | "company";


  const variants: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-white/80",
  success: "bg-green-500/10 text-green-300",
  warning: "bg-orange-500/10 text-orange-300",
  info: "bg-blue-500/10 text-blue-300",
  product: "bg-teal-500/10 text-teal-300",
  company: "bg-purple-500/10 text-purple-300",
};



export function Badge({ children, variant = "default", className }: { children: React.ReactNode; variant?: BadgeVariant; className?: string }) {
  return <span className={cn("inline-flex items-center px-3 py-1 text-xs font-medium", radius.full, variants[variant], className)}>{children} </span>;
}

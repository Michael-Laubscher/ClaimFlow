import { cn } from "@/shared/lib/cn";
import { containerSizes } from "../tokens/container";

export function Container({ children, size = "xl", className, fluid = false }: { children: React.ReactNode; size?: keyof typeof containerSizes; fluid?: boolean; className?: string }) {
  return <div className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", !fluid && containerSizes[size], className)}>{children}</div>;
}

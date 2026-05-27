import { clsx } from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: Props) {
  return <div className={clsx("rounded-2xl border border-[--color-slate-100] bg-white/90 backdrop-blur-xl shadow-[--shadow-float]", className)}>{children}</div>;
}

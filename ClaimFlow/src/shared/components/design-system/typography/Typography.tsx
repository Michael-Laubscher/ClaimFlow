import { clsx } from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;

  variant?:
    | "body-sm"
    | "body-md"
    | "body-lg"
    | "body-3xl"
    | "label-sm"
    | "label-md";

  color?: "default" | "muted" | "primary";
}

const variantMap = {
  "body-sm": "text-sm font-normal",
  "body-md": "text-base font-normal",
  "body-3xl": "text-3xl font-large",
  "body-lg": "text-lg font-large",
  "label-sm": "text-xs font-semibold",
  "label-md": "text-sm font-semibold",
};

const colorMap = {
  default: "text-[--color-slate-700]",
  muted: "text-[--color-slate-400]",
  primary: "text-black",
};

export function Typography({
  children,
  className,
  variant = "body-md",
  color = "default",
}: Props) {
  return (
    <span className={clsx(variantMap[variant], colorMap[color], className)}>
      {children}
    </span>
  );
}

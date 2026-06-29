import type { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;

  label: string;
}

export function SocialButton({
  children,

  label,

  ...props
}: Props) {
  return (
    <a
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="
group

flex
h-11
w-11

items-center
justify-center

rounded-2xl

border
border-white/10

bg-white/5

text-slate-300

transition-all
duration-300

hover:-translate-y-1

hover:border-orange-400/40

hover:bg-orange-500

hover:text-white

hover:shadow-lg
hover:shadow-orange-500/20
"
      {...props}
    >
      <span
        className="
transition-transform
duration-300
group-hover:scale-110
"
      >
        {children}
      </span>
    </a>
  );
}

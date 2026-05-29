import type { AnchorHTMLAttributes, ReactNode } from "react";

interface SocialButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  label: string;
}

export function SocialButton({ children, label, ...props }: SocialButtonProps) {
  return (
    <a
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-white/5
        text-slate-300
        transition-all
        duration-200
        hover:bg-[--color-orange]
        hover:text-white
      "
      {...props}
    >
      {children}
    </a>
  );
}

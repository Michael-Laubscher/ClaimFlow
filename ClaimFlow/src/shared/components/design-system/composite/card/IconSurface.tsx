import type { ReactNode } from "react";

interface IconSurfaceProps {
  children: ReactNode;
}

export function IconSurface({ children }: IconSurfaceProps) {
  return (
    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-white/10
      "
    >
      {children}
    </div>
  );
}

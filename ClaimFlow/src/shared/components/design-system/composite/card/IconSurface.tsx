import type { ReactNode } from "react";

interface IconSurfaceProps {
  children: ReactNode;
}

export function IconSurface({ children }: IconSurfaceProps) {
  return (
    <div
      className="
        flex
        h-16 
        w-16 
        items-center 
        justify-center
      "
    >
      {children}
    </div>
  );
}

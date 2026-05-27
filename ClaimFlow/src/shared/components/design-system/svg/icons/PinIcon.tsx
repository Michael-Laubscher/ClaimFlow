import type { SVGProps } from "react";

export function PinIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={`h-3.5 w-3.5 shrink-0 ${className ?? ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

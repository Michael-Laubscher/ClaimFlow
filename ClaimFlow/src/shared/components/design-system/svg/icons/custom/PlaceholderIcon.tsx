import type { SVGProps } from "react";

export function PlaceholderSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.6 2.2c-.9.5-1.1.9-1.1 1.8" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  );
}

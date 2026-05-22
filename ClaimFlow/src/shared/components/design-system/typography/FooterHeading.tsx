import type { ReactNode } from 'react';

interface FooterHeadingProps {
  children: ReactNode;
}

export function FooterHeading({
  children,
}: FooterHeadingProps) {
  return (
    <h3
      className="
        mb-5
        text-sm
        font-semibold
        text-white
      "
    >
      {children}
    </h3>
  );
}
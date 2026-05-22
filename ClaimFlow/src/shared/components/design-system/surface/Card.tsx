import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        `
          rounded-2xl
          border
          border-white/10
          bg-white/5
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
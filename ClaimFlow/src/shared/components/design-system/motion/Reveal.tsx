import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface RevealProps {
  children: ReactNode;
  loaded?: boolean;
  animation?: string;
  delay?: string;
  className?: string;
}

export function Reveal({
  children,
  loaded,
  animation = 'animate-up',
  delay = '',
  className,
}: RevealProps) {
  return (
    <div
      className={cn(
        'pre-animate',
        loaded && `${animation} ${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
}
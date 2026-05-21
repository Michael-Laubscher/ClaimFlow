import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-40',
        className
      )}
    >
      {children}
    </div>
  );
}
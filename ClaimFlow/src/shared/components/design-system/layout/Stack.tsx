import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface StackProps {
  children: ReactNode;
  className?: string;
  gap?: string;
}

export function Stack({
  children,
  className,
  gap = 'gap-4',
}: StackProps) {
  return (
    <div className={cn('flex flex-col', gap, className)}>
      {children}
    </div>
  );
}
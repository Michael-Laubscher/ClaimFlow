import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export function FloatingCard({
  children,
  className,
}: FloatingCardProps) {
  return (
    <div className={cn('absolute z-20', className)}>
      {children}
    </div>
  );
}
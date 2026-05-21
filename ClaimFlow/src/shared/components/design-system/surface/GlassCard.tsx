import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
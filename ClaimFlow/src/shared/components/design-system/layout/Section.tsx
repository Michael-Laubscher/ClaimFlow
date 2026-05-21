import type { ReactNode } from 'react';

import { cn } from '@/shared/utilis/cn';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return <section className={cn(className)}>{children}</section>;
}
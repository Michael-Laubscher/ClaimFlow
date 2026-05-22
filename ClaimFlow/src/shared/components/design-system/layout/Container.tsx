import type { ReactNode } from 'react';
import { cn } from '@/shared/utilis/cn';

type ContainerSize =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'full';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  fluid?: boolean;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-[1440px]',
  full: 'max-w-full',
};

export function Container({
  children,
  className,
  size = 'xl',
  fluid = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        !fluid && sizeMap[size],
        className
      )}
    >
      {children}
    </div>
  );
}
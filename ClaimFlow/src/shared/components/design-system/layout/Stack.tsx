import type { ReactNode } from 'react';
import { cn } from '@/shared/utilis/cn';

type Direction = 'row' | 'col';
type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify =
  | 'start'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'end';

type Gap =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

const directionMap: Record<Direction, string> = {
  row: 'flex-row',
  col: 'flex-col',
};

const alignMap: Record<Align, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyMap: Record<Justify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  end: 'justify-end',
};

const gapMap: Record<Gap, string> = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

interface StackProps {
  children: ReactNode;
  className?: string;

  direction?: Direction;
  align?: Align;
  justify?: Justify;
  gap?: Gap;

  wrap?: boolean;

  py?: string;
  px?: string;
}

export function Stack({
  children,
  className,

  direction = 'col',
  align,
  justify,
  gap = 'md',

  wrap = false,
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        directionMap[direction],
        gapMap[gap],

        align && alignMap[align],
        justify && justifyMap[justify],

        wrap && 'flex-wrap',

        className
      )}
    >
      {children}
    </div>
  );
}
import clsx from 'clsx';
import { Smile } from 'lucide-react';

import type { IconProps } from './icon.types';

export function SmileIcon({
  className,
  size = 20,
}: IconProps) {
  return (
    <Smile
      size={size}
      className={clsx(className)}
      aria-hidden="true"
    />
  );
}
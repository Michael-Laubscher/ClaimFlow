// app/router/route.utils.tsx

import {
  lazy,
  Suspense,
  type LazyExoticComponent,
  type ComponentType,
  type ReactNode,
} from 'react';

import Spinner from '@/features/shared-ui/components/sections/Spinner';

export function lazyPage<T extends ComponentType<any>>(
  importer: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return lazy(importer);
}

export function withSuspense(
  component: ReactNode
) {
  return (
    <Suspense fallback={<Spinner />}>
      {component}
    </Suspense>
  );
}
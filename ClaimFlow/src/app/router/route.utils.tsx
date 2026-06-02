import { lazy, Suspense, type ComponentType, type LazyExoticComponent, type ReactNode } from "react";

import Spinner from "@/shared/components/design-system/feedback/Spinner";

export function lazyPage<T extends ComponentType<object>>(importer: () => Promise<{ default: T }>): LazyExoticComponent<T> {
  return lazy(importer);
}

export function withSuspense(component: ReactNode) {
  return <Suspense fallback={<Spinner />}>{component}</Suspense>;
}

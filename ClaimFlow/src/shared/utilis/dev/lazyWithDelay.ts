import { lazy } from "react";
import type { ComponentType } from "react";

type Module<T> = { default: T };

export const lazyWithDelay = <T extends ComponentType<any>>(
  importer: () => Promise<Module<T>>,
  delay = 2000
) => {
  const isDev = import.meta.env.DEV;

  return lazy(() => {
    const load = () =>
      new Promise<Module<T>>((resolve) => {
        setTimeout(() => {
          importer().then(resolve);
        }, delay);
      });

    return isDev ? load() : importer();
  });
};
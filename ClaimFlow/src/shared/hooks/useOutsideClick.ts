import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(
  callback: () => void,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      const target = e.target as Node;

      if (!el) return;

      if (!el.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handler, true);

    return () => {
      document.removeEventListener("mousedown", handler, true);
    };
  }, [callback]);

  return ref;
}
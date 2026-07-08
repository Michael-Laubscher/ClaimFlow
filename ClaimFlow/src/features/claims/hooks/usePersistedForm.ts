import { useEffect } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export function usePersistedForm<T extends FieldValues>(
  methods: UseFormReturn<T>,
  storageKey: string,
) {
  const { watch, reset } = methods;

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);

    if (!saved) return;

    try {
      reset(JSON.parse(saved));
    } catch {
      sessionStorage.removeItem(storageKey);
    }
  }, [reset, storageKey]);

  useEffect(() => {
    const subscription = watch((values) => {
      sessionStorage.setItem(storageKey, JSON.stringify(values));
    });

    return () => subscription.unsubscribe();
  }, [watch, storageKey]);
}

export const CLAIM_STORAGE_KEYS = {
  step1: "claim-step1",
  step2: "claim-step2",
  step3: "claim-step3",
  step4: "claim-step4",
  step5: "claim-step5",
  step6: "claim-step6",
  step7: "claim-step7",
  step8: "claim-step8",
  documents: "claim-documents",
} as const;
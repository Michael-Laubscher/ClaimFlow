import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ClaimData } from "../types/ClaimData";

type ClaimWizardState = {
  claimData: ClaimData;

  setStep: <K extends keyof ClaimData>(step: K, data: Partial<ClaimData[K]>) => void;

  reset: () => void;
};

export const useClaimWizard = create<ClaimWizardState>()(
  persist(
    (set) => ({
      claimData: {
        step1: {},
        step2: {},
        driver: {},
        vehicle: {},
        thirdParty: {},
        evidence: {
          witnesses: [],
          evidenceNotes: "",
          attachments: [],
        },
        documents: {
          attachments: [],
        },
        assessment: {},
        declaration: {},
      },

      setStep: (step, data) =>
        set((state) => ({
          claimData: {
            ...state.claimData,
            [step]: {
              ...state.claimData[step],
              ...data,
            },
          },
        })),

      reset: () =>
        set({
          claimData: {
            step1: {},
            step2: {},
            driver: {},
            vehicle: {},
            thirdParty: {},
            evidence: {
              witnesses: [],
              evidenceNotes: "",
              attachments: [],
            },
            documents: {
              attachments: [],
            },
            assessment: {},
            declaration: {},
          },
        }),
    }),
    {
      name: "claim-wizard-storage",
    }
  )
);

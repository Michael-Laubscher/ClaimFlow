import { create } from "zustand";
import type { ClaimStep } from "../types/claim.types";

export interface ClaimStore {
  incidentCompleted: boolean;
  driverCompleted: boolean;
  vehicleCompleted: boolean;
  thirdPartyCompleted: boolean;
  evidenceCompleted: boolean;
  assessmentCompleted: boolean;
  declarationCompleted: boolean;
  documentsCompleted: boolean;
  submitted: boolean;

  completeStep: (step: ClaimStep) => void;

  canAccessStep: (step: ClaimStep) => boolean;
  getRedirectStep: () => ClaimStep;
}

export const useClaimStore = create<ClaimStore>((set, get) => ({
  incidentCompleted: false,
  driverCompleted: false,
  vehicleCompleted: false,
  thirdPartyCompleted: false,
  evidenceCompleted: false,
  assessmentCompleted: false,
  declarationCompleted: false,
  documentsCompleted: false,
  submitted: false,

  completeStep: (step) => {
    switch (step) {
      case "incident":
        set({ incidentCompleted: true });
        break;

      case "driver":
        set({ driverCompleted: true });
        break;

      case "vehicle":
        set({ vehicleCompleted: true });
        break;

      case "third-party":
        set({ thirdPartyCompleted: true });
        break;

      case "evidence":
        set({ evidenceCompleted: true });
        break;

      case "assessment":
        set({ assessmentCompleted: true });
        break;

      case "declaration":
        set({ declarationCompleted: true });
        break;

      case "documents":
        set({ documentsCompleted: true });
        break;

      case "success":
        set({ submitted: true });
        break;
    }
  },

  canAccessStep: (step) => {
    const state = get();

    switch (step) {
      case "incident":
        return true;

      case "driver":
        return state.incidentCompleted;

      case "vehicle":
        return state.driverCompleted;

      case "third-party":
        return state.vehicleCompleted;

      case "evidence":
        return state.thirdPartyCompleted;

      case "assessment":
        return state.evidenceCompleted;

      case "declaration":
        return state.assessmentCompleted;

      case "documents":
        return state.declarationCompleted;

      case "success":
        return state.submitted;

      default:
        return false;
    }
  },

  getRedirectStep: () => {
    const state = get();

    if (!state.incidentCompleted) return "incident";
    if (!state.driverCompleted) return "driver";
    if (!state.vehicleCompleted) return "vehicle";
    if (!state.thirdPartyCompleted) return "third-party";
    if (!state.evidenceCompleted) return "evidence";
    if (!state.assessmentCompleted) return "assessment";
    if (!state.declarationCompleted) return "declaration";
    if (!state.documentsCompleted) return "documents";

    return "success";
  },
}));

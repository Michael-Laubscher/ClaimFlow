import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import type { ClaimStep } from "../types/claim.types";
import { useClaimStore } from "../utils/ClaimStore";

interface ClaimStepGuardProps {
  step: ClaimStep;
  children: ReactNode;
}

export default function ClaimStepGuard({
  step,
  children,
}: ClaimStepGuardProps) {
  const { canAccessStep, getRedirectStep } = useClaimStore();

  if (!canAccessStep(step)) {
    return <Navigate to={`/claims/${getRedirectStep()}`} replace />;
  }

  return <>{children}</>;
}
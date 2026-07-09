import type { RouteObject } from "react-router-dom";

import ClaimDocumentsPage from "@/features/claims/pages/ClaimDocuments";
import ClaimIncidentPage from "@/features/claims/pages/ClaimIncident";

import ClaimDriverPage from "@/features/claims/pages/ClaimDriverPage";
import ClaimVehiclePage from "@/features/claims/pages/ClaimVehiclePage";
import ClaimThirdPartyPage from "@/features/claims/pages/ClaimThirdPartyPage";
import ClaimEvidencePage from "@/features/claims/pages/ClaimEvidencePage";
import ClaimAssessmentPage from "@/features/claims/pages/ClaimAssessmentPage";
import ClaimDeclarationPage from "@/features/claims/pages/ClaimDeclarationPage";
import ClaimStepGuard from "@/features/claims/components/ClaimStepGuard";

import { lazyPage, withSuspense } from "../route.utils";

// Lazy Pages
const ClaimsPage = lazyPage(() => import("@/features/claims/pages/ClaimsPage"));

const SuccessPage = lazyPage(() => import("@/features/claims/pages/SuccessPage"));

const GetQuotePage = lazyPage(() => import("@/features/claims/pages/GetQuote"));

// Routes
export const claimsRoutes: RouteObject[] = [
  {
    index: true,
    element: withSuspense(<ClaimsPage />),
  },

  {
    path: "incident",
    element: withSuspense(<ClaimIncidentPage />),
  },

  {
    path: "driver",
    element: withSuspense(
      <ClaimStepGuard step="driver">
        <ClaimDriverPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "vehicle",
    element: withSuspense(
      <ClaimStepGuard step="vehicle">
        <ClaimVehiclePage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "third-party",
    element: withSuspense(
      <ClaimStepGuard step="third-party">
        <ClaimThirdPartyPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "evidence",
    element: withSuspense(
      <ClaimStepGuard step="evidence">
        <ClaimEvidencePage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "assessment",
    element: withSuspense(
      <ClaimStepGuard step="assessment">
        <ClaimAssessmentPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "declaration",
    element: withSuspense(
      <ClaimStepGuard step="declaration">
        <ClaimDeclarationPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "documents",
    element: withSuspense(
      <ClaimStepGuard step="documents">
        <ClaimDocumentsPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "success",
    element: withSuspense(
      <ClaimStepGuard step="success">
        <SuccessPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "get-quote",
    element: withSuspense(<GetQuotePage />),
  },
];

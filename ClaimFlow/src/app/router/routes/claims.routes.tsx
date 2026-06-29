import type { RouteObject } from "react-router-dom";

import ClaimDocumentsPage from "@/features/claims/pages/ClaimDocuments";
import ClaimIncidentPage from "@/features/claims/pages/ClaimIncident";

import ClaimDriverPage from "@/features/claims/pages/ClaimDriverPage";
import ClaimVehiclePage from "@/features/claims/pages/ClaimVehiclePage";
import ClaimThirdPartyPage from "@/features/claims/pages/ClaimThirdPartyPage";
import ClaimEvidencePage from "@/features/claims/pages/ClaimEvidencePage";
import ClaimAssessmentPage from "@/features/claims/pages/ClaimAssessmentPage";
import ClaimDeclarationPage from "@/features/claims/pages/ClaimDeclarationPage";

import { lazyPage, withSuspense } from "../route.utils";

// Lazy Pages
const ClaimsPage = lazyPage(() =>
  import("@/features/claims/pages/ClaimsPage")
);

const SuccessPage = lazyPage(() =>
  import("@/features/claims/pages/SuccessPage")
);

const GetQuotePage = lazyPage(() =>
  import("@/features/claims/pages/GetQuote")
);

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
    element: withSuspense(<ClaimDriverPage />),
  },

  {
    path: "vehicle",
    element: withSuspense(<ClaimVehiclePage />),
  },

  {
    path: "third-party",
    element: withSuspense(<ClaimThirdPartyPage />),
  },

  {
    path: "evidence",
    element: withSuspense(<ClaimEvidencePage />),
  },

  {
    path: "assessment",
    element: withSuspense(<ClaimAssessmentPage />),
  },

  {
    path: "declaration",
    element: withSuspense(<ClaimDeclarationPage />),
  },

  {
    path: "documents",
    element: withSuspense(<ClaimDocumentsPage />),
  },

  {
    path: "success",
    element: withSuspense(<SuccessPage />),
  },

  {
    path: "get-quote",
    element: withSuspense(<GetQuotePage />),
  },
];